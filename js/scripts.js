$(document).ready(function() {
    // Initial check
    checkNavbarPosition();

    // Check on scroll
    $(document).scroll(checkNavbarPosition);

    function checkNavbarPosition() {
        var y = $(this).scrollTop();
        if (y > 50) {  // Adjust this value if needed. 50 is the assumed height of your navbar.
            $('body').removeClass('at-top');
        } else {
            $('body').addClass('at-top');
        }
    }
});
