/* example-parallax.js */

$(document).ready(function() {

    // Detect browser-window resize
    $( window ).bind( "resize", function(){

        // Sync new height of columns
        $('.equalize > div').syncHeight();
    });

    $('.hero').parallax({
        imageSrc:       "img/nebula.jpg",
        position:       "top",
        bleed:          "10",
        naturalWidth:   "1440",
        naturalHeight:  "960",
        zIndex:         "1"
    });

    // Detect initial hero height
    $(".hero").css("height", $(window).height());
});