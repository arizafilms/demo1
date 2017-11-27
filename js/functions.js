var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll=$(window).scrollTop();
var $leftPageTop = $('.left-title-page').offset().top;
var $rightPageTop =  $('.right-content').offset().top;

console.log($rightPageTop);

$(window).scroll(function(){
    var $wScroll=$(window).scrollTop();




    if($wScroll > $leftPageTop *.3){
        $('.page-name').addClass('is-showing');

    }else{
        $('.page-name').removeClass('is-showing');

    }


    if($wScroll > $rightPageTop*.5){
        $('.about-me').fadeIn(900);
    }else{
        $('.about-me').fadeOut(500);
    }


});

$menuBtn.click(function(){
    var $wWidth = $(window).width();
    if($wWidth >500 && $wWidth <820){
        $('.links-container').animate({
            'width': 'toggle'
        });
    }else {
        $('.links-container').slideToggle(300);
    }

});
$links.click(function() {
    var $wWidth = $(window).width();

    if($wWidth >500 && $wWidth <820){
        $('.links-container').animate({
            'width': 'toggle'
        });
    }else {
        $('.links-container').slideToggle(300);
    }

    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    },0, function () {
        window.location.hash = href;
    });
    $('#audio-player-project').click(function () {
        this.href = $(this).attr('data-url');
        console.log($(this).attr('data-url'));
        window.open(this.href);
        return false;
    })

});