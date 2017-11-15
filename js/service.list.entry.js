!function (e) {
    function t(c) {
        if (s[c]) return s[c].exports;
        var i = s[c] = {exports: {}, id: c, loaded: !1};
        return e[c].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var s = {};
    return t.m = e, t.c = s, t.p = "", t(0)
}({
    0: function (e, t, s) {
        "use strict";

        function c(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var i = s(206), a = c(i), n = s(208), r = c(n), d = s(209), o = c(d), l = s(31), _ = new a["default"],
            v = new r["default"], m = new o["default"]({serviceListView: _, serviceListModel: v});
        m.init(), (0, l.initReport)(17)
    }, 2: function (e, t) {
        e.exports = jQuery
    }, 3: function (e, t) {
        e.exports = _cfUI.toast
    }, 6: function (e, t) {
        e.exports = _cfCommon.network
    }, 8: function (e, t) {
        e.exports = _cfCommon.utils
    }, 31: function (e, t) {
        e.exports = _cfCommon.timeStat
    }, 45: function (e, t) {
        e.exports = _cfCommon.locationData
    }, 46: function (e, t) {
        e.exports = _cfCommon.qqUtils
    }, 48: function (e, t, s) {
        (function (e) {
            "use strict";

            function c(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = t.url,
                    c = void 0 === s ? "/ListSku/getHotSkuList" : s, i = t.data, r = void 0 === i ? null : i,
                    d = t.type, o = void 0 === d ? "get" : d, l = t.title, _ = void 0 === l ? "鐑攢鏈嶅姟" : l,
                    v = t.$replace, m = void 0 === v ? e(".mod-hotrecommend") : v;
                a["default"].request({
                    url: c, data: r, type: o, needLogin: !1, success: function (e) {
                        if (0 === e.ret) {
                            var t = e.data.hotList || [], s = t.length;
                            if (t = s >= 8 ? t.slice(0, 8) : s >= 4 && s < 8 ? t.slice(0, 4) : [], t.length) return n.renderSku({
                                title: _,
                                $replace: m,
                                skus: t
                            }), !0
                        }
                        m.hide()
                    }
                })
            };
            var i = s(6), a = c(i), n = {
                renderSku: function (t) {
                    var s = t.skus, c = t.title, i = t.$replace;
                    e(i).replaceWith('\n      <div class="' + e(i).attr("class") + '">\n        <div class="mod-boxhd"><h3 class="mod-boxhd-tit">' + c + '</h3></div>\n        <div class="mod-hotrecommend-list clearfix">\n          ' + s.map(function (e, t) {
                        return "\n              " + (4 === t ? '</div><div class="mod-hotrecommend-list clearfix">' : "") + '\n              <div class="mod-hotrecommend-card" data-csid="' + e.cs_id + '">\n                <h6 class="serv"><a _stat_click_id="8_1' + e.cs_id + '" href="/cmdty/detail?csId=' + e.cs_id + '" target="_blank">' + e.cs_name + '</a></h6>\n                <p class="record"><span><a _stat_click_id="8_2' + e.cs_id + '" href="/cmdty/detail?csId=' + e.cs_id + '" target="_blank">鍜ㄨ&nbsp;' + (e.cs_click_num > 0 ? e.cs_click_num : "鏆傛棤") + "</a></span>" + (2 === +e.cs_type ? '<span><a _stat_click_id="8_3' + e.cs_id + '" href="/cmdty/detail?csId=' + e.cs_id + '" target="_blank">閿€閲�&nbsp;' + (e.cs_pay_count > 0 ? e.cs_pay_count : "鏆傛棤") + "</a></span>" : "") + '</p>\n                <p class="provider">鏈嶅姟鍟�&nbsp;<a _stat_click_id="8_4' + e.cs_id + '" href="/seller/corpinfo?c_id=' + e.c_id + '&tab=1" target="_blank">' + e.c_name + '</a><a class="lv" href="/scenter/growth" target="_blank">Lv' + e.cLevel + '</a></p>\n                <div class="price">' + function () {
                            var t = [];
                            return e.stock && 1 === +e.stock.activeId ? t.push('\n                        <del class="op">&yen;' + ("" + e.cs_price).replace(/\.00$/, "") + (e.cs_sku_cnt > 1 ? "<small>璧�</small>" : "") + '</del>\n                        <p class="np"><i>&yen;</i>0<em>绉掓潃杩涜涓�</em></p>\n                      ') : e.stock && 2 === +e.stock.activeId ? t.push('\n                        <p class="red-redeem">鍙姷' + e.stock.deductionPrice / 100 + "鍏�" + (e.stock.totalCnt > 1 ? "<small>璧�</small>" : "") + '</p>\n                        <p class="np"><i>&yen;</i>' + ("" + e.cs_price).replace(/\.00$/, "") + (e.cs_sku_cnt > 1 ? "<small>璧�</small>" : "") + "</p>\n                      ") : (+e.cs_platform_discount > 0 && t.push('<del class="op">&yen;' + e.cs_original_price.replace(/\.00$/, "") + (e.cs_sku_cnt > 1 ? "<small>璧�</small>" : "") + "</del>"), t.push('<p class="np"><i>&yen;</i>' + ("" + e.cs_price).replace(/\.00$/, "") + (e.cs_sku_cnt > 1 ? "<small>璧�</small>" : "") + "</p>")), t.join("")
                        }() + ('</div>\n                <a _stat_click_id="8_5' + e.cs_id + '" href="/cmdty/detail?csId=' + e.cs_id + '" target="_blank" class="btn">鏌ョ湅璇︽儏</a>\n              </div>')
                    }).join("") + "\n        </div>\n      </div>\n    ")
                }
            }
        }).call(t, s(2))
    }, 79: function (e, t) {
        e.exports = _cfUI.poptips
    }, 190: function (e, t) {
        "use strict";

        function s(e, t) {
            try {
                localStorage.removeItem("lastUsedLocation"), localStorage.setItem("lastUsedLocation", e + "#" + t)
            } catch (s) {
            }
        }

        function c() {
            var e = "";
            try {
                if (e = localStorage.getItem("lastUsedLocation")) return {
                    lastUsedProvinceId: e.split("#")[0],
                    lastUsedCityId: e.split("#")[1]
                }
            } catch (t) {
            }
            return {}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.setLastUsedLocationToCache = s, t.getLastUsedLocationFromCache = c
    }, 206: function (e, t, s) {
        (function (e) {
            "use strict";

            function c(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a() {
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function () {
                    function e(e, t) {
                        for (var s = 0; s < t.length; s++) {
                            var c = t[s];
                            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
                        }
                    }

                    return function (t, s, c) {
                        return s && e(t.prototype, s), c && e(t, c), t
                    }
                }(), r = s(8), d = c(r), o = s(45), l = c(o), _ = s(46), v = s(79), m = c(v), u = s(207), p = s(190),
                f = s(48), I = c(f), h = "999999", y = {
                    renderCrumbInfo: function (t) {
                        var s = t.firstCateName, c = void 0 === s ? "" : s, i = t.secondCateName, a = void 0 === i ? "" : i,
                            n = t.thirdCateName, r = void 0 === n ? "" : n,
                            d = '<a href="/">棣栭〉</a> &gt; <span style="color: #323232;">' + c + '</span> &gt; <span style="color: #323232;">' + a + '</span> &gt; <span style="color: #323232;">' + r + "</span>";
                        e(".jmod-crumb-container").html(d)
                    }, renderCateBanner: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            s = d["default"].tmpl(u.cateBannerTpl, {cateInfo: t});
                        e(".jmod_cate_banner").html(s)
                    }, renderCateMenu: function (t) {
                        for (var s = t.cateMenu, c = void 0 === s ? [] : s, i = t.firstCateId, a = void 0 === i ? "" : i, n = e(".jmod_cate_menu"), r = "", o = 0, l = c.length; o < l; o++) {
                            var _ = c[o];
                            r += d["default"].tmpl(u.sideMenuTpl, {secondCateItem: _, firstCateId: a})
                        }
                        n.html(r)
                    }, renderCurSelectMenu: function (t) {
                        var s = t.secondCateId, c = void 0 === s ? "" : s, i = t.thirdCateId, a = void 0 === i ? "" : i,
                            n = e(".jmod_cate_menu"), r = n.find('ul[data-secondId="' + c + '"]'),
                            d = r.find('li[data-thirdId="' + a + '"]'), o = r.closest(".menu--item");
                        o.removeClass("close"), o.addClass("open"), d.addClass("cur")
                    }, renderServiceList: function () {
                        var t = this, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.renderSelectAreaDesc(s.corpNum);
                        var c = s.serviceInfo || {}, i = "";
                        c.forEach(function (e, s) {
                            e = t.formatServiceData(e);
                            var c = s % 2 === 0, a = d["default"].tmpl(u.serviceListTpl, {
                                serviceItem: e,
                                isLeft: c,
                                clearProtocol: d["default"].clearProtocol
                            });
                            i += a
                        }), e(".jmod_service_list").html(i), (0, _.setQQWPA)()
                    }, renderHotServiceList: function () {
                        var t = this, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, c = "";
                        s.forEach(function (e) {
                            e = t.formatServiceData(e);
                            var s = d["default"].tmpl(u.hotServiceList, {serviceItem: e});
                            c += s
                        }), e(".jmod_hot_service_list").html(c), (0, _.setQQWPA)()
                    }, renderSelectArea: function (t) {
                        var s = t.provinceId, c = void 0 === s ? "" : s, i = t.cityId, a = void 0 === i ? "" : i;
                        c = c || h, a = c + [] === h ? "" : a || c;
                        var n = d["default"].tmpl(u.areaSelectorTpl, {locationData: l["default"]});
                        e(".jmod_select_area").html(n), e(".jmod_select_province .address-item").each(function (t, s) {
                            e(s).attr("_province_id") + [] === c + [] && e(s).addClass("checked")
                        });
                        var r = "", o = "";
                        if (!c && !a || c + [] === h ? r = "鍏ㄥ浗" : c + [] === a + [] ? r = l["default"][c].name : (r = l["default"][c].name, o = l["default"][c].city[a]), c + [] !== h) {
                            var _ = l["default"][c].city, v = "", m = "";
                            c + [] === a + [] && (m = " checked"), v += '<div class="address-item' + m + '" _city_id="' + c + '"><span>鍏ㄩ儴</span></div>';
                            for (var p in _) m = "", p + [] === a + [] && (m = " checked"), v += '<div class="address-item' + m + '" _city_id="' + p + '"><span>' + _[p] + "</span></div>";
                            e(".jmod_select_city").html(v)
                        }
                        e(".jmod_cur_select_area").text(r + o), this.renderAreaTab({
                            provinceName: r,
                            cityName: o,
                            provinceId: c,
                            cityId: a
                        })
                    }, renderAreaTab: function (t) {
                        var s = t.provinceName, c = void 0 === s ? "" : s, i = t.cityName, a = void 0 === i ? "" : i,
                            n = t.provinceId, r = void 0 === n ? "" : n, d = t.cityId, o = void 0 === d ? "" : d,
                            l = e(e(".jmod_select_province_city .item-in").get(0)),
                            _ = e(e(".jmod_select_province_city .item-in").get(1));
                        a = a || "鍏ㄩ儴", e(".jmod_select_province_city div:eq(0)").attr("_province_id", r), l.attr("_province_id", r), _.attr("_city_id", o), l.text(c), _.text(a), r + [] !== h ? _.show() : _.hide(), l.parent().addClass("cur"), e(".jmod_select_province").show(), e(".jmod_select_city").hide()
                    }, renderSelectAreaDesc: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        t > 0 ? (e(".jmod_area_container .jmod_found").show(), e(".jmod_area_container .jmod_not_found").hide(), e(".jmod_corp_count").text(t + "瀹�")) : (e(".jmod_area_container .jmod_found").hide(), e(".jmod_area_container .jmod_not_found").show()), e(".jmod_area_container").show()
                    }, formatServiceData: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e.c_before_qq = e.c_before_qq || "", e.c_before_qq = this.getItemRandom(e.c_before_qq.split("|")), e.c_quality_score = e.c_quality_score <= 0 ? "鏆傛棤" : d["default"].toDecimal(e.c_quality_score / 10, 1), e.c_speed_score = e.c_speed_score <= 0 ? "鏆傛棤" : d["default"].toDecimal(e.c_speed_score / 10, 1), e.c_attitude_score = e.c_attitude_score <= 0 ? "鏆傛棤" : d["default"].toDecimal(e.c_attitude_score / 10, 1), e.cs_click_num = e.cs_click_num > 0 ? e.cs_click_num : "鏆傛棤", e.cs_pay_count = e.cs_pay_count > 0 ? e.cs_pay_count : "鏆傛棤", e.stock = e.stock || {}, e.cs_price = d["default"].toDecimal(e.cs_price, 2), e.cs_original_price = d["default"].toDecimal(e.cs_original_price, 2), e
                    }, getItemRandom: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = this.getRandomInt(e.length - 1);
                        return e[t]
                    }, getRandomInt: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return Math.floor(Math.random() * (e + 1)) + 0
                    }
                }, g = function () {
                    function t() {
                        i(this, t)
                    }

                    return n(t, [{
                        key: "initPage", value: function (e) {
                            this.renderPage(e), this.bindEvents()
                        }
                    }, {
                        key: "renderPage", value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            m["default"].init(e(".mod-icon-qmark-circle"), {direct: "bottom", align: "al-center"});
                            var s = t.cateData, c = t.curCateObj.secondCateInfo || {}, i = t.curCateObj.cateInfo || {};
                            y.renderCrumbInfo({
                                firstCateName: s.sc_name,
                                secondCateName: c.sc_name,
                                thirdCateName: i.sc_name
                            }), y.renderCateBanner(i), y.renderCateMenu({
                                cateMenu: s.subcate,
                                firstCateId: t.firstCateId
                            }), y.renderCurSelectMenu({secondCateId: t.secondCateId, thirdCateId: t.thirdCateId})
                        }
                    }, {
                        key: "bindEvents", value: function () {
                            e(document).on("click", ".menu .menu--title", function (t) {
                                var s = e(this), c = s.parent(".menu--item");
                                c.hasClass("open") ? c.removeClass("open").addClass("close") : c.removeClass("close").addClass("open")
                            }), e(document).on("click", ".jmod_select_address", function (t) {
                                e(this).parent().hasClass("ui-address-close") ? e(this).parent().removeClass("ui-address-close").addClass("ui-address-open") : e(this).parent().removeClass("ui-address-open").addClass("ui-address-close"), t.stopPropagation()
                            }), (0, _.addQQConsultStat)()
                        }
                    }, {
                        key: "bindSelectArea", value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                            e(document).on("click", ".jmod_select_province_city .item-in", function () {
                                e(this).parent().addClass("cur").siblings().removeClass("cur"), 0 === e(this).parent().index() ? (e(".jmod_select_province").show(), e(".jmod_select_city").hide()) : (e(".jmod_select_city").show(), e(".jmod_select_province").hide())
                            }), e(document).on("click", ".jmod_select_province .address-item", function () {
                                e(this).addClass("checked").siblings().removeClass("checked");
                                var s = e(this).attr("_province_id");
                                e(".jmod_select_province_city div:eq(0)").attr("_province_id", s).removeClass("cur").find("span").text(e(this).text()), e(".jmod_select_province_city div:eq(1)").addClass("cur").find("span").text("璇烽€夋嫨");
                                var c = e(e(".jmod_select_province_city .item-in").get(1));
                                if (s + [] === h) return e(".jmod_cur_select_area").text("鍏ㄥ浗"), e(".jmod_select_address").parent().removeClass("ui-address-open").addClass("ui-address-close"), c.hide(), t({
                                    provinceId: s,
                                    cityId: ""
                                }), void(0, p.setLastUsedLocationToCache)(s, "");
                                c.show();
                                var i = l["default"][s], a = i.city, n = "";
                                n += '<div class="address-item" _city_id="' + s + '"><span>鍏ㄩ儴</span></div>';
                                for (var r in a) n += '<div class="address-item" _city_id="' + r + '"><span>' + a[r] + "</span></div>";
                                e(".jmod_select_province").hide(), e(".jmod_select_city").html(n).show()
                            }), e(document).on("click", ".jmod_select_city .address-item", function () {
                                e(".jmod_select_address").parent().removeClass("ui-address-open").addClass("ui-address-close"), e(this).addClass("checked").siblings().removeClass("checked");
                                var s = e(this).attr("_city_id"),
                                    c = e(".jmod_select_province_city div:eq(0)").attr("_province_id"),
                                    i = l["default"][c].name, a = "";
                                s && s + [] !== c + [] && (a = l["default"][c].city[s]), e(".jmod_cur_select_area").text(i + a), s = s || c, t({
                                    provinceId: c,
                                    cityId: s
                                }), (0, p.setLastUsedLocationToCache)(c, s), e(".jmod_select_province_city div:eq(1)").attr("_city_id", s).find("span").text(e(this).text())
                            }), e(document).on("click", ".jmod_select_area", function (e) {
                                e.stopPropagation()
                            }), e(document).bind("click", function () {
                                e(".jmod_select_address").parent().removeClass("ui-address-open").addClass("ui-address-close")
                            })
                        }
                    }, {
                        key: "renderServiceList", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            y.renderServiceList(e)
                        }
                    }, {
                        key: "renderHotServiceList", value: function () {
                            (0, I["default"])()
                        }
                    }, {
                        key: "renderSelectArea", value: function (e) {
                            var t = e.provinceId, s = void 0 === t ? h : t, c = e.cityId, i = void 0 === c ? "" : c;
                            y.renderSelectArea({provinceId: s, cityId: i})
                        }
                    }]), t
                }();
            t["default"] = g
        }).call(t, s(2))
    }, 207: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = t.cateBannerTpl = '\n  <h3 class="banner--title"><%=cateInfo.sc_name%></h3>\n  <ul class="banner--list">\n    <%if(cateInfo.sc_extra.sContent1 && cateInfo.sc_extra.sTitle1){%>\n      <li class="banner--item">\n        <p class="title"><%=cateInfo.sc_extra.sTitle1%></p>\n        <p class="content"><%=cateInfo.sc_extra.sContent1%></p>\n      </li>\n    <%}%>\n    <%if(cateInfo.sc_extra.sContent2 && cateInfo.sc_extra.sTitle2){%>\n      <li class="banner--item">\n        <p class="title"><%=cateInfo.sc_extra.sTitle2%></p>\n        <p class="content"><%=cateInfo.sc_extra.sContent2%></p>\n      </li>\n    <%}%>\n  </ul>\n',
            c = t.serviceListTpl = '\n  <li class="sv-card" <%if(isLeft){%>style="margin-right: 18px;"<%}%>>\n    <div class="sv-card--top clearfix">\n      <a _stat_click_id="7_1<%=serviceItem.cs_id%>" href="<%if(serviceItem.cs_type == 2){%>/cmdty/detail?csId=<%=serviceItem.cs_id%><%}else{%>/seller/corpinfo?c_id=<%=serviceItem.c_id%>&tab=1<%}%>" target="_blank"><img src="<%=clearProtocol(serviceItem.c_logo)%>" class="sv-card--icon"/></a>\n      <!-- 閲嶅害鏈嶅姟鍟� -->\n      <%if(serviceItem.cs_type == 2){%>\n        <p class="sv-card--name"><a class="name" _stat_click_id="7_2<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank"><%=serviceItem.c_name%></a><a href="/scenter/growth" target="_blank" class="lv">Lv<%=serviceItem.cLevel%></a><span class="mod-icon-grantee"></span></p>\n        <ul class="sv-card--review">\n          <li class="sv-card--review-item">\n            <span class="title">璐ㄩ噺</span>\n            <span class="point"><%=serviceItem.c_quality_score%></span>\n          </li>\n          <li class="sv-card--review-item">\n            <span class="title">閫熷害</span>\n            <span class="point"><%=serviceItem.c_speed_score%></span>\n          </li>\n          <li class="sv-card--review-item">\n            <span class="title">鎬佸害</span>\n            <span class="point"><%=serviceItem.c_attitude_score%></span>\n          </li>\n        </ul>\n      <%}else{%>\n        <p class="sv-card--name"><a _stat_click_id="7_3<%=serviceItem.cs_id%>" href="/seller/corpinfo?c_id=<%=serviceItem.c_id%>&tab=1" target="_blank"><%=serviceItem.c_name%></a><a href="/scenter/growth" target="_blank" class="lv">Lv<%=serviceItem.cLevel%></a></p>\n      <%}%>\n      <span class="arrow"></span>\n    </div>\n    <div class="sv-card--bottom">\n      <%if(serviceItem.cs_type == 2){%><a<%}else{%><div<%}%> href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" class="sv-card--type" target="_blank" title="<%=serviceItem.cs_name%>"><%=serviceItem.cs_name%><%if(serviceItem.cs_type == 2){%></a><%}else{%></div><%}%>\n      <div class="sv-card--sale">\n        <%if(serviceItem.cs_type == 2){%>\n          <a _stat_click_id="7_4<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank">鍜ㄨ <%=serviceItem.cs_click_num%></a>\n          <a _stat_click_id="7_5<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank">閿€閲� <%=serviceItem.cs_pay_count%></a>\n        <%}else{%>\n          <span>鍜ㄨ <%=serviceItem.cs_click_num%></span>\n        <%}%>\n      </div>\n      <div class="sv-card--price">\n        <%if(serviceItem.stock.activeId == 1){%><!--0鍏冩姠璐�-->\n          <del class="sv-card--orig-price">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></del>\n          <div class="sv-card--special"><span class="sv-card--red">&yen;0</span><i class="mod-tag-orange">绉掓潃杩涜涓�</i></div>\n        <%}else if(serviceItem.stock.activeId == 2){%><!--绾㈠寘娲诲姩-->\n          <p class="mod-red-redeem">鍙姷<%=serviceItem.stock.deductionPrice / 100%>鍏�<%if(serviceItem.stock.totalCnt > 1){%><small>璧�</small><%}%></p>\n          <div class="sv-card--special"><span class="sv-card--red">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></span></div>\n        <%}else{%>\n          <%if(serviceItem.cs_platform_discount > 0){%>\n            <del class="sv-card--orig-price">&yen;<%=serviceItem.cs_original_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></del>\n            <div class="sv-card--special"><span class="sv-card--red">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></span></div>\n          <%}else{%>\n            <div class="sv-card--special"><span class="sv-card--red">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></span></div>\n          <%}%>\n        <%}%>\n      </div>\n      <div class="sv-card--btn-wrap">\n        <a class="ui-button ui-button-sm ui-button-primary jmod-consult-stat jmod-wpa-qq"  _wpa_qq="<%=serviceItem.c_before_qq%>" _stat_click_id="7_6<%=serviceItem.c_id%>" data-cid="<%=serviceItem.c_id%>" data-csid="<%=serviceItem.cs_id%>" <%if(!serviceItem.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> href="<%if(serviceItem.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=serviceItem.c_before_qq%>&site=qq&menu=yes<%}%>">QQ鍜ㄨ</a>\n        <%if(serviceItem.cs_type == 2){%>\n          <a href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank" class="ui-button ui-button-sm ui-button-primary" _stat_click_id="7_7<%=serviceItem.c_id%>">鏌ョ湅璇︽儏</a>\n        <%}%>\n      </div>\n    </div>\n  </li>\n',
            i = t.hotServiceList = '\n  <li class="hs-card" style="margin-right: 17px;">\n    <a _stat_click_id="8_1<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank" class="hs-card--name"><%=serviceItem.cs_name%></a>\n    <div class="hs-card--sale">\n      <a _stat_click_id="8_2<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank">鍜ㄨ&nbsp;<%=serviceItem.cs_click_num%></a>\n      <%if(serviceItem.cs_type == 2){%>\n        <a _stat_click_id="8_3<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank">閿€閲�&nbsp;<%=serviceItem.cs_pay_count%></a>\n      <%}%>\n    </div>\n    <p class="hs-card--prv">鏈嶅姟鍟�&nbsp;<a _stat_click_id="8_4<%=serviceItem.cs_id%>" href="/seller/corpinfo?c_id=<%=serviceItem.c_id%>&tab=1" target="_blank"><%=serviceItem.c_name%></a><a href="/scenter/growth" target="_blank" class="lv">Lv<%=serviceItem.cLevel%></a></p>\n    <div class="hs-card--price">\n      <%if(serviceItem.stock.activeId == 1){%><!--0鍏冩姠璐�-->\n        <del class="hs-card--oprice">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></del>\n        <span class="hs-card--sprice" style="font-size:22px;">&yen;0<i class="mod-tag-orange">绉掓潃杩涜涓�</i></span>\n      <%}else if(serviceItem.stock.activeId == 2){%><!--绾㈠寘娲诲姩-->\n        <p class="mod-red-redeem">鍙姷<%=serviceItem.stock.deductionPrice / 100%>鍏�<%if(serviceItem.stock.totalCnt > 1){%><small>璧�</small><%}%></p>\n        <span class="hs-card--sprice" style="font-size:22px;">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></span>\n      <%}else{%>\n        <%if(serviceItem.cs_platform_discount > 0){%>\n          <del class="hs-card--oprice">&yen;<%=serviceItem.cs_original_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></del>\n        <%}%>\n        <span class="hs-card--sprice" style="font-size:22px;">&yen;<%=serviceItem.cs_price%><%if(serviceItem.cs_sku_cnt > 1){%><small>璧�</small><%}%></span>\n      <%}%>\n    </div>\n    <a _stat_click_id="8_5<%=serviceItem.cs_id%>" href="/cmdty/detail?csId=<%=serviceItem.cs_id%>" target="_blank" class="ui-button ui-button-sm ui-button-primary">鏌ョ湅璇︽儏</a>\n  </li>\n',
            a = t.areaSelectorTpl = '\n  <div class="mod-tab-panel jmod_select_province_city">\n    <div class="tab-item cur">\n      <span class="item-in">骞夸笢鐪�</span>\n    </div>\n    <div class="tab-item">\n      <span class="item-in">娣卞湷甯�</span>\n    </div>\n  </div>\n  <div class="mod-tab-content">\n    <div class="tab-content clearfix jmod_select_province">\n      <div class="address-item" _province_id="999999"><span>鍏ㄥ浗</span></div>\n      <%for(var i in locationData){if(isNaN(i)){continue;}%>\n        <%if(locationData[i].name == "鍏朵粬" || locationData[i].name == "鍏跺畠"){continue;}%>\n        <div class="address-item" _province_id="<%=i%>"><span><%=locationData[i].name%></span></div>\n      <%}%>\n    </div>\n  </div>\n  <div class="mod-tab-content">\n    <div class="tab-content clearfix jmod_select_city">\n    </div>\n  </div>\n';
        t.sideMenuTpl = '\n  <div class="menu--item close">\n    <div class="menu--title" _stat_click_id="6_<%=secondCateItem.sc_id%>"><%=secondCateItem.sc_name%><span class="arrow"></span></div>\n    <ul class="menu--list" data-secondId="<%=secondCateItem.sc_id%>">\n      <%for(var i = 0, len = secondCateItem.subcate.length; i < len; i++){ var thirdCateItem = secondCateItem.subcate[i];%>\n        <li class="menu--subitem" data-thirdId=<%=thirdCateItem.sc_id%>>\n          <a _stat_click_id="6_<%=thirdCateItem.sc_id%><%=i%>" href="/ListSku/view?firstCateId=<%=firstCateId%>&thirdCateId=<%=thirdCateItem.sc_id%>"><%=thirdCateItem.sc_name%></a>\n        </li>\n      <%}%>\n    </ul>\n  </div>\n', t.tpl = {
            cateBannerTpl: s,
            serviceListTpl: c,
            hotServiceList: i,
            areaSelectorTpl: a
        }
    }, 208: function (e, t, s) {
        "use strict";

        function c(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (e + [] === "100347") return {
                secondCateId: t[0].sc_id,
                thirdCateId: e,
                secondCateInfo: t[0],
                cateInfo: t[0].subcate[0]
            };
            for (var s = 0; s < t.length; s++) for (var c = t[s].subcate, i = 0; i < c.length; i++) if (c[i].sc_id + [] === e + []) return {
                secondCateId: t[s].sc_id,
                secondCateInfo: t[s],
                thirdCateId: c[i].sc_id,
                cateInfo: c[i]
            };
            return {
                secondCateId: t[0].sc_id,
                secondCateInfo: t[0],
                thirdCateId: t[0].subcate[0].sc_id,
                cateInfo: t[0].subcate[0]
            }
        }

        function n() {
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
                function e(e, t) {
                    for (var s = 0; s < t.length; s++) {
                        var c = t[s];
                        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
                    }
                }

                return function (t, s, c) {
                    return s && e(t.prototype, s), c && e(t, c), t
                }
            }(), d = s(6), o = c(d), l = s(8), _ = c(l), v = s(3), m = c(v), u = s(190), p = "999999",
            f = "/ListSku/getSkuList", I = "/ListSku/getHotSkuList", h = G_DATA.remainTime || "0",
            y = parseInt(_["default"].getUrlParam("firstCateId")) + "",
            g = parseInt(_["default"].getUrlParam("thirdCateId")) + "", k = G_DATA.cateData || {}, C = k.subcate || [],
            b = a(g, C) || {}, L = b.secondCateId;
        g = b.thirdCateId;
        var j = (0, u.getLastUsedLocationFromCache)(), S = j.lastUsedProvinceId, w = j.lastUsedCityId, x = {
            firstCateId: y,
            secondCateId: L,
            thirdCateId: g,
            subcate: C,
            curCateObj: b,
            cateData: k,
            lastUsedProvinceId: S,
            lastUsedCityId: w,
            remainTime: h
        }, q = function () {
            function e() {
                i(this, e)
            }

            return r(e, [{
                key: "getStore", value: function () {
                    return x
                }
            }, {
                key: "getServiceList", value: function (e) {
                    var t = e.provinceId, s = void 0 === t ? p : t, c = e.cityId, i = void 0 === c ? "" : c,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                    i = s + [] === p ? "" : i || s;
                    var r = {thirdCateId: x.thirdCateId, provinceId: s, cityId: i};
                    this.sendRequest({url: f, postData: r, successCB: a})
                }
            }, {
                key: "getHotServiceList", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
                    this.sendRequest({url: I, successCB: e})
                }
            }, {
                key: "sendRequest", value: function (e) {
                    var t = e.url, s = void 0 === t ? "" : t, c = e.postData, i = void 0 === c ? {} : c, a = e.type,
                        r = void 0 === a ? "GET" : a, d = e.successCB, l = void 0 === d ? n : d;
                    m["default"].toggleLoading(!0), o["default"].request({
                        url: s,
                        data: i,
                        type: r,
                        needLogin: !0,
                        needRefresh: !0,
                        success: function (e) {
                            m["default"].toggleLoading(!1), 0 === e.ret ? l(e.data) : m["default"].showToast("fail", e.msg || "缃戠粶閿欒璇风◢鍚庡啀璇�")
                        },
                        error: function () {
                            m["default"].toggleLoading(!1), m["default"].showToast("fail", "缃戠粶閿欒璇风◢鍚庡啀璇�")
                        }
                    })
                }
            }]), e
        }();
        t["default"] = q
    }, 209: function (e, t) {
        "use strict";

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var c = function () {
            function e(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var c = t[s];
                    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(e, c.key, c)
                }
            }

            return function (t, s, c) {
                return s && e(t.prototype, s), c && e(t, c), t
            }
        }(), i = "999999", a = function () {
            function e(t) {
                var c = t.serviceListView, i = t.serviceListModel;
                s(this, e), this.serviceListView = c, this.serviceListModel = i
            }

            return c(e, [{
                key: "init", value: function () {
                    var e = this.serviceListModel.getStore();
                    this.serviceListView.initPage(e), this.getServiceList({
                        provinceId: e.lastUsedProvinceId,
                        cityId: e.lastUsedCityId
                    }), this.getHotServiceList(), this.bindAreaSelectEvent()
                }
            }, {
                key: "getServiceList", value: function (e) {
                    var t = this, s = e.provinceId, c = e.cityId;
                    this.serviceListModel.getServiceList({provinceId: s, cityId: c}, function (e) {
                        return e.serviceInfo = e.serviceInfo || [], 0 === e.serviceInfo.length ? void t.serviceListModel.getServiceList({
                            provinceId: i,
                            cityId: ""
                        }, function (e) {
                            t.serviceListView.renderSelectArea({
                                provinceId: i,
                                cityId: ""
                            }), t.serviceListView.renderServiceList(e)
                        }) : (t.serviceListView.renderSelectArea({
                            provinceId: s,
                            cityId: c
                        }), void t.serviceListView.renderServiceList(e))
                    })
                }
            }, {
                key: "getHotServiceList", value: function () {
                    this.serviceListView.renderHotServiceList()
                }
            }, {
                key: "bindAreaSelectEvent", value: function () {
                    var e = this;
                    this.serviceListView.bindSelectArea(function (t) {
                        var s = t.provinceId, c = t.cityId;
                        e.serviceListModel.getServiceList({provinceId: s, cityId: c}, function (t) {
                            e.serviceListView.renderServiceList(t)
                        })
                    })
                }
            }]), e
        }();
        t["default"] = a
    }
});