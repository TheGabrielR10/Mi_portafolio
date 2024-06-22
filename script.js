$(document).ready(function() {
    // Función para actualizar el estado del menú cuando el usuario se desplaza
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPosition = $(document).scrollTop();
        var windowCenter = scrollPosition + (windowHeight / 2);

        $('section').each(function() {
            var currentSection = $(this);
            var sectionId = currentSection.attr('id');
            var sectionTop = currentSection.offset().top;
            var sectionHeight = currentSection.outerHeight();
            var sectionCenter = sectionTop + (sectionHeight / 2);

            if (windowCenter >= sectionTop && windowCenter <= sectionTop + sectionHeight) {
                $('nav ul li a').removeClass('active');
                $('nav ul li a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
});
