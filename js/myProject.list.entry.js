!function (t) {
    function e(n) {
        if (a[n]) return a[n].exports;
        var r = a[n] = {exports: {}, id: n, loaded: !1};
        return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }

    var a = {};
    return e.m = t, e.c = a, e.p = "", e(0)
}({
    0: function (t, e, a) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        var r = a(147), i = n(r), s = a(148), o = n(s), l = a(149), c = n(l), d = a(77), u = n(d), f = a(31), p = a(47),
            m = n(p), _ = new m["default"](".jmod_page_wrap"), v = new u["default"],
            g = new i["default"]({pagination: _, sideMenuView: v}), y = new o["default"],
            h = new c["default"]({listCustView: g, listCustModel: y});
        h.init(), (0, f.initReport)(19)
    }, 2: function (t, e) {
        t.exports = jQuery
    }, 3: function (t, e) {
        t.exports = _cfUI.toast
    }, 6: function (t, e) {
        t.exports = _cfCommon.network
    }, 8: function (t, e) {
        t.exports = _cfCommon.utils
    }, 15: function (t, e) {
        t.exports = _cfCommon.constants
    }, 30: function (t, e) {
        t.exports = _cfUI.dialog
    }, 31: function (t, e) {
        t.exports = _cfCommon.timeStat
    }, 45: function (t, e) {
        t.exports = _cfCommon.locationData
    }, 47: function (t, e) {
        t.exports = _cfUI.pagination
    }, 77: function (t, e, a) {
        (function (t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var i = function () {
                    function t(t, e) {
                        for (var a = 0; a < e.length; a++) {
                            var n = e[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, a, n) {
                        return a && t(e.prototype, a), n && t(e, n), e
                    }
                }(), s = a(8), o = n(s), l = 1, c = {
                    usercenter: "usercenter",
                    userMkaccInfo: "userMkaccInfo",
                    listproj: "listproj",
                    corpcenter: "corpcenter",
                    service: "service",
                    corpMkaccInfo: "corpMkaccInfo",
                    monthlist: "monthlist"
                },
                d = '\n  <div class="side">\n    <div class="menu">\n      <div class="menu-item">\n        <div class="menu-tit founder">我是创业者</div>\n        <ul class="menu-list">\n          <li class="item <%if(curSelect == OPTIONS.usercenter){%>cur<%}%>"><a href="/order/usercenter">已订购的服务</a></li>\n          <li class="item <%if(curSelect == OPTIONS.userMkaccInfo){%>cur<%}%>"><a href="/Mkacc/userMkaccInfo">我的创业红包</a></li>\n          <li class="item <%if(curSelect == OPTIONS.listproj){%>cur<%}%>"><a href="/startup/listproj">我的项目</a></li>\n        </ul>\n      </div>\n      <%if (isCorp === ' + l + ') {%>\n        <div class="menu-item mt">\n          <div class="menu-tit provider">我是服务商</div>\n          <ul class="menu-list">\n            <li class="item <%if(curSelect == OPTIONS.corpcenter){%>cur<%}%>"><a href="/order/corpcenter">订单管理</a></li>\n            <li class="item <%if(curSelect == OPTIONS.service){%>cur<%}%>"><a href="/cmdty/mycmdty">服务管理</a></li>\n            <li class="item <%if(curSelect == OPTIONS.corpMkaccInfo){%>cur<%}%>"><a href="/Mkacc/corpMkaccInfo">创业红包流水</a></li>\n            <li class="item <%if(curSelect == OPTIONS.monthlist){%>cur<%}%>"><a href="/settlement/monthlist">结算管理</a></li>\n            <li class="item"><a href="/seller/register" target="_blank">入驻资料</a></li>\n          </ul>        </div>\n      <%}%>\n    </div>\n</div>\n',
                u = function () {
                    function e() {
                        r(this, e), this.$sideMenu = t(".mod-sideMenu")
                    }

                    return i(e, [{
                        key: "renderSideMenu", value: function (t, e) {
                            var a = o["default"].tmpl(d, {curSelect: t, isCorp: e, OPTIONS: c});
                            this.$sideMenu.html(a)
                        }
                    }]), e
                }();
            e["default"] = u
        }).call(e, a(2))
    }, 132: function (t, e, a) {
        (function (t) {
            "use strict";

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var n = function () {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e
                }
            }(), r = function () {
                function e(t) {
                    var n = t.selector, r = t.inputName;
                    a(this, e), this.selector = n, this.inputName = r, this.score = 0
                }

                return n(e, [{
                    key: "init", value: function () {
                        var e = this;
                        t(this.selector).on("mouseover", ".mod-rating-star", function (a) {
                            a.stopPropagation();
                            var n = t(a.currentTarget);
                            n.children(".star").addClass("checked"), n.prevAll(".mod-rating-star").children(".star").addClass("checked"), n.nextAll(".mod-rating-star").children(".star").removeClass("checked"), n.parent(e.selector).siblings(".payment-rating-concl").html(n.children(".star").attr("title"))
                        }), t(this.selector).on("mouseleave", function (a) {
                            a.stopPropagation();
                            var n = t(a.currentTarget);
                            return 0 === parseInt(e.score, 10) ? (n.find(".star").removeClass("checked"), void n.next(".payment-rating-concl").html("")) : (n.children(".mod-rating-star:nth-child(" + e.score + ")").prevAll(".mod-rating-star").children(".star").addClass("checked"), n.children(".mod-rating-star:nth-child(" + e.score + ")").children(".star").addClass("checked"), n.children(".mod-rating-star:nth-child(" + e.score + ")").nextAll(".mod-rating-star").children(".star").removeClass("checked"), void n.siblings(".payment-rating-concl").html(n.children(".mod-rating-star:nth-child(" + e.score + ")").children(".star").attr("title")))
                        }), t(this.selector).on("click", ".star", function (a) {
                            a.stopPropagation();
                            var n = t(a.currentTarget);
                            e.score = n.siblings('input[type="radio"]').attr("value")
                        })
                    }
                }, {
                    key: "reset", value: function () {
                        t(this.selector).find(".star").removeClass("checked"), t(this.selector).next(".payment-rating-concl").html(""), this.score = 0
                    }
                }]), e
            }();
            e["default"] = r
        }).call(e, a(2))
    }, 141: function (t, e, a) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.url,
                a = void 0 === e ? "" : e, n = t.data, r = void 0 === n ? {} : n, i = t.type,
                o = void 0 === i ? "POST" : i, c = t.callback, d = void 0 === c ? function () {
                } : c;
            return !m && (l["default"].toggleLoading(!0), m = !0, void s["default"].request({
                url: a,
                type: o,
                data: r,
                needLogin: !0,
                needRefresh: !0,
                success: function (t) {
                    l["default"].toggleLoading(!1), m = !1, 0 === t.ret ? d(t.data) : l["default"].showToast("fail", t.msg || "网络错误请稍后再试。")
                },
                error: function () {
                    l["default"].toggleLoading(!1), m = !1, l["default"].showToast("fail", "网络错误请稍后再试。")
                }
            }))
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = a(6), s = n(i), o = a(3), l = n(o), c = "/order/confirmservice", d = "/order/delay",
            u = "/order/ordercancel", f = "/order/refund", p = 15, m = !1, _ = {};
        _.cancelOrder = function (t, e) {
            r({url: u, data: {so_id: t}, callback: e})
        }, _.refundOrder = function (t, e) {
            r({url: f, data: {so_id: t}, callback: e})
        }, _.delayConfirmOrder = function (t, e) {
            r({url: d, data: {so_id: t, delay_days: p}, callback: e})
        }, _.confirmService = function (t, e) {
            var a = t.soId, n = t.qualityScore, i = t.speedScore, s = t.attitudeScore;
            r({url: c, data: {soId: a, qualityScore: n, speedScore: i, attitudeScore: s}, callback: e})
        }, e["default"] = _
    }, 142: function (t, e, a) {
        (function (t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var r = a(30), i = n(r), s = a(132), o = n(s), l = a(3), c = n(l), d = {},
                u = '\n  <div class="dialog-rating">\n    <div class="payment-rating">\n      <p class="payment-rating-title weak">服务态度</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-attitude">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-1" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-1" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-1" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-1" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-1" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n    </div>\n    <div class="payment-rating">\n      <p class="payment-rating-title weak">服务质量</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-quality">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-2" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-2" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-2" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-2" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-2" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n    </div>\n    <div class="payment-rating">\n      <p class="payment-rating-title weak">服务速度</p>\n      <div class="payment-rating-wrap mod-rating payment-rating-speed">\n        <div class="mod-rating-star">\n          <input type="radio" id="star1" name="rating-3" value="1" />\n          <label class="star" for="star1" title="很差"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star2" name="rating-3" value="2" />\n          <label class="star" for="star2" title="不满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star3" name="rating-3" value="3" />\n          <label class="star" for="star3" title="一般"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star4" name="rating-3" value="4" />\n          <label class="star" for="star4" title="满意"></label>\n        </div>\n        <div class="mod-rating-star">\n          <input type="radio" id="star5" name="rating-3" value="5" />\n          <label class="star" for="star5" title="非常满意"></label>\n        </div>\n      </div>\n      <p class="payment-rating-concl weak"></p>\n    </div>\n  </div>\n';
            d.bindCancelDialog = function (e) {
                var a = e.okHandler, n = e.clickHandler, r = "", s = new i["default"]({
                    tit: "取消订单",
                    cont: '\n      <div class="ui-dialog-alert">确认取消订单？</div>\n      <p class="weak">订单取消后无法恢复。</p>\n    ',
                    btnOK: {
                        text: "确定取消订单", theme: "suc", callback: function () {
                            a(s, r)
                        }
                    },
                    btnNo: null
                });
                t(document).on("click", ".jmod_cancel_order", function (e) {
                    r = t(e.currentTarget).data("id"), n && n(r), s.show()
                })
            }, d.bindRefundDialog = function (e) {
                var a = e.okHandler, n = e.clickHandler, r = "", s = new i["default"]({
                    tit: "取消订单",
                    cont: '\n      <div class="ui-dialog-alert">确认取消订单？</div>\n      <p class="weak">订单取消后无法恢复，所付款项将在7天内退回支付账户。</p>\n    ',
                    btnOK: {
                        text: "确定取消订单", theme: "suc", callback: function () {
                            a(s, r)
                        }
                    },
                    btnNo: null
                });
                t(document).on("click", ".jmod_canNref_order", function (e) {
                    r = t(e.currentTarget).data("id"), n && n(r), s.show()
                })
            }, d.bindDelayConfirmDialog = function (e) {
                var a = e.okHandler, n = e.clickHandler, r = "", s = new i["default"]({
                    tit: "延长确认时间",
                    cont: '\n      <div class="ui-dialog-alert">\n        确认延长15天确认时间？\n      </div>\n      <p class="weak">\n        延长确认时间可以让您有更多的时间来确认服务完成情况。\n      </p>\n    ',
                    btnOK: {
                        text: "确认延长", theme: "suc", callback: function () {
                            a(s, r)
                        }
                    },
                    btnNo: null
                });
                t(document).on("click", ".jmod_delay_confirm", function (e) {
                    r = t(e.currentTarget).data("id"), n && n(r), s.show()
                })
            }, d.bindConfirmDialog = function (e) {
                var a = e.okHandler, n = e.clickHandler, r = "", s = new i["default"]({
                        tit: "确认服务完成",
                        cont: '\n      <div class="ui-dialog-alert">确认服务完成？</div>\n      <p class="weak" style="width:380px;">确认服务完成后，腾讯会将您支付的服务费用结算给服务商。同时，请您对服务商的服务进行评分，满意请给五颗星哦！\n      </p>\n      ' + u + "\n    ",
                        btnOK: {
                            text: "确认服务完成", theme: "suc", callback: function () {
                                var e = t(".payment-rating-attitude .mod-rating-star").find(".checked").length,
                                    n = t(".payment-rating-quality .mod-rating-star").find(".checked").length,
                                    i = t(".payment-rating-speed .mod-rating-star").find(".checked").length;
                                return e || n || i ? e && n && i ? void a(s, r, n, i, e) : void c["default"].showToast("fail", "请您对所有评分项进行评分。") : void c["default"].showToast("fail", "请您为服务商打分，满意请给五颗星~！")
                            }
                        },
                        btnNo: null
                    }), l = new o["default"]({selector: ".payment-rating-attitude", inputName: "rating-1"}),
                    d = new o["default"]({selector: ".payment-rating-quality", inputName: "rating-2"}),
                    f = new o["default"]({selector: ".payment-rating-speed", inputName: "rating-3"});
                l.init(), d.init(), f.init(), t(document).on("click", ".jmod_complete_order", function (e) {
                    r = t(e.currentTarget).data("id"), l.reset(), d.reset(), f.reset(), n && n(r), s.show()
                })
            }, e["default"] = d
        }).call(e, a(2))
    }, 147: function (t, e, a) {
        (function (t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            function r(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                    return a
                }
                return Array.from(t)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s() {
            }

            Object.defineProperty(e, "__esModule", {value: !0});
            var o = function () {
                    function t(t, e) {
                        for (var a = 0; a < e.length; a++) {
                            var n = e[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (e, a, n) {
                        return a && t(e.prototype, a), n && t(e, n), e
                    }
                }(), l = a(8), c = n(l), d = a(15), u = "0", f = "5_1", p = "5_2",
                m = [u, d.ORDER_STATUS.STATUS_TO_PAY, d.ORDER_STATUS.STATUS_PAYED, d.ORDER_STATUS.STATUS_CONFIRMED, d.ORDER_STATUS.STATUS_TO_CHECK, f, p, d.ORDER_STATUS.STATUS_REFUND],
                _ = '\n  <%if(listData && listData.length > 0){%>\n    <div class="ui-table-hd all-thead table-order-c"">\n      <span class="col-service-content">订单内容</span>\n      <span class="col-price">单价</span>\n      <span class="col-quantity">数量</span>\n      <span class="col-redeem">优惠</span>\n      <span class="col-actual-price">实付价</span>\n      <span class="col-status">订单状态</span>\n      <span class="col-opt">订单操作</span>\n    </div>\n  <%}else{%>\n    <div class="mod-empty">\n      <p>抱歉，没有相关的内容。</p>\n    </div>\n  <%}%>\n',
                v = '\n  <div class="ui-table theme-1 table-mall table-order table-order-c">\n    <table _so_id="<%=orderItem.so_id%>">\n      <colgroup>\n        <col class="col-service-content">\n        <col class="col-price">\n        <col class="col-quantity">\n        <col class="col-redeem">\n        <col class="col-actual-price">\n        <col class="col-status">\n        <col class="col-opt">\n      </colgroup>\n      <tbody>\n        <tr class="lite-head">\n          <td colspan="7">订单提交时间  <%=orderItem.so_ctime%> <span class="order-number">订单号 <%=orderItem.so_id%></span></td>\n        </tr>\n        <tr>\n          <td class="cell-name">\n            <p class="primary"><a href="/cmdty/detail?csId=<%=orderItem.cs_id%>"><%=orderItem.cs_name%></a></p>\n            <p class="weak"><span class="lite-tit">服务地区</span><%=orderItem.province%>-<%=orderItem.city%></p>\n            <p class="weak"><span class="lite-tit">服务期限</span><%=orderItem.oi_service_time%></p>\n          </td>\n          <td class="cell-price">\n            <%if(orderItem.so_total_price != orderItem.so_service_price){%>\n              <p class="weak old-price" style="text-decoration: line-through;">&yen;<%=orderItem.oi_price%></p>\n            <%}%>\n            <%if(activeInfo.activeId == activityType.ZERO){%>\n              <p class="primary">&yen;0.00</p>\n            <%}else{%>\n              <p class="primary">&yen;<%=orderItem.oi_unit_price%></p>\n            <%}%>\n          </td>\n          <td class="cell-quantity">\n            <p class="weak"><%=orderItem.oi_goods_quantity%></p>\n          </td>\n          <td>\n            <%if(activeInfo.activeId == activityType.HB && orderItem.so_pay_vfund > 0){%>\n              <p class="weak red-redeem"><%=orderItem.so_pay_vfund%>元</p>\n            <%}else if(activeInfo.activeId == activityType.ZERO){%>\n              <p class="weak"><span class="ico-clock-sm"></span>0元抢购</p>\n            <%}else{%>\n              <p class="primary-weak">无<p>\n            <%}%>\n          </td>\n          <td>\n            <p class="primary">&yen;<%=orderItem.so_pay_fund%></p>\n          </td>\n          <td>\n            <%switch(orderItem.so_status) {\n              case gOrderStatus.STATUS_TO_PAY:\n              case gOrderStatus.STATUS_PAY_FAILED:%><p class="primary-weak" style="color:#323232;">待付款</p>\n              <%break;\n              case gOrderStatus.STATUS_PAY_EXCEPTION:%><p class="primary-weak" style="color:#323232;">支付处理中</p>\n              <%break;\n              case gOrderStatus.STATUS_PAYED:%><p class="primary-weak" style="color:#323232;">待确认</p>\n              <%break;\n              case gOrderStatus.STATUS_CONFIRMED:%><p class="primary-weak" style="color:#323232;">待交付</p>\n              <%break;\n              case gOrderStatus.STATUS_TO_CHECK:%><p class="primary-weak" style="color:#323232;">待验收</p><p class="primary-weak">还剩<%=orderItem.formated_countdown%></p>\n              <%break;\n              case gOrderStatus.STATUS_CHECKED:\n              case gOrderStatus.STATUS_SETTLED:%><p class="primary-weak" style="color:#323232;">已完成</p>\n              <%break;\n              case gOrderStatus.STATUS_REFUND:\n              case gOrderStatus.STATUS_CANCEL:\n              case gOrderStatus.STATUS_REFUNDED:\n              case gOrderStatus.STATUS_REFUND_EXCEPTION:%><p class="primary-weak" style="color:#323232;">已取消</p>\n              <%break;\n              default:%><p class="primary-weak" style="color:#323232;">未知</p>\n              <%break;\n            }%>\n          </td>\n          <td>\n            <%if(orderItem.so_status == gOrderStatus.STATUS_CHECKED || orderItem.so_status == gOrderStatus.STATUS_SETTLED){%>\n              <%if(orderItem.so_comment_score_attrib == 2){%>\n                <p class="primary-weak"><a class="act-link" href="/order/detail?so_id=<%=orderItem.so_id%>" target="_blank" _stat_click_id="6_1" data-id="<%=orderItem.so_id%>">查看订单</a></p>\n              <%}else{%>\n                <p><a href="/order/detail?so_id=<%=orderItem.so_id%>" _stat_click_id="6_4" class="ui-button ui-button-sm ui-button-suc" style="color:#fff;" data-id="<%=orderItem.so_id%>">立即评价</a></p>\n              <%}%>\n            <%}else{%>\n              <p class="primary-weak"><a class="act-link" href="/order/detail?so_id=<%=orderItem.so_id%>" target="_blank" _stat_click_id="6_1" data-id="<%=orderItem.so_id%>">查看订单</a></p>\n              <%if(orderItem.so_status == gOrderStatus.STATUS_TO_PAY || orderItem.so_status == gOrderStatus.STATUS_PAY_FAILED){%>\n              <p><a href="/order/detail?so_id=<%=orderItem.so_id%>" _stat_click_id="6_2" class="ui-button ui-button-sm ui-button-suc jmod_pay_order" style="color:#fff;" data-id="<%=orderItem.so_id%>">立即付款</a></p>\n              <%}%>\n              <%if(orderItem.so_status == gOrderStatus.STATUS_TO_CHECK){%>\n              <p><a href="javascript:;" _stat_click_id="6_4" class="ui-button ui-button-sm ui-button-suc jmod_complete_order" style="color:#fff;" data-id="<%=orderItem.so_id%>">确认验收</a></p>\n              <p class="primary-weak"><a class="act-link <%if (!(orderItem.so_buyer_delay == 0 && orderItem.auto_accept_countdown <= THREE_DAY)) {%>hidden<%}%> jmod_delay_confirm" href="javascript:void(0);" data-id="<%=orderItem.so_id%>">延长确认时间</a></p>\n              <%}%>\n              <%if(orderItem.so_status == gOrderStatus.STATUS_TO_PAY || orderItem.so_status == gOrderStatus.STATUS_PAY_FAILED){%>\n              <p class="primary-weak" _stat_click_id="6_3" _so_status="<%=orderItem.so_status%>"><a class="act-link jmod_cancel_order" href="javascript:;" data-id="<%=orderItem.so_id%>">取消订单</a></p>\n              <%}else if(orderItem.so_status == gOrderStatus.STATUS_PAYED){%>\n                <p class="primary-weak" _stat_click_id="6_3" _so_status="<%=orderItem.so_status%>"><a class="act-link jmod_canNref_order" href="javascript:;" data-id="<%=orderItem.so_id%>">取消订单</a></p>\n              <%}%>\n            <%}%>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n',
                g = "usercenter", y = 259200, h = function () {
                    function e(a) {
                        var n = a.pagination, r = a.sideMenuView;
                        i(this, e), this.$container = t(".jmod_result_wrap"), this.pagination = n, this.sideMenuView = r
                    }

                    return o(e, [{
                        key: "initView", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.isCorp = e, this.sideMenuView.renderSideMenu(g, this.isCorp);
                            var a = c["default"].getHash("status");
                            m.indexOf(a) <= -1 && (a = u, location.hash = "#status=" + a), t(".mod-tab-panel .tab-item").removeClass("cur"), t('.mod-tab-panel .tab-item[data-status="' + a + '"]').addClass("cur")
                        }
                    }, {
                        key: "renderOrderList", value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                e = [].concat(r(t)), a = c["default"].tmpl(_, {listData: e});
                            e.forEach(function (t) {
                                var e = t.orderInfo || {}, n = t.activeInfo || {}, r = c["default"].tmpl(v, {
                                    orderItem: e,
                                    activeInfo: n,
                                    THREE_DAY: y,
                                    activityType: d.ACTIVITY_TYPE,
                                    gOrderStatus: d.ORDER_STATUS
                                });
                                a += r
                            }), this.$container.html(a)
                        }
                    }, {
                        key: "updatePagination", value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
                            this.pagination.render(t, e, a)
                        }
                    }, {
                        key: "bindOrderListPage", value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                            this.pagination.bindEvents(function (e) {
                                t(e)
                            })
                        }
                    }, {
                        key: "changeTabStatus", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                            t(document).on("click", ".mod-tab-panel .tab-item", function () {
                                t(".mod-tab-panel .tab-item").removeClass("cur"), t(this).addClass("cur");
                                var a = t(this).data("status") + [], n = 1;
                                location.hash = "#status=" + a, e(n, a)
                            })
                        }
                    }]), e
                }();
            e["default"] = h
        }).call(e, a(2))
    }, 148: function (t, e, a) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                return a
            }
            return Array.from(t)
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function s() {
        }

        function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [].concat(r(t));
            return e.forEach(function (t) {
                var e = l({}, t.orderInfo);
                e.so_ctime = p["default"].formateDate(e.so_ctime + "000", !0);
                var a = _["default"][e.oi_service_province_id] || {};
                a.city = a.city || {}, e.province = a.name, e.city = a.city[e.oi_service_city_id], e.oi_service_time = y.SERVICE_TIME[e.oi_service_time], e.formated_countdown = p["default"].formatRemainTime(e.auto_accept_countdown, 2), e.oi_price = e.oi_price ? p["default"].toDecimal(e.oi_price / 100, 2) : "0.00", e.oi_price_discount = e.oi_price_discount ? p["default"].toDecimal(e.oi_price_discount / 100, 2) : "0.00", e.so_pay_vfund = e.so_pay_vfund ? p["default"].toDecimal(e.so_pay_vfund / 100, 2) : "0.00", e.so_pay_fund = e.so_pay_fund ? p["default"].toDecimal(e.so_pay_fund / 100, 2) : "0.00", e.oi_unit_price = p["default"].toDecimal(e.oi_price - e.oi_price_discount, 2), t.orderInfo = l({}, e)
            }), e
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var l = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
                }
                return t
            }, c = function () {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e
                }
            }(), d = a(6), u = n(d), f = a(8), p = n(f), m = a(45), _ = n(m), v = a(3), g = n(v), y = a(15), h = 50,
            T = "/order/uorderlist", S = "0", b = "5_1", k = "5_2",
            O = [S, y.ORDER_STATUS.STATUS_TO_PAY, y.ORDER_STATUS.STATUS_PAYED, y.ORDER_STATUS.STATUS_CONFIRMED, y.ORDER_STATUS.STATUS_TO_CHECK, b, k, y.ORDER_STATUS.STATUS_REFUND],
            w = +G_DATA.isCorp || 0, I = function () {
                function t() {
                    i(this, t)
                }

                return c(t, [{
                    key: "getIsCorp", value: function () {
                        return w
                    }
                }, {
                    key: "getOrderList", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s, n = {};
                        n.pagesize = h, n.pageno = t, O.indexOf(e) <= -1 && (e = S), e === b ? (n.status = y.ORDER_STATUS.STATUS_CHECKED, n.commentattr = 1) : e === k ? (n.status = y.ORDER_STATUS.STATUS_CHECKED, n.commentattr = 2) : n.status = e, g["default"].toggleLoading(!0), u["default"].request({
                            url: T,
                            data: n,
                            needLogin: !0,
                            needRefresh: !0,
                            success: function (t) {
                                if (g["default"].toggleLoading(!1), 0 === t.ret) {
                                    var e = o(t.data.list);
                                    a(e, t.data.conf.total)
                                } else g["default"].showToast("fail", "网络错误请稍后再试。" | t.msg)
                            },
                            error: function () {
                                g["default"].toggleLoading(!1), g["default"].showToast("fail", "网络错误请稍后再试。")
                            }
                        })
                    }
                }]), t
            }();
        e["default"] = I
    }, 149: function (t, e, a) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
                function t(t, e) {
                    for (var a = 0; a < e.length; a++) {
                        var n = e[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, a, n) {
                    return a && t(e.prototype, a), n && t(e, n), e
                }
            }(), s = a(8), o = n(s), l = a(141), c = n(l), d = a(3), u = n(d), f = a(142), p = n(f), m = 1,
            _ = o["default"].getHash("status"), v = function () {
                function t(e) {
                    var a = e.listCustView, n = e.listCustModel;
                    r(this, t), this.listCustView = a, this.listCustModel = n
                }

                return i(t, [{
                    key: "init", value: function () {
                        var t = this;
                        this.isCorp = this.listCustModel.getIsCorp(), this.listCustView.initView(this.isCorp), this.getOrderList(m, _), this.listCustView.bindOrderListPage(function (e) {
                            var a = o["default"].getHash("status");
                            t.getOrderList(e, a)
                        }), this.listCustBindEvents()
                    }
                }, {
                    key: "getOrderList", value: function () {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                        this.listCustModel.getOrderList(e, a, function (a, n, r) {
                            t.listCustView.renderOrderList(a), t.listCustView.updatePagination(e, n, r)
                        })
                    }
                }, {
                    key: "listCustBindEvents", value: function () {
                        var t = this;
                        p["default"].bindConfirmDialog({
                            okHandler: function (e, a, n, r, i) {
                                c["default"].confirmService({
                                    soId: a,
                                    qualityScore: n,
                                    speedScore: r,
                                    attitudeScore: i
                                }, function () {
                                    t.finishDialogOperation(e, "操作成功")
                                })
                            }
                        }), p["default"].bindDelayConfirmDialog({
                            okHandler: function (e, a) {
                                c["default"].delayConfirmOrder(a, function () {
                                    t.finishDialogOperation(e, "操作成功")
                                })
                            }
                        }), p["default"].bindCancelDialog({
                            okHandler: function (e, a) {
                                c["default"].cancelOrder(a, function () {
                                    t.finishDialogOperation(e, "取消成功")
                                })
                            }
                        }), p["default"].bindRefundDialog({
                            okHandler: function (e, a) {
                                c["default"].refundOrder(a, function () {
                                    t.finishDialogOperation(e, "取消成功")
                                })
                            }
                        }), this.listCustView.changeTabStatus(function (e, a) {
                            t.listCustModel.getOrderList(e, a, function (a, n, r) {
                                t.listCustView.renderOrderList(a), t.listCustView.updatePagination(e, n, r)
                            })
                        })
                    }
                }, {
                    key: "finishDialogOperation", value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "操作成功";
                        t.hide(), u["default"].showToast("success", e), setTimeout(function () {
                            window.location.reload()
                        }, 300)
                    }
                }]), t
            }();
        e["default"] = v
    }
});