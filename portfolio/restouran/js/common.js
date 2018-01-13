jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.top-menu ul').slideToggle('active');

        e.preventDefault();
    });
    (function() {
        [].slice.call(document.querySelectorAll('.checkout')).forEach(function(el) {
            var openCtrl = el.querySelector('.checkout__button'),
                closeCtrls = el.querySelectorAll('.checkout__cancel');

            openCtrl.addEventListener('click', function(ev) {
                ev.preventDefault();
                classie.add(el, 'checkout--active');
            });

            [].slice.call(closeCtrls).forEach(function(ctrl) {
                ctrl.addEventListener('click', function() {
                    classie.remove(el, 'checkout--active');
                });
            });
        });
    })();

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
            function() {
                currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }
    $(document).ready(function() {
        setEqualHeight($(".our-menu > div"));
    });
    var hellopreloader = document.getElementById("hellopreloader_preload");

    function fadeOutnojquery(el) { el.style.opacity = 1;
        var interhellopreloader = setInterval(function() { el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) { clearInterval(interhellopreloader);
                hellopreloader.style.display = "none"; } }, 16); }
    window.onload = function() { setTimeout(function() { fadeOutnojquery(hellopreloader); }, 400); };
    $('a[data-toggle="tooltip"]').tooltip({
        container: ''
    });

    if ($('.count-item').text() > 0) {
      $('.checkout').addClass('bounce animated');
      
console.log($('.count-item').text());
    } else {
      $('.checkout').removeClass('bounce animated');
    };

});
