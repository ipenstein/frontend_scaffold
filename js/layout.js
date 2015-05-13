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

    //scrollTo
    $(".main-nav li a").each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            $(".main-nav li").removeClass("active");
            $(this).closest("li").addClass("active");
            var haref = $(this).attr('href');
            $(window).scrollTo($(haref), 500, {offset:-100});
        });
    });


    //scrollSpy
    var triggerName = {},
        triggerPos = {},
        i = 0;
    $(".main-nav li a").each(function(){
        var haref = $(this).attr('href');
        triggerName[haref] = $(haref);
        triggerPos[haref] = $(triggerName[haref]).offset().top - 300 ;
    });
    $(document).scroll(function() {
        for (i in triggerName) {
            if ($(window).scrollTop() >= triggerPos[i]) {
                console.log(i);
                $('.main-nav li').removeClass('active');
                $('#nav-' + i.substr(1)).addClass('active');
            }
        }
    });



});