/* утф-8 */

jQuery(document).ready(function($) {
    $('.tabs-prod .tabs-item').click(function() {
        e = $(this)
        $('.tabs-item').removeClass('active')
        e.addClass('active')

        $('.tabs-con-item').removeClass('active')
        $('.tabs-con-item[data-id=' + e.data('con') + ']').addClass('active')
    })

    $('.order-form .type-man').click(function() {
        if ($(this).hasClass('tab-entity')) {
            $('.bo-entity').slideDown(200)
        } else {
            $('.bo-entity').slideUp(200)
        }
    })

    /**
     * Модальное окно авторизации
     */
    $('#login [data-toggle=pill]').on('show.bs.tab', function(e) {
        if ($(e.target).attr('href') == '#m-forget-form') {
            $('#login .l-n-enter').removeClass('active')
            $('#login .login-head').hide()
        } else {
            $('#login .login-head').show()
        }
    })

    $('#login').on('show.bs.modal', function(e) {
        $('#login .l-n-enter').click()
    })

    /**
     * Количество товаров
     */
    $('.pr-i-count').change(function() {
        var count = $(this).val()
        var newPrice = $('.price-num').text() * count
        $('.modal span.total-price-num').text(newPrice)
        $('.modal input.total-price-num').val(newPrice)
    })

    $('#buyInOneClick').on('show.bs.modal', function(event) {
        var count = $('.count-order input').val()
        $(this).find('input.pr-i-count').val(count).change()
    })

    /**
     * Swiper - слайдер на главной
     */
    var homeSwiper = new Swiper('.swiper-container', {
        speed: 400,
        loop: true,
        lazy: true,
        autoHeight: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.slider-nav',
            bulletClass: 'slider-nav-item',
            bulletActiveClass: 'active',
            clickable: true,
        },
    })

    /**
     * Price range
     */
    if ($('#price-range').length) {
        var priceChange = function() {
            var thisPrice = price.getValue()

            $('.sb-price input.min-price').val(thisPrice[0])
            $('.sb-price input.max-price').val(thisPrice[1])
        }

        var price = $('#price-range')
            .slider({
                ticks_snap_bounds: 30
            })
            .on('slide', priceChange)
            .data('slider')
    }

    /**
     * Contact form
     */
    $('.ajax-form').submit(function(e) {
        e.preventDefault()

        var button = $(this).find('button')
        button.attr('disabled', true)

        var action = $(this).attr('action')
        var data = $(this).serialize()

        var successText = 'Заявка отправлена'
        var errorText = 'Что-то пошло не так, повторите попытку'

        var successStatus = $(this).data('success-status')
        if (!successStatus) successStatus = 'mail_sent'

        $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: data,
            })
            .done(function(data) {
                var message = data.message
                if (data.status == successStatus) {
                    var icon = 'success'
                    if (!message) message = successText
                } else {
                    var icon = 'error'
                    if (!message) message = errorText
                }

                Swal.fire({
                    icon: icon,
                    text: message,
                    showConfirmButton: false,
                })
            })
            .fail(function() {
                Swal.fire({
                    icon: 'error',
                    text: errorText,
                    showConfirmButton: false,
                })
            })
            .always(function() {
                button.attr('disabled', false)
            })
    })
})

//

document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
    function onResize() {
        const swiperSlider = document.querySelector('.swiper-slider')

        const wrapperMenu = document.querySelector('.wrapper-menu')

        const submenuActive = document.querySelector(
            '.submenu--active .submenu__items'
        )

        if (submenuActive) {
            if (window.outerWidth > 991) {
                submenuActive.style.width = swiperSlider.offsetWidth + 2 + 'px'
                submenuActive.style.left = wrapperMenu.offsetWidth + 29 + 'px'
            }

            const heightActivemenu = window
                .getComputedStyle(submenuActive, ':after')
                .getPropertyValue('height')

            if (heightActivemenu) {
                document
                    .querySelector('body')
                    .style.setProperty('--active-menu-height', heightActivemenu)
            }

            const widthActivemenu = window
                .getComputedStyle(submenuActive, ':after')
                .getPropertyValue('width')

            if (widthActivemenu) {
                document
                    .querySelector('body')
                    .style.setProperty('--active-menu-width', widthActivemenu)
            }
        }
    }

    onResize()

    window.addEventListener('resize', onResize)

    const menuTitle = document.querySelector('.menu-title')
    const menu = document.querySelector('.menu')
    const submenuLinkItems = document.querySelectorAll('.submenu')

    menuTitle.addEventListener('click', () => {
        menu.classList.toggle('menu--open')
        const activeSubmenu = document.querySelector('.submenu--active')
        if (activeSubmenu) {
            activeSubmenu.classList.remove('submenu--active')
        }
    })

    submenuLinkItems.forEach((item) => {
        function onSubmenuClick(event) {
            const submenu = event.target.closest('.submenu')

            if (submenu.classList.contains('submenu--active')) {
                submenu.classList.remove('submenu--active')
            } else {
                const activeSubmenu = document.querySelector('.submenu--active')

                if (activeSubmenu) {
                    activeSubmenu.classList.remove('submenu--active')
                }

                if (window.outerWidth < 992) {
                    submenu.scrollIntoView({
                        behavior: 'smooth'
                    })
                }

                submenu.classList.add('submenu--active')

                onResize()
            }
        }
        item.addEventListener('click', onSubmenuClick)
    })
}