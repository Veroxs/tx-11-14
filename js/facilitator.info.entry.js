!function (e) {
    function a(s) {
        if (i[s]) return i[s].exports;
        var n = i[s] = {exports: {}, id: s, loaded: !1};
        return e[s].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
    }

    var i = {};
    return a.m = e, a.c = i, a.p = "", a(0)
}([function (e, a, i) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var n = i(1), t = s(n), c = i(6), l = s(c), o = i(28), d = s(o), r = i(29), p = new t["default"],
        u = new l["default"], v = new d["default"]({registerModel: p, registerView: u});
    v.init(), (0, r.initReport)(5)
}, function (e, a, i) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function n(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e) {
        var a = l({}, e);
        a.c_registered_capital = parseInt(a.c_registered_capital, 10) || "", a.c_mobile = parseInt(a.c_mobile, 10) || "", a.c_default_area = a.c_default_area || "";
        var i = a.c_service_time || "$";
        a.c_service_time = [];
        for (var s = i.split("$"), n = 0; n < s.length; n++) {
            var t = s[n].split("|");
            a.c_service_time.push({
                isEnable: t[0] || 1,
                weekStart: t[1] || (0 === n ? "周一" : "周六"),
                weekEnd: t[2] || (0 === n ? "周五" : "周日"),
                timeStart: t[3] || "09:30",
                timeEnd: t[4] || "18:00"
            })
        }
        return a
    }

    function c(e) {
        var a = {};
        for (var i in e) {
            a[i] = e[i].name;
            for (var s in e[i].city) a[s] = e[i].city[s]
        }
        return a[999999] = "全国", a
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var l = Object.assign || function (e) {
        for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a];
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    }, o = function () {
        function e(e, a) {
            for (var i = 0; i < a.length; i++) {
                var s = a[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }

        return function (a, i, s) {
            return i && e(a.prototype, i), s && e(a, s), a
        }
    }(), d = i(2), r = s(d), p = i(3), u = i(4), v = s(u), f = i(5), b = s(f), h = "/seller/saveaudit", _ = {
        corpInfo: t(G_DATA),
        addressIndex: c(r["default"]),
        businessType: p.BUSINESS_TYPE,
        teamScale: p.TEAM_SCALE,
        weekEnums: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        locationData: r["default"]
    }, m = !1, y = function () {
        function e() {
            n(this, e)
        }

        return o(e, [{
            key: "getStore", value: function () {
                return _
            }
        }, {
            key: "submitForm", value: function (e, a) {
                m || (m = !0, b["default"].toggleLoading(!0), v["default"].request({
                    url: h,
                    type: "POST",
                    data: e,
                    needLogin: !0,
                    needRefresh: !1,
                    success: function (e) {
                        m = !1, b["default"].toggleLoading(!1), 0 === e.ret ? a() : b["default"].showToast("fail", e.msg || "网络错误请稍后再试。")
                    },
                    error: function () {
                        m = !1, b["default"].toggleLoading(!1)
                    }
                }))
            }
        }]), e
    }();
    a["default"] = y
}, function (e, a) {
    e.exports = _cfCommon.locationData
}, function (e, a) {
    e.exports = _cfCommon.constants
}, function (e, a) {
    e.exports = _cfCommon.network
}, function (e, a) {
    e.exports = _cfUI.toast
}, function (e, a, i) {
    (function (e) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function n(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }

        function t(e) {
            if (!e) return !1;
            var a = (new Date).toArray(), i = e.split("-"), s = l(a, 3), n = s[0], t = s[1], c = s[2], o = l(i, 3),
                d = o[0], r = o[1], p = o[2];
            return parseInt(d, 10) > parseInt(n, 10) || (parseInt(d, 10) === parseInt(n, 10) && parseInt(r, 10) > parseInt(t, 10) || parseInt(d, 10) === parseInt(n, 10) && parseInt(r, 10) === parseInt(t, 10) && parseInt(p, 10) > parseInt(c, 10))
        }

        function c() {
            var a = e(".ui-date-input input");
            if (t(a.val())) {
                a.closest(".mod-form-col").find(".input-tips.err").text("大于当前时间").show();
                var i = a.offset();
                return (0, d.isBoxAtViewPort)(a) || window.scrollTo(0, i.top - 100), !0
            }
            return !1
        }

        Object.defineProperty(a, "__esModule", {value: !0});
        var l = function () {
                function e(e, a) {
                    var i = [], s = !0, n = !1, t = void 0;
                    try {
                        for (var c, l = e[Symbol.iterator](); !(s = (c = l.next()).done) && (i.push(c.value), !a || i.length !== a); s = !0) ;
                    } catch (o) {
                        n = !0, t = o
                    } finally {
                        try {
                            !s && l["return"] && l["return"]()
                        } finally {
                            if (n) throw t
                        }
                    }
                    return i
                }

                return function (a, i) {
                    if (Array.isArray(a)) return a;
                    if (Symbol.iterator in Object(a)) return e(a, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(), o = function () {
                function e(e, a) {
                    for (var i = 0; i < a.length; i++) {
                        var s = a[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                return function (a, i, s) {
                    return i && e(a.prototype, i), s && e(a, s), a
                }
            }(), d = i(8), r = i(9), p = s(r), u = i(10), v = s(u), f = i(11), b = s(f), h = i(12), _ = s(h), m = i(5),
            y = s(m), x = i(13), k = s(x), g = i(14), w = s(g), j = i(15), I = s(j), D = i(16), T = s(D), C = i(17),
            S = s(C), P = i(18), E = i(19), M = i(20), q = i(21), A = i(22), L = i(23), V = i(24), F = i(25), U = i(26),
            O = i(27), N = function () {
                function a() {
                    n(this, a), this.addrLayer = new T["default"]
                }

                return o(a, [{
                    key: "renderTips", value: function (a) {
                        var i = "\n      <%if(corpInfo.c_profile_status == " + U.STATE.CHECK_FAILED + '){ var hasMsg = corpInfo.c_audit_msg && corpInfo.c_audit_msg.length > 0;%>\n        <div class="mod-tips mt">\n          <p>您的入驻申请未能通过审核<%if(hasMsg){%>，原因是：<%}%><%if(hasMsg){%><%for (var i = 0; i < corpInfo.c_audit_msg.length; i++){%><%=corpInfo.c_audit_msg[i]%><%}}%></p>\n          <p>请重新修改后提交</p>\n        </div>\n      <%}else if(corpInfo.c_profile_status == ' + U.STATE.CHECK_SUCCESS + '){%>\n        <div id="closeTips" class="mod-tips mt hidden">\n          <span class="close"></span>\n          <p>您的入驻申请已通过审核</p>\n        </div>\n      <%}else if(corpInfo.c_profile_status == ' + U.STATE.OFF_LINE + '){%>\n        <div class="mod-tips mt">\n          <p>已下线</p>\n        </div>\n      <%}%>\n    ',
                            s = (0, d.tmpl)(i, {corpInfo: a});
                        e(".jmod-tips").html(s);
                        var n = e("#closeTips");
                        "hide" !== localStorage["zcServiceRegSuccessTips" + (0, d.getUin)()] && n.show(), n.find(".close").on("click", function () {
                            n.hide(), localStorage["zcServiceRegSuccessTips" + (0, d.getUin)()] = "hide"
                        })
                    }
                }, {
                    key: "renderBasicInfo", value: function (a) {
                        var i = a.corpInfo, s = a.teamScale, n = a.locationData, t = a.businessType,
                            c = (0, d.tmpl)(P.basicInfoTpl, {
                                corpInfo: i,
                                teamScale: s,
                                businessType: t,
                                locationData: n,
                                clearProtocol: d.clearProtocol
                            });
                        e(".jmod-basic-info").html(c);
                        var l = new v["default"];
                        e(".jmod_select_province").on("change", function (a) {
                            var i = '<option value="">请选择城市</option>', s = e(a.currentTarget).val();
                            if (s) {
                                for (var t in n[s].city) i += '<option value="' + t + '">' + n[s].city[t] + "</option>";
                                e("select.jmod_select_city").html(i), e("select.jmod_select_city").removeAttr("disabled")
                            } else e("select.jmod_select_city").html(i), e("select.jmod_select_city").prop("disabled", !0);
                            e("select.jmod_select_city").data("select", null), e("div.jmod_select_city").remove(), l.init(e("select.jmod_select_city"))
                        }), e("#c_website").on("focusout", function (a) {
                            var i = e(a.currentTarget), s = i.val().replace(/^\s+|\s+$/g, "");
                            "http://" === s && i.val("")
                        }), e("#c_website").focus(function (a) {
                            var i = e(a.currentTarget), s = i.val().replace(/^\s+|\s+$/g, "");
                            if ("" === s) {
                                i.val("http://"), s = i.val();
                                var n = s.length, t = i;
                                if (t[0].setSelectionRange) t[0].setSelectionRange(n, n); else {
                                    var c = t[0].createTextRange();
                                    c.collapse(!0), c.moveStart("character", n), c.moveEnd("character", n), c.select()
                                }
                            }
                        })
                    }
                }, {
                    key: "renderRegisterInfo", value: function (a) {
                        var i = (0, d.tmpl)(E.registerInfoTpl, {corpInfo: a, clearProtocol: d.clearProtocol});
                        e(".jmod-register-info").html(i), e(".ui-date-input input").each(function (i, s) {
                            new S["default"](e(s), {
                                onHide: function (e) {
                                    var a = e, i = a.val();
                                    t(i) ? a.closest(".mod-form-col").find(".input-tips.err").text("大于当前时间").show() : a.closest(".mod-form-col").find(".input-tips.err").hide()
                                }
                            }), a.c_establish_time || e(s).val("")
                        })
                    }
                }, {
                    key: "renderServiceInfo", value: function (a) {
                        var i = this, s = a.corpInfo, n = a.weekEnums, t = a.addressIndex,
                            c = (0, d.tmpl)(M.serviceInfoTpl, {corpInfo: s, weekEnums: n});
                        e(".jmod-service-info").html(c), (0, F.addContactInfos)(s.c_contact, {
                            label: "客服电话",
                            placeholder: "请填写业务联系电话（客服及对外联系方式）",
                            selector: ".jmod_contact_phone"
                        }), (0, F.addContactInfos)(s.c_before_qq, {
                            label: "售前QQ",
                            placeholder: "用于售前用户业务咨询",
                            selector: ".jmod_before_qq"
                        }), (0, F.addContactInfos)(s.c_after_qq, {
                            label: "售后QQ",
                            placeholder: "用于售后业务沟通及服务",
                            selector: ".jmod_after_qq"
                        }), (0, F.bindContactEvents)(), this.addrLayer.init({
                            onSaveClick: function (a, s) {
                                var n = e(".jmod_default_service_area"), t = a.join(",");
                                a.length > 0 ? (e(".jmod_default_service_area").closest(".mod-form-col").find(".input-tips.err").hide(), n.find("span").attr("_address_ids", t), n.find("span").text(s.join("、").replace(/\(\d+\)/g, "")), n.find("a").text("编辑")) : (n.find("span").attr("_address_ids", ""), n.find("span").text(""), n.find("a").text("+添加服务地区")), e(".jmod_default_area_input").val(t), i.addrLayer.hide()
                            }, onCancelClick: function () {
                                i.addrLayer.hide()
                            }
                        }), e(".jmod_select_address").on("click", function (e) {
                            i.addrLayer.isShow() ? i.addrLayer.hide() : i.addrLayer.show(e.currentTarget)
                        });
                        var l = s.c_default_area.split(","), o = [];
                        if (s.c_default_area && l.length > 0) {
                            var r = e(".jmod_default_service_area");
                            for (var p in l) l.hasOwnProperty(p) && o.push(t[l[p]]);
                            r.find("span").attr("_address_ids", s.c_default_area), r.find("span").text(o.join("、").replace(/\(\d+\)/g, "")), r.find("a").text("编辑")
                        }
                        e('input[name="c_service_time"]').each(function (a, i) {
                            var s = e(i);
                            s.prop("checked") ? s.parent(".ui-checkbox").prevAll("select").removeProp("disabled") : s.parent(".ui-checkbox").prevAll("select").prop("disabled", "disabled")
                        }), e('input[name="c_service_time"]').on("change", function (a) {
                            a.stopPropagation();
                            var i = e(a.currentTarget);
                            i.prop("checked") ? i.parent(".ui-checkbox").prevAll("select").removeProp("disabled") : i.parent(".ui-checkbox").prevAll("select").prop("disabled", "disabled")
                        })
                    }
                }, {
                    key: "renderContactInfo", value: function (a) {
                        var i = (0, d.tmpl)(q.contactInfoTpl, {corpInfo: a});
                        e(".jmod-contact-info").html(i)
                    }
                }, {
                    key: "renderGuardInfo", value: function (a) {
                        var i = (0, d.tmpl)(A.guardInfoTpl, {corpInfo: a});
                        e(".jmod-guard-info").html(i)
                    }
                }, {
                    key: "renderAgreeProtocol", value: function (a) {
                        var i = '\n      <div class="layout">\n        <div class="item">\n          <div class="ui-checkbox">\n            <input type="checkbox" id="agree" name="agree" <%if(corpInfo.c_profile_status != ' + U.STATE.DRAFT + '){%>checked<%}%>>\n            <label for="agree" class="ui-checkbox-rect <%if(corpInfo.c_profile_status != ' + U.STATE.DRAFT + '){%>checked<%}%>"></label><label for="agree" class="ui-checkbox-text">同意<a href="javascript:void(0)" id="show-protocol">《2017年众创空间企业服务平台商户入驻协议》</a></label>\n          </div>\n        </div>\n      </div>\n      <div class="layout">\n        <div class="item">\n          <div class="ui-checkbox">\n            <input type="checkbox" id="agreeTenpay" name="agreeTenpay" <%if(corpInfo.c_profile_status != ' + U.STATE.DRAFT + '){%>checked<%}%>>\n            <label for="agreeTenpay" class="ui-checkbox-rect <%if(corpInfo.c_profile_status != ' + U.STATE.DRAFT + '){%>checked<%}%>"></label><label for="agreeTenpay" class="ui-checkbox-text">同意<a href="javascript:void(0)" id="show-tenpay-protocol">《财付通服务协议》</a></label>\n          </div>\n        </div>\n      </div>\n    ',
                            s = (0, d.tmpl)(i, {corpInfo: a});
                        e(".jmod-agree-protocol").html(s);
                        var n = new I["default"]({
                            tit: "2017年众创空间企业服务平台商户入驻协议",
                            cont: L.protocolTpl,
                            btnOK: {
                                text: "确定", theme: "suc", callback: function () {
                                    n.hide()
                                }
                            },
                            btnNo: null
                        }), t = new I["default"]({
                            tit: "财付通服务协议",
                            cont: V.tenpayProtocolTpl,
                            btnOK: {
                                text: "确定", theme: "suc", callback: function () {
                                    t.hide()
                                }
                            },
                            btnNo: null
                        });
                        e("#show-protocol").on("click", function (e) {
                            return e.stopPropagation(), n.show(), !1
                        }), e("#show-tenpay-protocol").on("click", function (e) {
                            return e.stopPropagation(), t.show(), !1
                        })
                    }
                }, {
                    key: "renderSubmitBar", value: function (a) {
                        var i = '\n      <div class="inner">\n        <div class="layout">\n          <%if(corpInfo.c_profile_status != ' + U.STATE.CHECK_SUCCESS + '){%><a href="javascript:void(0)" id="save" class="ui-button">保存</a><%}%><a href="javascript:void(0)" id="commit" class="ui-button ui-button-primary">提交资料</a>\n        </div>\n      </div>\n    ',
                            s = (0, d.tmpl)(i, {corpInfo: a});
                        e(".jmod-bottom-bar").html(s);
                        var n = function () {
                            var a = e(".footer");
                            if (!(a.length < 1)) {
                                var i = a.offset().top, s = e(window).scrollTop(), n = e(window).height(), t = i - s - n;
                                t <= 0 ? e(".mod-opt").addClass("pos-fixed") : e(".mod-opt").removeClass("pos-fixed")
                            }
                        };
                        e(window).scroll(n), n()
                    }
                }, {
                    key: "initUIComponent", value: function () {
                        var a = new v["default"];
                        a.init(e(".select"));
                        var i = new b["default"];
                        e(".ui-input").each(function (a, s) {
                            i.initcount(e(s))
                        }), e(".ui-textarea").each(function (e, a) {
                            new _["default"](a)
                        });
                        var s = new w["default"];
                        s.init("c_service_security_status"), s.init("agree"), s.init("agreeTenpay"), s.init("c_service_time"), new k["default"]
                    }
                }, {
                    key: "bindFormValidate", value: function () {
                        (0, O.setValidateConfig)({
                            renderTips: function (a, i, s) {
                                a = e(a), "error" === i ? a.closest(".mod-form-col").children(".input-tips.err").text(s).css("display", "inline-block") : a.closest(".mod-form-col").children(".input-tips").hide()
                            }, ignoreHidden: !1, errorClass: ".input-tips.err", colClass: ".mod-form-col"
                        }), (0, O.blurValidate)(".mod-form", {ignoreTypes: ["empty"]})
                    }
                }, {
                    key: "setFileUpload", value: function (a, i) {
                        var s = e(".jmod_" + a);
                        new p["default"]({
                            fileInput: e("#" + a + "_input"),
                            width: 100,
                            height: 100
                        }).addListener({
                            onSelect: function (e) {
                                switch (i) {
                                    case"zcTurnoverPic":
                                        return !(!/\.(pdf|zip)$/i.test(e.name || e.type) || e.size > 5242880) || (y["default"].showToast("fail", "文件请以PDF或ZIP格式提交，且不能大于5M", 2), !1);
                                    default:
                                        return !(!/(\.JPG|\.PNG)$/i.test(e.name || e.type) || e.size > 5242880) || (y["default"].showToast("fail", "文件请以JPG/PNG格式提交，且不能大于5M", 2), !1)
                                }
                            }, onProgress: function () {
                                s.find(".ui-file").hide().end().find(".ui-file.process").show()
                            }, onSubmit: function (e) {
                                return {
                                    url: "zcTurnoverPic" === i ? "/seller/upload_auditreport?responseType=json&g_tk=" + (0, d.getToken)() : "/common/upload",
                                    field: "file",
                                    type: "json",
                                    data: {
                                        type: i,
                                        token: (0, d.getToken)(),
                                        g_tk: (0, d.getToken)(),
                                        uin: (0, d.getUin)(),
                                        skey: (0, d.getCookie)("skey")
                                    }
                                }
                            }, onComplete: function (n) {
                                0 === n.ret ? "zcTurnoverPic" === i ? (n.data.fileUrl = e("<div></div>").html(n.data.fileUrl).text(), s.find(".name").text(n.data.fileName), s.find(".done img").attr("src", (0, d.clearProtocol)(n.data.fileUrl)), s.find(".done a").attr("href", (0, d.clearProtocol)(n.data.fileUrl)), s.find("[name=" + a + "]").val(n.data.fileUrl)) : (s.find(".done img").attr("src", (0, d.clearProtocol)(n.fileUrl)), s.find(".done a").attr("href", (0, d.clearProtocol)(n.fileUrl)), s.find("[name=" + a + "]").val(n.fileUrl)) : y["default"].showToast("fail", n.msg || "上传失败请稍后再试"), s.find(".ui-file").hide().end().find(".ui-file.done").show()
                            }, onError: function () {
                                s.find(".ui-file").hide().end().find(".ui-file.done").show(), y["default"].showToast("fail", "上传失败请稍后再试")
                            }
                        })
                    }
                }, {
                    key: "bindSaveAndCommit", value: function (a) {
                        var i = this;
                        e("#save").on("click", function () {
                            if (!(0, O.validate)(".jmod_all_form", {ignoreTypes: ["empty"]})) return !1;
                            if (c()) return !1;
                            if ((0, F.contactInfoInValid)(!0)) return !1;
                            var e = i.getSubmitData(U.CMD.SAVE);
                            a && a(U.CMD.SAVE, e)
                        }), e("#commit").on("click", function () {
                            if (!(0, O.validate)(".jmod_all_form", {})) return !1;
                            if (c()) return !1;
                            if ((0, F.contactInfoInValid)(!1)) return !1;
                            var s = e("#join_guarantee").siblings(".ui-checkbox-rect").hasClass("checked");
                            if (!s) return y["default"].showToast("fail", "加入服务保障才能提交。"), !1;
                            var n = e("#agree").siblings(".ui-checkbox-rect").hasClass("checked");
                            if (!n) return y["default"].showToast("fail", "请同意《腾讯众创空间创业服务平台合作协议》"), !1;
                            var t = e("#agreeTenpay").siblings(".ui-checkbox-rect").hasClass("checked");
                            if (!t) return y["default"].showToast("fail", "请同意《财付通服务协议》"), !1;
                            var l = i.getSubmitData(U.CMD.AUDIT);
                            a && a(U.CMD.AUDIT, l)
                        })
                    }
                }, {
                    key: "getSubmitData", value: function (a) {
                        var i = (0, O.getFormParam)(".jmod_all_form");
                        i.cmd = a, i.c_contact = (0, F.getContactInfo)(".jmod_contact_phone"), i.c_before_qq = (0, F.getContactInfo)(".jmod_before_qq"), i.c_after_qq = (0, F.getContactInfo)(".jmod_after_qq"), e("#join_guarantee").siblings(".ui-checkbox-rect").hasClass("checked") ? i.c_service_security_status = 1 : i.c_service_security_status = 0, e("#agreeTenpay").siblings(".ui-checkbox-rect").hasClass("checked") ? i.c_tenpay_protocol_status = 1 : i.c_tenpay_protocol_status = 0;
                        var s = "";
                        return e('input[name="c_service_time"]').each(function (a, i) {
                            var n = e(i);
                            s && (s += "$");
                            var t = n.closest(".mod-form-col");
                            s += (n.prop("checked") ? 1 : 0) + "|" + t.find(".jmod_week_start").val() + "|" + t.find(".jmod_week_end").val() + "|" + t.find(".jmod_time_start").val() + "|" + t.find(".jmod_time_end").val()
                        }), i.c_service_time = s, i
                    }
                }]), a
            }();
        a["default"] = N
    }).call(a, i(7))
}, function (e, a) {
    e.exports = jQuery
}, function (e, a) {
    e.exports = _cfCommon.utils
}, function (e, a) {
    e.exports = _cfCommon.fileuploader
}, function (e, a) {
    e.exports = _cfUI.select
}, function (e, a) {
    e.exports = _cfUI.input
}, function (e, a) {
    e.exports = _cfUI.textarea
}, function (e, a) {
    e.exports = _cfUI.placeholder
}, function (e, a) {
    e.exports = _cfUI.checkbox
}, function (e, a) {
    e.exports = _cfUI.dialog
}, function (e, a, i) {
    (function (e) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function n(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }

        function t(a) {
            var i = e('input[name="' + a + '"]');
            i.each(function (a, i) {
                var s = e(i);
                s.prop("checked") ? s.siblings(".ui-checkbox").addClass("checked") : s.siblings(".ui-checkbox").removeClass("checked"), s.on("change", function () {
                    s.prop("checked") ? s.siblings(".ui-checkbox").addClass("checked") : s.siblings(".ui-checkbox").removeClass("checked")
                })
            })
        }

        function c() {
        }

        Object.defineProperty(a, "__esModule", {value: !0});
        var l = function () {
                function e(e, a) {
                    for (var i = 0; i < a.length; i++) {
                        var s = a[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                return function (a, i, s) {
                    return i && e(a.prototype, i), s && e(a, s), a
                }
            }(), o = i(8), d = s(o), r = i(2), p = s(r),
            u = '\n  <div class="address-layer" id="addressLayerTpl" style="display: none;">\n    <div class="row">\n      <div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="4" id="" name="checkbox-test" _address_id="999999">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">全国</label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="3"  name="checkbox-test">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">华东</label>\n          </div>\n        </div>\n      </div><div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="2" _address_id="100122"  name="checkbox-test">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">上海<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n          </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100122"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100122"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n        </div>\n      </div><div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="2" _address_id="100143"  name="checkbox-test">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">江苏<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n          </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100143"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100143"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n        </div>\n      </div><div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="2" _address_id="100171"  name="checkbox-test">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">安徽<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n          </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100171"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100171"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n        </div>\n      </div><div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="2" _address_id="100201"  name="checkbox-test">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">江西<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n          </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100201"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100201"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n        </div>\n      </div><div class="col">\n        <div class="ui-address ui-address-close">\n          <div class="ui-checkbox-wrap">\n            <input type="checkbox" _type="2" _address_id="100158"  name="checkbox-test">\n            <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">浙江<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n          </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100158"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100158"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="3"  name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">华北</label>\n        </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100000" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">北京<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100000"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100000"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100020" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">天津<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100020"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100020"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100053" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">山西<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100053"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100053"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100214" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">山东<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100214"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100214"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100040" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">河北<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100040"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100040"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100066" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">内蒙古<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100066"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100066"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div>\n    </div>\n    <div class="row">\n      <div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="3"  name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">华中</label>\n        </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100272" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">湖南<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100272"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100272"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100253" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">湖北<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100253"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100253"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100233" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">河南<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100233"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100233"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div>\n    </div>\n    <div class="row">\n      <div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="3"  name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">华南</label>\n        </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100288" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">广东<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100288"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100288"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100311" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">广西<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100311"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100311"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100190" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">福建<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100190"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100190"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100327" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">海南<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100327"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100327"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div>\n    </div>\n    <div class="row">\n      <div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="3"  name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">东北</label>\n        </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100107" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">黑龙江<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100107"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100107"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100096" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">吉林<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100096"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100096"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100080" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">辽宁<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100080"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100080"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div>\n    </div>\n    <div class="row">\n      <div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="3"  name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">西北</label>\n        </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100498" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">新疆<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100498"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100498"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100453" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">陕西<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100453"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100453"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100465" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">甘肃<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100465"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100465"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100491" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">宁夏<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100491"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100491"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100481" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">青海<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100481"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100481"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div>\n    </div>\n    <div class="row">\n      <div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="3"  name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">西南</label>\n        </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100350" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">重庆<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100350"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100350"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100426" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">云南<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100426"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100426"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100415" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">贵州<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100415"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100415"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100392" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">四川<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100392"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100392"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div><div class="col"><div class="ui-address ui-address-close">\n        <div class="ui-checkbox-wrap">\n          <input type="checkbox" _type="2" _address_id="100444" name="checkbox-test">\n          <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text">西藏<span class="ui-address-count"></span></label><span class="ui-address-tri jmod_open_address_list"><span class="ui-address-tri-icon"></span></span>\n        </div>\n          <div class="ui-address-layer">\n            <%for(var i in locationData["100444"].city){%>\n              <div class="ui-checkbox-wrap">\n                <input type="checkbox" _type="1" _address_id="<%=i%>"  name="checkbox-test">\n                <label for="" class="ui-checkbox"></label><label for="" class="ui-checkbox-text"><%=locationData["100444"].city[i]%></label>\n              </div>\n            <%}%>\n          </div>\n      </div></div>\n    </div>\n    <div class="btn-wrap">\n      <a href="javascript:;" class="ui-button ui-button-sm ui-button-primary jmod_address_layer_save">确定</a><a href="javascript:;" class="ui-button ui-button-sm jmod_address_layer_close">取消</a>\n    </div>\n  </div>\n',
            v = function () {
                function a() {
                    n(this, a)
                }

                return l(a, [{
                    key: "init", value: function (e) {
                        e = e || {}, this.onSaveClick = e.onSaveClick || c, this.onCancelClick = e.onCancelClick || c, this.render(), this.bindEvents()
                    }
                }, {
                    key: "show", value: function (a) {
                        e("#addressLayerTpl").find(".ui-address-count").text("");
                        var i = e(a).prev().attr("_address_ids");
                        i = i ? i.split(",") : [], ~i.indexOf("999999") ? e('#addressLayerTpl input[type="checkbox"]').prop("checked", !0) : (e('#addressLayerTpl input[type="checkbox"][_type="3"]').prop("checked", !1), e('#addressLayerTpl input[type="checkbox"][_type!="3"]').each(function (a, s) {
                            ~i.indexOf(e(s).attr("_address_id")) ? e(s).prop("checked", !0) : e(s).prop("checked", !1)
                        }), e("#addressLayerTpl").find(".col").each(function (a, i) {
                            e(i).find('input[type="checkbox"][_type="2"]').prop("checked") ? e(i).find('input[type="checkbox"][_type="1"]').prop("checked", !0) : e(i).find('input[type="checkbox"][_type="1"]:checked').length > 0 && e(i).find(".ui-address-count").text("(" + e(i).find('input[type="checkbox"][_type="1"]:checked').length + ")")
                        }), e("#addressLayerTpl").find(".row").each(function (a, i) {
                            e(i).find('input[type="checkbox"][_type="2"]:not(:checked)').length <= 0 && e(i).find('input[type="checkbox"][_type="3"]').prop("checked", !0)
                        })), t("checkbox-test");
                        var s = e("#addressLayerTpl");
                        s.find(".ui-address-open").removeClass("ui-address-open").addClass("ui-address-close"), s.show().follow(e(a).parent(), {
                            position: "4-1",
                            edgeAdjust: !1
                        })
                    }
                }, {
                    key: "isShow", value: function () {
                        return "none" !== e("#addressLayerTpl").css("display")
                    }
                }, {
                    key: "hide", value: function () {
                        e("#addressLayerTpl").hide()
                    }
                }, {
                    key: "render", value: function () {
                        var a = d["default"].tmpl(u, {locationData: p["default"]});
                        e(".mod-addr-layer").html(a)
                    }
                }, {
                    key: "bindEvents", value: function () {
                        var a = this;
                        e(".jmod_address_layer_save").bind("click", function () {
                            var i = [], s = [];
                            e("#addressLayerTpl").find('input[type="checkbox"][_type="4"]').prop("checked") ? (i.push(e("#addressLayerTpl").find('input[type="checkbox"][_type="4"]').attr("_address_id")), s.push(e("#addressLayerTpl").find('input[type="checkbox"][_type="4"]').parent().text())) : e("#addressLayerTpl .row").each(function (a, n) {
                                e(n).find('input[type="checkbox"][_type="3"]:checked').length > 0 ? e(n).find('input[type="checkbox"][_type="2"]').each(function (a, n) {
                                    i.push(e(n).attr("_address_id")), s.push(e(n).parent().text())
                                }) : (e(n).find('input[type="checkbox"][_type="2"]:checked').each(function (a, n) {
                                    i.push(e(n).attr("_address_id")), s.push(e(n).parent().text())
                                }), e(n).find('input[type="checkbox"][_type="2"]:not(:checked)').each(function (a, n) {
                                    e(n).closest(".col").find('input[type="checkbox"][_type="1"]:checked').each(function (a, n) {
                                        i.push(e(n).attr("_address_id")), s.push(e(n).parent().text())
                                    })
                                }))
                            }), a.onSaveClick(i, s)
                        }), e(".jmod_address_layer_close").bind("click", function (e) {
                            a.onCancelClick()
                        });
                        var i = 0;
                        e('#addressLayerTpl input[type="checkbox"]').each(function (a, s) {
                            i++, e(s).attr("id", "address_checkbox" + i), e(s).parent().find("label").attr("for", "address_checkbox" + i)
                        }), e('#addressLayerTpl input[type="checkbox"]').on("change", function (a) {
                            var i = e(a.currentTarget), s = parseInt(i.attr("_type"), 10);
                            i.prop("checked") ? (4 === s ? (e('#addressLayerTpl input[type="checkbox"]').prop("checked", !0), e("#addressLayerTpl").find(".ui-address-count").text("")) : 3 === s ? (i.closest(".row").find('input[type="checkbox"]').prop("checked", !0), i.closest(".row").find(".ui-address-count").text("")) : 2 === s ? (i.closest(".col").find('input[type="checkbox"]').prop("checked", !0), i.closest(".row").find('input[type="checkbox"][_type!="3"]:not(:checked)').length <= 0 && i.closest(".row").find('input[type="checkbox"][_type="3"]').prop("checked", !0), i.closest(".col").find(".ui-address-count").text("")) : 1 === s && (i.closest(".col").find('input[type="checkbox"][_type!="2"]:not(:checked)').length <= 0 ? (i.closest(".col").find('input[type="checkbox"][_type="2"]').prop("checked", !0), i.closest(".col").find(".ui-address-count").text("")) : i.closest(".col").find(".ui-address-count").text("(" + i.closest(".col").find('input[type="checkbox"][_type="1"]:checked').length + ")"), i.closest(".row").find('input[type="checkbox"][_type!="3"]:not(:checked)').length <= 0 && i.closest(".row").find('input[type="checkbox"][_type="3"]').prop("checked", !0)), e('#addressLayerTpl input[type="checkbox"][_type!="4"]:not(:checked)').length <= 0 && e('#addressLayerTpl input[type="checkbox"][_type="4"]').prop("checked", !0)) : (4 === s ? (e('#addressLayerTpl input[type="checkbox"]').prop("checked", !1), e("#addressLayerTpl").find(".ui-address-count").text("")) : 3 === s ? (i.closest(".row").find('input[type="checkbox"]').prop("checked", !1), i.closest(".row").find(".ui-address-count").text("")) : 2 === s ? (i.closest(".col").find('input[type="checkbox"]').prop("checked", !1), i.closest(".row").find('input[type="checkbox"][_type="3"]').prop("checked", !1), i.closest(".col").find(".ui-address-count").text("")) : 1 === s && (i.closest(".col").find('input[type="checkbox"][_type="2"]').prop("checked", !1), i.closest(".row").find('input[type="checkbox"][_type="3"]').prop("checked", !1), i.closest(".col").find('input[type="checkbox"][_type="1"]:checked').length > 0 ? i.closest(".col").find(".ui-address-count").text("(" + i.closest(".col").find('input[type="checkbox"][_type="1"]:checked').length + ")") : i.closest(".col").find(".ui-address-count").text("")), e('#addressLayerTpl input[type="checkbox"][_type="4"]').prop("checked", !1)), t("checkbox-test")
                        }), e(".jmod_open_address_list").bind("click", function (a) {
                            var i = e(a.currentTarget);
                            i.parent().parent().hasClass("ui-address-close") ? (e("#addressLayerTpl").find(".ui-address-open").removeClass("ui-address-open").addClass("ui-address-close"), i.parent().parent().removeClass("ui-address-close").addClass("ui-address-open")) : i.parent().parent().removeClass("ui-address-open").addClass("ui-address-close")
                        })
                    }
                }]), a
            }();
        a["default"] = v
    }).call(a, i(7))
}, function (e, a, i) {
    (function (e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {value: !0});
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, s = "ui-date-", n = "ui-range-", t = "ui-day-", c = "ui-year-", l = "ui-month-", o = "ui-hour-",
            d = "ui-minute-", r = "selected", p = "active", u = /\-|\//g;
        String.prototype.toDate = function () {
            var e, a, i, s = this.split(u);
            return e = 1 * s[0], a = s[1] || 1, i = s[2] || 1, e ? new Date(e, a - 1, i) : new Date
        }, Date.prototype.toArray = function () {
            var e = this.getFullYear(), a = this.getMonth() + 1, i = this.getDate();
            return a < 10 && (a = "0" + a), i < 10 && (i = "0" + i), [e, a, i]
        };
        var v = function (a, i) {
            if (!a || !a.length) return this;
            var n = {
                value: "",
                type: "auto",
                min: "auto",
                max: "auto",
                trigger: ["change"],
                onShow: e.noop,
                onHide: e.noop
            }, t = e.extend({}, n, i || {}), c = null;
            if (a.get(0).type ? (c = a, a = c.parent()) : c = a.find("input"), 0 == c.length) return this;
            c.prop("readonly", !0), c.parent().hover(function () {
                e(this).addClass("hover")
            }, function () {
                e(this).removeClass("hover")
            });
            var l = t.type;
            "auto" == l && (l = c.attr("type") || "date");
            var o = c.attr("id");
            o || (o = l + (Math.random() + "").replace("0.", ""), c.attr("id", o)), e('<label for="' + o + '"></label>').addClass(s + "arrow").insertAfter(c);
            var d = c.val();
            switch ("" == d && t.value && (c.val(t.value), d = t.value), l) {
                case"date":
                case"year":
                case"month":
                    var p = d.toDate(), u = p.toArray();
                    "" == d && ("date" == l ? c.val(u.join("-")) : "year" == l ? c.val(u[0]) : "month" == l && c.val(u.slice(0, 2).join("-"))), this[r] = u;
                    break;
                case"time":
                case"hour":
                case"minute":
                    var v = d.split(":"), f = v[0], b = v[1];
                    "" != d && f < 24 && f > 0 ? (b > 0 && b < 60 && "hour" != l ? 1 == b.length && (b = "0" + b) : b = "00", 1 == f.length && (f = "0" + f)) : (f = "00", b = "00"), c.val([f, b].join(":")), this[r] = [f, b];
                    break;
                case"date-range":
                    var h = new Date, _ = new Date, m = d.split(" ");
                    if ("" != d && 1 == m.length) {
                        var y = m[0].toDate();
                        y.getTime() > h.getTime() ? _ = y : h = y
                    } else h = m[0].toDate(), _ = m[m.length - 1].toDate();
                    c.val(h.toArray().join("-") + " 至 " + _.toArray().join("-")), this[r] = [h.toArray(), _.toArray()]
            }
            var x = this, k = e("<div></div>").addClass(s + "container").delegate("a", "click", function () {
                var a = 0, i = 0, s = 0, n = 0;
                switch (k.attr("data-type")) {
                    case"date":
                        /prev|next/.test(this.className) ? (i = e(this).attr("data-month"), x[r][1] = 1 * i, x[r] = x[r].join("-").toDate().toArray(), x.date(), k.find("." + r).get(0).href && x.val()) : /item/.test(this.className) ? (s = this.innerHTML, /\D/.test(s) ? x[r] = (new Date).toArray() : (s < 10 && (s = "0" + s), x[r][2] = s), x.val(), x.hide()) : "month" == e(this).attr("data-type") && x.month();
                        break;
                    case"range":
                        if (/prev|next/.test(this.className)) {
                            i = 1 * e(this).attr("data-month");
                            var t = x.el.container.data("date") || x[r][0];
                            x.el.container.data("date", new Date(t[0], i - 1, t[2]).toArray()), x.range()
                        } else if (/item/.test(this.className)) {
                            a = e(this).attr("data-year"), i = e(this).attr("data-month"), s = this.innerHTML, i < 10 && (i = "0" + i), s < 10 && (s = "0" + s);
                            var c = x[r];
                            c[0].join() == c[1].join() ? a + i + s > c[0].join("") ? c[1] = [a, i, s] : c[0] = [a, i, s] : c = [[a, i, s], [a, i, s]], x[r] = c, x.range()
                        } else if (/button/.test(this.className)) {
                            var l = e(this).attr("data-type");
                            "ensure" == l ? (x.val(), x._rangeSelected = x[r], x.hide()) : "cancel" == l && (x._rangeSelected && (x[r] = x._rangeSelected), x.hide())
                        }
                        break;
                    case"month":
                        if (a = e(this).attr("data-year")) x[r][0] = 1 * a, x.month(), k.find("." + r).get(0).href && x.val(); else if (/item/.test(this.className)) {
                            var o = e(this).attr("data-value");
                            if (o) x[r][1] = o; else {
                                var d = (new Date).toArray();
                                x[r][0] = d[0], x[r][1] = d[1]
                            }
                            x.val(), "month" == x.type ? x.hide() : x.date()
                        } else "year" == e(this).attr("data-type") && x.year();
                        break;
                    case"year":
                        (a = e(this).attr("data-year")) ? (x[r][0] = 1 * a, x.year(), k.find("." + r).get(0).href && x.val()) : /item/.test(this.className) && ("今年" == this.innerHTML ? x[r][0] = (new Date).getFullYear() : x[r][0] = 1 * this.innerHTML, x.val(), "year" == x.type ? x.hide() : x.month());
                        break;
                    case"minute":
                        (n = e(this).attr("data-hour")) ? (1 == n.length && (n = "0" + n), x[r][0] = n, x.minute(), k.find("." + r).attr("href") && x.val()) : /item/.test(this.className) ? (x[r] = this.innerHTML.split(":"), x.val(), x.hide()) : "hour" == e(this).attr("data-type") && x.hour();
                        break;
                    case"hour":
                        /item/.test(this.className) && (x[r][0] = this.innerHTML.split(":")[0], x.val(), "hour" == x.type ? x.hide() : x.minute())
                }
            });
            return this.el = {}, this.el.container = k, this.el.trigger = a, this.el.input = c, this.type = l, this.max = t.max, this.min = t.min, this.callback = {
                show: t.onShow,
                hide: t.onHide,
                trigger: t.trigger
            }, a.click(e.proxy(function (e) {
                this.display ? this.hide() : this.show(), e.preventDefault()
            }, this)), e(document).mouseup(e.proxy(function (e) {
                var i = e && e.target, s = this.el.container.get(0);
                i && a.get(0) != i && 0 == a.get(0).contains(i) && s != i && 0 == s.contains(i) && this.hide()
            }, this)), this.svg = "", this
        };
        v.prototype.format = function () {
            var e = this.type, a = this.el.input.val();
            if ("" == a) return this;
            switch (e) {
                case"date":
                case"year":
                case"month":
                    var i = a.toDate(), s = i.toArray();
                    this[r] = s;
                    break;
                case"time":
                case"hour":
                case"minute":
                    var n = a.split(":"), t = n[0], c = n[1];
                    2 == n.length && (c > 0 && c < 60 && "hour" != e ? 1 == c.length && (c = "0" + c) : c = "00", 1 == t.length && (t = "0" + t), this.el.input.val([t, c].join(":")), this[r] = [t, c]);
                    break;
                case"date-range":
                    var l = new Date, o = new Date, d = a.split(" ");
                    3 == d.length && (l = d[0].toDate(), o = d[d.length - 1].toDate(), this[r] = [l.toArray(), o.toArray()])
            }
            return this
        }, v.prototype.val = function () {
            var a = this.el.input, i = this[r], s = a.val();
            switch (this.type) {
                case"date":
                    a.val(i.join("-"));
                    break;
                case"month":
                    a.val(i.slice(0, 2).join("-"));
                    break;
                case"year":
                    a.val(i[0]);
                    break;
                case"date-range":
                    a.val(i[0].join("-") + " 至 " + i[1].join("-"));
                    break;
                case"time":
                case"minute":
                    a.val(i.join(":"));
                    break;
                case"hour":
                    a.val(i[0] + ":00")
            }
            return a.val() != s && (e.isArray(this.callback.trigger) ? e.each(this.callback.trigger, function (e, i) {
                a.trigger(i)
            }) : a.trigger(this.callback.trigger)), this
        }, v.prototype._calendar = function (a) {
            var n = "", c = a, l = this.el.input, o = this.type, d = l.attr("min") || this.min,
                p = l.attr("max") || this.max, v = e.map([d, p], function (e, a) {
                    return "string" == typeof e && 1 == /^\d{8}$/.test(e.replace(u, "")) ? e = e.toDate() : "object" == ("undefined" == typeof e ? "undefined" : i(e)) && e.getTime || (e = a ? new Date(9999, 0, 1) : new Date(0, 0, 1)), e
                });
            d = v[0], p = v[1];
            var f = ["日", "一", "二", "三", "四", "五", "六"], b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                h = c.join("-").toDate();
            (c[0] % 4 == 0 && c[0] % 100 != 0 || c[0] % 400 == 0) && (b[1] = 29), n = n + '<div class="' + t + 'x">' + function () {
                var a = "";
                return e.each(f, function (e, i) {
                    a = a + '<span class="' + t + 'item">' + i + "</span>"
                }), a
            }() + "</div>";
            var _ = c.join("-").toDate(), m = 0;
            _.setDate(1), 2 == _.getDate() && _.setDate(0), m = _.getDay();
            var y = _.getMonth() - 1;
            y < 0 && (y = 11);
            var x = 'data-year="' + c[0] + '" data-month="' + (_.getMonth() + 1) + '"';
            return n = n + '<div class="' + s + 'body">' + function () {
                for (var e = "", a = "", i = 0; i < 6; i++) {
                    e = e + '<div class="' + s + 'tr">';
                    for (var n = 0; n < 7; n++) if (a = s + "item col" + n, "date" == o) if (0 == i && n < m) e = e + '<span class="' + a + '">' + (b[y] - m + n + 1) + "</span>"; else {
                        var t = 7 * i + n - m + 1;
                        if (t <= b[_.getMonth()]) {
                            var l = new Date(c[0], _.getMonth(), t);
                            h.getDate() == t && (a = a + " " + r), e = l >= d && l <= p ? e + '<a href="javascript:;" ' + x + ' class="' + a + '">' + t + "</a>" : e + '<span class="' + a + '">' + t + "</span>"
                        } else e = e + '<span class="' + a + '">' + (t - b[_.getMonth()]) + "</span>"
                    } else if ("date-range" == o) if (0 == i && n < m) e = e + '<span class="' + a + '">&nbsp;</span>'; else {
                        var t = 7 * i + n - m + 1;
                        if (t <= b[_.getMonth()]) {
                            var l = new Date(c[0], _.getMonth(), t), u = this[r][0].join("-").toDate(),
                                v = this[r][1].join("-").toDate(), f = l.getTime(), k = u.getTime(), g = v.getTime();
                            f >= k && f <= g && (a = a + " " + r, f == k && (a = a + " " + s + "begin"), f == g && (a = a + " " + s + "end"), 1 == t ? a = a + " " + s + "first" : t == b[_.getMonth()] && (a = a + " " + s + "last")), e = l >= d && l <= p ? e + '<a href="javascript:;" ' + x + ' class="' + a + '">' + t + "</a>" : e + '<span class="' + a + '">' + t + "</span>"
                        } else e = e + '<span class="' + a + '">&nbsp;</span>'
                    }
                    e += "</div>"
                }
                return e
            }.call(this) + "</div>", {monthDay: b, html: n, min: d, max: p}
        }, v.prototype.date = function () {
            var e = this[r], a = (e.join("-").toDate(), e[1] - 1), i = 1 * e[1] + 1, n = this._calendar(e),
                t = '<div class="' + s + 'x">';
            t = t + '<div class="' + s + 'head">';
            var c = new Date(e[0], a - 1, e[2]);
            t = new Date(e[0], a - 1, n.monthDay[c.getMonth()]) >= n.min && c <= n.max ? t + '<a href="javascript:" class="' + s + 'prev" data-month="' + a + '">' + this.svg + "</a>" : t + '<span class="' + s + 'prev">' + this.svg + "</span>";
            var l = new Date(e[0], e[1], e[2]);
            return t = l >= n.min && new Date(e[0], e[1], 1) <= n.max ? t + '<a href="javascript:" class="' + s + 'next" data-month="' + i + '">' + this.svg + "</a>" : t + '<span class="' + s + 'next">' + this.svg + "</span>", t = t + '<a href="javascript:" class="' + s + 'switch" data-type="month">' + e.slice(0, 2).join("-") + "</a>\t      </div>", t += n.html, t = new Date >= n.min && new Date <= n.max ? t + '<a href="javascript:" class="' + s + "item " + s + 'now">今天</a>' : t + '<span class="' + s + "item " + s + 'now">今天</span>', t += "</div>", this.el.container.attr("data-type", "date").html(t), this
        }, v.prototype.range = function () {
            var e = this[r], a = this.el.container.data("date") || e[0];
            this.el.container.data("date", a);
            var i = a[1] - 1, t = 1 * a[1] + 1, c = this._calendar(a), l = '<div class="' + n + 'x">';
            l = l + '<div class="' + s + 'head">\t          <div class="' + s + 'half">';
            var o = new Date(a[0], i - 1, a[2]);
            l = o >= c.min && o <= c.max ? l + '<a href="javascript:" class="' + s + 'prev" data-month="' + i + '">' + this.svg + "</a>" : l + '<span class="' + s + 'prev">' + this.svg + "</span>", l = l + '<span class="' + s + 'switch">' + new Date(a[0], i, a[2]).toArray().slice(0, 2).join("-") + '</span>\t      </div>\t      <div class="' + s + 'half">';
            var d = new Date(a[0], a[1], a[2]), p = new Date(a[0], t, a[2]);
            return l = p >= c.min && p <= c.max ? l + '<a href="javascript:" class="' + s + 'next" data-month="' + t + '">' + this.svg + "</a>" : l + '<span class="' + s + 'next">' + this.svg + "</span>", l = l + '<span class="' + s + 'switch">' + d.toArray().slice(0, 2).join("-") + "</span>\t      </div>", l += "</div>", l = l + '<div class="' + n + 'body"><div class="' + s + 'half">' + c.html + '</div><div class="' + s + 'half">' + this._calendar(d.toArray()).html + "</div></div>", l = l + '<div class="' + n + 'footer"><a href="javascript:;" class="ui_button ui_button_primary" data-type="ensure">确定</a><a href="javascript:;" class="ui_button" data-type="cancel">取消</a></div>', l += "</div>", this.el.container.attr("data-type", "range").html(l), this
        }, v.prototype.month = function () {
            var a = this[r], n = this.el.input, t = n.attr("min") || this.min, c = n.attr("max") || this.max,
                o = e.map([t, c], function (e, a) {
                    return e = "object" == ("undefined" == typeof e ? "undefined" : i(e)) && e.getTime ? e.toArray().slice(0, 2).join("") : "string" == typeof e && 0 == /\D/.test(e.replace(u, "")) ? e.replace(u, "").slice(0, 6) : a ? 999912 : 0
                });
            t = o[0], c = o[1];
            var d = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], p = '<div class="' + l + 'x">',
                v = 1 * a[0];
            p = p + '<div class="' + s + 'head">', p = v - 1 >= Math.floor(t / 100) && v - 1 <= Math.floor(c / 100) ? p + '<a href="javascript:" class="' + s + 'prev" data-year="' + (v - 1) + '">' + this.svg + "</a>" : p + '<span class="' + s + 'prev">' + this.svg + "</span>", p = v + 1 >= Math.floor(t / 100) && v + 1 <= Math.floor(c / 100) ? p + '<a href="javascript:" class="' + s + 'next" data-year="' + (v + 1) + '">' + this.svg + "</a>" : p + '<span class="' + s + 'next">' + this.svg + "</span>", p = p + '<a href="javascript:" class="' + s + 'switch" data-type="year">' + v + "</a>\t      </div>", p = p + '<div class="' + l + 'body">' + function () {
                for (var e = "", i = "", n = "", l = 1; l <= 12; l += 1) n = l < 10 ? "0" + l : l + "", i = s + "item", l == a[1] && (i = i + " " + r), e = v + n >= t && v + n <= c ? e + '<a href="javascript:" class="' + i + '" data-value="' + n + '">' + d[l - 1] + "月</a>" : e + '<span class="' + i + '" data-value="' + n + '">' + d[l - 1] + "月</span>";
                return e
            }() + "</div>";
            var f = (new Date).toArray().slice(0, 2).join("");
            return p = f >= t && f <= c ? p + '<a href="javascript:" class="' + s + "item " + s + 'now">今月</a>' : p + '<span class="' + s + "item " + s + 'now">今月</span>', p += "</div>", this.el.container.attr("data-type", "month").html(p), this
        }, v.prototype.year = function () {
            var e = this[r], a = this.el.input, n = a.attr("min") || this.min, t = a.attr("max") || this.max;
            n = "object" == ("undefined" == typeof n ? "undefined" : i(n)) && n.getFullYear ? n.getFullYear() : "string" == typeof n && 0 == /\D/.test(n.replace(u, "")) ? n.toDate().getFullYear() : 0, t = "object" == ("undefined" == typeof t ? "undefined" : i(t)) && t.getFullYear ? t.getFullYear() : "string" == typeof t && 0 == /\D/.test(t.replace(u, "")) ? t.toDate().getFullYear() : 9999;
            var l = '<div class="' + c + 'x">', o = e[0];
            l = l + '<div class="' + s + 'head">', l = o - 12 >= n && o - 12 <= t ? l + '<a href="javascript:" class="' + s + 'prev" data-year="' + (o - 12) + '">' + this.svg + "</a>" : l + '<span class="' + s + 'prev">' + this.svg + "</span>", l = o + 12 >= n && o + 12 <= t ? l + '<a href="javascript:" class="' + s + 'next" data-year="' + (o + 12) + '">' + this.svg + "</a>" : l + '<span class="' + s + 'next">' + this.svg + "</span>", l = l + '<span class="' + s + 'switch">' + [o - 6, o + 5].join("-") + "</span></div>", l = l + '<div class="' + c + 'body">' + function () {
                for (var e = "", a = "", i = o - 6; i < o + 6; i += 1) a = s + "item", i == o && (a = a + " " + r), e = i >= n && i <= t ? e + '<a href="javascript:" class="' + a + '">' + i + "</a>" : e + '<span class="' + a + '">' + i + "</span>";
                return e
            }() + "</div>";
            var d = (new Date).getFullYear();
            return l = d >= n && d <= t ? l + '<a href="javascript:" class="' + s + "item " + s + 'now">今年</a>' : l + '<span class="' + s + "item " + s + 'now">今年</span>', l += "</div>", l += "</div>", this.el.container.attr("data-type", "year").html(l), this
        }, v.prototype.hour = function () {
            var e = this[r], a = this.el.input, i = 1 * a.attr("step");
            i = "hour" != this.type || !i || i < 1 ? 1 : Math.round(i);
            var n = (a.attr("min") || this.min.toString()).split(":")[0],
                t = (a.attr("max") || this.max.toString()).split(":")[0];
            n = /\D/.test(n) ? 0 : 1 * n, t = /\D/.test(t) ? 24 : 1 * t;
            var c = '<div class="' + o + 'x">';
            return c = c + '<div class="' + o + 'body">' + function () {
                for (var a = "", c = "", l = "", o = 0; o < 24; o += i) c = o + "", 1 == c.length && (c = "0" + c), l = s + "item", c == e[0] && (l = l + " " + r), a = c >= n && c <= t ? a + '<a href="javascript:" class="' + l + '">' + c + ":00</a>" : a + '<span class="' + l + '">' + c + ":00</span>";
                return a
            }() + "</div>", c += "</div>", this.el.container.attr("data-type", "hour").html(c), this
        }, v.prototype.minute = function () {
            var e = this[r], a = this.el.input, i = 1 * a.attr("step") || 5, n = a.attr("min") || this.min + "",
                t = a.attr("max") || this.max + "";
            n = "auto" == n || /\D/.test(n.replace(":", "")) || 2 != n.split(":").length ? 0 : 1 * n.replace(":", ""), t = "auto" == t || /\D/.test(t.replace(":", "")) || 2 != t.split(":").length ? 2359 : 1 * t.replace(":", "");
            var c = '<div class="' + d + 'x">', l = 1 * e[0];
            return c = c + '<div class="' + s + 'head">', c = l <= Math.floor(n / 100) ? c + '<span class="' + s + 'prev">' + this.svg + "</span>" : c + '<a href="javascript:" class="' + s + 'prev" data-hour="' + (l - 1) + '">' + this.svg + "</a>", c = l >= Math.floor(t / 100) ? c + '<span class="' + s + 'next">' + this.svg + "</span>" : c + '<a href="javascript:" class="' + s + 'next" data-hour="' + (l + 1) + '">' + this.svg + "</a>", c = c + '<a href="javascript:" class="' + s + 'switch" data-type="hour">' + e[0] + ":00</a></div>", c = c + '<div class="' + d + 'body">' + function () {
                for (var a = "", c = "", l = "", o = 0; o < 60; o += i) c = o + "", 1 == c.length && (c = "0" + c), l = s + "item", 1 * (e[0] + c) >= n && 1 * (e[0] + c) <= t ? (c == e[1] && (l = l + " " + r), a = a + '<a href="javascript:" class="' + l + '">' + [e[0], c].join(":") + "</a>") : a = a + '<span class="' + l + '">' + [e[0], c].join(":") + "</span>";
                return a
            }() + "</div>", c += "</div>", this.el.container.attr("data-type", "minute").html(c), this
        }, v.prototype.show = function () {
            var a = this.el.container;
            return this.format(), "time" == this.type ? this.minute() : "date-range" == this.type ? (this._rangeSelected || (this._rangeSelected = this[r]), this.range()) : this[this.type] ? this[this.type]() : this.date(), 0 == e.contains(e(document.body), a) && e(document.body).append(a), a.show().follow(this.el.trigger.addClass(p), {position: "4-1"}), e.isFunction(this.callback.show) && this.callback.show.call(this, this.el.input, a), this.display = !0, this
        }, v.prototype.hide = function () {
            return this.el.container.hide(), this.el.trigger.removeClass(p), e.isFunction(this.callback.hide) && this.callback.hide.call(this, this.el.input, this.el.container), this.display = !1, this
        }, e.fn.dateTime = function (a) {
            return e(this).each(function () {
                e(this).data("dateTime", new v(e(this), a))
            })
        }, a["default"] = v
    }).call(a, i(7))
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    var i = '\n  <span class="input-tips err hidden">您的输入有误</span>\n';
    a.basicInfoTpl = '\n  <div class="layout">\n      <div class="mod-form-hd">\n          <h4 class="caption">基础信息</h4>\n      </div>\n      <div class="mod-form-body jmod_all_form">\n        <div class="mod-form-row">\n          <div class="mod-form-tit">\n            <label>公司LOGO<span class="require">*</span></label>\n          </div>\n            <div class="mod-form-cont">\n              <div class="mod-form-col jmod_c_logo">\n\n                <div class="ui-file mr done" <%if(!corpInfo.c_logo){%>style="display:none;"<%}%>>\n                  <img src="<%=clearProtocol(corpInfo.c_logo)%>">\n                  <div class="ui-file-opt">\n                    <ul class="ui-file-btns item2">\n                      <li class="btn origin" title="查看原图"><a href="<%=clearProtocol(corpInfo.c_logo)%>" target="_blank"><i></i><b>查看原图</b></a></li><li class="btn exchange" title="替换"><label\n                  for="c_logo_input"><i></i><b>替换</b></label></li>\n                    </ul>\n                  </div>\n                </div>\n\n                <div class="ui-file mr upload" <%if(corpInfo.c_logo){%>style="display:none;"<%}%>>\n                  <label for="c_logo_input" class="ui-file-add"></label>\n                </div>\n\n                <div class="ui-file mr process" style="display:none;"><span class="ui-file-preload"></span></div>\n                <input type="text" class="hidden" _type="file" name="c_logo" validate="true"  validate_type="empty" validate_tip="请上传公司LOGO" value="<%=corpInfo.c_logo%>">\n                <div class="fileinput-button"><input id="c_logo_input" type="file" name="file" class="ui-file-input"></div>\n                ' + i + '\n\n              </div>\n              <div class="mod-form-col block-el">\n                <p class="more-tips font-sm">支持JPG、PNG格式，文件小于5M，建议尺寸300x300</p>\n              </div>\n            </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>公司全称<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input count">\n                        <input class="default-input-width" name="c_full_name" placeholder="请填写公司全称，例如：腾讯科技（北京）有限公司" validate="true" validate_type="empty|jsLength" maxlength="50" maxlen="50" minlen="1" validate_tip="请填写公司全称|1-50个字" value="<%=corpInfo.c_full_name%>">\n                          <div class="ui-input-bg"></div>\n                          <label class="ui-input-count">\n                              <i><%if(corpInfo.c_full_name){%><%=corpInfo.c_full_name.length%><%}else{%>0<%}%></i>/<i>50</i>\n                          </label>\n                    </div>\n                    ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>公司简称<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input count">\n                        <input class="default-input-width" name="c_name" placeholder="请填写简称或品牌名称，对用户展示时将以此为主" validate="true" validate_type="empty|jsLength" maxlength="10" maxlen="10" minlen="1" validate_tip="请填写公司简称|1-10个字" value="<%=corpInfo.c_name%>">\n                          <div class="ui-input-bg"></div>\n                          <label class="ui-input-count">\n                              <i><%if(corpInfo.c_name){%><%=corpInfo.c_name.length%><%}else{%>0<%}%></i>/<i>10</i>\n                          </label>\n                    </div>\n                    ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>公司简介<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-textarea count default-input-width">\n                          <textarea name="c_brief" rows="4" validate="true" validate_type="empty|jsLength" maxlength="100" maxlen="100" minlen="1" placeholder="请填写公司简介" validate_tip="请填写公司简介|1-100个字"><%=corpInfo.c_brief%></textarea>\n                          <div class="ui-textarea-bg"></div>\n                          <label class="ui-textarea-count">\n                              <i><%if(corpInfo.c_brief){%><%=corpInfo.c_brief.length%><%}else{%>0<%}%></i>/<i>100</i>\n                          </label>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>主营业务类型<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <select name="c_business_type" class="select" validate="true" validate_type="empty" validate_tip="请选择主营业务类型">\n                          <option value="">请选择一个主营业务</option>\n                          <%for(var i in businessType){if(isNaN(i)){continue;}%>\n                              <option value="<%=i%>" <%if(corpInfo.c_business_type == i){%>selected="selected"<%}%>><%=businessType[i]%></option>\n                          <%}%>\n                          <option value="" disabled class="disabled">其他类目暂未开放</option>\n                      </select>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>业务介绍<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-textarea default-input-width count">\n                          <textarea name="c_business_introduce" rows="4" validate="true" validate_type="empty|jsLength" maxlength="100" maxlen="100" minlen="1" placeholder="请填写业务补充介绍，例如：公司主营XXXXXX"validate_tip="请填写业务介绍|1-100个字"><%=corpInfo.c_business_introduce%></textarea>\n                          <div class="ui-textarea-bg"></div>\n                          <label for="textarea2" class="ui-textarea-count">\n                               <i><%if(corpInfo.c_business_introduce){%><%=corpInfo.c_business_introduce.length%><%}else{%>0<%}%></i>/<i>100</i>\n                          </label>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>服务案例<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-textarea default-input-width count">\n                          <textarea name="c_cooperation_case" rows="4" validate="true" validate_type="empty|jsLength" maxlength="100" maxlen="100" minlen="1" placeholder="请填写过往服务案例" validate_tip="请填写服务案例|1-100个字"><%=corpInfo.c_cooperation_case%></textarea>\n                          <div class="ui-textarea-bg"></div>\n                          <label class="ui-textarea-count">\n                                <i><%if(corpInfo.c_cooperation_case){%><%=corpInfo.c_cooperation_case.length%><%}else{%>0<%}%></i>/<i>100</i>\n                          </label>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>公司地址<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <select name="c_province_id" class="select mr jmod_select_province"\n                      validate="true" validate_type="empty" validate_tip="请选择公司地址">\n                          <option value="">请选择省份</option>\n                          <%for(var i in locationData){if(isNaN(i)){continue;}%>\n                              <option value="<%=i%>" <%if(corpInfo.c_province_id == i){%>selected="selected"<%}%>><%=locationData[i].name%></option>\n                          <%}%>\n                      </select><select name="c_city_id" class="select jmod_select_city" validate="true" validate_type="empty" validate_tip="请选择公司地址">\n                          <option value="">请选择城市</option>\n                          <%if(corpInfo.c_province_id){%>\n                              <%for(var i in locationData[corpInfo.c_province_id].city) {%>\n                              <option value="<%=i%>" <%if(corpInfo.c_city_id && i == corpInfo.c_city_id){%>selected="selected"<%}%>><%=locationData[corpInfo.c_province_id].city[i]%></option>\n                              <%}%>\n                          <%}%>\n                      </select>\n                      ' + i + '\n                  </div>\n                  <div class="mod-form-col mt block-el">\n                      <div class="ui-input count">\n                          <input class="default-input-width" maxlength="50" name="c_addr" validate="true" validate_type="empty|jsLength" maxlen="50" minlen="1" validate_tip="请填写详细地址|1-50个字" value="<%=corpInfo.c_addr%>" placeholder="请填写公司详细联系地址">\n                          <div class="ui-input-bg"></div>\n                          <label class="ui-input-count">\n                              <i><%if(corpInfo.c_addr){%><%=corpInfo.c_addr.length%><%}else{%>0<%}%></i>/<i>50</i>\n                          </label>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>人员规模<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <select name="c_team_scale" class="select" validate="true" validate_type="empty" validate_tip="请选择人员规模">\n                          <option value="">请选择人员规模</option>\n                          <%for(var i in teamScale){if(isNaN(i)){continue;}%>\n                              <option value="<%=i%>" <%if(corpInfo.c_team_scale == i){%>selected="selected"<%}%>><%=teamScale[i]%></option>\n                          <%}%>\n                      </select>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>公司网站<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input id="c_website" name="c_website" placeholder="http://" validate="true" validate_type="empty|legal" legal_type="fullUrl" maxlength="50" validate_tip="请填写公司网站|格式错误" value="<%=corpInfo.c_website%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>微信公众号</label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input name="c_weixin_service" placeholder="" validate="true" validate_type="legal" legal_type="wechat" maxlength="20" value="<%=corpInfo.c_weixin_service%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>微博</label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input name="c_weibo" placeholder="" maxlength="50" value="<%=corpInfo.c_weibo%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + "\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n";
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    var i = '\n  <span class="input-tips err hidden">您的输入有误</span>\n';
    a.registerInfoTpl = '\n  <div class="layout">\n      <div class="mod-form-hd">\n          <h4 class="caption">公司注册信息</h4>\n      </div>\n      <div class="mod-form-body jmod_all_form">\n          <div class="mod-form-row">\n              <div class="mod-form-tit">\n                  <label>成立时间<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-date-input">\n                        <input name="c_establish_time" type="date" validate="true" validate_type="empty" validate_tip="请填写注册时间" value="<%=corpInfo.c_establish_time%>">\n                        <label class="ui-date-arrow"></label>\n                      </div>\n                      <span class="input-tips err hidden"><span>大于当前时间</span></span>\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row">\n              <div class="mod-form-tit">\n                  <label>营业执照注册号<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input name="c_licence" placeholder="请填写营业执照注册号或统一社会信用代码" validate="true" validate_type="empty|legal" legal_type="company_licence" maxlength="20" validate_tip="请填写营业执照注册号|请填写营业执照注册号或统一社会信用代码" value="<%=corpInfo.c_licence%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row">\n              <div class="mod-form-tit">\n                  <label>注册资本<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input name="c_registered_capital" placeholder="请填写营业执照上的注册资本" validate="true" validate_type="empty|legal" legal_type="num_positive" maxlength="10" validate_tip="请填注册资本|注册资本为正整数" value="<%=corpInfo.c_registered_capital%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      <span style="display:inline-block;line-height:21px;color:#999999;vertical-align: top;margin: 9px 0 0 4px;font-size:14px;">万元</span>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>税务登记证号<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                 <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input name="c_tax_certificate" placeholder="请填写税务登记证号（三证合一请再次填写）" validate="true" validate_type="empty|legal" legal_type="tax_num" maxlength="20" validate_tip="请填写税务登记证号|格式不正确" value="<%=corpInfo.c_tax_certificate%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>纳税人识别号<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input default-input-width">\n                          <input name="c_taxpayer_id" placeholder="请填写纳税人识别号（三证合一请再次填写）" validate="true" validate_type="empty|legal" legal_type="tax_num" maxlength="20" validate_tip="请填写纳税人识别号|格式不正确" value="<%=corpInfo.c_taxpayer_id%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>营业执照上传<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col jmod_c_license_pic">\n                    <div class="ui-file mr done" <%if(!corpInfo.c_license_pic){%>style="display:none;"<%}%>>\n                      <img src="<%=clearProtocol(corpInfo.c_license_pic)%>">\n                      <div class="ui-file-opt">\n                        <ul class="ui-file-btns item2">\n                          <li class="btn origin" title="查看原图"><a href="<%=clearProtocol(corpInfo.c_license_pic)%>" target="_blank"><i></i><b>查看原图</b></a></li><li class="btn exchange" title="替换"><label for="c_license_pic_input"><i></i><b>替换</b></label></li>\n                        </ul>\n                      </div>\n                    </div>\n\n                    <div class="ui-file mr upload" <%if(corpInfo.c_license_pic){%>style="display:none;"<%}%>>\n                      <label for="c_license_pic_input" class="ui-file-add"></label>\n                    </div>\n\n                    <div class="ui-file mr process" style="display:none;"><span class="ui-file-preload"></span></div>\n                    <input type="text" class="hidden" _type="file" name="c_license_pic" validate="true"  validate_type="empty" validate_tip="请上传营业执照" value="<%=corpInfo.c_license_pic%>">\n                    <div class="fileinput-button"><input id="c_license_pic_input" type="file" name="file" class="ui-file-input"></div>\n                    ' + i + '\n\n                  </div>\n                  <div class="mod-form-col block-el">\n                      <p class="more-tips font-sm">支持JPG、PNG格式，文件小于5M，请确保图片清晰</p>\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>税务登记证上传<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col jmod_c_tc_pic">\n                    <div class="ui-file mr done" <%if(!corpInfo.c_tc_pic){%>style="display:none;"<%}%>>\n                      <img src="<%=clearProtocol(corpInfo.c_tc_pic)%>">\n                      <div class="ui-file-opt">\n                        <ul class="ui-file-btns item2">\n                          <li class="btn origin" title="查看原图"><a href="<%=clearProtocol(corpInfo.c_tc_pic)%>" target="_blank"><i></i><b>查看原图</b></a></li><li class="btn exchange" title="替换"><label for="c_tc_pic_input"><i></i><b>替换</b></label></li>\n                        </ul>\n                      </div>\n                    </div>\n\n                    <div class="ui-file mr upload" <%if(corpInfo.c_tc_pic){%>style="display:none;"<%}%>>\n                      <label for="c_tc_pic_input" class="ui-file-add"></label>\n                    </div>\n\n                    <div class="ui-file mr process" style="display:none;"><span class="ui-file-preload"></span></div>\n                    <input type="text" class="hidden" _type="file" name="c_tc_pic" validate="true"  validate_type="empty" validate_tip="请上传税务登记证" value="<%=corpInfo.c_tc_pic%>">\n                    <div class="fileinput-button"><input id="c_tc_pic_input" type="file" name="file" class="ui-file-input"></div>\n                    ' + i + '\n\n                  </div>\n                  <div class="mod-form-col block-el">\n                      <p class="more-tips font-sm">支持JPG、PNG格式，文件小于5M，请确保图片清晰（三证合一请再次上传）</p>\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>法人身份证正面<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col jmod_c_idcard_front_pic">\n                    <div class="ui-file mr done" <%if(!corpInfo.c_idcard_front_pic){%>style="display:none;"<%}%>>\n                      <img src="<%=clearProtocol(corpInfo.c_idcard_front_pic)%>">\n                      <div class="ui-file-opt">\n                        <ul class="ui-file-btns item2">\n                          <li class="btn origin" title="查看原图"><a href="<%=clearProtocol(corpInfo.c_idcard_front_pic)%>" target="_blank"><i></i><b>查看原图</b></a></li><li class="btn exchange" title="替换"><label for="c_idcard_front_pic_input"><i></i><b>替换</b></label></li>\n                        </ul>\n                      </div>\n                    </div>\n\n                    <div class="ui-file mr upload" <%if(corpInfo.c_idcard_front_pic){%>style="display:none;"<%}%>>\n                      <label for="c_idcard_front_pic_input" class="ui-file-add"></label>\n                    </div>\n\n                    <div class="ui-file mr process" style="display:none;"><span class="ui-file-preload"></span></div>\n                    <input type="text" class="hidden" _type="file" name="c_idcard_front_pic" validate="true"  validate_type="empty" validate_tip="请上传法人身份证正面" value="<%=corpInfo.c_idcard_front_pic%>">\n                    <div class="fileinput-button"><input id="c_idcard_front_pic_input" type="file" name="file" class="ui-file-input"></div>\n                    ' + i + '\n\n                  </div>\n                  <div class="mod-form-col block-el">\n                      <p class="more-tips font-sm">支持JPG、PNG格式，文件小于5M，请确保图片清晰</p>\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>法人身份证反面<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col jmod_c_idcard_back_pic">\n                    <div class="ui-file mr done" <%if(!corpInfo.c_idcard_back_pic){%>style="display:none;"<%}%>>\n                      <img src="<%=clearProtocol(corpInfo.c_idcard_back_pic)%>">\n                      <div class="ui-file-opt">\n                        <ul class="ui-file-btns item2">\n                          <li class="btn origin" title="查看原图"><a href="<%=clearProtocol(corpInfo.c_idcard_back_pic)%>" target="_blank"><i></i><b>查看原图</b></a></li><li class="btn exchange" title="替换"><label for="c_idcard_back_pic_input"><i></i><b>替换</b></label></li>\n                        </ul>\n                      </div>\n                    </div>\n\n                    <div class="ui-file mr upload" <%if(corpInfo.c_idcard_back_pic){%>style="display:none;"<%}%>>\n                      <label for="c_idcard_back_pic_input" class="ui-file-add"></label>\n                    </div>\n\n                    <div class="ui-file mr process" style="display:none;"><span class="ui-file-preload"></span></div>\n                    <input type="text" class="hidden" _type="file" name="c_idcard_back_pic" validate="true"  validate_type="empty" validate_tip="请上传法人身份证反面" value="<%=corpInfo.c_idcard_back_pic%>">\n                    <div class="fileinput-button"><input id="c_idcard_back_pic_input" type="file" name="file" class="ui-file-input"></div>\n                    ' + i + '\n\n                  </div>\n                  <div class="mod-form-col block-el">\n                      <p class="more-tips font-sm">支持JPG、PNG格式，文件小于5M，请确保图片清晰</p>\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>2016年营业额<span class="require">*</span></label>\n              </div>\n              <div class="mod-form-cont">\n                  <div class="mod-form-col jmod_c_turnover_pic">\n                    <div class="ui-file mr done" <%if(!corpInfo.c_turnover_pic){%>style="display:none;"<%}%>>\n                      <div class="ui-file-info">\n                        <span class="icon default"></span>\n                        <p class="name">年度会计报表审计报告</p>\n                      </div>\n                      <div class="ui-file-opt">\n                        <ul class="ui-file-btns item2">\n                          <li class="btn download" title="下载"><a href="<%=clearProtocol(corpInfo.c_turnover_pic)%>"><i></i><b>下载</b></a></li><li class="btn exchange" title="替换"><label for="c_turnover_pic_input"><i></i><b>替换</b></label></li>\n                        </ul>\n                      </div>\n                    </div>\n\n                    <div class="ui-file mr upload" <%if(corpInfo.c_turnover_pic){%>style="display:none;"<%}%>>\n                      <label for="c_turnover_pic_input" class="ui-file-add"></label>\n                    </div>\n\n                    <div class="ui-file mr process" style="display:none;"><span class="ui-file-preload"></span></div>\n                    <input type="text" class="hidden" _type="file" name="c_turnover_pic" validate="true" validate_type="empty" validate_tip="年度会计报表审计报告" value="<%=corpInfo.c_turnover_pic%>">\n                    <div class="fileinput-button"><input id="c_turnover_pic_input" type="file" name="file" class="ui-file-input"></div>\n                    ' + i + '\n                  </div>\n                  <div class="mod-form-col block-el">\n                      <p class="more-tips font-sm">2016年营业额需超过100万。<br>请提交会计师事务所出具的《年度会计报表审计报告》，或国税/地税的年度会计报表及纳税申请表。支持ZIP、PDF格式，文件小于5M。</p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n'
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    var i = '\n  <span class="input-tips err hidden">您的输入有误</span>\n';
    a.serviceInfoTpl = '\n  <div class="layout">\n      <div class="mod-form-hd">\n          <h4 class="caption">服务信息</h4>\n      </div>\n      <div class="mod-form-body jmod_all_form">\n          <div class="jmod_contact_list_container jmod_contact_phone">\n          </div>\n          <div class="jmod_contact_list_container jmod_before_qq">\n          </div>\n          <div class="jmod_contact_list_container jmod_after_qq">\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>默认服务区域<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="jmod_default_service_area" style="display:inline-block;margin-top:10px; font-size: 14px;">\n                          <input class="hidden jmod_default_area_input" type="text" validate="true" validate_type="empty" validate_tip="请选择默认服务区域" name="c_default_area" value="<%=corpInfo.c_default_area%>">\n                          <span class="all-address" _address_ids="<%=corpInfo.c_default_area%>" style="display: inline-block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width: 440px;word-wrap: normal;vertical-align:middle;"></span>\n                          <a href="javascript:void(0);" class="select-address jmod_select_address" style="vertical-align:middle;">+添加服务地区</a>\n                      </div>\n                      ' + i + '\n                  </div>\n                  <div class="mod-form-col block-el">\n                      <p class="more-tips font-sm">发布服务时，会直接使用默认服务区域，也可手动进行修改。</p>\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row">\n              <div class="mod-form-tit">\n                  <label>服务时间<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <select class="select jmod_week_start">\n                          <%for (var i = 0, len = weekEnums.length; i < len; i++) {%>\n                              <option value="<%=weekEnums[i]%>" <%if(corpInfo.c_service_time[0].weekStart == weekEnums[i]){%>selected<%}%>><%=weekEnums[i]%></option>\n                          <%}%>\n                      </select>\n                      <label class="time-range">至</label>\n                      <select class="select mr jmod_week_end">\n                          <%for (var i = 0, len = weekEnums.length; i < len; i++) {%>\n                              <option value="<%=weekEnums[i]%>" <%if(corpInfo.c_service_time[0].weekEnd == weekEnums[i]){%>selected<%}%>><%=weekEnums[i]%></option>\n                          <%}%>\n                      </select>\n                      <select class="select jmod_time_start">\n                          <%for (var i = 0; i < 48; i++) {var timeVal = ("0" + Math.floor(i / 2)).slice(-2) + ":" + (i % 2 == 0 ? "00" : "30");%>\n                              <option value="<%=timeVal%>" <%if(corpInfo.c_service_time[0].timeStart == timeVal){%>selected<%}%>><%=timeVal%></option>\n                          <%}%>\n                      </select>\n                      <label class="time-range">至</label>\n                      <select class="select jmod_time_end">\n                          <%for (var i = 0; i < 48; i++) {var timeVal = ("0" + Math.floor(i / 2)).slice(-2) + ":" + (i % 2 == 0 ? "00" : "30");%>\n                              <option value="<%=timeVal%>" <%if(corpInfo.c_service_time[0].timeEnd == timeVal){%>selected<%}%>><%=timeVal%></option>\n                          <%}%>\n                      </select>\n                      <div class="ui-checkbox mr display">\n                          <input type="checkbox" id="checkbox-st1" name="c_service_time" validate="true" validate_type="empty" validate_tip="请选择服务时间" <%if(corpInfo.c_service_time[0].isEnable == 1){%>checked<%}%>>\n                          <label for="checkbox-st1" class="ui-checkbox-rect <%if(corpInfo.c_service_time[0].isEnable == 1){%>checked<%}%>"></label>\n                         <label for="checkbox-st1" class="ui-checkbox-text">显示</label>\n                      </div>\n                      ' + i + '\n                  </div>\n                  <div class="mod-form-col mt">\n                      <select class="select jmod_week_start">\n                          <%for (var i = 0, len = weekEnums.length; i < len; i++) {%>\n                              <option value="<%=weekEnums[i]%>" <%if(corpInfo.c_service_time[1].weekStart == weekEnums[i]){%>selected<%}%>><%=weekEnums[i]%></option>\n                          <%}%>\n                      </select>\n                      <label class="time-range">至</label>\n                      <select class="select mr jmod_week_end">\n                          <%for (var i = 0, len = weekEnums.length; i < len; i++) {%>\n                              <option value="<%=weekEnums[i]%>" <%if(corpInfo.c_service_time[1].weekEnd == weekEnums[i]){%>selected<%}%>><%=weekEnums[i]%></option>\n                          <%}%>\n                      </select>\n                      <select class="select jmod_time_start">\n                          <%for (var i = 0; i < 48; i++) {var timeVal = ("0" + Math.floor(i / 2)).slice(-2) + ":" + (i % 2 == 0 ? "00" : "30");%>\n                              <option value="<%=timeVal%>" <%if(corpInfo.c_service_time[1].timeStart == timeVal){%>selected<%}%>><%=timeVal%></option>\n                          <%}%>\n                      </select>\n                      <label class="time-range">至</label>\n                      <select class="select jmod_time_end">\n                          <%for (var i = 0; i < 48; i++) {var timeVal = ("0" + Math.floor(i / 2)).slice(-2) + ":" + (i % 2 == 0 ? "00" : "30");%>\n                              <option value="<%=timeVal%>" <%if(corpInfo.c_service_time[1].timeEnd == timeVal){%>selected<%}%>><%=timeVal%></option>\n                          <%}%>\n                      </select>\n                      <div class="ui-checkbox mr display">\n                          <input type="checkbox" id="checkbox-st2" name="c_service_time" <%if(corpInfo.c_service_time[1].isEnable == 1){%>checked<%}%>>\n                          <label for="checkbox-st2" class="ui-checkbox-rect" <%if(corpInfo.c_service_time[1].isEnable == 1){%>checked<%}%>></label>\n                          <label for="checkbox-st2" class="ui-checkbox-text">显示</label>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n'
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    var i = '\n  <span class="input-tips err hidden">您的输入有误</span>\n';
    a.contactInfoTpl = '\n  <div class="layout">\n      <div class="mod-form-hd">\n          <h4 class="caption">入驻联系人信息<span class="remark">( 用于创业服务平台与申请人联系开展入驻接洽 )</span></h4>\n      </div>\n      <div class="mod-form-body jmod_all_form">\n          <div class="mod-form-row">\n              <div class="mod-form-tit">\n                  <label>联系人姓名<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input">\n                          <input class="default-input-width" name="c_contact_person" placeholder="请填写接口联系人姓名，方便平台核实和联络 " validate="true" validate_type="empty" maxlength="10" validate_tip="请填写联系人姓名" value="<%=corpInfo.c_contact_person%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>手机号<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input">\n                          <input class="default-input-width" name="c_mobile" placeholder="" validate="true" validate_type="empty|legal" legal_type="mobile_phone" maxlength="50" validate_tip="请填写手机号码|请填写11位手机号码" value="<%=corpInfo.c_mobile%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n          </div>\n          <div class="mod-form-row mt">\n              <div class="mod-form-tit">\n                  <label>邮箱<span class="require">*</span></label>\n              </div><div class="mod-form-cont">\n                  <div class="mod-form-col">\n                      <div class="ui-input">\n                          <input class="default-input-width" name="c_email" placeholder="请填写有效邮箱，用于接收平台重要通知" validate="true" validate_type="empty|legal" legal_type="email" maxlength="50" validate_tip="请填写邮箱|邮箱格式不正确" value="<%=corpInfo.c_email%>">\n                          <div class="ui-input-bg"></div>\n                      </div>\n                      ' + i + "\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n"
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    var i = '\n  <span class="input-tips err hidden" style="margin-top:-2px;">您的输入有误</span>\n', s = 1;
    a.guardInfoTpl = '\n  <div class="layout">\n      <div class="mod-form-hd">\n          <h4 class="caption">服务保障</h4>\n      </div>\n      <div class="mod-form-body jmod_all_form">\n          <div class="mod-form-row">\n              <div class="mod-form-cont">\n                  <div class="mod-form-col font-sm">\n                      <div class="ui-checkbox checkbox-insurance">\n                          <input type="checkbox" <%if(corpInfo.c_service_security_status == ' + s + '){%>checked<%}%> id="join_guarantee" name="c_service_security_status" validate="true" validate_type="empty" validate_tip="请加入用户服务保障">\n                          <label for="join_guarantee" class="ui-checkbox-rect <%if(corpInfo.c_service_security_status == ' + s + '){%>checked<%}%>"></label><label for="join_guarantee" class="ui-checkbox-text">加入用户服务保障（必选）</label>\n                      </div>\n                      ' + i + '\n                  </div>\n              </div>\n              <div class="mod-sub-form insurance-cont">\n                  <p class="mb">保障内容</p>\n                  <p>服务商承诺按时按质保证完成。</p>\n                  <p>订单结束后7日内，用户有权发起维权，若维权成功，用户可获得双倍赔付。</p>\n              </div>\n          </div>\n      </div>\n  </div>\n'
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    a.protocolTpl = '\n  <div class="protocol-wrap">\n    <h4 style="text-align: center;">2017年众创空间企业服务平台商户入驻协议</h4>\n    <br>\n    <p>编号：</p>\n    <p>甲方： （以下有时也称“商户”）</p>\n    <p>地址：</p>\n    <p>主营类目：</p>\n    <p>QQ号码：</p>\n    <p>乙方：深圳市腾讯计算机系统有限公司 （以下有时也称“腾讯公司”）</p>\n    <br>\n    <p>一、总则</p>\n    <br>\n    <p>甲、乙双方根据中华人民共和国法律、法规等相关规定，本着诚信、互惠、规范的原则，经友好协商，就甲方接入腾讯众创空间企业服务平台之相关合作事项，达成一致协议。</p>\n    <br>\n    <p>二、如无特别说明，下列术语在本协议中的定义为：</p>\n    <br>\n    <p>（一）众创空间企业服务平台，是指由腾讯公司提供技术支持和服务，且由腾讯公司以外的商户发布和出售服务的网络交易平台网站、域名为http://zc.open.qq.com/。众创空间企业服务平台向商户提供的服务以下简称“平台服务”。</p>\n    <p>（二）商户：申请成为众创空间企业服务平台的商户必须是符合本协议第三条规定的法律实体。</p>\n    <p>（三）商户注册：是指商户登陆众创空间企业服务平台（http://open.qq.com/ 、http://zc.open.qq.com/、http://c.qq.com/），并按要求填写相关信并获得众创空间企业服务平台服务账户的过程。</p>\n    <p>（四）服务：是指商户通过众创空间企业服务平台向用户提供的财务、法务、推广、运营、设计等服务。 </p>\n    <p>（五）财付通服务：是指由财付通支付科技有限公司（以下简称财付通公司）为商户、用户完成交易、转移资金提供的支付服务，详情见财付通公司网站（www.tenpay.com）相关规则及说明。</p>\n    <br>\n    <p>三、申请条件</p>\n    <br>\n    <p>申请入驻众创空间企业服务平台的商户必须全部满足以下条件：</p>\n    <p>（一） 符合《2017众创空间企业服务平台招商标准》（具体以甲方公布的为准）的要求，并根据《2017年众创空间企业服务平台招商标准》的要求向乙方或乙方指定合作方提交其在申请服务时应当提供的证明文件或其他相关证明，且获得众创空间企业服务平台认可；</p>\n    <p>（二） 同意并遵守本协议及众创空间企业服务平台公布的其他规则。</p>\n    <p>（三） 在众创空间企业服务平台完成商户注册并通过乙方审核。</p>\n    <br>\n    <p>四、信息确认</p>\n    <br>\n    <p>（一）商户必须通过乙方或乙方指定的信息确认方（以下简称“信息确认方”）对商户在申请入驻时提供的相关资料和信息进行核实、确认。具体的信息进行核实、确认的相关资料和信息包括但不限于以下内容：</p>\n    <p>1，登记的法律实体在实际经营所在地工商部门是否有合法有效的注册记录；</p>\n    <p>2，登记的联系人在该法律实体的业务身份是否属实；</p>\n    <p>3，登记的联系人是否获得公司授权；</p>\n    <p>4，商户提供的营业执照、税务登记证、商标注册证、授权书等相关资料是否属实；</p>\n    <p>5，法律法规要求及《2017年众创空间企业服务平台招商标准》和乙方另行所要求需核查的其他信息。</p>\n    <p>（二）若商户所提供的资料不真实或资料变更或其他原因导致商户未能通过信息确认，商户可在修改资料后要求再次进行信息确认。</p>\n    <p>（三）对上述信息的任何变更，商户应及时通知乙方，并以书面形式提交“信息变更的再确认申请”，将变更信息交由信息确认方依程序再次确认核实，如再确认未能通过，乙方有权终止本协议而无需承担任何责任。</p>\n    <p>（四）商户同意为其未及时的通知或更新其信息及上述信息的真实性、完整性与合法性担责，若因此给乙方、乙方用户、众创空间企业服务平台合作伙伴等造成损失的，商户同意赔偿全部损失。</p>\n    <br>\n    <p>五、商户的权利和义务</p>\n    <br>\n    <p>（一）在商户开始提供相关服务前，商户须按照乙方的要求提交经商户加盖公章确认的营业执照、税务登记证、商标注册证、授权书、服务说明材料等商户在众创空间企业服务平台开展相关服务所必须的资料，并向乙方提供联系人、电子邮件地址、联系电话、联系地址、邮政编码等联系信息。商户应确保前述资料和信息的真实、合法、准确、有效，同时商户应在上述资料实际变更时及时更新有资料，且不得以他人资料在众创空间企业服务平台进行注册。否则，乙方有权终止本协议，且造成的一切后果由商户自行承担。</p>\n    <p>（二）商户特别承诺遵守以下约定：</p>\n    <p>1，商户保证其拥有向用户提供相关服务的合法资质，商户有义务保障其服务符合国家有关法律法规、行政规章的规定，不侵犯任何第三方的包括知识产权在内的合法权益且不违反任何对商户有约束力的法律文件。</p>\n    <p>2，商户在众创空间企业服务平台向用户服务均为真实有效。如出现任何欺诈，乙方有权立即终止本协议，并扣除商户的所有保证金，且保留追究其他相关法律责任的权利。</p>\n    <p>3，如商户提供的服务上线后，需要进行变更或下线的，商户应当提前10个工作日向乙方提出申请，经乙方确认同意后方可进行操作。</p>\n    <p>4，如商户希望在媒体上发布任何与乙方相关的新闻、宣传稿件等信息，商户应当提前10个工作日向乙方提出书面申请，经乙方书面确认同意方可进行操作。否则，乙方有权终止本协议，并扣除商户的所有保证金，且保留追究其他相关法律责任的权利。</p>\n    <p>5，遵守乙方在众创空间企业服务平台公布的各项规则。</p>\n    <p>（三）商户保证有合法的权利缔结本协议，保证自身发布于众创空间企业服务平台的信息真实、准确、合法、有效。</p>\n    <p>（四）商户对自身发布于众创空间企业服务平台的信息中所涉服务有合法的处分权及其他合法权利。商户应按照消费者权益保护法、国家强制性标准等法律法规提供服务。</p>\n    <p>（五）商户在提供服务时应遵守国家法律、法规，在提供服务进行交易的过程中遵守诚实信用的原则，不在交易过程中采取不正当竞争行为，不扰乱网上交易的正常秩序。</p>\n    <p>（六）商户同意不对众创空间企业服务平台上任何数据作本协议目的之外的利用，未经乙方书面许可，不得以复制、传播等方式使用众创空间企业服务平台上的任何资料。</p>\n    <p>（七）商户知悉并同意，财付通公司为协助其资金转移及支付服务的提供方。乙方有权根据本协议约定对商户被冻结的保证金、商户应赔付的款项进行操作。</p>\n    <p>（八）商户理解并同意，因用户使用其提供的服务所产生的用户投诉、纠纷、争议等均与腾讯公司无关，由商户自行负责处理。若商户未及时妥善处理给腾讯公司造成的损失，商户应当负责赔偿。</p>\n    <br>\n    <p>六、乙方的权利和义务</p>\n    <br>\n    <p>（一）乙方负责在现有技术条件下维护众创空间企业服务平台交易平台的正常运行；对商户在注册使用众创空间企业服务平台交易平台中所遇到并提出的与交易或注册有关的问题，乙方及时作出回复。</p>\n    <p>（二）因网上交易平台的特殊性，乙方没有义务对所有商户的交易行为以及与交易有关的其它事项进行事先审查。但若存在下列情况，乙方可以普通、非专业人员的知识水平标准对相关内容进行判别，若认为这些内容或行为具有违法或不当性质的，乙方有权根据不同情况选择删除相关信息或中止（或终止）对商户提供平台服务，并追究相关法律责任。</p>\n    <p>1，第三方通知乙方认为商户或具体交易事项存在重大问题，并侵犯其合法权益的；</p>\n    <p>2，第三方向乙方告知商户在众创空间企业服务平台交易平台上有违法或不当行为的。</p>\n    <p>（三）乙方有权对商户的注册数据及交易行为进行查阅，若发现注册数据或交易行为中存在有违法或不当的，均有权向商户发出询问及要求改正的通知或者直接作出删除等处理。</p>\n    <p>（四）经国家生效法律文书或行政处罚决定确认商户存在违法行为，或者乙方有足够事实依据可以认定商户存在违法或违反本协议的，乙方有权公布商户的违法和/或违规行为。</p>\n    <p>（五）商户在众创空间企业服务平台交易平台发布的不当信息，乙方有权在不通知商户的前提下进行删除或采取其它限制性措施，上述不当信息包括但不限于：以炒作信用为目的的信息、存在欺诈等恶意或虚假内容的信息、与网上交易无关或不是以交易为目的的信息、存在恶意竞价或其它试图扰乱正常交易秩序因素的信息、违反公共利益或可能严重损害乙方和/或众创空间企业服务平台其他用户合法利益的信息。</p>\n    <p>（六）商户对其在众创空间企业服务平台上发布的信息授予乙方许可使用权利，乙方有权对该权利在腾讯公司及其关联公司再授权，乙方有权(全部或部份地)采取使用、复制、改写等方式利用商户公示于网站的各类信息或制作其派生作品，和/或以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入其它作品内。</p>\n    <p>（七）乙方仅为本众创空间企业服务平台提供方，不参与商户与第三方所进行的任何交易，对商户的具体交易乙方仅提供技术支持，不对商户行为的合法性、有效性及商品或服务的真实性、合法性和有效性作任何明示或暗示的担保。商户因进行交易、提供有偿服务或接入众创空间企业服务平台而发生的所有应纳税赋，均由商户自行负责支付。交易产生的发票，均由商户自行开具。上述商户行为所导致的纠纷由商户自行解决和处理，并承担法律责任，若给乙方、乙方用户和财付通公司造成损失的，商户应予赔偿。</p>\n    <br>\n    <p>七、费用规定</p>\n    <br>\n    <p>（一）为鼓励商户提高服务质量和交易额水平，乙方同意本协议合作期限免收甲方技术服务费和年服务费。</p>\n    <p>（二）乙方应按月通过财付通向商户结算财付通向用户代收取的服务费用。结算流程如下：每月1日启动结算上月用户已验收完毕且不存在异议的订单，15日之前完成结算任务，如遇特殊情况需延迟结算的，乙方应提前通知甲方。</p>\n    <p>（三）商户收款账户信息如下：</p>\n    <p>开户银行：</p>\n    <p>开户名：</p>\n    <p>银行帐号：</p>\n    <br>\n    <p>八、服务的上线</p>\n    <br>\n    <p>（一） 服务将在以下条件全部满足后十四个工作日内上线：</p>\n    <p>1，商户签署本协议；</p>\n    <p>2，商户符合本协议第三条规定的申请条件；</p>\n    <p>3，本协议第九条规定的保证金商户已成功打款至乙方银行账户；</p>\n    <p>4，乙方已向甲方提交了相关的服务说明资料并已通过甲方审核；</p>\n    <p>5，乙方未向商户发出拒绝上线的通知；</p>\n    <p>（二）如商户在签署本协议后十四个工作日内仍未满足本条第一款规定的所有上线条件，则乙方有权不予上线，本协议即告终止。</p>\n    <br>\n    <p>九、保证金及其管理</p>\n    <br>\n    <p>商户同意按本条款规定向乙方缴存一定金额的保证金（该保证金应缴存于乙方指定银行账号）：</p>\n    <p>1，商户同意，乙方在商户签署本协议、并经审查确认符合申请条件后，商户支付保证金到乙方指定银行账号；乙方开具收据。乙方指引银行账户信息如下：</p>\n    <p>  开户银行：招商银行深圳威盛大厦支行</p>\n    <p>  开户名：深圳市腾讯计算机系统有限公司</p>\n    <p>  银行帐号： 817282299610001</p>\n    <p>2，保证金的额度：人民币20000元整（大写人民币：贰万元整）；</p>\n    <p>3，乙方有权根据商户之业务变化及实际赔付情况以书面通知的方式（包括但不限于电子邮件、传真等）通知商户调整上述保证金额度，如商户未能在收到通知后的十日内向乙方指定银行账号补足保证金，则乙方有权立即中止提供平台服务或终止本协议；</p>\n    <p>4，保证金的管理和使用：</p>\n    <p>  商户同意，除保证金的冻结外，乙方有权按以下方式向就保证金的管理和使用发出指令并要求执行：</p>\n    <p>  1）如服务期内商户未有违反众创空间企业服务平台各项规则的行为，且至停止使用平台服务后三个月内，商户未受到任何第三方投诉或发生交易纠纷，则乙方将在上述期满后的十个工作日内向商户指定银行账户打款，退还保证金；</p>\n    <p>  2）乙方在以下情况发生时，处置保证金：</p>\n    <p>  &nbsp;&nbsp;(a) 在众创空间企业服务平台进行的交易中，如商户违反法律、法规、政策或违反其对买家的承诺致买家受损时，商户同意乙方有完全的权力根据自己的判断，直接使用保证金对买家进行赔付；</p>\n    <p>  &nbsp;&nbsp;(b) 如商户违反本协议和或众创空间企业服务平台任何规则，给乙方造成任何损失，乙方有权直接从保证金中扣除相当于乙方损失的金额，保证金不足以赔偿的，乙方可继续向商户追偿。</p>\n    <p>  3）乙方如使用保证金对第三方进行任何赔付，应以书面方式（包括但不限于电子邮件、传真等）通知商户。在向商户出具的书面通知中，应说明赔付原因及赔付金额。</p>\n    <p>5，在本协议有效期内，商户应使保证金总额始终保持不低于本协议第九条第2款规定的金额，如发生赔付事件导致保证金数额减少，则乙方有权扣除商户下一次应结算金额以补足保证金；如余额不足，则商户应在赔付发生后十天内补足。保证金不足期间，乙方将部分或全部暂停向商户提供平台服务，如逾期仍未能补足，则乙方有权终止本协议；</p>\n    <p>6，如保证金不足赔付时，商户应自行支付额外的赔付金额，如因故导致乙方向买家支付了超出保证金数额的款项，或乙方遭受的损失高于可支配的保证金余额，则乙方有权：</p>\n    <p>  1）要求商户偿付乙方的损失，且在指定时间内补足保证金；</p>\n    <p>  2）要求扣除商户下一次应结算金额，以补偿乙方所遭受的损失；</p>\n    <p>如乙方的损失通过上述两种方式仍无法弥补，则乙方有权单方面终止本协议；</p>\n    <p>6，商户对买家、任何第三方以及乙方、财付通公司的赔付责任不以保证金的数额为限；除对商户保证金按本协议约定的形式处置外，乙方和财付通公司不对买家或者其他权利人承担任何其它赔付义务。</p>\n    <br>\n    <p>十，协议的有效期</p>\n    <br>\n    <p>本协议自乙方通过在线方式确认本协议之日起生效，于2018年3月30日终止。</p>\n    <br>\n    <p>十一、协议终止</p>\n    <br>\n    <p>（一）协议任何一方均可以提前三十天以书面通知的方式终止本协议。</p>\n    <p>（二）商户同意，如商户违反乙方的任何规则或本协议中的任何承诺或保证，包括但不限于本协议项下的任何约定，乙方都有权立刻终止本协议，且按有关规则或约定对商户进行处罚。</p>\n    <p>（三）商户在超过三十天的时间内未以商户的账号及密码登录众创空间企业服务平台的，乙方有权终止本协议。</p>\n    <p>（四）如非因乙方的原因，商户未能按本协议的约定按期全额支付有关服务费用，且在乙方定的时限内仍未支付，乙方有权部分或全部中止提供平台服务或终止本协议。</p>\n    <br>\n    <p>十二、通知方式</p>\n    <br>\n    <p>（一）商户向乙方发出通知时，应以书面形式通过以下邮址信息递交，通知的到达以乙方收到为准。乙方地址：深圳市南山区深南大道9988号大族激光大厦九楼腾讯众创空间企业服务平台，邮编：518057，收件人：众创空间平台产品中心平台产品组。</p>\n    <p>（二）乙方可自“openservice@tencent.com”邮件地址向商户在众创空间企业服务平台注册时提供的电子邮件地址发出通知。通知的送达以邮件发出的为准。同时，乙方也可以在众创空间企业服务平台（open.qq.com）上公示的方式送达至商户。</p>\n    <br>\n    <p>十三、违约责任</p>\n    <br>\n    <p>（一）商户应对违反本协议而给乙方造成的任何损失进行赔偿。</p>\n    <p>（二）商户不得采取任何手段或措施，包括但不限于明示或暗示其用户或通过其他方式转移其可以通过众创空间企业服务平台在线达成的交易，或达成交易后不经由财付通服务收取交易金额。否则将视商户为严重违约，乙方将有权立即终止本协议，并将其保证金作为违约金予以划扣，并就违约行为向商户追偿。</p>\n    <p>（三）如一方发生违约行为，守约方可以书面通知方式要求违约方在指定的时限内停止违约行为，并就违约行为造成的损失进行索赔，如违约方未能按时停止违约行为，则守约方有权立即终止本协议。</p>\n    <br>\n    <p>十四、不可抗力及免责事由</p>\n    <br>\n    <p>因不可抗力或者其他意外事件，使得本协议的履行不可能、不必要或者无意义的，乙方不承担责任。本协议所称之不可抗力意指不能预见、不能避免并不能克服的客观情况，协议各方的免责事由包括但不限于战争、台风、水灾、火灾、雷击或地震、罢工、暴动、法定疾病、黑客攻击、网络病毒、电信部门技术管制、政府行为或任何其它自然或人为造成的灾难等客观情况。</p>\n    <br>\n    <p>十五、争议解决及其他</p>\n    <br>\n    <p>（一）如本协议的任何条款被视作无效或无法执行，则除上述条款可被分离外，其余部份条款则仍具有法律效力。</p>\n    <p>（二）本协议之解释、适用、争议解决等一切事宜，均适用中华人民共和国大陆法律；因本协议存在任何争议的，本协议各方应友好协商，协商不成的，协议各方均应将争议提交协议签订地（即深圳市南山区）有管辖权的人民法院诉讼解决。</p>\n    <p>（三）本协议内容包括协议正文及乙方已经发布的或将来可能发布的各类规则。</p>\n    <p>（四）乙方有权根据需要不时地制定、修改本协议或各类规则，如本协议有任何变更，乙方将在网站上以公示形式通知予商户。如商户不同意相关变更，必须立即以书面通知的方式终止本协议并同时停止使用众创空间企业服务平台。任何修订和新规则一经在众创空间企业服务平台上公布即自动生效，成为本协议的一部分。商户登录或继续使用众创空间企业服务平台将表示商户接受经修订的协议。除另行明确声明外，任何使服务范围扩大或功能增强的新内容均受本协议约束。</p>\n    <p>（五）本协议相关条款与众创空间企业服务平台发布的规则和流程等构成一个完整的、不可分割的协议，商户、乙方应予遵守。如本协议与众创空间企业服务平台发布的规则和流程存在冲突的，则以本协议为准。</p>\n  </div>\n';
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    a.tenpayProtocolTpl = '\n  <div class="protocol-wrap">\n    <h4 style="text-align: center;">财付通服务协议</h4>\n    <br>\n    <p>特别提示：</p>\n    <p>本协议由腾讯创业服务平台（下称“平台”或“腾讯”）、财付通支付科技有限公司（下称“财付通”）和您共同签订，具有合同法律效力。</p>\n    <p>请您务必审慎阅读并充分理解各条款内容，特别是免除或者限制责任的条款、争议解决和法律适用条款。免除或者限制责任的条款可能以加粗字体显示，您应重点阅读。除非您已阅读并接受本协议所有条款，否则您无权使用本服务。您使用本服务即视为您已阅读并同意本协议的约束。如您对本协议有任何疑问的，应向客服 （财付通客服：95017；平台客服QQ：800013811）咨询。</p>\n    <p>鉴于：</p>\n    <p>1、财付通由深圳市腾讯计算机系统有限公司控股，为收付款人之间提供货币资金转移服务；</p>\n    <p>2、您在平台上销售商品或服务，并愿意接受财付通为您销售商品和服务（以下合称“商品”）的交易提供支付结算服务，使得用户可通过财付通支付服务购买您的商品，您可按照本协议约定收取到商品交易相应的资金。您授权平台代您向财付通提交、接收您的资料、信息，生成、传输您的交易订单信息和电子指令。</p>\n    <br>\n    <p>一、定义</p>\n    <br>\n    <p>如无特别说明，下列术语在本协议中的定义为：</p>\n    <p>1.1  财付通支付服务：指财付通依托手机QQ或微信或平台为收付款人之间提供的货币资金转移服务。（以下简称“本服务”）。</p>\n    <p>1.2  用户：指使用财付通支付服务向您购买商品或服务的主体。</p>\n    <p>1.3  平台：指腾讯提供的在网络商品交易活动中为交易双方或者多方提供网页空间、虚拟经营场所、交易规则、交易撮合、信息发布等服务，供交易双方或者多方独立开展交易活动的信息网络系统。</p>\n    <p>1.4  商户：指在腾讯提供的平台中销售商品或服务的自然人或企事业单位，即本协议中的“您”。</p>\n    <br>\n    <p>二、财付通的权利和义务</p>\n    <br>\n    <p>2.1  交易纠纷处理。财付通仅为您提供货币资金转移服务，您与用户或其他主体之间的纠纷由您自行负责处理，与财付通无关，但是因财付通系统故障引起的资金转移服务纠纷除外。</p>\n    <p>2.2  商户经营审核。财付通有权定期或不定期审核您的业务类型，以及通过本服务售卖的商品。若您从事不符合国家相关法律法规规定的经营活动时，财付通有权暂停或终止提供服务。如经财付通判断，您从事风险等级较高的业务，财付通有权采取调整交易限额、延迟结算等措施。</p>\n    <p>2.3  延迟结算。财付通发现您可能存在洗钱、恐怖融资、欺诈交易、信用卡套现、恶意倒闭或其他违法违规行为，或财付通发现您存在可疑交易特征的交易或存在争议交易时，财付通可以对您进行延迟结算。对于延迟结算的资金，直至排除违法违规嫌疑时，财付通才恢复该部分资金的结算。您的行为导致平台或财付通遭受损失的，您还应当承担赔偿责任。</p>\n    <p>2.4  身份验证和授权。您使用本服务，即表明您同意平台和财付通收集、记录和使用您使用本服务过程中产生的相关信息和数据，包括但不限于您及您的法定代表人、负责人的身份信息、账户信息和交易信息等。财付通有权将前述信息提交国家机关和金融机构进行身份验证和鉴权。财付通有权根据需要收集、保存、核实您的法定代表人、负责人的音频和视频资料。同时，为更好地提供服务，财付通、平台及关联公司有权在法律允许的范围内自行收集、记录、使用上述信息和数据。</p>\n    <br>\n    <p>三、您的权利和义务</p>\n    <br>\n    <p>3.1  身份验证。您应如实向平台、财付通提供相关经营资质资料，包括但不限于营业执照、税务登记证、组织机构代码证、法定代表人身份证明及影音资料、电话号码等，若您从事国家规定专营、专控或需要取得国家前置行政许可的经营活动，还应提供该相关资质证照。您应保证所提交的上述资料的准确性、真实性、完整性。您的上述信息发生变更，或迁址、停业、变更域名或联系电话等资料信息，应提前通知平台及财付通，否则，财付通有权视具体情况暂停服务，您或平台未及时通知导致的一切投诉和纠纷，均由您或平台承担。您应保证您所提交的上述资质资料的合法性、准确性、真实性、完整性。财付通和平台有权根据国家法律法规、规章制度、行业规范、政策要求的规定，要求您补充提交相关信息和资料，您逾期未提交或未通过财付通和平台核验的，财付通和平台有权解除本协议或暂停向您提供本服务。</p>\n    <p>3.2  真实交易背景。您承诺在平台开展的交易基于真实的交易背景，即您需提供充分证据证明用户与您确实存在交易关系。</p>\n    <p>3.3  反套现、反洗钱。您不得主动或协助持卡人进行信用卡套现、洗钱、交易分单等违法经营行为，不得出现虚假申请、恶意倒闭等严重风险行为，否则，财付通有权暂停或终止提供本服务，并将您的信息报送至中国人民银行和公安部及相关监管机构。</p>\n    <p>3.4  安全守则。您不得对平台或财付通的计算机系统和程序采取反向工程手段进行破解，不得对前述系统和程序（包括但不限于源程序、目标程序、软件文档、运行在本地电脑内存中的数据、客户端至服务器端的数据、服务器数据等）进行复制、修改、编译、整合和篡改，不得修改或增加平台或财付通提供的任何服务的软件系统的原有功能。</p>\n    <br>\n    <p>四、平台的权利和义务</p>\n    <br>\n    <p>4.1  您申请开通本服务，即表明您授权平台向财付通发起相关支付指令，财付通有权依据平台发出的指令进行系列操作，由此产生的一切纠纷及法律责任由您及平台承担，与财付通无关。</p>\n    <p>4.2  平台应按财付通规定的时间和数据格式向财付通提交支付指令，由于财付通系统的实时性和不可更改性，平台向财付通发起的任何支付指令，在财付通执行后，均为不可撤销或更改的。支付指令一旦被财付通执行，您及平台不得要求止付、更改或撤销。如果因平台提供的支付指令明细不符合要求的，造成财付通未能及时完成操作，应由您及平台负责。</p>\n    <br>\n    <p>五、服务费用和交易结算</p>\n    <br>\n    <p>5.1  平台服务费</p>\n    <p>5.1.1 由于您使用平台销售您的商品或服务，您需向平台缴纳平台服务费。财付通将根据平台指令，从您的每笔交易款中扣除一定费率的平台服务费，平台服务费的费率为：0%。</p>\n    <p>5.1.2 平台服务费为您每笔交易额乘以对应的平台服务费费率。由财付通从对应的您待收资金的部分中扣除。</p>\n    <br>\n    <p>5.2  交易结算</p>\n    <p>5.2.1 财付通在扣除平台服务费后，将剩余交易款付款至您的结算银行账户。</p>\n    <p>5.2.2 您的交易结算账户为您申请本服务时向平台提交的同名银行账户或其他存在合法资金管理关系的单位银行结算账户，若因您或银行的原因导致交易款项无法按时结算至您提交的银行账户的，平台和财付通不承担任何责任。</p>\n    <p>5.2.3 若您需变更结算账户或需授权结算，应书面通知平台并经平台批准同意。平台同意后应及时通知财付通变更后的结算账户。因您变更账户或指定收款人但未及时通知平台导致增加的额外成本或任何损失，由您承担。</p>\n    <p>5.2.4 结算周期以平台约定规则为准。</p>\n    <br>\n    <p>六、保密条款</p>\n    <br>\n    <p>6.1 除本协议另有约定外，未经一方书面同意，任何一方不得将本协议内容、用户个人信息、用户支付信息以及接口技术、安全协议及证书等透露给第三方。</p>\n    <p>6.2 各方对在履行协议中获得的商业机密和技术秘密负保密责任。出现下列任一情况时，腾讯和财付通有权披露您的相关商业信息：</p>\n    <p>  （1）人民银行或银监会、证监会、保监会等金融业监管机构要求腾讯或财付通提供您的相关商业信息的；</p>\n    <p>  （2）公安机关、人民法院、人民检察院或有权行政机关要求腾讯或财付通提供您的相关商业信息的；</p>\n    <p>  （3）用户投诉，要求腾讯或财付通提供您的相关商业信息，经腾讯或财付通查实后认为可以提供的。</p>\n    <p>本协议所称商业信息包括但不限于您与用户之间的交易单号、交易凭证、资金流水等交易信息。</p>\n    <p>6.3 各方保证其雇员及代理人履行本条的保密义务。</p>\n    <p>6.4 上述保密义务在本协议终止后五年内有效。</p>\n    <br>\n    <p>七、违约责任</p>\n    <br>\n    <p>7.1 您有下列情形之一的，财付通或平台有权单方面解除本协议并要求您承担相关赔偿责任：</p>\n    <p>  （1）直接或间接参与欺诈的，或出租、出借、出售、购买银行账户（含银行卡）或支付账户，或在网上买卖POS机（包括MPOS）、刷卡器等受理终端，或涉嫌实施其他违法犯罪活动的；</p>\n    <p>  （2）经营及财务状况恶化无法正常经营，或被全国企业信用信息公示系统列入“严重违法失信企业名单”，或单位注册地址不存在或者虚构经营场所的；</p>\n    <p>  （3）您或您的法定代表人、负责人被中国支付清算协会、银行卡清算机构、其他国家机关、企事业单位列入黑名单，或存在被国家机关、行业协会的处罚记录的；</p>\n    <p>  （4）出现违规操作，经指出拒不纠正或在合理期间内虽有改正但无法达到腾讯或财付通整改要求和目标的；</p>\n    <p>  （5）无理拒绝或故意拖延财付通查询、调单或监查要求的；</p>\n    <p>  （6）进入破产程序、解散、营业执照被吊销；</p>\n    <p>  （7）发生卡片伪冒交易或恶意欠款的；</p>\n    <p>  （8）实施有损财付通或腾讯利益行为的；</p>\n    <p>  （9）违反本协议或利用财付通提供的服务从事非法业务的；</p>\n    <p>  （10）您或受理机构的软硬件系统存在安全问题，经财付通通知后拒不整改，或出现风险事件，经财付通判断交易异常的；</p>\n    <p>  （11）违反腾讯和财付通的相关规则和制度的。</p>\n    <br>\n    <p>八、免责条款</p>\n    <br>\n    <p>8.1  因受不可抗力影响而不能履行或不能完全履行本协议的一方可以免除责任。不可抗力是指本协议各方不能预见、不能避免、不能克服的客观情况。此外，鉴于网络之特殊属性，发生包括但不限于下列任何情形导致腾讯或财付通不能履行本协议下义务的，各方可以免责：</p>\n    <p>  （1）黑客攻击、计算机病毒侵入或发作；</p>\n    <p>  （2）计算机系统遭到破坏、瘫痪或无法正常使用而导致信息或纪录的丢失、腾讯或财付通不能提供本协议项下之服务的；</p>\n    <p>  （3）电信部门技术调整导致之重大影响的；</p>\n    <p>  （4）因政府管制而造成服务终止的；</p>\n    <p>  （5）其它非各方原因造成的。</p>\n    <p>8.2  遇上述不可抗力事件的任何一方，应将该事件立即书面通知其他方。各方按照事件对协议履行的影响程度，再行决定是否继续履行本协议。</p>\n    <br>\n    <p>九、风险提示及特别约定</p>\n    <br>\n    <p>9.1  各方对于“中国国内电子商务环境尚未成熟，电子商务立法以及信用体制还不完善”的现状以及开展电子商务业务存在的风险性均完全知悉，各方均承诺采取合理的风险防范措施，以尽量避免或减小风险。</p>\n    <p>9.2  本服务交易过程中，您应积极防范银行卡持卡人拒付风险，及时解决交易中出现的问题：</p>\n    <p>  （1）若在交易中如出现包括但不限于交易不真实、欺诈、伪冒交易、用户账户信息泄漏或您违反国家法律规定或您违反对用户的承诺以及您违反与腾讯或财付通的约定之情形，您应自行承担上述情形造成的全部损失；</p>\n    <p>  （2）若在交易中如出现持卡人否认交易、持卡人拒付等可疑情形的，您应向平台和财付通提供相应的交易凭证，若您怠于提供凭证，或您提供的凭证不符合相关行业内标准，或在平台或财付通书面通知（含电子邮件通知）后您未及时停止可疑交易、控制相应资金等，您应自行承担上述情形造成的全部损失，且平台和财付通有权暂停向您提供本服务，并按照相关规定报送可疑交易报告或重点可疑交易报告。</p>\n    <p>您因上述情形给腾讯或财付通造成损失的，腾讯和财付通可以直接从您的待结算款项中扣划，仍不足以赔偿的，可以继续向您追偿。</p>\n    <br>\n    <p>十、知识产权</p>\n    <br>\n    <p>10.1  腾讯和财付通在本合作中提供的内容（包括但不限于商标、标识、网页、文字、图片等）的知识产权归腾讯和财付通各自所有。</p>\n    <p>10.2  除另有特别声明外，腾讯和财付通在本合作中提供的软件系统、技术接口、安全证书（如有）等所依托的著作权、专利权及其他知识产权均归腾讯和财付通各自所有。</p>\n    <p>10.3  上述知识产权均受到法律保护，未经腾讯和财付通或相关权利人许可，不得以任何形式进行使用或创造相关衍生作品。</p>\n    <br>\n    <p>十一、协议变更</p>\n    <br>\n    <p>腾讯和财付通有权根据需要不时地制定、修改本协议，如本协议有任何变更，腾讯或财付通将在平台网站对变更事项公告30日。如您不同意相关变更，必须立即以书面的方式通知腾讯和财付通终止为您提供服务。在公告期过后，您登录或继续使用服务即表示您接受经修订的协议。</p>\n    <br>\n    <p>十二、适用法律及争议解决</p>\n    <br>\n    <p>12.1  本协议之解释、适用、争议解决等一切事宜，均适用中华人民共和国大陆地区法律。</p>\n    <p>12.2  本协议签订地为深圳市南山区，因本协议产生任何纠纷，各方应友好协商，协商不成的，各方应将争议提交协议签订地人民法院（深圳市南山区人民法院）诉讼解决。</p>\n    <br>\n    <p>十三、协议有效期、自动续期和提前终止协议</p>\n    <br>\n    <p>13.1  本协议自您在平台点击确认本协议时生效，有效期一年。若各方均未在有效期届满前一个月前以书面形式通知解约，则本协议自动续期一年，续期次数不限。</p>\n    <p>13.2  各方有权基于各自的营运需要，提前终止本协议，且无需承担任何法律责任。需提前终止本协议的，主动提出方应提前一个月以书面或电子邮件形式通知各方。</p>\n    <p>13.3  协议解除或终止后，涉及到保证金、退款和保密的条款依然有效，各方应继续遵照执行。</p>\n    <br>\n    <p style="text-align: right">财付通支付科技有限公司</p>\n    <p style="text-align: right">腾讯创业服务平台</p>\n  </div>\n'
}, function (e, a, i) {
    (function (e) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function n(a) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = "";
            if (!a) return s = (0, u.tmpl)(f, {
                contactVal: "",
                isFirst: !0,
                placeholder: i.placeholder,
                label: i.label
            }), void e(i.selector).html(s);
            for (var n = a.split("|"), t = !1, c = 0, l = n.length; c < l; c++) t = 0 === c, s += (0, u.tmpl)(f, {
                contactVal: n[c],
                isFirst: t,
                placeholder: i.placeholder,
                label: i.label
            });
            e(i.selector).html(s)
        }

        function t() {
            e(".jmod_contact_list_container").on("click", ".jmod_add_contact_item", function () {
                var a = e(this).closest(".jmod_contact_item").find("input").attr("placeholder");
                c(e(this), a)
            }), e(".jmod_contact_list_container").on("click", ".jmod_delete_contact_item", function () {
                l(e(this))
            }), e(".jmod_contact_list_container").on("focus", "input", function () {
                e(this).closest(".jmod_contact_item").find(".input-tips.err").hide()
            })
        }

        function c(e, a) {
            var i = e.closest(".jmod_contact_item"),
                s = i.closest(".jmod_contact_list_container").find(".jmod_contact_item").length;
            if (s === v) return void p["default"].showToast("fail", "最多只能设置10条信息");
            var n = (0, u.tmpl)(f, {contactVal: "", isFirst: !1, placeholder: a, label: ""});
            i.after(n)
        }

        function l(e) {
            e.closest(".jmod_contact_item").remove()
        }

        function o(a) {
            var i = [];
            return e(a + " .jmod_contact_item input").each(function (a, s) {
                var n = e.trim(e(s).val());
                return !n || void i.push(n)
            }), i.join("|")
        }

        function d(a) {
            var i = "", s = !1, n = {
                    jmod_contact_phone: /^([0-9]+\-)*[0-9]+$/,
                    jmod_before_qq: /^[1-9][0-9]{4,11}$/,
                    jmod_after_qq: /^[1-9][0-9]{4,11}$/
                }, t = {jmod_contact_phone: "请填写联系电话", jmod_before_qq: "请填写售前咨询QQ", jmod_after_qq: "请填写售后咨询QQ"},
                c = function (c) {
                    var l = [], o = !1;
                    if (e("." + c + " .jmod_contact_item input").each(function (a, t) {
                            var d = e(t), r = e.trim(e(t).val());
                            if (!r) return !0;
                            if (n[c].test(r)) l.push(r); else {
                                i || (i = d.closest(".jmod_contact_item")), s = !0, o = !0;
                                var p = d.closest(".jmod_contact_item").find(".input-tips.err");
                                p.text("格式错误"), p.css("display", "inline-block")
                            }
                        }), !o && !a && 0 === l.length) {
                        i || (i = e(e("." + c + " .jmod_contact_item").get(0)));
                        var d = e(e("." + c + " .jmod_contact_item").get(0)).find(".input-tips.err");
                        d.text(t[c]), e(e("." + c + " .jmod_contact_item").get(0)).find(".input-tips.err").css("display", "inline-block"), s = !0
                    }
                };
            for (var l in n) c(l);
            if (s && i) {
                var o = i.find(".input-tips.err").offset();
                (0, u.isBoxAtViewPort)(i.find(".input-tips.err")) || window.scrollTo(0, o.top - 100)
            }
            return s
        }

        Object.defineProperty(a, "__esModule", {value: !0}), a.addContactInfos = n, a.bindContactEvents = t, a.getContactInfo = o, a.contactInfoInValid = d;
        var r = i(5), p = s(r), u = i(8), v = 10,
            f = '\n  <div class="mod-form-row row-consult-qq jmod_contact_item">\n    <div class="mod-form-tit">\n      <%if(isFirst){%>\n        <label><%=label%><span class="require">*</span></label>\n      <%}%>\n    </div>\n    <div class="mod-form-cont">\n      <div class="mod-form-col">\n        <div class="ui-input default-input-width">\n          <input type="text" placeholder="<%=placeholder%>" value="<%=contactVal%>" maxlength="27">\n          <div class="ui-input-bg"></div>\n        </div>\n        <div class="op-col">\n          <a href="javascript:void(0);" class="jmod_add_contact_item">增加</a>\n          <%if(!isFirst){%>\n            <a href="javascript:void(0);" class="jmod_delete_contact_item">删除</a>\n          <%}%>\n        </div>\n        <span class="input-tips err hidden">您的输入有误</span>\n      </div>\n    </div>\n  </div>\n'
    }).call(a, i(7))
}, function (e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {value: !0});
    a.STATE = {DRAFT: 4, CHECKING: 1, CHECK_SUCCESS: 2, CHECK_FAILED: 3, OFF_LINE: 5}, a.CMD = {
        SAVE: "save",
        AUDIT: "audit"
    }
}, function (e, a) {
    e.exports = _cfCommon.formValidate
}, function (e, a, i) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function n(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(a, "__esModule", {value: !0});
    var t = function () {
        function e(e, a) {
            for (var i = 0; i < a.length; i++) {
                var s = a[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }

        return function (a, i, s) {
            return i && e(a.prototype, i), s && e(a, s), a
        }
    }(), c = i(26), l = i(5), o = s(l), d = "/seller/submitdone", r = function () {
        function e(a) {
            var i = a.registerModel, s = a.registerView;
            n(this, e), this.registerModel = i, this.registerView = s
        }

        return t(e, [{
            key: "init", value: function () {
                var e = this, a = this.registerModel.getStore(), i = a.corpInfo;
                this.registerView.renderTips(i), this.registerView.renderBasicInfo(a), this.registerView.renderRegisterInfo(i), this.registerView.renderServiceInfo(a), this.registerView.renderContactInfo(i), this.registerView.renderGuardInfo(i), this.registerView.renderAgreeProtocol(i), this.registerView.renderSubmitBar(i), this.registerView.initUIComponent(), this.registerView.bindFormValidate(), this.registerView.setFileUpload("c_logo", "zcCorpLogo"), this.registerView.setFileUpload("c_license_pic", "zcLicensePic"), this.registerView.setFileUpload("c_tc_pic", "zcTCPic"), this.registerView.setFileUpload("c_turnover_pic", "zcTurnoverPic"), this.registerView.setFileUpload("c_idcard_front_pic", "zcIDCard"), this.registerView.setFileUpload("c_idcard_back_pic", "zcIDCard"), this.registerView.bindSaveAndCommit(function (a, s) {
                    e.registerModel.submitForm(s, function () {
                        a === c.CMD.AUDIT ? (o["default"].showToast("success", "提交成功。"), parseInt(i.c_profile_status) !== c.STATE.CHECK_SUCCESS && (window.location.href = d)) : o["default"].showToast("success", "保存成功。")
                    })
                })
            }
        }]), e
    }();
    a["default"] = r
}, function (e, a) {
    e.exports = _cfCommon.timeStat
}]);
//# sourceMappingURL=main.entry.js.map