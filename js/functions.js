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

console.log($playerTop);
console.log($wScroll);
$('.link:eq(0)').trigger('click');


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
function fadeMenu($wScroll) {

    if ($wScroll >= ($playerTop - 20) && $wScroll < ($playerBottom - 100)) {
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

function snap($wScroll, e) {
    console.log($wScroll);
    e.preventDefault();
    switch (true) {
        case $wScroll < ($pages[1].offsetTop * 0.35):
            $('.link:eq(0)').trigger('click');
            tv.mute();
            console.log('home');
            break;
        case $wScroll < (($pages[1].offsetTop * 1.45)):
            $('.link:eq(1)').trigger('click');
            tv.mute();
            console.log('photo');
            break;
        case $wScroll < (($pages[1].offsetTop * 2.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 2
            }, 200);
            tv.mute();
            console.log('photo2');
            break;
        case $wScroll < (($pages[1].offsetTop * 3.45)):
            $root.animate({
                scrollTop: $pages[1].offsetTop * 3
            }, 200);
            tv.mute();
            console.log('photo3');
            break;
        case $wScroll < (($pages[1].offsetTop * 4.45)):
            $('.link:eq(2)').trigger('click');
            tv.unMute();
            tv.play();
            console.log('video');
            break;
        case $wScroll < (($pages[1].offsetTop * 5.35)):
            $('.link:eq(3)').trigger('click');
            tv.mute();
            console.log('me');
            break;
    }

    /*if ($wScroll > 0 && $wScroll < $pages[1].offsetTop){
        
            console.log('hello');
            $('.link:eq(0)').trigger('click');
           console.log($pages[0].offsetTop);
        }
    else if ($wScroll > $pages[1].offsetTop && $wScroll < $pages[2]){
            console.log('hello2');
            $('.link:eq(1)').trigger('click');
           
    }
    else if ($wScroll > $pages[2].offsetTop && $wScroll < $pages[3]){
        console.log('hello3');
            $('.link:eq(2)').trigger('click');
            
        }*/
}
$(window).on('scroll', function(e) {
    fadeMenu($wScroll);
    $wScroll = $(window).scrollTop();
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        snap($wScroll, e);
    }, 200);
});


$links.click(function() {
    href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top


    }, 200, function() {
        window.location.hash = href;
    });
});
