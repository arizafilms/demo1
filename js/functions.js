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
 var didScroll = true;
    switch (didScroll) {
        case $wScroll < ($pages[1].offsetTop * 0.5):
            $('.link:eq(0)').trigger('click');
            var didScroll = false;
            break;
        case $wScroll < ($pages[1].offsetTop * 1.45):
            $('.link:eq(1)').trigger('click');
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 2.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 2
            }, 1000);
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 3.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 3
            }, 1000);
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 4.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 4
            }, 1000);
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 5.45)):
            $('.link:eq(2)').trigger('click');
            var didScroll = false;
            break;
        case $wScroll < (($pages[1].offsetTop * 6.35)):
            $('.link:eq(3)').trigger('click');
            var didScroll = false;
            break;
            
    }
}
$(window).on('scroll', function() {
    $links.stop(true, false);
   var didScroll = true;
    $playerTop = $('#video').offset().top;
    $playerBottom = $('#me').offset().top;
    $wScroll = $(window).scrollTop();

    fadeMenu(); //fades the menu bar/icons when 
    //video player is in view

    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = this.setTimeout(snap, 400);

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
    $links.stop(true, false);
    href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000);

    window.location.hash = href;
});
