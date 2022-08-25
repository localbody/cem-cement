$(document).ready(function() {

    function validateEmail(email) {
        var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    }

    function validatePhone(phone) {
        var pattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return pattern.test(phone);
    }

    $(".s-navbar-nav .current-menu-ancestor > a, .s-navbar-nav .current-menu-parent > a").attr("aria-expanded", "true");
    $(".s-navbar-nav .current-menu-ancestor > .collapse, .s-navbar-nav .current-menu-parent > .collapse").addClass("show");

    $('body').on('click', '.woocommerce-checkout div[data-toggle=pill]', function(e) {
        $('.woocommerce-checkout input[name=urlico]').val($(this).data('type'));
    });

    $('body').on('click', '.woocommerce-checkout .submit-checkout', function(e) {
        var Checkout = $('.woocommerce-checkout')
        $(Checkout).find('input').removeClass('wpcf7-not-valid ');
        var SummitTrue = 0;
        var p1 = 0;
        var p2 = 0;
        var p3 = 0;
        var p4 = 0;
        var p5 = 0;
        var p6 = 0;
        var p7 = 0;
        if ($(Checkout).find('input[name=billing_first_name]').val() == '') {
            p1 = 1;
            $(Checkout).find('input[name=billing_first_name]').addClass('wpcf7-not-valid');
        }
        if ($(Checkout).find('input[name=billing_last_name]').val() == '') {
            p2 = 1;
            $(Checkout).find('input[name=billing_last_name]').addClass('wpcf7-not-valid');
        }
        if ($(Checkout).find('input[name=billing_address_1]').val() == '') {
            p3 = 1;
            $(Checkout).find('input[name=billing_address_1]').addClass('wpcf7-not-valid');
        }
        if (!validatePhone($(Checkout).find('input[name=billing_phone]').val())) {
            p4 = 1;
            $(Checkout).find('input[name=billing_phone]').addClass('wpcf7-not-valid ');
        }
        if (!validateEmail($(Checkout).find('input[name=billing_email]').val())) {
            p5 = 1;
            $(Checkout).find('input[name=billing_email]').addClass('wpcf7-not-valid ');
        }
        if ($(Checkout).find('input[name=urlico]').val() == 2) {
            if ($(Checkout).find('input[name=my_field_organiz]').val() == '') {
                p6 = 1;
                $(Checkout).find('input[name=my_field_organiz]').addClass('wpcf7-not-valid ');
            }
            if ($(Checkout).find('input[name=my_field_inn]').val() == '') {
                p7 = 1;
                $(Checkout).find('input[name=my_field_inn]').addClass('wpcf7-not-valid ');
            }
            if (p1 != 1 && p2 != 1 && p3 != 1 && p4 != 1 && p5 != 1 && p6 != 1 && p7 != 1) {
                if ($(Checkout).find('input[name=agree]').prop('checked')) {
                    SummitTrue = 1;
                } else {
                    alert('Вы должны согласится с политикой конфиденциальности');
                    e.preventDefault();
                }
            }
        } else {
            if (p1 != 1 && p2 != 1 && p3 != 1 && p4 != 1 && p5 != 1) {
                if ($(Checkout).find('input[name=agree]').prop('checked')) {
                    SummitTrue = 1;
                } else {
                    alert('Вы должны согласится с политикой конфиденциальности');
                    e.preventDefault();
                }
            }
        }
        if (SummitTrue == 1) {
            $('.woocommerce-checkout').submit();
            e.preventDefault();
        }
    });

    $('body').on('blur', '.basket-content input[type=number]', function(e) {
        e.preventDefault();
        var idp = $(this).parent().data('idp');
        var qyt = $(this).parent().find('input').val();
        var nonce = $(this).parent().data('nonce');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                'action': 'qty_product_cart',
                'idp': idp,
                'qyt': qyt,
                'nonce': nonce
            },
            success: function(datas) {
                if (datas == 'OK') {
                    $("[name='update_cart']").prop("disabled", false);
                    $("[name='update_cart']").trigger("click");
                    $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        data: {
                            'action': 'update_mini_cart'
                        },
                        success: function(response) {
                            $('#basket span').html(response);
                        }
                    });
                }
            },
            error: function(xhr, str) {
                alert('Error: ' + xhr.responseCode);
            }
        });
    });

    $('body').on('click', '.basket-content .remove', function(e) {
        e.preventDefault();
        var idp = $(this).data('idp');
        var nonce = $(this).data('nonce');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                'action': 'remove_product_cart',
                'idp': idp,
                'nonce': nonce
            },
            success: function(datas) {
                if (datas == 'OK') {
                    $("[name='update_cart']").removeAttr("disabled");
                    $("[name='update_cart']").trigger("click");
                    $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        data: {
                            'action': 'update_mini_cart'
                        },
                        success: function(response) {
                            $('#basket span').html(response);
                        }
                    });
                }
            },
            error: function(xhr, str) {
                alert('Error: ' + xhr.responseCode);
            }
        });
    });

    $('body').on('submit', '.add-cart', function(e) {
        e.preventDefault();
        var nonce = $(this).find('input[name=nonce]').val();
        var idp = $(this).find('input[name=idp]').val();
        var qyt = $(this).find('input[name=qyt]').val();
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                'action': 'add_cart',
                'idp': idp,
                'qyt': qyt,
                'nonce': nonce
            },
            success: function(datas) {
                if (datas == 'OK') {
                    var icon = 'success';
                    var message = 'Добавлено в корзину';
                    Swal.fire({
                        icon: icon,
                        text: message,
                        showConfirmButton: false
                    });
                    $('.add-cart input[name=qyt]').val(1);
                    $('.add-cart button span').text('Уже в корзине');
                    $('.add-cart').addClass('not-submit');
                    $('.not-submit').removeClass('add-cart');
                    $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        data: {
                            'action': 'update_mini_cart'
                        },
                        success: function(response) {
                            $('#basket span').html(response);
                        }
                    });
                } else {
                    var icon = 'error';
                    var message = 'Что-то пошло не так, повторите попытку';
                    Swal.fire({
                        icon: icon,
                        text: message,
                        showConfirmButton: false
                    });
                }
            },
            error: function(xhr, str) {
                alert('Error: ' + xhr.responseCode);
            }
        });
    });

    $('body').on('submit', '.quick-order', function(e) {
        e.preventDefault();
        $(this).find('input').removeClass('wpcf7-not-valid ');
        var send = 0;
        var nonce = $(this).find('input[name=nonce]').val();
        var idp = $(this).find('input[name=idp]').val();
        var imia = $(this).find('input[name=imia]').val();
        var phone = $(this).find('input[name=phone]').val();
        var email = $(this).find('input[name=email]').val();
        if (imia == '') {
            $(this).find('input[name=imia]').addClass('wpcf7-not-valid ');
        }
        if (!validatePhone(phone)) {
            $(this).find('input[name=phone]').addClass('wpcf7-not-valid');
        }
        if (!validateEmail(email)) {
            $(this).find('input[name=email]').addClass('wpcf7-not-valid');
        }
        if (imia != '' && validatePhone(phone) && validateEmail(email)) {
            if ($('input[name=agree]').prop('checked')) {
                send = 1;
            } else {
                alert('Вы должны согласится с политикой конфиденциальности');
            }
        }
        var qyt = $(this).find('input[name=qyt]').val();
        if (send == 1) {
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    'action': 'quick_order',
                    'idp': idp,
                    'qyt': qyt,
                    'nonce': nonce,
                    'imia': imia,
                    'phone': phone,
                    'email': email
                },
                success: function(datas) {
                    if (datas == 'OK') {
                        $('.quick-order input:not(.nonce)').val('');
                        $('#buyInOneClick').modal('hide');
                        var icon = 'success';
                        var message = 'Заявка отправлена';
                        Swal.fire({
                            icon: icon,
                            text: message,
                            showConfirmButton: false
                        });
                    } else {
                        var icon = 'error';
                        var message = 'Что-то пошло не так, повторите попытку';
                        Swal.fire({
                            icon: icon,
                            text: message,
                            showConfirmButton: false
                        });
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        }
    });

    $('body').on('click', '.rating.add .star', function(e) {
        e.preventDefault();
        var rating = $(this);
        var nonce = $(this).parent().data('nonce');
        var idt = $(this).parent().data('idt');
        var r = $(this).data('r');
        $.ajax({
            url: ajaxurl,
            type: 'post',
            data: {
                'action': 'update_rating',
                'idt': idt,
                'r': r,
                'nonce': nonce
            },
            success: function(datas) {
                if (datas == 'OK') {
                    $(rating).parent().removeClass('add');
                    $(rating).parent().addClass('off');
                }
            },
            error: function(xhr, str) {
                alert('Error: ' + xhr.responseCode);
            }
        });
    });

    $('body').on('submit', '#m-login-form', function(e) {
        e.preventDefault();
        $(this).find('input').removeClass('wpcf7-not-valid');
        $(this).find('.error-text-form').remove();
        var loginIn = 1;
        if ($(this).find('[name=email]').val() == '') {
            $(this).find('[name=password]').addClass('wpcf7-not-valid');
            loginIn = 0;
        }
        if (!validateEmail($(this).find('[name=email]').val())) {
            $(this).find('[name=email]').addClass('wpcf7-not-valid');
            loginIn = 0;
        }
        var email = $(this).find('[name=email]').val();
        var password = $(this).find('[name=password]').val();
        var nonce = $(this).find('[name=nonce]').val();
        var url = $(this).attr('action');
        if (loginIn == 1) {
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    'action': 'login_form',
                    'email': email,
                    'password': password,
                    'nonce': nonce
                },
                success: function(datas) {
                    if (datas == 'OK') {
                        document.location.href = url;
                    } else {
                        $('#m-login-form button').after('<div class="error-text-form">Неверный email или пароль</div>');
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        }
    });

    $('body').on('submit', '#m-reg-form', function(e) {
        e.preventDefault();
        var regIn = 1;
        $(this).find('input').removeClass('wpcf7-not-valid');
        $(this).find('.error-text-form').remove();
        $(this).find('input').each(function(i, elem) {
            if ($(this).val() == '') {
                $(this).addClass('wpcf7-not-valid');
                regIn = 0;
            }
        });
        var email = $(this).find('[name=email]').val();
        var phone = $(this).find('[name=phone]').val();
        var first_name = $(this).find('[name=first_name]').val();
        var last_name = $(this).find('[name=last_name]').val();
        var password = $(this).find('[name=password]').val();
        var r_password = $(this).find('[name=r_password]').val();
        var nonce = $(this).find('[name=nonce]').val();
        if (!validatePhone(phone)) {
            regIn = 0;
            $(this).find('[name=phone]').addClass('wpcf7-not-valid');
        }
        if (!validateEmail(email)) {
            regIn = 0;
            $(this).find('[name=email]').addClass('wpcf7-not-valid');
        }
        if (password != r_password) {
            regIn = 0;
            $(this).find('[name=r_password]').addClass('wpcf7-not-valid');
        }
        if (regIn == 1 && !$(this).find('input[name=agree]').prop('checked')) {
            alert('Вы должны согласится с политикой конфиденциальности');
            regIn = 0;
        }
        if (regIn == 1) {
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    'action': 'create_account',
                    'email': email,
                    'phone': phone,
                    'first_name': first_name,
                    'last_name': last_name,
                    'password': password,
                    'r_password': r_password,
                    'nonce': nonce
                },
                success: function(datas) {
                    if (datas == 'OK') {
                        $('#m-reg-form input:not(.nonce)').val('');
                        $('#m-reg-form button').after('<div class="error-text-form true">Регистрация прошла успешно. <a href="#m-login-form" data-toggle="pill" aria-selected="true">Вход</a>.</div>');
                    } else {
                        $('#m-reg-form button').after('<div class="error-text-form">' + datas + '</div>');
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        }
    });

    $('body').on('submit', '#m-forget-form', function(e) {
        e.preventDefault();
        var forgetIn = 1;
        $(this).find('input').removeClass('wpcf7-not-valid');
        $(this).find('.error-text-form').remove();
        $('.error-text').remove();
        var email = $(this).find('[name=email]').val();
        var nonce = $(this).find('[name=nonce]').val();
        var url = $(this).data('url');
        if (!validateEmail(email)) {
            forgetIn = 0;
            $(this).find('[name=email]').addClass('wpcf7-not-valid');
        }
        if (forgetIn == 1) {
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    'action': 'lost_password',
                    'email': email,
                    'nonce': nonce
                },
                success: function(datas) {
                    alert(datas);
                    if (datas == 'OK') {
                        $('#m-forget-form input:not(.nonce)').val('');
                        $('#m-forget-form button').after('<div class="error-text-form true">Инструкция по сбросу пароля, отправленная вам по электронной почте</div>');
                    } else {
                        $('#m-forget-form button').after('<div class="error-text-form">' + datas + '</div>');
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        }
    });

    $('body').on('submit', '#m-change-pass', function(e) {
        e.preventDefault();
        var passIn = 1;
        $(this).find('input').removeClass('wpcf7-not-valid');
        $(this).find('.error-text-form').remove();
        var uid = $(this).find('[name=uid]').val();
        var key = $(this).find('[name=key]').val();
        var password = $(this).find('[name=password]').val();
        var r_password = $(this).find('[name=r_password]').val();
        var nonce = $(this).find('[name=nonce]').val();
        if (password == '') {
            passIn = 0;
            $(this).find('[name=password]').addClass('wpcf7-not-valid');
        }
        if (r_password == '') {
            passIn = 0;
            $(this).find('[name=r_password]').addClass('wpcf7-not-valid');
        }
        if (password != r_password) {
            passIn = 0;
            $(this).find('[name=r_password]').addClass('wpcf7-not-valid');
        }
        if (passIn == 1) {
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    'action': 'new_password',
                    'uid': uid,
                    'key': key,
                    'password': password,
                    'r_password': r_password,
                    'nonce': nonce
                },
                success: function(datas) {
                    if (datas == 'OK') {
                        $('#m-change-pass button').after('<div class="error-text-form true">Пароль успешно изменен. <a href="#m-login-form" data-toggle="pill" aria-selected="true">Вход</a>.</div>');
                        setTimeout(function() {
                            $('#change-pass-popup').modal('hide');
                            $('#login').modal('show');
                        }, 2400);
                    } else if (datas == 'ERROR') {
                        $('#change-pass-popup').modal('hide');
                        $('#login').modal('show');
                    } else {
                        $('#m-change-pass button').after('<div class="error-text-form">' + datas + '</div>');
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        }
    });

    $('body').on('submit', '.not-submit', function(e) {
        e.preventDefault();
    });


    //my change

    // nav-link aria-expanded="false" - menu close
    // nav-link aria-expanded="true"  - menu open


    // ul-sub-item collapse fade menu-1      - submenu close
    // ul-sub-item fade menu-1 collapse show - submenu open

    $('.nav-link').on('click', function(e) {
        $(window).scrollTop($(this).offset().top);
        $('a.nav-link').each(function() {
            // $(this).attr('aria-expanded', 'false');
        })
        $('.ul-sub-item.show').each(function() {
            // $(this).removeClass('show');
            // $(this).removeClass('collapse');
        })
    })

});

if ($(".map-container").hasClass("map-form")) {
    var wpcf7Elm = document.querySelector('.map-form .wpcf7');
    wpcf7Elm.addEventListener('wpcf7mailsent', function(event) {
        var icon = 'success';
        var message = 'Заявка отправлена';
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false
        });
    }, false);
    wpcf7Elm.addEventListener('wpcf7mailfailed', function(event) {
        var icon = 'error';
        var message = 'Что-то пошло не так, повторите попытку';
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false
        });
    }, false);
}

if ($("#contact-from-btn").hasClass("modal")) {
    var wpcf7Elm = document.querySelector('#contact-from-btn .wpcf7');
    wpcf7Elm.addEventListener('wpcf7mailsent', function(event) {
        $('#contact-from-btn').modal('hide');
        var icon = 'success';
        var message = 'Заявка отправлена';
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false
        });
    }, false);
    wpcf7Elm.addEventListener('wpcf7mailfailed', function(event) {
        $('#contact-from-btn').modal('hide');
        var icon = 'error';
        var message = 'Что-то пошло не так, повторите попытку';
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false
        });
    }, false);
}

if ($(".write-me").hasClass("contact-form")) {
    var wpcf7Elm = document.querySelector('.contact-form .wpcf7');
    wpcf7Elm.addEventListener('wpcf7mailsent', function(event) {
        var icon = 'success';
        var message = 'Заявка отправлена';
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false
        });
    }, false);
    wpcf7Elm.addEventListener('wpcf7mailfailed', function(event) {
        var icon = 'error';
        var message = 'Что-то пошло не так, повторите попытку';
        Swal.fire({
            icon: icon,
            text: message,
            showConfirmButton: false
        });
    }, false);
}