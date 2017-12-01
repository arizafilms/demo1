var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');
var $wScroll = $(window).scrollTop();



$(window).scroll(function() {
    var $wScroll = $(window).scrollTop();
});

$menuBtn.click(function() {
    var $wWidth = $(window).width();
    if ($wWidth > 500 && $wWidth < 820) {
        $('.links-container').animate({
            'width': 'toggle'
        });
    } else {
        $('.links-container').slideToggle(300);
    }

});
$links.click(function() {
    var $wWidth = $(window).width();

    /* if($wWidth >500 && $wWidth <820){
        $('.links-container').animate({
            'width': 'toggle'
        });
    }else {
        $('.links-container').slideToggle(300);
    }*/

    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    });
    $('#audio-player-project').click(function() {
        this.href = $(this).attr('data-url');
        console.log($(this).attr('data-url'));
        window.open(this.href);
        return false;
    })

});
