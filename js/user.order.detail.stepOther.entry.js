!function (e) {
    function t(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }

    var a = {};
    return t.m = e, t.c = a, t.p = "", t(0)
}({
    0: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var r = a(130), i = n(r), o = a(131), s = n(o), d = a(140), c = n(d), l = a(31), u = new i["default"],
            p = new s["default"], f = new c["default"]({detailUserView: p, detailUserModel: u});
        f.init(), (0, l.initReport)(21)
    }, 2: function (e, t) {
        e.exports = jQuery
    }, 3: function (e, t) {
        e.exports = _cfUI.toast
    }, 6: function (e, t) {
        e.exports = _cfCommon.network
    }, 8: function (e, t) {
        e.exports = _cfCommon.utils
    }, 15: function (e, t) {
        e.exports = _cfCommon.constants
    }, 30: function (e, t) {
        e.exports = _cfUI.dialog
    }, 31: function (e, t) {
        e.exports = _cfCommon.timeStat
    }, 45: function (e, t) {
        e.exports = _cfCommon.locationData
    }, 46: function (e, t) {
        e.exports = _cfCommon.qqUtils
    }, 117: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.statusUtils = void 0;
        var n = a(15), r = function (e) {
            return e === n.ORDER_STATUS.STATUS_TO_PAY || e === n.ORDER_STATUS.STATUS_PAY_FAILED || e === n.ORDER_STATUS.STATUS_PAY_EXCEPTION
        }, i = function (e) {
            return e === n.ORDER_STATUS.STATUS_PAYED
        }, o = function (e) {
            return e === n.ORDER_STATUS.STATUS_CONFIRMED
        }, s = function (e) {
            return e === n.ORDER_STATUS.STATUS_TO_CHECK
        }, d = function (e) {
            return e === n.ORDER_STATUS.STATUS_CHECKED
        }, c = function (e) {
            return e === n.ORDER_STATUS.STATUS_CANCEL || e === n.ORDER_STATUS.STATUS_REFUND || e === n.ORDER_STATUS.STATUS_REFUNDED || e === n.ORDER_STATUS.STATUS_REFUND_EXCEPTION
        };
        t.statusUtils = {isNotPay: r, isPayed: i, isConfirmed: o, isToCheck: s, isChecked: d, isCancel: c}
    }, 119: function (e, t, a) {
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
            }(), r = function () {
                function t() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    a(this, t);
                    var r = {"class": "mod-orderstep", steps: n.steps ? n.steps : [], wrapWidth: 1050, itemWidth: 160};
                    return this.CONF = e.extend({}, r, n || {}), this.init()
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
                        var r = [];
                        r.push('<p class="mod-orderstep-count">' + t.num + "</p>"), r.push('<p class="mod-orderstep-title">' + t.title + "</p>");
                        var i = t.desc || [];
                        if (i.forEach(function (e) {
                                r.push('<p class="mod-orderstep-time">' + e + "</p>")
                            }), t.num !== this.CONF.steps.length) {
                            var o = this.CONF.wrapWidth / a;
                            r.push('<i style="width: ' + o + 'px"></i>')
                        }
                        return n.append(r.join("")), n
                    }
                }]), t
            }();
            t["default"] = r
        }).call(t, a(2))
    }, 130: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = e.c_contact ? (0, _.getRandomItemFromList)(e.c_contact.split("|")) : "",
                a = e.c_before_qq ? (0, _.getRandomItemFromList)(e.c_before_qq.split("|")) : "",
                n = e.c_after_qq ? (0, _.getRandomItemFromList)(e.c_after_qq.split("|")) : "";
            e.oi_price = e.oi_price ? e.oi_price / 100 : 0, e.oi_price_discount = e.oi_price_discount ? e.oi_price_discount / 100 : 0, e.so_pay_vfund = e.so_pay_vfund ? e.so_pay_vfund / 100 : 0, e.so_pay_fund = e.so_pay_fund ? e.so_pay_fund / 100 : 0, e.oi_unit_price = e.oi_price - e.oi_price_discount, e.so_service_price = e.so_service_price ? e.so_service_price / 100 : 0, e.so_total_price = e.so_total_price ? e.so_total_price / 100 : 0;
            var r = o(b["default"]), i = r[e.c_province_id], s = r[e.c_city_id], d = r[e.oi_service_province_id],
                c = r[e.oi_service_city_id];
            return v({}, e, {
                c_contact: t,
                c_before_qq: a,
                c_after_qq: n,
                price: (0, _.toDecimal)(e.oi_price, 2),
                unitPrice: (0, _.toDecimal)(e.oi_unit_price, 2),
                payVfund: (0, _.toDecimal)(e.so_pay_vfund, 2),
                payFund: (0, _.toDecimal)(e.so_pay_fund, 2),
                serviceTime: h.SERVICE_TIME[e.oi_service_time],
                corpProvince: i,
                corpCity: s,
                orderProvince: d,
                orderCity: c
            })
        }

        function o(e) {
            var t = {};
            for (var a in e) {
                t[a] = e[a].name;
                for (var n in e[a].city) t[n] = e[a].city[n]
            }
            return t
        }

        function s(e) {
            var t = e.so_status;
            if (y.statusUtils.isCancel(t)) return [];
            var a = {num: 1, title: "提交订单"}, n = {num: 2, title: "付款"}, r = {num: 3, title: "接受服务"},
                i = {num: 4, title: "确认服务完成"}, o = [a, n, r, i];
            return y.statusUtils.isNotPay(t) ? d(e, o) : y.statusUtils.isPayed(t) ? c(e, o) : y.statusUtils.isConfirmed(t) ? l(e, o) : y.statusUtils.isToCheck(t) ? u(e, o) : y.statusUtils.isChecked(t) ? p(e, o) : void 0
        }

        function d(e, t) {
            var a = f(t, 4), n = a[0], r = a[1], i = a[2], o = a[3];
            return n.desc = [(0, _.formateDate)(e.so_ctime + "000", !0)], n.status = "done", r.status = "cur", [n, r, i, o]
        }

        function c(e, t) {
            var a = f(t, 4), n = a[0], r = a[1], i = a[2], o = a[3];
            return d(e, [n, r, i, o]), r.status = "done", r.desc = [(0, _.formateDate)(e.so_pay_token_time + "000", !0)], i.status = "cur", [n, r, i, o]
        }

        function l(e, t) {
            var a = f(t, 4), n = a[0], r = a[1], i = a[2], o = a[3];
            return c(e, [n, r, i, o]), i.desc = ["开始 " + (0, _.formateDate)(e.so_confirm_ctime + "000", !0)], [n, r, i, o]
        }

        function u(e, t) {
            var a = f(t, 4), n = a[0], r = a[1], i = a[2], o = a[3];
            return l(e, [n, r, i, o]), i.status = "done", i.desc.push("完成 " + (0, _.formateDate)(e.so_time_deliver + "000", !0)), o.status = "cur", [n, r, i, o]
        }

        function p(e, t) {
            var a = f(t, 4), n = a[0], r = a[1], i = a[2], o = a[3];
            return u(e, [n, r, i, o]), o.desc = [(0, _.formateDate)(e.so_time_accept + "000", !0)], o.status = "done", [n, r, i, o]
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var f = function () {
                function e(e, t) {
                    var a = [], n = !0, r = !1, i = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t); n = !0) ;
                    } catch (d) {
                        r = !0, i = d
                    } finally {
                        try {
                            !n && s["return"] && s["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return a
                }

                return function (t, a) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, a);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(), v = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }, m = function () {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t
                }
            }(), _ = a(8), h = a(15), y = a(117), g = a(45), b = n(g), k = a(6), w = n(k), T = a(3), I = n(T),
            q = "/PayPortal/prepay", C = "/Order/getOrderStatus", O = "/order/loginuser",
            P = "/evaluate/addscorecomment", S = 3e3, x = {
                orderInfo: i(G_DATA.orderInfo),
                orderStep: s(G_DATA.orderInfo),
                activeInfo: G_DATA.activeInfo,
                isFetching: !1
            }, A = function () {
                function e() {
                    r(this, e)
                }

                return m(e, [{
                    key: "getStore", value: function () {
                        return x
                    }
                }, {
                    key: "sendRequest", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.url,
                            a = void 0 === t ? "" : t, n = e.data, r = void 0 === n ? {} : n, i = e.type,
                            o = void 0 === i ? "GET" : i, s = e.callback, d = void 0 === s ? function () {
                            } : s;
                        return !x.isFetching && (I["default"].toggleLoading(!0), x.isFetching = !0, void w["default"].request({
                            url: a,
                            type: o,
                            data: r,
                            needLogin: !0,
                            needRefresh: !0,
                            success: function (e) {
                                I["default"].toggleLoading(!1), x.isFetching = !1, 0 === e.ret ? d(e.data) : I["default"].showToast("fail", e.msg || "网络错误请稍后再试。")
                            },
                            error: function () {
                                I["default"].toggleLoading(!1), x.isFetching = !1, I["default"].showToast("fail", "网络错误请稍后再试。")
                            }
                        }))
                    }
                }, {
                    key: "fetchWechatQrcode", value: function (e) {
                        this.sendRequest({
                            url: q,
                            type: "POST",
                            data: {soId: x.orderInfo.so_id, opId: x.orderInfo.op_id, payType: h.PAY_TYPE.WECHAT},
                            callback: e
                        })
                    }
                }, {
                    key: "checkLogin", value: function (e) {
                        return !x.isFetching && (I["default"].toggleLoading(!0), x.isFetching = !0, void w["default"].request({
                            url: O,
                            needLogin: !0,
                            needRefresh: !1,
                            loginSuccessCb: function () {
                                e()
                            },
                            success: function () {
                                e()
                            },
                            error: function () {
                                I["default"].showToast("fail", "网络错误请稍后再试。")
                            },
                            complete: function () {
                                I["default"].toggleLoading(!1), x.isFetching = !1
                            }
                        }))
                    }
                }, {
                    key: "fetchOrderStatus", value: function (e) {
                        var t = this;
                        w["default"].request({
                            url: C,
                            data: {soId: x.orderInfo.so_id, opId: x.orderInfo.op_id},
                            success: function (a) {
                                0 === a.ret && e(a.data), setTimeout(t.fetchOrderStatus.bind(t, e), S)
                            },
                            error: function (a) {
                                setTimeout(t.fetchOrderStatus.bind(t, e), S)
                            }
                        })
                    }
                }, {
                    key: "commendOrder", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.quality,
                            a = void 0 === t ? "" : t, n = e.speed, r = void 0 === n ? "" : n, i = e.attitude,
                            o = void 0 === i ? "" : i, s = arguments[1];
                        this.sendRequest({
                            url: P,
                            type: "POST",
                            data: {soId: x.orderInfo.so_id, ssQualityScore: a, ssSpeedScore: r, ssAttitudeScore: o},
                            callback: s
                        })
                    }
                }]), e
            }();
        t["default"] = A
    }, 131: function (e, t, a) {
        (function (e) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, o = function () {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(), s = a(8), d = a(30), c = n(d), l = a(3), u = n(l), p = a(119), f = n(p), v = a(132), m = n(v),
                _ = a(133), h = a(134), y = a(135), g = a(136), b = a(137), k = a(138), w = a(139), T = 45, I = 259200,
                q = function () {
                    function t() {
                        r(this, t), this.qrcodeTimer = null
                    }

                    return o(t, [{
                        key: "renderBreadCrumb", value: function (t) {
                            e(".jmod-crumb").html('\n      <a href="/">首页</a> &gt; <a href="/order/usercenter">已订购的服务</a> &gt; 订单' + t + "详情\n    ")
                        }
                    }, {
                        key: "renderOrderStep", value: function (t) {
                            var a = new f["default"]({steps: t});
                            e(".jmod-orderstep").html(a)
                        }
                    }, {
                        key: "renderOrderInfo", value: function (t, a) {
                            var n = (0, s.tmpl)(_.orderInfoTpl, {orderInfo: t, activeInfo: a});
                            e(".jmod-orderinfo").html(n)
                        }
                    }, {
                        key: "renderToPay", value: function (t) {
                            var a = (0, s.tmpl)(h.toPayTpl, {orderInfo: t});
                            e(".jmod-orderstatus").html(a)
                        }
                    }, {
                        key: "renderPaid", value: function (t) {
                            var a = (0, s.tmpl)(g.paidTpl, {orderInfo: t});
                            e(".jmod-orderstatus").html(a)
                        }
                    }, {
                        key: "renderConfirmed", value: function (t) {
                            var a = i({}, t, {confirmedTime: (0, s.formateDate)(t.so_confirm_ctime + "000", !0)}),
                                n = (0, s.tmpl)(b.confirmedTpl, {orderInfo: a});
                            e(".jmod-orderstatus").html(n)
                        }
                    }, {
                        key: "renderToCheck", value: function (t) {
                            var a = i({}, t, {formatedCountdown: (0, s.formatRemainTime)(t.auto_accept_countdown, 2)}),
                                n = (0, s.tmpl)(k.toCheckTpl, {orderInfo: a});
                            e(".jmod-orderstatus").html(n)
                        }
                    }, {
                        key: "renderChecked", value: function (t) {
                            var a = (0, s.tmpl)(w.checkedTpl, {orderInfo: t});
                            e(".jmod-orderstatus").html(a)
                        }
                    }, {
                        key: "renderCancel", value: function (t, a) {
                            var n = (0, s.tmpl)(y.cancelTpl, {orderInfo: t, activeInfo: a});
                            e(".jmod-orderstatus").html(n)
                        }
                    }, {
                        key: "updateWechatQrcode", value: function (t) {
                            var a = this;
                            this.qrcode || (this.qrcode = new QRCode(document.getElementById("wxpay_qrcode"), {
                                width: 182,
                                height: 182
                            }));
                            var n = e("#CountDown-QrCode"), r = e("#Pop-WxQrCode"), i = r.find(".jmod-wechat-code");
                            this.qrcode.makeCode(t), n.html(T + "秒"), r.removeClass("timeover").show(), i.addClass("active"), clearInterval(this.qrcodeTimer);
                            var o = T;
                            this.qrcodeTimer = setInterval(function () {
                                return --o <= 0 ? (clearInterval(a.qrcodeTimer), void r.addClass("timeover").trigger("timeover")) : void n.html(o + "秒")
                            }, 1e3)
                        }
                    }, {
                        key: "updateDelayCheckInfo", value: function (t) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = (0, s.formatRemainTime)(t, 2);
                            e(".jmod-countdown").text(n), parseInt(t) === I && 0 === parseInt(a) && e(".jmod_delay_confirm").removeClass("hidden")
                        }
                    }, {
                        key: "bindOrderPay", value: function (t) {
                            var a = t.weChatPayCb, n = t.caifutongPayCb;
                            e(document).on("click", ".jmod-wechat-pay", a), e(document).on("click", ".jmod_close_paycode", function () {
                                var t = e("#Pop-WxQrCode"), a = t.find(".jmod-wechat-code");
                                a.removeClass("active"), t.hide()
                            }), e(document).on("click", "#prepay", n)
                        }
                    }, {
                        key: "caifutongPaySubmit", value: function () {
                            e("#prepay-form").submit()
                        }
                    }, {
                        key: "bindCheckOrder", value: function (t) {
                            var a = new c["default"]({
                                tit: "确认服务完成",
                                cont: '\n        <p class="ui-dialog-alert">确认服务完成？</p>\n        <p class="weak s-tips">确定服务完成后，腾讯会将您支付的服务费用结算给服务商。</p>\n      ',
                                btnOK: {
                                    text: "确认服务完成", theme: "suc", callback: function () {
                                        t()
                                    }
                                },
                                btnNo: null
                            });
                            e(".jmod-check-order").on("click", function () {
                                a.show()
                            })
                        }
                    }, {
                        key: "bindCommendOrder", value: function (t) {
                            var a = new m["default"]({selector: ".payment-rating-attitude", inputName: "rating-1"}),
                                n = new m["default"]({selector: ".payment-rating-quality", inputName: "rating-2"}),
                                r = new m["default"]({selector: ".payment-rating-speed", inputName: "rating-3"});
                            a.init(), n.init(), r.init(), e(".jmod-commend-order").on("click", function () {
                                var a = e(".payment-rating-attitude .mod-rating-star").find(".checked").length,
                                    n = e(".payment-rating-quality .mod-rating-star").find(".checked").length,
                                    r = e(".payment-rating-speed .mod-rating-star").find(".checked").length;
                                return 0 === a || 0 === n || 0 === r ? (u["default"].showToast("fail", "请您对所有评分项进行评分。"), !1) : void t({
                                    attitude: a,
                                    quality: n,
                                    speed: r
                                })
                            })
                        }
                    }]), t
                }();
            t["default"] = q
        }).call(t, a(2))
    }, 132: function (e, t, a) {
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
            }(), r = function () {
                function t(e) {
                    var n = e.selector, r = e.inputName;
                    a(this, t), this.selector = n, this.inputName = r, this.score = 0
                }

                return n(t, [{
                    key: "init", value: function () {
                        var t = this;
                        e(this.selector).on("mouseover", ".mod-rating-star", function (a) {
                            a.stopPropagation();
                            var n = e(a.currentTarget);
                            n.children(".star").addClass("checked"), n.prevAll(".mod-rating-star").children(".star").addClass("checked"), n.nextAll(".mod-rating-star").children(".star").removeClass("checked"), n.parent(t.selector).siblings(".payment-rating-concl").html(n.children(".star").attr("title"))
                        }), e(this.selector).on("mouseleave", function (a) {
                            a.stopPropagation();
                            var n = e(a.currentTarget);
                            return 0 === parseInt(t.score, 10) ? (n.find(".star").removeClass("checked"), void n.next(".payment-rating-concl").html("")) : (n.children(".mod-rating-star:nth-child(" + t.score + ")").prevAll(".mod-rating-star").children(".star").addClass("checked"), n.children(".mod-rating-star:nth-child(" + t.score + ")").children(".star").addClass("checked"), n.children(".mod-rating-star:nth-child(" + t.score + ")").nextAll(".mod-rating-star").children(".star").removeClass("checked"), void n.siblings(".payment-rating-concl").html(n.children(".mod-rating-star:nth-child(" + t.score + ")").children(".star").attr("title")))
                        }), e(this.selector).on("click", ".star", function (a) {
                            a.stopPropagation();
                            var n = e(a.currentTarget);
                            t.score = n.siblings('input[type="radio"]').attr("value")
                        })
                    }
                }, {
                    key: "reset", value: function () {
                        e(this.selector).find(".star").removeClass("checked"), e(this.selector).next(".payment-rating-concl").html(""), this.score = 0
                    }
                }]), t
            }();
            t["default"] = r
        }).call(t, a(2))
    }, 133: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.orderInfoTpl = void 0;
        var n = a(15), r = 1;
        t.orderInfoTpl = '\n <div class="title-18px">订单信息</div>\n <div class="weak">\n   <span class="order-code">订单编号：<%=orderInfo.so_id%></span>\n   <%if(orderInfo.so_pay_token){%>\n     <span class="tenpay-code"><%=orderInfo.so_pay_type == ' + n.PAY_TYPE.WECHAT + ' ? "微信交易号" : "财付通交易号"%>：<%=orderInfo.so_pay_token%></span>\n   <%}%>\n </div>\n  <div class="ui-table table-mall table-order table-payment-c">\n    <table>\n      <colgroup>\n        <col class="col-service-cont">\n        <col class="col-vender-info">\n        <col class="col-region">\n        <col class="col-service-period">\n        <col class="col-price">\n        <col class="col-quantity">\n        <col class="col-redeem">\n        <col class="col-buyer-info">\n        <col class="col-actual-price">\n      </colgroup>\n      <thead>\n        <tr>\n          <th>订单内容</th>\n          <th>服务商</th>\n          <th>服务地区</th>\n          <th>服务期限</th>\n          <th>单价</th>\n          <th>数量</th>\n          <th>优惠</th>\n          <th>买家信息</th>\n          <th>实付价</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class="col-text-left">\n            <p class="primary">\n              <a href="/cmdty/detail?csId=<%=orderInfo.cs_id%>" target="_blank"><%=orderInfo.cs_name%></a>\n            </p>\n            <p class="primary">\n              <span class="icon-grantee" title="承诺按时按质保证完成"></span>\n              <%if(orderInfo.cs_invoice_status == ' + r + '){%>\n                <span class="icon-receipt" title="提供发票"></span>\n              <%}%>\n            </p>\n          </td>\n          <td>\n            <p class="primary-weak"><a _stat_click_id="6_1" href="/seller/corpinfo?c_id=<%=orderInfo.c_id%>" target="_blank"><%=orderInfo.c_name%></a><a href="/scenter/growth" target="_blank" class="lv">Lv<%=orderInfo.cLevel%></a></p>\n            <p><a <%if(!orderInfo.c_after_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> _stat_click_id="6_2" href="<%if(orderInfo.c_after_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=orderInfo.c_after_qq%>&site=qq&menu=yes<%}%>" class="qq-service icon-qq jmod-wpa-qq" _wpa_qq="<%=orderInfo.c_after_qq%>">售后QQ</a></p>\n          </td>\n          <td>\n            <p class="primary-weak"><%=orderInfo.orderProvince%> - <%=orderInfo.orderCity%></p>\n          </td>\n          <td>\n            <p class="primary-weak"><%=orderInfo.serviceTime%></p>\n          </td>\n          <td>\n            <%if(orderInfo.so_total_price != orderInfo.so_service_price){%>\n              <p class="primary-weak"><del>&yen;<%=orderInfo.price%></del></p>\n            <%}%>\n            <%if(activeInfo.activeId == ' + n.ACTIVITY_TYPE.ZERO + '){%>\n              <p class="primary">&yen;0.00</p>\n            <%}else{%>\n              <p class="primary">&yen;<%=orderInfo.unitPrice%></p>\n            <%}%>\n          </td>\n          <td>\n            <p class="primary"><%=orderInfo.oi_goods_quantity%></p>\n          </td>\n          <%if(activeInfo.activeId == ' + n.ACTIVITY_TYPE.HB + ' && orderInfo.so_pay_vfund > 0){%>\n            <td>\n              <p class="primary-weak red-redeem"><%=orderInfo.payVfund%>元</p>\n            </td>\n          <%}else if(activeInfo.activeId == ' + n.ACTIVITY_TYPE.ZERO + '){%>\n            <td>              <p class="primary-weak"><span class="ico-clock-sm"></span>0元抢购</p>            </td>          <%}else{%>\n            <td><p class="primary-weak">无<p></td>\n          <%}%>\n          <td class="col-text-left">\n            <p class="primary-weak"><%=orderInfo.so_addr_name%></p>\n            <p class="primary-weak"><%=orderInfo.so_addr_mobile%></p>\n            <p class="primary-weak"><%=orderInfo.so_addr_email%></p>\n            <p class="primary-weak"><%=orderInfo.so_addr_corpname%></p>\n          </td>\n          <td>\n            <p class="primary">&yen;<%=orderInfo.payFund%></p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <%if (orderInfo.so_remark) {%>\n    <div class="message-wrap">\n      <p class="weak payment-msg-title">买家留言</p>\n      <p class="weak"><%=orderInfo.so_remark%></p>\n    </div>\n  <%}%>\n'
    }, 134: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.toPayTpl = void 0;
        var n = a(15);
        t.toPayTpl = '\n  <div class="mod-white-box payment-content-box">\n    <%if(orderInfo.so_status == ' + n.ORDER_STATUS.STATUS_PAY_EXCEPTION + '){%>\n      <div class="title-18px">支付处理中，请稍后刷新查看结果。</div>\n      <p class="weak contact-serv">若有疑问，可联系<a <%if(!\'' + n.PLATFORM_QQ + '\'.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> _stat_click_id="7_1" class="jmod-wpa-qq" _wpa_qq="' + n.PLATFORM_QQ + '"  href="<%if(\'' + n.PLATFORM_QQ + "'.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=" + n.PLATFORM_QQ + '&site=qq&menu=yes<%}%>">平台客服</a>。</p>\n    <%}else{%>\n      <p class="title-18px">订单创建成功，请您尽快支付。超过<span class="mod-emph">72小时</span>未支付，订单将自动取消。</p>\n      <p class="weak payment-mg-bot-32px">在您未验收服务之前，您所支付的款项将暂存在腾讯。在您验收服务完毕后，腾讯才会将款项支付给服务商。</p>\n      <span class="ui-button ui-button-suc jmod-wechat-pay" _stat_click_id="7_4">微信支付</span>\n      <a id="prepay" class="payment-mg-left-24px" _stat_click_id="7_2">财付通支付</a>\n      <a _stat_click_id="7_3" data-id="<%=orderInfo.so_id%>" href="javascript:void(0);" class="payment-mg-left-24px jmod_cancel_order">取消订单</a>\n    <%}%>\n  </div>\n  <div class="ui-dialog-wrap dialog-wx-qrcode" id="Pop-WxQrCode">\n    <div class="ui-dialog jmod-wechat-code">\n      <a href="javascript:void(0);" class="ui-dialog-close jmod_close_paycode"></a>\n      <div class="ui-dialog-title">支付<%=orderInfo.so_pay_fund%>元</div>\n      <div class="ui-dialog-body">\n        <div class="ui-dialog-alert">微信扫描码支付</div>\n        <div class="qrcode">\n          <div id="wxpay_qrcode"></div>\n          <div class="refresh"><a class="jmod-wechat-pay" href="javascript:void(0);">重新获取二维码</a></div>\n        </div>\n        <p class="weak tip-1"><em class="red" id="CountDown-QrCode">XX秒</em>后此二维码过期</p>\n        <p class="tip-2 red">二维码已过期，请重获二维码</p>\n      </div>\n    </div>\n  </div>\n  <form id="prepay-form" class="hidden" action="/payPortal/prepay" method="post">\n    <input type="hidden" name="soId" value="<%=orderInfo.so_id%>">\n    <input type="hidden" name="opId" value="<%=orderInfo.op_id%>">\n    <input type="hidden" name="payType" value="' + n.PAY_TYPE.CAIFUTONG + '">\n  </form>\n'
    }, 135: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.cancelTpl = void 0;
        var n = a(15);
        t.cancelTpl = '\n  <div class="mod-white-box payment-content-box">\n    <%if(orderInfo.so_status == ' + n.ORDER_STATUS.STATUS_CANCEL + '){%>\n      <%if(orderInfo.so_extra.cancel_reason){%>\n        <div class="title-18px"><%=orderInfo.so_extra.cancel_reason%></div>\n      <%}else{%>\n        <div class="title-18px">订单已取消</div>\n      <%}%>\n    <%}else if(orderInfo.so_status == ' + n.ORDER_STATUS.STATUS_REFUND + '){%>\n      <%if(orderInfo.so_extra.cancel_reason){%>\n        <div class="title-18px"><%=orderInfo.so_extra.cancel_reason%></div>\n        <%if(orderInfo.so_extra.cancel_reason.indexOf("订单价格不符") != -1) {%>\n          <a class="ui-button ui-button-suc" style="color:white;" href="/order/orderBook?csId=<%=orderInfo.cs_id%>&cityId=<%=orderInfo.oi_service_city_id%>&provinceId=<%=orderInfo.oi_service_province_id%>&activeType=<%=activeInfo.activeId%>&skuId=<%=orderInfo.sku_id%>">重新下单</a>\n        <%}%>\n      <%}else{%>\n        <div class="title-18px">订单已取消，您的款项将在<span class="mod-emph">7天</span>内退回支付账户</div>\n      <%}%>\n      <%if(orderInfo.so_refund_extra.corp_reason){%>\n          <div class="title-18px">退款说明：<%=orderInfo.so_refund_extra.corp_reason%></div>\n      <%}%>\n    <%}else if(orderInfo.so_status == ' + n.ORDER_STATUS.STATUS_REFUNDED + '){%>\n      <%if(orderInfo.so_extra.cancel_reason){%>\n        <div class="title-18px"><%=orderInfo.so_extra.cancel_reason%></div>\n        <%if(orderInfo.so_extra.cancel_reason.indexOf("订单价格不符") != -1) {%>\n          <a class="ui-button ui-button-suc" style="color:white;" href="/order/orderBook?csId=<%=orderInfo.cs_id%>&cityId=<%=orderInfo.oi_service_city_id%>&provinceId=<%=orderInfo.oi_service_province_id%>&activeType=<%=activeInfo.activeId%>&skuId=<%=orderInfo.sku_id%>">重新下单</a>\n        <%}%>\n      <%}else{%>\n        <div class="title-18px">订单已取消，您的款项已经退款成功。</div>\n      <%}%>\n    <%}else if(orderInfo.so_status == ' + n.ORDER_STATUS.STATUS_REFUND_EXCEPTION + '){%>\n      <%if(orderInfo.so_extra.cancel_reason){%>\n        <div class="title-18px"><%=orderInfo.so_extra.cancel_reason%></div>\n      <%}else{%>\n        <div class="title-18px">退款处理中</div>\n      <%}%>\n    <%}%>\n    <%if(orderInfo.so_status != ' + n.ORDER_STATUS.STATUS_CANCEL + '){%>\n      <p class="weak contact-serv">\n        若您还有其他疑问，可联系\n        <a <%if(!\'' + n.PLATFORM_QQ + '\'.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> class="jmod-wpa-qq" _wpa_qq="' + n.PLATFORM_QQ + '" _stat_click_id="11_2" href="<%if(\'' + n.PLATFORM_QQ + "'.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=" + n.PLATFORM_QQ + '&site=qq&menu=yes<%}%>">平台客服</a>\n        进行申诉。\n      </p>\n    <%}%>\n  </div>\n'
    }, 136: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.paidTpl = '\n  <div class="mod-white-box payment-content-box">\n    <div class="title-18px">付款成功，服务商会尽快联系您进行订单确认。</div>\n    <p class="weak payment-mg-bot-32px">您也可以联系服务商确认服务开始的时间和周期。</p>\n    <ul class="payment-contact-list payment-mg-bot-32px">\n      <li class="contact-item">\n        <span class="title">在线联系</span>\n        <span class="val"><a <%if(!orderInfo.c_after_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> _stat_click_id="8_1" href="<%if(orderInfo.c_after_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=orderInfo.c_after_qq%>&site=qq&menu=yes<%}%>" class="qq-service icon-qq jmod-wpa-qq" _wpa_qq="<%=orderInfo.c_after_qq%>">QQ咨询</a></span>\n      </li>\n      <li class="contact-item">\n        <span class="title">线下联系</span>\n        <span class="val"><%=orderInfo.corpProvince%><%=orderInfo.corpCity%><%=orderInfo.c_addr%></span>\n      </li>\n    </ul>\n    <a href="javascript:void(0);" data-id="<%=orderInfo.so_id%>" _stat_click_id="8_2" class="payment-cx-order jmod_canNref_order">取消订单</a>\n  </div>\n'
    }, 137: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.confirmedTpl = void 0;
        var n = a(15);
        t.confirmedTpl = '\n  <div class="mod-white-box payment-content-box">\n    <div class="title-18px">服务商正在为您服务中，服务开始时间为<span class="mod-emph"><%=orderInfo.confirmedTime%></span></div>\n    <p class="weak payment-mg-bot-32px">您可以联系服务商确认服务进度。</p>\n    <ul class="payment-contact-list payment-mg-bot-32px">\n      <li class="contact-item">\n        <span class="title">在线联系</span>\n        <span class="val"><a <%if(!orderInfo.c_after_qq.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> _stat_click_id="8_1" href="<%if(orderInfo.c_after_qq.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=<%=orderInfo.c_after_qq%>&site=qq&menu=yes<%}%>" class="qq-service icon-qq jmod-wpa-qq" _wpa_qq="<%=orderInfo.c_after_qq%>">QQ咨询</a></span>\n      </li>\n      <li class="contact-item">\n        <span class="title">线下联系</span>\n        <span class="val"><%=orderInfo.corpProvince%><%=orderInfo.corpCity%><%=orderInfo.c_addr%></span>\n      </li>\n    </ul>\n    <p class="weak contact-serv">若在服务过程中遇到合作问题，可联系<a _stat_click_id="8_3" class="jmod-wpa-qq" _wpa_qq="' + n.PLATFORM_QQ + "\" <%if(!'" + n.PLATFORM_QQ + '\'.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> href="<%if(\'' + n.PLATFORM_QQ + "'.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=" + n.PLATFORM_QQ + '&site=qq&menu=yes<%}%>">平台客服</a>。</p>\n  </div>\n'
    }, 138: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.toCheckTpl = void 0;
        var n = a(15), r = 259200;
        t.toCheckTpl = '\n  <div class="mod-white-box payment-content-box">\n    <div class="title-18px">服务商已完成服务，等待您的确认。</div>\n    <p class="weak payment-mg-bot-32px">您还有 <span class="jmod-countdown mod-emph"><%=orderInfo.formatedCountdown%></span> 来完成服务确认操作。服务确认完成后，腾讯才会与服务商进行结算。如果您超时未确认，系统将自动确认服务，完成交易。</p>\n    <div class="btn-wrap mg-bot-32px">\n      <span href="javascript:void(0);" data-id="<%=orderInfo.so_id%>" _stat_click_id="9_1" class="ui-button ui-button-suc jmod-check-order">确认验收</span>\n      <a data-id="<%=orderInfo.so_id%>" class="<%if (!(orderInfo.so_buyer_delay == 0 && orderInfo.auto_accept_countdown <= ' + r + ')) {%>hidden<%}%> ext-time-btn mg-left-24px jmod_delay_confirm" href="javascript:void(0);">延长确认时间</a>\n    </div>\n    <p class="weak contact-serv">若您对服务有疑议，可联系<a <%if(!\'' + n.PLATFORM_QQ + '\'.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> class="jmod-wpa-qq" _wpa_qq="' + n.PLATFORM_QQ + '" _stat_click_id="9_2" href="<%if(\'' + n.PLATFORM_QQ + "'.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=" + n.PLATFORM_QQ + '&site=qq&menu=yes<%}%>">平台客服</a>。</p>\n  </div>\n'
    }, 139: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.checkedTpl = void 0;
        var n = a(15);
        t.checkedTpl = '\n  <div class="mod-white-box payment-content-box">\n    <%if(orderInfo.ss_quality_score){%>\n      <!-- 已评分 -->\n      <div class="title-18px">交易完成</div>\n      <p class="weak contact-serv">若您对服务有疑议，可联系<a <%if(!\'' + n.PLATFORM_QQ + '\'.match(/^(400|800)\\d{6,7}$/)){%>target="_blank"<%}%> class="jmod-wpa-qq" _wpa_qq="' + n.PLATFORM_QQ + '"  _stat_click_id="10_1" href="<%if(\'' + n.PLATFORM_QQ + "'.match(/^(400|800)\\d{6,7}$/)){%>javascript:void(0);<%}else{%>http://wpa.qq.com/msgrd?v=3&uin=" + n.PLATFORM_QQ + '&site=qq&menu=yes<%}%>">平台客服</a>。</p>\n    <%}else{%>\n      <!-- 未评分 -->\n      <div class="title-18px">服务确认完成，等待您的评价</div>\n      <p class="weak payment-mg-bot-32px">您的评分是对服务商最大的肯定，服务商都非常关注您的评分，快留下您的宝贵评分吧。若您15天内未进行评价，系统将自动好评。</p>\n      <div class="title-18px">给店铺评分</div>\n      <div class="payment-rating">\n      <p class="payment-rating-title weak">服务态度</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-attitude">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-1" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-1" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-1" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-1" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-1" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n      </div>\n      <div class="payment-rating">\n        <p class="payment-rating-title weak">服务质量</p>\n        <div class="payment-rating-wrap mod-rating payment-rating-quality">\n          <div class="mod-rating-star">\n            <input type="radio" id="star1" name="rating-2" value="1" />\n            <label class="star" for="star1" title="很差"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star2" name="rating-2" value="2" />\n            <label class="star" for="star2" title="不满意"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star3" name="rating-2" value="3" />\n            <label class="star" for="star3" title="一般"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star4" name="rating-2" value="4" />\n            <label class="star" for="star4" title="满意"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star5" name="rating-2" value="5" />\n            <label class="star" for="star5" title="非常满意"></label>\n          </div>\n        </div>\n        <p class="payment-rating-concl weak"></p>\n      </div>\n      <div class="payment-rating">\n        <p class="payment-rating-title weak">服务速度</p>\n        <div class="payment-rating-wrap mod-rating payment-rating-speed">\n          <div class="mod-rating-star">\n            <input type="radio" id="star1" name="rating-3" value="1" />\n            <label class="star" for="star1" title="很差"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star2" name="rating-3" value="2" />\n            <label class="star" for="star2" title="不满意"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star3" name="rating-3" value="3" />\n            <label class="star" for="star3" title="一般"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star4" name="rating-3" value="4" />\n            <label class="star" for="star4" title="满意"></label>\n          </div>\n          <div class="mod-rating-star">\n            <input type="radio" id="star5" name="rating-3" value="5" />\n            <label class="star" for="star5" title="非常满意"></label>\n          </div>\n        </div>\n        <p class="payment-rating-concl weak"></p>\n      </div>\n      <span href="javascript:void(0);" _stat_click_id="10_2" class="ui-button ui-button-suc payment-mg-bot-32px jmod-commend-order" style="margin-top:16px;">发表评论</span>\n    <%}%>\n  </div>\n';
    }, 140: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t
                }
            }(), o = a(46), s = n(o), d = a(117), c = a(141), l = n(c), u = a(142), p = n(u), f = a(3), v = n(f),
            m = function () {
                function e(t) {
                    var a = t.detailUserView, n = t.detailUserModel;
                    r(this, e), this.detailUserView = a, this.detailUserModel = n
                }

                return i(e, [{
                    key: "init", value: function () {
                        var e = this.detailUserModel.getStore(), t = e.orderInfo, a = e.orderStep, n = e.activeInfo;
                        this.detailUserView.renderBreadCrumb(t.so_id), this.detailUserView.renderOrderStep(a);
                        var r = t.so_status;
                        this.initOrderStatus(t, n, r), this.detailUserView.renderOrderInfo(t, n), s["default"].setQQWPA()
                    }
                }, {
                    key: "initOrderStatus", value: function (e, t, a) {
                        var n = this;
                        d.statusUtils.isNotPay(a) ? (this.detailUserView.renderToPay(e), this.detailUserView.bindOrderPay({
                            weChatPayCb: function () {
                                n.fetchWechatQrcode()
                            }, caifutongPayCb: function () {
                                n.caifutongPay()
                            }
                        }), p["default"].bindCancelDialog({
                            okHandler: function (e, t) {
                                l["default"].cancelOrder(t, function () {
                                    n.finishDialogOperation(e, "取消成功")
                                })
                            }
                        }), this.detailUserModel.fetchOrderStatus(function (e) {
                            var t = e.status;
                            d.statusUtils.isNotPay(t) || window.location.reload()
                        })) : d.statusUtils.isPayed(a) ? (this.detailUserView.renderPaid(e), p["default"].bindRefundDialog({
                            okHandler: function (e, t) {
                                l["default"].refundOrder(t, function () {
                                    n.finishDialogOperation(e, "取消成功")
                                })
                            }
                        })) : d.statusUtils.isConfirmed(a) ? this.detailUserView.renderConfirmed(e) : d.statusUtils.isToCheck(a) ? (this.detailUserView.renderToCheck(e), this.detailUserView.bindCheckOrder(function () {
                            n.checkOrder(e.so_id)
                        }), p["default"].bindDelayConfirmDialog({
                            okHandler: function (e, t) {
                                l["default"].delayConfirmOrder(t, function () {
                                    n.finishDialogOperation(e, "操作成功")
                                })
                            }
                        }), this.autoCheckCountDown(e.auto_accept_countdown, e.so_buyer_delay, this.detailUserView.updateDelayCheckInfo)) : d.statusUtils.isChecked(a) ? (this.detailUserView.renderChecked(e), e.ss_quality_score || this.detailUserView.bindCommendOrder(function (e) {
                            var t = e.attitude, a = e.quality, r = e.speed;
                            n.commendOrder({attitude: t, quality: a, speed: r})
                        })) : d.statusUtils.isCancel(a) && this.detailUserView.renderCancel(e, t)
                    }
                }, {
                    key: "checkOrder", value: function (e) {
                        l["default"].confirmService({soId: e}, function () {
                            v["default"].showToast("success", "操作成功"), setTimeout(function () {
                                window.location.reload()
                            }, 300)
                        })
                    }
                }, {
                    key: "autoCheckCountDown", value: function (e, t, a) {
                        var n = this;
                        return e > 0 ? (e--, a(e, t), void setTimeout(function () {
                            n.autoCheckCountDown(e, t, a)
                        }, 1e3)) : (setTimeout(function () {
                            window.location.reload()
                        }, 1200), !0)
                    }
                }, {
                    key: "commendOrder", value: function (e) {
                        var t = e.attitude, a = e.quality, n = e.speed;
                        this.detailUserModel.commendOrder({attitude: t, quality: a, speed: n}, function () {
                            window.location.reload()
                        })
                    }
                }, {
                    key: "fetchWechatQrcode", value: function () {
                        var e = this;
                        this.detailUserModel.fetchWechatQrcode(function (t) {
                            var a = t.payCodeUrl;
                            a && e.detailUserView.updateWechatQrcode(a)
                        })
                    }
                }, {
                    key: "caifutongPay", value: function () {
                        var e = this;
                        this.detailUserModel.checkLogin(function () {
                            e.detailUserView.caifutongPaySubmit()
                        })
                    }
                }, {
                    key: "finishDialogOperation", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "操作成功";
                        e.hide(), v["default"].showToast("success", t), setTimeout(function () {
                            window.location.reload()
                        }, 300)
                    }
                }]), e
            }();
        t["default"] = m
    }, 141: function (e, t, a) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.url,
                a = void 0 === t ? "" : t, n = e.data, r = void 0 === n ? {} : n, i = e.type,
                s = void 0 === i ? "POST" : i, c = e.callback, l = void 0 === c ? function () {
                } : c;
            return !v && (d["default"].toggleLoading(!0), v = !0, void o["default"].request({
                url: a,
                type: s,
                data: r,
                needLogin: !0,
                needRefresh: !0,
                success: function (e) {
                    d["default"].toggleLoading(!1), v = !1, 0 === e.ret ? l(e.data) : d["default"].showToast("fail", e.msg || "网络错误请稍后再试。")
                },
                error: function () {
                    d["default"].toggleLoading(!1), v = !1, d["default"].showToast("fail", "网络错误请稍后再试。")
                }
            }))
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = a(6), o = n(i), s = a(3), d = n(s), c = "/order/confirmservice", l = "/order/delay",
            u = "/order/ordercancel", p = "/order/refund", f = 15, v = !1, m = {};
        m.cancelOrder = function (e, t) {
            r({url: u, data: {so_id: e}, callback: t})
        }, m.refundOrder = function (e, t) {
            r({url: p, data: {so_id: e}, callback: t})
        }, m.delayConfirmOrder = function (e, t) {
            r({url: l, data: {so_id: e, delay_days: f}, callback: t})
        }, m.confirmService = function (e, t) {
            var a = e.soId, n = e.qualityScore, i = e.speedScore, o = e.attitudeScore;
            r({url: c, data: {soId: a, qualityScore: n, speedScore: i, attitudeScore: o}, callback: t})
        }, t["default"] = m
    }, 142: function (e, t, a) {
        (function (e) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {"default": e}
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var r = a(30), i = n(r), o = a(132), s = n(o), d = a(3), c = n(d), l = {},
                u = '\n  <div class="dialog-rating">\n    <div class="payment-rating">\n      <p class="payment-rating-title weak">服务态度</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-attitude">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-1" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-1" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-1" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-1" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-1" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n    </div>\n    <div class="payment-rating">\n      <p class="payment-rating-title weak">服务质量</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-quality">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-2" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-2" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-2" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-2" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-2" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n    </div>\n    <div class="payment-rating">\n      <p class="payment-rating-title weak">服务速度</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-speed">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-3" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-3" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-3" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-3" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-3" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n    </div>\n  </div>\n';
            l.bindCancelDialog = function (t) {
                var a = t.okHandler, n = t.clickHandler, r = "", o = new i["default"]({
                    tit: "取消订单",
                    cont: '\n      <div class="ui-dialog-alert">确认取消订单？</div>\n      <p class="weak">订单取消后无法恢复。</p>\n    ',
                    btnOK: {
                        text: "确定取消订单", theme: "suc", callback: function () {
                            a(o, r)
                        }
                    },
                    btnNo: null
                });
                e(document).on("click", ".jmod_cancel_order", function (t) {
                    r = e(t.currentTarget).data("id"), n && n(r), o.show()
                })
            }, l.bindRefundDialog = function (t) {
                var a = t.okHandler, n = t.clickHandler, r = "", o = new i["default"]({
                    tit: "取消订单",
                    cont: '\n      <div class="ui-dialog-alert">确认取消订单？</div>\n      <p class="weak">订单取消后无法恢复，所付款项将在7天内退回支付账户。</p>\n    ',
                    btnOK: {
                        text: "确定取消订单", theme: "suc", callback: function () {
                            a(o, r)
                        }
                    },
                    btnNo: null
                });
                e(document).on("click", ".jmod_canNref_order", function (t) {
                    r = e(t.currentTarget).data("id"), n && n(r), o.show()
                })
            }, l.bindDelayConfirmDialog = function (t) {
                var a = t.okHandler, n = t.clickHandler, r = "", o = new i["default"]({
                    tit: "延长确认时间",
                    cont: '\n      <div class="ui-dialog-alert">\n        确认延长15天确认时间？\n      </div>\n      <p class="weak">\n        延长确认时间可以让您有更多的时间来确认服务完成情况。\n      </p>\n    ',
                    btnOK: {
                        text: "确认延长", theme: "suc", callback: function () {
                            a(o, r)
                        }
                    },
                    btnNo: null
                });
                e(document).on("click", ".jmod_delay_confirm", function (t) {
                    r = e(t.currentTarget).data("id"), n && n(r), o.show()
                })
            }, l.bindConfirmDialog = function (t) {
                var a = t.okHandler, n = t.clickHandler, r = "", o = new i["default"]({
                        tit: "确认服务完成",
                        cont: '\n      <div class="ui-dialog-alert">确认服务完成？</div>\n      <p class="weak" style="width:380px;">确认服务完成后，腾讯会将您支付的服务费用结算给服务商。同时，请您对服务商的服务进行评分，满意请给五颗星哦！\n      </p>\n      ' + u + "\n    ",
                        btnOK: {
                            text: "确认服务完成", theme: "suc", callback: function () {
                                var t = e(".payment-rating-attitude .mod-rating-star").find(".checked").length,
                                    n = e(".payment-rating-quality .mod-rating-star").find(".checked").length,
                                    i = e(".payment-rating-speed .mod-rating-star").find(".checked").length;
                                return t || n || i ? t && n && i ? void a(o, r, n, i, t) : void c["default"].showToast("fail", "请您对所有评分项进行评分。") : void c["default"].showToast("fail", "请您为服务商打分，满意请给五颗星~！")
                            }
                        },
                        btnNo: null
                    }), d = new s["default"]({selector: ".payment-rating-attitude", inputName: "rating-1"}),
                    l = new s["default"]({selector: ".payment-rating-quality", inputName: "rating-2"}),
                    p = new s["default"]({selector: ".payment-rating-speed", inputName: "rating-3"});
                d.init(), l.init(), p.init(), e(document).on("click", ".jmod_complete_order", function (t) {
                    r = e(t.currentTarget).data("id"), d.reset(), l.reset(), p.reset(), n && n(r), o.show()
                })
            }, t["default"] = l
        }).call(t, a(2))
    }
});