function UICarousel(options) {
    this.context = options.el;
    this.containerList = this.context.querySelector('.container-list')
    this.countItems = this.context.querySelector('.list-items').childElementCount;
    this.widthItem = this.context.querySelector('.list-items').firstElementChild.offsetWidth;
    this.totalWidthList = this.widthItem * this.countItems;
    this.widthContainer = this.containerList.offsetWidth;
    this.initPos = 0;
    this.withButtons = options.withButtons;
    this.autoplay = options.autoplay;
    this.withDots = options.withDots;
    this.intervalInfinite = null;
    this.dotSlideCurrent = 0;
    this.pointStarDrag = 0;
    this.init();
    this.bindEvents();
}
UICarousel.prototype.init = function () {
    if (this.autoplay) this.setIntervalInfinite();
    if (this.withDots) {
        this.setDots();
        this.updateDots();
    }
}
UICarousel.prototype.setDots = function () {
    var itemsVisible = Math.floor(this.widthContainer / this.widthItem),
        countDots = (this.widthItem > this.widthContainer) ? this.countItems : Math.ceil(this.countItems / itemsVisible),
        containerDots = document.createElement('div'),
        listDots = document.createElement('ul');

    containerDots.id = 'container-dots';
    containerDots.classList.add('container-dots');

    for (var i = 0; i < countDots; i++) {
        var tagDot = document.createElement('li');
        tagDot.classList.add('dot-slider');
        tagDot.setAttribute('data-index', i)
        listDots.appendChild(tagDot)
    }
    containerDots.appendChild(listDots)
    this.context.appendChild(containerDots)
}
UICarousel.prototype.updateDots = function () {
    var dots = this.context.querySelectorAll('#container-dots ul li');
    dots.forEach(function (item) {
        item.classList.remove('active');
    });
    dots.item(this.dotSlideCurrent).classList.add('active');
}
UICarousel.prototype.bindEvents = function () {
    if (this.withButtons) {
        var btnLeft = this.context.querySelector('.btn-slider-left'),
            btnRight = this.context.querySelector('.btn-slider-right');
        btnLeft.addEventListener('click', this.moveLeft.bind(this));
        btnRight.addEventListener('click', this.moveRight.bind(this));
    }
    if (this.withDots) {
        var self = this,
            dots = this.context.querySelectorAll('#container-dots ul li');
        dots.forEach( function (item) {
            item.addEventListener('click', function (evt) {
                if (Array.from(evt.target.classList).indexOf('active') == -1) {
                    var ind = evt.target.dataset.index,
                        totalSlidesJump = ind - self.dotSlideCurrent,
                        newPos;
                    console.log(totalSlidesJump, self.initPos, self.containerList.offsetWidth)
                    if (ind > self.dotSlideCurrent) newPos = self.initPos - (self.containerList.offsetWidth * totalSlidesJump);
                    if (ind < self.dotSlideCurrent) newPos = (self.initPos + self.getMinDistance()) * totalSlidesJump;
                    self.dotSlideCurrent = parseInt(ind);
                    self.move(newPos);
                    clearInterval(self.intervalSlider);
                    self.setIntervalInfinite();
                }
            })
        })
    }
    var self = this,
        itemsSlide = this.containerList.querySelectorAll('.list-items .item-note');

    itemsSlide.forEach( function (item) {
        item.addEventListener('mousedown', initDrag);
        item.addEventListener('mousemove', moveDrag.bind(self))
        item.addEventListener('mouseup', endDrag);
    });
    var touchItem = false,
        pointStarDrag = 0,
        isMove = false;
    function initDrag(evt) {
        touchItem = true;
        pointStarDrag = evt.clientX;
        //clearInterval(self.intervalSlider)
    }
    function endDrag(evt) {
        touchItem = false;
        if (!isMove) {
            var itemSel = evt.target.offsetParent;
            itemSel.style.transform = 'translateX(0px)';
        }
        //self.setIntervalInfinite();
    }
    function moveDrag(evt) {
        if (touchItem) {
            var itemSel = evt.target.offsetParent,
                distDrive = evt.clientX - pointStarDrag;
            if (evt.clientX > pointStarDrag) {
                itemSel.style.transform = 'translateX(' + distDrive + 'px)';
                if (distDrive > 100 ) {
                    isMove = true;
                    this.moveRight();
                }
            }
            if (evt.clientX < pointStarDrag) {
                itemSel.style.transform = 'translateX(' + distDrive + 'px)';
                if (distDrive < -100 ) {
                    isMove = true;
                }
            }
        }
    }
}
UICarousel.prototype.setIntervalInfinite = function () {
    var self = this;
    this.intervalSlider = setInterval( function () {
        self.moveRight();
    }, 4000)
}
UICarousel.prototype.getMinDistance = function () {
    var numElementsVisible = (this.widthItem > this.widthContainer) ? 1 : Math.floor(this.widthContainer / this.widthItem);
    return numElementsVisible * this.widthItem;
}
UICarousel.prototype.moveLeft = function (evt) {
    evt.preventDefault();
    var distMinDisplacement = this.getMinDistance(),
        newPos = this.initPos + distMinDisplacement;

    if (this.initPos <= 0 && Math.abs(this.initPos) < this.containerList.offsetWidth) newPos = 0;
    this.initPos = newPos;
    this.move(newPos);
}
UICarousel.prototype.moveRight = function (evt) {
    if (evt) evt.preventDefault();
    var distMinDisplacement = this.getMinDistance(),
        newPos = this.initPos - distMinDisplacement,
        restWidthList = this.totalWidthList - Math.abs(newPos),
        countDots = this.context.querySelectorAll('#container-dots ul li').length;

    this.dotSlideCurrent = (this.dotSlideCurrent == countDots - 1) ? 0 : this.dotSlideCurrent + 1;
    if (restWidthList == 0) newPos = this.dotSlideCurrent = 0;
    console.log('valor in: ' + newPos)
    this.move(newPos);
}
UICarousel.prototype.move = function (valX) {
    console.log(valX)
    this.initPos = valX;
    var containerList = this.context.querySelector('.list-items');
    containerList.style.cssText = 'transform: translate3d(' + valX + 'px, 0px, 0px)';
    this.updateDots();
}

export default UICarousel;