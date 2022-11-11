$(function(){
    $('.title').bgSwitcher({
        images: ['../images/title1.png','../images/title2.png','../images/title3.png','../images/title4.png'],

        interval: 7000,
        loop: true
    });

    $(window).scroll(function () {
        var targetElement = $('.fuwa').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 300) {
            $('.fuwa').css('opacity', '1');
            $('.fuwa').css('transform','translateY(0)');
         }
    });

}); 



