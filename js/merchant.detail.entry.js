!function (e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var i = n[a] = {exports: {}, id: a, loaded: !1};
        return e[a].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var i = n(1), s = a(i), o = n(15), c = a(o), r = n(10), d = a(r), l = n(12), p = a(l), u = n(13), f = a(u),
        _ = n(14), v = a(_), m = new v["default"](".jmod-saling-pagination"), h = !1, b = new p["default"],
        g = new s["default"](f["default"]), I = new c["default"](m),
        y = new d["default"]({corpIndexModel: g, corpIndexView: I, fixCorpContact: b, isCustom: h});
    y.init()
}, function (e, t, n) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s() {
        var e = o({}, G_DATA);
        e.corpInfo = e.corpInfo || {};
        var t = e.corpInfo;
        Object.keys(t).forEach(function (e) {
            var n = t[e];
            t[e] = "string" == typeof n ? (0, r.htmlEncode)(n) : n
        }), t.c_contact = t.c_contact || "", t.c_before_qq = t.c_before_qq || "", t.c_after_qq = t.c_after_qq || "", t.c_contact = d["default"].getRandomItemFromList(t.c_contact.split("|")), t.c_before_qq = d["default"].getRandomItemFromList(t.c_before_qq.split("|")), t.c_after_qq = d["default"].getRandomItemFromList(t.c_after_qq.split("|")), t.c_brief = (t.c_brief || "").replace(/\r\n|\n|\r/g, "<br>"), t.c_business_introduce = (t.c_business_introduce || "").replace(/\r\n|\n|\r/g, "<br>"), t.c_cooperation_case = (t.c_cooperation_case || "").replace(/\r\n|\n|\r/g, "<br>"), t.c_header_text = t.c_header_text || "", t.c_about_wrap_style = t.c_about_wrap_style || "", t.c_about_img = t.c_about_img || "", t.design_cases = t.design_cases || [], t.cooperative_partner = t.cooperative_partner || [], t.user_voices = t.user_voices || [], e.per = 20, e.page = 1, e.total = 0, e.tab = d["default"].getUrlParam("tab") || 0, e.tab = parseInt(e.tab, 10), e.hotCSInfo = e.hotCSInfo || {}, e.shoppingCSInfo = e.shoppingCSInfo || [];
        var n = e.hotCSInfo.items;
        n && n.length > 0 && parseInt(n[0].cs_type, 10) === m ? e.isSevereCorp = !0 : e.isSevereCorp = !1;
        var a = t.c_service_time;
        if (a) {
            for (var i = [], s = a.split("$"), c = 0; c < s.length; c++) {
                var l = s[c].split("|");
                i.push({isEnable: l[0], weekStart: l[1], weekEnd: l[2], timeStart: l[3], timeEnd: l[4]})
            }
            1 !== parseInt(i[0].isEnable, 10) && 1 !== parseInt(i[1].isEnable, 10) ? t.c_service_time = "" : t.c_service_time = i
        }
        return t.c_establish_time = ("" + t.c_establish_time).replace(/-/g, "/"), e.filter = {
            provinceId: "",
            cityId: "",
            cateId: d["default"].getUrlParam("cate_id") || 0,
            isRecom: 0,
            orderBy: 0,
            orderType: 0
        }, e.enums = {businessType: _.BUSINESS_TYPE, serviceDeadline: _.SERVICE_TIME, teamScale: _.TEAM_SCALE}, e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, c = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            return function (t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }(), r = n(2), d = a(r), l = n(3), p = a(l), u = n(4), f = a(u), _ = n(5), v = "/seller/get_cmdtylist", m = 2,
        h = s(G_DATA), b = function () {
            function e(t) {
                i(this, e), h.locationData = t
            }

            return c(e, [{
                key: "getStore", value: function () {
                    return h
                }
            }, {
                key: "updateSalingPage", value: function (e) {
                    h.page = e
                }
            }, {
                key: "fetchSalingSkus", value: function (e, t) {
                    f["default"].toggleLoading(!0), h.filter = o({}, h.filter, e);
                    var n = h.filter;
                    p["default"].request({
                        url: v,
                        data: {
                            page: h.page,
                            c_id: h.corpInfo.c_id || 0,
                            is_recom: 0,
                            province_id: n.provinceId,
                            city_id: n.cityId,
                            order_by: n.orderBy,
                            order_type: n.orderType
                        },
                        success: function (e) {
                            if (f["default"].toggleLoading(!1), 0 === e.ret) {
                                var n = e.data.gData.shoppingCSInfo;
                                h.shoppingCSInfo = n.items || [], h.total = n.totalItems, t(h.shoppingCSInfo, h.page, h.total, h.per, h.isSevereCorp, h.corpInfo.c_before_qq)
                            }
                        }
                    })
                }
            }]), e
        }();
    t["default"] = b
}, function (e, t) {
    e.exports = _cfCommon.utils
}, function (e, t) {
    e.exports = _cfCommon.network
}, function (e, t) {
    e.exports = _cfUI.toast
}, function (e, t) {
    e.exports = _cfCommon.constants
}, , function (e, t) {
    e.exports = jQuery
}, function (e, t, n) {
    (function (e) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var s = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), o = n(2), c = a(o), r = n(9), d = 1, l = 0,
            p = '\n  <li class="item">\n    <%if (isSevereCorp) {%>\n      <h4 class="title"><a _stat_click_id="9_<%=item.cs_id%>" href="/cmdty/detail?csId=<%=item.cs_id%>" target="_blank"><%=item.cs_name%></a></h4>\n      <p class="intro"><%=item.cs_brief%></p>\n      <div class="record">\n        <span class="deal">销量&nbsp;<%=(item.cs_pay_count > 0 ? item.cs_pay_count : "暂无")%></span>\n        <span class="consult">咨询量&nbsp;<%=(item.cs_click_num > 0 ? item.cs_click_num : "暂无")%></span>\n      </div>\n      <div class="price-box">\n        <%if(item.stock && item.stock.activeId > 0){%>\n          <%if(item.stock.activeId == 1){%>\n            <p class="originalprice">&yen;<%=(item.cs_price * 100 >= 10000000 ? parseInt(item.cs_price) : item.cs_price)%>元<%if(item.cs_sku_cnt > 1){%><small>起</small><%}%></p>\n            <p class="price">&yen;0<i class="mod-tag-orange">秒杀进行中</i></p>\n          <%}else if(item.stock.activeId == 2){%>\n            <p class="mod-red-redeem">可抵<%=(item.stock.deductionPrice / 100)%>元<%if(item.stock.totalCnt > 1){%><small>起</small><%}%></p>\n            <p class="price">&yen;<%=(item.cs_price * 100 >= 10000000 ? parseInt(item.cs_price) : item.cs_price)%><%if(item.cs_sku_cnt > 1){%><small>起</small><%}%></p>\n          <%}%>\n        <%}else{%>\n          <%if(+item.cs_original_price && (item.cs_original_price * 100 != item.cs_price * 100)){%>\n          <p class="originalprice">&yen;<%=item.cs_original_price%>元<%if(item.cs_sku_cnt > 1){%><small>起</small><%}%></p>\n          <%}%>\n          <p class="price">&yen;<%=(item.cs_price * 100 >= 10000000 ? parseInt(item.cs_price) : item.cs_price)%><%if(item.cs_sku_cnt > 1){%><small>起</small><%}%></p>\n        <%}%>\n      </div>\n      <a href="/cmdty/detail?csId=<%=item.cs_id%>" _stat_click_id="9_<%=item.cs_id%>" target="_blank" class="ui-button ui-button-sm ui-button-suc">查看详情</a>\n    <%} else {%>\n      <h4 class="title"><a href="javascript:void(0);"><%=item.cs_name%></a></h4>\n      <p class="consult">咨询量 <%=item.cs_click_num%></p>\n      <p class="price"><%=(item.cs_price * 100 >= 10000000 ? parseInt(item.cs_price) : item.cs_price)%>元</p>\n      <a class="ui-button ui-button-sm ui-button-suc jmod-wpa-qq jmod-consult-stat" _wpa_qq="<%=cBeforeQQ%>" _stat_click_id="14_<%=item.cs_id%>" data-cid="<%=item.c_id%>" data-csid="<%=item.cs_id%>" <%if(!cBeforeQQ.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> href="<%if(cBeforeQQ.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=cBeforeQQ%>&site=qq&menu=yes<%}%>">QQ咨询</a>\n    <%}%>\n  </li>\n',
            u = '\n  <div class="provider-aboutcrumb layout">\n    <a href="javascript:;" <%if(tab != ' + r.TAB_SERVICE + " && tab != " + r.TAB_ABOUT_US + '){%>class="cur"<%}%>>店铺首页</a>\n    <a href="javascript:;" class="jmod_saling_service <%if(tab == ' + r.TAB_SERVICE + '){%>cur<%}%>">在售服务</a>\n    <%if (isCustom) {%>\n      <a href="javascript:;" <%if(tab == ' + r.TAB_ABOUT_US + '){%>class="cur"<%}%>>关于我们</a>\n    <%}%>\n  </div>\n',
            f = '\n  <a href="javascript:void(0)" class="opt cur" _stat_click_id="6_1" data-value="0">综合</a>\n  <a href="javascript:void(0)" _stat_click_id="6_2" data-value="1" class="opt">人气</a>\n  <a href="javascript:void(0)" _stat_click_id="6_3" class="opt" id="price-sort" data-value="3">\n    价格\n    <span id="sort-des" _stat_click_id="7_1" class="sortby des" style="display:none;"></span>\n    <span class="sortby asc" id="sort-asc" _stat_click_id="7_2"></span>\n  </a>\n  <div class="address-info">\n    <div id="choose-address" class="ui-address choose-address ui-address-close">\n      <div class="ui-checkbox-wrap" _stat_click_id="7_3">\n        <label id="address-text" for="add16" class="ui-checkbox-text">选择服务地区</label>\n        <span class="ui-address-tri">\n          <span class="ui-address-tri-icon"></span>\n        </span>\n      </div>\n      <div class="ui-address-layer">\n        <div class="mod-tab-panel">\n          <div class="tab-item cur" _stat_click_id="7_4" data-content="province-content">\n            <span id="province-tab" class="item-in">全部</span>\n          </div><div class="tab-item" _stat_click_id="7_5" style="display:none;" data-content="city-content">\n            <span id="city-tab" class="item-in">全部</span>\n          </div>\n        </div>\n        <div id="province-content" class="mod-tab-content address-select-tab">\n          <div class="tab-content clearfix">\n            <div class="address-item checked" _stat_click_id="7_6" data-value=""><span>全部</span></div>\n            <%for(var i in locationData){if(isNaN(i)){continue;}%>\n              <div class="address-item" _stat_click_id="10_1" actionObj="8|<%=i%>" data-value="<%=i%>">\n                <span><%=locationData[i].name%></span>\n              </div>\n            <%}%>\n          </div>\n        </div>\n        <div class="mod-tab-content address-select-tab">\n          <div id="city-content" class="tab-content clearfix">\n          </div>\n        </div>\n      </div>\n    </div>\n    <span class="item">共<span id="jmod-res-num">0</span>个筛选结果</span>\n  </div>\n',
            _ = function () {
                function t(n) {
                    i(this, t), this.$sailingSkus = e(".jmod-sailing-skus"), this.pagination = n
                }

                return s(t, [{
                    key: "renderTabHeader", value: function (t, n) {
                        var a = c["default"].tmpl(u, {tab: t, isCustom: n});
                        e(".jmod-tab-header").html(a)
                    }
                }, {
                    key: "bindTabHeader", value: function (t) {
                        e(".jmod-tabcontent-wrap" + e(".jmod-tab-header a.cur").index()).removeClass("hidden"), e(".jmod-tab-header").on("click", "a", function (n) {
                            var a = e(n.currentTarget), i = a.index();
                            return !!a.hasClass("cur") || (a.addClass("cur"), a.siblings().removeClass("cur").each(function (t, n) {
                                var a = e(n).index();
                                e(".jmod-tabcontent-wrap" + a).hasClass("hidden") || e(".jmod-tabcontent-wrap" + a).addClass("hidden")
                            }), e(".jmod-tabcontent-wrap" + i).hasClass("hidden") && e(".jmod-tabcontent-wrap" + i).removeClass("hidden"), void(a.hasClass("jmod_saling_service") && t()))
                        })
                    }
                }, {
                    key: "getSkusHTML", value: function (e, t, n) {
                        var a = "";
                        return e.forEach(function (e) {
                            var i = {}, s = +e.cs_platform_discount, r = +e.cs_price;
                            s < 1 || s > 99 ? e.cs_original_price = r / 100 : (e.cs_original_price = Math.round(r / s * 100) / 100, e.cs_platform_discount = 0 === s ? "" : s / 10), e.cs_price = r / 100, Object.keys(e).forEach(function (t) {
                                var n = e[t];
                                i[t] = "string" == typeof n ? (0, o.htmlEncode)(n) : n
                            });
                            var d = c["default"].tmpl(p, {item: i, isSevereCorp: t, cBeforeQQ: n});
                            a += d
                        }), a
                    }
                }, {
                    key: "renderHotSkus", value: function (t, n, a, i) {
                        a || e(".jmod-hot-skus").closest(".service-list").addClass("light-serv");
                        var s = '\n      <h3 class="mod-title">热销服务</h3>\n      <a href="/seller/corpinfo?c_id=' + t + '&tab=2" _stat_click_id="9_100" class="more">更多服务</a>\n    ';
                        e(".jmod-hot-sku-header").closest(".provider-index-box").removeClass("hidden"), e(".jmod-hot-sku-header").html(s), e(".jmod-hot-skus").html(this.getSkusHTML(n, a, i))
                    }
                }, {
                    key: "renderSalingSkus", value: function (t, n, a, i, s, o) {
                        if (e("#jmod-res-num").text(a), s || e(".jmod-saling-list").addClass("light-serv"), t.length > 0) {
                            var c = this.getSkusHTML(t, s, o);
                            e(".jmod-saling-list").html("<ul>" + c + "</ul>")
                        } else e(".jmod-saling-list").html('\n        <div class="mod-empty">\n          <p>抱歉，没有相关的内容。</p>\n        </div>\n      ');
                        this.pagination.render(n, a, i)
                    }
                }, {
                    key: "bindSalingPagination", value: function (e) {
                        this.pagination.bindEvents(function (t) {
                            e(t)
                        })
                    }
                }, {
                    key: "renderFilterOpts", value: function (t) {
                        e(".jmod-filter-option").html(c["default"].tmpl(f, {locationData: t}))
                    }
                }, {
                    key: "bindFilterOpts", value: function (e, t) {
                        this.bindSortFilter(t), this.bindAddressFilter(e, t)
                    }
                }, {
                    key: "bindSortFilter", value: function (t) {
                        var n = e(".sort-opt .opt"), a = e("#price-sort"), i = e("#sort-des"), s = e("#sort-asc"),
                            o = {orderType: "", orderBy: ""};
                        e(".sort-opt").on("click", ".opt", function (c) {
                            var r = e(c.currentTarget);
                            if (r[0] === a[0] && a.hasClass("cur")) {
                                var p = e(".sortby:visible"), u = e(".sortby:hidden");
                                p.hide(), u.show(), o.orderType = o.orderType === l ? d : l
                            } else if (r[0] === a[0]) i.hide(), s.show(), o.orderType = d; else {
                                if (r.hasClass("cur")) return;
                                i.hide(), s.show(), o.orderType = 0
                            }
                            return n.removeClass("cur"), r.addClass("cur"), o.orderBy = r.data("value"), t(o), c.stopPropagation(), !1
                        })
                    }
                }, {
                    key: "bindAddressFilter", value: function (t, n) {
                        var a = e("#choose-address"), i = e("#province-content"), s = e("#city-content"),
                            o = e("#province-content .address-item"), c = e("#province-tab"), r = e("#city-tab"),
                            d = r.closest(".tab-item"), l = c.closest(".tab-item"), p = e("#address-text"), u = {};
                        a.on("click", function (t) {
                            var n = e(t.currentTarget);
                            n.toggleClass("ui-address-open"), n.toggleClass("ui-address-close"), c.html("全部"), i.show(), l.addClass("cur"), o.removeClass("checked"), s.hide(), d.hide()
                        });
                        var f = e(".address-select-tab"), _ = e(".mod-tab-panel .tab-item");
                        e(".mod-tab-panel").on("click", ".tab-item", function (t) {
                            var n = e(t.currentTarget);
                            return n.index() ? (t.stopPropagation(), !1) : (_.removeClass("cur"), n.addClass("cur"), f.hide(), e("#" + n.data("content")).show(), t.stopPropagation(), !1)
                        }), e("#province-content").on("click", ".address-item", function (l) {
                            var f = e(l.currentTarget);
                            o.removeClass("checked"), f.addClass("checked"), c.text(f.text());
                            var v = f.data("value");
                            if (v) {
                                d.show(), _.removeClass("cur"), d.addClass("cur"), s.parent().show(), s.show(), i.hide();
                                var m = t[v].city, h = '<div class="address-item" data-value=""><span>全部</span></div>';
                                for (var b in m) isNaN(b) || (h += '<div class="address-item" _stat_click_id="9_1" actionObj="9|<%=i%>" data-value=' + b + "><span>" + m[b] + "</span></div>");
                                s.html(h), r.html("全部"), u.provinceId = v
                            } else a.toggleClass("ui-address-open"), a.toggleClass("ui-address-close"), u.provinceId = "", u.cityId = "", p.text("选择服务地区"), n(u);
                            return l.stopPropagation(), !1
                        }), e("#city-content").on("click", ".address-item", function (t) {
                            var i = e(t.currentTarget);
                            e("#city-content .address-item").removeClass("checked"), i.addClass("checked");
                            var s = i.text();
                            r.text(s);
                            var o = i.data("value");
                            return o ? (u.cityId = o, p.text(s)) : (u.cityId = "", p.text(e("#province-tab").text())), a.toggleClass("ui-address-open"), a.toggleClass("ui-address-close"), n(u), t.stopPropagation(), !1
                        }), e(".address-select-tab").on("click", function (e) {
                            return e.stopPropagation(), !1
                        })
                    }
                }]), t
            }();
        t["default"] = _
    }).call(t, n(7))
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.TAB_SERVICE = 2, t.TAB_ABOUT_US = 3
}, function (e, t, n) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }(), o = n(9), c = n(11), r = a(c), d = function () {
        function e(t) {
            var n = t.corpIndexView, a = t.corpIndexModel, s = t.fixCorpContact, o = t.isCustom;
            i(this, e), this.corpIndexView = n, this.corpIndexModel = a, this.fixCorpContact = s, this.isCustom = o
        }

        return s(e, [{
            key: "init", value: function () {
                var e = this, t = this.corpIndexModel.getStore();
                this.corpIndexView.renderAboutHeader(t), this.corpIndexView.renderTabHeader(t.tab, this.isCustom), this.corpIndexView.bindTabHeader(function () {
                    t.shoppingCSInfo.length || e.fetchSalingSkus()
                }), this.corpIndexView.renderShopIndex(t), this.corpIndexView.renderFilterOpts(t.locationData), this.corpIndexView.bindFilterOpts(t.locationData, function (t) {
                    e.fetchSalingSkus(t)
                }), this.corpIndexView.bindSalingPagination(function (t) {
                    e.fetchSalingSkus({}, t)
                }), this.isCustom && this.corpIndexView.renderAboutUs(t.corpInfo.c_brief, t.corpInfo.c_business_introduce, t.corpInfo.c_cooperation_case), t.tab === o.TAB_SERVICE && this.fetchSalingSkus(), this.fixCorpContact.render(t.corpInfo), r["default"].setQQWPA(), r["default"].addQQConsultStat()
            }
        }, {
            key: "fetchSalingSkus", value: function (e, t) {
                var n = this;
                t ? this.corpIndexModel.updateSalingPage(t) : this.corpIndexModel.updateSalingPage(1), this.corpIndexModel.fetchSalingSkus(e, function (e, t, a, i, s, o) {
                    n.corpIndexView.renderSalingSkus(e, t, a, i, s, o), s || r["default"].setQQWPA()
                })
            }
        }]), e
    }();
    t["default"] = d
}, function (e, t) {
    e.exports = _cfCommon.qqUtils
}, function (e, t, n) {
    (function (e) {
        "use strict";

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), s = n(2),
            o = '\n  <div class="fixed-contact">\n    <div class="fixed-contact-item">\n      <div class="fixed-contact-k">联系服务商</div>\n      <a class="fixed-contact-v jmod-wpa-qq jmod-consult-stat" _wpa_qq="<%=corpInfo.c_before_qq%>" <%if(!corpInfo.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> _stat_click_id="8_<%=corpInfo.c_id%>" href="<%if(corpInfo.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=corpInfo.c_before_qq%>&site=qq&menu=yes<%}%>" data-cid="<%=corpInfo.c_id%>">QQ 咨询</a>\n    </div>\n    <%if (corpInfo.c_service_time) {%>\n      <div class="fixed-contact-item">\n        <div class="fixed-contact-k">服务时间</div>\n        <%for(var i = 0; i < corpInfo.c_service_time.length; i++) {var timeItem = corpInfo.c_service_time[i];%>\n          <%if(timeItem.isEnable == 1){%>\n            <div class="fixed-contact-v">\n              <p><%=timeItem.weekStart%>至<%=timeItem.weekEnd%></p>\n              <p><%=timeItem.timeStart%>-<%=timeItem.timeEnd%></p>\n            </div>\n          <%}%>\n        <%}%>\n      </div>\n    <%}%>\n    <%if (corpInfo.c_contact) {%>\n      <div class="fixed-contact-item">\n        <div class="fixed-contact-k">客服电话</div>\n        <span class="fixed-contact-v"><%=corpInfo.c_contact%></span>\n      </div>\n    <%}%>\n      <div class="fixed-contact-item">\n      <a href="#" title="返回顶部" class="backtop"></a>\n    </div>\n  </div>\n',
            c = function () {
                function t() {
                    a(this, t)
                }

                return i(t, [{
                    key: "render", value: function (t) {
                        e(".mod-fixed-corp-contact").html((0, s.tmpl)(o, {corpInfo: t}))
                    }
                }]), t
            }();
        t["default"] = c
    }).call(t, n(7))
}, function (e, t) {
    e.exports = _cfCommon.locationData
}, function (e, t) {
    e.exports = _cfUI.pagination
}, function (e, t, n) {
    (function (e) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var c = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), r = n(2), d = a(r), l = n(8), p = a(l),
            u = '\n  <div class="provider-aboutheader">\n    <div class="layout">\n      <div class="provider-aboutheader-info">\n        <div class="provider-aboutheader-mask"></div>\n        <div class="provider-aboutheader-info-wrap">\n          <div class="provider-aboutheader-baseinfo clearfix">\n            <div class="provider-aboutheader-logo"><img src="<%=clearProtocol(corpInfo.c_logo)%>" width="80" height="80"></div>\n            <h1 class="provider-aboutheader-h1"><%=corpInfo.c_name%><a class="lv" href="/scenter/growth" target="_blank">Lv<%=corpInfo.cLevel%></a><i class="ico-bao"></i></h1>\n            <%if (isSevereCorp) {%>\n              <span class="provider-aboutheader-score">\n                  <span class="k">质量</span>\n                  <span class="v" style="color:#ef6512"><%=(corpInfo.c_quality_score <= 0 ? "暂无" : (corpInfo.c_quality_score/10).toFixed(1) + "分")%></span>\n                  <span class="k">态度</span>\n                  <span class="v" style="color:#ef6512"><%=(corpInfo.c_attitude_score <= 0 ? "暂无" : (corpInfo.c_attitude_score/10).toFixed(1) + "分")%></span>\n                  <span class="k">速度</span>\n                  <span class="v" style="color:#ef6512"><%=(corpInfo.c_speed_score <= 0 ? "暂无" : (corpInfo.c_speed_score/10).toFixed(1) + "分")%></span>\n              </span>\n              <span class="provider-aboutheader-deal">销量&nbsp;<%=(+corpInfo.c_pay_count || "暂无")%></span>\n                <span class="provider-aboutheader-deal">咨询量&nbsp;<%=(+corpInfo.c_asked_num || "暂无")%></span>\n          <%}else{%>\n                <span class="provider-aboutheader-deal">咨询量&nbsp;<%=(+corpInfo.c_asked_num || "暂无")%></span>\n            <%}%>\n        </div>\n        <div class="provider-aboutheader-otherinfo clearfix">\n            <div class="col col-1">\n              <h5>综合实力</h5>\n              <p><label>公司规模</label><span><%=enums.teamScale[corpInfo.c_team_scale]%><%if(corpInfo.c_team_scale != 5){%>人<%}%></span>\n                <%if(corpInfo.c_establish_time){%>\n                  <label>注册时间</label>\n                  <span><%=corpInfo.c_establish_time%></span>\n                <%}%>\n              </p>\n            </div>\n            <div class="col col-2">\n              <h5>经营信息</h5>\n              <p><label>主营业务</label><span><%=enums.businessType[corpInfo.c_business_type]%></span><label>公司所在地</label><span class="addr"><%=locationData[corpInfo.c_province_id] ? locationData[corpInfo.c_province_id].name : \'\' %> <%=locationData[corpInfo.c_province_id] ? locationData[corpInfo.c_province_id].city[corpInfo.c_city_id] : \'\'%></span></p>\n            </div>\n            <div class="col col-3">\n              <h5>基础信息</h5>\n              <p><label>公司全称</label><span><%=corpInfo.c_full_name%></span></p>\n            </div>\n          </div>\n          <a _stat_click_id="11_<%=corpInfo.c_id%>" <%if(!corpInfo.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> href="<%if(corpInfo.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=corpInfo.c_before_qq%>&site=qq&menu=yes<%}%>" class="ui-button provider-aboutheader-btn jmod_wpa_qq jmod-consult-stat" _wpa_qq="<%=corpInfo.c_before_qq%>" data-cid="<%=corpInfo.c_id%>">QQ联系我</a>\n        </div>\n      </div>\n    </div>\n  </div>\n',
            f = function (t) {
                function n() {
                    return i(this, n), s(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }

                return o(n, t), c(n, [{
                    key: "renderAboutHeader", value: function (t) {
                        var n = t.corpInfo, a = t.enums, i = t.locationData, s = t.isSevereCorp,
                            o = d["default"].tmpl(u, {
                                corpInfo: n,
                                enums: a,
                                locationData: i,
                                isSevereCorp: s,
                                clearProtocol: d["default"].clearProtocol
                            });
                        e(".jmod-about-header").html(o)
                    }
                }, {
                    key: "renderShopIndex", value: function (e) {
                        var t = e.hotCSInfo, n = e.corpInfo, a = e.isSevereCorp;
                        t.items && t.items.length > 0 && this.renderHotSkus(n.c_id, t.items, a, n.c_before_qq), this.renderAboutUs(n.c_brief, n.c_business_introduce, n.c_cooperation_case)
                    }
                }, {
                    key: "renderAboutUs", value: function (t, n, a) {
                        e(".jmod-aboutus-title").closest(".provider-index-box").removeClass("hidden"), e(".jmod-aboutus-title").html('<h3 class="mod-title">关于我们</h3>'), e(".jmod-aboutus-list").html('\n      <div class="provider-aboutlist-item provider-aboutlist-item-1">\n        <div class="hd"><div class="wrap"><img src="' + window.STATICIMAGES[0] + '"></div></div>\n        <h3>公司简介</h3>\n        <p>' + t + '</p>\n      </div><div class="provider-aboutlist-item provider-aboutlist-item-2">\n        <div class="hd"><div class="wrap"><img src="' + window.STATICIMAGES[1] + '"></div></div>\n        <h3>业务介绍</h3>\n        <p>' + n + '</p>\n      </div><div class="provider-aboutlist-item provider-aboutlist-item-3">\n        <div class="hd"><div class="wrap"><img src="' + window.STATICIMAGES[2] + '"></div></div>\n        <h3>服务案例</h3>\n        <p>' + a + "</p>\n      </div>\n    ")
                    }
                }]), n
            }(p["default"]);
        t["default"] = f
    }).call(t, n(7))
}]);
//# sourceMappingURL=normal.entry.js.map