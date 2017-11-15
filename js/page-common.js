var Env = {
    "qzsDomain": "qzs.qq.com",
    "zcDomain": "c.qq.com",
    "cDomain": "c.qq.com",
    "mDomain": "m.c.qq.com",
    "adminDomain": "zcoa.3gqq.com",
    "qtengDomain": "qteng.qq.com",
    "statDomain": "stat.c.qq.com",
    "vcDomain": "vc.open.qq.com",
    "tgpcDomain": "tgpc.qq.com",
    "title": "\u6b63\u5f0f\u73af\u5883",
    "id": "production",
    "cgiDomain": "c.qq.com"
};
$(function () {
    common.init();
})
var common = {
    init:function () {
        this.event.navListHover();
    },
    event:{
        navListHover:function () {//分类栏悬浮效果
            $('body').on({
                'mouseenter ':function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).find('.mod-nav-submenu').show();
                },
                'mouseleave':function () {
                    $(this).removeClass('active');
                    $(this).find('.mod-nav-submenu').hide();

                }
            },'#jmod_nav_menu li')
        },
    }
}