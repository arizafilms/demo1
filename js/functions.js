var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll = $(window).scrollTop();
var $playerTop = $('#video').offset().top;
var $playerBottom = $('#me').offset().top;
var $navBar = $('.nav');
var $pages = $('.page');
var timer = null;
var $logo = $('.logo');
var didScroll = false;
var scrollSpeed = 650;



function fadeMenu() {
    var $wScroll = $(window).scrollTop();
    var $playerTop = $('#video').offset().top;
    var $playerBottom = $('#me').offset().top;

    if ($wScroll >= ($playerTop - 100) && $wScroll < ($playerBottom - 300)) {
        $navBar.css({
            'opacity': '.5'
        });
    } else {
        $navBar.css({
            'opacity': '0.9'
        });
    }
}


function snap() {

    $wScroll = $(window).scrollTop();
    didScroll = true;
    switch (didScroll) {
        case $wScroll < ($pages[1].offsetTop * 0.2):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 0
            }, scrollSpeed);
            tv.setVolume(0);
            didScroll = false;
            break;
        case $wScroll < ($pages[1].offsetTop * 1.4):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 1
            }, scrollSpeed);
            didScroll = false;
            tv.setVolume(0);

            break;
        case $wScroll < (($pages[1].offsetTop * 2.4)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 2
            }, scrollSpeed);
            didScroll = false;
            tv.setVolume(0);

            break;
        case $wScroll < (($pages[1].offsetTop * 3.4)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 3
            }, scrollSpeed);
            didScroll = false;
            tv.setVolume(0);

            break;
        case $wScroll < (($pages[1].offsetTop * 4.4)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 4
            }, scrollSpeed);
            didScroll = false;
            tv.setVolume(0);

            break;
        case $wScroll < (($pages[1].offsetTop * 5.4)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 5
            }, scrollSpeed);
            tv.playVideo();
            tv.setVolume(30);
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 6.35)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 6
            }, scrollSpeed);
            didScroll = false;
            tv.setVolume(0);

            break;
    }
}
$(window).on('scroll', function() {
    $wHeight = $(window).height();
    didScroll = true;
    $playerTop = $('#video').offset().top;
    $playerBottom = $('#me').offset().top;
    $wScroll = $(window).scrollTop();

    var fadeSpeed = (1 - ($wScroll / $wHeight) * 1.5);
    console.log(fadeSpeed);
    fadeMenu(); //fades the menu bar/icons when 
    //video player is in view

    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = this.setTimeout(snap, 950);

    //pull logo down on scroll from home page
    $logo.css({
        'transform': 'translateY(-' + ($wScroll * 0.15) + '%)',
        'opacity': fadeSpeed
    });

    if ($wScroll > $('#portfolio').offset().top * 0.05) {
        $('#lightgallery img').each(function(i) {
            setTimeout(function() {
                $('#lightgallery img').eq(i).animate({
                    'opacity': '1'
                }, 500);
            }, 250 * (i + 1));
        });
    }
});


$links.on('click', function() {

    href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, scrollSpeed);

    window.location.hash = href;
});
