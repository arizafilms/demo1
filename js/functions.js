var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll = $(window).scrollTop();

/*
setTimeout(function() {

    $root.on('wheel touchmove', function(e) {
        var $wHeight = $(window).height();


        var $wScroll = $(window).scrollTop();
        var scrollDown = $wScroll + $wHeight;
        var scrollUp = $wScroll - $wHeight;


        if (e.originalEvent.wheelDelta < 0) {
            //scroll down
            setTimeout(function() {


                console.log('Down');
                $root.animate({
                    scrollTop: scrollDown
                }, 500);
            }, 200);


        } else {
            //scroll up
            setTimeout(function() {

                console.log('Up');
                $root.animate({
                    scrollTop: scrollUp
                }, 200);
            }, 200);

        }

        //prevent page fom scrolling
        return false;
    });
}, 100);

*/
$links.click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top


    }, 200, function() {
        console.log($(href).offset().top);
        window.location.hash = href;
    });
});
