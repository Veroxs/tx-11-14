!function (e) {
    function t(n) {
        if (a[n]) return a[n].exports;
        var i = a[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var a = {};
    return t.m = e, t.c = a, t.p = "", t(0)
}([function (e, t, a) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var i = a(1), o = n(i), d = a(17), r = n(d), s = a(21), c = n(s), l = a(22), u = new o["default"],
        m = new r["default"], p = new c["default"]({orderSubmitView: u, orderSubmitModel: m});
    p.init(), (0, l.initReport)(22)
}, function (e, t, a) {
    (function (e) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            var t = new b["default"];
            t.init("useVfund"), t.init("agreement"), t.init("userAgreement"), e(".ui-textarea.count").each(function (e, t) {
                new g["default"](t)
            }), new C["default"], (0, f.setValidateConfig)({
                renderTips: d,
                ignoreHidden: !1,
                errorClass: ".input-tips.err",
                colClass: ".jmod_form_col"
            }), (0, f.blurValidate)(".jmod_edit_form"), (0, f.blurValidate)(".jmod_all_form"), (0, p.setQQWPA)()
        }

        function d(t, a, n) {
            "error" === a ? e(t).parents().filter(".jmod_form_col").length > 0 ? e(t).closest(".jmod_form_col").find(".err").find("span:eq(1)").text(n).end().css("display", "inline-block") : e(t).closest(".form-col").find(".err").find("span:eq(1)").text(n).end().css("display", "inline-block") : e(t).parents().filter(".jmod_form_col").length > 0 ? e(t).closest(".jmod_form_col").find(".err").hide() : e(t).closest(".form-col").find(".err").hide()
        }

        function r() {
            var t = e(".jmod_pay_card"), a = 0;
            t.attr("style", "").each(function () {
                a = Math.max(a, e(this).height())
            }), t.each(function () {
                e(this).height(a)
            })
        }

        function s() {
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var c = function () {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t
                }
            }(), l = a(3), u = n(l), m = a(4), p = a(5), f = a(6), v = a(7), _ = n(v), h = a(8), b = n(h), y = a(9),
            g = n(y), j = a(10), w = n(j), k = a(11), I = n(k), x = a(12), C = n(x), A = a(13), L = n(A), N = a(14),
            P = n(N), E = a(15), T = n(E), q = a(16), D = 0, O = 3, S = {
                init: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.addrInfo = t, this.userInfo = a, this.uaId = "", this.delAddrDialog = new w["default"]({
                        tit: "删除买家信息",
                        cont: '<div class="ui-dialog-alert">确认删除买家信息？</div>',
                        btnOK: {
                            text: "确定删除", theme: "suc", callback: function () {
                                e.delAddress()
                            }
                        },
                        btnNo: null
                    }), this.bindEvents()
                }, bindEvents: function () {
                    var t = this;
                    this.addrInfo.length && 0 !== this.addrInfo.length || this.showAddPayInfoEditForm(!0), e(document).on("click", ".jmod_pay_card", function () {
                        return !e(this).hasClass("is-checked") && void e(this).addClass("is-checked").siblings().removeClass("is-checked")
                    }), e(document).on("click", ".jmod_edit_btn", function (t) {
                        t.stopPropagation(), e(".jmod_add_btn").hide(), e(".jmod_pay_card").removeClass("is-edit");
                        var a = e(this).closest(".jmod_pay_card").addClass("is-edit").attr("_ua_id"),
                            n = e(this).closest(".jmod_pay_card").find(".jmod_email_wrap").text(),
                            i = e(this).closest(".jmod_pay_card").find(".jmod_corp_wrap").text();
                        e(".jmod_edit_form").attr("_ua_id", a).show(), e(".jmod_edit_form .jmod_form_header").text("修改买家信息"), e('.jmod_edit_form input[name="ua_name"]').val(e(this).closest(".jmod_pay_card").find(".jmod_name_wrap").text()).focus(), e('.jmod_edit_form input[name="ua_mobile"]').val(e(this).closest(".jmod_pay_card").find(".jmod_mobile_wrap").text()).focus(), e('.jmod_edit_form input[name="ua_email"]').val("--" === n ? "" : n).focus(), e('.jmod_edit_form input[name="ua_corp_name"]').val("--" === i ? "" : i).focus(), e(".jmod_save_btn").focus()
                    }), e(document).on("click", ".jmod_del_btn", function (a) {
                        a.stopPropagation(), t.uaId = e(this).closest(".jmod_pay_card").attr("_ua_id"), t.delAddrDialog.show()
                    }), e(document).on("click", ".jmod_add_btn a", function () {
                        t.showAddPayInfoEditForm()
                    }), e(document).on("click", ".jmod_save_btn", function () {
                        if (e(".jmod_save_btn").hasClass("disabled")) return !1;
                        var a = e(".jmod_edit_form").attr("_ua_id"), n = e('.jmod_edit_form input[name="ua_name"]').val(),
                            i = e('.jmod_edit_form input[name="ua_mobile"]').val(),
                            o = e('.jmod_edit_form input[name="ua_email"]').val(),
                            d = e('.jmod_edit_form input[name="ua_corp_name"]').val();
                        if (!(0, f.validate)(".jmod_edit_form")) return !1;
                        var s = {};
                        s.ua_name = n, s.ua_mobile = i, s.ua_email = o, s.ua_corp_name = d, +a ? (s.op = "update", s.ua_id = a) : s.op = "add", s.timestamp = (new Date).getTime(), e(".jmod_save_btn").addClass("disabled");
                        var c = {
                            postData: s, successCallback: function (t) {
                                if (t = t || {}, e(".jmod_save_btn").removeClass("disabled"), e(".jmod_edit_form").hide(), +a) {
                                    var s = e('.jmod_pay_card[_ua_id="' + a + '"]');
                                    s.removeClass("is-edit"), s.find(".jmod_name_wrap").text(n), s.find(".jmod_mobile_wrap").text(i), s.find(".jmod_email_wrap").text(o || "--"), s.find(".jmod_corp_wrap").text(d || "--")
                                } else {
                                    if ("0" === a) {
                                        var c = e('.jmod_pay_card[_ua_id="' + a + '"]');
                                        a = t.uaId, c.removeClass("is-edit"), c.attr("_ua_id", a), c.find(".jmod_name_wrap").text(n), c.find(".jmod_mobile_wrap").text(i), c.find(".jmod_email_wrap").text(o || "--"), c.find(".jmod_corp_wrap").text(d || "--")
                                    } else {
                                        a = t.uaId;
                                        var l = '\n                <div class="ui-paycard jmod_pay_card" _ua_id="">\n                  <a href="javascript:void(0);" class="ui-paycard-edit jmod_edit_btn"></a>\n                  <a href="javascript:void(0);" class="ui-paycard-del jmod_del_btn"></a>\n                  <div class="ui-paycard-row">\n                    <div class="ui-paycard-title">姓名</div>\n                    <div class="ui-paycard-val"><p class="jmod_name_wrap"></p></div>\n                  </div>\n                  <div class="ui-paycard-row">\n                    <div class="ui-paycard-title">联系电话</div>\n                    <div class="ui-paycard-val"><p class="jmod_mobile_wrap"></p></div>\n                  </div>\n                  <div class="ui-paycard-row">\n                    <div class="ui-paycard-title">邮箱</div>\n                    <div class="ui-paycard-val"><p class="jmod_email_wrap pay-car-mail"></p></div>\n                  </div>\n                  <div class="ui-paycard-row">\n                    <div class="ui-paycard-title">公司</div>\n                    <div class="ui-paycard-val">\n                      <p class="pay-card-company jmod_corp_wrap"></p>\n                    </div>\n                  </div>\n                </div>',
                                            u = e(l).attr("_ua_id", a).find(".jmod_name_wrap").text(n).end().find(".jmod_mobile_wrap").text(i).end().find(".jmod_email_wrap").text(o || "--").end().find(".jmod_corp_wrap").text(d || "--").end();
                                        e(".jmod_pay_card_wrap").append(u)
                                    }
                                    var m = e(".jmod_pay_card").length;
                                    m >= O ? e(".jmod_add_btn").hide() : 1 === m && e(".jmod_pay_card").addClass("is-checked")
                                }
                                e(".jmod_pay_card").length < O && e(".jmod_add_btn").show(), r()
                            }, errorCallback: function () {
                                e(".jmod_save_btn").removeClass("disabled")
                            }
                        };
                        t.addressEvents(c)
                    }), e(document).on("click", ".jmod_cancel_btn", function () {
                        e(".jmod_edit_form").hide();
                        var t = e(".jmod_edit_form").attr("_ua_id");
                        t && e('.jmod_pay_card[_ua_id="' + t + '"]').removeClass("is-edit"), e(".jmod_pay_card").length < O && e(".jmod_add_btn").show()
                    })
                }, showAddPayInfoEditForm: function (t) {
                    e(".jmod_add_btn").hide(), e(".jmod_edit_form").attr("_ua_id", "").show(), e(".jmod_edit_form .sub-form-header").text("添加买家信息");
                    var a = e('.jmod_edit_form input[name="ua_name"]'), n = e('.jmod_edit_form input[name="ua_mobile"]'),
                        i = e('.jmod_edit_form input[name="ua_email"]');
                    t ? (a.parent().find(".placeholder").hide(), n.parent().find(".placeholder").hide(), i.parent().find(".placeholder").hide(), 0 === +this.userInfo.mobile && (this.userInfo.mobile = ""), a.val(this.userInfo.name), n.val(this.userInfo.mobile), i.val(this.userInfo.email)) : (a.val("").blur(), n.val("").blur(), i.val("").blur()), e('.jmod_edit_form input[name="ua_corp_name"]').val("").blur(), e(".jmod_edit_form").find(".err").hide()
                }, bindAddressEvent: function (e) {
                    this.addressEvents = e
                }, delAddress: function () {
                    var t = this, a = e('.jmod_pay_card[_ua_id="' + this.uaId + '"]'), n = {};
                    n.op = "del", n.ua_id = this.uaId, n.timestamp = (new Date).getTime();
                    var i = {
                        postData: n, successCallback: function () {
                            a.remove(), t.uaId === e(".jmod_edit_form").attr("_ua_id") && e(".jmod_edit_form").hide();
                            var n = e(".jmod_pay_card").length;
                            n < O && e(".jmod_add_btn").show(), 0 === n && t.showAddPayInfoEditForm(), r()
                        }, errorCallback: function () {
                        }
                    };
                    this.addressEvents(i), this.delAddrDialog.hide()
                }
            }, V = {
                init: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.skuNumLimit = t.skuNumLimit, this.remainActStockNum = t.remainActStockNum, this.isZeroAct = t.isZeroAct, this.isHBAct = t.isHBAct, this.isUseVfund = t.isUseVfund, this.count = t.count, this.orderInfo = t.orderInfo, this.activeInfo = t.activeInfo, this.hongbaoInfo = t.hongbaoInfo, this.isZeroAct && (e(".mod-quantity-plus").addClass("inactived"), e(".mod-quantity-number").attr("readonly", "readonly"), e(".td-quantity .input-tips").eq(1).show()), this.isUseVfund && this.remainActStockNum === this.count && e(".td-quantity .input-tips").last().show(), this.skuNumLimit === this.count && e(".mod-quantity-plus").addClass("inactived"), this.bindEvents()
                }, bindEvents: function () {
                    var t = this;
                    e(document).on("click", ".mod-quantity-plus", function () {
                        t.isZeroAct || t.count >= t.skuNumLimit || (t.count = +e(".mod-quantity-number").val() + 1, e(".mod-quantity-number").val(t.count), t.changeUI(), t.changePrice())
                    }), e(document).on("click", ".mod-quantity-minus", function () {
                        t.isZeroAct || t.count <= 1 || (t.count = +e(".mod-quantity-number").val() - 1, e(".mod-quantity-number").val(t.count), t.changeUI(), t.changePrice())
                    }), e(document).on("blur", ".mod-quantity-number", function () {
                        var a = e(".mod-quantity-number");
                        if (!t.isZeroAct) {
                            var n = +a.val();
                            if (isNaN(n) || n <= 1) return t.count = 1, a.val(t.count), t.changeUI(), void t.changePrice();
                            if (n >= t.skuNumLimit) return t.count = t.skuNumLimit, a.val(t.count), t.changeUI(), void t.changePrice();
                            t.count = n, a.val(t.count), t.changeUI(), t.changePrice()
                        }
                    }), e(document).on("change", "#useVfund", function () {
                        t.isUseVfund = !t.isUseVfund, t.changeUI(), t.changePrice()
                    }), e(".mod-quantity-number").bind("input propertychange", function () {
                        var t = e(this).val();
                        t.length > 5 && (t = t.slice(0, 5), e(this).val(t))
                    })
                }, changeUI: function () {
                    return 1 === this.count ? e(".mod-quantity-minus").addClass("inactived") : e(".mod-quantity-minus").removeClass("inactived"), this.count === this.skuNumLimit ? e(".mod-quantity-plus").addClass("inactived") : e(".mod-quantity-plus").removeClass("inactived"), this.count >= this.skuNumLimit ? (e(".td-quantity .input-tips").last().hide(), void e(".td-quantity .input-tips").first().show()) : this.isUseVfund && this.count >= this.remainActStockNum ? (e(".td-quantity .input-tips").first().hide(), void e(".td-quantity .input-tips").last().show()) : (e(".td-quantity .input-tips").last().hide(), void e(".td-quantity .input-tips").first().hide())
                }, changePrice: function () {
                    var t = this.orderInfo.serviceTotal * this.count, a = 0;
                    a = this.count >= this.remainActStockNum ? this.activeInfo.activeDeduction * this.remainActStockNum : this.activeInfo.activeDeduction * this.count;
                    var n = this.getFinalHBDiscount(a);
                    this.isHBAct ? (e(".total-price").html("&yen;" + u["default"].toDecimal(t, 2)), e(".jmod_oldTotalPrice").html(u["default"].toDecimal(t, 2) + "元"), this.isUseVfund ? (e(".jmod_totalHB").html(u["default"].toDecimal(n, 2) + "元"), e(".hb_tips").html(u["default"].toDecimal(n, 2)), e(".jmod_payVfund").html("-" + u["default"].toDecimal(n, 2) + "元"), e(".jmod_totalPrice").html(u["default"].toDecimal(t - n, 2) + "元")) : (e(".jmod_payVfund").html("-0.00元"), e(".jmod_totalPrice").html(u["default"].toDecimal(t, 2) + "元"))) : (e(".total-price").html("&yen;" + u["default"].toDecimal(t, 2)), e(".jmod_totalPrice").html(u["default"].toDecimal(t, 2) + "元"))
                }, getFinalHBDiscount: function (e) {
                    var t = +this.hongbaoInfo.userBalance < +this.hongbaoInfo.corpBalance ? this.hongbaoInfo.userBalance : this.hongbaoInfo.corpBalance;
                    return e < +t ? e : t
                }
            }, B = function () {
                function t() {
                    i(this, t)
                }

                return c(t, [{
                    key: "initPage", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.formatPrice(e), this.store = e, this.renderPage(e), o(), S.init(e.addrInfo, e.userInfo), V.init(e), this.bindEvents()
                    }
                }, {
                    key: "renderPage", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = "",
                            n = new _["default"]({
                                steps: [{num: 1, title: "提交订单", status: "cur"}, {
                                    num: 2,
                                    title: "付款"
                                }, {num: 3, title: "接受服务"}, {num: 4, title: "确认服务完成"}]
                            });
                        if (e(n).css("margin-bottom", 0), t.errLevel === m.ERROR_LEVEL.ERROR) {
                            var i = '\n        <div class="mod-white-box payment-content-box">\n          <p>' + t.msg + '</p><br>\n          <a href="/" class="ui-button ui-button-suc" style="color:#fff";>返回首页</a>\n        </div>\n      ';
                            return a += i, void e(".jmod_main_content").append(n, a)
                        }
                        if (t.errLevel === m.ERROR_LEVEL.WARNING) {
                            var o = '\n        <div class="ui-toast-inpage" style="margin-bottom: 12px;">\n          <div class="ui-toast-block"><span class="ico-toast warn-bw"></span>' + t.msg + "</div>\n        </div>\n      ";
                            a += o
                        }
                        var d = this.getUserAddrInfoHtml(t), s = this.getNewOrderInfoHtml(t),
                            c = this.getOrderSummaryHtml(t);
                        a += d + s + c, r()
                    }
                }, {
                    key: "getUserAddrInfoHtml", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.addrInfo;
                        return u["default"].tmpl(L["default"], {addrInfo: t})
                    }
                }, {
                    key: "getNewOrderInfoHtml", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.orderInfo,
                            a = e.hongbaoInfo, n = e.addressData, i = e.serviceDeadline, o = e.skuNumLimit,
                            d = e.remainActStockNum, r = e.isHBAct;
                        return u["default"].tmpl(P["default"], {
                            orderInfo: t,
                            hongbaoInfo: a,
                            addressData: n,
                            serviceDeadline: i,
                            skuNumLimit: o,
                            remainActStockNum: d,
                            isHBAct: r
                        })
                    }
                }, {
                    key: "getOrderSummaryHtml", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.orderInfo,
                            a = e.isHBAct;
                        return u["default"].tmpl(T["default"], {orderInfo: t, isHBAct: a})
                    }
                }, {
                    key: "formatPrice", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.orderInfo,
                            a = e.hongbaoInfo, n = e.activeInfo;
                        return t.servicePrice = t.servicePrice ? u["default"].toDecimal(t.servicePrice / 100, 2) : "0.00", t.serviceTotal = t.serviceTotal ? u["default"].toDecimal(t.serviceTotal / 100, 2) : "0.00", t.payFund = t.payFund ? u["default"].toDecimal(t.payFund / 100, 2) : "0.00", t.payVfund = t.payVfund ? u["default"].toDecimal(t.payVfund / 100, 2) : "0.00", a.userBalance = a.userBalance ? u["default"].toDecimal(a.userBalance / 100, 2) : "0.00", a.corpBalance = a.corpBalance ? a.corpBalance / 100 : 0, n.activeDeduction = n.activeDeduction ? n.activeDeduction / 100 : 0, e
                    }
                }, {
                    key: "bindEvents", value: function () {
                        var t = '\n    <div style="width:700px;">\n        <p>腾讯众创空间众包服务平台接入了由腾讯以外的独立第三方服务机构为创业团队及相关用户提供创业中所需的各种服务，用户可以自行选择财法税、营销推广、招聘、创业周边等方面的服务。用户应当自行判断是否选择由第三方提供的服务并承担第三方服务内容引起的问题、风险、责任等。腾讯不对第三方服务的安全性、准确性、有效性等承担任何担保或承诺。若因第三方服务导致的任何问题，均与腾讯无关，且腾讯不承担任何责任。</p>\n    </div>',
                            a = new w["default"]({
                                tit: "免责声明",
                                cont: t,
                                btnOK: {
                                    text: "确定", theme: "suc", callback: function () {
                                        a.hide()
                                    }
                                },
                                btnNo: null
                            }), n = new w["default"]({
                                tit: "用户授权协议",
                                cont: q.userProtocolTpl,
                                btnOK: {
                                    text: "确定", theme: "suc", callback: function () {
                                        n.hide()
                                    }
                                },
                                btnNo: null
                            });
                        e("#show_protocol").on("click", function (e) {
                            return a.show(), e.stopPropagation(), !1
                        }), e("#show_user_protocol").on("click", function (e) {
                            return n.show(), e.stopPropagation(), !1
                        }), e("#jmod_cancel_submit").on("click", function () {
                            return window.history.back(), !1
                        })
                    }
                }, {
                    key: "addressEvents", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                        S.bindAddressEvent(e)
                    }
                }, {
                    key: "submitOrder", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s, a = this.store;
                        e("#jmod_confirm_submit").on("click", function () {
                            var n = this;
                            if (e(this).hasClass("disabled")) return !1;
                            if (e(".jmod_pay_card.is-checked").length <= 0) return I["default"].showToast("fail", "请选择一个买家信息"), !1;
                            if (!(0, f.validate)(".jmod_all_form", {ignoreTypes: ["empty"]})) return !1;
                            if (!e("#agreement").closest(".ui-checkbox").find(".ui-checkbox-rect").hasClass("checked")) return I["default"].showToast("fail", "请同意《腾讯众创空间第三方服务声明》"), !1;
                            if (!e("#userAgreement").closest(".ui-checkbox").find(".ui-checkbox-rect").hasClass("checked")) return I["default"].showToast("fail", "请同意《用户授权协议》"), !1;
                            e(this).addClass("disabled");
                            var i = (0, f.getFormParam)(".jmod_order_confirm_form");
                            delete i.ua_name, delete i.ua_mobile, delete i.ua_email, delete i.ua_corp_name, i.cityId = a.orderInfo.cityId, i.provinceId = a.orderInfo.provinceId, i.csId = a.orderInfo.csId, i.invoiceStatus = a.orderInfo.invoiceStatus, i.skuId = a.orderInfo.skuId, i.userName = e(".jmod_pay_card.is-checked").find(".jmod_name_wrap").text(), i.userMobile = e(".jmod_pay_card.is-checked").find(".jmod_mobile_wrap").text(), i.userEmail = e(".jmod_pay_card.is-checked").find(".jmod_email_wrap").text(), i.userCorpName = e(".jmod_pay_card.is-checked").find(".jmod_corp_wrap").text(), i.skuNum = e(".mod-quantity-number").val();
                            var o = e("#useVfund").closest(".ui-checkbox").find(".ui-checkbox-rect").hasClass("checked");
                            a.isHBAct ? o ? (i.activeType = a.activeInfo.activeId, i.hbDeduction = 100 * +e(".hb_tips").html()) : i.activeType = D : i.activeType = a.activeInfo.activeId, a.errLevel === m.ERROR_LEVEL.WARNING && (i.activeType = D), i.timestamp = (new Date).getTime();
                            var d = {
                                postData: i, successCallback: function () {
                                    e(n).removeClass("disabled")
                                }, errorCallback: function () {
                                    e(n).removeClass("disabled")
                                }
                            };
                            t(d)
                        })
                    }
                }]), t
            }();
        t["default"] = B
    }).call(t, a(2))
}, function (e, t) {
    e.exports = jQuery
}, function (e, t) {
    e.exports = _cfCommon.utils
}, function (e, t) {
    e.exports = _cfCommon.constants
}, function (e, t) {
    e.exports = _cfCommon.qqUtils
}, function (e, t) {
    e.exports = _cfCommon.formValidate
}, function (e, t, a) {
    (function (e) {
        "use strict";

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }(), i = function () {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, t);
                var i = {"class": "mod-orderstep", steps: n.steps ? n.steps : [], wrapWidth: 1050, itemWidth: 160};
                return this.CONF = e.extend({}, i, n || {}), this.init()
            }

            return n(t, [{
                key: "init", value: function () {
                    for (var t = e("<ul>", {"class": this.CONF["class"]}), a = 0; a < this.CONF.steps.length; a++) {
                        var n = n = this._getChildNode(this.CONF.steps[a]);
                        t.append(n)
                    }
                    return t.get(0)
                }
            }, {
                key: "_getChildNode", value: function (t) {
                    var a = this.CONF.steps.length - 1, n = e("<li>", {
                        "class": "mod-orderstep-item",
                        css: {
                            width: this.CONF.itemWidth,
                            marginLeft: 1 !== t.num ? (this.CONF.wrapWidth - this.CONF.itemWidth * a - 17) / a : ""
                        }
                    });
                    "cur" === t.status ? e(n).addClass("mod-orderstep-cur") : "done" === t.status && e(n).addClass("mod-orderstep-done");
                    var i = [];
                    i.push('<p class="mod-orderstep-count">' + t.num + "</p>"), i.push('<p class="mod-orderstep-title">' + t.title + "</p>");
                    var o = t.desc || [];
                    if (o.forEach(function (e) {
                            i.push('<p class="mod-orderstep-time">' + e + "</p>")
                        }), t.num !== this.CONF.steps.length) {
                        var d = this.CONF.wrapWidth / a;
                        i.push('<i style="width: ' + d + 'px"></i>')
                    }
                    return n.append(i.join("")), n
                }
            }]), t
        }();
        t["default"] = i
    }).call(t, a(2))
}, function (e, t) {
    e.exports = _cfUI.checkbox
}, function (e, t) {
    e.exports = _cfUI.textarea
}, function (e, t) {
    e.exports = _cfUI.dialog
}, function (e, t) {
    e.exports = _cfUI.toast
}, function (e, t) {
    e.exports = _cfUI.placeholder
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = '\n  <div class="mod-white-box payment-content-box">\n    <div class="title-18px">买家信息</div>\n    <div class="pay-card-wrap jmod_pay_card_wrap">\n      <!-- 默认 -->\n      <%if(addrInfo.length > 0){%>\n        <%for(var i = 0, l = (addrInfo.length > 3 ? 3 : addrInfo.length); i < l; i++){var item = addrInfo[i];%>\n          <div class="ui-paycard jmod_pay_card <%if(i == 0){%>is-checked<%}%>" _ua_id="<%=item.ua_id%>">\n            <a href="javascript:void(0);" class="ui-paycard-edit jmod_edit_btn"></a>\n            <a href="javascript:void(0);" class="ui-paycard-del jmod_del_btn"></a>\n            <div class="ui-paycard-row">\n              <div class="ui-paycard-title">姓名</div>\n              <div class="ui-paycard-val"><p class="jmod_name_wrap"><%=(item.ua_name||"--")%></p></div>\n            </div>\n            <div class="ui-paycard-row">\n              <div class="ui-paycard-title">联系电话</div>\n              <div class="ui-paycard-val"><p class="jmod_mobile_wrap"><%=(item.ua_mobile||"--")%></p></div>\n            </div>\n            <div class="ui-paycard-row">\n              <div class="ui-paycard-title">邮箱</div>\n              <div class="ui-paycard-val"><p class="jmod_email_wrap pay-card-mail"><%=(item.ua_email||"--")%></p></div>\n            </div>\n            <div class="ui-paycard-row">\n              <div class="ui-paycard-title">公司</div>\n              <div class="ui-paycard-val">\n                <p class="pay-card-company jmod_corp_wrap"><%=(item.ua_corp_name||"--")%></p>\n              </div>\n            </div>\n          </div>\n        <%}%>\n      <%}%>\n    </div>\n    <div class="form-col jmod_add_btn" <%if(addrInfo.length >= 3){%>style="display:none"<%}%>>\n      <a href="javascript:void(0);" class="add-item">+ 添加买家信息</a>\n    </div>\n    <div class="mod-form jmod_edit_form" style="display:none">\n      <div class="mod-form-special">\n        <div class="mod-form-hd"><h4 class="caption caption-special jmod_form_header">添加买家信息</h4></div>\n        <div class="mod-form-bd">\n\n          <div class="mod-form-row">\n            <div class="mod-form-tit">\n              <label><span class="require">*</span>姓名</label>\n            </div>\n            <div class="mod-form-cont jmod_form_col">\n              <div class="ui-input default-input-width">\n                <input type="text" name="ua_name" validate="true" validate_type="empty|jsLength" maxlength="10" maxlen="10" minlen="2" validate_tip="请填写姓名|2-10个字" placeholder="请填写真实姓名">\n                <div class="ui-input-bg"></div>\n              </div>\n              <p class="input-tips err hidden">\n                <span class="ico-err"></span><span>您的输入有误</span>\n              </p>\n              <p class="input-tips suc hidden">\n                <span class="ico-suc"></span>您的输入正确\n              </p>\n            </div>\n          </div>\n          <div class="mod-form-row">\n            <div class="mod-form-tit">\n              <label><span class="require">*</span>联系电话</label>\n            </div>\n            <div class="mod-form-cont jmod_form_col">\n              <div class="ui-input default-input-width">\n                <input type="text" name="ua_mobile" maxlength="11" maxlen="11" validate="true" validate_type="empty|legal" legal_type="mobile_phone" validate_tip="请填写11位手机号码|请填写11位手机号码" placeholder="请填写常用电话，便于服务商与您联系">\n                <div class="ui-input-bg"></div>\n              </div>\n              <p class="input-tips err hidden">\n                <span class="ico-err"></span><span>您的输入有误</span>\n              </p>\n              <p class="input-tips suc hidden">\n                <span class="ico-suc"></span>您的输入正确\n              </p>\n            </div>\n          </div>\n          <div class="mod-form-row">\n            <div class="mod-form-tit">\n              <label>邮箱</label>\n            </div>\n            <div class="mod-form-cont jmod_form_col">\n              <div class="ui-input default-input-width">\n                <input type="text" name="ua_email" validate="true" validate_type="legal" legal_type="email" maxlength="50" validate_tip="请填写真实邮箱" placeholder="请填写您的常用邮箱">\n                <div class="ui-input-bg"></div>\n              </div>\n              <p class="input-tips err hidden">\n                <span class="ico-err"></span><span>您的输入有误</span>\n              </p><p class="input-tips suc hidden">\n                <span class="ico-suc"></span>您的输入正确\n              </p>\n            </div>\n          </div>\n          <div class="mod-form-row">\n            <div class="mod-form-tit">\n              <label>公司</label>\n            </div>\n            <div class="mod-form-cont jmod_form_col">\n              <div class="ui-input default-input-width">\n                <input type="text" name="ua_corp_name" validate="true" validate_type="jsLength" maxlength="25" maxlen="25" minlen="2" validate_tip="2-25个字" placeholder="建议您填写所在公司的信息，便于服务商对你的公司进行服务">\n                <div class="ui-input-bg"></div>\n              </div>\n              <p class="input-tips err hidden">\n                <span class="ico-err"></span><span>您的输入有误</span>\n              </p><p class="input-tips suc hidden">\n                <span class="ico-suc"></span>您的输入正确\n              </p>\n            </div>\n          </div>\n          <div class="mod-form-row">\n            <div class="mod-form-tit">\n            </div>\n            <div class="mod-form-cont">\n              <a href="javascript:void(0);" class="ui-button ui-button-primary jmod_save_btn">确定</a><a href="javascript:void(0);" class="ui-button jmod_cancel_btn" style="color:#323232">取消</a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n';
    t["default"] = a
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = '\n  <div class="mod-white-box payment-content-box">\n    <div class="title-18px">服务信息</div>\n    <p class="weak">您选择购买如下企业服务，请确认服务内容及价格</p>\n    <div class="ui-table table-mall table-order table-submit-c theme-2">\n      <table>\n        <colgroup>\n          <col class="col-service-cont">\n          <col class="col-vender-name">\n          <col class="col-service-region">\n          <col class="col-service-period">\n          <col class="col-price">\n          <col class="col-quantity">\n          <col class="col-total-price">\n        </colgroup>\n        <thead>\n          <tr>\n            <th>订单内容</th>\n            <th>服务商</th>\n            <th>服务地区</th>\n            <th>服务期限</th>\n            <th>单价</th>\n            <th>数量</th>\n            <th>小计</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="col-text-left">\n              <p class="primary"><a href="/cmdty/detail?csId=<%=orderInfo.csId%>" target="_blank"><%=orderInfo.csName%></a></p>\n              <p class="primary">\n                <span class="icon-grantee" title="承诺按时按质保证完成"></span>\n                <%if (orderInfo.hasInvoice == 1) {%>\n                  <span class="icon-receipt" title="提供发票"></span>\n                <%}%>\n              </p>\n            </td>\n            <td>\n              <p class="primary-weak"><a href="/seller/corpinfo?c_id=<%=orderInfo.cId%>&tab=1" target="_blank"><%=orderInfo.cName%></a><a href="/scenter/growth" target="_blank" class="lv">Lv<%=orderInfo.cLevel%></a></p>\n              <p><a <%if(!orderInfo.cBeforeQQ.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> href="<%if(orderInfo.cBeforeQQ.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=orderInfo.cBeforeQQ%>&site=qq&menu=yes<%}%>" class="qq-service icon-qq jmod-wpa-qq" _wpa_qq="<%=orderInfo.cBeforeQQ%>">QQ咨询</a></p>\n            </td>\n            <td>\n              <p class="weak"><%=addressData[orderInfo.provinceId]%>－<%=addressData[orderInfo.cityId]%></p>\n            </td>\n            <td>\n              <p class="weak"><%=serviceDeadline[orderInfo.serviceTime]%></p>\n            </td>\n            <td>\n              <%if(orderInfo.serviceTotal != orderInfo.servicePrice){%>\n                <p class="primary-weak"><del>&yen;<%=orderInfo.servicePrice%></del></p>\n              <%}%>\n              <p class="primary">&yen;<%=orderInfo.serviceTotal%></p>\n            </td>\n            <td class="td-quantity">\n                <div class="mod-quantity">\n                  <span class="mod-quantity-btn mod-quantity-minus inactived">-</span>\n                  <input class="mod-quantity-number" type="text" value="1">\n                  <span class="mod-quantity-btn mod-quantity-plus">+</span>\n                </div>\n                <div class="input-tips count-tips hidden">最多只可购买<%=skuNumLimit%>件</div>\n                <div class="input-tips count-tips hidden">活动商品仅可购买1件</div>\n                <div class="input-tips count-tips hidden">活动商品仅剩余<%=remainActStockNum%>件</div>\n            </td>\n            <td>\n              <p class="primary total-price">&yen;<%=orderInfo.serviceTotal%></p>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <%if(isHBAct){%>\n      <div class="redeem-wrap">\n        <p class="weak">使用优惠</p>\n        <div class="ui-checkbox red-redeem-cb">\n          <input type="checkbox" id="useVfund" name="useVfund" checked>\n          <label for="useVfund" class="ui-checkbox-rect"></label><label for="useVfund" class="ui-checkbox-text">使用红包抵扣</label>\n        </div>\n        <dir class="red-redeem"><span class="jmod_totalHB"><%=orderInfo.payVfund%>元</span>\n        <span id="red-redeem-tips" class="red-redeem-tips">（红包余额<%=hongbaoInfo.userBalance%>元，可用<span class="hb_tips"><%=orderInfo.payVfund%></span>元）</span>\n        </dir>\n      </div>\n    <%}%>\n    <div class="message-wrap jmod_all_form">\n      <p class="weak payment-msg-title">给服务商留言</p>\n      <div class="form-col jmod_form_col">\n        <div class="ui-textarea count default-input-width">\n          <textarea rows="2" id="msg-input" name="message" placeholder="选填，请填写你对此服务的要求" validate="true" validate_type="legal|jsLength" legal_type="special_code" maxlength="30" maxlen="30" minlen="1" validate_tip="留言包含特殊字符|1-30个字"></textarea>\n          <div class="ui-textarea-bg"></div>\n          <label for="msg-input" class="ui-textarea-count">\n            <i>0</i>/<i>30</i>\n          </label>\n        </div>\n        <div class="input-tips err hidden" id="msd-tips">\n          <span class="ico-err"></span><span>1-30个字</span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
    t["default"] = a
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var a = '\n  <div class="order-summery">\n    <%if(isHBAct){%>\n      <div class="orig-price">服务价格：<span class="cost jmod_oldTotalPrice"><%=orderInfo.servicePrice%>元</span></div>\n      <div class="redeem-price">优惠金额：<span class="cost jmod_payVfund">-<%=orderInfo.payVfund%>元</span></div>\n    <%}%>\n    <div class="total">应付总额：<span class="cost jmod_totalPrice"><%=orderInfo.payFund%>元</span></div>\n    <div class="agreement" style="overflow:hidden;">\n      <div style="float:right;text-align: left;">\n        <div class="ui-checkbox" style="display:block;margin-bottom:10px;">\n          <input type="checkbox" id="agreement" name="agreement" checked>\n          <label for="agreement" class="ui-checkbox-rect"></label>\n          <label for="agreement" class="ui-checkbox-text">同意 <a href="javascript:void(0);" id="show_protocol">《腾讯众创空间第三方服务声明》</a></label>\n        </div>\n        <div class="ui-checkbox" style="display:block">\n          <input type="checkbox" id="userAgreement" name="userAgreement" checked>\n          <label for="userAgreement" class="ui-checkbox-rect"></label>\n          <label for="userAgreement" class="ui-checkbox-text">同意 <a href="javascript:void(0);" id="show_user_protocol">《用户授权协议》</a></label>\n        </div>\n      </div>\n    </div>\n    <div class="button-wrap">\n      <a href="javascript:void(0)" class="ui-button ui-button-primary" id="jmod_cancel_submit">返回</a>\n      <a href="javascript:void(0)" class="ui-button ui-button-suc" id="jmod_confirm_submit">提交订单</a>\n    </div>\n  </div>\n';
    t["default"] = a
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.userProtocolTpl = '\n  <div class="protocol-wrap">\n    <h4 style="text-align: center;">用户授权协议</h4>\n    <br>\n    <p>本授权协议（以下简称“本协议”）是腾讯创业服务平台（以下简称“平台”或“腾讯”）、财付通支付科技有限公司（以下简称“财付通”）与用户（以下或称为“您”）就使用财付通支付服务所涉及的授权事宜在深圳市南山区所订立的协议。您通过网络页面点击确认或以其他方式选择接受本协议，即表示您与平台、财付通已达成协议并同意接受本协议的全部约定内容。</p>\n    <br>\n    <p>您应认真阅读、充分理解本规则各条款，特别是其中与您的权益有或可能具有重大关系的条款，及对平台、财付通具有或可能具有免责或限制责任的条款（尤其是粗体字部分）。如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，请不要进行后续操作。如果您对本协议的条款有疑问的，请拨打客服电话（财付通：95017 ）进行询问，客服将向您解释条款内容。</p>\n    <br>\n    <p>为了更好地为您提供财付通支付服务，就您已经支付到财付通备付金账户的待结算资金，您认可并授权平台有权代您向财付通提交支付指令，将您的待结算资金从财付通备付金账户划转至商户银行账户，如因平台指令错误，由此产生的一切纠纷及法律责任由您及平台承担，与财付通无关。</p>\n    <br>\n    <p>您同意，平台或财付通有权随时对本协议内容进行单方面的变更，并在平台网站页面通知您。若您在本协议内容变更生效后继续使用本服务的，表示您已充分阅读、理解并接受变更修改后的协议内容，也将遵循变更修改后的协议内容；若您不同意变更修改后的协议内容，您应立即停止使用本服务。</p>\n    <br>\n    <p>双方在履行本协议的过程中，如发生争议，应协商解决。协商不成的，任何一方均可向本协议签订地有管辖权的人民法院提起诉讼。</p>\n    <br>\n    <p style="text-align: right;">财付通支付科技有限公司</p>\n    <p style="text-align: right;">腾讯创业服务平台</p>\n  </div>\n';
}, function (e, t, a) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }(), d = a(18), r = n(d), s = a(4), c = a(19), l = n(c), u = a(20), m = a(11), p = n(m), f = a(10), v = n(f), _ = {
            orderSucc: "/order/detail?so_id=",
            orderFail: "/cmdty/detail?csId=",
            orderCreate: "/order/orderConfirm",
            save: "/order/useraddr"
        }, h = G_DATA.gData || {}, b = h.orderInfo || {}, y = h.hongbaoInfo || {}, g = h.activeInfo || {},
        j = h.addrInfo || [], w = h.userInfo || {}, k = +y.remainActStockNum || 1, I = +b.skuNumLimit || 9999,
        x = +g.activeId === s.ACTIVITY_TYPE.ZERO && +G_DATA.currentTime > +g.activeBegintime && +G_DATA.currentTime < +g.activeEndtime && +h.errLevel !== s.ERROR_LEVEL.WARNING,
        C = +g.activeId === s.ACTIVITY_TYPE.HB && b.payVfund > 0 && +G_DATA.currentTime > +g.activeBegintime && +G_DATA.currentTime < +g.activeEndtime,
        A = C, L = 1, N = s.SERVICE_TIME || {}, P = function () {
            var e = {};
            for (var t in l["default"]) {
                e[t] = l["default"][t].name;
                for (var a in l["default"][t].city) e[a] = l["default"][t].city[a]
            }
            return e
        }(), E = +h.errLevel, T = h.msg, q = {
            orderInfo: b,
            hongbaoInfo: y,
            activeInfo: g,
            addrInfo: j,
            userInfo: w,
            serviceDeadline: N,
            addressData: P,
            remainActStockNum: k,
            skuNumLimit: I,
            isZeroAct: x,
            isHBAct: C,
            isUseVfund: A,
            count: L,
            errLevel: E,
            msg: T
        }, D = function () {
            function e() {
                i(this, e)
            }

            return o(e, [{
                key: "getStore", value: function () {
                    return q
                }
            }, {
                key: "addressEvents", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    p["default"].toggleLoading(!0), r["default"].request({
                        url: _.save,
                        data: e.postData,
                        type: "POST",
                        needLogin: !0,
                        needRefresh: !0,
                        success: function (t) {
                            p["default"].toggleLoading(!1), 0 === t.ret ? (p["default"].showToast("success", "操作成功。"), e.successCallback(t.data)) : (p["default"].showToast("fail", t.msg || "网络错误请稍后再试。"), e.errorCallback())
                        },
                        error: function () {
                            p["default"].toggleLoading(!1), p["default"].showToast("fail", "网络错误请稍后再试。"), e.errorCallback()
                        }
                    })
                }
            }, {
                key: "submitOrder", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    p["default"].toggleLoading(!0), r["default"].request({
                        url: _.orderCreate,
                        data: e.postData,
                        type: "POST",
                        needLogin: !0,
                        needRefresh: !0,
                        success: function (t) {
                            switch (p["default"].toggleLoading(!1), t.ret) {
                                case 0:
                                    e.successCallback(), t.data.gData && t.data.gData.orderId && window.location.replace(_.orderSucc + t.data.gData.orderId);
                                    break;
                                case u.errorCode.actTimeNotBegin:
                                case u.errorCode.actTimePass:
                                case u.errorCode.actCommodLowStocks:
                                case u.errorCode.exceedMaxStock:
                                case u.errorCode.userLowBalance:
                                case u.errorCode.corpLowActLimit:
                                case u.errorCode.deductionError:
                                    var a = new v["default"]({
                                        tit: "",
                                        cont: '<div class="ui-dialog-alert">' + u.errorMsg[t.ret] + "</div>",
                                        btnOK: {
                                            text: "立即刷新", theme: "suc", callback: function () {
                                                window.location.reload()
                                            }
                                        },
                                        btnNo: null
                                    });
                                    a.show(), e.errorCallback();
                                    break;
                                case u.errorCode.skuLimitExceed:
                                case u.errorCode.priceLimitExceed:
                                    p["default"].showToast("fail", u.errorMsg[t.ret] || t.msg || "网络错误请稍后再试。"), e.errorCallback();
                                    break;
                                default:
                                    var n = new v["default"]({
                                        tit: "",
                                        cont: '<div class="ui-dialog-alert">' + t.msg + "</div>",
                                        btnOK: {
                                            text: "返回商品详情", theme: "suc", callback: function () {
                                                window.location.replace(_.orderFail + q.orderInfo.csId)
                                            }
                                        },
                                        btnNo: null
                                    });
                                    e.errorCallback(), n.show()
                            }
                        },
                        error: function () {
                            p["default"].toggleLoading(!1), p["default"].showToast("fail", "网络错误请稍后再试。"), e.errorCallback()
                        },
                        loginSuccessCb: function () {
                            location.reload()
                        }
                    })
                }
            }]), e
        }();
    t["default"] = D
}, function (e, t) {
    e.exports = _cfCommon.network
}, function (e, t) {
    e.exports = _cfCommon.locationData
}, function (e, t) {
    "use strict";

    function a(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n, i = t.errorCode = {
        actTimeNotBegin: 32002,
        actTimePass: 32003,
        actCommodLowStocks: 32006,
        exceedMaxStock: 40022,
        userLowBalance: 41001,
        corpLowActLimit: 41002,
        deductionError: 40029,
        skuLimitExceed: 40044,
        priceLimitExceed: 40045
    };
    t.errorMsg = (n = {}, a(n, i.actTimeNotBegin, "商品信息发生变化，请刷新页面重新下单"), a(n, i.actTimePass, "商品信息发生变化，请刷新页面重新下单"), a(n, i.actCommodLowStocks, "活动库存件数不足，请刷新页面重新下单"), a(n, i.exceedMaxStock, "商品信息发生变化，请刷新页面重新下单"), a(n, i.userLowBalance, "你的红包余额不足，请刷新页面重新下单"), a(n, i.corpLowActLimit, "卖家活动额度不足，请刷新页面重新下单"), a(n, i.deductionError, "商品信息发生变化，请刷新页面重新下单"), a(n, i.skuLimitExceed, "服务购买数量超出限制，请重新选择数量"), a(n, i.priceLimitExceed, "订单总价超出9999999.99元限制，请重新选择数量下单"), n)
}, function (e, t) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t
        }
    }(), i = function () {
        function e(t) {
            var n = t.orderSubmitView, i = t.orderSubmitModel;
            a(this, e), this.orderSubmitView = n, this.orderSubmitModel = i
        }

        return n(e, [{
            key: "init", value: function () {
                var e = this.orderSubmitModel.getStore();
                this.orderSubmitView.initPage(e), this.addressEvents(), this.submitOrder()
            }
        }, {
            key: "addressEvents", value: function () {
                var e = this;
                this.orderSubmitView.addressEvents(function (t) {
                    e.orderSubmitModel.addressEvents(t)
                })
            }
        }, {
            key: "submitOrder", value: function () {
                var e = this;
                this.orderSubmitView.submitOrder(function (t) {
                    e.orderSubmitModel.submitOrder(t)
                })
            }
        }]), e
    }();
    t["default"] = i
}, function (e, t) {
    e.exports = _cfCommon.timeStat
}]);