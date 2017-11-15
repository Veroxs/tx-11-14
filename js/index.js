/*分类栏状态*/
var navBar = document.getElementById('jmod-nav-wrap');
navBar.className = 'mod-nav always';

/*banner轮播*/
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay : 2000,
    effect: 'fade',
    speed:1000
});