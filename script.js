function Button(text) {
    this.text = text || 'say Hello to my little friend';
}

Button.prototype = {
    create: function () {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(self.text);
        });
        this.$element.appendTo($('body'));
    }

};


var btn1 = new Button();
var btn2 = new Button('hi!');


btn1.create();
btn2.create();