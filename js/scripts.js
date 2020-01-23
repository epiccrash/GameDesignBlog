$(document).ready(function() {

	$(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        var headerOffset = $("#about").offset().top;

        if (windowTop >= headerOffset) {
            //$("p").fadeTo('slow', 1);
        }
    });
});