const $menu = $('.c-menu')
$('.c-header__btnopen').click( function() {
    $menu.show(2000);
    $('.c-header__btnopen').fadeOut(2000);
    $('.c-header__btnclose').fadeIn(2000);
});
$('.c-header__btnclose').click( function() {
    $menu.hide(2000);
    $('.c-header__btnopen').fadeIn(2000);
    $('.c-header__btnclose').fadeOut(2000);
});