!function (e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var c = n[a] = {exports: {}, id: a, loaded: !1};
        return e[a].call(c.exports, c, c.exports, t), c.loaded = !0, c.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    (function (e) {
        "use strict";

        function t(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var a = n(2), c = t(a), r = n(4), i = t(r), o = n(6), s = t(o), l = n(14), d = t(l), f = n(15);
        e(e("#jmod-nav-wrap a.mod-nav-item").get(0)).addClass("cur");
        var u = new d["default"];
        u.init();
        var m = new i["default"], p = new s["default"], v = new c["default"]({cfView: p, cfModel: m});
        v.init(), (0, f.initReport)(1)
    }).call(t, n(1))
}, function (e, t) {
    e.exports = jQuery
}, function (e, t, n) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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
    }(), r = n(3), i = 1, o = function () {
        function e(t) {
            var n = t.cfView, c = t.cfModel;
            a(this, e), this.cfView = n, this.cfModel = c
        }

        return c(e, [{
            key: "init", value: function () {
                var e = this, t = this.cfModel.getStore();
                this.cfView.render(t), this.cfView.bindEvents(), +hasLogin && this.cfModel.updateLoginInfo(function (t) {
                    var n = t.loginQQ;
                    if (parseInt(t.isCorp, 10) === i) {
                        var a = t.cInfo.cdetail;
                        a.cScore = parseInt(a.cScore, 10), a.levelUpScore = ((r.SCORE_LEVEL[a.cLevel] - a.cScore) / 100).toFixed(2), a.cScore = 0 === a.cScore ? 0 : (a.cScore / 100).toFixed(2), e.cfView.renderCorpInfo(n, t.cInfo)
                    } else e.cfView.renderUserInfo(n, t.uInfo)
                });
                var n = t.hbPreferential.recom.map(function (e) {
                    return e.id
                });
                this.cfModel.fetchCsInfo(n.toString(), "recom", function (t) {
                    e.cfView.renderHongbaoRecom(t)
                });
                var a = t.hbPreferential.hot.map(function (e) {
                    return e.id
                });
                this.cfModel.fetchCsInfo(a.toString(), "hot", function (t) {
                    e.cfView.renderHongbaoHot(t)
                });
                var c = t.hotCorps.map(function (e) {
                    return e.id
                });
                this.cfModel.fetchCorpInfo(c.toString(), function (t) {
                    e.cfView.renderHotCorps(t)
                });
                var o = [];
                t.tzone.forEach(function (e) {
                    e.cmdtyInfo.forEach(function (e) {
                        e.id && o.push(e.id)
                    })
                }), o.length ? this.cfModel.fetchTzoneCsInfo(o.toString(), function (t) {
                    e.cfView.renderTencent(t), e.cfView.bindTencent()
                }) : (this.cfView.renderTencent(t.tzone), this.cfView.bindTencent())
            }
        }]), e
    }();
    t["default"] = o
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.SCORE_LEVEL = [0, 1e4, 3e4, 6e4, 1e5, 15e4, 21e4, 28e4, 36e4, 45e4, 55e4, 67e4, 81e4, 97e4, 115e4, 135e4, 157e4, 181e4, 207e4, 235e4, 265e4, 3e6, 34e5, 385e4, 435e4, 49e5, 55e5, 615e4, 685e4, 76e5, 84e5]
}, function (e, t, n) {
    (function (e) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function c(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i() {
            var e = G_DATA || {};
            e.hbPreferential = e.hbPreferential || {}, e.hbPreferential.news = e.hbPreferential.news || {}, e.hbPreferential.recom = e.hbPreferential.recom || [], e.hbPreferential.hot = e.hbPreferential.hot || [], e.hotCorps = e.hotCorps || [], e.frequentlyCate = e.frequentlyCate || [];
            for (var t = 0; t < e.frequentlyCate.length; t++) for (var n = e.frequentlyCate[t], a = 0; a < n.cateInfo.length; a++) {
                var c = n.cateInfo[a];
                c.price && "璧�" === c.price.slice(-1) && (c.price = c.price.slice(0, -1), c.hasStart = !0)
            }
            return e.tzone = e.tzone || [], e
        }

        function o(e) {
            for (var t = [].concat(c(e)), n = 0; n < t.length; n++) {
                var a = t[n], r = a.stock;
                r && r.deductionPrice > 0 && (a.hasHB = !0, r.realPrice = r.realPrice ? r.realPrice / 100 : 0), a.csPrice = a.csPrice ? a.csPrice / 100 : 0, a.csPayCount = parseInt(a.csPayCount, 10), a.csPayCount = a.csPayCount > 0 ? a.csPayCount : "鏃�"
            }
            return t
        }

        function s(e) {
            for (var t = [].concat(c(e)), n = 0; n < t.length; n++) {
                var a = t[n];
                a.cAttitudeScore = a.cAttitudeScore || 0, a.cQualityScore = a.cQualityScore || 0, a.cSpeedScore = a.cSpeedScore || 0, a.cAttitudeScore = a.cAttitudeScore > 0 ? (a.cAttitudeScore / 10).toFixed(1) : 0, a.cQualityScore = a.cQualityScore > 0 ? (a.cQualityScore / 10).toFixed(1) : 0, a.cSpeedScore = a.cSpeedScore > 0 ? (a.cSpeedScore / 10).toFixed(1) : 0
            }
            return t
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var l = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), d = n(5), f = a(d), u = "/user/get_accountsummary", m = "/Portal/hbpreferential", p = "/Portal/hotcorps",
            v = "/Portal/getcsdatabyids", h = 0, _ = 1, b = 2, g = i(), y = function () {
                function t() {
                    r(this, t)
                }

                return l(t, [{
                    key: "getStore", value: function () {
                        return g
                    }
                }, {
                    key: "updateLoginInfo", value: function (e) {
                        f["default"].request({
                            url: u, success: function (t) {
                                0 === t.ret && e(t.data)
                            }
                        })
                    }
                }, {
                    key: "fetchCsInfo", value: function (t, n, a) {
                        t && f["default"].request({
                            url: m, data: {csIds: t}, success: function (t) {
                                if (0 === t.ret) {
                                    var c = t.data.hbPreferential;
                                    if ("recom" === n) {
                                        for (var r = g.hbPreferential.recom, i = 0; i < r.length; i++) {
                                            var s = r[i], l = s.id;
                                            c[l] = c[l] || {}, c[l].desc = c[l].csBrief ? c[l].csBrief : s.desc, r[i] = e.extend(!0, {}, s, c[l])
                                        }
                                        g.hbPreferential.recom = o(g.hbPreferential.recom), a(g.hbPreferential.recom)
                                    } else if ("hot" === n) {
                                        for (var d = g.hbPreferential.hot, f = 0; f < d.length; f++) {
                                            var u = d[f], m = u.id;
                                            d[f] = e.extend(!0, {}, u, c[m])
                                        }
                                        g.hbPreferential.hot = o(g.hbPreferential.hot), a(g.hbPreferential.hot)
                                    }
                                }
                            }
                        })
                    }
                }, {
                    key: "fetchCorpInfo", value: function (t, n) {
                        t && f["default"].request({
                            url: p, data: {cIds: t}, success: function (t) {
                                if (0 === t.ret) {
                                    for (var a = t.data.hotCorps, c = g.hotCorps, r = 0; r < c.length; r++) {
                                        var i = c[r], o = i.id;
                                        c[r] = e.extend(!0, {}, i, a[o] || {})
                                    }
                                    g.hotCorps = s(g.hotCorps), n(g.hotCorps)
                                }
                            }
                        })
                    }
                }, {
                    key: "fetchTzoneCsInfo", value: function (t, n) {
                        t && f["default"].request({
                            url: v, data: {csIds: t}, success: function (t) {
                                if (0 === t.ret) {
                                    var a = t.data.csInfo;
                                    for (var c in a) {
                                        var r = a[c], i = parseInt(r.csActStock.activeId, 10);
                                        i === h ? r.minPrice = r.csDiscPrice / 100 : i === _ ? r.minPrice = 0 : i === b && (r.minPrice = r.csDiscPrice < r.csActStock.actMinPrice ? r.csDiscPrice / 100 : r.csActStock.actMinPrice / 100)
                                    }
                                    for (var o = g.tzone, s = 0; s < o.length; s++) for (var l = o[s], d = 0; d < l.cmdtyInfo.length; d++) {
                                        var f = l.cmdtyInfo[d];
                                        f.id && (l.cmdtyInfo[d] = e.extend(!0, {}, f, a[f.id]))
                                    }
                                }
                                n(g.tzone)
                            }, error: function () {
                                n(g.tzone)
                            }
                        })
                    }
                }]), t
            }();
        t["default"] = y
    }).call(t, n(1))
}, function (e, t) {
    e.exports = _cfCommon.network
}, function (e, t, n) {
    (function (e) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                return function (t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(), i = n(7), o = a(i), s = n(8), l = n(9), d = n(10), f = n(11), u = n(12), m = a(u), p = n(13), v = a(p),
            h = ["鏈€浼樼鐨勬ā寮忓線寰€鏄渶绠€鍗曠殑涓滆タ锛�", "鍧氭寔鍒板簳灏辨槸鑳滃埄锛�", "澶╀笅姝﹀姛锛屽敮蹇笉鐮达紒", "鎵炬渶鍚堥€傜殑浜猴紝鑰屼笉鏄渶鐗涚殑浜猴紒", "鍋氫汉娌℃湁姊︽兂锛屽拰鍜搁奔鏈変粈涔堝尯鍒紵", "蹇冨钩鎵嶈兘姘斿拰锛屾皵鍜屾墠鑳戒汉椤�"],
            _ = function () {
                function t() {
                    c(this, t)
                }

                return r(t, [{
                    key: "render", value: function (e) {
                        var t = e.frequentlyCate, n = e.hbPreferential;
                        e.tzone, e.hotCorps;
                        this.renderSlogan(), this.renderPopularServ(t), this.renderHongbao(n)
                    }
                }, {
                    key: "bindEvents", value: function () {
                        this.bindLogin()
                    }
                }, {
                    key: "renderSlogan", value: function () {
                        var t = o["default"].getRandomItemFromList(h);
                        e(".jmod-slogan").text(t)
                    }
                }, {
                    key: "renderCorpInfo", value: function (t, n) {
                        var a = e(".jmod-login");
                        a.removeClass("guest").addClass("provider");
                        var c = n.cdetail, r = n.orderInfo;
                        r = {
                            unpay: r.unpay > 99 ? "99+" : r.unpay,
                            unconfirm: r.unconfirm > 99 ? "99+" : r.unconfirm,
                            undelivery: r.undelivery > 99 ? "99+" : r.undelivery,
                            unaccept: r.unaccept > 99 ? "99+" : r.unaccept
                        }, a.find(".mod-userbox-top").html('\n      <div class="mod-userbox-user">\n        <a target="_blank" href="/seller/corpinfo?c_id=' + c.cId + '" class="mod-userbox-avatar"><img src="' + o["default"].clearProtocol(c.cLogo) + '"></a>\n        <div class="mod-userbox-info">\n          <p><a target="_blank" href="/seller/corpinfo?c_id=' + c.cId + '" class="mod-userbox-name">' + c.cName + '</a><a class="lv" href="/scenter/growth" target="_blank">Lv' + c.cLevel + '</a></p>\n          <p class="mod-userbox-qq">QQ ' + t + '</p>\n          <p class="mod-userbox-store"><a target="_blank" href="/seller/corpinfo?c_id=' + c.cId + '">杩涘叆搴楅摵&nbsp;&gt;</a></p>\n        </div>\n      </div>\n    '), a.find(".mod-userbox-mid").html('\n      <div class="mod-userbox-order">\n        <div class="col">\n          <p>寰呬粯娆�</p>\n          <p class="red"><a href="/order/corpcenter#status=1" target="_blank" _stat_click_id="5_06">' + r.unpay + '</a></p>\n        </div><div class="col">\n          <p>寰呯‘璁�</p>\n          <p class="red"><a href="/order/corpcenter#status=2" target="_blank" _stat_click_id="5_07">' + r.unconfirm + '</a></p>\n        </div><div class="col">\n          <p>寰呬氦浠�</p>\n          <p class="red"><a href="/order/corpcenter#status=3" target="_blank" _stat_click_id="5_08">' + r.undelivery + '</a></p>\n        </div><div class="col">\n          <p>寰呴獙鏀�</p>\n          <p class="red"><a href="/order/corpcenter#status=4" target="_blank" _stat_click_id="5_09">' + r.unaccept + "</a></p>\n        </div>\n      </div>\n    "), a.find(".mod-userbox-btm").html('\n      <a target="_blank" href="/cmdty/mycmdty" class="btn" _stat_click_id="5_010">鏈嶅姟绠＄悊</a><a target="_blank" href="/settlement/monthlist" class="btn" _stat_click_id="5_011">缁撶畻绠＄悊</a>\n    '), v["default"].init(e(".mod-userbox-info .lv"), {
                            direct: "bottom",
                            align: "al-left",
                            content: '<p>绛夌骇锛�<span class="lv">Lv' + c.cLevel + "</span></p><p>鎴愰暱鍊硷細" + c.cScore + "锛堣繕闇€" + c.levelUpScore + "鍒嗗崌绾э級</p>"
                        })
                    }
                }, {
                    key: "renderUserInfo", value: function (t, n) {
                        var a = e(".jmod-login");
                        a.removeClass("guest").removeClass("provider");
                        var c = n.orderInfo || {};
                        c = {
                            unpay: c.unpay > 99 ? "99+" : c.unpay,
                            undelivery: c.undelivery > 99 ? "99+" : c.undelivery,
                            unaccept: c.unaccept > 99 ? "99+" : c.unaccept,
                            uncomment: c.uncomment > 99 ? "99+" : c.uncomment
                        }, n.userBalance = n.userBalance > 0 ? n.userBalance / 100 : 0, a.find(".mod-userbox-top").html('\n      <div class="mod-userbox-user">\n        <span class="mod-userbox-avatar"><img src="//q.qlogo.cn/g?b=qq&nk=' + t + '&s=100"></span>\n        <div class="mod-userbox-info">\n          <p class="mod-userbox-name">' + t + '</p>\n        </div>\n        <div class="mod-userbox-account">\n          <div class="col">\n            <p>寰呬粯娆�</p>\n            <p class="red"><a href="/order/usercenter#status=1" target="_blank">' + c.unpay + '</a></p>\n          </div>\n          <div class="col">\n            <p>寰呬氦浠�</p>\n            <p class="red"><a href="/order/usercenter#status=3" target="_blank">' + c.undelivery + '</a></p>\n          </div>\n          <div class="col">\n            <p>寰呴獙鏀�</p>\n            <p class="red"><a href="/order/usercenter#status=4" target="_blank">' + c.unaccept + '</a></p>\n          </div>\n          <div class="col">\n            <p>寰呰瘎浠�</p>\n            <p class="red"><a href="/order/usercenter#status=5_1" target="_blank">' + c.uncomment + '</a></p>\n          </div>\n          <div class="redp">\n            鎴戠殑绾㈠寘浣欓<a href="/Mkacc/userMkaccInfo" target="_blank">&yen;' + n.userBalance + "</a>\n          </div>\n        </div>\n      </div>\n    "), a.find(".mod-userbox-mid").html('\n      <img class="qrcode" src="//p.qpic.cn/zc_pic/0/ce3a886c6cf0e3028fdb232056283f4514811263160398/0">\n      <div class="tip">\n        <p>鍏虫敞寰俊鍏紬鍙�</p>\n        <p>鎺屾彙璁㈠崟瀹炴椂鐘舵€�</p>\n      </div>\n    '), a.find(".mod-userbox-btm").html('\n      <i class="ico-shang"></i>鍔犲叆骞冲彴鎴愪负鏈嶅姟鍟�<a target="_blank" href="/seller/register" _stat_click_id="5_05">绔嬪嵆鍏ラ┗&nbsp;&gt;</a>\n    ')
                    }
                }, {
                    key: "renderPopularServ", value: function (t) {
                        var n = o["default"].tmpl(l.popularServTpl, {
                            frequentlyCate: t,
                            clearProtocol: o["default"].clearProtocol
                        });
                        e(".jmod-popular-serv").html(n)
                    }
                }, {
                    key: "renderHongbao", value: function (t) {
                        var n = t.news,
                            a = o["default"].tmpl(s.hongbaoTpl, {news: n, clearProtocol: o["default"].clearProtocol});
                        e(".jmod-hongbao").html(a)
                    }
                }, {
                    key: "renderHongbaoRecom", value: function (t) {
                        var n = o["default"].tmpl(s.hongbaoRecomTpl, {recom: t});
                        e(".jmod-hongbao-recom").html(n)
                    }
                }, {
                    key: "renderHongbaoHot", value: function (t) {
                        var n = o["default"].tmpl(s.hongbaoHotTpl, {hot: t, clearProtocol: o["default"].clearProtocol});
                        e(".jmod-hongbao-hot").html(n)
                    }
                }, {
                    key: "renderTencent", value: function (t) {
                        var n = o["default"].tmpl(d.tencentTpl, {tzone: t, clearProtocol: o["default"].clearProtocol});
                        e(".jmod-tencent").html(n)
                    }
                }, {
                    key: "renderHotCorps", value: function (t) {
                        var n = o["default"].tmpl(f.hotCorpsTpl, {
                            hotCorps: t,
                            clearProtocol: o["default"].clearProtocol
                        });
                        e(".jmod-hot-provider").html(n)
                    }
                }, {
                    key: "bindLogin", value: function () {
                        e(".jmod-index-login").on("click", function (e) {
                            m["default"].showLoginDialog({needRefresh: !0})
                        })
                    }
                }, {
                    key: "bindTencent", value: function () {
                        o["default"].delayHover(e(".jmod-tencent .jmod-tencent-tab"), function (t) {
                            var n = e(t.currentTarget);
                            e(".jmod-tencent .jmod-tencent-tab").removeClass("active"), n.addClass("active");
                            var a = e(".jmod-tencent-tab").index(n);
                            e(".jmod-tencent-content").hide(), e(e(".jmod-tencent-content").get(a)).show()
                        }, 150, e.noop, 0)
                    }
                }]), t
            }();
        t["default"] = _
    }).call(t, n(1))
}, function (e, t) {
    e.exports = _cfCommon.utils
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.hongbaoTpl = '\n  <div class="layout">\n    <div class="mod-boxhd"><h3 class="mod-boxhd-tit">绾㈠寘鐗规儬</h3>\n    <%if(news.title){%>\n      <a href="<%=clearProtocol(news.url)%>" class="mod-boxhd-more" target="_blank" _stat_click_id="6_01"><span class="tips"><%=news.title%>&nbsp;</span>绔嬪嵆鏌ョ湅&nbsp;&gt;</a></div>\n    <%}%>\n    <div class="clearfix">\n      <div class="panel selection">\n        <h5 class="panel-hd">绮鹃€夋帹鑽�</h5>\n        <div class="panel-bd jmod-hongbao-recom">\n        </div>\n      </div>\n      <div class="panel hot">\n        <h5 class="panel-hd">鐑攢鏈嶅姟</h5>\n        <div class="panel-bd jmod-hongbao-hot">\n        </div>\n      </div>\n    </div>\n  </div>\n', t.hongbaoRecomTpl = '\n  <% for(var i = 0; i < recom.length; i++){var item = recom[i];%>\n    <div class="prd <%if(i == 0){%>prd-main<%}else if(i == 2 || i == 4 || i == 7){%>mr0<%}%>">\n      <a <%if(item.csStatus == 1){%>href="/cmdty/detail?csId=<%=item.id%>" target="_blank"<%}else{%>href="javascript:;"<%}%> _stat_click_id="6_1<%=i%>"><h6 title="<%=item.csName%>"><%=item.csName%><%if(item.label){%><span class="tag-discount"><%=item.label%></span><%}%></h6></a>\n      <p class="des" title="<%=item.desc%>"><%=item.desc%></p>\n      <%if(item.hasHB){%>\n        <p class="price"><a href="/cmdty/detail?csId=<%=item.id%>" target="_blank" _stat_click_id="6_1<%=i%>">绾㈠寘浠�&yen;<%=item.stock.realPrice%><%if(item.stock.totalCnt > 1){%><small>璧�</small><%}%></a></p>\n      <%}else{%>\n        <p class="price"><a href="/cmdty/detail?csId=<%=item.id%>" target="_blank" _stat_click_id="6_1<%=i%>">浠锋牸&yen;<%=item.csPrice%><%if(item.skuCnt > 1){%><small>璧�</small><%}%></a></p>\n      <%}%>\n      <%if(item.csStatus == 1){%>\n        <a target="_blank" href="/cmdty/detail?csId=<%=item.id%>" class="btn">绔嬪嵆璐拱</a>\n      <%}else{%>\n        <a href="javascript:;" class="btn">宸蹭笅鏋�</a>\n      <%}%>\n    </div>\n  <%}%>\n', t.hongbaoHotTpl = '\n  <%for (var i = 0; i < hot.length; i++) {var item = hot[i];%>\n    <div class="row row-<%=(i+1)%>">\n      <i class="ico" style="background-image:url(\'<%=clearProtocol(item.icon)%>\');"></i>\n      <h6><a href="/cmdty/detail?csId=<%=item.id%>" target="_blank" _stat_click_id="6_2<%=i%>" title="<%=item.csName%>"><%=item.csName%></a></h6>\n      <%if(item.hasHB){%>\n        <p><a href="/cmdty/detail?csId=<%=item.id%>" target="_blank" _stat_click_id="6_2<%=i%>"><span class="price">绾㈠寘浠�&yen;<%=item.stock.realPrice%><%if(item.stock.totalCnt > 1){%>璧�<%}%></span></a><span>閿€閲�&nbsp;<%=item.csPayCount%></span></p>\n      <%}else{%>\n        <p><a href="/cmdty/detail?csId=<%=item.id%>" target="_blank" _stat_click_id="6_2<%=i%>"><span class="price">浠锋牸&yen;<%=item.csPrice%><%if(item.skuCnt > 1){%>璧�<%}%></span></a><span>閿€閲�&nbsp;<%=item.csPayCount%></span></p>\n      <%}%>\n    </div>\n  <%}%>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.popularServTpl = '\n  <div class="layout">\n    <div class="mod-boxhd"><h3 class="mod-boxhd-tit">甯哥敤鏈嶅姟</h3></div>\n    <div class="clearfix">\n      <%for(var i = 0; i < frequentlyCate.length; i++){var cardItem = frequentlyCate[i];%>\n        <div class="card card-<%=(i+1)%>">\n          <div class="hd">\n            <h3><%=cardItem.name%></h3>\n          </div>\n          <%for(var j = 0, len = cardItem.cateInfo.length; j < len; j++){var cateItem = cardItem.cateInfo[j];%>\n            <%if(j == 0){%>\n              <div class="prd-main">\n                <a href="<%=clearProtocol(cateItem.url)%>" target="_blank" _stat_click_id="8_<%=i%><%=j%>"><p class="tit" title="<%=cateItem.name%>"><%=cateItem.name%><%if(cateItem.label){%><span class="tag-discount"><%=cateItem.label%></span><%}%></p></a>\n                <p class="des" title="<%=cateItem.desc%>"><%=cateItem.desc%></p>\n                <p class="price"><a href="<%=clearProtocol(cateItem.url)%>" target="_blank" _stat_click_id="8_<%=i%><%=j%>">&yen;<%=(cateItem.price / 100)%><%if(cateItem.hasStart){%><small>璧�</small><%}%></a></p>\n                <a href="<%=clearProtocol(cateItem.url)%>" target="_blank" class="btn" _stat_click_id="8_<%=i%><%=j%>">绔嬪嵆鏌ョ湅</a>\n              </div>\n            <%}else{%>\n              <%if(j == 1){%>\n                <div class="prd-list">\n              <%}%>\n\n              <%if(len < 5){%>\n                <div class="prd row">\n                  <a href="<%=clearProtocol(cateItem.url)%>" target="_blank" class="serv-name" _stat_click_id="8_<%=i%><%=j%>" title="<%=cateItem.name%>"><%=cateItem.name%></a>\n                  <span class="des" title="<%=cateItem.desc%>"><%=cateItem.desc%></span>\n                </div>\n              <%}else{%>\n                <%if(j == 1 || j == 3){%>\n                  <div class="prd bdr">\n                    <a href="<%=clearProtocol(cateItem.url)%>" target="_blank" class="serv-name" _stat_click_id="8_<%=i%><%=j%>" title="<%=cateItem.name%>"><%=cateItem.name%></a>\n                    <p class="des" title="<%=cateItem.desc%>"><%=cateItem.desc%></p>\n                  </div>\n                <%}%>\n                <%if(j == 2 || j == 4){%>\n                  <div class="prd">\n                    <a href="<%=clearProtocol(cateItem.url)%>" target="_blank" class="serv-name" _stat_click_id="8_<%=i%><%=j%>" title="<%=cateItem.name%>"><%=cateItem.name%></a>\n                    <p class="des" title="<%=cateItem.desc%>"><%=cateItem.desc%></p>\n                  </div>\n                <%}%>\n              <%}%>\n\n              <%if(j == len - 1){%>\n                </div>\n              <%}%>\n            <%}%>\n          <%}%>\n        </div>\n      <%}%>\n    </div>\n  </div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.tencentTpl = '\n  <div class="layout">\n    <div class="mod-boxhd"><h3 class="mod-boxhd-tit">鑵捐鏈嶅姟</h3><a href="/TxZone" class="mod-boxhd-more" target="_blank">鏇村鏈嶅姟&nbsp;&gt;</a></div>\n    <div class="mod-boxbd clearfix">\n      <div class="tab">\n        <%for(var i = 0; i < tzone.length; i++){var item = tzone[i];%>\n          <div class="jmod-tencent-tab row <%if(i == 0){%>active<%}%>"><a href="javascript:void(0);"><%=item.name%></a><i></i></div>\n        <%}%>\n      </div>\n      <%for(var i = 0; i < tzone.length; i++){var item = tzone[i];%>\n        <div class="tab-cont jmod-tencent-content" <%if(i != 0){%>style="display:none;"<%}%>>\n          <%for(var j = 0; j < item.cmdtyInfo.length; j++){var csItem = item.cmdtyInfo[j];%>\n            <div class="col">\n\n              <%if(csItem.url){%>\n                <a href="<%=clearProtocol(csItem.url)%>" target="_blank" _stat_click_id="9_0<%=i%><%=j%>">\n                  <div class="hd" style="background-color:<%=csItem.color%>;"><img class="logo" src="<%=clearProtocol(csItem.icon)%>"></div>\n                </a>\n              <%}else{%>\n                <div class="hd" style="background-color:<%=csItem.color%>;"><img class="logo" src="<%=clearProtocol(csItem.icon)%>"></div>\n              <%}%>\n\n              <div class="bd">\n                <div class="info">\n                  <%if(csItem.url){%>\n                    <h5 title="<%=csItem.title%>"><a href="<%=clearProtocol(csItem.url)%>" target="_blank" _stat_click_id="9_0<%=i%><%=j%>"><%=csItem.title%></a></h5>\n                  <%}else{%>\n                    <h5 title="<%=csItem.title%>"><%=csItem.title%></h5>\n                  <%}%>\n                  <p title="<%=csItem.desc%>"><%=csItem.desc%></p>\n                </div>\n\n                <div class="sales">\n                  <%if(csItem.id){%>\n                    <h6>鐑攢鏈嶅姟</h6>\n                    <p><span><a href="/cmdty/detail?csId=<%=csItem.csId%>" target="_blank" _stat_click_id="9_1<%=i%><%=j%>" title="<%=csItem.csName%>"><%=csItem.csName%></a></span><em><a href="/cmdty/detail?csId=<%=csItem.csId%>" target="_blank" _stat_click_id="9_1<%=i%><%=j%>">&yen;<%=(csItem.minPrice)%></a></em></p>\n                  <%}else{%>\n                    <h6><%=csItem.label%></h6>\n                    <p title="<%=csItem.content%>"><span style="color:#808080;width:auto;"><%=csItem.content%></span></p>\n                  <%}%>\n                </div>\n\n              </div>\n            </div>\n          <%}%>\n        </div>\n      <%}%>\n    </div>\n  </div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.hotCorpsTpl = '\n  <div class="layout clearfix">\n    <div class="mod-boxhd"><h3 class="mod-boxhd-tit">鐑棬鏈嶅姟鍟�</h3></div>\n    <div class="mod-boxbd clearfix">\n      <%for(var i = 0; i < hotCorps.length; i++){var item = hotCorps[i];%>\n        <div class="card <%if(i % 4 == 0){%>ml0<%}%>">\n          <div class="top">\n            <a href="/seller/corpinfo?c_id=<%=item.id%>" target="_blank" _stat_click_id="7_1<%=i%>"><img src="<%=clearProtocol(item.cLogo)%>" class="logo"></a>\n            <h5 title="<%=item.cName%>"><a href="/seller/corpinfo?c_id=<%=item.id%>" target="_blank" _stat_click_id="7_1<%=i%>"><%=item.cName%></a><a class="lv" href="/scenter/growth" target="_blank">Lv<%=item.cLevel%></a></h5>\n            <p>璐ㄩ噺<%if(item.cQualityScore > 0){%><em><%=item.cQualityScore%></em><%}else{%><span>鏃�</span><%}%>閫熷害<%if(item.cSpeedScore > 0){%><em><%=item.cSpeedScore%></em><%}else{%><span>鏃�</span><%}%>鎬佸害<%if(item.cAttitudeScore > 0){%><em><%=item.cAttitudeScore%></em><%}else{%><span>鏃�</span><%}%></p>\n            <span class="cate-tag"><%=item.label%></span>\n          </div>\n          <div class="btm">\n            <p class="des" title="<%=item.slogan%>">鈥�<%=item.slogan%>鈥�</p>\n            <a target="_blank" href="/seller/corpinfo?c_id=<%=item.id%>" class="btn" class="btn" _stat_click_id="7_1<%=i%>">杩涘叆搴楅摵</a>\n          </div>\n        </div>\n      <%}%>\n    </div>\n  </div>\n'
}, function (e, t) {
    e.exports = _cfCommon.login
}, function (e, t) {
    e.exports = _cfUI.poptips
}, function (e, t) {
    e.exports = _cfUI.slider
}, function (e, t) {
    e.exports = _cfCommon.timeStat
}]);
