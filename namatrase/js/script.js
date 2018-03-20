
var mql = window.matchMedia('all and (max-width: 1199px)');
if (mql.matches) {
    // размер окна 479px или меньше
} else {
     $(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        $(window).on("scroll", function() {
            var fromTop = $(document).scrollTop();
            $("body").toggleClass("down", (fromTop > 70));
        });
    });
}