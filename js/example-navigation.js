// example-navigation

$(document).ready(function() {
    //$(".main-nav").initDropdown();

    $(".open-panel").click(function(){
        $("html").addClass("openNav");
    });

    $(".close-panel, .hero, .content").click(function(){
        $("html").removeClass("openNav");
    });
});