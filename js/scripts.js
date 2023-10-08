$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // 50px from the top
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});



// -------------------------------------------------------------------



$(document).ready(function(){
    // Initiate the wowjs
    new WOW().init();

    
    $(".brands-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        nav: false,
        dots: false
    });
    
});