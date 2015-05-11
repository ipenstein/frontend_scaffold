/* layout.js */

$(document).ready(function() {

    $("a").focus(function() {
        this.blur();
    });

    //$(".navigation li").rollover();

    // Sync height of columns
    $( window ).bind( "resize", function(){
        $('.equalize > div').syncHeight();
    });
    $('.equalize > div').syncHeight();

});