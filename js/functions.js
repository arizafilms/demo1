var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll = $(window).scrollTop();

/*$(window).scroll(function() {
    var $wScroll = $(window).scrollTop();
});*/

$links.click(function() {
    var $wWidth = $(window).width();

    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top


    }, 500, function() {
        console.log($(href).offset().top);
        window.location.hash = href;
    });
});