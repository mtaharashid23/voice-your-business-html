AOS.init({
    duration: 1500,
    disable: "mobile",
});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const dropdownIcons = document.querySelectorAll('.fa-chevron-down');

    dropdownToggles.forEach((toggle, index) => {
        const menu = dropdownMenus[index];
        const icon = dropdownIcons[index];

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                icon.style.transform = 'rotate(0deg)';
            } else {
                dropdownMenus.forEach(m => m.classList.remove('show'));
                dropdownIcons.forEach(i => i.style.transform = 'rotate(0deg)');

                menu.classList.add('show');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
let isSticky = false;

window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    const logo = document.querySelector('.main-header .logo');
    const scrollY = window.scrollY;

    if (scrollY > 50 && !isSticky) {
        header.classList.add('sticky-header');
        logo.src = 'assets/images/logo.png';
        isSticky = true;
    } else if (scrollY <= 50 && isSticky) {
        header.classList.remove('sticky-header');
        logo.src = 'assets/images/logo-white.png';
        isSticky = false;
    }
});

/* --------------------------------------------------
 * counter
 * --------------------------------------------------*/

$(window).on('scroll', function () {
    $('.ot-counter').each(function () {
        var pos_y = $(this).offset().top - window.innerHeight;
        var $this = $(this).find('.num'),
            countTo = $this.attr('data-to'),
            during = parseInt($this.attr('data-time')),
            topOfWindow = $(window).scrollTop();

        if (pos_y < topOfWindow) {
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: during,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        }
    });
});

/* Particles */
$('.particles-js').each(function () {
    var s_id = $(this).data('id'),
        s_color = $(this).data('color'),
        s_color = s_color.replace(/\s/g, ''),
        e = $('<div class="onum-particles"></div>');
    $(this).append(e);
    e.attr('id', 'particles-' + s_id);

    var id = 'particles-' + s_id;
    var color_type = 'random_colors';
    var color = s_color;
    var color_line = '#fff';
    var number = 15;
    var lines = false;
    if (color_type == 'random_colors') {
        color = color.split(',');
        color_line = color[0]
    }

    particlesJS(
        id, {
            "particles": {
                "number": {
                    "value": number,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": color
                },
                "shape": {
                    "type": 'circle',
                    "polygon": {
                        "nb_sides": 6
                    },
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 30,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": color_line,
                    "opacity": 0,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": 'grab'
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 3.2,
                        "duration": 20,
                        "opacity": 1,
                        "speed": 30
                    },
                    "repulse": {
                        "distance": 80,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    var update;
    update = function () {
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
});

/* --------------------------------------------------
 * tabs
 * --------------------------------------------------*/
$(window).on('load', function () {

    $('.ot-tabs').each(function () {
        $(this).find('.tabs-heading li').first().addClass('current');
        $(this).find('.tab-content').first().addClass('current');
    });

    $('.tabs-heading li').on('click', function () {
        var tab_id = $(this).attr('data-tab');
        $(this).siblings().removeClass('current');
        $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
});

/* --------------------------------------------------
 * accordions
 * --------------------------------------------------*/
$('.ot-accordions').each(function () {
    var allPanels = $(this).find('.acc-content');
    $(this).find('.acc-toggle').on('click', function () {

        var $this = $(this),
            $target = $this.next();

        if (!$target.hasClass('active')) {
            allPanels.removeClass('active').slideUp(300);
            allPanels.parent().removeClass('current');
            $target.addClass('active').slideDown(300);
            $target.parent().addClass('current');
        }

        return false;
    });
    $(this).find('.acc-toggle:first').trigger('click');
});


/* --------------------------------------------------
 * social team
 * --------------------------------------------------*/
$('.team-social > span').on('click', function () {
    $(this).parent().toggleClass('active');
});

/* --------------------------------------------------
 * Client logo
 * --------------------------------------------------*/
$('.client_logo_slider').each(function () {
    $(this).slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 1500,
        dots: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
});