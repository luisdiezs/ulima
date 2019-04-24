function UIAccordion (context) {
    this.context = context.el;
    this.viewOneAtTheTime = (context.viewOneAtTheTime) ? context.viewOneAtTheTime : false;
    this.allCloser = (context.allCloser) ? context.allCloser : false;
    this.withButtons = (context.withButtons) ? context.withButtons : false;
    this.listItems = this.context.querySelectorAll('.ui-accordion-item')
    this.init();
    this.bindEvents();
}
UIAccordion.prototype.init = function () {
    var self = this;
    this.listItems.forEach( function (item, index) {
        if (self.withButtons) {
            var tagBtn = document.createElement('span');
            tagBtn.innerHTML = '&#8735;';
            item.querySelector('.ui-accordion-head').appendChild(tagBtn);
        }
        if (self.allCloser) item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');
        else {
            if (index != 0) item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');
            else {
                item.querySelector('.ui-accordion-head span').classList.add('active-acc')
            }
        }
    });
}
UIAccordion.prototype.bindEvents = function() {
    var self = this;
    this.listItems.forEach( function(item) {
        var itemHead = item.querySelector('.ui-accordion-head')
        itemHead.addEventListener('click', self.toogleItem.bind(self));
    });
}
UIAccordion.prototype.toogleItem = function(evt) {
    evt.preventDefault();
    var content = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-content') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-content');

    if (Array.from(content.classList).indexOf('ui-accordion-item-collapse') == -1) {
        content.classList.add('ui-accordion-item-collapse');
        content.classList.remove('ui-accordion-active')
        var h = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-head span') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-head span')
        h.classList.remove('active-acc');
    } else {
        if (this.viewOneAtTheTime) {
            var self = this;
            this.listItems.forEach( function (item) {
                item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');
                item.querySelector('.ui-accordion-content').classList.remove('ui-accordion-active');
                item.querySelector('.ui-accordion-head span').classList.remove('active-acc')
            });
        }
        content.classList.remove('ui-accordion-item-collapse');
        content.classList.add('ui-accordion-active')
        var h = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-head span') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-head span')
        h.classList.add('active-acc')
    }
}

export default UIAccordion