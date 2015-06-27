// dropdowns.js

/* Dropdown-Menü erstellen ---------------- */
$.fn.initDropdown = function() {
    var el = this;
    var nav = $('> ul', el);
    var trigger = $('> .dropdown-toggle', el);
    nav.hide();
    trigger.show();
    trigger.removeClass('active');
    trigger.click(function() {
        nav.fadeToggle(200);
        trigger.toggleClass('active');
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest(el).length) {
            if (nav.is(':visible') /*&& (el.hasClass('dropdown') || el.hasClass('dropup'))*/) {
                nav.fadeOut(300);
                trigger.removeClass('active');
            } else {
                console.log("if");
            }
        } else {
            console.log("closest");
        }
    });
    $("a", nav).on('click', function() {
        nav.fadeOut(300);
        trigger.removeClass('active');
    });
}

/* Dropdown-Menü löschen ------------------ */
$.fn.clearDropdown = function() {
    this.removeClass('dropdown');
    var nav = $('> ul', this);
    var trigger = $('> a', this);
    nav.fadeOut(50).fadeIn(50);
    trigger.hide();
    trigger.unbind('click');
}

$(document).ready(function() {

    $(".dropdown, .dropup").each(function() {
        $(this).initDropdown();
    });

});