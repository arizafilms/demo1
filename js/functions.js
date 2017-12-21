var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll = $(window).scrollTop();
var $playerTop = $('#video').offset().top;
var $playerBottom = $('#me').offset().top;
var $navBar = $('.nav');
console.log($playerTop);
console.log($wScroll);



//$(document.body).on('touchmove', scroll); // for mobile
//$(window).on('wheel', scroll);

/*
$root.on('wheel', function(e) {
    e.preventDefault();
    var $wHeight = $(window).height();


    var $wScroll = $(window).scrollTop();
    var scrollDown = $wScroll + $wHeight;
    var scrollUp = $wScroll - $wHeight;


    if (e.originalEvent.wheelDelta < 0) {
        //scroll down
        setTimeout(function() {


            console.log('down');
            $root.animate({
                scrollTop: scrollDown
            }, 500);
        }, 100);


    } else {
        //scroll up
        setTimeout(function() {

            console.log('Up ');
            $root.animate({
                scrollTop: scrollUp
            }, 200);
        }, 100);

    }

    //prevent page fom scrolling
    return false;

});
*/
function fadeMenu() {
    var $wScroll = $(window).scrollTop();

    if ($wScroll >= $playerTop && $wScroll < $playerBottom - 25) {
        console.log('fade menu');
        $navBar.css({
            'opacity': '.5'
        });
    } else {
        $navBar.css({
            'opacity': '1'
        });
    }
}

$(window).on('scroll', fadeMenu);
$links.click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top


    }, 200, function() {
        console.log($(href).offset().top);
        window.location.hash = href;
    });
});
