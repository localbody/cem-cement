<!doctype html>
<html lang="ru">
<script defer src="https://af.click.ru/af.js?id=10211"></script>

<head>
  <!-- Google Tag Manager -->
  <script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-P52CWMC');
  </script>
  <!-- End Google Tag Manager -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head();  $current_page = $_SERVER['REQUEST_URI']; ?>
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/fonts.css">
  <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css">
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P52CWMC" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div class="header">
    <div class="container">
      <div class="flex-lg-nowrap row align-items-center">
        <div class="logo col-xl-2 col-lg col-md-6 col-9 order-lg-1 order-md-1">
          <a href="<?php bloginfo('url'); ?>/"><img draggable="false"
              src="<?php bloginfo('template_url'); ?>/assets/img/logo.svg" alt="<?php bloginfo('name'); ?>" /></a>
        </div>
        <div class="hamburger-head col-3 ml-auto d-md-none order-md-1" data-toggle="collapse" data-target=".h-data">
          <span class="hamburger"></span>
        </div>
        <div class="h-data top-menu col-xl-3 col-lg col-md-6 order-lg-1 order-md-1">
          <nav class="top-menu">
            <ul>
              <?php wp_nav_menu(array('theme_location'=>'primary', 'fallback_cb'=>'Main menu', 'items_wrap'=>'%3$s', 'container'=>false, 'depth'=>1)); ?>
            </ul>
          </nav>
        </div>
        <div class="h-data info work-time col-xl-2 col-lg col-md-4 order-lg-1 order-md-1">
          <div class="row">
            <div><?php echo get_field('vremya1','ts'); ?></div>
            <div><?php echo get_field('vremya2','ts'); ?></div>
          </div>
        </div>
        <div class="h-data info h-contacts col-xl-2 col-lg col-md-4 order-lg-1 order-md-1">
          <?php if(get_field('email','ts')) { ?>
          <a class="mail"
            href="mailto:<?php echo get_field('email','ts'); ?>"><?php echo get_field('email','ts'); ?></a>
          <?php } if(get_field('telefon','ts')) { ?>
          <div class="phone"><a onclick="ym(62737591,'reachGoal','phone'); return true;"
              href="tel:<?php echo esc_html(str_replace(array(' ', '(' , ')', '-'), '', get_field('telefon','ts'))); ?>"><?php echo get_field('telefon','ts'); ?></a>
          </div>
          <?php } ?>
        </div>
        <div class="h-data callback col-xl-3 col-lg col-md-4 order-lg-1 order-md-1">
          <?php if(get_field('formy','ts') and get_field('knopka','ts')) { ?>
          <div class="btn-2" id="callback-call" data-toggle="modal" data-target="#contact-from-btn">
            <?php echo get_field('knopka','ts'); ?></div>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>

  <div class="main-content">
    <div class="container">

      <div class="row flex-nowrap d-lg-none">
        <form role="search" method="get" class="col d-flex align-items-center"
          action="<?php echo esc_url( home_url( '/' ) ); ?>">
          <input type="text" name="s" placeholder="Поиск" class="search" value="<?php echo get_search_query(); ?>" />
          <button id="search-button" type="submit"><img draggable="false" alt=""
              src="<?php bloginfo('template_url'); ?>/assets/img/ico/search.svg" /></button>
        </form>
        <div class="col-md-4 block-enter-wrap d-lg-none">
          <?php if(!is_user_logged_in()) { ?>
          <a href="#" class="block-enter for-guests" data-toggle="modal" data-target="#login">
            <img alt="" src="<?php bloginfo('template_url'); ?>/assets/img/ico/enter.svg" id="enter-ico" />
            <span>Регистрация / Войти</span>
          </a>
          <?php } else { ?>
          <div class="block-enter for-authorized" id="userMenu" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <img alt="" src="<?php bloginfo('template_url'); ?>/assets/img/ico/enter-u.svg" id="enter-ico" />
            <span>Личный кабинет</span>
          </div>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
            <a class="dropdown-item" href="<?php echo get_permalink(wc_get_page_id('myaccount')); ?>/">Личная
              информация</a>
            <a class="dropdown-item" href="<?php echo get_permalink(wc_get_page_id('myaccount')); ?>/orders/">История
              заказов</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="<?php echo wp_logout_url($current_page); ?>">Выход</a>
          </div>
          <?php } ?>
        </div>
      </div>

      <div class="d-flex menu-after-search d-lg-none menu-info">
        <?php wp_nav_menu(array('theme_location'=>'primary0', 'fallback_cb'=>'Инфо', 'items_wrap'=>'%3$s', 'container'=>false, 'depth'=>1, 'walker'=>new True_Walker_Nav_Menu())); ?>
        <div class="col-md-1 d-lg-none just-empty-col"></div>
        <div class="menu-after-search-item">
          <a id="basket" href="<?php echo esc_url( wc_get_cart_url() ); ?>">
            <img alt="" src="<?php bloginfo('template_url'); ?>/assets/img/ico/basket.svg" id="basket-ico" />
            <div class="d-sm-inline d-none">Ваша корзина</div>
            <span><?php echo WC()->cart->get_cart_contents_count(); ?></span>
          </a>
        </div>
      </div>




      <div class="row">

        <!-- sidebar -->
        <div class="col-xl-3 col-lg-4" id="sidebar">

          <div class="wrapper-menu">
            <div class="menu-title">Каталог товаров</div>
            <ul class="menu">
              <li class="submenu submenu--01">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/cement.png.webp);
              "></div>
                  Цемент
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Фасовка</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/tsement-v-meshkah/">Цемент в мешках</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/tsement-v-big-begah/">Цемент в биг-бегах</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/tsement-navalom/">Цемент
                          навалом</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/tsement/1-tonna/">1
                          тонна</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/tsement/50-kg/">50 кг</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/tsement/40-kg/">40 кг</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Марка</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/tsement/m500/">Цемент
                          М500</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/tsement/m400/">Цемент
                          М400</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Добавки</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/mineralnyj-poroshok/">Минеральный порошок</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Цвет цемента</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/belyj-tsement/">Цемент
                          белый</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Производители</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/lafargeholcim/">LafargeHolcim</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/adana-turciya/">Адана
                          Турция</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/alborg-egipet/">Алборг
                          Египет</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/evrocement/">Евроцемент</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/serebryanskij-cementnyj-zavod/">Серебрянский цементный
                          завод</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/cemit-egipet/">Цемит
                          Египет</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--02">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/pesok.png.webp);
              "></div>
                  Сухие строительные смеси
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Марка</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/suxaya-smes-m100/">Сухая смесь
                          М100</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/suhaya-smes-universalnaya-m-150/">Сухая
                          смесь М150</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/montazhno-kladochnaya-smes-m-200/">Сухая
                          смесь М200</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/peskobeton-m300/">Пескобетон
                          М300</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Назначение</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/montazhno-kladochnye-smesi/">Монтажно-кладочные
                          смеси</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/smesi-dlya-styazhki-pola/">Смеси
                          для стяжки пола</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/suxie-smesi-s-pmd/">Сухие
                          смеси с ПМД</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/universalnye-smesi/">Универсальные
                          смеси</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Фасовка</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/suxie-stroitelnye-smesi-40-kg/">40
                          кг</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/suxie-stroitelnye-smesi-50-kg/">50
                          кг</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/suhie-stroitelnye-smesi/suxie-stroitelnye-smesi-1-tonna/">1
                          тонна</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--03">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/smesi.png.webp);
              "></div>
                  Модифицированные смеси
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/modificirovannye-smesi/gidroizolyacionnye-smesi/">Гидроизоляционные
                          смеси</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/modificirovannye-smesi/gruntovka/">Грунтовка</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/modificirovannye-smesi/kladochnye-rastvory/">Кладочные
                          растворы</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/modificirovannye-smesi/kleevye-smesi/">Клеевые
                          смеси</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/modificirovannye-smesi/styazhka-pola/">Стяжка пола</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/modificirovannye-smesi/cvetnye-zatirki/">Цветные
                          затирки</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/modificirovannye-smesi/cvetnye-smesi/">Цветные
                          смеси</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/shpaklevka/">Шпаклевка</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/modificirovannye-smesi/shtukaturka/">Штукатурка</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--04">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/truby.png.webp);
              "></div>
                  Асбестоцементные трубы
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Размер</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestocementnye-truby-100-mm/">100 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-150-mm/">150 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-200-mm/">200 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-250-mm/">250 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-300mm/">300 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-350-mm/">350 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-400-mm/">400 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestocementnye-truby-500-mm/">500 мм</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Стандарт изготовления</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-truby/asbestocementnye-truby-gost/">Асбестоцементные
                          трубы ГОСТ</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-truby/asbestocementnye-truby-tu/">Асбестоцементные
                          трубы ТУ</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Назначение</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-truby/napornye-truby/">Напорные
                          трубы</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-truby/beznapornye-truby/">Безнапорные
                          трубы</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-truby/drenazhnye-truby/">Дренажные
                          трубы</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Дополнительные материалы</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/mufty-asbestocementnye/">Муфты
                          асбестоцементные</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/mufty-polietilenovye/">Муфты
                          полиэтиленовые</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/probki/">Пробки</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/lotki-vodootvodnye/">Лотки
                          водоотводные</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/kolca-rezinovye/">Кольца
                          резиновые</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--05">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2021/06/icon2-2.png.webp);
              "></div>
                  Асбестоцементные листы
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Вид</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/list-ploskij-pressovanyj/">Лист
                          плоский прессованый</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/list-ploskij-nepressovannyj/">Лист
                          плоский непрессованный</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/ploskij-shifer/">Плоский
                          шифер</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Размер</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-10-mm/">Асбестоцементные
                          листы 10 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-12-mm/">Асбестоцементные
                          листы 12 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-16-mm/">Асбестоцементные
                          листы 16 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-20-mm/">Асбестоцементные
                          листы 20 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-25-mm/">Асбестоцементные
                          листы 25 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-30-mm/">Асбестоцементные
                          листы 30 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-40-mm/">Асбестоцементные
                          листы 40 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-6-mm/">Асбестоцементные
                          листы 6 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/asbestocementnye-listy-8-mm/">Асбестоцементные
                          листы 8 мм</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--06">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2021/06/icon1-2.png.webp);
              "></div>
                  АЦЭИД 400
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Размер</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/6-mm/">АЦЭИД
                          6мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/8-mm/">АЦЭИД
                          8мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/10-mm/">АЦЭИД
                          10мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/12-mm/">АЦЭИД
                          12мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/16-mm/">АЦЭИД
                          16мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/20-mm/">АЦЭИД
                          20мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/25-mm/">АЦЭИД
                          25мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/30-mm/">АЦЭИД
                          30мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/aceid/40-mm/">АЦЭИД
                          40мм</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--07">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2021/12/59х59.png.webp);
              "></div>
                  Асбестоцементные изделия
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Шифер плоский</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-6-mm/">Шифер
                          плоский 6 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-8-mm/">Шифер
                          плоский 8 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-10-mm/">Шифер
                          плоский 10 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-12-mm/">Шифер
                          плоский 12 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-16mm/">Шифер
                          плоский 16 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-20mm/">Шифер
                          плоский 20 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-25mm/">Шифер
                          плоский 25 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-30mm/">Шифер
                          плоский 30 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestocementnye-listy/shifer-ploskij-40mm/">Шифер
                          плоский 40 мм</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Шифер волновой</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/shifer-volnovoj/">Шифер
                          волновой</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Асбестовый картон</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/asbestotsementnye-izdeliya/asbestovyj-karton/">Асбестовый
                          картон</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Лотки электротехнические огнедугозащитные марки ЛЭОД</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestotsementnye-izdeliya/lotki-elektrotexnicheskie-ognedugozashhitnye-marki-leod/">Лотки
                          электротехнические огнедугозащитные марки ЛЭОД</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Полосы для грядок</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/asbestotsementnye-izdeliya/polosy-dlya-gryadok/">Полосы
                          для грядок</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--08">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2021/12/csp59x59.png.webp);
              "></div>
                  Цементно-стружечные плиты
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/cementno-struzhechnaya-plita/csp-8-mm/">ЦСП
                          8 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/cementno-struzhechnaya-plita/csp-10-mm/">ЦСП
                          10 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/cementno-struzhechnaya-plita/csp-12-mm/">ЦСП
                          12 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/cementno-struzhechnaya-plita/csp-16-mm/">ЦСП
                          16 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/cementno-struzhechnaya-plita/csp-20-mm/">ЦСП
                          20 мм</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/cementno-struzhechnaya-plita/csp-24-mm/">ЦСП
                          24 мм</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--09">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/gbi.png.webp);
              "></div>
                  ЖБИ изделия
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/bloki-fbs-fundamentnye-bloki/">Блоки ФБС
                          (Фундаментные блоки)</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/kolodcy/">Колодцы</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/kolca-kolodeznye/">Кольца колодезные</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/kolca-kolodeznye-s-dnom/">Кольца
                          колодезные с дном</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/kolca-kolodeznye-s-dnom-s-zamkom/">Кольца
                          колодезные с дном с замком</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/kolca-kolodeznye-s-zamkom/">Кольца
                          колодезные с замком</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/kolca-kolodeznye-s-kryshkoj/">Кольца
                          колодезные с крышкой</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/plity-niza-dnishha-kolec/">Плиты низа
                          (днища колец)</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/plity-opornye-i-razgruzochnye/">Плиты
                          опорные и разгрузочные</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/plity-pag-pdn-pd-plity-pokrytiya-dorog-i-aerodromov/">Плиты
                          ПАГ, ПДН, ПД (Плиты покрытия дорог и аэродромов)</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/plity-perekrytiya-kryshki-kolec/">Плиты
                          перекрытия (крышки колец)</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/plity-perekrytiya-s-zamkom-kryshki-kolec-s-zamkom/">Плиты
                          перекрытия с замком (крышки колец с замком)</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/zhbi-izdeliya/plity-perekrytiya-s-lyukom-kryshki-kolec-s-polimernym-lyukom/">Плиты
                          перекрытия с люком (крышки колец с полимерным
                          люком)</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--10">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/cement-car.png.webp);
              "></div>
                  Бетон
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/beton/beton-na-gravii/">Бетон на гравии</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/beton/beton-na-granite/">Бетон на граните</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--11">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/metalo.png.webp);
              "></div>
                  Металлопрокат
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/armatura/">Арматура</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/balka/">Балка</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/kvadrat/">Квадрат</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/krug/">Круг</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/list/">Лист</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/polosa/">Полоса</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/provolka/">Проволка</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/profil/">Профиль</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/profnastil/">Профнастил</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/setka-svarnaya/">Сетка сварная</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/ugolok/">Уголок</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/shveller/">Швеллер</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/metalloprokat/elektrody/">Электроды</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--12">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/ceramzit.png.webp);
              "></div>
                  Нерудные материалы
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/nerudnye-materialy/asfaltovaya-kroshka/">Асфальтовая
                          крошка</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/nerudnye-materialy/grunt/">Грунт</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link" href="https://cem-cement.ru/product-cat/keramzit/">Керамзит</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/nerudnye-materialy/pesok/">Песок</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/nerudnye-materialy/xolodnyj-asfalt/">Холодный
                          асфальт</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/shheben/gravijnyj/">Щебень гравийный</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/nerudnye-materialy/shheben-granitnyj/">Щебень
                          гранитный</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/nerudnye-materialy/shheben-izvestnyakovyj/">Щебень
                          известняковый</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--13">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/steny.png.webp);
              "></div>
                  Стеновые материалы
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <div>Кирпич</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/stenovye-materialy/kirpich-oblicovachnyj/">Кирпич
                          облицовочный</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/kirpich-ryadovoj-silikatnyj/">Кирпич
                          рядовой силикатный</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/kirpich-ryadovoj-shhelevoj/">Кирпич
                          рядовой щелевой</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/kirpich-stroitelnyj-polnotelyj/">Кирпич
                          строительный полнотелый</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/kirpich-shamotnyj/">Кирпич
                          шамотный</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Гипсоволокно</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/stenovye-materialy/gipsovolokno/">Гипсоволокно</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Гипсокартон</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/gipsokarton/">Гипсокартон</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Плита пазогребная</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/plita-pazogrebnevaya/">Плита
                          пазогребневая</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Строительные блоки</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/stenovye-materialy/stroitelnye-bloki/">Строительные
                          блоки</a>
                      </li>
                    </ul>
                  </li>
                  <li class="">
                    <div>Тёплая керамика</div>
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/stenovye-materialy/teplaya-keramika/">Теплая
                          керамика</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--14">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/gidro.png.webp);
              "></div>
                  Изоляционные материалы
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/izolyacionnye-materialy/gidroizolyaciya/">Гидроизоляция</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/izolyacionnye-materialy/penopolistirol/">Пенополистирол</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product_cat/izolyacionnye-materialy/teploizolyaciya/">Теплоизоляция</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="submenu submenu--15">
                <div class="submenu__link">
                  <div style="
                background-image: url(https://cem-cement.ru/wp-content/uploads/2020/03/reagent.png.webp);
              "></div>
                  Противогололедные реагенты
                </div>
                <ul class="submenu__items">
                  <li class="">
                    <ul class="">
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/antigololednye-reagenty/dms/">DMS</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/antigololednye-reagenty/icehit/">ICEHIT</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/antigololednye-reagenty/bassol/">БАССОЛЬ</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/antigololednye-reagenty/granitnaya-kroshka/">Гранитная
                          крошка</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/antigololednye-reagenty/peskosol/">Пескосоль</a>
                      </li>
                      <li class="">
                        <a class="submenu__items-link"
                          href="https://cem-cement.ru/product-cat/antigololednye-reagenty/texnicheskaya-sol/">Техническая
                          соль (Галит)</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <?php if(is_product_category()) { ?>
          <?php if(get_field('cene','product_cat_'.$filcat) or get_field('filtry','product_cat_'.$filcat)) { ?>
          <form method="get" action="<?php echo get_term_link($term_id,'product_cat'); ?>#catalog">
            <?php if(get_field('cene','product_cat_'.$filcat)) { $extremes_price = new Extremes_Price; ?>
            <div class="sidebar-box sb-price sb-filter sbcollapse-filter">
              <div class="sidebar-box-wrap">
                <div class="title title-normal">Цена</div>
                <div class="input-str d-flex align-items-center">
                  <input type="number" name="minp" class="min-price" min="0"
                    value="<?php if($_GET['minp']) { echo htmlspecialchars($_GET['minp']); } else { echo $extremes_price->get_min_price(); } ?>">
                  <span>руб</span>
                  <div class="m-auto">-</div>
                  <input type="number" name="maxp" class="max-price" min="0"
                    value="<?php if($_GET['maxp']) { echo htmlspecialchars($_GET['maxp']); } else { echo $extremes_price->get_max_price(); } ?>">
                  <span>руб</span>
                </div>
                <div class="range-str">
                  <input id="price-range" type="hidden" class="price-range" value=""
                    data-slider-min="<?php echo $extremes_price->get_min_price(); ?>"
                    data-slider-max="<?php echo $extremes_price->get_max_price(); ?>" data-slider-step="5"
                    data-slider-value="[<?php if($_GET['minp']) { echo htmlspecialchars($_GET['minp']); } else { echo $extremes_price->get_min_price(); } ?>,<?php if($_GET['maxp']) { echo htmlspecialchars($_GET['maxp']); } else { echo $extremes_price->get_max_price(); } ?>]" />
                </div>
                <div class="numb-str d-flex justify-content-between">
                  <span><?php echo $extremes_price->get_min_price(); ?> руб</span>
                  <span><?php echo $extremes_price->get_max_price(); ?> руб</span>
                </div>
              </div>
            </div>
            <?php } ?>
            <?php if(have_rows('filtry','product_cat_'.$filcat)): $i = 0; while(have_rows('filtry','product_cat_'.$filcat)) : the_row(); ?>
            <div class="sidebar-box sb-checkbox sb-filter sbcollapse-filter">
              <div class="sidebar-box-wrap">
                <?php if(get_sub_field('zagolovok')) { ?>
                <div class="title title-normal"><?php echo get_sub_field('zagolovok'); ?></div>
                <?php } if( have_rows('tegi') ): ?>
                <div class="list">
                  <?php while( have_rows('tegi') ) : the_row(); $i++; $tag = get_sub_field('teg'); ?>
                  <label class="my-radio">
                    <input type="checkbox" name="fl<?php echo $i; ?>" value="<?php echo $tag->slug; ?>"
                      <?php if($_GET['fl'.$i]==$tag->slug) { echo ' checked'; } ?> />
                    <span class="alt-type-checkbox"></span>
                    <?php echo $tag->name; ?>
                  </label>
                  <?php endwhile; ?>
                </div>
                <?php endif; ?>
              </div>
            </div>
            <?php endwhile; endif; ?>
            <div class="sidebar-box sb-filter button-submit sbcollapse-filter">
              <div class="sidebar-box-wrap">
                <button type="submit" class="product-order">Применить фильтр</button>
              </div>
            </div>
          </form>
          <?php } } ?>

          <?php if( have_rows('sajdbar','ts') ): while( have_rows('sajdbar','ts') ) : the_row(); ?>
          <?php if( get_row_layout() == 'b1' ): ?>
          <div class="sidebar-box banner sbcollapse ">
            <div class="sidebar-box-wrap">
              <?php if(get_sub_field('banner')) { $img = get_sub_field('banner'); ?>
              <img src="<?php echo $img['sizes']['banner']; ?>" alt="<?php echo $img['alt']; ?>" />
              <?php } if(get_sub_field('zagolovok')) { ?>
              <div class="<?php the_sub_field('tip'); ?>"><?php the_sub_field('zagolovok'); ?></div>
              <?php } if(get_sub_field('tekst')) { ?>
              <div class="title-small"><?php the_sub_field('tekst'); ?></div>
              <?php } if(get_sub_field('knopka') and get_sub_field('ssylka')) { ?>
              <a<?php if(get_sub_field('okne')) { ?> target="_blank" <?php } ?> href="<?php the_sub_field('ssylka'); ?>"
                class="product-order"><?php the_sub_field('knopka'); ?></a>
                <?php } ?>
            </div>
          </div>
          <?php endif; ?>
          <?php endwhile; endif; ?>

          <?php if(is_tag() or is_category()) { $tags = get_tags(array('hide_empty'=>false)); ?>
          <?php if($tags) { ?>
          <div class="sidebar-box sb-tags">
            <div class="sidebar-box-wrap">
              <div class="tags-box">
                <div class="title title-normal">Теги</div>
                <div class="tags">
                  <?php foreach ( $tags as $tag ) { $tag_link = get_tag_link($tag->term_id); ?>
                  <a href="<?php echo $tag_link; ?>" class="tag-item"><?php echo $tag->name; ?></a>
                  <?php } ?>
                </div>
              </div>
            </div>
          </div>
          <?php } } ?>

        </div>


        <div class="col-xl-9 col-lg-8 content-center padding-content">

          <div class="row flex-md-nowrap d-lg-flex d-none">
            <form role="search" method="get" class="col-xl-8 col-lg col-md-8 d-flex align-items-center"
              action="<?php echo esc_url( home_url( '/' ) ); ?>">
              <input type="text" name="s" placeholder="Поиск" class="search"
                value="<?php echo get_search_query(); ?>" />
              <button id="search-button" type="submit"><img draggable="false" alt=""
                  src="<?php bloginfo('template_url'); ?>/assets/img/ico/search.svg" /></button>
            </form>
            <div class="col-xl-4 col-lg col-md-4">
              <?php if(!is_user_logged_in()) { ?>
              <div class="block-enter for-guests" data-toggle="modal" data-target="#login">
                <img alt="" src="<?php bloginfo('template_url'); ?>/assets/img/ico/enter.svg" id="enter-ico" />
                <span>Регистрация / Войти</span>
              </div>
              <?php } else { ?>
              <div class="block-enter for-authorized" id="userMenu" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img alt="" src="<?php bloginfo('template_url'); ?>/assets/img/ico/enter-u.svg" id="enter-ico" />
                <span>Личный кабинет</span>
              </div>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                <a class="dropdown-item" href="<?php echo get_permalink(wc_get_page_id('myaccount')); ?>/">Личная
                  информация</a>
                <a class="dropdown-item"
                  href="<?php echo get_permalink(wc_get_page_id('myaccount')); ?>/orders/">История заказов</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="<?php echo wp_logout_url($current_page); ?>">Выход</a>
              </div>
              <?php } ?>
            </div>
          </div>

          <div class="menu-after-search justify-content-between d-lg-flex d-none">
            <div class="col-8 px-0 d-flex">
              <?php wp_nav_menu(array('theme_location'=>'primary0', 'fallback_cb'=>'Инфо', 'items_wrap'=>'%3$s', 'container'=>false, 'depth'=>1, 'walker'=>new True_Walker_Nav_Menu())); ?>
            </div>
            <div class="menu-after-search-item ml-a">
              <a id="basket" href="<?php echo esc_url( wc_get_cart_url() ); ?>">
                <img alt="" src="<?php bloginfo('template_url'); ?>/assets/img/ico/basket.svg" id="basket-ico" />
                Ваша корзина
                <span><?php echo WC()->cart->get_cart_contents_count(); ?></span>
              </a>
            </div>
          </div>