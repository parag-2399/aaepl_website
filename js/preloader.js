$(window).on('load', function() {
    var preload = $('.preloader');
    if (preload.length > 0) {
        preload.delay(800).fadeOut('slow');
    }
});
