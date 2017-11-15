!function (e) {
    function i(s) {
        if (t[s]) return t[s].exports;
        var a = t[s] = {exports: {}, id: s, loaded: !1};
        return e[s].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports
    }

    var t = {};
    return i.m = e, i.c = t, i.p = "", i(0)
}([function (e, i, t) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var a = t(1), n = s(a), c = t(7), r = s(c), d = t(15), o = s(d), l = t(17), v = new n["default"],
        _ = new r["default"], u = new o["default"]({detailModel: v, detailView: _});
    u.init(), (0, l.initReport)(16)
}, function (e, i, t) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, i) {
        if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
    }

    function n(e, i, t) {
        var s = _({}, e, {
            s_discount: +e.cs_platform_discount || 100,
            s_steps: e.cs_deal_step.replace(/\r\n|\n|\r/g, "<br>"),
            s_basic: e.cs_deal_material.replace(/\r\n|\n|\r/g, "<br>"),
            s_detail: e.cs_supplement.replace(/\r\n|\n|\r/g, "<br>"),
            s_has_invoice: 1 === +e.cs_invoice_status,
            s_sale_desc: e.cs_aftermarket.replace(/\r\n|\n|\r/g, "<br>"),
            c_name: e.c_name || "",
            c_logo: e.c_logo || "",
            c_business_introduce: (e.c_business_introduce || "").replace(/\r\n|\n|\r/g, "<br>"),
            c_brief: (e.c_brief || "").replace(/\r\n|\n|\r/g, "<br>"),
            c_cooperation_case: e.c_cooperation_case || "",
            cs_order_num: e.cs_order_num || 0,
            c_order_num: e.c_order_num || 0,
            c_pay_count: e.c_pay_count || 0,
            c_before_qq: e.c_before_qq || "",
            c_after_qq: e.c_after_qq || "",
            cs_status: +e.cs_status,
            cs_audit_msg: e.cs_audit_msg || "",
            isServiceProvider: +G_DATA.isServiceProvider || 0,
            c_quality_score: e.c_quality_score || 0,
            c_speed_score: e.c_speed_score || 0,
            c_attitude_score: e.c_attitude_score || 0,
            c_contact: e.c_contact || "",
            c_asked_num: e.c_asked_num || 0,
            cs_service_mobile: e.cs_service_mobile || "",
            cs_deliver_duration: e.cs_deliver_duration || "",
            cs_deliver_material: e.cs_deliver_material || []
        });
        if (s.c_contact = (0, p.getRandomItemFromList)(s.c_contact.split("|")), s.c_before_qq = (0, p.getRandomItemFromList)(s.c_before_qq.split("|")), s.c_after_qq = (0, p.getRandomItemFromList)(s.c_after_qq.split("|")), e.c_service_time) {
            s.c_service_time = [];
            for (var a = e.c_service_time.split("$"), n = 0; n < a.length; n++) {
                var c = a[n].split("|");
                s.c_service_time.push({
                    isEnable: parseInt(c[0]),
                    weekStart: c[1],
                    weekEnd: c[2],
                    timeStart: c[3],
                    timeEnd: c[4]
                })
            }
            1 !== s.c_service_time[0].isEnable && 1 !== s.c_service_time[1].isEnable && (s.c_service_time = "")
        }
        if (i.length && parseInt(i[0].activeId) === m.ACTIVITY_TYPE.ZERO) {
            var r = i[0];
            s.isZeroSerivce = !0, s.zeroActiveCount = Math.max(r.stockNums - r.dealNums, 0), s.zeroActiveTime = r.activeEndtime - G_DATA.nowTime
        }
        if (s.sku_province_ids = [], s.sku_city_ids = [], s.periodsAry = [], I.skuInfo.forEach(function (e) {
                e.sku_province_ids.forEach(function (e) {
                    s.sku_province_ids.indexOf(e) === -1 && s.sku_province_ids.push(e)
                }), e.sku_city_ids.forEach(function (e) {
                    s.sku_city_ids.indexOf(e) === -1 && s.sku_city_ids.push(e)
                }), s.periodsAry.indexOf(e.sku_service_time) === -1 && s.periodsAry.push(e.sku_service_time)
            }), s.sku_province_ids.indexOf("999999") !== -1) {
            var d = [];
            for (var o in t) d.push(o);
            s.sku_province_ids = d
        }
        return s
    }

    function c(e) {
        var i = {};
        for (var t in e) {
            i[t] = e[t].name;
            for (var s in e[t].city) i[s] = e[t].city[s]
        }
        return i
    }

    function r(e, i) {
        var t = [];
        return i.length > 0 && parseInt(i[0].activeId, 10) !== m.ACTIVITY_TYPE.ZERO && (t = i.map(function (e) {
            return e.skuId
        })), e = e.map(function (e) {
            var s = t.indexOf(e.sku_id);
            if (s !== -1) {
                var a = i[s];
                e.activeId = a.activeId, e.activeEndtime = a.activeEndtime, e.activeDeduction = a.activeDeduction, e.activeBegintime = a.activeBegintime
            }
            return e.sku_province_ids = e.sku_province_ids.split(","), e.sku_city_ids = e.sku_city_ids.split(","), e
        })
    }

    function d(e, i) {
        return +e.sku_service_time === +i
    }

    function o(e, i) {
        var t = e.sku_city_ids;
        if (t.indexOf("999999") !== -1) return !0;
        var s = [];
        return t.forEach(function (e) {
            if (y["default"][e]) for (var i in y["default"][e].city) s.push(i); else s.push(e)
        }), s.indexOf(i) !== -1
    }

    function l(e, i) {
        var t = +e * i;
        return t = (0, p.toDecimal)(t / 1e4), "0.00" === t && (t = "0"), t
    }

    function v(e) {
        if (!e || !e.length) return [];
        for (var i = {}, t = [], s = 0; s < e.length; s++) i[e[s]] || (i[e[s]] = !0, t.push(e[s]));
        return t
    }

    Object.defineProperty(i, "__esModule", {value: !0});
    var _ = Object.assign || function (e) {
        for (var i = 1; i < arguments.length; i++) {
            var t = arguments[i];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
        }
        return e
    }, u = function () {
        function e(e, i) {
            for (var t = 0; t < i.length; t++) {
                var s = i[t];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }

        return function (i, t, s) {
            return t && e(i.prototype, t), s && e(i, s), i
        }
    }(), p = t(2), m = t(3), f = t(4), y = s(f), h = t(5), g = t(6), b = s(g), k = "/cmdty/getlastusedlocation", I = {
        cate: G_DATA.cate || {},
        serviceTime: m.SERVICE_TIME,
        skuInfo: r(G_DATA.skuInfo, G_DATA.activeList),
        addressIndex: c(y["default"]),
        lastUsedLocation: (0, h.getLastUsedLocationFromCache)(),
        locationData: y["default"],
        nowTime: +G_DATA.nowTime
    };
    I.serviceData = n(G_DATA.serverInfo, G_DATA.activeList, y["default"]);
    var D = function () {
        function e() {
            a(this, e)
        }

        return u(e, [{
            key: "getStore", value: function () {
                return I
            }
        }, {
            key: "getLastUsedLocationFromServer", value: function (e) {
                b["default"].request({
                    url: k, success: function (i) {
                        0 === i.ret && +i.data.lastUsedProvinceId && +i.data.lastUsedCityId && (I.lastUsedLocation.lastUsedProvinceId = i.data.lastUsedProvinceId, I.lastUsedLocation.lastUsedCityId = i.data.lastUsedCityId, e(i.data.lastUsedProvinceId, i.data.lastUsedCityId))
                    }
                })
            }
        }, {
            key: "findSkus", value: function (e, i) {
                var t = I.skuInfo;
                if (!e && !i) return [];
                var s = [];
                return s = e ? i ? t.filter(function (t) {
                    return d(t, i) && o(t, e)
                }) : t.filter(function (i) {
                    return o(i, e)
                }) : t.filter(function (e) {
                    return d(e, i)
                })
            }
        }, {
            key: "getDisplayInfo", value: function (e, i) {
                if (!e.length) return !1;
                var t = {discountPriceList: [], originPriceList: [], idList: [], skuCount: e.length}, s = !1,
                    a = e.reduce(function (e, t) {
                        var a = l(t.sku_price, i.s_discount);
                        if (e.discountPriceList.push(a), e.originPriceList.push((0, p.toDecimal)(+t.sku_price / 100)), e.idList.push(t.sku_id), i.isZeroSerivce) return e;
                        if (s || +t.activeId !== m.ACTIVITY_TYPE.HB || (s = !0, e.hongbaoInfo = {
                                deduction: 0,
                                deductionCount: 0,
                                realPrice: -1,
                                activeRemainTime: 0,
                                activeNotBeginCount: 0
                            }), !e.hongbaoInfo) return e;
                        var n = e.hongbaoInfo;
                        if (t.activeDeduction > 0) {
                            n.deductionCount++, (0 === n.deduction || +t.activeDeduction < n.deduction) && (n.deduction = +t.activeDeduction);
                            var c = Math.round(100 * a, 10) - t.activeDeduction;
                            (n.realPrice === -1 || c < n.realPrice) && (n.realPrice = +c)
                        }
                        var r = t.activeEndtime - G_DATA.nowTime;
                        return r > 0 && (0 === n.activeRemainTime || r > n.activeRemainTime) && (n.activeRemainTime = r), t.activeBegintime - G_DATA.nowTime > 0 && n.activeNotBeginCount++, e
                    }, t);
                return a.discountPriceList = v(a.discountPriceList.sort(function (e, i) {
                    return e - i
                })), a.originPriceList = v(a.originPriceList.sort(function (e, i) {
                    return e - i
                })), a
            }
        }]), e
    }();
    i["default"] = D
}, function (e, i) {
    e.exports = _cfCommon.utils
}, function (e, i) {
    e.exports = _cfCommon.constants
}, function (e, i) {
    e.exports = _cfCommon.locationData
}, function (e, i) {
    "use strict";

    function t(e, i) {
        try {
            localStorage.removeItem("lastUsedLocation"), localStorage.setItem("lastUsedLocation", e + "#" + i)
        } catch (t) {
        }
    }

    function s() {
        var e = "";
        try {
            if (e = localStorage.getItem("lastUsedLocation")) return {
                lastUsedProvinceId: e.split("#")[0],
                lastUsedCityId: e.split("#")[1]
            }
        } catch (i) {
        }
        return {}
    }

    Object.defineProperty(i, "__esModule", {value: !0}), i.setLastUsedLocationToCache = t, i.getLastUsedLocationFromCache = s
}, function (e, i) {
    e.exports = _cfCommon.network
}, function (e, i, t) {
    (function (e) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function a(e, i) {
            if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(i, "__esModule", {value: !0});
        var n = function () {
                function e(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var s = i[t];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                return function (i, t, s) {
                    return t && e(i.prototype, t), s && e(i, s), i
                }
            }(), c = t(2), r = t(5), d = t(9), o = s(d), l = t(10), v = s(l), _ = t(11), u = t(12), p = t(13), m = t(14),
            f = 0, y = -1, h = function () {
                function i() {
                    a(this, i)
                }

                return n(i, [{
                    key: "renderBreadCrumb", value: function (i) {
                        var t = '\n      <a href="/">首页</a> &gt;\n      <%if(cate.first_sc_id){%><a href="/ListSku/view?firstCateId=<%=cate.first_sc_id.sc_id%>"><%=cate.first_sc_id.sc_name%></a><%}else{%>--<%}%> &gt; <%if(cate.second_sc_id){%><p class="crumb-name"><%=cate.second_sc_id.sc_name%></p><%}else{%>--<%}%> &gt; <%if(cate.first_sc_id && cate.third_sc_id){%><a href="/ListSku/view?firstCateId=<%=cate.first_sc_id.sc_id%>&thirdCateId=<%=cate.third_sc_id.sc_id%>"><%=cate.third_sc_id.sc_name%></a><%}else{%>--<%}%> &gt; <p class="crumb-name">服务详情</p>\n    ',
                            s = (0, c.tmpl)(t, {cate: i});
                        e(".jmod-breadcrumb").html(s)
                    }
                }, {
                    key: "renderTips", value: function (i) {
                        var t = {NOT_AUDIT: 1, REAUTID: 2, PASS_MANUAL: 3, PASS_AUTO: 4, FAILED_MANUAL: 5, FAILED_AUTO: 6},
                            s = '\n      <div class="mod-tips mt <%if(serviceData.cs_status == ' + t.PASS_MANUAL + " || serviceData.cs_status == " + t.PASS_AUTO + '){%>hidden<%}%>">\n        <span class="close jmod_close_tips"></span>\n        <%if(serviceData.cs_status == ' + t.NOT_AUDIT + " || serviceData.cs_status == " + t.REAUTID + "){%>\n          <p>您的服务正在审核中，请耐心等待。。。</p>\n        <%} else if(serviceData.cs_status == " + t.FAILED_MANUAL + " || serviceData.cs_status == " + t.FAILED_AUTO + "){%>\n          <p>您的服务未通过审核，原因：</p>\n          <p><%=serviceData.cs_audit_msg%></p>\n          <p>请重新修改后提交</p>\n        <%}%>\n      </div>\n    ",
                            a = (0, c.tmpl)(s, {serviceData: i});
                        e(".jmod-tips").html(a), e(".jmod_close_tips").on("click", function (i) {
                            e(i.currentTarget).parent().hide()
                        })
                    }
                }, {
                    key: "renderActivePrice", value: function (i, t) {
                        var s = (0, c.tmpl)(_.activePriceTpl, {serviceData: i, displayInfo: t});
                        e(".jmod-active-price").html(s), this.renderActiveInfo(i, t)
                    }
                }, {
                    key: "renderSelectCtrl", value: function (i, t, s, a) {
                        var n = (0, c.tmpl)(u.selectCtrlTpl, {
                            serviceData: i,
                            addressIndex: t,
                            locationData: s,
                            serviceTime: a
                        });
                        e(".jmod-select-ctrl").html(n), e(".jmod_select_address").bind("click", function (i) {
                            var t = e(i.currentTarget);
                            t.parent().hasClass("ui-address-close") ? t.parent().removeClass("ui-address-close").addClass("ui-address-open") : t.parent().removeClass("ui-address-open").addClass("ui-address-close")
                        }), e(".choose-address").bind("click", function (e) {
                            e.stopPropagation()
                        }), e(document).bind("click", function () {
                            e(".choose-address").removeClass("ui-address-open").addClass("ui-address-close")
                        }), e(".jmod_select_province_city").on("click", ".item-in", function (i) {
                            var t = e(i.currentTarget);
                            t.parent().addClass("cur").siblings().removeClass("cur"), 0 === t.parent().index() ? (e(".jmod_select_province").show(), e(".jmod_select_city").hide()) : (e(".jmod_select_city").show(), e(".jmod_select_province").hide())
                        }), e(".jmod_select_province").on("click", ".address-item", function (a) {
                            var n = e(a.currentTarget);
                            n.addClass("checked").siblings().removeClass("checked");
                            var c = n.attr("_province_id"), r = [], d = [];
                            for (var o in s[c].city) d.push(o);
                            if (~i.sku_city_ids.indexOf(c) || ~i.sku_city_ids.indexOf("999999")) r = d; else for (var l = 0, v = i.sku_city_ids.length; l < v; l++) ~d.indexOf(i.sku_city_ids[l]) && r.push(i.sku_city_ids[l]);
                            for (var _ = "", u = 0, p = r.length; u < p; u++) _ += '<div class="address-item" _city_id="' + r[u] + '"><span>' + t[r[u]] + "</span></div>";
                            e(".jmod_select_province").hide(), e(".jmod_select_city").html(_).show(), e(".jmod_select_province_city div:eq(0)").attr("_province_id", c).removeClass("cur").find("span").text(n.text()), e(".jmod_select_province_city div:eq(1)").addClass("cur").find("span").text("请选择")
                        })
                    }
                }, {
                    key: "renderCorpInfo", value: function (i) {
                        var t = (0, c.tmpl)(p.corpInfoTpl, {serviceData: i, clearProtocol: c.clearProtocol});
                        e(".jmod-corp-info").html(t), e(".jmod_company_wrap").on("click", ".tab-item", function (i) {
                            var t = e(i.currentTarget);
                            t.addClass("cur").siblings().removeClass("cur"), e(".jmod_company_content_wrap div:eq(" + t.index() + ")").show().siblings().hide()
                        })
                    }
                }, {
                    key: "renderSKUDetail", value: function (i) {
                        var t = (0, c.tmpl)(m.skuDetailTpl, {serviceData: i});
                        e(".jmod-sku-detail").html(t), e(".jmod_detail_wrap").html((0, c.restHTML)((0, c.clearProtocol)(i.s_detail, 0)))
                    }
                }, {
                    key: "renderPlatformGarantee", value: function () {
                        e(".jmod-platform-garantee").html('\n      <div class="mod-head mod-head-small">\n        <h3 class="mod-title-small">平台保障</h3>\n      </div>\n      <div class="mod-white-box">\n        <div class="guart-wrap">\n          <ul class="guart-list">\n            <li class="guart-item guart-quality">\n              <div class="guart-item-wrap">\n                <h4 class="guart-item-title">商家资质认证</h4>\n                <div class="guart-item-desc">严筛服务商，提供品质服务</div>\n              </div>\n            </li>\n            <li class="guart-item guart-instant">\n              <div class="guart-item-wrap">\n                <h4 class="guart-item-title">需求闪电响应</h4>\n                <div class="guart-item-desc">首次需求响应不超3分钟</div>\n              </div>\n            </li>\n            <li class="guart-item guart-service">\n              <div class="guart-item-wrap">\n                <h4 class="guart-item-title">平台交易担保</h4>\n                <div class="guart-item-desc">服务满意，再付款给服务商</div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    ')
                    }
                }, {
                    key: "renderFixedCorpContact", value: function (e) {
                        var i = new v["default"];
                        i.render(e)
                    }
                }, {
                    key: "bindPeriod", value: function (i) {
                        e(".jmod_select_period").on("click", ".ui-tag", function (t) {
                            var s = e(t.currentTarget);
                            if (s.hasClass("disabled")) return !1;
                            s.toggleClass("checked"), s.siblings().filter(".ui-tag").removeClass("checked");
                            var a = e(".jmod_address_text").attr("_city_id") || "",
                                n = e(".jmod_select_period .ui-tag.checked").attr("_period_id") || "";
                            i(a, n)
                        }), e(".jmod_select_period .ui-tag").length <= 1 && e(".jmod_select_period .ui-tag").trigger("click")
                    }
                }, {
                    key: "bindSelectCity", value: function (i, t, s, a, n) {
                        e(".jmod_select_city").on("click", ".address-item", function (c) {
                            var d = e(c.currentTarget);
                            e(".jmod_select_address").parent().removeClass("ui-address-open").addClass("ui-address-close"), d.addClass("checked").siblings().removeClass("checked");
                            var o = d.attr("_city_id"), l = e(".jmod_select_province_city div:eq(0)").attr("_province_id");
                            (0, r.setLastUsedLocationToCache)(l, o), e(".jmod_select_province_city div:eq(1)").attr("_city_id", o).find("span").text(d.text()), e(".jmod_address_text").attr("_province_id", l), e(".jmod_address_text").attr("_city_id", o), e(".jmod_address_text").text(t[l] + " " + t[o]);
                            for (var v = void 0, _ = 0, u = i.periodsAry.length; _ < u; _++) {
                                v = [];
                                for (var p = 0, m = a.length; p < m; p++) if (a[p].sku_service_time === i.periodsAry[_]) for (var f = 0, y = a[p].sku_city_ids.length; f < y; f++) {
                                    if ("999999" === a[p].sku_city_ids[f]) {
                                        v.push("999999");
                                        break
                                    }
                                    if (s[a[p].sku_city_ids[f]]) for (var h in s[a[p].sku_city_ids[f]].city) v.push(h); else v.push(a[p].sku_city_ids[f])
                                }
                                ~v.indexOf(o) || ~v.indexOf("999999") ? (e('.jmod_select_period .ui-tag[_period_id="' + i.periodsAry[_] + '"]').removeClass("disabled"), e('.jmod_select_period .ui-tag[_period_id="' + i.periodsAry[_] + '"]').removeAttr("disabled")) : (e('.jmod_select_period [_period_id="' + i.periodsAry[_] + '"]').removeClass("checked").addClass("disabled"), e('.jmod_select_period [_period_id="' + i.periodsAry[_] + '"]').removeAttr("disabled").attr("disabled", "disabled"))
                            }
                            var g = e(".jmod_select_period .ui-tag.checked").attr("_period_id") || "";
                            n(o, g)
                        })
                    }
                }, {
                    key: "renderHongbaoInfo", value: function (i) {
                        var t = i.hongbaoInfo;
                        t.activeNotBeginCount === i.skuCount ? e(".jmod_sku_active_price").parent().hide() : t.activeRemainTime > 0 ? e(".jmod_sku_active_price").parent().show() : e(".jmod_sku_active_price").parent().hide();
                        var s = t.deduction > 0 ? t.deduction / 100 : 0;
                        if (t.deductionCount > 0) {
                            var a = "使用红包可抵" + s + "元" + (t.deductionCount > 1 ? "起" : "");
                            e(".jmod_sku_active_price").html(a)
                        }
                    }
                }, {
                    key: "renderZeroActiveInfo", value: function (i) {
                        var t = "此商品仅剩" + i.zeroActiveCount + '件，<span class="price-board-t">' + (0, c.formatRemainTime)(i.zeroActiveTime - f, 2) + "</span>后结束！";
                        e(".jmod_active_remain_time").html(t), this.countRemainTime(i, i.zeroActiveTime - f)
                    }
                }, {
                    key: "renderActiveInfo", value: function (e, i) {
                        e.isZeroSerivce ? this.renderZeroActiveInfo(e) : i.hongbaoInfo && this.renderHongbaoInfo(i)
                    }
                }, {
                    key: "countRemainTime", value: function (e, i) {
                        y !== -1 && clearTimeout(y), this.startCountRemainTime(e, i)
                    }
                }, {
                    key: "startCountRemainTime", value: function (e, i) {
                        var t = this;
                        this.renderRemainTime(e, i), i > 0 ? y = setTimeout(function () {
                            f++, t.startCountRemainTime(e, --i)
                        }, 1e3) : y !== -1 && (y = -1, clearTimeout(y))
                    }
                }, {
                    key: "renderRemainTime", value: function (i, t) {
                        var s = "";
                        t > 0 ? i.isZeroSerivce && (s = "此商品仅剩" + i.zeroActiveCount + '件，<span class="price-board-t">' + (0, c.formatRemainTime)(i.zeroActiveTime - f, 2) + "</span>后结束！") : (s = "活动已结束", setTimeout(function () {
                            window.location.reload()
                        }, 500)), e(".jmod_active_remain_time").html(s)
                    }
                }, {
                    key: "bindSubmit", value: function (i) {
                        e(".jmod_buy_btn").on("click", function (t) {
                            var s = e(t.currentTarget);
                            if (s.hasClass("disabled")) return !1;
                            var a = e(".jmod_address_text").attr("_city_id") || "",
                                n = e(".jmod_address_text").attr("_province_id") || "",
                                c = e(".jmod_select_period .ui-tag.checked").attr("_period_id") || "";
                            return a ? c ? void i(a, n, c) : o["default"].showToast("fail", "请选择服务期限。") : o["default"].showToast("fail", "请选择您所在地区。")
                        })
                    }
                }]), i
            }();
        i["default"] = h
    }).call(i, t(8))
}, function (e, i) {
    e.exports = jQuery
}, function (e, i) {
    e.exports = _cfUI.toast
}, function (e, i, t) {
    (function (e) {
        "use strict";

        function s(e, i) {
            if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(i, "__esModule", {value: !0});
        var a = function () {
                function e(e, i) {
                    for (var t = 0; t < i.length; t++) {
                        var s = i[t];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                return function (i, t, s) {
                    return t && e(i.prototype, t), s && e(i, s), i
                }
            }(), n = t(2),
            c = '\n  <div class="fixed-contact">\n    <div class="fixed-contact-item">\n      <div class="fixed-contact-k">联系服务商</div>\n      <a class="fixed-contact-v jmod-wpa-qq jmod-consult-stat" _wpa_qq="<%=corpInfo.c_before_qq%>" <%if(!corpInfo.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> _stat_click_id="8_<%=corpInfo.c_id%>" href="<%if(corpInfo.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=corpInfo.c_before_qq%>&site=qq&menu=yes<%}%>" data-cid="<%=corpInfo.c_id%>">QQ 咨询</a>\n    </div>\n    <%if (corpInfo.c_service_time) {%>\n      <div class="fixed-contact-item">\n        <div class="fixed-contact-k">服务时间</div>\n        <%for(var i = 0; i < corpInfo.c_service_time.length; i++) {var timeItem = corpInfo.c_service_time[i];%>\n          <%if(timeItem.isEnable == 1){%>\n            <div class="fixed-contact-v">\n              <p><%=timeItem.weekStart%>至<%=timeItem.weekEnd%></p>\n              <p><%=timeItem.timeStart%>-<%=timeItem.timeEnd%></p>\n            </div>\n          <%}%>\n        <%}%>\n      </div>\n    <%}%>\n    <%if (corpInfo.c_contact) {%>\n      <div class="fixed-contact-item">\n        <div class="fixed-contact-k">客服电话</div>\n        <span class="fixed-contact-v"><%=corpInfo.c_contact%></span>\n      </div>\n    <%}%>\n      <div class="fixed-contact-item">\n      <a href="#" title="返回顶部" class="backtop"></a>\n    </div>\n  </div>\n',
            r = function () {
                function i() {
                    s(this, i)
                }

                return a(i, [{
                    key: "render", value: function (i) {
                        e(".mod-fixed-corp-contact").html((0, n.tmpl)(c, {corpInfo: i}))
                    }
                }]), i
            }();
        i["default"] = r
    }).call(i, t(8))
}, function (e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0});
    i.activePriceTpl = '\n  <div class="service-title"><%=serviceData.cs_name%></div>\n  <%if(serviceData.isZeroSerivce){%>\n    <!-- 0yuan -->\n    <div class="price-board">\n      <div class="price-board-h promo-board-t2 jmod_active_remain_time"></div>\n      <div class="price-board-b is-special">\n          <div class="price-board-opr">原价\n              <del class="price-board-op jmod_price_text">&yen;<%=(displayInfo.discountPriceList.length <= 1 ? displayInfo.discountPriceList[0] : (displayInfo.discountPriceList[0] + " - &yen;" + displayInfo.discountPriceList[displayInfo.discountPriceList.length - 1]))%></del></div>\n          <div class="price-board-spr">价格\n              <span class="price-board-p"><small style="font-size:20px;">&yen;</small>0</span>\n              <%if((serviceData.cs_id == 16983 || serviceData.cs_id == 13196 || serviceData.cs_id == 16863 || serviceData.cs_id == 16952) && (serviceData.nowTime > 1502985600 && serviceData.nowTime < 1506787199)){%>\n                <i class="mod-tag-orange">免费礼包领取中</i>\n              <%}else{%>\n                <i class="mod-tag-orange">秒杀进行中</i>\n              <%}%>\n          </div>\n      </div>\n    </div>\n  <%}else if(displayInfo.hongbaoInfo){%>\n    <!-- 红包 -->\n    <div class="price-board">\n        <div class="price-board-b">\n            <div class="price-board-spr">\n                价格<span class="price-board-p jmod_price_text"><small style="font-size:20px;">&yen;</small><%=(displayInfo.discountPriceList.length <= 1 ? displayInfo.discountPriceList[0] : (displayInfo.discountPriceList[0] + " - <small style=\'font-size:20px;\'>&yen;</small>" + displayInfo.discountPriceList[displayInfo.discountPriceList.length - 1]))%></span>\n            </div>\n            <div class="price-board-spr">优惠\n                <span class="mod-red-redeem jmod_sku_active_price"></span>\n                <a href="/Act/lucky/SC100?zctag=4.1.1.5" target="_blank" class="promo-red-link">领取红包 &gt;&gt;</a>\n            </div>\n        </div>\n    </div>\n  <%}else if(+serviceData.s_discount && +serviceData.s_discount < 100){%>\n    <!-- 特价 -->\n    <div class="price-board">\n        <div class="price-board-b is-special">\n            <div class="price-board-opr">原价\n                <span class="price-board-op jmod_oprice_text">&yen;<%=(displayInfo.originPriceList.length <=1 ? displayInfo.originPriceList[0] : (displayInfo.originPriceList[0] + " - &yen;" + displayInfo.originPriceList[displayInfo.originPriceList.length - 1]))%></span>\n            </div>\n            <div class="price-board-spr">\n                价格<span class="price-board-p jmod_price_text"><small style="font-size:20px;">&yen;</small><%=(displayInfo.discountPriceList.length <= 1 ? displayInfo.discountPriceList[0] : (displayInfo.discountPriceList[0] + " - <small style=\'font-size:20px;\'>&yen;</small>" + displayInfo.discountPriceList[displayInfo.discountPriceList.length - 1]))%></span>\n            </div>\n        </div>\n    </div>\n  <%}else{%>\n    <!-- normal -->\n    <div class="price-board">\n        <div class="price-board-b is-normal">\n            <div class="price-board-spr">价格\n                <span class="price-board-p jmod_price_text"><small style="font-size:20px;">&yen;</small><%=(displayInfo.discountPriceList.length <= 1 ? displayInfo.discountPriceList[0] : (displayInfo.discountPriceList[0] + " - <small style=\'font-size:20px;\'>&yen;</small>" + displayInfo.discountPriceList[displayInfo.discountPriceList.length - 1]))%></span>\n            </div>\n        </div>\n    </div>\n  <%}%>\n'
}, function (e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0});
    i.selectCtrlTpl = '\n  <div class="service-rest">\n    <div class="service-region">\n      <span class="rest-title">服务地区</span>\n      <div class="ui-address choose-address ui-address-close">\n        <div class="ui-checkbox-wrap jmod_select_address">\n          <label for="add16" class="ui-checkbox-text jmod_address_text">选择服务地区</label><span class="ui-address-tri"><span class="ui-address-tri-icon"></span></span>\n        </div>\n        <div class="ui-address-layer">\n          <div class="mod-tab-panel jmod_select_province_city">\n            <div class="tab-item cur" _province_id="<%=serviceData.sku_province_ids[0]%>">\n              <span class="item-in"><%=addressIndex[serviceData.sku_province_ids[0]]%></span>\n            </div>\n            <div class="tab-item" _city_id="">\n              <span class="item-in">请选择</span>\n            </div>\n          </div>\n          <div class="mod-tab-content">\n            <div class="tab-content clearfix jmod_select_province">\n              <%for(var i = 0, len = serviceData.sku_province_ids.length; i < len; i++){%>\n                <div class="address-item <%if(i <= 0){%>checked<%}%>" _province_id="<%=serviceData.sku_province_ids[i]%>"><span><%=addressIndex[serviceData.sku_province_ids[i]]%></span></div>\n              <%}%>\n            </div>\n            <div class="tab-content clearfix hidden jmod_select_city">\n              <% var citys = [], provCitys = [];\n                for (var i in locationData[serviceData.sku_province_ids[0]].city) {\n                  provCitys.push(i);\n                }\n                if(~serviceData.sku_city_ids.indexOf(serviceData.sku_province_ids[0]) || ~serviceData.sku_city_ids.indexOf("999999")) {\n                  citys = provCitys;\n                } else {\n                  for (var i = 0, len = serviceData.sku_city_ids.length; i < len; i++) {\n                    if (~provCitys.indexOf(serviceData.sku_city_ids[i])) {\n                      citys.push(serviceData.sku_city_ids[i]);\n                    }\n                  }\n                }\n                for(var i = 0, len = citys.length; i < len; i++) {\n              %>\n                <div class="address-item" _city_id="<%=citys[i]%>"><span><%=addressIndex[citys[i]]%></span></div>\n              <%}%>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="service-period jmod_select_period">\n      <span class="rest-title">服务期限</span>\n      <%for(var i = 0, len = serviceData.periodsAry.length; i < len; i++){%>\n        <span class="ui-tag mr" _period_id="<%=serviceData.periodsAry[i]%>"><%=serviceTime[serviceData.periodsAry[i]]%></span>\n      <%}%>\n    </div>\n  </div>\n  <a href="javascript:;" <%if(serviceData.isServiceProvider){%>disabled="disabled"<%}%> class="ui-button ui-button-primary ui-button-suc jmod_buy_btn <%if(serviceData.isServiceProvider){%>disabled<%}%>" _stat_click_id="6_1">立即购买</a>\n\n  <div class="service-grantee">\n    <span class="grantee-title">服务保障</span>\n    <div class="grantee-item icon-at-front ontime-grantee">承诺按时按质保证完成</div>\n    <%if(+serviceData.s_has_invoice){%>\n      <div class="grantee-item icon-at-front receipt-grantee">提供发票</div>\n    <%}%>\n  </div>\n'
}, function (e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0});
    i.corpInfoTpl = '\n  <div class="comp-represt">\n    <div class="logo-wrap">\n      <a href="/seller/corpinfo?c_id=<%=serviceData.c_id%>"><img src="<%=clearProtocol(serviceData.c_logo)%>" alt="<%=serviceData.c_name%>"></a>\n    </div>\n    <div class="comp-info">\n      <div><a class="comp-name" style="max-width:7em;display:inline-block;vertical-align:top;" title="<%=serviceData.c_name%>" href="/seller/corpinfo?c_id=<%=serviceData.c_id%>"><%=serviceData.c_name%></a><a href="/scenter/growth" target="_blank" class="lv">Lv<%=serviceData.cLevel%></a></div>\n      <p class="weak deal-amount">销量&nbsp;<span class="num"><%=(serviceData.c_pay_count || "暂无")%></span></p>\n      <p class="weak deal-amount">咨询量&nbsp;<span class="num"><%=(serviceData.c_asked_num || "暂无")%></span></p>\n      <%if(serviceData.c_before_qq){%>\n      <a _stat_click_id="7_<%=serviceData.c_id%>" <%if(!serviceData.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> href="<%if(serviceData.c_before_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=serviceData.c_before_qq%>&site=qq&menu=yes<%}%>" class="ui-button ui-button-primary ui-button-sm jmod-wpa-qq jmod-consult-stat" _wpa_qq="<%=serviceData.c_before_qq%>" data-cid="<%=serviceData.c_id%>" data-csid="<%=serviceData.cs_id%>">QQ咨询</a>\n      <%}%>\n    </div>\n  </div>\n  <div class="comp-rating-wrap">\n    <ul class="comp-rating">\n      <li class="comp-rating-item">\n        <h4 class="comp-rating-title">完成质量</h4>\n        <div class="comp-rating-score mod-emph" style="<%=(serviceData.c_quality_score <= 0 ? "color:#b7b7b7" : "")%>"><%=(serviceData.c_quality_score <= 0 ? "暂无" : (serviceData.c_quality_score/10).toFixed(1) + "分")%></div>\n      </li>\n      <li class="comp-rating-item">\n        <h4 class="comp-rating-title">服务态度</h4>\n        <div class="comp-rating-score mod-emph" style="<%=(serviceData.c_attitude_score <= 0 ? "color:#b7b7b7" : "")%>"><%=(serviceData.c_attitude_score <= 0 ? "暂无" : (serviceData.c_attitude_score/10).toFixed(1) + "分")%></div>\n      </li>\n      <li class="comp-rating-item">\n        <h4 class="comp-rating-title">工作速度</h4>\n        <div class="comp-rating-score mod-emph" style="<%=(serviceData.c_speed_score <= 0 ? "color:#b7b7b7" : "")%>"><%=(serviceData.c_speed_score <= 0 ? "暂无" : (serviceData.c_speed_score/10).toFixed(1) + "分")%></div>\n      </li>\n    </ul>\n  </div>\n  <div class="mod-tab-panel jmod_company_wrap">    <div class="tab-item cur">      <span class="item-in">公司简介</span>    </div>    <div class="tab-item">      <span class="item-in">业务介绍</span>    </div>  </div>  <div class="mod-tab-content jmod_company_content_wrap">    <div class="tab-content" style="height:200px">      <p><%=serviceData.c_brief%></p>    </div>    <div class="tab-content hidden" style="height:200px">      <p><%=serviceData.c_business_introduce%></p>    </div>  </div>'
}, function (e, i) {
    "use strict";
    Object.defineProperty(i, "__esModule", {value: !0});
    i.skuDetailTpl = '\n  <div class="mod-head mod-head-small">\n    <h3 class="mod-title-small">服务内容详情</h3>\n  </div>\n  <div class="service-detail-cont">\n    <div class="service-detail-title">服务详细介绍</div>\n    <div class="appendix">\n      <div class="content jmod_detail_wrap">\n      </div>\n    </div>\n    <div class="transact-step-cont service-detail-wrap">\n      <div class="service-detail-title">办理步骤及所需时间</div>\n      <div class="content">\n        <%=serviceData.s_steps%>\n      </div>\n    </div>\n    <div class="prepare-stuff-cont service-detail-wrap">\n      <div class="service-detail-title">办理所需材料</div>\n      <div class="content">\n        <%=serviceData.s_basic%>\n      </div>\n    </div>\n    <%if(serviceData.cs_deliver_duration){%>\n    <div class="process-time-cont service-detail-wrap">\n      <div class="service-detail-title">交付时长</div>\n      <div class="content">\n        付款后<%=serviceData.cs_deliver_duration%>天内交付服务。如遇办理材料问题，请与服务商及时沟通。\n      </div>\n    </div>\n    <%}%>\n    <%if(serviceData.cs_deliver_material && serviceData.cs_deliver_material.length){%>\n    <div class="process-time-cont service-detail-wrap">\n      <div class="service-detail-title">交付材料</div>\n      <div class="content">\n        <%for (var i = 0; i < serviceData.cs_deliver_material.length; i++) {%>\n          <%=(i+1)%>、<%=serviceData.cs_deliver_material[i]%><br>\n        <%}%>\n      </div>\n    </div>\n    <%}%>\n    <div class="process-time-cont service-detail-wrap" <%if(!serviceData.s_sale_desc){%>style="display:none"<%}%>>\n      <div class="service-detail-title">售后服务</div>\n      <div class="content">\n        <%=serviceData.s_sale_desc%>\n      </div>\n    </div>\n  </div>\n'
}, function (e, i, t) {
    (function (e) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function a(e, i) {
            if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(i, "__esModule", {value: !0});
        var n = function () {
            function e(e, i) {
                for (var t = 0; t < i.length; t++) {
                    var s = i[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            return function (i, t, s) {
                return t && e(i.prototype, t), s && e(i, s), i
            }
        }(), c = t(16), r = s(c), d = t(9), o = s(d), l = t(3), v = t(6), _ = s(v), u = function () {
            function i(e) {
                var t = e.detailView, s = e.detailModel;
                a(this, i), this.detailView = t, this.detailModel = s
            }

            return n(i, [{
                key: "init", value: function () {
                    var i = this, t = this.detailModel.getStore(), s = t.skuInfo, a = t.serviceData, n = t.addressIndex,
                        c = t.locationData, d = t.serviceTime, v = t.lastUsedLocation, u = t.nowTime,
                        p = this.detailModel.getDisplayInfo(s, a);
                    a.nowTime = u, this.detailView.renderBreadCrumb(t.cate), this.detailView.renderTips(a), this.detailView.renderActivePrice(a, p), this.changeHongbaoEntry(u), this.detailView.renderSelectCtrl(a, n, c, d), this.detailView.renderCorpInfo(a), this.detailView.renderSKUDetail(a), this.detailView.renderPlatformGarantee(), this.detailView.renderFixedCorpContact(a), this.detailView.bindPeriod(function (e, t) {
                        i.selectSku(e, t, a, u)
                    }), this.detailView.bindSelectCity(a, n, c, s, function (e, t) {
                        i.selectSku(e, t, a, u)
                    }), this.detailView.bindSubmit(function (t, s, n) {
                        var c = i.detailModel.findSkus(t, n), r = i.detailModel.getDisplayInfo(c, a);
                        if (!c || r.idList.length > 1) return o["default"].showToast("fail", "服务异常，请刷新页面重试。");
                        var d = r.idList[0];
                        e('#viewform [name="csId"]').val(a.cs_id), e('#viewform [name="skuId"]').val(d), e('#viewform [name="cityId"]').val(t), e('#viewform [name="provinceId"]').val(s), a.isZeroSerivce ? e('#viewform [name="activeType"]').val(l.ACTIVITY_TYPE.ZERO) : r.hongbaoInfo ? e('#viewform [name="activeType"]').val(l.ACTIVITY_TYPE.HB) : e('#viewform [name="activeType"]').val("0"), e(".jmod_buy_btn").addClass("disabled"), o["default"].toggleLoading(!0), _["default"].request({
                            url: "/order/loginuser",
                            type: "POST",
                            needRefresh: !0,
                            needLogin: !0,
                            success: function (i) {
                                return e("#viewform").submit()
                            },
                            error: function () {
                                o["default"].showToast("fail", "网络错误请稍后再试。")
                            },
                            complete: function () {
                                e(".jmod_buy_btn").removeClass("disabled"), o["default"].toggleLoading(!1)
                            }
                        })
                    });
                    var m = v.lastUsedProvinceId, f = v.lastUsedCityId;
                    f && m ? (e(".jmod_select_province .address-item[_province_id=" + m + "]").trigger("click"), e(".jmod_select_city .address-item[_city_id=" + f + "]").trigger("click")) : "999999" !== m && (+f || this.detailModel.getLastUsedLocationFromServer(function (i, t) {
                        e(".jmod_select_province .address-item[_province_id=" + i + "]").trigger("click"), e(".jmod_select_city .address-item[_city_id=" + t + "]").trigger("click")
                    })), r["default"].setQQWPA(), r["default"].addQQConsultStat()
                }
            }, {
                key: "selectSku", value: function (e, i, t, s) {
                    var a = this.detailModel.findSkus(e, i), n = this.detailModel.getDisplayInfo(a, t);
                    this.detailView.renderActivePrice(t, n), this.changeHongbaoEntry(s)
                }
            }, {
                key: "changeHongbaoEntry", value: function (i) {
                    var t = 150264e4, s = 1509465599;
                    i > t && i < s && e(".promo-red-link").attr("href", "/activity/festival/")
                }
            }]), i
        }();
        i["default"] = u
    }).call(i, t(8))
}, function (e, i) {
    e.exports = _cfCommon.qqUtils
}, function (e, i) {
    e.exports = _cfCommon.timeStat
}]);
//# sourceMappingURL=main.entry.js.map/*  |xGv00|f56067c4044fac198ba5ce42d5f0a27d */