$(document).ready(function () {
    const $header = $('header');
    const $sections = $('section');
    const $navItems = $('#nav_list .nav-item'); // menu principal
    const $mobileNavItems = $('#mobile_menu .nav-item a'); // menu mobile
    const headerHeight = $header.outerHeight();

    // Função para atualizar sombra do header
    function updateHeaderShadow(scrollPosition) {
        $header.css('box-shadow', scrollPosition <= 0 ? 'none' : '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    // Função para destacar nav-item ativo
    function highlightActiveSection() {
        const scrollPosition = $(window).scrollTop() + headerHeight + 1;

        $sections.each(function (i) {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                $navItems.removeClass('active').eq(i).addClass('active');
            }
        });
    }


// Evento de rolagem
// Evento de rolagem
$(window).on('scroll', function () {
    const scrollPosition = $(window).scrollTop();
    updateHeaderShadow(scrollPosition);
    highlightActiveSection();
});




    // Toggle menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // Scroll suave - menu principal e mobile
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const targetOffset = $(target).offset().top - headerHeight;

        $('html, body').stop().animate({
            scrollTop: targetOffset
        }, 800, 'swing');

        // Fecha o menu mobile após o clique
        if ($('#mobile_menu').hasClass('active')) {
            $('#mobile_menu').removeClass('active');
            $('#mobile_btn i').removeClass('fa-x');
        }
    });

    // ScrollReveal - animações
    const sr = ScrollReveal({
        duration: 600,
        distance: '10%',
        easing: 'ease-out',
        reset: false,
    });

    sr.reveal('#cta-one', { origin: 'left' });
    sr.reveal('.prato', { origin: 'left', interval: 200, viewFactor: 0.2 });
    sr.reveal('#cta-two', { origin: 'left', duration: 1000, viewFactor: 0.2 });
    sr.reveal('.btn-saiba-mais', { origin: 'bottom', distance: '30px', delay: 300 });
});