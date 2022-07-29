<nav class="s-navbar">
<div class="menu-head d-lg-flex d-none">
  <span class="hamburger"></span>
  <span>Каталог товаров</span>
</div>
<div class="d-flex flex-wrap d-lg-none">
  <div class="menu-head col-sm col-12 mx-0" data-toggle="collapse" data-target=".sbcollapse" aria-expanded="false">
    <span class="hamburger"></span>
    <span>Каталог товаров</span>
  </div>
  <?php
      if(is_product_category()) {
         $queried_object = get_queried_object();
         $term_id = $queried_object->term_id;
          if(get_field('filtr','product_cat_'.$term_id)) {
                              $ancestors = get_ancestors($term_id,'product_cat');
                              if(get_field('filtr','product_cat_'.$term_id) == 1 and $ancestors) {
                                  $filcat = $ancestors[0];
                              } else {
                                  $filcat = $term_id;
                              }
                          } else {
                              $filcat = 000;
                          }
                          if(get_field('cene','product_cat_'.$filcat) or get_field('filtry','product_cat_'.$filcat)) {
  ?>
  <div class="menu-head filter-head col-sm col-12 mx-0 ml-sm-3 d-lg-none sb-filter" data-toggle="collapse" data-target=".sbcollapse-filter" aria-expanded="false">
    <span class="hamburger"></span>
    <span>Фильтр</span>
  </div>
    <?php }} ?>
</div>
<div class="navbar-list sbcollapse" id="navbarNav">
  <ul class="s-navbar-nav">
    <?php wp_nav_menu(array('theme_location'=>'primary1', 'fallback_cb'=>'Каталог', 'items_wrap'=>'%3$s', 'container'=>false, 'depth'=>3, 'walker'=>new True_Walker_Nav_Menu_m())); ?>
  </ul>
</div>
</nav>
