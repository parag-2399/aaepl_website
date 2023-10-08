$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // 50px from the top
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
