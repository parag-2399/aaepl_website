$(document).ready(function(){
    $('.landing-page').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        fade:true,
        autoplay:true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
});
