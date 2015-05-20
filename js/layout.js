/* layout.js */

$(document).ready(function() {

    $("a").focus(function() {
        this.blur();
    });

    //$(".navigation li").rollover();

    $('#preloader').fadeOut(
        'slow',
        function(){
            $(this).remove();
        }
    );

});