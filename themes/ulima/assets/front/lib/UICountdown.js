function UICountdown(options) {
    this.context = options.el;
    this.endTime = +this.dateFromTimestamp(options.deadline);
    this.timeRemainingel = '';
    this.countdown();
}

UICountdown.prototype.countdown = function () {
    var self = this;
    function getTimeRemaining() {
        var t = self.endTime - new Date();
        self.timeRemaining = {
            total: t,
            days: Math.floor(t / (1000 * 60 * 60 * 24)),
            hours: Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((t / 1000 / 60) % 60),
            seconds: Math.floor((t / 1000) % 60)
        }
    }

    function updateClock() {
        getTimeRemaining();

        self.context.querySelector('.days').innerHTML = (`0${self.timeRemaining.days}`).slice(-2);
        self.context.querySelector('.hours').innerHTML = (`0${self.timeRemaining.hours}`).slice(-2);
        self.context.querySelector('.minutes').innerHTML = (`0${self.timeRemaining.minutes}`).slice(-2);
        if (self.context.querySelector('.seconds')) self.context.querySelector('.seconds').innerHTML = (`0${self.timeRemaining.seconds}`).slice(-2);

        if (self.timeRemaining.total <= 0) {
            clearInterval(timeinterval);
            self.context.querySelector('.days').innerHTML = '00';
            self.context.querySelector('.hours').innerHTML = '00';
            self.context.querySelector('.minutes').innerHTML = '00';
            if (self.context.querySelector('.seconds')) self.context.querySelector('.seconds').innerHTML = '00';
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

UICountdown.prototype.dateFromTimestamp = function (formatDate) {
    var t = formatDate.split(/[- :]/);
    return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
}

export default UICountdown;