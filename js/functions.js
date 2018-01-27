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
        case $wScroll < ($pages[1].offsetTop * 0.5):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 2
            }, 800);
            
            break;
        case $wScroll < ($pages[1].offsetTop * 1.45):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 1
            }, 800);
            didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 2.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 2
            }, 800);
            didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 3.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 3
            }, 800);
            didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 4.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 4
            }, 800);
            didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 5.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 5
            }, 800);
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 6.35)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 6
            }, 800);
            didScroll = false;
            break;
    }
}
$(window).on('scroll', function() {
    
    didScroll = true;
    $playerTop = $('#video').offset().top;
    $playerBottom = $('#me').offset().top;
    $wScroll = $(window).scrollTop();

    fadeMenu(); //fades the menu bar/icons when 
    //video player is in view

    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = this.setTimeout(snap, 900);

    $logo.css({
        'transform': 'translate( ' + 0 + '%, ' + ($wScroll * 0.19) + '%)'
    });

    if ($wScroll > $('#portfolio').offset().top * 0.05) {
        $('#lightgallery img').each(function(i) {
            setTimeout(function() {
                $('#lightgallery img').eq(i).animate({
                    'opacity': '1'
                }, 1000);
            }, 950 * (i + 1));
        });
    }
});


$links.on('click', function() {
    
    href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000);

    window.location.hash = href;
});
