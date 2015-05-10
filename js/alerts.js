// alerts.js

$(document).ready (function () {

    $(".alert-message").each(function() {
        var msg = this;
        var btn = $(".close-icon", msg);
        btn.click(function() {
            $(msg).slideUp();
        });
    });

});