(function() {
    try {
        (function() {
            function Wg(a, c, b) {
                function d(p) {
                    return function() {
                        var r = b.o("scip", "") + p;
                        b.C("scip", r)
                    }
                }
                var e, f = Xc(a, "ci");
                f = zb(a, f);
                var g = af(a),
                    h = aa(a)(gb),
                    k = ["sync.cook.int"],
                    l = dl(g.o("sci"));
                if (!l || 1440 < h - l) {
                    b.C("scip", "0");
                    var m = d("a"),
                        q = bf(a, c);
                    return f({
                        na: k,
                        G: (e = {}, e.duid = q, e.hid = "" + Vb(a), e)
                    }, ["https://an.yandex.ru/sync_cookie"], {
                        tb: 1500,
                        jd: !0
                    }).then(function(p) {
                        p = n(p.Qb, "CookieMatchUrls");
                        ba(p) || (p = []);
                        Ka(p) ? d("1")() : m();
                        var r = Xc(a, "c"),
                            t = zb(a, r);
                        p = y(function(z, D) {
                            var M = "" + z + (Wb(z, "?") ? "&" :
                                "?") + "duid=" + q;
                            return t({
                                na: k
                            }, ["https://" + M], {
                                tb: 1500
                            }).then(B, u(d("b"), d("" + D)))
                        }, W(Fa, p));
                        return K.all(p)
                    }, m).then(function() {
                        var p = b.o("scip");
                        !p || Wb(p, "a") || Wb(p, "b") || (g.C("sci", h), d("2")())
                    }, B)
                }
                return K.resolve()
            }

            function el(a, c, b) {
                var d, e, f = za(a, c);
                f && (mb(b) ? Ka(ca(b)) ? (a = Xg(b)) && Ka(a) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = a, e), d)) : Ab(a, c, "First party params error. Empty object.")() : Ab(a, c, "First party params error. Not an object.")())
            }

            function Xg(a) {
                a = Aa(a);
                return L(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = mb(e);
                    if (!Fa(e) && !f) return c;
                    e = f ? Xg(e) : e;
                    Ka(e) && c.push([d, e]);
                    return c
                }, [], a)
            }

            function Yg(a, c, b) {
                void 0 === b && (b = 0);
                c = Aa(c);
                c = L(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = mb(g);
                    if (!Fa(g) && !h) return d;
                    h ? g = Yg(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = fl(g) : "email" === f && (g = gl(g)), g = Zg(a, g)) : g = K.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function gl(a) {
                var c = nb(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                $g(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(cf, "-") : "gmail.com" === c && (b = b.replace(cf, ""));
                a = df(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function fl(a) {
                a = Kb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function Zg(a, c) {
                return new K(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(","); - 1 !== k ? b(h.substring(k +
                                1)) : d(Dc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function hl(a, c) {
                function b() {
                    m.hidden ? x(g.style, Yc(["top", "right", "left", "background"], "initial")) : x(g.style, Yc(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    r.parentNode || (q.appendChild(k), q.appendChild(r));
                    m.hidden = !m.hidden;
                    q.hidden = !q.hidden;
                    p.hidden = !p.hidden
                }

                function d(M) {
                    var ea = f("div");
                    x(ea.style, kc("2px", "18px"), Ec, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    ea.style.transform = "rotate(" + M + "deg)";
                    return ea
                }

                function e(M, ea, La, ob, Xb) {
                    var Fc = f("div");
                    x(Fc.style, kc(ea + "px", La + "px"), Ec, {
                        left: M + "px",
                        bottom: 0,
                        background: ob,
                        borderTopLeftRadius: Xb
                    });
                    return Fc
                }
                var f = Wa(a);
                if (!f) return B;
                var g = f("div");
                g.classList.add("__ym_wv_ign");
                x(g.style, ah, {
                    bottom: "0",
                    width: "100%",
                    zIndex: "999999999"
                });
                var h = f("div");
                x(h.style, kc("24px"), Ec, ef, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var k = f("div");
                x(k.style, {
                        border: "2px solid transparent",
                        animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                    },
                    ef, Ec, kc("48px"), Yc(["top", "left"], "calc(50% - 24px)"), Yc(["borderTopColor", "borderLeftColor"], "#fc0"));
                var l = f("style");
                l.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                k.appendChild(l);
                var m = f("div");
                m.id = "__ym_wv_ign__opener";
                x(m.style, kc("46px", "48px"), ah, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var q = f("div");
                x(q.style, Ec,
                    Yc(["top", "right", "bottom"], "0"), {
                        width: "600px",
                        background: "#fff"
                    });
                var p = f("div");
                p.id = "__ym_wv_ign__closer";
                x(p.style, kc("32px"), Ec, ef, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                l = f("iframe");
                l.src = "https://metrika.yandex.ru/widget/iframe-check";
                var r = f("iframe");
                x(r.style, kc("100%"), {
                    border: "none"
                });
                r.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                q.hidden = !0;
                p.hidden = !0;
                p.appendChild(d(45));
                p.appendChild(d(-45));
                q.appendChild(l);
                h.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                h.appendChild(e(8, 9, 16, "#04acff", "3px"));
                h.appendChild(e(17, 7, 24, "#ffdd13"));
                m.appendChild(h);
                g.appendChild(q);
                g.appendChild(p);
                var t = ["click", "touchstart"];
                h = ha(a);
                var z = a.document.body;
                l = [h.D(m, t, b), h.D(p, t, b), h.D(l, ["load"], G([Ga, [C(q.removeChild, q, l), C(g.appendChild, g, m)]], A)), h.D(r, ["load"], C(q.removeChild, q, k)), C(z.removeChild, z, g)];
                var D = G([Ga, l], A);
                l.push(h.D(a, ["securitypolicyviolation"], function(M) {
                    (M = n(M, "blockedURI")) && 0 <= M.indexOf("https://metrika.yandex.ru") && D()
                }));
                z.appendChild(g);
                return D
            }

            function Yc(a, c) {
                return L(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function kc(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function il(a, c, b) {
                var d, e = bh(a, c),
                    f = S(a);
                f = Ld(f.protocol + "//" + f.hostname + f.pathname);
                c = Md(a, c);
                var g = "";
                do g += Ra(a); while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" +
                    e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function jl(a, c, b, d) {
                a = n(d, "data");
                if (Fa(a)) {
                    var e = a.split("*");
                    a = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e)
                }
            }

            function kl(a, c, b, d) {
                d = n(d, "target");
                (d = Yb("button,input", a, d)) && "submit" === d.type && (d = ch(a, d)) && (b.push(d), X(a, G([!1, a, c, b, d], dh), 300))
            }

            function dh(a, c, b, d, e) {
                var f = Lb(c)(e, d),
                    g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = eh(c, e), a = "?" + Zc(a), d = G([c, b, "Form goal. Counter " + b.id + ". Form: " +
                    a + "."
                ], fh), Nd(c, b, "form", d)(a)
            }

            function fh(a, c, b) {
                return ll(a, c).then(function(d) {
                    d && Ab(a, c, b)()
                })
            }

            function ml(a) {
                a = nl(a);
                return ba(a) ? J("x", a) : a
            }

            function ol(a) {
                return J("x", pl(a) || [])
            }

            function pl(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = C(c, a.speechSynthesis);
                return lc(function(b) {
                    return y(v(b, n), ql)
                }, a())
            }

            function rl(a) {
                if (a = sl(a)) try {
                    for (var c = [], b = 0; b < gh.length; b += 1) {
                        var d = a(gh[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? J("x", e) : ""
            }

            function tl(a) {
                return (a = ul(a)) ?
                    u(vl, mc(N), cb(G(["", ["matches", "media"]], wl)), v("x", J))(a) : ""
            }

            function wl(a, c, b) {
                return J("x", y(u(N, ma("concat", "" + a), v(b, n)), c))
            }

            function xl(a, c) {
                var b = c.jh;
                if (!yl(a, b)) return "";
                var d = [];
                a: {
                    var e = zl(a, b);
                    try {
                        var f = G(e, u)()();
                        break a
                    } catch (D) {
                        if ("ccf" === D.message) {
                            f = null;
                            break a
                        }
                        pb(D)
                    }
                    f = void 0
                }
                if (Na(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (D) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = Ha(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (D) {
                    k = []
                }
                k = J(";", k);
                f = ff(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = ff(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    q = b.getParameter(b.GREEN_BITS),
                    p = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (p) {
                    var r = b.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r &&
                        (r = 2)
                }
                r = {
                    pk: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": q,
                    "webgl max anisotropy": p ? r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": ff(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                gf(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var z = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (D) {}
                    z = {}
                }
                gf(d, z);
                if (!b.getShaderPrecisionFormat) return J("~", d);
                gf(d, Al(b));
                return J("~", d)
            }

            function gf(a, c, b) {
                void 0 === b && (b = ":");
                A(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Aa(c))
            }

            function Bl(a) {
                var c = Cl(a);
                return c ? L(function(b, d, e) {
                    d = "" + (e + 1);
                    var f = c.supportsVersion;
                    return U(f) ? f.call(c, e + 1) ? b + d : b + "0" : b
                }, "", Dl(19)) + c.canMakePayments() : ""
            }

            function Cl(a) {
                var c = n(a, "ApplePaySession"),
                    b = S(a).protocol;
                return !c || "https:" !== b || Mb(a) ? "" : c
            }

            function El(a, c) {
                var b = a.document;
                if (H(b.readyState, ["interactive", "complete"])) Nb(a,
                    c);
                else {
                    var d = ha(a),
                        e = d.D,
                        f = d.Wb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function Fl(a, c) {
                var b = Gl(a),
                    d = ta(a, "r", c),
                    e = E(a, "rts.p");
                return pa(a, c, C(L, null, function(f, g) {
                    var h = {
                        id: g.rh,
                        $: g.$
                    };
                    h = d({
                        ba: g.gj,
                        J: wa(g.fh),
                        G: g.O,
                        Rb: g.Rb
                    }, h, g.mj)["catch"](e);
                    return f.then(v(h, N))
                }, K.resolve(""), b))["catch"](e)
            }

            function hh(a, c, b) {
                c = Gc(a, void 0, c);
                c = ih(a, c.o("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c,
                        "phones") || [];
                return d && e && g ? Hl(a, b.hc, {
                    Ag: Il
                }).ag(g).then(function(h) {
                    return Jl(b, {
                        Bb: d,
                        Lb: e,
                        qg: f
                    }, h.ia, g, h.ta)
                })["catch"](function() {}) : K.resolve()
            }

            function Il(a, c, b) {
                a = Kl(b.Wc);
                if ("href" === b.ze) {
                    var d = b.pb;
                    c = d.href;
                    b = c.replace(a, b.Sa);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.pb.textContent) || void 0 === d ? void 0 : d.replace(a, b.Sa)) && a !== b.pb.textContent) return b.pb.textContent = a, !0;
                return !1
            }

            function Jl(a, c, b, d, e) {
                var f;
                c.Bb && c.Lb && (c.Bb === a.Bb && c.Lb === a.Lb || x(a, c, {
                    ia: {},
                    ab: !0
                }), 0 < e && Xa(a.ta, [e]), A(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.ia[l] && a.ia[l][g] ? a.ia[l][g] : 0);
                    x(a.ia, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), A(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.ia[l] ? a.ia[l][g] : 0);
                    x(a.ia, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Lf && (a.ab || b.length) && ((c = za(a.l, a.hc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Bb, f.orderId = a.Lb, f.service_id = a.qg, f.phones = a.ia, f.performance = a.ta, f)), a.ab = !1))
            }

            function Ll(a, c) {
                try {
                    var b = c.origin
                } catch (e) {}
                if (b) {
                    var d = Ma(u(Oa, ua(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                        /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/
                    ]);
                    b = H(b.replace(/\/?$/, "/"), Ml);
                    if (d || b) d = Bb(a, c.data), "appendremote" === n(d, "action") && Nl(a, c, d)
                }
            }

            function jh(a, c) {
                var b, d, e, f, g = c.data;
                g = void 0 === g ? "" : g;
                var h = c.id;
                h = void 0 === h ? "" : h;
                var k = O(a),
                    l = {};
                l.getCachedTags = kh;
                l.form = (b = {}, b.closest = v(a, ch), b.select = Ol, b.getData = v(a, eh), b);
                l.button = (d = {}, d.closest = v(a, lh), d.select = mh, d.getData = v(a, nh), d);
                l.phone = (e = {}, e.hidePhones = G([a, null, [g]], oh), e);
                l.status = (f = {}, f.checkStatus =
                    G([a, Ba(h)], Pl), f);
                k.C("_u", l);
                b = c.lang;
                b = void 0 === b ? "" : b;
                d = c.appVersion;
                d = void 0 === d ? "" : d;
                e = c.fileId;
                e = void 0 === e ? "" : e;
                f = c.beta;
                f = void 0 === f ? !1 : f;
                d = J(".", u(cb(u(N, Ba)), mc(Boolean))(d.split(".")));
                H(e, Ql) && H(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"), b = ph(b) ? b : "") : b = "";
                b && Hc(a, {
                    src: b
                })
            }

            function Rl(a, c) {
                var b = Wa(a);
                if (b) {
                    b = b("div");
                    var d = Zb(a);
                    if (d) {
                        b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var e = b.firstChild;
                        e.onload = function() {
                            Hc(e.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = e;
                        d.appendChild(b);
                        b.removeChild(e);
                        var f = null;
                        b.attachShadow ? f = b.attachShadow({
                            mode: "open"
                        }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
                        f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
                    }
                }
            }

            function Pl(a) {
                var c, b = qh(a);
                a = O(a).o("getCounters", Od)();
                a = y(Q("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && H(b, a), c
            }

            function oh(a, c, b) {
                var d;
                c = rh(a,
                    c, {
                        Ag: Sl,
                        Oi: (d = {}, d.href = !0, d)
                    });
                b = W(Boolean, y(function(f) {
                    return "*" === f ? f : Kb(f)
                }, b));
                var e = y(u(N, ma("concat", [""]), Tl("reverse"), Ga), b);
                b = $c(a);
                d = sh(a, b, 1E3);
                c = C(c.ag, c, e, !1);
                d.D(c);
                Ul(a, b);
                th(a, b);
                c()
            }

            function Sl(a, c, b) {
                var d = Wa(a),
                    e = b.pb,
                    f = b.Wc,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.ze && h && d && g) {
                    b = d("small");
                    uh(b);
                    var k = h.split(""),
                        l = vh(h).length;
                    A(ma("appendChild", b), L(function(m, q) {
                        var p = m.ha,
                            r = m.Hg,
                            t = d("small");
                        t.innerHTML = q;
                        var z = Vl.test(q);
                        uh(t);
                        z && (t.style.opacity = "" + (l - r - 1) / l);
                        p.push(t);
                        return {
                            ha: p,
                            Hg: r + (z ? 1 : 0)
                        }
                    }, {
                        ha: [],
                        Hg: 0
                    }, k).ha);
                    Wl(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function Wl(a, c, b, d) {
                function e() {
                    A(v(["style", "opacity", ""], Ic), na(b.childNodes));
                    if (c) {
                        var k = za(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ha(a),
                    g = B,
                    h = B;
                g = f.D(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = X(a, e, 200, "ph.h.e");
                        (h || B)();
                        h = f.D(b, ["mouseleave"], function(m) {
                            m.target === b && ja(a, l)
                        })
                    }
                })
            }

            function th(a, c) {
                nc(a)(Ya(B, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Ca("MutationObserver", a.MutationObserver) && (new MutationObserver(c.R)).observe(d, e)
                }))
            }

            function Ul(a, c) {
                return ha(a).D(a, ["load"], c.R)
            }

            function rh(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.Wc]) || void 0 === l ? void 0 : l.fd : null
                }
                var e, f = b.Ag;
                b = b.Oi;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    ag: function(k) {
                        return new K(function(l, m) {
                            k && k.length || m();
                            h = wh()(k);
                            nc(a)(Ya(v({
                                ia: [],
                                ta: 0
                            }, l), function() {
                                var q = aa(a),
                                    p = q(Y),
                                    r = g.href ? Xl(a, h) : [],
                                    t = g.text ?
                                    xh(a, h) : [];
                                l({
                                    ia: W(ba, W(Boolean, y(d, r.concat(t)))),
                                    ta: q(Y) - p
                                })
                            }))
                        })
                    }
                }
            }

            function Xl(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = yh(c);
                return L(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (q) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Kb(k) : "",
                            m = c[l];
                        V(m) || !l && "*" !== m.fd[0] || (e.push({
                            ze: "href",
                            pb: f,
                            Wc: l,
                            Sa: zh(k, c[l].Sa),
                            Aj: g
                        }), g = Kb(h.slice(4)), l = wh()([l ? m.fd : [g, ""]]), e.push.apply(e, xh(a, l, f)))
                    }
                    return e
                }, [], na(b.querySelectorAll("a")))
            }

            function xh(a, c, b) {
                void 0 ===
                    b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = yh(c);
                hf(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = W(Boolean, e.exec(f.textContent || "") || []);
                        A(function(h) {
                            var k = Kb(h);
                            V(c[k]) || d.push({
                                ze: "text",
                                pb: f,
                                Wc: k,
                                Sa: zh(h, c[k].Sa),
                                Aj: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function wh() {
                return Jc(function(a, c) {
                    var b = y(Kb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        Sa: b,
                        fd: c
                    };
                    var e = Ah(d);
                    e !== d && (a[e] = {
                        Sa: Ah(b),
                        fd: c
                    });
                    return a
                }, {})
            }

            function zh(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return J("", b) + c.slice(f + 1)
            }

            function Ah(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function yh(a) {
                return new RegExp("(?:" + J("|", y(Bh, ca(a))) + ")")
            }

            function eh(a, c, b) {
                return Ch(a, c, ["i", "n", "p"], void 0, b)
            }

            function Yl(a, c) {
                var b = Dh(a),
                    d = P(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.wi = !0;
                if (b = e.rg) d = Eh(a), A(d, b)
            }

            function Zl(a, c, b, d) {
                var e;
                if (a = za(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    H(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.ng((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function $l(a) {
                var c = B,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    U(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    U(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        th: b,
                        Wa: c,
                        O: 1 === d.length ? a[0] : Ic(d)
                    }
                }
            }

            function am(a, c) {
                var b = Pa(a);
                if ("" !== b.o("cc")) return 0;
                var d = v("cc", b.C);
                d(0);
                var e = aa(a),
                    f = O(a);
                f = u(Q(Sa({
                    Qb: 1
                }) + ".c"), ad(function(g) {
                    d(g + "&" + e(gb))
                }), v("cc", f.C));
                ta(a, "6", c)({}).then(f)["catch"](u(ad(function() {
                    var g = e(gb);
                    b.C("cc", "&" + g)
                }), E(a, "cc")))
            }

            function Pd(a, c) {
                if (!c) return !1;
                var b = S(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function bm(a, c) {
                return pa(a, c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        xh: cm(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function dm(a, c, b, d, e) {
                b = jf(a.document.body, b);
                d = jf(a.document.body, d);
                H(e.target, [b, d]) && kf(a, c)
            }

            function Fh(a, c, b, d) {
                (b = em(a, d, b)) && kf(a, c, b)
            }

            function Gh(a, c) {
                var b = Hh(a, c);
                return fm(a, b)
            }

            function Hh(a, c) {
                var b = jf(a.document.body, c);
                return b ? gm(a, b) : ""
            }

            function kf(a, c, b) {
                if (c = za(a, c)) a = Ic(["dr", b || "" + Ra(a, 10, 99)]), c.params(Ic(["__ym", a]))
            }

            function jf(a, c) {
                var b = null;
                try {
                    b = c ? Kc(c, a) : b
                } catch (d) {}
                return b
            }

            function Ih(a) {
                a = na(Jh(a));
                return y(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Kh("0", 8, c)
                }, a)
            }

            function gm(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                hf(a, c, function(e) {
                    if (e.nodeType ===
                        d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function hm(a, c, b) {
                a = xa(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    rc: b
                })
            }

            function im(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(jm, d + "." + b.rc)) && (c && H(b, km) || a("ym-" + b + "-" + d))
                }
            }

            function Qd(a, c, b) {
                return function(d) {
                    var e, f, g = za(c, b);
                    g && lm(a, d, c) && (g = C(g.params, g), (d = lf(a, d, "goods")) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d],
                        f), e)))
                }
            }

            function mm(a, c, b, d) {
                var e, f;
                c = n(d, "ecommerce") || {};
                var g = n(d, "event") || "";
                c = (g = Lh[g]) ? lf(g, c, "items") : void 0;
                if (!c) a: {
                    c = d;!ba(d) && Rd(a, Ka(d)) && (c = xa(c));
                    if (ba(c) && (a = Lh[c[1]], "event" === c[0] && a)) {
                        c = lf(a, c[2], "items");
                        break a
                    }
                    c = void 0
                }(d = c || nm(d)) && b && b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))
            }

            function nm(a) {
                var c = n(a, "ecommerce") || {};
                a = W(oc(om), ca(c));
                a = L(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a);
                return ca(a).length ? a : void 0
            }

            function lm(a, c, b) {
                var d = !1,
                    e = "";
                if (!mb(c)) return qb(b, "", "Ecommerce data should be an object"),
                    d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ba(f) && f.length ? (d = mf(function(g) {
                            return mb(g) && (Fa(g.id) || Rd(b, g.id) || Fa(g.name))
                        }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        Rd(b, c.id) || Fa(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                qb(b, "", e);
                return d
            }

            function lf(a, c, b) {
                var d, e;
                if (c) {
                    var f = c.purchase || c;
                    c = ca(f);
                    var g = f[b];
                    if (g) {
                        var h =
                            (d = {}, d[a] = (e = {}, e.products = y(pm, g), e), d);
                        1 < c.length && (h[a].actionField = L(function(k, l) {
                            if (l === b) return k;
                            if ("currency" === l) return h.currencyCode = f.currency, k;
                            k[nf[l] || l] = f[l];
                            return k
                        }, {}, c));
                        return h
                    }
                }
            }

            function pm(a) {
                var c = {};
                A(function(b) {
                    var d = nf[b] || b; - 1 !== b.indexOf("item_category") ? (d = nf.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
                }, ca(a));
                return c
            }

            function qm(a, c) {
                var b = Pa(a),
                    d = "wv2rf:" + P(c),
                    e = c.zb,
                    f = Sd(a),
                    g = b.o(d),
                    h = c.Lj;
                return V(f) || Na(g) ? ua(function(k, l) {
                    pa(a, c, function(m) {
                        var q =
                            n(m, "settings.webvisor.forms");
                        q = !n(m, "settings.x3") && q;
                        f = Sd(a) || n(m, "settings.eu");
                        b.C(d, bd(q));
                        l({
                            zb: e,
                            Jf: !!f,
                            Zf: q,
                            Cg: h
                        })
                    })
                }) : of ({
                    zb: e,
                    Jf: f,
                    Zf: !!Ba(g),
                    Cg: h
                })
            }

            function rm() {
                var a = L(function(c, b) {
                    c[b[0]] = {
                        pd: 0,
                        gh: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    Zg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: L(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.pd * e.gh)
                            }, 0, ca(a))
                        }
                    },
                    Vi: function(c) {
                        c && (c = a[c.data.type]) && (c.pd += 1)
                    }
                }
            }

            function sm(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c = a.data,
                            b = c.za,
                            d = c.cd,
                            e = c.content;
                        delete c.za;
                        delete c.cd;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                M: a.M || 0,
                                content: e,
                                za: b,
                                cd: d,
                                Z: c
                            }
                        };
                        a.L && (c.L = a.L);
                        return c;
                    case "event":
                        a: {
                            c = {
                                type: "event",
                                L: a.L,
                                data: {
                                    M: a.M,
                                    type: a.event,
                                    Z: {}
                                }
                            };b = x({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    c.data.Z = {
                                        Jg: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        Lg: b,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    c.data.Z = b.Jc;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    c.data.Z = b;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    c.data.target = b.target;
                                    c.data.Z = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    c.data.target = b.target;
                                    delete b.target;
                                    c.data.Z = b;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        L: a.L,
                                        data: {
                                            M: a.M,
                                            Z: {
                                                Ca: [{
                                                    od: [{
                                                        id: b.target,
                                                        yb: {
                                                            src: {
                                                                Nc: "",
                                                                n: b.value,
                                                                r: !1
                                                            }
                                                        },
                                                        xa: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = c
                        }
                        break;
                    case "mutation":
                        return tm(a)
                }
                return a
            }

            function tm(a) {
                var c = x({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                kc: {
                                    Nc: "",
                                    n: c.value
                                },
                                xa: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            od: [{
                                id: c.target,
                                yb: L(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        Nc: "",
                                        n: f,
                                        r: ka(f)
                                    };
                                    return d
                                }, {}, Aa(c.attributes)),
                                xa: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            Ve: y(function(d) {
                                    return {
                                        id: d,
                                        xa: c.index
                                    }
                                },
                                c.ha)
                        }];
                        break;
                    case "ad":
                        b = [{
                            Ye: y(function(d) {
                                return {
                                    id: d.id,
                                    Rf: d.name,
                                    Sf: d.Qf,
                                    le: d.parent,
                                    oe: d.qe,
                                    de: d.next,
                                    yb: d.attributes,
                                    xa: c.index,
                                    kc: d.content,
                                    Ma: d.hidden
                                }
                            }, c.ha)
                        }]
                }
                return {
                    type: "mutation",
                    L: a.L,
                    data: {
                        M: a.M,
                        Z: {
                            Ca: b,
                            index: c.index
                        }
                    }
                }
            }

            function um(a) {
                return {
                    Sh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    Uh: function() {
                        if (a.document.doctype) {
                            var c = x({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " +
                                J("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    },
                    gi: function() {
                        try {
                            if (!a.sessionStorage) return null;
                            var c = a.sessionStorage.getItem("__vw_tab_guid"),
                                b = !1;
                            try {
                                var d = a.opener ? a.opener.sessionStorage : null;
                                b = !!d && c === d.getItem("__vw_tab_guid")
                            } catch (e) {
                                b = !0
                            }
                            if (!c || b) c = Mh(), a.sessionStorage.setItem("__vw_tab_guid", c);
                            return c
                        } catch (e) {
                            return null
                        }
                    }
                }
            }

            function vm(a, c, b) {
                var d = cd(a),
                    e = ha(a),
                    f = Mb(a),
                    g = c.Id(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = v(d,
                        N);
                if (h) {
                    if (!g) return X(a, C(d.R, d, "i", {
                        qa: !1
                    }), 10), {
                        Hd: k,
                        kg: B,
                        stop: B
                    };
                    pb(Za())
                }
                d.D(["sr"], function(r) {
                    var t, z = Nh(a, r.source);
                    z && pf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.oa().Y(z), t))
                });
                d.D(["sd"], function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || Nh(a, r)) && d.R("sdr", {
                        data: t.data,
                        M: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        q = function() {
                            var r;
                            pf(a, a.parent, (r = {}, r.type = "sr", r));
                            m = X(a, q, 100, "if.i")
                        };
                    q();
                    var p = function(r) {
                        d.ea(["\u043d"], p);
                        ja(a, m);
                        var t = Lc(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId ||
                            "about:blank" !== S(a).host && !H(t, b) || (l = !0, d.R("i", {
                                M: r.data.frameId,
                                qa: !0
                            }))
                    };
                    d.D(["\u043d"], p);
                    X(a, function() {
                        d.ea(["\u043d"], p);
                        ja(a, m);
                        l || (l = !0, d.R("i", {
                            qa: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.D(a, ["message"], function(r) {
                    var t = Bb(a, r.data);
                    t && t.type && H(t.type, wm) && d.R(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    Hd: k,
                    kg: function(r) {
                        var t;
                        return pf(a, a.parent, (t = {}, t.frameId = c.Id(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function Nh(a, c) {
                try {
                    return db(u(Q("contentWindow"), ia(c)), na(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function pf(a, c, b) {
                a = hb(a, b);
                c.postMessage(a, "*")
            }

            function nc(a, c) {
                function b(e) {
                    n(c, d) ? e() : X(a, v(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return ua(function(e, f) {
                    b(f)
                })
            }

            function Mh() {
                return $b() + $b() + "-" + $b() + "-" + $b() + "-" + $b() + "-" + $b() + $b() + $b()
            }

            function $b() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function xm(a, c) {
                if (Fa(c)) return c;
                var b = a.textContent;
                if (Fa(b)) return b;
                b = a.data;
                if (Fa(b)) return b;
                b = a.nodeValue;
                return Fa(b) ? b :
                    ""
            }

            function zm(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Da(c));
                var f = x(L(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, na(c.attributes)), d);
                x(f, Am(c, e, f));
                var g = (d = L(function(h, k) {
                    var l = k[0],
                        m = Td(a, c, l, k[1], b, e),
                        q = m.value;
                    ka(q) ? delete f[l] : f[l] = q;
                    return h || m.hb
                }, !1, Aa(f))) && dd(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    hb: d,
                    bh: f
                }
            }

            function Am(a, c, b) {
                var d = {};
                qf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function Td(a, c, b, d, e, f) {
                void 0 === f && (f = Da(c));
                var g = {
                    hb: !1,
                    value: d
                };
                if (qf(c)) "value" === b ? !ka(d) && "" !== d && (b = e.Jf, f = e.Zf, e = ed(a, c), f ? (b = fd(a, c, b), a = b.Td, c = b.Dd, b = b.kb, g.hb = !c && (e || a)) : (g.hb = e, b = !Ud(c)), b || e) && (g.value = J("", y(v("\u2022", N), ("" + d).split("")))) : "checked" === b && H((c.getAttribute("type") || "").toLowerCase(), Bm) ? g.value = c.checked ? "checked" : null : Cm.test(b) && rf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = ed(a, c)) ? (g.hb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value =
                    (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (H(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === df(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && H(b, ["src", "type"])) g.value = null;
                return g
            }

            function sf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function(e, f) {
                        return E(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function Oh(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? hf(a, c, ma("push", e), d) : Xa(e, Ph(a, c, d)));
                    A(b, e)
                }
            }

            function hf(a,
                c, b, d, e) {
                function f(g) {
                    return U(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (U(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !tf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: f
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Ph(a, c, b) {
                var d = [],
                    e = u(N, ma("push", d));
                U(b) ? (b = b(c), (ka(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g =
                            Ph(a, c[b]);
                        A(e, g)
                    }
                }
                return d
            }

            function Dm(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.vb) return K.resolve(B);
                var g = ta(a, "4", c),
                    h = {
                        G: {
                            "wv-type": "0"
                        },
                        J: wa()
                    };
                b = new Em(a, b, function(l, m, q) {
                    if (!g) return K.resolve();
                    m = "wv-data=" + Qh(l, !0);
                    for (var p = l.length, r = 0, t = 255, z = 255, D, M, ea; p;) {
                        D = 21 < p ? 21 : p;
                        p -= D;
                        do M = "string" === typeof l ? l.charCodeAt(r) : l[r], r += 1, 255 < M && (ea = M >> 8, M &= 255, M ^= ea), t += M, z += t; while (--D);
                        t = (t & 255) + (t >> 8);
                        z = (z & 255) + (z >> 8)
                    }
                    l = (t & 255) + (t >> 8) << 8 | (z & 255) + (z >> 8);
                    return g(x({}, h, {
                        ba: m,
                        G: {
                            "wv-check": 65535 ===
                                l ? 0 : l,
                            "wv-type": "0"
                        }
                    }), c, q)["catch"](E(a, "m.n.m.s"))
                });
                var k = Fm(a, b, d, e);
                return pa(a, c, function(l) {
                    l && O(a).C("isEU", n(l, "settings.eu"));
                    !uf(a) && k && Rh(a, l) && k.start();
                    return f
                })
            }

            function Fm(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ha(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = C(c.flush, c),
                    m = fa(function(r, t) {
                        E(a, "hfv." + r, function() {
                            try {
                                var z = t.type
                            } catch (D) {
                                return
                            }
                            z = H(z, d);
                            c.push(t, {
                                type: r
                            });
                            z && l()
                        })()
                    }),
                    q = E(a, "sfv", function() {
                        if (!vf(a)) {
                            var r = b(a),
                                t = Gm(a);
                            A(function(z) {
                                    f.push(g.D(z.target, [z.event], m(z.type)))
                                },
                                r);
                            A(function(z) {
                                f.push(g.D(z.target, [z.event], E(a, "hff." + z.type + "." + z.event, function(D) {
                                    A(ua({
                                        l: a,
                                        ja: D,
                                        flush: l
                                    }), z.N)
                                })))
                            }, t);
                            k = Sh(a, "form", e);
                            e.attachEvent && (r = Sh(a, "form *", e), A(function(z) {
                                f.push(g.D(z, ["submit"], m("form")))
                            }, k), A(function(z) {
                                wf(z) && f.push(g.D(z, ["change"], m("formInput")))
                            }, r));
                            A(function(z) {
                                var D = z.submit;
                                if (U(D) || "object" === typeof D && Hm.test("" + D)) z[h] = D, z.submit = E(a, "fv", function() {
                                    var M = {
                                        target: z,
                                        type: "submit"
                                    };
                                    m("document")(M);
                                    return z[h]()
                                })
                            }, k)
                        }
                    }),
                    p = E(a, "ufv", function() {
                        A(Ga,
                            f);
                        A(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: q,
                    stop: p
                }
            }

            function Im(a, c) {
                var b = W(function(e) {
                        return 0 < e.N.length
                    }, c),
                    d = Th({
                        target: a.document,
                        type: "document"
                    });
                return y(u(N, d, Jm(a)), b)
            }

            function Uh(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Qa] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        Vd(h) && !h[Qa] && Xa(d, pc(b, h))
                    }
                } else Xa(d, pc(b, c));
                return d
            }

            function xf(a) {
                if (gd) {
                    gd = !1;
                    var c = rb(a.l),
                        b = [];
                    eb(a.l, b, 15) ? a = [] : (T(b, c), a = b);
                    return a
                }
            }

            function Vh(a) {
                if (!gd) {
                    gd = !0;
                    a = rb(a.l);
                    var c = [];
                    Ob(c, 14);
                    T(c, a);
                    return c
                }
            }

            function Km(a, c, b) {
                var d = c[Qa];
                if (d) {
                    a: {
                        var e = rb(a),
                            f = c[Qa];
                        if (0 < f) {
                            var g = [];
                            c = yf(a, c);
                            var h = qc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Wf) {
                                h.Wf = k;
                                if (eb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[0]);
                                T(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (eb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[2]);
                                T(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Xa(b, a)
                }
                return d
            }

            function fd(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return {
                    kb: !1,
                    Dd: !1,
                    Td: !1
                };
                var d = Ud(c),
                    e = zf(c);
                a = Af(a, c) || b && e;
                return {
                    kb: !(d || !a),
                    Dd: d,
                    Td: e
                }
            }

            function Af(a, c) {
                return rf(a, c) || hd(a, c) ? !0 : ed(a, c)
            }

            function zf(a) {
                if (!a) return !1;
                var c = a.placeholder,
                    b = a.type;
                a = W(Wh, [a.className, a.id, a.name]);
                return b && H(b, Lm) || Ma(Oa(Mm), a) || Wh(c) && Nm.test(c)
            }

            function Wh(a) {
                return !!(a && 2 < a.length)
            }

            function qf(a) {
                try {
                    var c = Da(a);
                    if (H(c, Bf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || H(b.toLocaleLowerCase(), Om)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function Xh(a, c) {
                return c && rc("(ym-disable-submit|-metrika-noform)", c)
            }

            function Ud(a) {
                return a &&
                    rc("ym-record-keys", a)
            }

            function Pm(a, c) {
                return J("", y(function(b) {
                    return a.isNaN(b) ? Qm.test(b) ? (b = b.toUpperCase() === b ? Rm : Sm, String.fromCharCode(Ra(a, b[0], b[1]))) : b : "" + Ra(a, 0, 9)
                }, c.split("")))
            }

            function ed(a, c) {
                if (ka(c)) return !1;
                if (tf(c)) {
                    var b = c.parentNode;
                    return (ka(b) ? 0 : 11 === b.nodeType) ? !1 : ed(a, c.parentNode)
                }
                if (Tm.test(c.className)) return !0;
                b = Yh(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (Um.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Rh(a,
                c) {
                var b = ac(a),
                    d = b.o("visorc");
                H(d, ["w", "b"]) || (d = "");
                Zh(a) && $h(a, Wd, "visorc") && !Vm.test(sb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = O(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.C("visorc", d, 30);
                return "w" === d
            }

            function ai(a) {
                return !!db(function(c) {
                    return H(c.type, ["articleInfo", "publishersHeader"])
                }, a)
            }

            function bi(a) {
                var c = Cf(a).isEnabled,
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return mf(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
            }

            function Df(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return sc([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function Xd(a, c, b) {
                a = c(b);
                c = [B, 0, 0];
                var d = [0, c, c, void 0];
                return sc(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) tc(d, ib(l)), h = k(h), l & 2 && tc(d, ib(h[1])), tc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Ef]);
                            m.push([0, ib(l), tc]);
                            m.unshift([0, 0, Ff]);
                            f.push.apply(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var q = e[3],
                                p = e[4],
                                r = e[5],
                                t = ca(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, Ff],
                                [p, h[m], r],
                                [k, m, q],
                                [0, 0, Ef],
                                [0, ib(l), tc]
                            ], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, Ef]), m.push([0, ib(l), tc]), m.unshift([0, 0, Ff]), f.push.apply(f, m);
                    return d
                })
            }

            function Ff(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [B, 0, 0], a[2] = a[1]);
                tc(a, ib(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Ef(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [B, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function tc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function Gf(a) {
                return [
                    [385, a.Xg, ib],
                    [336, a.jj, Wm],
                    [272, a.$g, Xm],
                    [208, a.event, Ym],
                    [144, a.Mi, Zm],
                    [80, a.page, $m]
                ]
            }

            function an(a) {
                return [
                    [321, a.end, Pb],
                    [273, a.oh, bn],
                    [193, a.page, I],
                    [144, a.data, Gf],
                    [65, a.L, I]
                ]
            }

            function ci(a) {
                return [
                    [84, a.buffer, an]
                ]
            }

            function cn(a) {
                return [
                    [129, a.position, I],
                    [81, a.name, R]
                ]
            }

            function dn(a) {
                return [
                    [81, a.name, R]
                ]
            }

            function en(a) {
                return [
                    [81, a.name, R]
                ]
            }

            function Xm(a) {
                return [
                    [593, a.Pj,
                        R
                    ],
                    [532, a.pj, cn],
                    [449, a.af, I],
                    [401, a.ij, R],
                    [340, a.Dj, dn],
                    [276, a.dh, en],
                    [209, a.ej, R],
                    [145, a.fj, R],
                    [65, a.id, ib]
                ]
            }

            function fn(a) {
                return [
                    [513, a.af, I],
                    [489, a.Ji, id],
                    [385, a.gb, I],
                    [321, a.height, I],
                    [257, a.width, I],
                    [193, a.y, I],
                    [129, a.x, I],
                    [65, a.id, ib]
                ]
            }

            function Wm(a) {
                return [
                    [129, a.gb, I],
                    [84, a.ah, fn]
                ]
            }

            function gn(a) {
                return [
                    [81, a.hash, R]
                ]
            }

            function hn(a) {
                return [
                    [209, a.stack, R],
                    [145, a.Ch, R],
                    [81, a.code, R]
                ]
            }

            function jn(a) {
                return [
                    [193, a.orientation, I],
                    [129, a.height, I],
                    [65, a.width, I]
                ]
            }

            function kn(a) {
                return [
                    [84, a.Jc,
                        ln
                    ]
                ]
            }

            function ln(a) {
                return [
                    [273, a.Kc, R],
                    [193, a.Kf, Pb],
                    [145, a.key, R],
                    [65, a.id, I]
                ]
            }

            function mn(a) {
                return [
                    [145, a.value, R],
                    [81, a.Gk, R]
                ]
            }

            function nn(a) {
                return [
                    [149, a.$b, R],
                    [81, a.method, R]
                ]
            }

            function on(a) {
                return [
                    [257, a.mb, I],
                    [193, a.ob, I],
                    [129, a.height, I],
                    [65, a.width, I]
                ]
            }

            function pn(a) {
                return [
                    [144, a.Lg, di],
                    [80, a.Jg, di]
                ]
            }

            function di(a) {
                return [
                    [193, a.y, I],
                    [129, a.x, I],
                    [105, a.level, id]
                ]
            }

            function qn(a) {
                return [
                    [84, a.touches, rn]
                ]
            }

            function rn(a) {
                return [
                    [297, a.force, id],
                    [233, a.y, id],
                    [169, a.x, id],
                    [81, a.id, R]
                ]
            }

            function sn(a) {
                return [
                    [193,
                        a.hidden, Pb
                    ],
                    [129, a.checked, Pb],
                    [81, a.value, R]
                ]
            }

            function tn(a) {
                return [
                    [257, a.gf, I],
                    [193, a.sg, I],
                    [129, a.end, I],
                    [65, a.start, I]
                ]
            }

            function un() {
                return []
            }

            function vn(a) {
                return [
                    [193, a.page, Pb],
                    [129, a.y, I],
                    [65, a.x, I]
                ]
            }

            function wn(a) {
                return [
                    [129, a.y, I],
                    [65, a.x, I]
                ]
            }

            function xn(a) {
                return [
                    [84, a.Ca, yn]
                ]
            }

            function yn(a) {
                return [
                    [257, a.index, I],
                    [209, a.ke, R],
                    [145, a.style, R],
                    [65, a.target, I]
                ]
            }

            function Ym(a) {
                return [
                    [1168, a.xj, xn],
                    [1104, a.ui, gn],
                    [1040, a.Gh, hn],
                    [976, a.vh, jn],
                    [912, a.Gi, kn],
                    [848, a.lj, on],
                    [784, a.Zj, pn],
                    [720,
                        a.Hk, mn
                    ],
                    [656, a.Dk, nn],
                    [592, a.Ej, qn],
                    [528, a.kh, sn],
                    [464, a.sj, tn],
                    [400, a.Wj, un],
                    [336, a.qj, vn],
                    [272, a.Ki, wn],
                    [193, a.M, Yd],
                    [129, a.target, Yd],
                    [65, a.type, ib]
                ]
            }

            function Zm(a) {
                return [
                    [257, a.M, Yd],
                    [208, a.Z, zn],
                    [129, a.L, I],
                    [65, a.target, I]
                ]
            }

            function zn(a) {
                return [
                    [148, a.Ca, An],
                    [65, a.index, I]
                ]
            }

            function An(a) {
                return [
                    [276, a.d, Bn],
                    [212, a.od, Cn],
                    [148, a.Ye, Dn],
                    [84, a.Ve, En]
                ]
            }

            function Bn(a) {
                return [
                    [193, a.xa, I],
                    [144, a.kc, ei],
                    [65, a.id, I]
                ]
            }

            function Cn(a) {
                return [
                    [193, a.xa, I],
                    [146, a.yb, 81, R, 144, ei],
                    [65, a.id, I]
                ]
            }

            function ei(a) {
                return [
                    [193,
                        a.r, Pb
                    ],
                    [145, a.n, R],
                    [81, a.Nc, R]
                ]
            }

            function Dn(a) {
                return [
                    [641, a.Ma, Pb],
                    [577, a.xa, I],
                    [513, a.de, I],
                    [465, a.kc, R],
                    [402, a.yb, 81, R, 145, R],
                    [321, a.oe, I],
                    [273, a.Sf, R],
                    [193, a.le, I],
                    [145, a.Rf, R],
                    [65, a.id, I]
                ]
            }

            function En(a) {
                return [
                    [321, a.xa, I],
                    [257, a.le, I],
                    [193, a.de, I],
                    [129, a.oe, I],
                    [65, a.id, I]
                ]
            }

            function $m(a) {
                return [
                    [321, a.za, Fn],
                    [273, a.cd, R],
                    [193, a.M, Yd],
                    [148, a.content, Gn],
                    [80, a.Z, Hn]
                ]
            }

            function Gn(a) {
                return [
                    [513, a.hidden, Pb],
                    [449, a.qe, I],
                    [385, a.next, I],
                    [337, a.content, R],
                    [257, a.parent, I],
                    [210, a.attributes, 81, R,
                        145, R
                    ],
                    [145, a.name, R],
                    [65, a.id, I]
                ]
            }

            function Hn(a) {
                return [
                    [724, a.zk, In],
                    [656, a.location, Jn],
                    [592, a.viewport, fi],
                    [528, a.screen, fi],
                    [449, a.Cf, Pb],
                    [401, a.Ze, R],
                    [337, a.referrer, R],
                    [273, a.Dg, R],
                    [209, a.We, R],
                    [145, a.title, R],
                    [81, a.doctype, R]
                ]
            }

            function In(a) {
                return [
                    [133, a.scroll, I],
                    [65, a.target, I]
                ]
            }

            function Jn(a) {
                return [
                    [209, a.path, R],
                    [145, a.protocol, R],
                    [81, a.host, R]
                ]
            }

            function fi(a) {
                return [
                    [129, a.height, I],
                    [65, a.width, I]
                ]
            }

            function R(a) {
                var c = Kn({}, a, [], 0);
                return c ? [Ln, c, a] : [gi, 0, 0]
            }

            function bn(a) {
                return [Mn,
                    a.length, a
                ]
            }

            function Pb(a) {
                return [gi, 1, a ? 1 : 0]
            }

            function Fn(a) {
                a = hi(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [ii, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function id(a) {
                return [Nn, 4, a]
            }

            function Yd(a) {
                return ib((a << 1 ^ a >> 31) >>> 0)
            }

            function I(a) {
                return 0 > a ? [ii, 10, hi(a)] : ib(a)
            }

            function ib(a) {
                return [On, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function On(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function gi(a, c, b, d) {
                b[d] = c
            }

            function Mn(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function ji(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function Nn(a, c, b, d) {
                return Pn(a)(a,
                    c, b, d)
            }

            function Qn(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) jd(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) jd(2143289344, b, d);
                else if (3.4028234663852886E38 < c) jd((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) jd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    jd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function jd(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function ii(a, c,
                b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function hi(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function Zd(a) {
                return ba(a) ? y(Zd, a) : ka(a) || "object" !== typeof a ? a : L(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Rn[d];
                    V(f) && (f = d);
                    e = H(f, Sn) ? e : Zd(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, Aa(a))
            }

            function Tn(a, c) {
                return pa(a, c, function(b) {
                    var d =
                        O(a);
                    P(c);
                    if (!d.o("dSync", !1)) return d.C("dSync", !0), ki(a, b, {
                        Xa: c,
                        Uc: "s",
                        Yd: "ds",
                        zj: function(e, f, g) {
                            var h = e.Qb;
                            e = e.host;
                            if (n(h, "settings")) return pb(Za("ds.e"));
                            f = f(Y) - g;
                            g = e[1];
                            var k, l;
                            h = wa((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = S(a).href, l);
                            return ta(a, "S", li)({
                                J: h,
                                G: k
                            }, li)["catch"](E(a, "ds.rs"))
                        }
                    })
                })
            }

            function ki(a, c, b) {
                var d = b.Xa,
                    e = aa(a),
                    f = Un(a, c.userData, d),
                    g = Vn(a);
                return g.length ? Wn(a, e, f, c, b).then(function() {
                    return Xn(a, g, f, e, b)
                }, B) : K.resolve()
            }

            function Vn(a) {
                var c = kd(a);
                a = u(Hf,
                    oc(["iPhone", "iPad"]))(a);
                return c ? Yn : a ? Zn : []
            }

            function Xn(a, c, b, d, e) {
                var f = e.zj,
                    g = void 0 === f ? B : f,
                    h = e.Yd,
                    k = d(Y);
                return $n(a, c, e)(Ya(function(l) {
                    A(function(m) {
                        m && $d(a, h + ".s", m)
                    }, l);
                    l = d(gb);
                    b.C(h, l)
                }, function(l) {
                    b.C(h, d(gb));
                    g(l, d, k)
                }))
            }

            function Wn(a, c, b, d, e) {
                var f = e.Yd,
                    g = e.Xa;
                return new K(function(h, k) {
                    var l = b.o(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(gb) - l ? k() : ao(a) ? h(void 0) : mi(d) ? k() : h(bo(a, g))
                })
            }

            function $n(a, c, b) {
                var d = b.Uc,
                    e = b.data,
                    f = ta(a, d, b.Xa);
                a = x({}, ni);
                e && x(a.G, e);
                return co(y(function(g) {
                    return eo(f(ni,
                        y(function(h) {
                            var k = h[1],
                                l = h[2];
                            h = J("", y(function(m) {
                                return String.fromCharCode(m.charCodeAt(0) + 10)
                            }, h[0].split("")));
                            return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + fo[d]
                        }, g), {
                            Ig: !1,
                            oj: !0
                        }).then(function(h) {
                        return x({}, h, {
                            host: g[h.Rj]
                        })
                    }))
                }, c))
            }

            function Un(a, c, b) {
                var d = c || {},
                    e = ta(a, "u", b),
                    f = Pa(a);
                return {
                    o: function(g, h) {
                        return V(d[g]) ? f.o(g, h) : d[g]
                    },
                    C: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.C(g, l);
                        return e({
                            G: (k = {}, k.key = g, k.value = l, k)
                        }, [qa.Ja + "//mc.yandex.ru/user_storage_set"], {})["catch"](E(a, "u.d.s.s"))
                    }
                }
            }

            function oi(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    C(e, d)(hb(a, c))
                } catch (f) {} else pi = X(a, G([a, c, 2 * b], oi), b, "ai.d");
                return function() {
                    return ja(a, pi)
                }
            }

            function go(a, c, b) {
                if (b && (b = lh(a, b), b = nh(a, b))) {
                    b = "?" + Zc(b);
                    var d = Ab(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    Nd(a, c, "btn", d)(b)
                }
            }

            function ho(a, c) {
                var b;
                a((b = {}, b.clickmap = V(c) ? !0 : c, b))
            }

            function io(a, c, b, d, e) {
                var f;
                c = {
                    J: wa(),
                    G: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f)
                };
                d(c, e)["catch"](E(a, "c.s.c"))
            }

            function jo(a,
                c, b, d, e) {
                if (ld(a, "ymDisabledClickmap") || vf(a) || !c || !c.element) return !1;
                a = Da(c.element);
                if (e && !e(c.element, a) || H(c.button, [2, 3]) && "A" !== a || Ma(ia(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (ko(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function lo(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement :
                        b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function mo(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function qi(a, c) {
                var b = Zb(a),
                    d = If(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function no(a) {
                var c = E(a, "i.clch", oo);
                ha(a).D(a.document, ["click"], C(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = qa.Ja,
                        e = a.Ya[qa.dc],
                        f = !!e._informer;
                    e._informer = x({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || Hc(a, {
                        src: d +
                            "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function po(a) {
                var c = void 0;
                void 0 === c && (c = qo);
                var b = n(a, "navigator") || {};
                c = y(v(b, n), c);
                c = J("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = Ha(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Ka(e)
            }

            function ro(a) {
                try {
                    var c = Ka(a) ? a : [];
                    return J(",", [a.name, a.description, u(na, mc(Boolean), cb(so), md(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function so(a) {
                return J(",", [a.description, a.suffixes, a.type])
            }

            function Al(a) {
                return L(function(c, b) {
                    var d =
                        b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)
                    ],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function zl(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Ca("getParameter", c.getParameter) || Jf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(to);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Ei = 3;
                    b.Si = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || Jf();
                    return {
                        xe: d,
                        Vj: e,
                        Uj: b
                    }
                }, function(b) {
                    var d = b.xe,
                        e = b.Vj;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || Jf();
                    return x(b, {
                        Qh: d
                    })
                }, function(b) {
                    var d = b.xe,
                        e = b.Qh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.xe;
                    b = b.Uj;
                    d.Tj = c.getAttribLocation(d, "attrVertex");
                    d.Ui = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Nk);
                    c.vertexAttribPointer(d.Tj, b.Ei, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.Ui, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.Si);
                    return c.canvas
                }]
            }

            function yl(a, c) {
                if (!U(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Ca("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function ff(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function uo(a) {
                a = n(a, "screen") || {};
                return J("x", y(v(a, n), vo))
            }

            function ul(a) {
                var c = n(a, "matchMedia");
                if (c && Ca("matchMedia", c)) {
                    var b = ma("matchMedia", a);
                    return L(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, wo)
                }
            }

            function nl(a) {
                a = Wa(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = ma("canPlayType", a),
                        b = lc(function(d) {
                            return y(u(N, ma("concat",
                                d + "; codecs=")), xo)
                        }, ri);
                    return y(c, [].concat(ri, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function yo(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }

            function zo(a, c) {
                if (a.Jj()) {
                    var b = si(c);
                    if (b && !rc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.sh,
                            f = a.Xa,
                            g = a.sender,
                            h = a.Hh,
                            k = f.vc,
                            l = b.href,
                            m = nb(b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m = l === m ? "" : m;
                        if (rc("ym-external-link", b)) ae(d, f, {
                            url: l,
                            Hb: !0,
                            title: m,
                            sender: g
                        });
                        else {
                            k = k ? Lc(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + J("|",
                                y(Ao, h)) + ")$", "i");
                            var q = b.protocol + "//" + b.hostname + b.pathname;
                            h = ti.test(q) || ti.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            be(k) === be(b) ? h ? ae(d, f, {
                                url: l,
                                Gc: !0,
                                title: m,
                                sender: g
                            }) : m && e.C("il", nb(m).slice(0, 100)) : l && Bo.test(l) || ae(d, f, {
                                url: l,
                                Lc: !0,
                                Hb: !0,
                                Gc: h,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function ae(a, c, b, d) {
                var e, f = wa();
                b.Gc && f.C("dl", "1");
                b.Hb && f.C("ln", "1");
                f = {
                    J: f,
                    title: b.title,
                    Lc: !!b.Lc,
                    O: b.O,
                    G: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.vc || S(a).href, e)
                };
                e = "Link";
                b.Gc ? e = b.Hb ? "Ext link - File" : "File" : b.Hb &&
                    (e = "Ext link");
                c = b.sender(f, c).then(d || B).then(Ab(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
                return Mc(a, "cl.p.s", c, b.Wa || B, b.l)
            }

            function Co(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Do(a, c, b, d) {
                var e = S(a),
                    f = e.hostname;
                e = e.href;
                if (c = nd(c).url) a = Lc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function ce(a, c) {
                return function(b) {
                    ui(a, c, b)
                }
            }

            function Eo(a, c) {
                Kf(a)(function(b) {
                    delete b[c]
                })
            }

            function ui(a, c, b) {
                Kf(a)(function(d) {
                    d[c] =
                        x(d[c] || {}, b)
                })
            }

            function Fo(a, c) {
                var b = {};
                Kf(a)(function(d) {
                    b = d[c] || {}
                });
                return b
            }

            function Kf(a) {
                a = O(a);
                var c = a.o("dsjf") || ua({});
                a.Ta("dsjf", c);
                return c
            }

            function Mc(a, c, b, d, e) {
                var f = C(Lf, null, a, d, e);
                return b.then(f, function(g) {
                    f();
                    $d(a, c, g)
                })
            }

            function Ab(a, c, b, d) {
                return Mf(c) ? B : v(G(va([a, P(c)], d ? [b + ". Params:", d] : [b]), qb), Ga)
            }

            function qb() {
                var a = xa(arguments),
                    c = a.slice(2);
                de(a[0], a[1]).log.apply(qb, c)
            }

            function Cf(a) {
                var c = "1" === ac(a).o("debug"),
                    b = -1 < S(a).href.indexOf("_ym_debug=1");
                a = a._ym_debug;
                return {
                    ri: c,
                    Ai: a || b,
                    isEnabled: Ma(Boolean, [c, a, b])
                }
            }

            function Go(a, c, b) {
                var d;
                (d = tb[c]) || (d = Cb);
                d = y(Q("0"), d);
                d.unshift(Ho);
                d.unshift(Io);
                return y(u(Jo([a, c, b]), Ga), d)
            }

            function la(a, c, b) {
                tb[a] || (tb[a] = []);
                c && !ka(b) && vi(tb[a], c, b)
            }

            function vi(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function wi(a, c) {
                var b = S(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!Fa(c) || V(c)) return d;
                b = c.replace(xi, "");
                if (-1 !== b.search(Ko)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, J("/", d);
                return ""
            }

            function yi(a) {
                return {
                    ca: function(c, b) {
                        if (!c.J) return b();
                        var d = O(a).o("fid");
                        !zi && d && (ee(c, "fid", d), zi = !0);
                        return b()
                    }
                }
            }

            function Ai(a) {
                return {
                    ca: function(c, b) {
                        var d = c.J;
                        if (d) {
                            var e = O(a).o("adBlockEnabled");
                            e && d.C("adb", e)
                        }
                        b()
                    }
                }
            }

            function Io(a) {
                return {
                    ca: function(c,
                        b) {
                        uf(a) || b()
                    }
                }
            }

            function Lo(a) {
                a = Mo(a);
                return No[a] || a
            }

            function Oo(a) {
                a = Bi(a);
                return Po[a] || "ru"
            }

            function Ho(a, c, b) {
                return {
                    ca: function(d, e) {
                        Qo(a, d, b, e)
                    }
                }
            }

            function Qo(a, c, b, d) {
                var e = c.J;
                if (b.Xj || !e) d();
                else {
                    var f = fe(a),
                        g = Gc(a, "");
                    d = u(function() {
                        var r = Ci(f);
                        r = "" + r + Ro(r, g);
                        e.C("gdpr", r);
                        ee(c, "gdpr", r)
                    }, d);
                    if (3 === b.id) d();
                    else {
                        var h = O(a),
                            k = h.o("f1");
                        if (k) k(d);
                        else if (k = (k = Ci(f)) ? y(v(ge, n), k.split(",")) : [], Di(k)) d();
                        else {
                            var l = he(a),
                                m = S(a),
                                q = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            m = g.o("gdpr");
                            g.o("yandex_login") ? (k.push("13"), g.C("gdpr", Nc, 525600)) : l ? H(m, bc) ? m === Nf ? k.push("12") : k.push("3") : Of(a) || od(a) ? k.push("17") : So(a) && k.push("28") : k.push("14");
                            var p = v(f, To);
                            Di(k) ? (A(p, k), d()) : (ie.push(d), h.C("f1", function(r, t) {
                                var z = 0;
                                if (t) {
                                    var D = hb(a, t) || "";
                                    z += D.length
                                }
                                ie.push(r);
                                1E6 >= z && ie.push(r)
                            }), (0, Pf[0])(a).then(Q("params.eu")).then(function(r) {
                                if (r || q) {
                                    g.C("gdpr_popup", Nf);
                                    Uo(a, b);
                                    if (Mb(a)) return Vo(a, p, b);
                                    var t = Ei(a, f);
                                    if (t) return r = Wo(a, p, t, b), r.then(G([a, b], Xo)), r
                                }
                                r || p("8");
                                return K.resolve({
                                    value: Nc,
                                    Ud: !0
                                })
                            }).then(function(r) {
                                g.oc("gdpr_popup");
                                if (r) {
                                    var t = r.value;
                                    r = r.Ud;
                                    H(t, bc) && g.C("gdpr", t, r ? void 0 : 525600)
                                }
                                t = sc(ie, Ga);
                                uc(a, t, 20)(Ya(E(a, "gdr"), B));
                                h.C("f1", Ga)
                            })["catch"](E(a, "gdp.a")))
                        }
                    }
                }
            }

            function Xo(a, c) {
                if (he(a)) {
                    var b = fe(a),
                        d = za(a, c);
                    d = d && d.params;
                    b = y(v(Yo, n), Qf(b));
                    d && b.length && d("gdpr", W(Boolean, b))
                }
            }

            function za(a, c) {
                var b = O(a).o("counters", {}),
                    d = P(c);
                return b[d]
            }

            function Vo(a, c, b) {
                var d = je(a, b);
                return new K(function(e) {
                    var f;
                    if (d) {
                        var g = d.aa,
                            h = u(v("4", c), v(null,
                                e)),
                            k = X(a, h, 2E3, "gdp.f.t");
                        d.ng((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.D(va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Rf), function(m) {
                                e({
                                    value: Fi(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(G([a, k], ja))
                    } else e({
                        value: Nf,
                        Ud: !0
                    })
                })
            }

            function Uo(a, c) {
                var b = je(a, c);
                b && b.aa.D(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = he(a), d
                });
                return b
            }

            function Wo(a, c, b, d) {
                var e = Zo(a, d.Yj),
                    f = je(a, d);
                if (!f) return K.resolve({
                    value: Nc,
                    Ud: !0
                });
                var g = Hc(a, {
                    src: "https://yastatic.net/s3/gdpr/popup/v2/" +
                        e + "_inversed_buttons.js"
                });
                return new K(function(h, k) {
                    g ? (c("7"), g.onerror = function() {
                        var l;
                        c("9");
                        f.mg((l = {}, l.type = "GDPR-ok-view-default", l));
                        h(null)
                    }, g.onload = function() {
                        c("10");
                        b.D(va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Rf), function(l) {
                            var m;
                            l = l.type;
                            f.mg((m = {}, m.type = l, m));
                            h({
                                value: Fi(l)
                            })
                        })
                    }) : (c("9"), k(Za("gdp.e")))
                })
            }

            function Zo(a, c) {
                var b = c || Bi(a);
                return H(b, $o) ? b : "en"
            }

            function ke() {
                return function(a, c, b) {
                    return {
                        ca: function(d, e) {
                            var f, g = d.J,
                                h = d.Ua,
                                k = d.G;
                            if (g && k) {
                                var l = H(k["wv-type"],
                                    ap);
                                if (!k["wv-type"] || l) {
                                    var m = aa(a);
                                    g.Tb("rqnl", 1);
                                    for (var q = pd(a), p = 1; q[p];) p += 1;
                                    d.Rb = p;
                                    q[p] = (f = {}, f.protocol = qa.Ja, f.host = "mc.yandex.ru", f.resource = l ? "webvisor" : "watch", f.postParams = d.ba, f.time = m(Y), f.counterType = b.$, f.params = k, f.browserInfo = g.l(), f.counterId = b.id, f.ghid = Vb(a), f);
                                    h && (h.Tb("rqnl", 1), q[p].telemetry = h.l());
                                    Sf(a)
                                }
                            }
                            e()
                        },
                        Ia: function(d, e) {
                            Gi(a, d);
                            e()
                        }
                    }
                }
            }

            function Gi(a, c) {
                var b = pd(a);
                c.J && !Na(b) && (delete b[c.Rb], Sf(a))
            }

            function Sf(a) {
                var c = pd(a);
                Pa(a).C("retryReqs", c)
            }

            function le(a, c, b) {
                var d =
                    me(a, c, b);
                return function(e, f, g) {
                    var h;
                    e = x({
                        J: wa()
                    }, e);
                    e.G || (e.G = {});
                    var k = e.G;
                    k.wmode = "0";
                    k["wv-part"] = "" + g;
                    k["wv-hit"] = k["wv-hit"] || "" + Vb(a);
                    k["page-url"] = k["page-url"] || a.location.href;
                    k.rn = k.rn || "" + Ra(a);
                    if (!k["wv-type"]) {
                        g = e.bf;
                        var l = "4",
                            m = "2";
                        e.If && (l = "5", m = "3");
                        k["wv-type"] = g ? l : m
                    }
                    f = "webvisor/" + f.id;
                    return d(x(e, {
                        G: k
                    }), f, {
                        Ob: (h = {}, h["Content-Type"] = "text/plain", h),
                        Gg: "POST"
                    })
                }
            }

            function bp(a, c, b, d) {
                c = d.o("cc");
                d = G(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ba(e)) && 1440 < aa(a)(gb) -
                        e) return d();
                    b.C("cc", c)
                } else ia(0)(c) || d()
            }

            function cp(a, c, b, d) {
                return pa(a, c, function(e) {
                    if ("0" === n(e, "settings.pcs") && !qd(a))
                        if (e = d.o("zzlc"), V(e) || Na(e) || "na" === e) {
                            e = "ru";
                            var f = Hi(a, 68),
                                g = Ii(a, 79);
                            if (f || g) e = "md";
                            if (f = Wa(a)) {
                                var h = f("iframe");
                                x(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + Jh("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Zb(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = ha(a).D(a, ["message"], E(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" ===
                                                m.substr(0, 8) && (vc(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc", m), l(), ja(a, k))
                                        }));
                                    k = X(a, u(l, v(h, vc)), 3E3)
                                }
                            }
                        } else b.C("zzlc", e)
                })
            }

            function pa(a, c, b) {
                a = P(c);
                return Ji()(dp(a)).then(b)
            }

            function ep(a, c, b) {
                c = P(c);
                a = Tf(a);
                b = x({
                    Jh: a(Y)
                }, b);
                return Ji()(fp(c, b))
            }

            function fp(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.kj = c, d.dg = !0, d.cg ? d.cg(c) : d.Qa = K.resolve(c)) : b[a] = {
                        Qa: K.resolve(c),
                        kj: c,
                        dg: !0
                    }
                }
            }

            function gp(a, c, b) {
                var d, e;
                c = db(v(a, n), hp);
                c = V(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f =
                        new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    U(a) && (C(a, f, "y.metrika")(), a = n(f, "createOffer"), U(a) && !a.length && (a = C(a, f)(), d = n(a, "then"), U(d) && C(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        U(h) && C(h, f, g, B, B)()
                    })(), x(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (U(h)) {
                            h = C(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = B;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = wc(k[1]), b.C("pp", g));
                            f.onicecandidate = B;
                            h()
                        }
                    }, e))))
                }
            }

            function ip(a, c, b) {
                var d, e = Ki(a, c);
                if (e) {
                    e.aa.D(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = X(a, G([a, c, b], Li), 200, "pu.m");
                        e.Ce(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (ja(a, g), b.C("pu", l))
                        })
                    } else Li(a, c, b)
                }
            }

            function Li(a, c, b) {
                var d = n(a, "location.host");
                a = Md(a, c);
                b.C("pu", "" + wc(d) + a)
            }

            function Uf(a, c, b) {
                return {
                    ca: function(d, e) {
                        var f = d.J;
                        if (f && (!b || b.lg)) {
                            var g = a.document.title;
                            d.title &&
                                (g = d.title);
                            var h = cc("getElementsByTagName", a.document);
                            "string" !== typeof g && h && (g = h("title"), g = (g = n(g, "0.innerHtml")) ? g : "");
                            g = g.slice(0, qa.Qg);
                            f.C("t", g)
                        }
                        e()
                    }
                }
            }

            function Qb(a) {
                void 0 === a && (a = jp);
                return function(c, b, d) {
                    return {
                        ca: function(e, f) {
                            var g = e.J,
                                h = e.G;
                            g && h && A(function(k) {
                                var l = Db[k],
                                    m = "bi",
                                    q = g;
                                l || (l = $a[k], m = "tel", q = ee(e));
                                l && (l = F(m + ":" + k, l, null)(c, d, e), q.Tb(k, l))
                            }, a);
                            f()
                        }
                    }
                }
            }

            function kp(a, c, b, d, e, f, g, h) {
                var k = b.o(f);
                ka(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g));
                V(h) || h.Tb(f, "" + k);
                return k
            }

            function lp(a,
                c) {
                if (rd(a)) {
                    var b = sb(a).match(mp);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function Hi(a, c) {
                if (sd(a) && c) {
                    var b = sb(a).match(np);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function Ii(a, c) {
                var b = sb(a);
                return b && (b = b.match(op)) && 1 < b.length ? Ba(b[1]) >= c : !1
            }

            function Qh(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >>
                        12 & 63
                    ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
                            6 & 63
                        ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ? Mi(e, !0) : e
            }

            function Jh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Mi(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Mi(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return pp[b] || b
                }) : ""
            }

            function qp(a, c) {
                var b = a.length ? y(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length =
                    0;
                A(u(N, ma("push", a)), c);
                return W(ia(null), b).length === a.length ? null : b
            }

            function rp(a, c, b) {
                return y(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (U(e)) return e(a, c) || null;
                    if (U(f)) return null;
                    var g = !(!c[e] || !c[f]);
                    !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ni[d[0]] || Ni[g]));
                    return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                }, b)
            }

            function td(a, c, b) {
                return {
                    ca: function(d, e) {
                        var f = Oi(b),
                            g = d.J;
                        g ? g.o("pv") && !g.o("ar") ? (f.pf = g, e()) : f.Dc ? f.Dc.push(e) : e() :
                            e()
                    },
                    Ia: function(d, e) {
                        var f = d.J,
                            g = d.nj,
                            h = Oi(b);
                        if (f) {
                            var k = h.Dc;
                            h.pf === f && k && (g && O(a).C("isEU", n(g, "settings.eu")), A(Ga, k), h.Dc = null)
                        }
                        e()
                    }
                }
            }

            function Pi(a, c) {
                var b = Ki(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = G([a, b.Ce], sp),
                    g = v(f, tp);
                b.aa.D(["initToParent"], function(h) {
                    g(d, b.Ab[h[1].counterId])
                }).D(["parentConnect"], function(h) {
                    g(e, b.Nb[h[1].counterId])
                });
                return {
                    aa: b.aa,
                    Kk: function(h, k) {
                        return new K(function(l, m) {
                            b.Ce(h, k, function(q, p) {
                                l([q, p])
                            });
                            X(a, v(Za(), m), 5100, "is.o")
                        })
                    },
                    mg: function(h) {
                        var k = {
                            pg: [],
                            Ne: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.Ab, k, h)
                    },
                    ng: function(h) {
                        var k = {
                            pg: [],
                            Ne: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Nb, k, h)
                    }
                }
            }

            function tp(a, c, b) {
                c = W(function(d) {
                    return !H(b.info.counterId, d.Ne)
                }, c);
                A(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function sp(a, c, b, d, e) {
                return (new K(function(f, g) {
                    var h = ca(b),
                        k = u(d.resolve ? d.resolve : N, ad(f)),
                        l = u(d.reject ? d.reject : N, ad(g));
                    d.resolve = k;
                    d.reject = l;
                    A(function(m) {
                        var q;
                        d.Ne.push(m);
                        var p = b[m],
                            r = X(a, v(Za(), l), 5100, "is.m");
                        c(p.window,
                            x(e, (q = {}, q.toCounter = Ba(m), q)),
                            function(t, z) {
                                ja(a, r);
                                d.pg.push(m);
                                d.resolve && d.resolve(z)
                            })
                    }, h)
                }))["catch"](E(a, "if.b"))
            }

            function up(a, c) {
                var b = ne(a);
                c.D(["initToParent"], function(d) {
                    var e = d[1];
                    b.Ab[e.counterId] = {
                        info: e,
                        window: d[0].source
                    }
                }).D(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.R("parentConnect", [e, d])
                }).D(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Nb[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function vp(a, c) {
                return function(b, d) {
                    var e, f = {
                        nc: aa(a)(Y),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.nc = Ba(b[0]), f.key = parseFloat(b[1]), f.dir = Ba(b[2]));
                    x(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = J(":", ["__yminfo", f.nc, f.key, f.dir]), e);
                    return {
                        Z: f,
                        vg: hb(a, g) || ""
                    }
                }
            }

            function Vb(a) {
                var c = O(a),
                    b = c.o("hitId");
                b || (b = Ra(a), c.C("hitId", b));
                return b
            }

            function uf(a) {
                var c;
                return c = (c = !!O(a).o("oo")) || vf(a)
            }

            function ee(a, c, b) {
                void 0 === b && (b = null);
                a.Ua || (a.Ua = Qi());
                c && a.Ua.Tb(c, b);
                return a.Ua
            }

            function Vf(a) {
                return {
                    ca: function(c, b) {
                        var d = a.document,
                            e = c.J;
                        if (e && Wf(a)) {
                            var f = ha(a),
                                g = function(h) {
                                    Wf(a) || (f.Wb(d, Ri, g), b());
                                    return h
                                };
                            f.D(d, Ri, g);
                            e.C("pr", "1")
                        } else b()
                    }
                }
            }

            function Ta(a, c, b) {
                var d = me(a, c, b);
                return function(e, f) {
                    var g, h = x({
                            J: wa()
                        }, e),
                        k = h.G,
                        l = h.J;
                    k = (g = {}, g["page-url"] = k && k["page-url"] || "", g.charset = "utf-8", g);
                    "0" !== f.$ && (k["cnt-class"] = f.$);
                    g = x(h, {
                        G: x(h.G || {}, k)
                    });
                    h = "";
                    if (g.J) {
                        k = P(f);
                        k = Si(f)[k] || {};
                        var m = k.status;
                        "rt" === k.Uc && m ? (1 === m && (h = bh(a, f) + "."), g.J.C("rt", m)) : h = ""
                    }
                    x(g, {
                        Df: h
                    });
                    return d(g, "watch/" + f.id, {
                        jd: !(!l.o("pv") || l.o("ar") || l.o("wh"))
                    })
                }
            }

            function me(a, c,
                b) {
                var d = zb(a, c);
                return function(e, f, g) {
                    void 0 === g && (g = {});
                    var h = wp(a);
                    e.Df && (h = "" + e.Df + h);
                    f = [qa.Ja + "//" + (h || "mc.yandex.ru") + "/" + f];
                    return Xf(a, b, e, !0).then(G([e, f, g], d)).then(function(k) {
                        e.nj = k.Qb;
                        return Xf(a, b, e).then(v(k.Qb, N))
                    })
                }
            }

            function wp(a) {
                var c = "mc.yandex.ru",
                    b = n(a, "document.referrer");
                if (!b) return c;
                a = Lc(a, b).host;
                return c = "mc.yandex." + ($g(a) || "ru")
            }

            function xp(a, c) {
                return a && c ? Ti(a) === Ti(c) : a || c ? !1 : !0
            }

            function Ti(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Xf(a, c, b, d) {
                void 0 === d && (d = !1);
                return new K(function(e, f) {
                    function g(l, m) {
                        m();
                        e()
                    }
                    var h = c.slice();
                    h.push({
                        ca: g,
                        Ia: g
                    });
                    var k = sc(h, function(l, m) {
                        var q = d ? l.ca : l.Ia;
                        if (q) try {
                            q(b, m)
                        } catch (p) {
                            k(yp), f(p)
                        } else m()
                    });
                    k(Ui)
                })
            }

            function Nb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ha(a);
                    var e = "__ym__promise_" + Ra(a) + "_" + Ra(a),
                        f = B;
                    d = E(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.D(a, ["message"], d);
                    a.postMessage(e, "*")
                } else X(a,
                    c, 0, d)
            }

            function Vi(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = sc(c, b);
                uc(a, c, d)(Ya(E(a, e), B))
            }

            function uc(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Wi);
                Yf = Infinity === b;
                return ua(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(zp);
                        if (c(ud)) return f(h), Xi(a);
                        Yf ? (c(d(a, 1E4)), f(h), Xi(a)) : X(a, g, 100)
                    }
                    var h = [];
                    Ap(g)
                })
            }

            function Xi(a) {
                if (Zf.length) {
                    var c = Zf.shift();
                    Yf ? c() : X(a, c, 100)
                } else $f = !1
            }

            function Ap(a) {
                $f ? Zf.push(a) : ($f = !0, a())
            }

            function of (a) {
                return ua(function(c,
                    b) {
                    b(a)
                })
            }

            function eo(a) {
                return ua(function(c, b) {
                    a.then(b, c)
                })
            }

            function Bp(a) {
                var c = [],
                    b = 0;
                return ua(function(d, e) {
                    A(function(f, g) {
                        f(Ya(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function co(a) {
                var c = [],
                    b = !1;
                return ua(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    A(function(g) {
                        g(Ya(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Ya(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function sc(a, c) {
                void 0 === c && (c = N);
                return ua({
                    Na: a,
                    Vd: c,
                    He: !1,
                    ra: 0
                })
            }

            function Ui(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.ra += 1
                    }
                    b = !1;
                    a.Vd(a.Na[a.ra], function() {
                        d()
                    });
                    b || (a.ra += 1, d = C(Ui, null, a))
                }
                for (var b = !0; !ud(a) && b;) c()
            }

            function Wi(a, c) {
                return function(b) {
                    var d = aa(a),
                        e = d(Y);
                    return Yi(function(f, g) {
                        d(Y) - e >= c && g(Zi)
                    })(b)
                }
            }

            function oe(a, c) {
                return function(b) {
                    var d = aa(a),
                        e = d(Y);
                    return pe(function(f) {
                        d(Y) - e >= c && Zi(f)
                    })(b)
                }
            }

            function pe(a) {
                return function(c) {
                    for (var b; c.Na.length && !ud(c);) b = c.Na.pop(), b = c.Vd(b, c.Na), a(c);
                    return b
                }
            }

            function Cp(a) {
                ud(a) && pb(Dc("i"));
                var c = a.Vd(a.Na[a.ra]);
                a.ra += 1;
                return c
            }

            function zp(a) {
                a.He = !1
            }

            function Zi(a) {
                a.He = !0
            }

            function yp(a) {
                a.ra = a.Na.length
            }

            function ud(a) {
                return a.He || a.Na.length <= a.ra
            }

            function zb(a, c) {
                return function(b, d, e) {
                    void 0 === e && (e = {});
                    return $i(a, c, d, b, x(e, {
                        na: b.na || [],
                        ba: e.ba || b.ba
                    }))
                }
            }

            function $i(a, c, b, d, e, f, g) {
                var h;
                void 0 === f && (f = 0);
                void 0 === g && (g = 0);
                var k = x({}, e),
                    l = c[g],
                    m = l[0];
                l = l[1];
                var q = x({}, d.G),
                    p = aa(a);
                d.J && (q["browser-info"] = wa(d.J.l()).C("st", p(qe)).Aa());
                !q.t && (p = d.Ua) && (p.C("ti", m), q.t = p.Aa());
                p = b[f];
                k.Ob && k.Ob["Content-Type"] || !k.ba || (k.Ob = x({}, k.Ob, (h = {}, h["Content-Type"] = "application/x-www-form-urlencoded", h)), k.ba = "site-info=" + Ld(k.ba));
                k.Gg = k.ba ? "POST" : "GET";
                k.Pb = q;
                k.na.push(m);
                return l("" + p + (d.Pi ? "/1" : ""), k).then(function(r) {
                    return {
                        Qb: r,
                        Rj: f
                    }
                })["catch"](function(r) {
                    var t = g + 1 >= c.length,
                        z = f + 1 >= b.length;
                    t && z && pb(r);
                    return $i(a, c, b, d, e, !z && t ? f + 1 : f, t ? 0 : g + 1)
                })
            }

            function bf(a, c) {
                var b = c.Zd,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = ac(a),
                    f = Pa(a),
                    g = aa(a),
                    h = g(qe),
                    k = aj(a, c),
                    l = k[0];
                k = k[1];
                var m = e.o("d");
                bj(a, c);
                var q = !1;
                !k && l && (k = l, q = !0);
                if (!k) k =
                    J("", [g(qe), Ra(a)]), q = !0;
                else if (!m || 15768E3 < h - Ba(m)) q = !0;
                q && !c.ib && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b));
                f.C(d, k);
                return k
            }

            function aj(a, c) {
                var b = Pa(a),
                    d = ac(a),
                    e = c.Zd || "uid";
                return [b.o(e), d.o(e)]
            }

            function rb(a) {
                a = aa(a);
                return Math.round(a(ag) / 50)
            }

            function ag(a) {
                var c = a.ta,
                    b = c[1];
                a = c[0] && b ? b() : Y(a) - a.vi;
                return Math.round(a)
            }

            function qe(a) {
                return Math.round(Y(a) / 1E3)
            }

            function gb(a) {
                return Math.floor(Y(a) / 1E3 / 60)
            }

            function Y(a) {
                var c = a.Pe;
                return 0 !== c ? c : bg(a.l, a.ta)
            }

            function Tf(a) {
                var c = ha(a),
                    b =
                    cj(a),
                    d = {
                        l: a,
                        Pe: 0,
                        ta: b,
                        vi: bg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.D(a, ["beforeunload", "unload"], function() {
                    0 === d.Pe && (d.Pe = bg(a, d.ta))
                });
                return ua(d)
            }

            function Dp(a) {
                return (10 > a ? "0" : "") + a
            }

            function af(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Sd: Ep(a),
                    o: function(e, f) {
                        var g = dj(a, "" + d + e);
                        return Na(g) && !V(f) ? f : g
                    },
                    C: function(e, f) {
                        ej(a, "" + d + e, f);
                        return this
                    },
                    oc: function(e) {
                        fj(a, "" + d + e);
                        return this
                    }
                }
            }

            function ej(a, c, b) {
                var d = cg(a);
                a = hb(a, b);
                if (!Na(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function dj(a,
                c) {
                var b = cg(a);
                try {
                    return Bb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function fj(a, c) {
                var b = cg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function cg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Zh(a, c, b) {
                dg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = gj(a);
                (d = d && d.metrika_enabled) && hj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function dg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if ($h(a, Wd, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Fp(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() +
                            ";"
                    }
                    e && (d = e.replace(Gp, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (ij(a)[c] = b)
                    } catch (l) {}
                }
            }

            function Wd(a, c) {
                var b = ij(a);
                return b ? b[c] || null : null
            }

            function gj(a) {
                try {
                    var c = a.document.cookie;
                    if (!ka(c)) {
                        var b = {};
                        A(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[nb(d[0])] = nb(jj(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function $h(a, c, b) {
                H(b, ["gdpr", "gdpr_popup", "metrika_enabled", "_ym_debug_build"]) ? a = !0 : (b = fe(a), b = Qf(b), a = c(a, "gdpr"), a = W(oc(Hp), b).length ? !0 : H(a, [Nc, Ip]));
                return a
            }

            function Fi(a) {
                if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Nc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return H(a, bc) ? a : Nc
            }

            function Ei(a, c, b) {
                void 0 === b && (b = N);
                var d = cd(a);
                b(d);
                var e = v(d, Jp);
                re(a, c, function(f) {
                    f.sa.D(e)
                });
                return d
            }

            function Jp(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.R(n(b, "type"), b)
            }

            function re(a, c, b, d) {
                void 0 === b && (b = B);
                void 0 === d && (d = !1);
                var e = $c(a);
                if (c && U(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = xa(arguments),
                            h = g[0];
                        d && e.R(h);
                        g = f.apply(c, g);
                        d || e.R(h);
                        return g
                    };
                    a = {
                        sa: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    A(e.R, c);
                    return a
                }
            }

            function fe(a) {
                a = O(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function To(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function sh(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = X(a, d, b), e.R(h))
                }
                var e = $c(a),
                    f, g = !1,
                    h;
                c.D(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return B
                });
                return e
            }

            function Kp(a, c) {
                return a.clearInterval(c)
            }

            function Lp(a, c, b, d) {
                return a.setInterval(E(a, "i.err." + (d || "def"), c), b)
            }

            function X(a, c, b, d) {
                return se(a,
                    E(a, "d.err." + (d || "def"), c), b)
            }

            function cd(a) {
                var c = {};
                return {
                    D: function(b, d) {
                        A(function(e) {
                            n(c, e) || (c[e] = $c(a));
                            c[e].D(d)
                        }, b);
                        return this
                    },
                    ea: function(b, d) {
                        A(function(e) {
                            n(c, e) && c[e].ea(d)
                        }, b);
                        return this
                    },
                    R: function(b, d) {
                        return n(c, b) ? E(a, "e." + d, c[b].R)(d) : []
                    }
                }
            }

            function $c(a) {
                var c = [],
                    b = {};
                b.Ck = c;
                b.D = u(ma("push", c), v(b, N));
                b.ea = u(dc(Lb(a))(c), dc(ma("splice", c))(1), v(b, N));
                b.R = u(N, dc(Ga), Mp(c));
                return b
            }

            function F(a, c, b) {
                return function() {
                    return E(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function E(a,
                c, b, d, e) {
                var f = pb,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        $d(a, c, k)
                    }
                    return h
                }
            }

            function bg(a, c) {
                var b = c || cj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && U(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function cj(a) {
                a = kj(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = C(b, a));
                return [c, b]
            }

            function kj(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function $d(a, c, b) {
                var d, e, f, g, h;
                if (!(.01 >= a.Math.random())) {
                    var k = "u.a.e",
                        l = "";
                    b && ("object" ===
                        typeof b ? (k = b.message, l = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k = "" + b);
                    if (!(Np(k) || Ma(u(ma("indexOf", k), ia(-1), Eb), Op) || Pp(k) && .1 <= a.Math.random())) {
                        c = (d = {}, d.jserrs = (e = {}, e[qa.Va] = (f = {}, f[k] = (g = {}, g[c] = (h = {}, h[a.location.href] = l, h), g), f), e), d);
                        a: {
                            var m;d = qa.Ja + "//mc.yandex.ru/watch/" + qa.Mg;
                            try {
                                var q = Xc(a, "er")[0];
                                var p = void 0 === q ? [] : q;
                                var r = p[1];
                                var t = void 0 === r ? null : r
                            } catch (z) {
                                break a
                            }
                            q = (m = {}, m["browser-info"] = "ar:1:pv:1:v:" + qa.Va + ":vf:" + vd.version, m["page-url"] = a.location &&
                                "" + a.location.href, m);a = hb(a, c);
                            if (t && a) t(d, {
                                Pb: q,
                                na: [],
                                ba: "site-info=" + Ld(a)
                            })["catch"](B)
                        }
                    }
                }
            }

            function Fb(a) {
                return y(function(c) {
                    return !c || H(c, a) ? c : 0
                }, xc)
            }

            function lj(a) {
                return !od(a) && mj(a)
            }

            function eg(a) {
                return Wa(a) ? v(a, Qp) : !1
            }

            function mj(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Ca("sendBeacon", c) ? G([a, C(c, n(a, "navigator"))], Rp) : !1
            }

            function Rp(a, c, b, d) {
                return new K(function(e, f) {
                    if (!n(a, "navigator.onLine")) return f();
                    var g = x(d.Pb, {
                        "force-urlencoded": 1
                    });
                    g = b + "?" + Zc(g) + (d.ba ? "&" + d.ba : "");
                    return 2E3 < g.length ? f(Za("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Qp(a, c, b) {
                return new K(function(d, e) {
                    var f, g, h = "_ymjsp" + Ra(a),
                        k = x((f = {}, f.callback = h, f), b.Pb),
                        l = G([a, h], Sp);
                    a[h] = function(q) {
                        try {
                            l(), vc(m), d(q)
                        } catch (p) {
                            e(p)
                        }
                    };
                    k.wmode = "5";
                    var m = Hc(a, (g = {}, g.src = nj(c, b, k), g));
                    if (!m) return l(), e(Dc("jp.s"));
                    f = v(m, vc);
                    f = u(f, v(Za(b.na), e));
                    g = se(a, f, b.tb || 1E4);
                    g = G([a, g], ja);
                    m.onload = g;
                    m.onerror = u(l, g, f)
                })
            }

            function Sp(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function wd(a) {
                var c = Wa(a);
                return c ? G([a, c], Tp) :
                    !1
            }

            function Tp(a, c, b, d) {
                return new K(function(e, f) {
                    var g = Zb(a),
                        h = c("img"),
                        k = u(v(h, vc), v(Za(d.na), f)),
                        l = se(a, k, d.tb || 3E3);
                    h.onerror = k;
                    h.onload = u(v(h, vc), v(null, e), G([a, l], ja));
                    k = x({}, d.Pb);
                    delete k.wmode;
                    h.src = nj(b, d, k);
                    rd(a) && (x(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function nh(a, c, b) {
                var d = Da(c);
                return d && Ch(a, c, W(Boolean, ["p", Up[d], "c"]), mh, b)
            }

            function lh(a, c) {
                var b = Yb(fg, a, c);
                if (!b) {
                    var d = Yb("div", a, c);
                    d && (ub(fg + ",div", d).length || (b = d))
                }
                return b
            }

            function Ch(a, c, b, d, e) {
                return L(function(f, g) {
                    var h = null;
                    g in oj ? h = c.getAttribute && c.getAttribute(oj[g]) : g in Oc && (h = "p" === g ? Oc[g](a, c, e) : "c" === g ? Oc[g](a, c, d) : Oc[g](a, c));
                    h && (h = h.slice(0, pj[g] || 100), f[g] = gg[g] ? "" + wc(h) : h);
                    return f
                }, {}, b)
            }

            function Sh(a, c, b) {
                if (xd(a)) return na(b.querySelectorAll(c));
                var d = qj(c.split(" "), b);
                return W(function(e, f) {
                    return Lb(a)(e, d) === f
                }, d)
            }

            function qj(a, c) {
                var b = va(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? lc(v(b, qj), na(d)) : na(d)
            }

            function Kc(a,
                c) {
                if (c.querySelector) return c.querySelector(a);
                var b = ub(a, c);
                return b && b.length ? b[0] : null
            }

            function ub(a, c) {
                if (!c) return [];
                var b = c.querySelectorAll(a);
                return b ? na(b) : []
            }

            function si(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function Hc(a, c) {
                var b = a.document,
                    d = x({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = Wa(a);
                if (e) {
                    var f = e("script");
                    rj(Aa, cb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = cc("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function Vp(a, c, b) {
                var d = sj(c);
                H(b, d.lb) || d.lb.push(b);
                if (Na(d.bb)) {
                    b = Wa(a);
                    if (!b) return null;
                    b = b("iframe");
                    x(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = Zb(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.bb = b
                } else(a = n(d.bb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.bb
            }

            function Wp(a, c) {
                var b = ba(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = J(", ", y(function(e) {
                        return "." + e
                    }, b));
                    return na(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return lc(u(ma("getElementsByClassName", c), na), b);
                d = c.getElementsByTagName("*");
                b = "(" + J("|", b) + ")";
                return W(v(b, rc), na(d))
            }

            function hg(a, c, b) {
                for (var d = "",
                        e = kh(), f = Da(c) || "*"; c && c.parentNode && !H(f, ["BODY", "HTML"]);) d += e[f] || "*", d += tj(a, c, b) || "", c = c.parentElement, f = Da(c) || "*";
                return nb(d, 128)
            }

            function tj(a, c, b) {
                if (a = te(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function te(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === yc(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function yf(a, c) {
                var b =
                    ig(a, c),
                    d = b.left;
                b = b.top;
                var e = ue(a, c);
                return [d, b, e[0], e[1]]
            }

            function ue(a, c) {
                var b = n(a, "document");
                if (c === yc(a) || c === b.documentElement) {
                    b = Zb(a);
                    var d = yd(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = dd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function ig(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Da(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === yc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = b.getBoundingClientRect && dd(b)) return b = If(a), {
                    left: Math.round(d.left +
                        b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function Yb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Ca("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = Yh(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (xd(c)) {
                    for (a = na((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 ===
                        b.nodeType && -1 === Lb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function xd(a) {
                return !(!Ca("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function uj(a) {
                return ve(a) && !Ma(ia(a.type), Xp) ? we(a) ? !a.checked : !a.value : Yp(a) ? !a.value : Zp(a) ? 0 > a.selectedIndex : !0
            }

            function Da(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (Fa(c)) return c;
                    c = a.tagName;
                    if (Fa(c)) return c
                } catch (b) {}
            }

            function vj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Lb(a)(c, na(b))
            }

            function $p(a, c, b) {
                b = cc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Ca("(Event|Object|constructor)", e) || xe(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = cc("createEvent", n(a, "document"))) && U(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function dd(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Tf && c.Tf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function If(a) {
                var c = yc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function yd(a) {
                var c = jg(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Zb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function jg(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a,
                        "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ka(c) || ka(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Zb(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : yc(a) || b
            }

            function yc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function rc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function zc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ?
                        c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function vc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Rb(a) {
                return a ? a.innerText || "" : ""
            }

            function tf(a) {
                if (ka(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function nb(a, c) {
                if (a) {
                    var b = wj ? wj.call(a) : ("" + a).replace(xi, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function Sb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (aq.test(a.location.host) && a.opera && U(a.opera.version) &&
                                (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? v(a, bq) : !1
            }

            function bq(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.ba,
                    g = x(b.jd ? (d = {}, d.wmode = "7", d) : {}, b.Pb);
                return new K(function(h, k) {
                    e.open(b.Gg || "GET", c + "?" + Zc(g), !0);
                    e.withCredentials = !1 !== b.Ig;
                    b.tb && (e.timeout = b.tb);
                    rj(Aa, cb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.Ob);
                    var l = G([a, e, Za(b.na), b.jd, b.oj, h, k], cq);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function cq(a, c, b, d, e, f, g, h) {
                if (4 ===
                    c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Dc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = Bb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function nj(a, c, b) {
                (b = Zc(b)) && (a += "?" + b);
                c.ba && (a += (b ? "&" : "?") + c.ba);
                return a
            }

            function hb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function Zc(a) {
                return a ? u(Aa, Jc(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    V(e) || ka(e) || c.push(d + "=" + Ld(e));
                    return c
                }, []), md("&"))(a) : ""
            }

            function dq(a) {
                return a ? u(cb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], ka(b) ? void 0 : jj(b)]
                }), Jc(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function jj(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function Ld(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = J("", W(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function kg() {
                var a = xa(arguments);
                return pb(Za(a))
            }

            function Za(a) {
                var c = "";
                ba(a) ? c = J(".", a) : Fa(a) &&
                    (c = a);
                return Dc("err.kn(" + qa.Va + ")" + c)
            }

            function eq(a) {
                this.message = a
            }

            function xj(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function S(a) {
                return L(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, fq)
            }

            function $g(a) {
                var c = a.match(yj);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return H(c, lg) ? c : !1;
                    if (a) return lg[0]
                }
                return !1
            }

            function gq(a,
                c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    $: d,
                    fc: e,
                    O: b
                };
                a = L(function(g, h) {
                    var k = h[1],
                        l = k.Qi;
                    k = f[k.Vf];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Aa(c));
                zj(a, a.O || {});
                return a
            }

            function hq(a, c) {
                return L(function(b, d) {
                    b[c[d[0]].Vf] = d[1];
                    return b
                }, {}, Aa(a))
            }

            function Aj(a) {
                a = P(a);
                return ec[a] && ec[a].Gj
            }

            function zj(a, c) {
                var b = P(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                ec[b] || (ec[b] = {});
                if (d || e) ec[b].Gj = d, ec[b].Hj = e
            }

            function Bj(a) {
                return ye(a) || kd(a) || /mobile/i.test(sb(a)) || !V(n(a, "orientation"))
            }

            function Wf(a) {
                return H("prerender",
                    y(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Ra(a, c, b) {
                var d = V(b);
                V(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function dl(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function Rd(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === mg(c)
            }

            function iq(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Xa(a, c) {
                A(u(N, ma("push", a)), c);
                return a
            }

            function ng(a, c) {
                return Array.prototype.sort.call(c,
                    a)
            }

            function na(a) {
                return a ? ba(a) ? a : ze ? ze(a) : "number" === typeof a.length && 0 <= a.length ? Cj(a) : [] : []
            }

            function Dl(a) {
                if (0 > a) return [];
                for (var c = [], b = 0; b <= a; b += 1) c.push(b);
                return c
            }

            function jq(a, c) {
                if (!sd(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function Ae(a, c, b) {
                return b ? a : c
            }

            function kq(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function Dj(a) {
                return V(a) ? [] : zd(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Ej(a))
            }

            function lq(a, c) {
                return zd(function(b,
                    d, e) {
                    d = a(d, e);
                    return b.concat(ba(d) ? d : [d])
                }, [], c)
            }

            function Fj(a, c) {
                return zd(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function mq() {
                var a = xa(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) ld(b, d) && (c[d] = b[d]);
                    ld(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Ej(a) {
                var c = [],
                    b;
                for (b in a) ld(a, b) && c.push(b);
                return c
            }

            function nq(a, c) {
                return 1 <= Gj(ia(a), c).length
            }

            function Gj(a, c) {
                return zd(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function ba(a) {
                if (Ad) return Ad(a);
                (Ad = Ha(Array.isArray, "isArray")) || (Ad = oq);
                return Ad(a)
            }

            function Lf(a, c, b) {
                try {
                    if (U(c)) {
                        var d = xa(arguments).slice(3);
                        ka(b) ? c.apply(void 0, d) : C.apply(void 0, va([c, b], d))()
                    }
                } catch (e) {
                    se(a, v(e, pb), 0)
                }
            }

            function pb(a) {
                throw a;
            }

            function se(a, c, b) {
                return cc("setTimeout", a)(c, b)
            }

            function ja(a, c) {
                return cc("clearTimeout", a)(c)
            }

            function Od() {
                return []
            }

            function Pc() {
                return {}
            }

            function cc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function u() {
                var a = xa(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return L(Hj, b, a)
                }
            }

            function Gb(a, c) {
                return function() {
                    var b = xa(arguments),
                        d = b[0];
                    b = b.slice(1);
                    var e = O(d),
                        f = e.o("m870", {}),
                        g = n(f, a);
                    g || (g = w(c), f[a] = g, e.C("m870", f));
                    return g.apply(void 0, va([d], b))
                }
            }

            function Ic(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                L(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? L(function(b,
                    d) {
                    if (ka(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Jc(a, c) {
                return G([a, c], L)
            }

            function Oa(a) {
                return ma("test", a)
            }

            function ma(a, c) {
                return C(c[a], c)
            }

            function v(a, c) {
                return G([a], c)
            }

            function G(a, c) {
                return C.apply(void 0, va([c, null], a))
            }

            function pq() {
                var a = xa(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = va(d, xa(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, va([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] =
                            c;
                        e = b[f] && Ij(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Ij(c, e)
                }
            }

            function Ij(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                U(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function zd(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function fc(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ta: function(b, d) {
                        og.call(c, b) || (c[b] = d);
                        return this
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    o: function(b, d) {
                        var e = c[b];
                        return og.call(c, b) || V(d) ? e : d
                    }
                }
            }

            function ld(a, c) {
                return ka(a) ? !1 : og.call(a, c)
            }

            function mb(a) {
                return !Na(a) && !V(a) && "[object Object]" === mg(a)
            }

            function ka(a) {
                return V(a) || Na(a)
            }

            function U(a) {
                return "function" === typeof a
            }

            function Ao(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(cf, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g,
                    "\\{").replace(/\}/g, "\\}")
            }

            function Wb(a, c) {
                return !(!a || -1 === df(a, c))
            }

            function df(a, c) {
                if (Jj) var b = Jj.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function Fa(a) {
                return "string" === typeof a
            }

            function mg(a) {
                return Object.prototype.toString.call(a)
            }

            function pg(a, c) {
                pg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) &&
                        (b[e] = d[e])
                };
                return pg(a, c)
            }

            function w(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : N;
                return function() {
                    var f = xa(arguments),
                        g = e.apply(void 0, f),
                        h = Kj(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function xa(a) {
                if (ze) try {
                    return ze(a)
                } catch (c) {}
                return Cj(a)
            }

            function Cj(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function Lb(a) {
                if (qg) return qg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && Ha(a.Array.prototype.indexOf,
                    "indexOf");
                return qg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : qq
            }

            function qq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function Eb(a) {
                return !a
            }

            function vb(a, c) {
                return c
            }

            function N(a) {
                return a
            }

            function dc(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function fa(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function rq(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Ha(a, c) {
                return Ca(c, a) && a
            }

            function Ca(a, c) {
                var b = Be(a, c);
                c && !b &&
                    rg.push([a, c]);
                return b
            }

            function Be(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function B() {}

            function Hj(a, c) {
                return c(a)
            }

            function Ga(a, c) {
                return c ? a(c) : a()
            }

            function Ea(a, c) {
                function b() {
                    this.constructor = a
                }
                pg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function va() {
                for (var a =
                        0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function wc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function sq() {}

            function tq(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function ya(a) {
                if (!(this instanceof ya)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ba = 0;
                this.Te = !1;
                this.Ha = void 0;
                this.wb = [];
                Lj(a, this)
            }

            function Mj(a, c) {
                for (; 3 === a.Ba;) a = a.Ha;
                0 === a.Ba ? a.wb.push(c) : (a.Te = !0, ya.Ue(function() {
                    var b = 1 === a.Ba ? c.Wi : c.$i;
                    if (null === b)(1 === a.Ba ? sg : Bd)(c.Qa, a.Ha);
                    else {
                        try {
                            var d = b(a.Ha)
                        } catch (e) {
                            Bd(c.Qa, e);
                            return
                        }
                        sg(c.Qa, d)
                    }
                }))
            }

            function sg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof ya) {
                            a.Ba = 3;
                            a.Ha = c;
                            tg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Lj(tq(b,
                                c), a);
                            return
                        }
                    }
                    a.Ba = 1;
                    a.Ha = c;
                    tg(a)
                } catch (d) {
                    Bd(a, d)
                }
            }

            function Bd(a, c) {
                a.Ba = 2;
                a.Ha = c;
                tg(a)
            }

            function tg(a) {
                2 === a.Ba && 0 === a.wb.length && ya.Ue(function() {
                    a.Te || ya.Wg(a.Ha)
                });
                for (var c = 0, b = a.wb.length; c < b; c++) Mj(a, a.wb[c]);
                a.wb = null
            }

            function uq(a, c, b) {
                this.Wi = "function" === typeof a ? a : null;
                this.$i = "function" === typeof c ? c : null;
                this.Qa = b
            }

            function Lj(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, sg(c, d))
                    }, function(d) {
                        b || (b = !0, Bd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Bd(c, d))
                }
            }

            function Bb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function hj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return dg(a, c, "", -100, b, d, e)
            }

            function Gc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = vq(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    oc: function(g, h, k) {
                        hj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    o: function(g) {
                        return Wd(a, "" + c + g + f)
                    },
                    C: function(g, h, k, l, m) {
                        dg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Lc(a, c) {
                var b = wq(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/,
                        ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function jb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] +
                    a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function gc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Qc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] <<
                    c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c
                ]
            }

            function fb(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function oa(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function Nj(a) {
                a = oa(a, [0, a[0] >>> 1]);
                a = jb(a, [4283543511, 3981806797]);
                a = oa(a, [0, a[0] >>> 1]);
                a = jb(a, [3301882366, 444984403]);
                return a = oa(a, [0, a[0] >>> 1])
            }

            function xq(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    T: [0, d],
                    V: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f +
                            6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = jb(h, Ce);
                    h = Qc(h, 31);
                    h = jb(h, De);
                    g.T = oa(g.T, h);
                    g.T = Qc(g.T, 27);
                    g.T = gc(g.T, g.V);
                    g.T = gc(jb(g.T, [0, 5]), [0, 1390208809]);
                    k = jb(k, De);
                    k = Qc(k, 33);
                    k = jb(k, Ce);
                    g.V = oa(g.V, k);
                    g.V = Qc(g.V, 31);
                    g.V = gc(g.V, g.T);
                    g.V = gc(jb(g.V, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = oa(h, fb([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = oa(h, fb([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = oa(h, fb([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = oa(h, fb([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = oa(h, fb([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = oa(h, fb([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = oa(h, [0, b.charCodeAt(f + 8)]), h = jb(h, De), h = Qc(h, 33), h = jb(h, Ce), d.V = oa(d.V, h);
                    case 8:
                        g = oa(g, fb([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = oa(g, fb([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = oa(g, fb([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = oa(g, fb([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = oa(g, fb([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = oa(g, fb([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = oa(g, fb([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = oa(g, [0, b.charCodeAt(f)]), g = jb(g, Ce), g = Qc(g, 31), g = jb(g, De), d.T = oa(d.T, g)
                }
                d.T = oa(d.T, [0, b.length]);
                d.V = oa(d.V, [0, b.length]);
                d.T = gc(d.T, d.V);
                d.V = gc(d.V, d.T);
                d.T = Nj(d.T);
                d.V = Nj(d.V);
                d.T = gc(d.T,
                    d.V);
                d.V = gc(d.V, d.T);
                return ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.V[1] >>> 0).toString(16)).slice(-8)
            }

            function Oj(a) {
                return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function yq(a, c) {
                var b = Oj(a);
                Pj = Lp(a, function() {
                    var d = Oj(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return C(Kp, null, a, Pj)
            }

            function zq(a, c, b) {
                var d, e, f = c.$,
                    g = c.Qe,
                    h = c.vc,
                    k = O(a),
                    l = wa((d = {}, d.wh = "1", d.pv = "1", d));
                ug(f) && a.Vg &&
                    a.Vg.$j && l.C("ad", "1");
                g && l.C("ut", "1");
                f = k.o("lastReferrer");
                d = S(a).href;
                h = {
                    G: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e),
                    J: l
                };
                b(h, c)["catch"](E(a, "g.s"));
                k.C("lastReferrer", d)
            }

            function Aq(a, c) {
                if (xe(a)) return ja(a, c);
                vg[c] = !0;
                return ja(a, Ee[c] || 0)
            }

            function Bq(a, c, b) {
                function d() {
                    vg[t] = !0;
                    f(!1);
                    c()
                }

                function e() {
                    ja(a, Ee[t]);
                    if (vg[t]) f(!1);
                    else {
                        var D = Math.max(0, b - (m ? q : q + h(Y) - p));
                        D ? Ee[t] = X(a, d, D, "u.t.d.c") : d()
                    }
                }

                function f(D) {
                    A(function(M) {
                        var ea = M[0],
                            La = M[1];
                        M = M[2];
                        D ? r.D(ea, La, M) : r.Wb(ea, La, M)
                    }, z)
                }
                var g = v(!1, f);
                if (xe(a)) return {
                    id: X(a, c, b, "u.t.d"),
                    ef: g
                };
                var h = aa(a),
                    k = !1,
                    l = !1,
                    m = !0,
                    q = 0,
                    p = h(Y),
                    r = ha(a),
                    t = Qj;
                Qj += 1;
                Ee[t] = 0;
                var z = [
                    [a, ["blur"], function() {
                        m = k = l = !0;
                        q += h(Y) - p;
                        p = h(Y);
                        e()
                    }],
                    [a, ["focus"], function() {
                        k || l || (q = 0);
                        p = h(Y);
                        k = l = !0;
                        m = !1;
                        e()
                    }],
                    [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                        l || (k = !0, m = !1, l = !0, e())
                    }]
                ];
                f(!0);
                e();
                return {
                    id: t,
                    ef: g
                }
            }

            function oo(a, c) {
                var b, d = zc(c),
                    e = qa.dc,
                    f = fc(a);
                if (d && rc("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1;
                    f.C("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ba(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function Fe(a, c, b, d) {
                return function() {
                    var e = za(a, c),
                        f = xa(arguments);
                    if (e) return d.apply(void 0, f)
                }
            }

            function Cq(a, c, b, d) {
                var e = Dq[b];
                return e ? function() {
                    var f = xa(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = O(a);
                        h.Ta("mt", {});
                        var k = h.o("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        pb(m)
                    }
                    return g
                } : d
            }

            function Cd(a,
                c, b) {
                var d = c.getAttribute("itemtype");
                b = ub('[itemprop~="' + b + '"]', c);
                return d ? W(function(e) {
                    return e.parentNode && Yb("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function ab(a, c, b) {
                return (a = Cd(a, c, b)) && a.length ? a[0] : null
            }

            function Ua(a) {
                if (!a) return "";
                a = ba(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Rb(a[0]) : ""
            }

            function Rj(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ua(a) : ""
            }

            function hd(a, c, b) {
                a = c && (Wb(c.className, "ym-disable-keys") || Wb(c.className, "-metrika-nokeys"));
                return b && c ? a || !!Wp(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function rf(a, c) {
                return ve(c) ? "password" === c.type || c.name && H(c.name.toLowerCase(), Sj) || c.id && H(c.id.toLowerCase(), Sj) : !1
            }

            function Tj(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Xa(a, [b >> 8, b & 255])
            }

            function Ob(a, c) {
                Xa(a, [c & 255])
            }

            function eb(a, c, b) {
                return -1 !== Lb(a)(b, Eq) ? (Ob(c, b), !1) : !0
            }

            function T(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Xa(a, [b & 127 | 128]), b >>= 7;
                Xa(a, [b])
            }

            function wg(a, c) {
                T(a, c.length);
                for (var b = 0; b < c.length; b += 1) T(a, c.charCodeAt(b))
            }

            function xg(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Tj(a, b.charCodeAt(d))
            }

            function Fq(a, c) {
                var b = [];
                if (eb(a, b, 27)) return [];
                T(b, c);
                return b
            }

            function Gq(a, c) {
                var b = Da(c);
                if (!b) return c[Qa] = -1, null;
                var d = +c[Qa];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.gk) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = te(a, c),
                    g = f && f[Qa] ? f[Qa] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = Hq()[b];
                h || (e |= 2);
                var k = tj(a, c);
                k || (e |= 4);
                var l =
                    yf(a, c);
                (f = f ? yf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                qc[d].Wf = l[0] + "x" + l[1];
                qc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (eb(a, f, 1)) return null;
                T(f, d);
                Ob(f, e);
                T(f, g);
                h ? Ob(f, h) : xg(f, b);
                k && T(f, k);
                e & 8 || (T(f, l[0]), T(f, l[1]), T(f, l[2]), T(f, l[3]));
                e & 32 && xg(f, c.id);
                Ob(f, 0);
                return f
            }

            function Iq(a, c) {
                var b = c[Qa];
                if (!b || 0 > b || !wf(c) || !c.form || Xh(a, c.form)) return [];
                var d = vj(a, c.form);
                if (0 > d) return [];
                if (ve(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        nc: 0,
                        nk: 0,
                        "datetime-local": 0,
                        email: 0,
                        Tf: 0,
                        Jk: 0,
                        search: 0,
                        Mk: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Ok: 0,
                        password: 2,
                        Ik: 3,
                        jk: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        dk: 1,
                        ek: 5
                    };
                    var f = Da(c);
                    e = V(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (eb(a, g, 7)) return [];
                T(g, b);
                T(g, d);
                T(g, e);
                wg(g, c.name || "");
                T(g, f);
                return g
            }

            function Jq(a, c, b) {
                var d = vj(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!uj(e[g])) {
                        var h =
                            e[g][Qa];
                        h && 0 < h && b.push(h)
                    }
                e = [];
                if (eb(a, e, 11)) return [];
                T(e, c);
                T(e, d);
                T(e, b.length);
                for (a = 0; a < b.length; a += 1) T(e, b[a]);
                return e
            }

            function pc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !Km(a, c, b); c = te(a, c)) d.push(c);
                A(function(e) {
                    qc.ud += 1;
                    var f = qc.ud;
                    e[Qa] = f;
                    qc[f] = {};
                    f = Gq(a, e);
                    e = Iq(a, e);
                    f && e && (Xa(b, f), Xa(b, e))
                }, Kq(d));
                return b
            }

            function Lq(a) {
                var c = a.ja;
                if (!gd || c && !c.fromElement) return Vh(a)
            }

            function Mq(a) {
                var c = a.ja;
                if (c && !c.toElement) return xf(a)
            }

            function Uj(a) {
                var c = zc(a.ja);
                if (c && Vd(c)) {
                    var b = Uh(a,
                        c);
                    var d = rb(a.l),
                        e = [];
                    eb(a.l, e, 17) ? a = [] : (T(e, d), T(e, c[Qa]), a = e);
                    return va(b, a)
                }
            }

            function Vj(a) {
                var c = a.l,
                    b = a.ja.target;
                if (b && Vd(b)) {
                    c = pc(c, b);
                    var d = rb(a.l),
                        e = [];
                    eb(a.l, e, 18) ? a = [] : (T(e, d), T(e, b[Qa]), a = e);
                    return va(c, a)
                }
            }

            function Wj(a) {
                var c = a.l,
                    b = zc(a.ja);
                if (!b || rf(c, b) || hd(c, b)) return [];
                if (wf(b)) {
                    var d = O(c).o("isEU"),
                        e = fd(c, b, d),
                        f = e.kb;
                    d = e.Td;
                    e = e.Dd;
                    if (we(b)) var g = b.checked;
                    else g = b.value, g = f ? J("", Xj(g.split(""))) : g;
                    c = pc(c, b);
                    f = rb(a.l);
                    d = d && !e;
                    e = [];
                    eb(a.l, e, 39) ? a = [] : (T(e, f), T(e, b[Qa]), xg(e, String(g)),
                        Ob(e, d ? 1 : 0), a = e);
                    return va(c, a)
                }
            }

            function Ge(a) {
                var c = a.l,
                    b = a.ja,
                    d = zc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = v(e, Xa);
                d && Vd(d) ? f(Uh(a, d)) : f(pc(c, d));
                var g = qi(c, b);
                a = rb(a.l);
                f = b.type;
                var h = [g.x, g.y];
                g = b.which;
                b = b.button;
                var k;
                var l = ue(c, d);
                var m = l[0];
                for (l = l[1]; d && (!m || !l);)
                    if (d = te(c, d)) l = ue(c, d), m = l[0], l = l[1];
                d ? (m = d[Qa], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = ig(c, d), eb(c, k, l) ? c = [] : (T(k, a), T(k, m), T(k, Math.max(0,
                    h[0] - d.left)), T(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Ob(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = [];
                return va(e, c)
            }

            function Nq(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Na(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = fd(b, c).kb || hd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = fd(b, d).kb || hd(b, d, !0), f += 1;
                if (e !== yg) return yg = e, d = d ? J("", Xj(e.split(""))) : e, e = rb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], eb(a.l, c, 29) ? a = [] : (T(c, e), wg(c, b), wg(c, d), a = c), a
            }

            function Oq(a) {
                return va(Ge(a), Nq(a) || [])
            }

            function Yj(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey ||
                    a.altKey ? 16 : 0)
            }

            function Zj(a) {
                var c = [];
                zg || (zg = !0, yg && c.push.apply(c, Fq(a.l, rb(a.l))), Nb(a.l, function() {
                    zg = !1
                }, "fv.c"));
                return c
            }

            function ak(a, c, b, d) {
                var e = zc(c);
                if (!e || Af(a, e)) return [];
                var f = Ud(e),
                    g = zf(e);
                c = fd(a, e).kb;
                var h = O(a);
                if (!f && (g && h.o("isEU") || hd(a, e))) a = [];
                else {
                    f = pc(a, e);
                    h = rb(a);
                    g = [];
                    if (eb(a, g, 38)) a = [];
                    else {
                        T(g, h);
                        Tj(g, b);
                        Ob(g, d);
                        a = e[Qa];
                        if (!a || 0 > a) a = 0;
                        T(g, a);
                        Ob(g, c ? 1 : 0);
                        a = g
                    }
                    a = va(f, a)
                }
                return a
            }

            function Pq(a) {
                var c = a.l,
                    b = a.ja,
                    d = b.keyCode,
                    e = Yj(b),
                    f = [],
                    g = v(f, Xa);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(ak(c, b, d, e | 16)), Ag = !1, Nb(c, function() {
                    Ag = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Zj(a));
                return f
            }

            function Qq(a) {
                var c = a.l;
                a = a.ja;
                var b = [];
                Ag && !Bg && 0 !== a.which && (b.push.apply(b, ak(c, a, a.charCode || a.keyCode, Yj(a))), Bg = !0, Nb(c, function() {
                    Bg = !1
                }, "fv.kp"));
                return b
            }

            function bk(a) {
                var c = a.l,
                    b = zc(a.ja);
                if (!b || Xh(c,
                        b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) uj(e[f]) || d.push.apply(d, pc(c, e[f]));
                    d.push.apply(d, Jq(c, rb(a.l), b))
                }
                return d
            }

            function Rq(a) {
                var c = a.flush;
                a = zc(a.ja);
                "BODY" === Da(a) && c()
            }

            function ck(a, c, b, d) {
                return function() {
                    var e = za(a, c),
                        f = xa(arguments);
                    d.apply(void 0, f);
                    return e
                }
            }

            function dk(a, c, b, d) {
                return E(a, "cm." + b, d)
            }

            function Sq(a, c, b, d, e) {
                return b.length && e ? G(L(function(f, g, h) {
                    return b[h] ? f.concat(G([a, c, d], g)) : f
                }, [], b), u)()(e) : e
            }
            var vd = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "nlzej4hetqp71c81qpn94"
                },
                rg = [],
                ek = Ha(Array.prototype.join, "join"),
                J = ek ? function(a, c) {
                    return ek.call(c, a)
                } : rq,
                ia = fa(function(a, c) {
                    return a === c
                }),
                ad = fa(function(a, c) {
                    a(c);
                    return c
                }),
                md = fa(J),
                ua = fa(Hj),
                qg, Kj = Lb(window),
                Tq = dc(Kj),
                ze = Ha(Array.from, "from"),
                cf = /\./g,
                Jj = Ha(String.prototype.indexOf, "indexOf"),
                Na = ia(null),
                V = ia(void 0),
                og = Object.prototype.hasOwnProperty,
                O = w(fc),
                fk = Ha(Function.prototype.bind, "bind"),
                C = fk ? function() {
                    var a = xa(arguments);
                    return fk.apply(a[0], va([a[1]],
                        a.slice(2)))
                } : pq,
                Jo = fa(G),
                Tl = fa(ma),
                gk = Ha(Array.prototype.reduce, "reduce"),
                L = gk ? function(a, c, b) {
                    return gk.call(b, a, c)
                } : zd,
                Q = dc(n),
                Ka = Q("length"),
                rj = u,
                mf = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return L(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                Ad, oq = u(mg, ia("[object Array]")),
                Uq = u(Dj, v(Q("1"), Fj)),
                hk = Ha(Array.prototype.filter, "filter"),
                W = hk ? function(a, c) {
                    return hk.call(c, a)
                } : Gj,
                mc = fa(W),
                db = Ae(function(a, c) {
                    return Array.prototype.find.call(c, a)
                }, function(a,
                    c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (a.call(c, c[b], b)) return c[b]
                }, Ca("find", Array.prototype.find)),
                H = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : nq,
                oc = dc(H),
                ik = w(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        Hf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        Fg: c
                    }
                }),
                sd = w(function(a) {
                    var c = n(a, "document.documentElement.style");
                    a = n(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || ka(a))
                }),
                jk = Ha(Array.prototype.map, "map"),
                y = jk && jq(window, Array.prototype.map) ?
                function(a, c) {
                    return c && 0 < c.length ? jk.call(c, a) : []
                } : Fj,
                A = y,
                lc = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : lq,
                cb = fa(y),
                Mp = dc(y),
                Ma = Ae(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, Ca("some", Array.prototype.some)),
                He = w(Lb),
                Vq = fa(ng),
                kk = Ha(Array.prototype.reverse, "reverse"),
                Kq = kk ? function(a) {
                    return kk.call(a)
                } : iq,
                lk = dc(parseInt),
                Ba = lk(10),
                Cg = lk(2),
                Aa = Object.entries ? function(a) {
                    return a ?
                        Object.entries(a) : []
                } : Dj,
                ca = Object.keys ? Object.keys : Ej,
                vl = Object.values ? Object.values : Uq,
                x = Object.assign || mq,
                Th = fa(function(a, c) {
                    return x({}, a, c)
                }),
                qd = w(u(Q("String.fromCharCode"), v("fromCharCode", Ca), Eb)),
                sb = w(Q("navigator.userAgent")),
                ye = w(u(sb, Oa(/ipad|iphone|ipod/i))),
                Hf = w(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                Wq = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(" "),
                Of = w(function(a) {
                    var c = ik(a);
                    a = c.Hf;
                    c = c.Fg;
                    var b = ma("indexOf", c);
                    b = Ma(u(b, ia(-1), Eb),
                        Wq);
                    var d = /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/;
                    return a && (!/Safari/.test(c) && /Mobile/.test(c) || d.test(c) || b)
                }),
                rd = w(function(a) {
                    a = ik(a);
                    var c = a.Fg;
                    return a.Hf && !c.match("CriOS")
                }),
                Xq = Oa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                Yq = Oa(/; wv\)/),
                od = w(function(a) {
                    a = sb(a);
                    return Yq(a) || Xq(a)
                }),
                Zq = /Chrome\/(\d+)\./,
                $q = w(function(a) {
                    return (a =
                        (n(a, "navigator.userAgent") || "").match(Zq)) && a.length ? 76 <= Ba(a[1]) : !1
                }),
                kd = w(function(a) {
                    var c = (sb(a) || "").toLowerCase();
                    a = Hf(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                ar = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                br = w(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (V(c)) return null;
                    a = He(a)(c, ar);
                    return -1 === a ? c : "" + a
                }),
                xe = w(u(Q("document.addEventListener"), Eb)),
                mk = w(function(a) {
                    var c = n(a, "navigator") || {};
                    return L(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Bi = w(function(a) {
                    var c = n(a, "navigator") || {};
                    a = mk(a);
                    Fa(a) || (a = "", c = n(c, "languages.0"), Fa(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                Mb = w(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                cr = w(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                dr = w(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                er = w(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Ma(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ma(v(n(a, "document"), n), c) || b || d && Ma(C(d.getAttribute, d), e))
                }),
                fr = w(function(a) {
                    return !!(Ma(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(sb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                gr = w(function(a) {
                    return mf(v(a,
                        n), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                hr = w(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Ka(a) && Ma(u(Q("name"), Oa(/Chrome PDF Viewer/)), a))
                }),
                ir = new RegExp(J("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                So = w(u(Q("navigator.userAgent"),
                    Oa(ir))),
                Ie = w(function(a) {
                    var c = sb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (ye(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && rd(a)
                }),
                jr = vd.construct,
                Dg = xe(window),
                qa = {
                    Sg: 24226447,
                    Mg: 26302566,
                    Ug: 51533966,
                    ak: 65446441,
                    Ja: "https:",
                    Va: "870",
                    dc: jr,
                    Rg: Dg ? 512 : 2048,
                    Pg: Dg ? 512 : 2048,
                    Qg: Dg ? 100 : 400,
                    bk: 100,
                    ck: "noindex"
                },
                Ia = {
                    id: "id",
                    Qe: "ut",
                    $: "type",
                    Zd: "ldc",
                    ib: "nck",
                    vc: "url",
                    Ph: "referrer"
                },
                kr = /^\d+$/,
                Hb = {
                    id: function(a) {
                        a = "" + (a ||
                            "0");
                        kr.test(a) || (a = "0");
                        try {
                            var c = Ba(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    $: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    ib: Boolean,
                    Qe: Boolean
                };
            Ia.fc = "defer";
            Hb.fc = Boolean;
            Ia.Xj = "yaDisableGDPR";
            Ia.Yj = "yaGDPRLang";
            Ia.exp = "experiments";
            Ia.pc = "ecommerce";
            Hb.pc = function(a) {
                if (a) return !0 === a ? "dataLayer" : "" + a
            };
            Ia.O = "params";
            Hb.O = function(a) {
                return mb(a) || ba(a) ? a : null
            };
            Ia.hd = "userParams";
            Ia.Zb = "accurateTrackBounce";
            Ia.Bg = "triggerEvent";
            Hb.Bg = Boolean;
            Ia.lg = "sendTitle";
            Hb.lg = function(a) {
                return !!a || V(a)
            };
            Ia.Me = "trackHash";
            Hb.Me = Boolean;
            Ia.ph = "clickmap";
            Ia.vb = "webvisor";
            Hb.vb = Boolean;
            Ia.Lj = "trustedDomains";
            Ia.zb = "childIframe";
            Hb.zb = Boolean;
            Ia.ed = "trackLinks";
            Ia.yh = "enableAll";
            Ia.ff = "disableFomAnalytics";
            Hb.ff = Boolean;
            var nk = L(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        Vf: c[1],
                        Qi: Hb[b]
                    };
                    return a
                }, {}, Aa(Ia)),
                ec = {},
                P = w(function(a) {
                    return a.id + ":" + a.$
                }),
                ug = ia("1"),
                ok = fa(function(a, c) {
                    var b = c || {};
                    return {
                        l: v(b, N),
                        o: function(d, e) {
                            var f = b[d];
                            return V(f) && !V(e) ? e : f
                        },
                        C: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        Tb: function(d, e) {
                            return "" === e || ka(e) ?
                                this : this.C(d, e)
                        },
                        Aa: v(b, a)
                    }
                }),
                wa = ok(function(a) {
                    var c = "";
                    a = L(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Aa(a));
                    c && a.push(c);
                    return J(":", a)
                }),
                fq = "hash host hostname href pathname port protocol search".split(" "),
                lg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                yj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                pk = qa.Ja + "//mc.yandex.ru/metrika/metrika_match.html",
                Mo = w(function(a) {
                    a = S(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                qk = w(function(a) {
                    return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                be = w(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                lr = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
                he = w(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(lr));
                    return c
                }),
                mr = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                ao = w(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(mr));
                    return c
                }),
                nr = w(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(yj));
                    return c
                }),
                rk = u(S, Q("protocol"), ia("https:")),
                Fp = w(function(a) {
                    return $q(a) && rk(a) ? "SameSite=None;Secure;" : ""
                }),
                or = w(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", B, b)
                    } catch (d) {}
                    return c
                }),
                pr = fa(function(a, c) {
                    return a ? x({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ha = w(function(a) {
                    a = or(a);
                    var c = pr(a),
                        b = {};
                    return x(b, {
                        D: function(d, e, f, g) {
                            A(function(h) {
                                var k = c(g);
                                xj(d, h, f, k, !1)
                            }, e);
                            return C(b.Wb, b, d, e, f, g)
                        },
                        Wb: function(d, e, f, g) {
                            A(function(h) {
                                var k = c(g);
                                xj(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                qr = setTimeout;
            ya.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            ya.prototype.then = function(a, c) {
                var b = new this.constructor(sq);
                Mj(this, new uq(a, c, b));
                return b
            };
            ya.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                        return c.resolve(a()).then(function() {
                            return b
                        })
                    },
                    function(b) {
                        return c.resolve(a()).then(function() {
                            return c.reject(b)
                        })
                    })
            };
            ya.all = function(a) {
                return new ya(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g,
                        e[g])
                })
            };
            ya.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === ya ? a : new ya(function(c) {
                    c(a)
                })
            };
            ya.reject = function(a) {
                return new ya(function(c, b) {
                    b(a)
                })
            };
            ya.race = function(a) {
                return new ya(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) ya.resolve(a[d]).then(c, b)
                })
            };
            ya.Ue = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                qr(a, 0)
            };
            ya.Wg = function(a) {
                "undefined" !== typeof console &&
                    console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                rr = Ha(K, "Promise"),
                sk = Ha(n(K, "resolve"), "resolve"),
                tk = Ha(n(K, "reject"), "reject"),
                uk = Ha(n(K, "all"), "all");
            if (H(!1, [rr, sk, tk, uk])) K = ya;
            else {
                var Je = function(a) {
                    return new Promise(a)
                };
                Je.resolve = C(sk, K);
                Je.reject = C(tk, K);
                Je.all = C(uk, K);
                K = Je
            }
            var Op = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Dd, Dc = function(a) {
                    return function(c) {
                        if (Dd) return new Dd(c);
                        if (Ca("Error",
                                a.Error)) return Dd = a.Error, new a.Error(c);
                        Dd = eq;
                        return new Dd(c)
                    }
                }(window),
                Pp = Oa(/^http./),
                Np = Oa(/^err.kn/),
                aq = /[^a-z0-9.:-]/,
                xi = /^\s+|\s+$/g,
                wj = Ha(String.prototype.trim, "trim"),
                vk = fa(function(a, c) {
                    return c.replace(a, "")
                }),
                vh = vk(/\s/g),
                Kb = vk(/\D/g),
                sr = w(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                Wa = w(u(Q("document"), v("createElement", cc))),
                Yh = w(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ? (a = db(function(b) {
                        return Ca(b, c[b])
                    }, ["matches", "webkitMatchesSelector",
                        "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"
                    ])) ? c[a] : null : null
                }),
                tr = ia("INPUT"),
                ve = u(Da, tr),
                ur = ia("TEXTAREA"),
                Yp = u(Da, ur),
                vr = ia("SELECT"),
                Zp = u(Da, vr),
                we = u(Q("type"), Oa(/^(checkbox|radio)$/)),
                wf = u(Da, Oa(/^INPUT|SELECT|TEXTAREA$/)),
                Vd = u(Da, Oa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Bf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Xp = ["submit", "image", "hidden"],
                wk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                kh = w(function() {
                    for (var a = 59, c = {}, b = 0; b < wk.length; b += 1) c[wk[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                sj = w(function(a) {
                    return {
                        rk: a,
                        bb: null,
                        lb: []
                    }
                }),
                pj = {},
                gg = {};
            pj.p = 500;
            var oj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            gg.h = !0;
            gg.c = !0;
            var Oc = {};
            Oc.p = hg;
            Oc.c = function(a, c, b) {
                (a = nb(n(c, "textContent"))) && b && (b = b(c), b.length && Ma(u(Q("textContent"), nb, ia(a)), b) && (a = ""));
                ve(c) && (a = nb(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var Rc, fg = "button," + y(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button",
                    "submit", "reset", "file"
                ]).join(",") + ",a",
                mh = v(fg, ub),
                Up = (Rc = {}, Rc.A = "h", Rc.BUTTON = "i", Rc.DIV = "i", Rc.INPUT = "ty", Rc),
                Ed;
            var xc = [lj, 0, Sb, eg, wd];
            var xk = [Sb];
            xk.push(eg);
            var yk = Fb(xk),
                Sc = Fb([wd]),
                wr = Fb([lj, wd]),
                Ke = Fb([0, Sb, eg, wd]),
                ra = {};
            x(ra, (Ed = {}, Ed.h = yk, Ed.f = yk, Ed.er = Sc, Ed));
            ra.d = Sc;
            ra.pi = Sc;
            ra.m = wr;
            ra["2"] = xc;
            ra.t = xc;
            ra.a = Ke;
            ra.n = xc;
            ra.r = Ke;
            ra["1"] = Ke;
            ra.g = Ke;
            ra.c = Sc;
            ra.ci = Fb([Sb]);
            ra.e = xc;
            ra.adb = Sc;
            ra["5"] = xc;
            var Xc = w(function(a, c) {
                    var b;
                    (b = c ? ra[c] : xc) || (b = []);
                    b = L(function(d, e, f) {
                        (e = e && e(a)) && d.push([f,
                            e
                        ]);
                        return d
                    }, [], b);
                    b.length || kg();
                    return b
                }, vb),
                xr = oc([26812653]),
                Mf = w(u(Q("id"), xr), P),
                bc = ["0", "1", "2", "3"],
                Nc = bc[0],
                Nf = bc[1],
                Ip = bc[2],
                Rf = y(u(N, ma("concat", "GDPR-ok-view-detailed-")), bc),
                ge = va("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Rf, ["28", "29", "30"]),
                Hp = "3 13 14 15 16 17 28".split(" "),
                Qf = u(cb(Q("ymetrikaEvent.type")), mc(oc(ge))),
                ij = Gb("gsc", gj),
                Gp = /:\d+$/,
                vq = w(function(a) {
                    var c = (S(a).host ||
                        "").split(".");
                    return 1 === c.length ? c[0] : L(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = J(".", c.slice(-e)), Zh(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                ac = w(Gc),
                Ep = w(function(a) {
                    ej(a, "_ymBRC", "1");
                    var c = "1" !== dj(a, "_ymBRC");
                    c || fj(a, "_ymBRC");
                    return c
                }),
                Pa = w(af),
                Tc = w(af, function(a, c, b) {
                    return "" + c + b
                }),
                aa = w(Tf),
                bj = Gb("r", function(a, c) {
                    var b = aj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Md = w(bf, function(a, c) {
                    return "{" + c.Zd + c.ib
                }),
                Si = w(Pc, P),
                bh = u(Md, wc),
                Yi = fa(function(a, c) {
                    for (var b = []; !ud(c);) {
                        var d = Cp(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Eg = fa(function(a, c) {
                    return ua(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Le = fa(function(a, c) {
                    return ua(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Ya(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Zf = [],
                $f = !1,
                Yf = !1,
                wq = w(function(a) {
                    if (a = Wa(a)) return a("a")
                }),
                Ri = ["webkitvisibilitychange", "visibilitychange"],
                Qi = ok(function(a) {
                    a = Aa(a);
                    return J("", y(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Na(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Ib = G([1, null], Ae),
                bd = G([1, 0], Ae),
                Bo = /^ *(data|javascript):/i,
                ti = new RegExp(J("", ["\\.(" + J("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ja, Dq = (Ja = {}, Ja.hit = "h", Ja.experiments = "ex", Ja.params = "p", Ja.reachGoal = "g", Ja.userParams = "up", Ja.trackHash = "th", Ja.accurateTrackBounce =
                    "atb", Ja.notBounce = "nb", Ja.addFileExtension = "fe", Ja.extLink = "el", Ja.file = "fc", Ja.trackLinks = "tl", Ja.destruct = "d", Ja.setUserID = "ui", Ja.getClientID = "ci", Ja.clickmap = "cm", Ja.enableAll = "ea", Ja),
                yr = Oa(/^.+\.mtproxy\.yandex\.net$/),
                vf = w(function(a) {
                    if ("MetrikaPlayer" === a.name) return !0;
                    a = S(a).hostname;
                    return yr(a)
                }),
                ne = w(function() {
                    return {
                        Nb: {},
                        pending: {},
                        Ab: {}
                    }
                }),
                Fg = Q("postMessage"),
                zr = F("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = ne(a),
                        g = J(":", [c.Z.nc, c.Z.key]);
                    if (Fg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.vg,
                                "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        X(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Ar = F("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = ne(a),
                        l = null;
                    try {
                        g = Bb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!ka(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ka(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !ba(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Na(k) && Fg(k) && (f = d.R(l.type, [f, l]), e = y(u(N, Th(e)), f.concat([{}])),
                                    l = b([c, a, l.counterId], e), k.postMessage(l.vg, "*"))
                            }
                        } else g === "" + h && ba(l) && W(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[J(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                Ki = w(function(a, c) {
                    var b, d = cc("getElementsByTagName", n(a, "document")),
                        e = ne(a),
                        f = Fg(a),
                        g = cd(a),
                        h = ha(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Vb(a), b);
                    up(a, g);
                    b = vp(a, f);
                    var k = G([a, v([], b)], zr);
                    A(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (q) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(q, p) {
                            g.R("initToParent", [q, p])
                        })
                    }, d);
                    Mb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.R("parentConnect", [l, m])
                    });
                    h.D(a, ["message"], G([a, c, b, g, f], Ar));
                    return {
                        aa: g,
                        Nb: e.Nb,
                        Ab: e.Ab,
                        Ce: k
                    }
                }, u(vb, P)),
                je = w(Pi, u(vb, P)),
                Br = F("pa.plgn", function(a, c) {
                    var b = je(a, c);
                    b && b.aa.D(["pluginInfo"], E(a, "c.plgn", function() {
                        var d = O(a);
                        d.C("cmc", d.o("cmc", 0) + 1);
                        return hq(c, nk)
                    }))
                }),
                wb, Ac, nf = (wb = {}, wb.transaction_id = "id", wb.item_id = "id", wb.item_name = "name", wb.item_brand = "brand", wb.promotion_name =
                    "coupon", wb.index = "position", wb.item_variant = "variant", wb.value = "revenue", wb.item_category = "category", wb),
                Lh = (Ac = {}, Ac.view_item = "detail", Ac.add_to_cart = "add", Ac.remove_from_cart = "remove", Ac.begin_checkout = "checkout", Ac.purchase = "purchase", Ac),
                om = "currencyCode add delete remove purchase checkout detail".split(" "),
                Me = fa(function(a, c) {
                    return O(c).o(a, null)
                }),
                Cr = w(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                Dr = u(P, Cr, Ga),
                $a = {
                    mc: function(a) {
                        a = fc(a).o("mt", {});
                        a = Aa(a);
                        return a.length ? L(function(c,
                            b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    }
                };
            $a.oo = Me("oo");
            $a.pmc = Me("cmc");
            $a.clc = function(a) {
                var c = O(a).o("cls", {
                        cc: 0,
                        x: 0,
                        y: 0
                    }),
                    b = c.cc,
                    d = c.x;
                c = c.y;
                return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
            };
            $a.lt = function(a) {
                var c = fc(a).o("lt", null);
                return c ? a.Math.round(100 * c) : c
            };
            $a.yu = function(a) {
                var c = S(a);
                return H(c.hostname, ["dzen.ru", "ya.ru"]) ? (Gc(a, "").o("yandexuid") || "").substring(0, 25) : null
            };
            $a.re = u(function(a, c) {
                return !c.ib && bj(a, c)
            }, Ib);
            $a.aw = function(a) {
                a = db(u(ka,
                    Eb), [a.document.hidden, a.document.msHidden, a.document.webkitHidden]);
                return ka(a) ? null : bd(!a)
            };
            $a.ifc = function(a) {
                return fc(a).o("ifc")
            };
            $a.ifb = function(a) {
                return fc(a).o("ifb")
            };
            $a.rqnt = function(a, c, b) {
                a = b.G;
                return !a || a.nohit ? null : Dr(c)
            };
            $a.ecs = function(a) {
                return fc(a).o("ecs")
            };
            $a.csi = Me("scip");
            var Er = ca($a),
                Oi = w(function() {
                    return {
                        pf: null,
                        Dc: []
                    }
                }, P),
                Fr = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart",
                        "navigationStart"
                    ],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                kb, Gr = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Ni = (kb = {}, kb.responseEnd = 1, kb.domInteractive = 1, kb.domContentLoadedEventStart = 1, kb.domContentLoadedEventEnd = 1, kb.domComplete = 1, kb.loadEventStart = 1, kb.loadEventEnd = 1, kb.unloadEventStart = 1, kb.unloadEventEnd = 1, kb.secureConnectionStart = 1, kb),
                Hr = w(Od),
                pp = {
                    "*": "+",
                    "-": "/",
                    fk: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Fd = w(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Be("log", c) ? C(c, a) : B;
                    var b = n(a, "warn");
                    b = Be("warn", b) ? C(b, a) : c;
                    var d = n(a, "error");
                    a = Be("error", d) ? C(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Ir = F("p.cd", function(a, c) {
                    if (kd(a) || ye(a)) {
                        var b = Pa(a);
                        if (ka(b.o("jn"))) {
                            b.C("jn", !1);
                            var d = a.lk || rd(a) ? function() {} : /./,
                                e = Fd(a, P(c));
                            d.toString = function() {
                                b.C("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                np = /Firefox\/([0-9]+)/,
                mp = /([0-9\\.]+) Safari/,
                Jr = /\sYptp\/\d\.(\d+)\s/,
                op = /Edg\/(\d+)\./,
                zk = w(function(a) {
                    var c;
                    a: {
                        if ((c = sb(a)) && (c = Jr.exec(c)) && 1 < c.length) {
                            c = Ba(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || Ii(a, 79) ? !1 : !Ie(a) || Of(a)
                }),
                gh = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                sl = w(function(a) {
                    a = Wa(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = C(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Ak = Ha(String.prototype.repeat, "repeat"),
                Kr = Ak ? function(a, c) {
                    return Ak.call(a, c)
                } : kq,
                Kh = v(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = Kr(c, b);
                    return a ? c + d : d + c
                }),
                Ce = [2277735313, 289559509],
                De = [1291169091,
                    658871167
                ],
                Bk = /\/$/,
                Lr = w(u(aa, ua(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Mr = u(aa, ua(function(a) {
                    a = new a.l.Date;
                    return J("", y(Dp, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                Nr = u(aa, ua(qe)),
                Ck = w(u(aa, ua(function(a) {
                    return a.ta[0]
                }))),
                Or = w(Pc),
                Pr = w(Pc),
                Qr = w(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (U(c) && !kd(a)) return (new K(C(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d =
                            d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](v(!0, N));
                    if (sd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(V(c));
                    c = n(a, "openDatabase");
                    if (rd(a) && U(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Rr = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Sr = w(function(a, c) {
                    var b = ac(a),
                        d = S(a).search.match(Rr);
                    return d && 2 <= d.length ? (d = d[2], c.ib || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                Tr = w(function(a) {
                    return U(n(a,
                        "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                }),
                da, Jb, Ur = w(function(a) {
                    a = O(a);
                    var c = a.o("counterNum", 0) + 1;
                    a.C("counterNum", c);
                    return c
                }, u(vb, P)),
                Db = (da = {}, da.vf = v(vd.version, N), da.nt = br, da.fp = function(a, c, b) {
                        if (b.G && b.G.nohit) return null;
                        c = P(c);
                        b = Or(a);
                        if (b[c]) return null;
                        a: {
                            var d = Ck(a),
                                e = n(a, "performance.getEntriesByType");
                            if (U(e)) {
                                if (a = W(u(N, Q("name"), ia("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                    a = a[0].startTime;
                                    break a
                                }
                            } else {
                                e = n(a, "chrome.loadTimes");
                                if (U(e) && (e = e.call(a.chrome),
                                        e = n(e, "firstPaintTime"), d && e)) {
                                    a = 1E3 * e - d;
                                    break a
                                }
                                if (a = n(a, "performance.timing.msFirstPaint")) {
                                    a -= d;
                                    break a
                                }
                            }
                            a = void 0
                        }
                        return a ? (b[c] = a, Math.round(a)) : null
                    }, da.fu = function(a, c, b) {
                        var d = b.G;
                        if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace(Bk, "");
                        b = (d["page-ref"] || "").replace(Bk, "");
                        d = d["page-url"];
                        a = S(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                        return b
                    }, da.en = sr, da.la = mk, da.ut = function(a, c, b) {
                        var d = b.Lc;
                        (b = b.G) && (nr(a) || c.Qe || d) && (b.ut = "noindex");
                        return null
                    }, da.v = v(qa.Va, N), da.cn = Ur,
                    da.dp = function(a) {
                        var c = O(a),
                            b = c.o("bt", {});
                        if (V(c.o("bt"))) {
                            var d = n(a, "navigator.getBattery");
                            try {
                                b.p = d && d.call(a.navigator)
                            } catch (e) {}
                            c.C("bt", b);
                            b.p && b.p.then && b.p.then(E(a, "bi:dp.p", function(e) {
                                b.Sj = n(e, "charging") && 0 === n(e, "chargingTime")
                            }))
                        }
                        return bd(b.Sj)
                    }, da.ls = w(function(a, c) {
                        var b = Tc(a, c.id),
                            d = aa(a),
                            e = b.o("lsid");
                        return +e ? e : (d = Ra(a, 0, d(Y)), b.C("lsid", d), d)
                    }, vb), da.hid = Vb, da.z = Lr, da.i = Mr, da.et = Nr, da.c = u(Q("navigator.cookieEnabled"), Ib), da.rn = u(N, Ra), da.rqn = function(a, c, b) {
                        b = b.G;
                        if (!b || b.nohit) return null;
                        c = P(c);
                        a = Tc(a, c);
                        c = (a.o("reqNum", 0) || 0) + 1;
                        a.C("reqNum", c);
                        if (a.o("reqNum") === c) return c;
                        a.oc("reqNum");
                        return null
                    }, da.u = Md, da.tp = u(vb, Aj, Ib), da.tpid = u(vb, function(a) {
                        a = P(a);
                        return ec[a] && ec[a].Hj || null
                    }), da.w = function(a) {
                        a = yd(a);
                        return a[0] + "x" + a[1]
                    }, da.s = function(a) {
                        var c = n(a, "screen");
                        if (c) {
                            a = n(c, "width");
                            var b = n(c, "height");
                            c = n(c, "colorDepth") || n(c, "pixelDepth");
                            return J("x", [a, b, c])
                        }
                        return null
                    }, da.sk = Q("devicePixelRatio"), da.ifr = u(Mb, Ib), da.j = u(dr, Ib), da.sti = function(a) {
                        return Mb(a) ? cr(a) ? "1" :
                            null : null
                    }, da);
            Db.pri = function(a) {
                if (od(a)) return null;
                var c = Pr(a),
                    b = c.Yf;
                V(b) && (c.Yf = null, Qr(a).then(function(d) {
                    c.Yf = d
                }));
                return b ? 1 : null
            };
            x(Db, (Jb = {}, Jb.iss = u(er, Ib), Jb.hdl = u(fr, Ib), Jb.iia = u(gr, Ib), Jb.cpf = u(hr, Ib), Jb.ntf = w(function(a) {
                a: switch (n(a, "Notification.permission")) {
                    case "denied":
                        a = !1;
                        break a;
                    case "granted":
                        a = !0;
                        break a;
                    default:
                        a = null
                }
                return Na(a) ? null : a ? 2 : 1
            }), Jb.eu = Me("isEU"), Jb.ns = Ck, Jb.np = function(a) {
                if (Ra(a, 0, 100)) a = null;
                else {
                    a = nb(Hf(a), 100);
                    for (var c = [], b = 0; b < a.length; b++) {
                        var d =
                            a.charCodeAt(b);
                        128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                    }
                    a = Qh(c)
                }
                return a
            }, Jb));
            Db.ds = function(a, c, b) {
                c = P(c);
                a = kj(a);
                b = b.G;
                if ((void 0 === b ? {} : b).nohit) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Gr);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Fr, d = e)
                }
                if (!b) return null;
                a = rp(a, d, b);
                c = Hr(c);
                return (c = qp(c, a)) && J(",", c)
            };
            Db.bu = Tr;
            Db.td = Sr;
            Db.wv = v(2, N);
            Db.co = function(a) {
                return bd(O(a).o("jn"))
            };
            var Vr =
                ca(Db);
            Db.we = function(a, c) {
                return Ib(c.vb)
            };
            var jp = Vr.concat(Er),
                hp = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                dp = fa(function(a, c) {
                    if (!c[a]) {
                        var b, d = new K(function(e) {
                            b = e
                        });
                        c[a] = {
                            cg: b,
                            Qa: d,
                            dg: !1
                        }
                    }
                    return c[a].Qa
                }),
                Ji = w(u(Pc, ua)),
                mi = u(Q("settings.pcs"), ia("1")),
                Gg = w(function(a, c, b) {
                    var d = O(a);
                    c = Pa(a);
                    var e = [];
                    b = G([a, b, d, c], kp);
                    od(a) || lp(a, "14.1") || e.push(G([gp, "pp", ""], b));
                    var f = zk(a) && !Hi(a, 68);
                    f || e.push(G([ip, "pu", ""], b));
                    f || c.Sd || Ie(a) || (e.push(G([cp, "zzlc", "na"], b)),
                        e.push(G([bp, "cc", ""], b)));
                    return e.length ? {
                        Ia: function(g, h) {
                            if (0 === d.o("isEU")) try {
                                A(u(N, Ga), e)
                            } catch (k) {}
                            h()
                        },
                        ca: function(g, h) {
                            var k = g.J;
                            if (k && 0 === d.o("isEU")) try {
                                A(ua(k), e)
                            } catch (l) {}
                            h()
                        }
                    } : {}
                }, function(a, c, b) {
                    return P(b)
                }),
                pd = Gb("retryReqs", function(a) {
                    return Pa(a).o("retryReqs", {})
                }),
                ap = ["0"],
                Gl = F("g.r", function(a) {
                    var c = aa(a),
                        b = pd(a),
                        d = c(Y),
                        e = Vb(a);
                    return L(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, f.push({
                            protocol: k.protocol,
                            host: k.host,
                            mj: k.resource,
                            gj: k.postParams,
                            O: k.params,
                            fh: k.browserInfo,
                            Ua: k.telemetry,
                            wk: k.ghid,
                            time: k.time,
                            Rb: Ba(h),
                            rh: k.counterId,
                            $: k.counterType
                        }));
                        return f
                    }, [], Aa(b))
                }),
                Pf = [],
                $o = "ru en et fi lt lv pl fr no sr".split(" "),
                Tb, Yo = (Tb = {}, Tb["GDPR-ok"] = "ok", Tb["GDPR-ok-view-default"] = "ok-default", Tb["GDPR-ok-view-detailed"] = "ok-detailed", Tb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Tb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Tb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Tb["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Tb),
                ie = [],
                Ci = u(Qf, cb(Tq(ge)), md(",")),
                Di = u(mc(oc(ge)), Ka, Boolean),
                Ro = w(function(a, c) {
                    var b = c.o("gdpr");
                    return H(b, bc) ? "-" + b : ""
                }),
                lb, bb, No = (lb = {}, lb.am = "com.am", lb.tr = "com.tr", lb.ge = "com.ge", lb.il = "co.il", lb["\u0440\u0444"] = "ru", lb["xn--p1ai"] = "ru", lb["\u0443\u043a\u0440"] = "ua", lb["xn--j1amh"] = "ua", lb["\u0431\u0435\u043b"] = "by", lb["xn--90ais"] = "by", lb),
                Dk = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                Po = (bb = {}, bb.ka = "ge", bb.ro = "md", bb.tg = "tj", bb.tk = "tm", bb.et = "ee", bb.hy = "com.am", bb.he = "co.li", bb.ky = "kg", bb.uk = "ua", bb.be = "by", bb.tr = "com.tr", bb.kk = "kz", bb),
                Ek = w(Od),
                Wr = w(function() {
                    var a = u(mc(u(N, ia("ru"), Eb)), Jc(function(c, b) {
                        c[b] = ["mc.yandex." + b];
                        return c
                    }, {}))(lg);
                    A(function(c) {
                        a[c] = [c]
                    }, ca(Dk));
                    return a
                }),
                Xr = w(function(a) {
                    var c = S(a).hostname;
                    return L(function(b, d) {
                        var e = d[0];
                        d[1].test(c) && b.push(e);
                        return b
                    }, [], Aa(Dk))
                }),
                Yr = fa(function(a, c) {
                    var b = qk(c),
                        d = Oo(c),
                        e = Xr(c) || [Lo(c)],
                        f = aa(c),
                        g = Pa(c),
                        h = g.o("synced", {});
                    b = b ? e.concat(d) : e;
                    h && (b = W(function(k) {
                        var l = (h[k] || 1) + 1440 < f(gb);
                        l && delete h[k];
                        return l
                    }, b));
                    g.C("synced", h);
                    return L(function(k, l) {
                        A(function(m) {
                            var q = {
                                domain: m,
                                Ii: l
                            };
                            Wb(m, "/") && (q.si = 1);
                            k.push(q)
                        }, a[l] || []);
                        return k
                    }, [], b)
                }),
                Zr = function(a, c) {
                    return function(b, d, e) {
                        d = P(e);
                        d = Wr(d);
                        var f = Yr(d);
                        return Ie(b) || sd(b) ? {} : {
                            ca: function(g, h) {
                                var k = g.J,
                                    l = O(b),
                                    m = qk(b),
                                    q = Mb(b);
                                k = !(k && k.o("pv"));
                                if (!m || q || k) return h();
                                m = f(b);
                                if (!m.length) return h();
                                if (l.o("startSync")) Ek(b).push(h);
                                else {
                                    l.C("startSync", !0);
                                    l = G([b, m, B], a);
                                    m = Pf[0];
                                    if (!m) return h();
                                    m(b).then(l).then(h, u(ad(h), E(b, c)))["catch"](B)
                                }
                            }
                        }
                    }
                }(function(a, c) {
                    var b = aa(a),
                        d = O(a),
                        e = Pa(a),
                        f = Xc(a, "c"),
                        g = zb(a, f);
                    return L(function(h, k) {
                        function l() {
                            var p = e.o("synced");
                            d.C("startSync", !1);
                            p && (p[k.Ii] = q, e.C("synced", p));
                            A(Ga, Ek(a))
                        }
                        var m = g({
                                na: ["sync.cook"]
                            }, [qa.Ja + "//" + k.domain + (k.si ? "" : "/sync_cookie_image_check")], {
                                tb: 1500
                            }),
                            q;
                        m.then(function() {
                            q = b(gb);
                            l()
                        })["catch"](function() {
                            q = b(gb) - 1435;
                            l()
                        });
                        m = v(m, N);
                        return h.then(m)
                    }, K.resolve(""), c)["catch"](E(a,
                        "ctl"))
                }, "sy.c"),
                zi = !1,
                Ko = /^[a-z][\w.+-]+:/i,
                Fk = {},
                Gk = w(Od),
                Ne, Cb = [
                    [Vf, 1],
                    [td, 2],
                    [Qb(), 3],
                    [Uf, 4]
                ],
                Ub = v(Cb, vi);
            Ub(Zr, 5);
            Ub(function(a, c, b) {
                return {
                    Ia: function(d, e) {
                        var f = za(a, b);
                        (f = f && f.userParams) && d.hd && f(d.hd);
                        e()
                    }
                }
            }, 0);
            Ub(Ai, 6);
            Ub(yi, 7);
            Ub(Gg, 8);
            Ub(function(a) {
                return {
                    ca: function(c, b) {
                        var d = c.J,
                            e = Pa(a).o("fip");
                        e && d && (d.C("fip", e), ee(c, "fip", bd(e)));
                        b()
                    }
                }
            }, 9);
            Ub(ke(), 100);
            var tb = (Ne = {}, Ne.h = Cb, Ne.er = [], Ne);
            la("adb");
            la("f", Qb(), 1);
            la("f", Uf, 2);
            la("f", Gg, 3);
            tb["2"] = Cb;
            Ub(function(a, c, b) {
                return {
                    ca: function(d,
                        e) {
                        if (d.O && (zj(b, d.O), !d.ba && d.J && d.G)) {
                            var f = hb(a, d.O),
                                g = Gk(a),
                                h = d.J.o("pv");
                            f && !d.G.nohit && (h ? encodeURIComponent(f).length > qa.Pg ? g.push([d.J, d.O]) : d.G["site-info"] = f : (d.ba = f, d.Pi = !0))
                        }
                        e()
                    },
                    Ia: function(d, e) {
                        var f = Gk(a),
                            g = za(a, b),
                            h = g && g.params;
                        h && (g = W(u(Q("0"), ia(d.J)), f), A(function(k) {
                            h(k[1]);
                            k = He(a)(k, f);
                            f.splice(k, 1)
                        }, g));
                        e()
                    }
                }
            }, -1);
            tb["1"] = W(u(Q("0"), ia(Uf), Eb), Cb);
            Ub(function(a, c, b) {
                return {
                    ca: function(d, e) {
                        var f = d.J,
                            g = d.G;
                        if (!f || !g) return e();
                        !Fk[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp,
                            Fk[b.id] = !0);
                        f = g["page-ref"];
                        var h = g["page-url"];
                        f && h !== f ? g["page-ref"] = wi(a, f) : delete g["page-ref"];
                        g["page-url"] = wi(a, h).slice(0, qa.Rg);
                        return e()
                    }
                }
            }, -100);
            tb.a = Cb;
            tb.g = Cb;
            tb.e = Cb;
            la("r", td, 1);
            la("r", function() {
                    return function(a) {
                        return {
                            ca: function(c, b) {
                                var d = c.J,
                                    e = void 0 === d ? wa() : d,
                                    f = c.Rb,
                                    g = c.Ua,
                                    h = pd(a);
                                d = e.o("rqnl", 0) + 1;
                                e.C("rqnl", d);
                                var k = e = n(h, J(".", [f, "browserInfo"]));
                                e && (e.rqnl = d);
                                g && (g.C("rqnl", d), f = n(h, J(".", [f, "telemetry"]))) && (f.rqnl = d, k = k || e);
                                k && Sf(a);
                                b()
                            },
                            Ia: function(c, b) {
                                Gi(a, c);
                                b()
                            }
                        }
                    }
                }(),
                2);
            tb.t = Cb;
            la("n", Vf, 1);
            la("n", td, 2);
            la("n", Qb(), 3);
            la("n", Ai, 4);
            la("n", Gg, 5);
            la("n", yi, 6);
            la("n", ke(), 100);
            la("d", Qb(["hid", "u", "v", "vf"]), 1);
            la("m", Qb(["u", "v", "vf"]), 1);
            la("m", ke(), 2);
            la("pi");
            tb["5"] = W(u(Q("0"), oc([Vf, td]), Eb), Cb);
            var Oe, Hk = C(K.reject, K, Za()),
                sa = (Oe = {}, Oe.h = Ta, Oe.er = v(Hk, N), Oe);
            sa.a = Ta;
            sa.f = Ta;
            sa.n = Ta;
            sa["1"] = Ta;
            sa.n = Ta;
            sa.c = zb;
            sa.g = Ta;
            sa.e = Ta;
            sa["2"] = Ta;
            sa.r = function(a, c, b) {
                var d = le(a, c, b),
                    e = Ta(a, c, b);
                return function(f, g, h) {
                    return "webvisor" === h ? d(f, g, f.G["wv-part"]) : e(f, g)
                }
            };
            sa.adb = me;
            sa.pi = zb;
            sa.m = function(a, c, b) {
                return function(d, e) {
                    var f, g = d.G;
                    g = (f = {}, f["page-url"] = g && g["page-url"] || "", f);
                    f = x(d, {
                        G: x(d.G || {}, g)
                    });
                    return me(a, c, b)(f, "clmap/" + e.id)["catch"](E(a, "c.m"))
                }
            };
            sa.d = Ta;
            sa.t = Ta;
            sa["5"] = Ta;
            var ta = F("g.sen", function(a, c, b) {
                    var d = Xc(a, c);
                    b = Go(a, c, b);
                    var e = sa[c],
                        f = e ? e(a, d, b) : Ta(a, d, b);
                    return function() {
                        var g = xa(arguments),
                            h = g.slice(1);
                        g = x(g[0], {
                            na: [c]
                        });
                        return f.apply(void 0, va([g], h))
                    }
                }, Hk),
                $r = F("dc.init", function(a, c) {
                    var b = S(a),
                        d = Fd(a, c),
                        e = ac(a),
                        f = Cf(a),
                        g = f.Ai;
                    f = f.ri;
                    g && !f && e.C("debug", "1", void 0, b.host);
                    return uf(a) || !g && !f ? {
                        log: B,
                        warn: B,
                        error: B
                    } : d
                }),
                de = w($r, vb),
                as = E(window, "h.p", function(a, c) {
                    var b, d, e = ta(a, "h", c),
                        f = c.vc || "" + S(a).href,
                        g = c.Ph || a.document.referrer,
                        h = {
                            J: wa((b = {}, b.pv = 1, b)),
                            G: (d = {}, d["page-url"] = f, d["page-ref"] = g, d)
                        };
                    h.O = c.O;
                    h.hd = c.hd;
                    c.fc && h.G && (h.G.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.fc || Ab(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.O)(), Nb(a, G([a, c, k], ep)))
                    })["catch"](E(a, "h.g.s"))
                }),
                nd = w(Pc, P),
                bs = F("p.ar",
                    function(a, c) {
                        var b = ta(a, "a", c);
                        return function(d, e, f, g, h, k) {
                            var l, m, q = {
                                G: {},
                                J: wa((l = {}, l.pv = 1, l.ar = 1, l))
                            };
                            if (d) return e = mb(e) ? {
                                title: e.title,
                                $f: e.referer,
                                O: e.params,
                                Wa: e.callback,
                                l: e.ctx
                            } : {
                                title: e,
                                $f: f,
                                O: g,
                                Wa: h,
                                l: k
                            }, f = nd(c), f.url !== d && (f.ref = f.url, f.url = d), d = d || S(a).href, f = e.$f || f.ref || a.document.referrer, g = Ab(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.O), q = b(x(q, {
                                O: e.O,
                                title: e.title,
                                G: x(q.G, (m = {}, m["page-url"] = d, m["page-ref"] = f, m))
                            }), c).then(g), Mc(a, "p.ar.s", q, e.Wa || B, e.l)
                        }
                    }),
                Pe = fa(function(a, c) {
                    return Fo(a, c)
                }),
                cs = F("c.c.cc", function(a) {
                    var c = O(a),
                        b = u(Pe(a), function(d) {
                            var e;
                            return x({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e))
                        });
                    return E(a, "g.c.cc", u(C(c.o, c, "counters", {}), ca, cb(b)))
                }),
                ds = F("gt.c.rs", function(a, c) {
                    var b, d = P(c),
                        e = c.id,
                        f = c.$,
                        g = c.ph,
                        h = c.vb,
                        k = c.Me,
                        l = G([a, d], Eo);
                    ui(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.webvisor = !!h, b.trackHash = !!k, b));
                    return l
                }),
                Pj, es = F("th.e", function(a, c) {
                    function b() {
                        f || (h = ld(a, "onhashchange") ? ha(a).D(a, ["hashchange"],
                            g) : yq(a, g))
                    }
                    var d = ta(a, "t", c),
                        e = ce(a, P(c)),
                        f = !1,
                        g = E(a, "h.h.ch", C(zq, null, a, c, d)),
                        h = B;
                    c.Me && (b(), f = !0);
                    return {
                        Ij: E(a, "tr.hs.h", function(k) {
                            var l;
                            k ? b() : h();
                            f = !!k;
                            e((l = {}, l.trackHash = f, l))
                        }),
                        unsubscribe: h
                    }
                }),
                Ik = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                fs = w(function() {
                    return L(function(a, c) {
                        var b = wc(c + "/tag.js");
                        Ik[b] || (a[b] = 1);
                        return a
                    }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                Qj = 1,
                vg = {},
                Ee = {},
                hs = F("nb.p", function(a, c) {
                    function b(D) {
                        k() || (D = "number" === typeof D ? D : 15E3, D = Bq(a, d(!1), D), r = D.id, z = D.ef, l())
                    }

                    function d(D) {
                        return function(M) {
                            var ea, La, ob;
                            void 0 === M && (M = (ea = {}, ea.ctx = {}, ea.callback = B, ea));
                            if (D || !p && !h.Sd) {
                                p = !0;
                                l();
                                r && Aq(a, r);
                                var Xb = m(Y);
                                ea = (Ba(h.o("lastHit")) || 0) < Xb - 18E5;
                                var Fc = .1 > Math.random();
                                h.C("lastHit", Xb);
                                Xb = wa((La = {}, La.nb = "1", La.cl = t, La.ar = "1", La));
                                La = nd(c);
                                La = {
                                    G: (ob = {}, ob["page-url"] = La.url || S(a).href, ob),
                                    J: Xb
                                };
                                ob = Fd(a, P(c)).warn;
                                !M.callback && M.ctx && ob('"callback" argument missing');
                                if (D || ea || Fc || !xp(a.location.href, a.document.referrer)) return ob = f(La, c).then(function() {
                                    if (!D) {
                                        var hc = .002,
                                            ic = c.id === qa.Sg ? 1 : .002,
                                            jc, Uc, Hg, Qe, Ig;
                                        void 0 === hc && (hc = 1);
                                        void 0 === ic && (ic = 1);
                                        var Gd = a.performance;
                                        if (Gd && U(Gd.getEntriesByType) && (hc = Math.random() > hc, ic = Math.random() > ic, !hc || !ic)) {
                                            Gd = a.performance.getEntriesByType("resource");
                                            for (var Re = {}, Jg = {}, Se = {}, gs =
                                                    fs(a), Kg = 0; Kg < Gd.length; Kg += 1) {
                                                var xb = Gd[Kg],
                                                    Te = xb.name.replace(/^https?:\/\//, "").split("?")[0],
                                                    Jk = wc(Te),
                                                    Kk = (jc = {}, jc.dns = Math.round(xb.domainLookupEnd - xb.domainLookupStart), jc.tcp = Math.round(xb.connectEnd - xb.connectStart), jc.duration = Math.round(xb.duration), jc.response = Math.round(xb.responseEnd - xb.requestStart), jc);
                                                "script" !== xb.initiatorType || hc || (Jg[Te] = x(Kk, (Uc = {}, Uc.name = xb.name, Uc.decodedBodySize = xb.decodedBodySize, Uc)));
                                                !Ik[Jk] && !gs[Jk] || Re[Te] || ic || (Re[Te] = x(Kk, (Hg = {}, Hg.pages = a.location.href,
                                                    Hg)))
                                            }
                                            ca(Re).length && (Se.timings8 = Re);
                                            ca(Jg).length && (Se.scripts = Jg);
                                            if (ca(Se).length) ta(a, "d", c)({
                                                J: wa((Qe = {}, Qe.ar = "1", Qe.pv = "1", Qe)),
                                                ba: hb(a, Se) || void 0,
                                                G: (Ig = {}, Ig["page-url"] = a.location && "" + a.location.href, Ig)
                                            }, {
                                                id: qa.Ug,
                                                $: "0"
                                            })["catch"](E(a, "r.tim.ng2"))
                                        }
                                    }
                                }), Mc(a, "l.o.l", ob, M.callback, M.ctx)
                            }
                            return null
                        }
                    }
                    var e, f = ta(a, "n", c),
                        g = P(c),
                        h = Tc(a, c.id),
                        k = v(v(g, Pe(a)), u(Ga, Q("accurateTrackBounce"))),
                        l = v((e = {}, e.accurateTrackBounce = !0, e), ce(a, g)),
                        m = aa(a),
                        q = m(Y),
                        p = !1,
                        r = 0,
                        t = 0,
                        z;
                    pa(a, c, function(D) {
                        t = D.Jh -
                            q
                    });
                    c.Zb && b(c.Zb);
                    return {
                        Ri: d(!0),
                        Zb: b,
                        zd: z
                    }
                }),
                Lg = ["yandex_metrika_callback" + vd.callbackPostfix, "yandex_metrika_callbacks" + vd.callbackPostfix],
                is = F("cb.i", function(a) {
                    var c = Lg[0],
                        b = Lg[1];
                    if (U(a[c])) a[c]();
                    "object" === typeof a[b] && A(function(d, e) {
                        a[b][e] = null;
                        Lf(a, d)
                    }, a[b]);
                    A(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Lg)
                }),
                Lk = {
                    xk: Oa(/[/&=?#]/)
                },
                Nd = F("go.in", function(a, c, b, d) {
                    void 0 === b && (b = "goal");
                    return function(e, f, g, h) {
                        var k, l;
                        if (!e || Lk[b] && Lk[b](e)) return null;
                        var m = f,
                            q = g || B;
                        U(f) && (q = f,
                            m = void 0, h = g);
                        var p = Ab(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m),
                            r = "goal" === b;
                        f = ta(a, "g", c);
                        g = Do(a, c, e, b);
                        e = g[0];
                        g = g[1];
                        m = f({
                            O: m,
                            J: wa((k = {}, k.ar = 1, k)),
                            G: (l = {}, l["page-url"] = e, l["page-ref"] = g, l)
                        }, c).then(function() {
                            r && p();
                            d && d()
                        });
                        return Mc(a, "g.s", m, q, h)
                    }
                }),
                js = fa(function(a, c) {
                    Fa(c) ? a.push(c) : A(u(N, ma("push", a)), c)
                }),
                ks = F("cl.p", function(a, c) {
                    function b(m, q, p, r) {
                        void 0 === r && (r = {});
                        p ? ae(a, c, {
                            url: p,
                            Hb: !0,
                            Gc: m,
                            Lc: q,
                            sender: d,
                            l: r.ctx,
                            Wa: r.callback,
                            title: r.title,
                            O: r.params
                        }) : f.warn("Empty link")
                    }
                    var d = ta(a, "2", c),
                        e = [],
                        f = Fd(a, P(c)),
                        g = P(c),
                        h = E(a, "s.s.tr", v(ce(a, g), Co));
                    g = {
                        l: a,
                        Xa: c,
                        Hh: e,
                        sender: d,
                        globalStorage: O(a),
                        sh: Tc(a, c.id),
                        yk: Vb(a),
                        Jj: v(v(g, Pe(a)), u(Ga, Q("trackLinks")))
                    };
                    g = E(a, "cl.p.c", v(g, zo));
                    g = ha(a).D(a, ["click"], g);
                    c.ed && h(c.ed);
                    var k = E(a, "file.clc", G([!0, !1], b)),
                        l = E(a, "e.l.l.clc", G([!1, !0], b));
                    e = E(a, "add.f.e.clc", js(e));
                    return {
                        file: k,
                        Dh: l,
                        Yg: e,
                        ed: h,
                        zd: g
                    }
                }),
                ls = w(u(Q("performance.memory.jsHeapSizeLimit"), ma("concat", ""))),
                ri = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                xo = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                wo = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                vo = ["availWidth", "availHeight", "availTop"],
                ms = ["webgl", "experimental-webgl"],
                to = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                Jf = v(Za("ccf"), pb),
                qo = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                ko = fa(rc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                ns = F("clm.p", function(a, c) {
                    if (qd(a)) return B;
                    var b = ta(a, "m", c),
                        d = P(c),
                        e = aa(a),
                        f = e(Y),
                        g = v(v(d, Pe(a)), u(Ga, Q("clickmap"))),
                        h, k = null;
                    d = E(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var q = O(a),
                                p = q.o("cls", {
                                    cc: 0,
                                    x: 0,
                                    y: 0
                                });
                            q.C("cls", {
                                cc: p.cc + 1,
                                x: p.x + l.clientX,
                                y: p.y + l.clientY
                            });
                            q = "object" === typeof m ? m : {};
                            p = q.filter;
                            m = q.isTrackHash || !1;
                            var r = y(function(z) {
                                return ("" + z).toUpperCase()
                            }, q.ignoreTags || []);
                            V(h) && (h = q.quota || null);
                            var t = !!q.quota;
                            l = {
                                element: lo(a, l),
                                position: qi(a, l),
                                button: mo(l),
                                time: e(Y)
                            };
                            q = S(a).href;
                            if (jo(a, l, k, r, p)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = ue(a, l.element);
                                p = r[0];
                                r = r[1];
                                t = ig(a, l.element);
                                p = ["rn", Ra(a), "x", Math.floor(65535 * (l.position.x - t.left) / (p || 1)), "y", Math.floor(65535 * (l.position.y - t.top) /
                                    (r || 1)), "t", Math.floor((l.time - f) / 100), "p", hg(a, l.element), "X", l.position.x, "Y", l.position.y];
                                p = J(":", p);
                                m && (p += ":wh:1");
                                io(a, q, p, b, c);
                                k = l
                            }
                        }
                    });
                    return ha(a).D(n(a, "document"), ["click"], d)
                }),
                os = w(function(a) {
                    var c = O(a),
                        b = c.o("isEU");
                    if (V(b)) {
                        var d = Ba(Wd(a, "is_gdpr") || "");
                        if (H(d, [0, 1])) c.C("isEU", d), b = !!d;
                        else if (a = Pa(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return O(a).o("isEU")
                }),
                Sd = F("i.e", os),
                ps = F("pr.p", function(a, c) {
                    var b, d;
                    if (Wf(a)) {
                        var e = ta(a, "5", c),
                            f = wa((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            J: f,
                            G: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](E(a, "pr.p.s"))
                    }
                }),
                Sa = u(ca, Q("0")),
                qs = F("c.m.p", function(a, c) {
                    var b = P(c);
                    return v(ce(a, b), ho)
                }),
                rs = F("e.a.p", function(a, c) {
                    var b = za(a, c);
                    b = G([u(N, ua(!0)), W(Boolean, y(v(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], y);
                    c.yh && b();
                    return b
                }),
                ss = F("s.f.i", function(a, c) {
                    return pa(a, c, function(b) {
                        if (n(b, "settings.button_goals") || -1 !== S(a).href.indexOf("yagoalsbuttons=1")) ha(a).D(a, ["click"], E(a, "c.t.c", u(Q("target"), G([a, c], Fe(a, c, "", go))))), Ab(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }),
                pi, ts = F("p.ai", function(a, c) {
                    return new K(function(b) {
                        (od(a) || Of(a)) && b(pa(a, c, function(d) {
                            var e;
                            return (d = n(d, "settings.sbp")) ? oi(a, x({}, d, (e = {}, e.c = c.id, e)), 10) : B
                        }));
                        b(B)
                    })
                }),
                Ue = [],
                Bc = [],
                Hd = [],
                Yn = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Zn = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                ni = {
                    G: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                li = {
                    id: 42822899,
                    $: "0"
                },
                Ve, fo = (Ve = {}, Ve.s = "p", Ve["8"] = "i", Ve),
                bo = Gb("csp", function(a, c) {
                    return ta(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                We = "et w v z i u vf".split(" ");
            We.push("we");
            var Rn = {
                    L: "stamp",
                    M: "frameId",
                    Z: "meta",
                    Ze: "base",
                    Cf: "hasBase",
                    We: "address",
                    Dg: "ua",
                    qe: "prev",
                    Qf: "namespace",
                    Jc: "keystrokes",
                    Kf: "isMeta",
                    Kc: "modifier",
                    ob: "pageWidth",
                    mb: "pageHeight",
                    sg: "startNode",
                    gf: "endNode",
                    Jg: "zoomFrom",
                    Lg: "zoomTo",
                    level: "level",
                    duration: "duration",
                    xa: "i",
                    Nc: "o",
                    n: "n",
                    r: "r",
                    kc: "ct",
                    yb: "at",
                    Rf: "nm",
                    Sf: "ns",
                    le: "pa",
                    oe: "pr",
                    de: "nx",
                    Ma: "h",
                    Ca: "changes",
                    Ve: "a",
                    Ye: "b",
                    od: "c",
                    ke: "op"
                },
                Sn = ["attributes", "attrs"],
                Xe = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.prototype.Aa = function(c) {
                        var b = Zd(c);
                        c = y(C(this.Fa, this), b);
                        return of(hb(this.l, y(function(d, e) {
                            var f;
                            return x({}, b[e], (f = {}, f.data = d, f))
                        }, c)))
                    };
                    a.prototype.Fa = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = hb(this.l, Zd(c.data)));
                        return b
                    };
                    a.prototype.La = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.bd = function(c, b) {
                        for (var d = Math.ceil(c.length /
                                b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.l.JSON
                    };
                    return a
                }(),
                Pn = w(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return Qn;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                Ln = ji(!1),
                Kn = ji(!0),
                us = {
                    Dj: "topics",
                    ij: "publicationDate",
                    fj: "pageUrlCanonical",
                    Pj: "updateDate",
                    dh: "authors",
                    $g: "articleInfo",
                    pj: "rubric",
                    jj: "publishersHeader",
                    gb: "involvedTime",
                    ej: "pageTitle",
                    Ji: "maxScrolled",
                    af: "chars",
                    ah: "articleMeta"
                },
                vs = function() {
                    function a(c) {
                        this.l = c;
                        this.Ib = u(Aa, Jc(function(b, d) {
                            b[d[1]] = d[0];
                            return b
                        }, {}))(us)
                    }
                    a.prototype.xg = function(c) {
                        var b, d = this.pe(c.data);
                        return {
                            L: aa(this.l)(ag),
                            data: (b = {}, b[this.Ib[c.type]] = d, b)
                        }
                    };
                    a.prototype.pe = function(c) {
                        var b = this;
                        return ba(c) ? y(C(this.pe, this), c) : mb(c) ? u(Aa, Jc(function(d, e) {
                            var f = e[0];
                            d[b.Ib[f] || f] = b.pe(e[1]);
                            return d
                        }, {}))(c) : c
                    };
                    a.prototype.Fa = function(c) {
                        return Xd(this.l, Gf, this.xg(c))(pe(B))
                    };
                    a.prototype.La = function(c) {
                        return c[0]
                    };
                    a.prototype.bd = function(c) {
                        return [c]
                    };
                    a.prototype.Aa = function(c) {
                        var b = this;
                        c = Xd(this.l, ci, {
                            buffer: y(C(this.xg, this), c)
                        });
                        return uc(this.l, c, 20, oe)(Le(function(d) {
                            d = Df(b.l, d.slice(-4));
                            return uc(b.l, d, 20, oe)
                        }))(Eg(function(d) {
                            return d[d.length - 1]
                        }))
                    };
                    a.prototype.isEnabled = function() {
                        return bi(this.l)
                    };
                    return a
                }(),
                Mk = function() {
                    function a(c, b, d) {
                        this.df =
                            0;
                        this.ne = 1;
                        this.kd = 5E3;
                        this.l = c;
                        this.ua = b;
                        this.De = d
                    }
                    a.prototype.ad = function() {
                        this.df = X(this.l, u(C(this.flush, this), C(this.ad, this)), this.kd, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.De(c, b || [], this.ne);
                        this.ne += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                Mg, Ng = (Mg = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.Le = 0;
                        d.xb = 0;
                        d.Ke = 0;
                        d.buffer = [];
                        d.kd = 2E3;
                        d.aa = cd(b);
                        d.ad();
                        d.Ke = f;
                        return d
                    }
                    Ea(c, a);
                    c.prototype.tf = function(b) {
                        return W(Boolean,
                            this.aa.R("ag", b))
                    };
                    c.prototype.sf = function(b, d) {
                        var e = this;
                        b(Ya(E(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.wj = function(b, d) {
                        var e = this;
                        ja(this.l, this.df);
                        var f = Math.ceil(this.ua.La(d) / 63E4),
                            g = this.ua.bd(d, f);
                        A(function(h, k) {
                            var l, m = x({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                            l = e.ua.Aa([m], !1);
                            e.sf(l, [m])
                        }, g);
                        this.ad()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.aa.R("se", d);
                        return a.prototype.send.call(this, b, d).then(N, function() {
                            e.aa.R("see", d)
                        })
                    };
                    c.Gd = function(b,
                        d, e, f, g) {
                        c.md["" + b + d] || (this.md[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.md[d]
                    };
                    c.prototype.Di = function() {
                        return this.Ke && this.Le >= this.Ke
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Di()) {
                            this.aa.R("p", b);
                            var e = this.ua.Fa(b),
                                f = this.ua.La(e);
                            7E5 < f ? this.wj(b, e) : (e = this.tf(this.buffer.concat([b])), e = L(function(g, h) {
                                return g + d.ua.La(d.ua.Fa(h))
                            }, 0, e), this.xb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.xb += f)
                        }
                    };
                    c.prototype.D = function(b, d) {
                        this.aa.D([b], d)
                    };
                    c.prototype.ea = function(b,
                        d) {
                        this.aa.ea([b], d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.tf(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.Le += this.xb;
                            this.xb = 0;
                            var d = this.ua.Aa(b);
                            this.sf(d, b)
                        }
                    };
                    return c
                }(Mk), Mg.md = {}, Mg),
                Id, Og = (Id = {}, Id[1] = 500, Id[2] = 500, Id[3] = 0, Id),
                Pg = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Rd = !1;
                        this.Db = {};
                        this.qb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Uf: ["article"]
                        };
                        this.Oe = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.qh = w(function(f,
                            g) {
                            qb(e.l, e.Ka, "Warning: content has only " + g.chars + " chars. Required " + Og[g.type], g)
                        });
                        this.l = c;
                        this.root = Zb(c);
                        this.Ka = b
                    }
                    a.prototype.Da = function(c) {
                        return c.element
                    };
                    a.prototype.uf = function(c, b) {
                        var d = this,
                            e;
                        E(this.l, "P.s." + b, function() {
                            e = d.Db[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.hj = function(c) {
                        var b = x({}, c);
                        this.Rd && !b.id && H(c.type, [3, 2]) && (c = J(", ", y(Q("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.hi(b.ec));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical =
                            ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.bi());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.wa = function(c) {
                        var b = this,
                            d = {},
                            e = this.Da(c);
                        if (!e) return null;
                        d.type = c.type;
                        A(function(g) {
                            d[g] = b.uf(c, g)
                        }, ca(this.Db));
                        var f = aa(this.l);
                        d.stamp = f(ag);
                        d.element = c.element;
                        d.ec = e;
                        d = this.hj(d);
                        d.id = d.id ? wc(d.id) : 1;
                        d.update = function(g) {
                            return b.Da(c) ? b.uf(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.hi = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Ua(Kc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.bi =
                        function() {
                            var c = Kc('[rel="canonical"]', this.root);
                            if (c) return c.href
                        };
                    a.prototype.Af = function() {
                        return 1
                    };
                    a.prototype.uc = function() {
                        return []
                    };
                    a.prototype.Ih = function() {
                        var c = this,
                            b = this.uc(),
                            d = 1;
                        return L(function(e, f) {
                            var g = c.wa({
                                element: f,
                                type: c.Af(f)
                            }) || [];
                            ba(g) || (g = [g]);
                            g = L(function(h, k) {
                                var l = h.values,
                                    m = h.Ef;
                                k && k.chars > Og[k.type] && !H(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Og[k.type] && c.qh(k.id, k);
                                return {
                                    values: l,
                                    Ef: m
                                }
                            }, {
                                values: [],
                                Ef: y(Q("id"), e)
                            }, g).values;
                            return e.concat(y(function(h) {
                                var k;
                                h = x((k = {
                                    index: d,
                                    og: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Nk = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Rd = !0;
                        d.cf = J(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Db = (b = {}, b.id = function(e) {
                                var f = e.data["@id"];
                                e = e.data.mainEntity || e.data.mainEntityOfPage;
                                !f && e && (f = e["@id"]);
                                return f
                            }, b.chars = function(e) {
                                return "string" === typeof e.data.text ? e.data.text.length :
                                    Rb(this.Da(e)).length
                            }, b.authors = function(e) {
                                var f = [];
                                f = f.concat(this.tc(e.data, "author"));
                                f = f.concat(this.tc(e.data.mainEntity, "author"));
                                return f.concat(this.tc(e.data.mainEntityOfPage, "author"))
                            }, b.pageTitle = function(e) {
                                var f = e.data.headline || "";
                                e.data.hk && (f += " " + e.data.alternativeHeadline);
                                "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                                3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                                return f
                            }, b.updateDate = function(e) {
                                return e.data.dateModified || ""
                            },
                            b.publicationDate = function(e) {
                                return e.data.datePublished || ""
                            }, b.pageUrlCanonical = function(e) {
                                return e.data.url
                            }, b.topics = function(e) {
                                return this.tc(e.data, "about", ["name", "alternateName"])
                            }, b.rubric = function(e) {
                                var f = this,
                                    g = this.Da(e);
                                e = W(Boolean, y(function(h) {
                                    if (h = Bb(f.l, Rb(h))) {
                                        var k = f.wf(h);
                                        if (k) return L(function(l, m) {
                                            return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                        }, null, k);
                                        if ("BreadcrumbList" === h["@type"]) return h
                                    }
                                    return null
                                }, [e.element].concat(ub(this.cf, document.body === g ? document.documentElement :
                                    g))));
                                return e.length && (e = e[0].itemListElement, ba(e)) ? W(Boolean, y(function(h) {
                                    return h.item && !f.l.isNaN(h.position) ? {
                                        name: h.item.name || h.name,
                                        position: h.position
                                    } : null
                                }, e)) : []
                            }, b);
                        return d
                    }
                    Ea(c, a);
                    c.prototype.tc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ba(b[d]) ? b[d] : [b[d]];
                        b = W(N, y(function(f) {
                            return f ? "string" === typeof f ? f : L(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return y(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Da = function(b) {
                        var d = b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.nf(f));
                        !b && e && "string" === typeof e && (b = this.nf(e));
                        b || (b = e = d.parentNode, !Yb("head", this.l, d) && e && 0 !== Rb(e).length) || (b = this.l.document.body);
                        return b
                    };
                    c.prototype.nf = function(b) {
                        try {
                            var d = Lc(this.l, b).hash;
                            if (d) {
                                var e = Kc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.me = function(b) {
                        return this.Oe[b["@type"]] || 1
                    };
                    c.prototype.wa = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = Bb(this.l, Rb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) &&
                                !ba(b.data))) return null;
                        var f = this.wf(b.data);
                        if (f) return y(function(h) {
                            if (!H(h["@type"], d.qb["schema.org"])) return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.me(h)
                            };
                            return a.prototype.wa.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = lc(v(g, n), ["acceptedAnswer", "suggestedAnswer"]), y(function(h) {
                            var k;
                            if (!h || !H(h["@type"], d.qb["schema.org"])) return null;
                            h = {
                                element: e,
                                type: d.me(h),
                                data: x((k = {},
                                    k.parentItem = g, k), h)
                            };
                            return a.prototype.wa.call(d, h)
                        }, b)) : H(b.data["@type"], this.qb["schema.org"]) ? a.prototype.wa.call(this, x(b, {
                            type: this.me(b.data)
                        })) : null
                    };
                    c.prototype.uc = function() {
                        return ub(this.cf, this.root)
                    };
                    c.prototype.wf = function(b) {
                        return ba(b) && b || b && ba(b["@graph"]) && b["@graph"]
                    };
                    return c
                }(Pg),
                Qg = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Rd = !0;
                        d.Mj = ma("exec", new RegExp("schema.org\\/(" + J("|", ca(d.Oe)) + ")$"));
                        d.Db = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = ab(this.l, e, "identifier");
                            return f ? Ua(f) : (f = ab(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = ab(this.l, e, g[h]);
                                if (k) {
                                    f = Ua(k).length;
                                    break
                                }
                            }
                            e = Rb(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Cd(this.l, e.element, "about");
                            return y(function(h) {
                                var k = {
                                    name: Ua(h)
                                };
                                if (g = ab(f.l, h, "name")) k.name =
                                    Ua(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = Kc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Kc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? y(function(g) {
                                return {
                                    name: Ua(ab(f.l, g, "name")),
                                    position: Ua(ab(f.l, g, "position"))
                                }
                            }, Cd(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = ab(this.l, e.element, "dateModified")) ? Rj(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = ab(this.l, e.element, "datePublished")) ? Rj(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e =
                                Cd(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Ua(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = ab(this.l, g, "headline");
                            h && (f += Ua(h));
                            (h = ab(this.l, g, "alternativeHeadline")) && (f += " " + Ua(h));
                            "" === f && ((h = ab(this.l, g, "name")) || (h = ab(this.l, g, "itemReviewed")), h && (f += Ua(h)));
                            3 === e.type && (e = Yb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = ab(this.l, e, "text")) && (f += Ua(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Cd(this.l, e.element, "author");
                            return y(function(g) {
                                var h,
                                    k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = ab(f.l, g, "name")) && (k.name = Ua(h));
                                k.name || (k.name = g.getAttribute("content") || Rb(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ea(c, a);
                    c.prototype.Af = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Mj(b)) ? this.Oe[b[1]] : 1
                    };
                    c.prototype.wa = function(b) {
                        return b.element && Rb(b.element).length ? a.prototype.wa.call(this, b) : null
                    };
                    c.prototype.uc = function() {
                        var b = J(",", y(function(d) {
                            return '[itemtype$="schema.org/' +
                                d + '"]'
                        }, this.qb["schema.org"]));
                        return ub(b, this.root)
                    };
                    return c
                }(Pg),
                Ok = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Db = (e = {}, e.chars = function(g) {
                                g = this.Da(g);
                                return Rb(g).length
                            }, e.authors = function(g) {
                                return this.Fd(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.Ac(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.Ac(g.data.modified_time)
                            }, e.publicationDate = function(g) {
                                return this.Ac(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.Ac(g.data.url)
                            },
                            e.rubric = function(g) {
                                return this.Fd(g.data.section)
                            }, e.topics = function(g) {
                                return this.Fd(g.data.tag)
                            }, e);
                        f.zh = new RegExp("^(og:)?((" + J("|", f.qb.Uf) + "):)?");
                        return f
                    }
                    Ea(c, a);
                    c.prototype.Fd = function(b) {
                        var d;
                        return b ? ba(b) ? y(function(e) {
                            var f;
                            return f = {}, f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.Ac = function(b) {
                        return ba(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.uc = function() {
                        var b = ub('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.Vh = function(b) {
                        var d =
                            this,
                            e = b.element,
                            f = {},
                            g = this.Da(b);
                        e = ub("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) A(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.zh, ""),
                                        l = Ua(h);
                                    f[k] ? ba(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                $d(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return H(f.type, this.qb.Uf) ? x(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Da = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.wa = function(b) {
                        return (b =
                            this.Vh(b)) ? a.prototype.wa.call(this, b) : null
                    };
                    return c
                }(Pg),
                Pk = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                ws = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                xs = function() {
                    function a(c, b, d, e) {
                        this.Hc = !1;
                        this.Z = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.gb = this.Of = 0;
                        this.ae = this.Xf = "";
                        this.fa = [];
                        this.Ga = 0;
                        this.ub = {
                            Ma: 0,
                            Re: 0
                        };
                        this.Ng = ws;
                        this.buffer = d;
                        this.Yb = C(this.Yb, this);
                        this.wc =
                            C(this.wc, this);
                        this.Oc = C(this.Oc, this);
                        this.l = c;
                        this.Ka = e;
                        this.Yc = b;
                        this.Wd = "pai" + b.id;
                        this.Eb();
                        this.jf = ha(this.l);
                        this.time = aa(this.l);
                        this.Eg();
                        this.Md = O(this.l)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        if (!this.Hc) {
                            this.buffer.D("ag", this.wc);
                            this.buffer.D("se", this.Oc);
                            this.yj();
                            var b = this.Md.o(this.Wd, []),
                                d = !b.length;
                            b.push(C(this.Fi, this));
                            this.Md.Ta(this.Wd, b);
                            d && this.fg();
                            var e = function(f, g) {
                                return (f.Ae || 0) <= (g.Ae || 0) ? g : f
                            };
                            ha(this.l).D(this.l, ["click"], function(f) {
                                if (c.fa.length) {
                                    f = si(f);
                                    var g = S(c.l).hostname,
                                        h;
                                    if (h = f) h = be(f.hostname) === be(g);
                                    h && (f = L(e, c.fa[0], c.fa).id, g = Vb(c.l), Tc(c.l, c.Ka.split(":")[0]).C("pai", f + "-" + g))
                                }
                            });
                            this.Yb({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.buffer.ea("se", this.Oc);
                        this.buffer.ea("ag", this.wc);
                        this.Nj();
                        this.Hc = !0
                    };
                    a.prototype.Mf = function(c) {
                        return Yb("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.fg = function() {
                        var c = this;
                        E(this.l, "p.ic" + this.Yc.id, function() {
                            if (!c.Hc) {
                                var b = c.Md.o(c.Wd),
                                    d = c.Yc.Ih();
                                A(function(e) {
                                    var f =
                                        y(function(g) {
                                            return x({}, g)
                                        }, d);
                                    U(e) && e(f)
                                }, b);
                                c.Ga = X(c.l, C(c.fg, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Fi = function(c) {
                        this.Hc || (this.Oj(c), this.Qj(), this.tj())
                    };
                    a.prototype.Yb = function(c) {
                        var b = this;
                        E(this.l, "p.ec." + this.Yc.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.l, b.l.document, b.l.document.documentElement, yc(b.l)];
                                H(e, g) && b.Eb()
                            }("resize" === d || f) && b.Eg();
                            d = b.time(Y);
                            var h = Math.min(d - b.Of, 5E3);
                            b.gb += Math.round(h);
                            b.Of = d;
                            if (b.Z && b.scroll &&
                                b.ub) {
                                var k = b.ub.Ma * b.ub.Re;
                                b.fa = y(function(l) {
                                    var m = x({}, l),
                                        q = b.Z[m.id],
                                        p = dd(l.ec);
                                    if (!q || b.Mf(m.element) || !p) return m;
                                    l = b.l.Math;
                                    q = l.max((b.scroll.y + b.ub.Ma - q.y) / q.height, 0);
                                    var r = p.height * p.width;
                                    p = b.hh(p);
                                    m.Ae = p / k;
                                    m.visibility = p / r;
                                    if (.9 <= m.visibility || .1 <= m.Ae) m.involvedTime += h;
                                    m.maxScrolled = l.round(1E4 * q) / 1E4;
                                    return m
                                }, b.fa)
                            }
                        })()
                    };
                    a.prototype.hh = function(c) {
                        var b = c.top,
                            d = c.bottom,
                            e = c.left,
                            f = this.ub,
                            g = f.Re;
                        f = f.Ma;
                        var h = this.l.Math;
                        c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
                        return (h.min(h.max(d,
                            0), f) - h.min(h.max(b, 0), f)) * c
                    };
                    a.prototype.Oj = function(c) {
                        var b = y(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(W(function(d) {
                            return !H(d.id, b)
                        }, c))
                    };
                    a.prototype.Eg = function() {
                        var c = jg(this.l) || yd(this.l);
                        this.ub = {
                            Re: c[0],
                            Ma: c[1]
                        }
                    };
                    a.prototype.Qj = function() {
                        var c = this;
                        E(this.l, "p.um." + this.Yc.id, function() {
                            var b = [];
                            c.Eb();
                            c.Z = L(function(d, e) {
                                var f;
                                if (c.Mf(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled ||
                                        0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.ec && (f = dd(e.ec)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.fa);
                            A(function(d) {
                                d = He(c.l)(d, c.fa);
                                c.fa.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.Oc = function() {
                        this.Xf = this.ae
                    };
                    a.prototype.wc = function() {
                        var c, b, d = y(v(this.Z, n), ca(this.Z));
                        return d.length && (this.ae = hb(this.l, d), this.Xf !== this.ae) ? (c = {}, c.type = "publishersHeader", c.data =
                            (b = {}, b.articleMeta = d || [], b.involvedTime = this.gb, b), c) : null
                    };
                    a.prototype.tj = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = W(function(d) {
                                return !d.og
                            }, this.fa);
                            A(function(d) {
                                var e, f = L(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.Ng);
                                c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e));
                                d.og = !0
                            }, b);
                            b.length && qb(this.l, this.Ka, "Publisher content info found: ", b)
                        }
                    };
                    a.prototype.yj = function() {
                        this.jf.D(this.l, Pk, this.Yb)
                    };
                    a.prototype.Nj = function() {
                        this.jf.Wb(this.l, Pk, this.Yb)
                    };
                    a.prototype.Eb =
                        function() {
                            this.scroll = {
                                x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                                y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                            }
                        };
                    return a
                }(),
                Jd = {};
            Nk && (Jd.json_ld = Nk);
            Qg && (Jd.schema = Qg, Jd.microdata = Qg);
            Ok && (Jd.opengraph = Ok);
            var ys = F("p.p", function(a, c) {
                    function b(l, m, q) {
                        return e(x({}, k, {
                            ba: l,
                            bf: ai(m)
                        }), c, q)["catch"](E(a, "s.ww.p"))
                    }
                    if (!Ca("querySelectorAll", a.document.querySelectorAll)) return K.resolve();
                    var d = [new Xe(a)];
                    d.unshift(new vs(a));
                    var e = ta(a, "p",
                            c),
                        f = db(function(l) {
                            return l.isEnabled()
                        }, d);
                    d = wa();
                    var g = Tc(a, c.id),
                        h = g.o("pai");
                    h && (g.oc("pai"), d.C("pai", h));
                    var k = {
                        G: {},
                        J: d,
                        If: !(f instanceof Xe)
                    };
                    return pa(a, c, E(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            l = Aj(c) ? "microdata" : l;
                            var m = Jd[l];
                            if (m && f) {
                                var q = P(c),
                                    p = Ng.Gd(q, "e", b, f, a);
                                m = new m(a, q);
                                (new xs(a, m, p, q)).start();
                                qb(a, q, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }),
                zs = function() {
                    function a(c, b) {
                        this.l = c;
                        this.Th = b
                    }
                    a.prototype.Aa = function(c) {
                        return of(lc(C(this.Fa, this), c))
                    };
                    a.prototype.Fa = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.Th(this.l, b && b.type, c.type);
                        f && (e = lc(function(g) {
                            return g({
                                l: d.l,
                                ja: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.La = function(c) {
                        return c.length
                    };
                    a.prototype.bd = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                Em = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.Og = 7500;
                        b.kd = 3E4;
                        b.ad();
                        return b
                    }
                    Ea(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ua.Fa(b, d);
                        Xa(this.buffer, e);
                        this.ua.La(this.buffer) > this.Og && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Mk),
                Vm = /opera mini/i,
                Qk = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Lm = ["email", "tel"],
                Tm = /ym-hide-content/,
                Um = /ym-show-content/,
                Qm = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Rm = [65, 90],
                Sm = [97, 122],
                Om = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                Mm = new RegExp("(" + J("|", Qk) + ")", "i"),
                Sj = ["password", "passwd", "pswd"],
                Nm = new RegExp("(" + J("|", Qk.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Qa = "metrikaId_" + Math.random(),
                qc = {
                    ud: 0
                },
                Hq = w(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                Eq = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                As = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        vk: new RegExp("(" + J("|", a) + ")", "i"),
                        Fk: new RegExp("(" + J("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        qk: /ym-record-keys/i,
                        Ti: "\u2022",
                        Ek: 88
                    }
                }(),
                Xj = cb(v(As.Ti, N)),
                gd = !0,
                yg = "",
                zg = !1,
                Ag = !0,
                Bg = !1,
                Jm = fa(function(a, c) {
                    var b = G([a, "efv." + c.event], E);
                    c.N = y(u(N, b), c.N);
                    return c
                }),
                Rk = w(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(xf), b.push(Lq), b.push(Mq));
                    a.document.addEventListener ? c.push(Vj) : (b.push(Uj), d.push(Vj));
                    c = va([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        N: [B]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        N: [B]
                    }, {
                        event: "click",
                        N: [Ge]
                    }, {
                        event: "dblclick",
                        N: [Ge]
                    }, {
                        event: "mousedown",
                        N: [Ge]
                    }, {
                        event: "mouseup",
                        N: [Oq]
                    }, {
                        event: "keydown",
                        N: [Pq]
                    }, {
                        event: "keypress",
                        N: [Qq]
                    }, {
                        event: "copy",
                        N: [Zj]
                    }, {
                        event: "blur",
                        N: c
                    }, {
                        event: "focusin",
                        N: b
                    }, {
                        event: "focusout",
                        N: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        N: [Vh]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        N: [xf]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        N: [Uj]
                    }, {
                        event: "change",
                        N: [Wj]
                    }, {
                        event: "submit",
                        N: [bk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        N: [Wj]
                    }, {
                        type: "form",
                        event: "submit",
                        N: [bk]
                    }]);
                    return Im(a, c)
                }),
                Gm =
                w(function(a) {
                    return va(yc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        N: [Rq]
                    }] : [])
                }),
                Bs = ["submit", "beforeunload", "unload"],
                Cs = w(function(a, c) {
                    var b = c(a);
                    return L(function(d, e) {
                        d[e.type + ":" + e.event] = e.N;
                        return d
                    }, {}, b)
                }),
                Ds = v(Rk, function(a, c, b, d) {
                    return Cs(c, a)[b + ":" + d] || []
                }),
                Hm = /^\s*function submit\(\)/,
                Es = F("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.ff || !c.vb)) {
                        var d = O(a),
                            e = !1;
                        b = d.o("hitParam", {});
                        var f = P(c);
                        b[f] && (d = d.o("counters", {}), e = !(!ug(c.$) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(B);
                    b = new zs(a,
                        Ds);
                    return Dm(a, c, b, Rk, Bs)
                }),
                Va = function() {
                    function a(c, b, d) {
                        this.Hi = "wv2.c";
                        this.Kb = [];
                        this.ga = [];
                        this.l = c;
                        this.K = sf(c, this, d, this.Hi);
                        this.F = b;
                        this.Za = this.F.Xh();
                        this.start = this.K.H(this.start, "st");
                        this.stop = this.K.H(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Kb = y(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = C(c.K.H(b[1], d[0]), c);
                            return c.Za.D(e || c.l, d, b)
                        }, this.ga)
                    };
                    a.prototype.stop = function() {
                        A(Ga, this.Kb)
                    };
                    a.prototype.Y = function(c) {
                        return this.F.oa().Y(c)
                    };
                    return a
                }(),
                Bm = ["checkbox", "radio"],
                Cm = /pwd|value|password/i,
                Rg = Q("location.href"),
                Fs = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ma = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.ee = d.K.H(d.ee, "o");
                        d.wd = d.K.H(d.wd, "io");
                        d.ld = d.K.H(d.ld, "ao");
                        d.ue = d.K.H(d.ue, "a");
                        d.se = d.K.H(d.se, "at");
                        d.ve = d.K.H(d.ve, "r");
                        d.te = d.K.H(d.te, "c");
                        d.sa = new b.MutationObserver(d.ee);
                        return d
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        this.sa.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.sa.disconnect()
                    };
                    c.prototype.ld = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = this.ma.elements.indexOf(d); - 1 === e && (e = this.ma.elements.push(d) - 1, this.ma.attributes[e] = {});
                        this.ma.attributes[e] || (this.ma.attributes[e] = {});
                        e = this.ma.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = Td(this.l, d, b, f, this.F.yc()).value
                    };
                    c.prototype.wd = function(b) {
                        function d(k) {
                            var l = Lb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                Cd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        A(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                q = k.oldValue,
                                p = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.ld(k);
                                    var z = d(p);
                                    z.Cd[l] || (z.Cd[l] = Td(e.l, p, l, q, e.F.yc()).value);
                                    break;
                                case "childList":
                                    m && A(function(D) {
                                        z = d(D);
                                        z.qf || x(z, {
                                            qf: p,
                                            Nh: r ? r : void 0,
                                            Oh: t ? t : void 0
                                        })
                                    }, na(m));
                                    break;
                                case "characterData":
                                    z = d(p), z.rf || (z.rf = q)
                            }
                        }, b);
                        var h = this.F.oa();
                        A(function(k, l) {
                            h.Ee(k, g[l])
                        }, f)
                    };
                    c.prototype.ee = function(b) {
                        var d = this;
                        if (Rg(this.l)) {
                            var e = this.F.L();
                            this.wd(b);
                            A(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.ve(na(h), e);
                                        g && g.length && d.ue(na(g), e);
                                        break;
                                    case "characterData":
                                        d.te(k, e)
                                }
                            }, b);
                            this.se(e)
                        } else this.stop()
                    };
                    c.prototype.se = function(b) {
                        var d = this;
                        A(function(e, f) {
                            var g = d.xc();
                            d.F.X("mutation", {
                                index: g,
                                attributes: d.ma.attributes[f],
                                target: d.Y(e)
                            }, "ac", b)
                        }, this.ma.elements);
                        this.ma.elements = [];
                        this.ma.attributes = []
                    };
                    c.prototype.ue = function(b, d) {
                        var e = this,
                            f = this.xc();
                        this.F.oa().Cc({
                            ha: b,
                            $c: function(g) {
                                g =
                                    y(function(h) {
                                        h = x({}, h);
                                        delete h.node;
                                        return h
                                    }, g);
                                e.F.X("mutation", {
                                    index: f,
                                    ha: g
                                }, "ad", d)
                            }
                        })
                    };
                    c.prototype.ve = function(b, d) {
                        var e = this,
                            f = this.xc(),
                            g = this.F.oa(),
                            h = y(function(k) {
                                var l = g.removeNode(k);
                                Oh(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.F.X("mutation", {
                            index: f,
                            ha: h
                        }, "re", d)
                    };
                    c.prototype.te = function(b, d) {
                        var e = this.xc();
                        this.F.X("mutation", {
                            value: b.textContent,
                            target: this.Y(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.xc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(Va),
                Gs = function() {
                    function a(c,
                        b) {
                        var d = this;
                        this.sc = [];
                        this.$a = [];
                        this.ce = 1;
                        this.Ga = 0;
                        this.jb = {};
                        this.Fc = {};
                        this.Od = function(f) {
                            return d.$a.length ? H(f, d.$a) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Y(f),
                                h = Da(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Od(h) && d.aa.R(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.eb = function(f) {
                            var g = Da(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                h || (h = d.ce, f.__ym_indexer = h, d.ce += 1, g = "NA:" + g.toLowerCase(), d.Od(g) && d.aa.R(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }));
                                return h
                            }
                            return null
                        };
                        this.l = c;
                        var e = sf(c, this, "i");
                        this.aa = cd(c);
                        this.options = b;
                        this.start =
                            e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.Y = e.H(this.Y, "i");
                        this.Ee = e.H(this.Ee, "o");
                        this.Cc = e.H(this.Cc, "a");
                        this.removeNode = e.H(this.removeNode, "r");
                        this.da = e.H(this.da, "s")
                    }
                    a.prototype.Ee = function(c, b) {
                        var d = this.eb(c);
                        Na(d) || (this.Fc[d] && this.Y(c), this.Fc[d] = b)
                    };
                    a.prototype.D = function(c, b, d) {
                        c = "" + b + c;
                        this.$a.push(c);
                        this.Od(c) || this.$a.push(c);
                        this.aa.D([c], d)
                    };
                    a.prototype.ea = function(c, b, d) {
                        var e = "" + b + c;
                        this.$a = W(function(f) {
                            return f !== e
                        }, this.$a);
                        this.aa.ea([e], d)
                    };
                    a.prototype.start =
                        function() {
                            this.Ga = X(this.l, u(C(this.da, this, !1), this.start), 50, "i.s")
                        };
                    a.prototype.stop = function() {
                        this.flush();
                        ja(this.l, this.Ga);
                        this.sc = []
                    };
                    a.prototype.Cc = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                $c: c.$c,
                                result: [],
                                Ec: 0,
                                ha: d
                            };
                        this.sc.push(f);
                        A(function(g) {
                            Oh(b.l, g, function(h) {
                                var k = b.eb(h);
                                Na(k) || (d.push(h), b.jb[k] && b.Y(h), b.jb[k] = {
                                    node: h,
                                    event: f,
                                    Kj: e
                                }, e += 1)
                            })
                        }, c.ha)
                    };
                    a.prototype.Y = function(c) {
                        if (c === this.l) return 0;
                        var b = this.eb(c),
                            d = this.jb[b],
                            e = this.Rh(b),
                            f = e.qf,
                            g = e.Cd,
                            h = e.rf,
                            k = e.Nh,
                            l = e.Oh;
                        if (d) {
                            e =
                                d.event;
                            d = d.Kj;
                            var m = this.l.document.documentElement === c;
                            k = k || c.nextSibling;
                            var q = l || c.previousSibling;
                            l = !m && k ? this.eb(k) : null;
                            q = !m && q ? this.eb(q) : null;
                            m = this.l;
                            k = this.options;
                            f = this.eb(f || c.parentNode || c.parentElement) || 0;
                            var p = g,
                                r = void 0;
                            void 0 === q && (q = null);
                            void 0 === l && (l = null);
                            void 0 === p && (p = {});
                            void 0 === r && (r = Da(c));
                            if (V(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    qe: q !== f ? q : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (tf(c)) {
                                    if (h = xm(c, h), g.attributes = {}, g.content = h)
                                        if (c = ed(m, c)) g.content = "" !==
                                            h.trim() ? Pm(m, h) : h, g.hidden = c
                                } else h = zm(m, c, k, p, r), m = h.hb, g.attributes = h.bh, m && (g.hidden = m), c.namespaceURI && Wb(c.namespaceURI, "svg") && (g.Qf = c.namespaceURI);
                                c = g
                            }
                            if (V(c)) return;
                            delete this.jb[b];
                            e.result[d] = c;
                            e.Ec += 1;
                            e.ha.length === e.Ec && e.$c(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.da(!0)
                    };
                    a.prototype.da = function(c) {
                        var b = this;
                        if (Rg(this.l)) {
                            var d = ca(this.jb);
                            d = y(function(e) {
                                return b.jb[e].node
                            }, d);
                            d = sc(d, this.Y);
                            c = c ? Yi(B) : Wi(this.l, 20);
                            d(c);
                            this.sc = W(function(e) {
                                    return e.Ec !== e.result.length
                                },
                                this.sc)
                        }
                    };
                    a.prototype.Rh = function(c) {
                        if (Na(c)) return {};
                        var b = this.Fc[c];
                        return b ? (delete this.Fc[c], b) : {}
                    };
                    return a
                }(),
                Hs = ["input", "change", "keyup", "paste", "cut"],
                Is = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.yd = !1;
                        b.Pc = b.K.H(b.Pc, "ii");
                        b.Qc = b.K.H(b.Qc, "ir");
                        b.Vc = b.K.H(b.Vc, "ri");
                        b.gd = b.K.H(b.gd, "ur");
                        b.Nd = b.K.H(b.Nd, "ce");
                        b.Bc = b.K.H(b.Bc, "vc");
                        return b
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.F.oa();
                        this.yd = this.lh();
                        A(function(e) {
                            e = e.toLowerCase();
                            d.D(e,
                                "NA:", C(b.Pc, b));
                            d.D(e, "NR:", C(b.Qc, b))
                        }, Bf);
                        this.Kb = [this.Za.D(this.l.document, Hs, C(this.Nd, this)), function() {
                            A(function(e) {
                                e = e.toLowerCase();
                                d.ea(e, "NA:", b.Pc);
                                d.ea(e, "NR:", b.Qc)
                            }, Bf);
                            A(b.gd, ca(b.inputs))
                        }]
                    };
                    c.prototype.gd = function(b) {
                        if (this.yd) {
                            var d = this.inputs[b];
                            d && (b = d.cj, d = d.element, b && this.l.Object.defineProperty(d, this.zc(d), b))
                        }
                    };
                    c.prototype.Qc = function(b) {
                        b && this.gd(b.data.id)
                    };
                    c.prototype.Pc = function(b) {
                        b && (b = b.data, this.Vc(b.node, b.id))
                    };
                    c.prototype.zc = function(b) {
                        return we(b) ? "checked" :
                            "value"
                    };
                    c.prototype.Nd = function(b) {
                        if (b = b.target) {
                            var d = this.zc(b);
                            this.Bc(b[d], b)
                        }
                    };
                    c.prototype.Bc = function(b, d) {
                        var e = this.Y(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Vc(f, e), !f)) return;
                        e = f.nh;
                        var g = f.value,
                            h = this.zc(d);
                        b && !H(typeof b, ["string", "boolean", "number"]) || b === g || (g = Td(this.l, d, h, b, this.F.yc()).value, e ? this.F.X("event", {
                            target: this.Y(d),
                            checked: !!b
                        }, "change") : (e = Ud(d), h = zf(d), this.F.X("event", {
                            value: g,
                            hidden: h && !e,
                            target: this.Y(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Vc = function(b, d) {
                        var e = this;
                        if (!qf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = we(b),
                            g = this.zc(b),
                            h = {
                                element: b,
                                nh: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.yd && Nb(this.l, function() {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = x({}, k, l);
                            if (Ca("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, x({}, m, {
                                        configurable: !0,
                                        set: function(q) {
                                            e.Bc(q, this);
                                            return m.set.call(this, q)
                                        }
                                    }))
                                } catch (q) {}
                                h.cj = m
                            }
                        });
                        return h
                    };
                    c.prototype.lh = function() {
                        var b = !0,
                            d = Wa(this.l)("input");
                        try {
                            d = Wa(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = x({}, e, f);
                            this.l.Object.defineProperty(d, "value", x({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(Va),
                Js = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Pa = {
                            width: 0,
                            height: 0,
                            mb: 0,
                            ob: 0,
                            orientation: 0
                        };
                        b.ga.push([
                            ["resize"], b.aj
                        ]);
                        b.ga.push([
                            ["orientationchange"], b.Zi
                        ]);
                        return b
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.ig()
                    };
                    c.prototype.aj = function() {
                        var b = this.Ld();
                        this.ti(b) && (this.Pa = b, this.jg(b))
                    };
                    c.prototype.Zi = function() {
                        var b = this.Ld();
                        this.Pa.orientation !== b.orientation && (this.Pa = b, this.uj(b))
                    };
                    c.prototype.Nf = function(b) {
                        return !b.height || !b.width || !b.ob || !b.mb
                    };
                    c.prototype.ti = function(b) {
                        return b.height !== this.Pa.height || b.width !== this.Pa.width
                    };
                    c.prototype.Ld = function() {
                        var b = this.F.cb(),
                            d = yd(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.Kd();
                        return {
                            width: e,
                            height: d,
                            ob: b ? b.scrollWidth : 0,
                            mb: b ? b.scrollHeight : 0,
                            orientation: this.F.cb().Zh()
                        }
                    };
                    c.prototype.uj = function(b) {
                        var d;
                        void 0 === d && (d = this.F.L());
                        this.F.X("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.jg = function(b, d) {
                        void 0 === d && (d = this.F.L());
                        this.F.X("event", {
                            width: b.width,
                            height: b.height,
                            ob: b.ob,
                            mb: b.mb
                        }, "resize", d)
                    };
                    c.prototype.ig = function() {
                        var b = this.Ld();
                        this.Nf(b) ? X(this.l, C(this.ig, this), 300) : (this.Nf(this.Pa) && (this.Pa = b), this.jg(b, 0))
                    };
                    return c
                }(Va),
                Ye = function() {
                    function a(c) {
                        this.index = 0;
                        this.sb = {};
                        this.l = c
                    }
                    a.prototype.jc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = aa(this.l),
                            f = this.index;
                        this.index += 1;
                        this.sb[f] = {
                            Ga: 0,
                            Sb: !1,
                            Lh: c,
                            $b: [],
                            Xd: e(Y)
                        };
                        var g = this;
                        return function() {
                            var h = xa(arguments),
                                k = d.ab && !g.sb[f].Sb,
                                l = g.sb[f];
                            ja(g.l, l.Ga);
                            l.$b = h;
                            l.Sb = !0;
                            var m = e(Y);
                            if (k || m - l.Xd >= b) c.apply(void 0, h), l.Xd = m;
                            l.Ga = X(g.l, function() {
                                k || (c.apply(void 0, h), l.Xd = e(Y));
                                l.Sb = !1;
                                l.$b = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        A(function(b) {
                            var d = c.sb[b],
                                e = d.Ga,
                                f = d.Lh,
                                g = d.$b;
                            d.Sb && (c.sb[b].Sb = !1, f.apply(void 0, g), ja(c.l, e))
                        }, ca(this.sb))
                    };
                    return a
                }(),
                Ks = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.yg = [];
                        d.Se = {
                            x: 0,
                            y: 0
                        };
                        d.va = new Ye(b);
                        d.Tc = d.K.H(d.Tc, "o");
                        d.ga.push([
                            ["scroll"], d.bj
                        ]);
                        return d
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.F.X("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.va.flush()
                    };
                    c.prototype.bj = function(b) {
                        if (this.F.cb().Gf()) this.Tc(b);
                        else {
                            var d = b.target,
                                e = W(function(f) {
                                    return f[0] === d
                                }, this.yg).pop();
                            e ? e = e[1] : (e = this.va.jc(C(this.Tc, this), 100, {
                                    ab: !0
                                }),
                                this.yg.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Tc = function(b) {
                        var d = this.F.cb().Kd();
                        b = b.target;
                        var e = this.Eb(b);
                        d = Ma(ia(b), [d, this.l, this.l.document]);
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Se.x === f && this.Se.y === e) return;
                            this.Se = {
                                x: f,
                                y: e
                            }
                        }
                        this.F.X("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Y(b)
                        }, "scroll")
                    };
                    c.prototype.Eb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView ||
                            e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.F.cb().Kd(), b) ? H(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(Va),
                Ls = ["mousemove", "mousedown", "mouseup", "click"],
                Ms = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ga.push([Ls, d.Yi]);
                        d.va = new Ye(b);
                        d.Mc = d.K.H(d.Mc, "n");
                        d.Bj = d.K.H(d.va.jc(C(d.Mc, d), 100), "t");
                        return d
                    }
                    Ea(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.va.flush()
                    };
                    c.prototype.Yi = function(b) {
                        var d =
                            null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Bj(b) : this.Mc(b)
                    };
                    c.prototype.Mc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.F.X("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Y(b)
                        }, d)
                    };
                    return c
                }(Va),
                Ns = ["focus", "blur"],
                Os = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ga.push([Ns, b.Mh]);
                        return b
                    }
                    Ea(c, a);
                    c.prototype.Mh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.F.X("event", {
                            target: this.Y(d ===
                                this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(Va),
                Ps = w(function(a) {
                    var c = Ha(a.getSelection, "getSelection");
                    return c ? C(c, a) : B
                }),
                Qs = u(Ps, Ga),
                Rs = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Ss = /text|search|password|tel|url/,
                Ts = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Pd = !1;
                        b.ga.push([Rs, b.ni]);
                        return b
                    }
                    Ea(c, a);
                    c.prototype.ni = function(b) {
                        var d = this.F,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.ei(b) : this.ai()) && e.start !== e.end ?
                            (this.Pd = !0, d.X("event", e, "selection")) : this.Pd && (this.Pd = !1, d.X("event", {
                                start: 0,
                                end: 0
                            }, "selection"))
                    };
                    c.prototype.ai = function() {
                        var b = Qs(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Y(b.startContainer),
                                e = this.Y(b.endContainer);
                            if (!V(d) && !V(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                sg: d,
                                gf: e
                            }
                        }
                    };
                    c.prototype.ei = function(b) {
                        if (Ss.test(b.type || "")) {
                            var d = this.Y(b);
                            if (!V(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(Va),
                Us = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Vs = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        V(b.l.document.hidden) ? V(b.l.document.msHidden) ? V(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.handleEvent = b.K.H(b.handleEvent, "e");
                        return b
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        this.Kb = [this.Za.D(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], C(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.F.X("event", {}, Us[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(Va),
                Ws = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Xs = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.dd = {};
                        d.scrolling = !1;
                        d.gg = 0;
                        d.ga.push([
                            ["scroll"], d.rj, d.l.document
                        ]);
                        d.ga.push([Ws, d.Fj, d.l.document]);
                        d.va = new Ye(b);
                        d.Jb = d.K.H(d.Jb, "nh");
                        d.Cj = d.K.H(d.va.jc(d.Jb, d.F.cb().Gf() ?
                            0 : 50, {
                                ab: !0
                            }), "th");
                        return d
                    }
                    Ea(c, a);
                    c.prototype.rj = function() {
                        var b = this;
                        this.scrolling = !0;
                        ja(this.l, this.gg);
                        this.gg = X(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Fj = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && A(function(f) {
                            var g = d.ii(f);
                            f.__ym_touch_id = g;
                            e && delete d.dd[f.identifier]
                        }, na(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Jb(b) : this.Cj(b, this.F.L()) : this.Jb(b)
                    };
                    c.prototype.ii = function(b) {
                        this.dd[b.identifier] ||
                            (this.dd[b.identifier] = Mh());
                        return this.dd[b.identifier]
                    };
                    c.prototype.Jb = function(b, d) {
                        void 0 === d && (d = this.F.L());
                        var e = b.type,
                            f = y(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, na(b.changedTouches));
                        0 < f.length && this.F.X("event", {
                            touches: f,
                            target: this.Y(b.target)
                        }, e, d)
                    };
                    return c
                }(Va),
                Ys = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ga.push([
                            ["load"], b.Xi, b.l.document
                        ]);
                        return b
                    }
                    Ea(c, a);
                    c.prototype.Xi = function(b) {
                        b = b.target;
                        "IMG" ===
                        Da(b) && b.getAttribute("srcset") && this.F.X("event", {
                            target: this.Y(b),
                            value: b.currentSrc
                        }, "srcset")
                    };
                    return c
                }(Va),
                Zs = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Kg = 1;
                        d.va = new Ye(b);
                        d.bc = d.K.H(d.bc, "z");
                        return d
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        if (this.Bf()) {
                            a.prototype.start.call(this);
                            this.bc();
                            var b = this.Za.D(n(this.l, "visualViewport"), ["resize"], this.va.jc(this.bc, 10));
                            this.Kb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.va.flush()
                    };
                    c.prototype.bc = function() {
                        var b =
                            this.Bf();
                        b && b !== this.Kg && (this.Kg = b, this.vj(b))
                    };
                    c.prototype.Bf = function() {
                        var b = jg(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.vj = function(b) {
                        var d = If(this.l);
                        this.F.X("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(Va),
                Kd, Ze = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Sk = {
                    "super": 1,
                    mk: 2,
                    alt: 3,
                    shift: 4,
                    Lk: 5,
                    "delete": 6,
                    ik: 6
                },
                $s = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Tk = (Kd = {}, Kd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Kd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Kd.Li = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Kd),
                at = /flash/,
                bt = /ym-disable-keys/,
                ct = /^&#/,
                dt = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.fb = {};
                        d.Ea = 0;
                        d.ya = [];
                        d.wg = [];
                        d.qc = 0;
                        d.bg = 0;
                        d.ga.push([
                            ["keydown"], d.ki
                        ]);
                        d.ga.push([
                            ["keyup"], d.li
                        ]);
                        d.Tg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" :
                            "2";
                        d.Ic = d.K.H(d.Ic, "v");
                        d.Ad = d.K.H(d.Ad, "ec");
                        d.Zc = d.K.H(d.Zc, "sk");
                        d.Jd = d.K.H(d.Jd, "gk");
                        d.Fe = d.K.H(d.Fe, "sc");
                        d.ac = d.K.H(d.ac, "cc");
                        d.reset = d.K.H(d.reset, "r");
                        d.Xc = d.K.H(d.Xc, "rs");
                        return d
                    }
                    Ea(c, a);
                    c.prototype.ki = function(b) {
                        if (this.Ic(b) && !this.Ci(b)) {
                            var d = b.keyCode;
                            b.repeat || this.fb[d] || (this.fb[b.keyCode] = !0, Ze[b.keyCode] && !this.Ea ? (this.Ea += 1, this.Fe(b), this.reset(300)) : this.Ea ? (this.ih(), this.ye(b), this.Ad()) : (this.reset(), this.ye(b)))
                        }
                    };
                    c.prototype.li = function(b) {
                        if (this.Ic(b)) {
                            var d = b.keyCode,
                                e = Ze[b.keyCode];
                            this.fb[b.keyCode] && (this.fb[d] = !1);
                            e && this.Ea && (this.Ea = 0, this.fb = {});
                            1 === this.ya.length && (b = this.ya[0], H(b.keyCode, $s) && (this.Zc([b], !0), this.reset()));
                            this.ya = W(u(ia(d), Eb), this.ya);
                            ja(this.l, this.qc)
                        }
                    };
                    c.prototype.Ic = function(b) {
                        var d = this.l.document.activeElement;
                        b = b.target;
                        return !Ma(Boolean, [d && "OBJECT" === d.nodeName && at.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && bt.test(b.className)])
                    };
                    c.prototype.Ad = function() {
                        this.wg = this.ya.slice(0);
                        ja(this.l, this.qc);
                        this.qc = X(this.l, v(this.wg, C(this.Zc, this)), 0, "e.c")
                    };
                    c.prototype.Zc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.Jd(b);
                            this.F.X("event", {
                                Jc: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.Jd = function(b) {
                        var d = this;
                        b = y(function(e) {
                            e = e.keyCode;
                            var f = Ze[e],
                                g = d.Yh(e);
                            return {
                                id: e,
                                key: g,
                                Kf: !!f && ct.test(g),
                                Kc: f
                            }
                        }, b);
                        return ng(function(e, f) {
                            return (Sk[e.Kc] || 100) - (Sk[f.Kc] || 100)
                        }, b)
                    };
                    c.prototype.Yh = function(b) {
                        return Tk[this.Tg][b] || Tk.Li[b] || String.fromCharCode(b)
                    };
                    c.prototype.ye = function(b) {
                        H(b,
                            this.ya) || this.ya.push(b)
                    };
                    c.prototype.Fe = function(b) {
                        this.ye(b);
                        this.ac()
                    };
                    c.prototype.ac = function() {
                        this.Ea ? X(this.l, this.ac, 100) : this.ya = []
                    };
                    c.prototype.ih = function() {
                        ja(this.l, this.bg)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.bg = X(this.l, C(this.Xc, this), b) : this.Xc()
                    };
                    c.prototype.Xc = function() {
                        this.Ea = 0;
                        this.ya = [];
                        this.fb = {};
                        ja(this.l, this.qc)
                    };
                    c.prototype.Ci = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Ze[b.keyCode] : !1
                    };
                    return c
                }(Va),
                wm = ["sr", "sd",
                    "\u043d"
                ],
                et = /allow-same-origin/,
                ft = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Ub = [];
                        d.Ed = {};
                        d.fe = d.K.H(d.fe, "fi");
                        d.ie = d.K.H(d.ie, "sd");
                        d.je = d.K.H(d.je, "src");
                        d.sa = new b.MutationObserver(d.je);
                        return d
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.F.yc().zb && this.F.oa().D("iframe", "NA:", C(this.fe, this));
                        this.F.xf().Hd().D(["sdr"], C(this.ie, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        A(function(b) {
                            b.F.stop()
                        }, this.Ub)
                    };
                    c.prototype.je = function(b) {
                        var d =
                            b.pop().target;
                        if (b = db(function(f) {
                                return f.Ff === d
                            }, this.Ub)) {
                            this.Ub = W(function(f) {
                                return f.Ff !== d
                            }, this.Ub);
                            var e = b.F.Id();
                            try {
                                b.F.stop()
                            } catch (f) {}
                            this.ic(d, e)
                        }
                    };
                    c.prototype.fe = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.sa.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.ic(d, b.data.id)
                        }
                    };
                    c.prototype.ic = function(b, d) {
                        var e = this;
                        this.zi(b) && nc(this.l, b)(Ya(B, function() {
                            var f = e.F.ic(b.contentWindow, d);
                            e.Ub.push({
                                F: f,
                                Ff: b
                            })
                        }))
                    };
                    c.prototype.ie = function(b) {
                        var d = this,
                            e = b.M;
                        b = b.data;
                        this.Ed[e] ||
                            (this.Ed[e] = {
                                data: []
                            });
                        var f = this.Ed[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.xd) && A(function(g) {
                            "page" === g.type && (f.xd = g.data.za - d.F.yf())
                        }, f.data);
                        this.l.isNaN(f.xd) || (this.F.da(y(function(g) {
                            g.L += f.xd;
                            g.L = d.l.Math.max(0, g.L);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.zi = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(et) || d && "about:blank" !== d && (d = Lc(this.l, d).host) && S(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(Va),
                gt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Be = b.K.H(b.Be, "ps");
                        return b
                    }
                    Ea(c, a);
                    c.prototype.start = function() {
                        this.F.oa().Cc({
                            ha: [this.l.document.documentElement],
                            $c: this.Be
                        })
                    };
                    c.prototype.Be = function(b) {
                        var d = this.F.$h(),
                            e = d.Sh(),
                            f = S(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = yd(this.l),
                            l = k[0];
                        k = k[1];
                        this.F.X("page", {
                            content: y(function(m) {
                                m = x({}, m);
                                delete m.node;
                                return m
                            }, b),
                            Ze: e || "",
                            Cf: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.Uh() || "",
                            We: this.l.location.href,
                            Dg: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            za: this.F.yf(),
                            cd: d.gi()
                        }, "page", 0)
                    };
                    return c
                }(Va),
                ht = ["addRule", "removeRule", "insertRule", "deleteRule"],
                Sg = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.Ra = {};
                            b.Vb = {};
                            b.Xe = 0;
                            b.Rc = b.K.H(b.Rc, "a");
                            b.rb = b.K.H(b.rb, "sr");
                            b.Sc = b.K.H(b.Sc, "r");
                            b.da = b.K.H(b.da, "d");
                            return b
                        }
                        Ea(c, a);
                        c.prototype.start = function() {
                            var b = this.F.oa();
                            b.D("style", "NA:", this.Rc);
                            b.D("style", "NR:", this.Sc);
                            this.da()
                        };
                        c.prototype.stop = function() {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.F.oa();
                            d.ea("style", "NA:", this.Rc);
                            d.ea("style", "NR:", this.Sc);
                            this.da();
                            ja(this.l, this.Xe);
                            A(function(e) {
                                b.Ra[e].sheet && b.eg(b.Ra[e].sheet)
                            }, ca(this.Ra));
                            this.Ra = {}
                        };
                        c.prototype.da = function() {
                            var b = this;
                            A(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].L, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.L;
                                        delete l.L;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m,
                                            f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && A(function(q) {
                                        b.F.X("event", {
                                            target: Ba(e),
                                            Ca: q
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Vb[e]
                                }
                            }, Aa(this.Vb));
                            this.Xe = X(this.l, this.da, 100)
                        };
                        c.prototype.rb = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Vb[b] || (this.Vb[b] = []);
                            this.Vb[b].push({
                                ke: d,
                                style: f,
                                index: g,
                                L: e
                            })
                        };
                        c.prototype.dj = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            U(f) && (b.addRule = function(l, m, q) {
                                e.rb(d, "a", e.F.L(), l + "{" + m + "}", q);
                                return f.call(b, l, m, q)
                            });
                            U(g) && (b.removeRule = function(l) {
                                e.rb(d, "r", e.F.L(), "", l);
                                return g.call(b, l)
                            });
                            U(h) && (b.insertRule = function(l, m) {
                                e.rb(d, "a", e.F.L(), l, m);
                                return h.call(b, l, m)
                            });
                            U(k) && (b.deleteRule = function(l) {
                                e.rb(d, "r", e.F.L(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.eg = function(b) {
                            var d = this;
                            A(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                U(f) && (b[e] = C(f, b))
                            }, ht)
                        };
                        c.prototype.Eh = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Rc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet &&
                                !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Eh(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        ke: "a"
                                    });
                                    this.F.X("event", {
                                        Ca: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.dj(e, b);
                                this.Ra[b] = d
                            }
                        };
                        c.prototype.Sc = function(b) {
                            b = b.data.id;
                            var d = this.Ra[b];
                            d && (delete this.Ra[b], d.sheet && this.eg(d.sheet))
                        };
                        return c
                    }(Va), "ss"],
                    [Is, "in"],
                    [Fs, "mu"],
                    [Js, "r"],
                    [Ks, "sc"],
                    [Ms, "mo"],
                    [Os, "f"],
                    [Ts, "se"],
                    [Vs, "wf"],
                    [Xs, "t"],
                    [Ys, "src"],
                    [Zs, "z"],
                    [dt, "ks"]
                ];
            Sg.push([ft, "if"]);
            Sg.push([gt,
                "pa"
            ]);
            var it = w(function(a) {
                    var c = a.document;
                    return {
                        Kd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        Zh: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = db(v(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Bk: v(a, Mb),
                        Gf: v(a, kd),
                        Ak: v(a, ye)
                    }
                }),
                jt = function() {
                    function a(c, b) {
                        var d = this;
                        this.Gb = 0;
                        this.lc = [];
                        this.Fb = null;
                        this.qa = this.Xb = this.ug = !1;
                        this.za = 0;
                        this.$h = function() {
                            return d.page
                        };
                        this.Id = function() {
                            return d.Gb
                        };
                        this.yf = function() {
                            return d.za
                        };
                        this.Xh = function() {
                            return d.Za
                        };
                        this.xf = function() {
                            return d.Fb
                        };
                        this.oa = function() {
                            return d.Qd
                        };
                        this.L = function() {
                            return d.Je ? d.l.Math.max(d.Je(Y) - d.za, 0) : 0
                        };
                        this.yc = function() {
                            return d.options
                        };
                        this.cb = function() {
                            return d.eh
                        };
                        this.X = function(f, g, h, k) {
                            void 0 === k && (k = d.L());
                            f = d.Wh(f, g, h, k);
                            d.da(f)
                        };
                        this.Wh = function(f, g, h, k) {
                            void 0 === k && (k = d.L());
                            return {
                                type: f,
                                data: g,
                                L: k,
                                M: d.Gb,
                                event: h
                            }
                        };
                        this.da = function(f) {
                            f = ba(f) ? f : [f];
                            d.ug && !d.Xb ? d.qa ? (f = y(function(g) {
                                return g.M ? g : x(g, {
                                    M: d.Gb
                                })
                            }, f), d.xf().kg(f)) : (f = y(sm, f), d.De(f)) : d.lc = d.lc.concat(f)
                        };
                        this.l = c;
                        var e = sf(c, this, "R");
                        this.Ge = e.H(this.Ge, "s");
                        this.da = e.H(this.da, "sd");
                        e = O(c);
                        e.o("wv2e") && kg();
                        e.C("wv2e", !0);
                        this.options = b;
                        this.Za = ha(c);
                        this.Qd = new Gs(this.l, b);
                        this.eh = it(c);
                        this.$e = y(function(f) {
                            return new f[0](c, d, f[1])
                        }, Sg);
                        this.xi();
                        this.page = um(this.l);
                        this.Ge()
                    }
                    a.prototype.start = function(c) {
                        this.ug = !0;
                        this.De =
                            c;
                        this.hg()
                    };
                    a.prototype.stop = function() {
                        Rg(this.l) && (A(function(c) {
                            return c.stop()
                        }, this.$e), this.Qd.stop(), this.Fb && this.Fb.stop(), this.qa || this.X("event", {}, "eof"))
                    };
                    a.prototype.ic = function(c, b) {
                        var d = new a(c, x({}, this.options, {
                            M: b
                        }));
                        d.start(B);
                        return d
                    };
                    a.prototype.xi = function() {
                        var c = this;
                        this.qa = !!this.options.M;
                        this.Gb = this.options.M || 0;
                        this.Xb = !this.qa;
                        var b = this.options.Cg || [];
                        b.push(S(this.l).host);
                        this.Fb = vm(this.l, this, b);
                        b = this.Fb.Hd();
                        Mb(this.l) ? this.Xb && b.D(["i"], function(d) {
                            c.qa =
                                d.qa;
                            c.Xb = !1;
                            d.M && (c.Gb = d.M);
                            c.hg()
                        }) : this.Xb = this.qa = !1
                    };
                    a.prototype.hg = function() {
                        var c = this.lc.splice(0, this.lc.length);
                        this.da(c)
                    };
                    a.prototype.Ge = function() {
                        this.Je = Tf(this.l);
                        this.za = this.Je(Y);
                        A(function(c) {
                            c.start()
                        }, this.$e);
                        this.Qd.start()
                    };
                    return a
                }(),
                Z, kt = (Z = {}, Z.mousemove = 0, Z.mouseup = 1, Z.mousedown = 2, Z.click = 3, Z.scroll = 4, Z.windowblur = 5, Z.windowfocus = 6, Z.focus = 7, Z.blur = 8, Z.eof = 9, Z.selection = 10, Z.change = 11, Z.input = 12, Z.touchmove = 13, Z.touchstart = 14, Z.touchend = 15, Z.touchcancel = 16, Z.touchforcechange =
                    17, Z.canvasMethod = 18, Z.canvasProperty = 19, Z.zoom = 20, Z.resize = 21, Z.mediaMethod = 22, Z.mediaProperty = 23, Z.keystroke = 24, Z.deviceRotation = 25, Z.fatalError = 26, Z.hashchange = 27, Z.stylechange = 28, Z),
                Tg = fa(function(a, c) {
                    var b;
                    return b = {}, b[Sa(a)] = c, b
                }),
                lt = function() {
                    function a(c) {
                        var b;
                        this.isSync = !1;
                        this.Cb = [];
                        this.kf = [];
                        this.l = c;
                        this.Ib = (b = {}, b.event = C(this.Ah, this), b.page = Tg({
                            page: 1
                        }), b.mutation = Tg({
                            Mi: 1
                        }), b.activity = Tg({
                            Xg: 1
                        }), b);
                        this.kf = [
                            [
                                ["scroll"], {
                                    qj: 1
                                }
                            ],
                            [
                                ["selection"], {
                                    sj: 1
                                }
                            ],
                            [
                                ["change", "input"], {
                                    kh: 1
                                }
                            ],
                            [
                                ["keystroke"], {
                                    Gi: 1
                                }, {
                                    Jc: 1
                                }
                            ],
                            [
                                ["zoom"], {
                                    Zj: 1
                                }
                            ],
                            [
                                ["resize"], {
                                    lj: 1
                                }
                            ],
                            [
                                ["windowfocus", "windowblur", "focus", "blur", "eof"], {
                                    Wj: 1
                                }
                            ],
                            [
                                ["mousemove", "mouseup", "mousedown", "click"], {
                                    Ki: 1
                                }
                            ],
                            [
                                ["deviceRotation"], {
                                    vh: 1
                                }
                            ],
                            [
                                ["fatalError"], {
                                    Gh: 1
                                }
                            ],
                            [
                                ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {
                                    Ej: 1
                                }, {
                                    touches: 1
                                }, {
                                    touches: 1
                                }
                            ],
                            [
                                ["hashchange"], {
                                    ui: 1
                                }
                            ],
                            [
                                ["stylechange"], {
                                    xj: 1
                                }, {
                                    Ca: 1
                                }, {
                                    Ca: 1
                                }
                            ]
                        ]
                    }
                    a.prototype.Ah = function(c) {
                        var b, d, e = c.type,
                            f = db(u(Q("0"), v(e, H)), this.kf);
                        f || pb(Dc("vem." + e));
                        "eof" ===
                        e && (this.isSync = !0);
                        var g = f[1],
                            h = f[2];
                        f = f[3];
                        var k = c.Z;
                        return {
                            event: (b = {
                                type: kt[e],
                                target: c.target,
                                M: c.M
                            }, b[Sa(g)] = h ? (d = {}, d[Sa(h)] = f ? k[Sa(f)] : k, d) : k, b)
                        }
                    };
                    a.prototype.Aa = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = sc(c, function(h) {
                                var k = !V(h.partNum);
                                return {
                                    data: k ? void 0 : d.Ib[h.type](h.data),
                                    oh: k ? h.data : void 0,
                                    page: h.partNum,
                                    end: h.end,
                                    L: h.L
                                }
                            }),
                            f = this.isSync || b ? Infinity : 10;
                        e = uc(this.l, e, f);
                        var g = [e];
                        this.Cb.push(e);
                        return e(Le(function(h) {
                            h = Xd(d.l, ci, {
                                buffer: h
                            });
                            h = uc(d.l, h, f, oe);
                            g.push(h);
                            d.Cb.push(h);
                            return h
                        }))(Le(function(h) {
                            h = Df(d.l, h.slice(-4));
                            h = uc(d.l, h, f, oe);
                            g.push(h);
                            d.Cb.push(h);
                            return h
                        }))(Eg(function(h) {
                            h = h[h.length - 1];
                            A(function(k) {
                                k = He(d.l)(k, d.Cb);
                                d.Cb.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.Fa = function(c) {
                        return Xd(this.l, Gf, this.Ib[c.type](c.data))(pe(B))
                    };
                    a.prototype.La = function(c) {
                        return c[0]
                    };
                    a.prototype.bd = function(c, b) {
                        for (var d = Df(this.l, c)(pe(B)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.prototype.isEnabled = function() {
                        return bi(this.l)
                    };
                    return a
                }(),
                mt = function() {
                    return function(a, c, b, d) {
                        var e = this;
                        this.nd = this.Mb = !1;
                        this.Oa = [];
                        this.Pf = [];
                        this.hf = [];
                        this.send = function(f, g, h, k) {
                            f = e.sender(f, e.hc, g);
                            h && k && f.then(h, k);
                            return f
                        };
                        this.Ie = function(f, g, h, k) {
                            return new K(function(l, m) {
                                f.push([g, h, l, m, k])
                            })
                        };
                        this.oi = function() {
                            e.Oa = ng(function(h, k) {
                                return h[4].partNum - k[4].partNum
                            }, e.Oa);
                            var f = L(function(h, k, l) {
                                    k = k[4];
                                    return h && l + 1 === k.partNum
                                }, !0, e.Oa),
                                g = !!e.Oa[e.Oa.length - 1][4].end;
                            return f && g
                        };
                        this.Bd = function(f) {
                            Vi(e.l, f.slice(), function(g) {
                                e.send(g[0],
                                    g[1], g[2], g[3])
                            }, 20, "s.w2.sf.fes");
                            f.splice(0, f.length)
                        };
                        this.Kh = function() {
                            e.nd || (e.nd = !0, e.Bd(e.Pf), e.Bd(e.hf))
                        };
                        this.mh = function(f) {
                            return L(function(g, h) {
                                var k = "page" === h.type && !h.M,
                                    l = "eof" === h.data.type,
                                    m = k && !!h.partNum;
                                return {
                                    sd: g.sd || m,
                                    rd: g.rd || k,
                                    qd: g.qd || l
                                }
                            }, {
                                rd: !1,
                                qd: !1,
                                sd: !1
                            }, f)
                        };
                        this.mi = function(f, g, h, k) {
                            k ? (f = e.Ie(e.Oa, f, g, h[0]), e.oi() && (e.Bd(e.Oa), e.Mb = !0)) : (e.Mb = !0, f = e.send(f, g));
                            return f
                        };
                        this.ji = function(f) {
                            var g;
                            return e.Bi ? (g = {}, g["wv-type"] = Ma(function(h) {
                                    return "eof" === n(h, "data.type")
                                },
                                f) ? "2" : "8", g) : {}
                        };
                        this.zf = function(f, g, h) {
                            g = {
                                G: e.ji(h),
                                J: wa(),
                                ba: g,
                                bf: !f && ai(h),
                                If: e.yi
                            };
                            f && g.J.C("bt", 1);
                            return g
                        };
                        this.Bh = function(f, g, h) {
                            f = e.zf(!1, f, g);
                            return e.Mb ? e.send(f, h) : e.Ie(e.hf, f, h, g)
                        };
                        this.Ni = function(f, g, h) {
                            f = e.zf(!0, f, g);
                            if (e.Mb) return e.send(f, h);
                            var k = e.mh(g),
                                l = k.rd,
                                m = k.qd;
                            k = k.sd;
                            var q;
                            l && (q = e.mi(f, h, g, k));
                            e.nd ? l || (q = e.send(f, h)) : (l || (q = e.Ie(e.Pf, f, h, g)), (e.Mb || m) && e.Kh());
                            return q
                        };
                        this.Bi = d;
                        this.l = a;
                        this.yi = b;
                        this.sender = ta(a, "W", c);
                        this.hc = c
                    }
                }(),
                nt = F("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = O(a),
                        e = P(c);
                    if (!c.vb || qd(a) || !a.MutationObserver || !Ca("Element", a.Element)) return B;
                    Ca("MutationObserver", a.MutationObserver) || de(a, e).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                    var f = ua(function(k, l) {
                            pa(a, c, l)["catch"](k)
                        }),
                        g = nc(a)(Le(G([a, c], qm)))(Eg(function(k) {
                            return new jt(a, k)
                        })),
                        h = !1;
                    Bp([g, f])(Ya(E(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.o("wv2Counter");
                            if (!Rh(a, k) || m) b();
                            else if (ha(a).D(a, ["beforeunload", "unload"], b), d.C("wv2Counter", e), d.C("stopRecorder", b), k = [new Xe(a)], k.unshift(new lt(a)), k = db(function(t) {
                                    return t.isEnabled()
                                }, k)) {
                                m = new mt(a, c, !(k instanceof Xe), 0);
                                var q = Ng.Gd(e, "m", C(m.Ni, m), k, a),
                                    p = Ng.Gd(e, "e", C(m.Bh, m), k, a);
                                k = rm();
                                m = k.Vi;
                                p.D("ag", k.Zg);
                                p.D("p", m);
                                q.D("see", function(t) {
                                    var z = !1;
                                    A(function(D) {
                                        "page" === D.type && (z = !0)
                                    }, t);
                                    z && (h || p.push({
                                        type: "event",
                                        data: {
                                            type: "fatalError",
                                            Z: {
                                                code: "invalid-snapshot",
                                                Ch: "p.s.f",
                                                stack: ""
                                            }
                                        }
                                    }), b())
                                });
                                var r = cb(function(t) {
                                    "eof" === n(t,
                                        "data.type") ? (p.push(t), q.push(t), p.flush(), q.flush()) : ("event" === t.type ? p : q).push(t)
                                });
                                X(a, b, 864E5);
                                Nb(a, function() {
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                $e = F("dl.w", function(a, c, b) {
                    var d = 0;
                    re(a, a[c], b) || (d = X(a, function() {
                        $e(a, c, b)
                    }, 1E3, "ec.dl"));
                    return function() {
                        return ja(a, d)
                    }
                }),
                ot = F("p.e", function(a, c) {
                    var b = za(a, c);
                    if (b) {
                        var d = O(a);
                        b = C(b.params, b);
                        var e = E(a, "h.ee", G([a, P(c), b], mm)),
                            f, g = function(k) {
                                f = k;
                                k.sa.D(e)
                            };
                        if (c.pc) return d.C("ecs", 0), $e(a, c.pc, g);
                        var h = pa(a, c, function(k) {
                            k =
                                n(k, "settings.ecommerce");
                            d.C("ecs", 1);
                            return k ? $e(a, k, g) : B
                        });
                        return function() {
                            h.then(function(k) {
                                k();
                                f && f.unsubscribe()
                            })
                        }
                    }
                }),
                Uk = F("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = xa(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        x(e, d);
                        b && A(c, b);
                        a.fbq = e
                    } else var f = X(a, G([a, c, va(na(d && d.queue))], Uk), 1E3, "fbq.d");
                    return C(ja, null, a, f)
                }),
                pt = F("ecm.a", v("add", Qd)),
                qt = F("ecm.r", v("remove", Qd)),
                rt = F("ecm.d", v("detail", Qd)),
                st = F("ecm.p", v("purchase", Qd)),
                Vc, yb, Wc, Ug =
                (Vc = {}, Vc.add_to_wishlist = "add-to-wishlist", Vc.begin_checkout = "begin-checkout", Vc.generate_lead = "submit-lead", Vc.add_payment_info = "add-payment-info", Vc),
                Vg = (yb = {}, yb.AddToCart = "add-to-cart", yb.Lead = "submit-lead", yb.InitiateCheckout = "begin-checkout", yb.Purchase = "purchase", yb.CompleteRegistration = "register", yb.Contact = "submit-contact", yb.AddPaymentInfo = "add-payment-info", yb.AddToWishlist = "add-to-wishlist", yb.Subscribe = "subscribe", yb),
                jm = (Wc = {}, Wc["1"] = Ug, Wc["2"] = Ug, Wc["3"] = Ug, Wc["0"] = Vg, Wc),
                km = [Vg.AddToCart,
                    Vg.Purchase
                ],
                tt = fa(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            rc: d
                        })) a: {
                        if (ba(c) || Ka(c))
                            if (b = xa(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    rc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        rc: J(",", ca(b))
                    });
                    b && a(b)
                }),
                ut = F("ag.e", function(a, c) {
                    var b = [],
                        d = E(a, "ag.s", G([Ga, b], A));
                    "0" === c.$ && pa(a, c, function(e) {
                        if (n(e, "settings.auto_goals") && za(a, c) && (e = Nd(a, c, "autogoal"))) {
                            e = G([e, c.pc], im);
                            var f = tt(e);
                            e = G([a, e], hm);
                            b.push(Uk(a, e));
                            b.push($e(a, "dataLayer",
                                function(g) {
                                    g.sa.D(f)
                                }))
                        }
                    });
                    return d
                }),
                vt = /[^\d.,]/g,
                wt = /[.,]$/,
                fm = F("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(vt, "").replace(wt, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (H(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Kb(b[0]) + "." + Kb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                xt = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH",
                            "\u0413\u0420\u041d", "\u20b4"
                        ], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                yt = w(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                zt = F("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = vh(a);
                    return (a = db(function(b) {
                        return yt(b[0]).test(c)
                    }, xt)) ? a[1] : "643"
                }),
                At = w(function() {
                    function a() {
                        var k =
                            h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = Ih("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                cm = F("ep.dec", function(a, c) {
                    if (!c || qd(a)) return [];
                    var b = Ih(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Cg(b[0])) return [];
                    b = At();
                    f = f.join("");
                    e = Cg(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Cg(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Bb(a, b);
                    return ba(d) ? d : []
                }),
                em = F("ep.ent", function(a, c, b) {
                    a = "" + Ra(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Ka(b)) return "";
                    b = Kh("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                Vk = u(Hh, zt),
                Wk = F("ep.ctp", function(a, c, b, d) {
                    var e = Vk(a, b),
                        f = Gh(a, d);
                    Fh(a, c, e, f);
                    Ca("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = Vk(a, b),
                            h = Gh(a, d);
                        if (e !== g || f !== h) e = g, f = h, Fh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                Bt = F("ep.chp", function(a, c, b, d, e) {
                    b && kf(a, c);
                    return d || e ? ha(a).D(a.document, ["click"], E(a, "ep.chp.cl", G([a, c, d, e], dm))) : B
                }),
                Ct = F("ep.i", function(a, c) {
                    return xd(a) ? bm(a, c).then(function(b) {
                        var d = b.xh,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            q = d[7],
                            p = d[8],
                            r = d[9],
                            t = d[10],
                            z = d[11],
                            D = d[12],
                            M = d[13],
                            ea = d[14],
                            La = d[15];
                        if (!b.isEnabled) return K.resolve(B);
                        var ob = Pd(a, e),
                            Xb = Pd(a, h),
                            Fc = Pd(a, m),
                            hc = Pd(a, p),
                            ic = "" + e + f + g === "" + h + k + l;
                        return new K(function(jc,
                            Uc) {
                            nc(a)(Ya(Uc, function() {
                                ob && Wk(a, c, f, g, t, z, D);
                                Xb && !ic && Wk(a, c, k, l, M, ea, La);
                                jc(Bt(a, c, Fc || hc, q, r))
                            }))
                        })
                    }) : K.resolve(B)
                }),
                Dt = F("cc.i", function(a, c) {
                    var b = G([a, c], am);
                    b = G([a, b, 300], X);
                    pa(a, c, b)
                }),
                Et = F("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Pa(a),
                        f = aa(a),
                        g = e.o("wasSynced"),
                        h = {
                            id: 3,
                            $: "0"
                        };
                    return c && g && g.time + 864E5 > f(Y) ? K.resolve(g) : ta(a, "f", h)({
                        J: wa((b = {}, b.pv = 1, b)),
                        G: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(Y), l.params =
                            n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.C("wasSynced", k);
                        return k
                    })["catch"](E(a, "f.h"))
                }),
                Ft = ["ecommerce", "user_id", "fpp"],
                Gt = F("pa.int", function(a, c) {
                    return function() {
                        var b, d, e = xa(arguments),
                            f = $l(e);
                        if (!f) return null;
                        e = f.th;
                        var g = f.O;
                        f = f.Wa;
                        if (!mb(g) && !ba(g)) return null;
                        var h = ta(a, "1", c),
                            k = nd(c).url,
                            l = n(g, "__ym.user_id"),
                            m = ca(g),
                            q = H("__ymu", m),
                            p = H("__ym", m) && l;
                        m = !Mf(c);
                        var r = g;
                        r.__ym && (r = x({}, g), r.__ym = L(function(t, z) {
                                var D = n(g, "__ym." + z);
                                D && (t[z] = D);
                                return t
                            }, {}, Ft), ca(r.__ym).length ||
                            delete r.__ym, m = !!ca(r).length);
                        l = Ab(a, c, p ? "Set user id " + l : (q ? "User p" : "P") + "arams. Counter " + c.id, p ? void 0 : JSON.stringify(r));
                        h = h({
                            O: g,
                            J: wa((b = {}, b.pa = 1, b.ar = 1, b)),
                            G: (d = {}, d["page-url"] = k || S(a).href, d)
                        }, c).then(m ? l : B);
                        return Mc(a, "p.s", h, f, e)
                    }
                }),
                Ht = F("exps.int", function(a, c) {
                    return function(b, d, e) {
                        var f, g;
                        void 0 === d && (d = B);
                        if (b && 0 < b.length) {
                            var h = ta(a, "e", c),
                                k = nd(c).url;
                            b = h({
                                J: wa((f = {}, f.ex = 1, f.ar = 1, f)),
                                G: (g = {}, g["page-url"] = k || S(a).href, g.exp = b, g)
                            }, c);
                            return Mc(a, "exps.s", b, d, e)
                        }
                    }
                }),
                It = F("y.p",
                    function(a, c) {
                        var b = Pi(a, c);
                        if (b) {
                            var d = fe(a),
                                e = G([a, b, c], Zl);
                            Ei(a, d, function(f) {
                                f.D(["params"], e)
                            });
                            b.aa.D(["params"], u(Q("1"), e))
                        }
                    }),
                Jt = Gb("is", function(a) {
                    var c = -1 < S(a).href.indexOf("_ym_debug=200500"),
                        b = ac(a),
                        d = b.o("debug_build") === qa.Va;
                    if (c || d) return b.C("debug_build", qa.Va), Hc(a, {
                        src: "https://mc.yandex.ru/metrika/tag_debug.js"
                    })
                }),
                Dh = w(Pc),
                Kt = u(ma("exec", /counterID=(\d+)/), Q("1")),
                Eh = fa(function(a, c) {
                    var b = Dh(a),
                        d = na(c),
                        e = d[0],
                        f = d[1];
                    d = d.slice(2);
                    if (f) {
                        var g = "" + e;
                        var h = {
                            id: 1,
                            $: "0"
                        };
                        var k = Kt(g);
                        k ? h.id = k : -1 === g.indexOf(":") ? (g = Ba(g), h.id = g) : (g = g.split(":"), k = g[1], h.id = Ba(g[0]), h.$ = ug(k) ? "1" : "0");
                        h = [za(a, h), h];
                        g = h[0];
                        h = h[1];
                        k = P(h);
                        b[k] || (b[k] = {});
                        b = b[k];
                        if (!c.lf)
                            if ("init" === f)
                                if (c.lf = !0, g) qb(a, "" + e, "Duplicate counter " + e + " initialization");
                                else {
                                    if (e = "1" === h.$, f = Mf(h), e || f || !Jt(a)) a["yaCounter" + h.id] = new a.Ya[qa.dc](x({}, d[0], h))
                                }
                        else g && g[f] && b.wi ? (g[f].apply(g, d), c.lf = !0) : (h = b.rg, h || (h = [], b.rg = h), h.push(va([e, f], d)))
                    }
                }),
                Lt = F("fid", function(a) {
                    var c, b = B;
                    if (!U(a.PerformanceObserver)) return b;
                    var d = O(a);
                    if (d.o("fido")) return b;
                    d.C("fido", !0);
                    var e = new a.PerformanceObserver(E(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                ch = v("form", Yb),
                Ol = v("form", ub),
                Bh = w(function(a) {
                    return J("[^\\d<>]*", a.split(""))
                }),
                Kl = w(function(a) {
                    return new RegExp(Bh(a), "g")
                }),
                Vl = /\S/,
                uh = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"],
                    Ic),
                Xk = w(function(a) {
                    a = S(a);
                    a = dq(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                qh = u(Xk, Q("_ym_status-check"), Ba),
                Mt = u(Xk, Q("_ym_lang")),
                Ml = ["https://iframe-toloka.com/"],
                ph = Oa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Ql = ["form", "button", "phone", "status"],
                Nl = w(function(a, c, b) {
                    b.inline ? jh(a, b) : b.resource &&
                        ph(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Rl(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                Nt = F("cs.init", function(a, c) {
                    var b, d = qh(a);
                    d && c.id === d && "0" === c.$ && (d = (b = {}, b.lang = Mt(a), b.fileId = "status", b.id = "" + c.id, b), X(a, G([a, d], jh), 0, "cs"))
                }),
                Yk = w(function(a) {
                    return qd(a) || !xd(a)
                }),
                Hl = w(rh),
                ih = w(Bb, vb),
                Ot = F("phc.p", function(a, c) {
                    return Yk(a) ? B : pa(a, c, function(b) {
                        var d = c.id,
                            e = Gc(a, void 0, d),
                            f = e.o("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g =
                                hb(a, b) || "";
                            g !== f && e.C("phc_settings", g)
                        } else f && (b = ih(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Bb: "",
                            Lb: "",
                            qg: 0,
                            ia: {},
                            ta: [],
                            Lf: !1,
                            ab: !0,
                            l: a,
                            hc: c
                        }, x(f, {
                            Lf: !0
                        }), hh(a, d, f), b = $c(a), e = sh(a, b, 1E3), d = C(hh, null, a, d, f), e.D(d), th(a, b))
                    })
                }),
                Pt = F("phc.h", function(a, c) {
                    return Bj(a) || Yk(a) ? null : pa(a, c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Gc(a, "").o("yaHidePhones");
                            d = d ? Bb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && oh(a, c, b)
                        }
                    })
                }),
                Qt = F("up.int", function(a, c) {
                    return E(a,
                        "up.c",
                        function(b, d, e) {
                            var f, g = za(a, c),
                                h = de(a, P(c)).warn;
                            g ? mb(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || B, e)) : h("Wrong user params") : h("No counter instance found")
                        })
                }),
                Rt = F("trigger.in", function(a, c) {
                    c.Bg && Nb(a, G([a, "yacounter" + c.id + "inited"], $p), "t.i")
                }),
                St = F("destruct.e", function(a, c, b) {
                    return function() {
                        var d = O(a),
                            e = c.id;
                        A(function(f, g) {
                            return U(f) && E(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.o("counters")[P(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Tt = F("fip", function(a, c) {
                    if (!zk(a) || sd(a)) {
                        var b = Pa(a);
                        if (!b.o("fip")) {
                            var d =
                                u(cb(u(function(e, f) {
                                    return F("fip." + f, e)(a)
                                }, C(xq, null))), md("-"))(c);
                            b.C("fip", d)
                        }
                    }
                }),
                Ut = v("9-d5ve+.r%7", N),
                Vt = F("ad", function(a, c) {
                    if (!c.ib) {
                        var b = O(a);
                        if (!b.o("adBlockEnabled")) {
                            var d = function(m) {
                                    H(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                                },
                                e = ac(a),
                                f = e.o("isad");
                            if (f) d(f);
                            else {
                                var g = v("adStatus", b.C),
                                    h = function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.C("isad", m, 1200);
                                        return m
                                    },
                                    k = ta(a, "adb", c);
                                if (!b.o("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + Ut().replace(/[^a-v]+/g, "") + "t.gif";
                                    El(a, function() {
                                        return k({},
                                            l).then(v(!1, h))["catch"](v(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                Wt = F("suid.int", function(a, c) {
                    return function(b, d, e) {
                        var f = za(a, c),
                            g = Fd(a, P(c));
                        Fa(b) || Rd(a, b) ? (b = Ic(["__ym", "user_id", b]), f.params(b, d || B, e)) : g.error("Incorrect user ID")
                    }
                }),
                Xt = F("guid.int", function(a, c) {
                    return function(b) {
                        var d = bf(a, c);
                        b && Lf(a, b, null, d);
                        return d
                    }
                }),
                Yt = fa(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.$d.C("ymoo" + a.Ka, a.zg(gb)), a.vd && a.vd.destruct && a.vd.destruct())
                }),
                Zt = F("wsa", function(a, c) {
                    var b = {
                            Ka: P(c),
                            vd: za(a, c),
                            zg: aa(a),
                            $d: Pa(a)
                        },
                        d = b.zg(gb);
                    if (b.$d.Sd) return !1;
                    var e = b.$d.o("ymoo" + b.Ka);
                    if (e && 30 > d - e) return !0;
                    pa(a, c, Yt(b))["catch"](E(a, "d.f"));
                    return !1
                }),
                $t = u(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Ka(a) ? u(na, mc(Boolean), Vq(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), cb(ro))(a) : ""
                }, md(",")),
                au = function(a) {
                    return function(c) {
                        var b = Wa(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Fh;
                        e = e.uh;
                        try {
                            var g = ma("getContext", b);
                            d = y(u(N, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = db(N, d)) ? f(c, {
                            canvas: b,
                            jh: g
                        }) : ""
                    }
                }(function() {
                    return {
                        uh: ms,
                        Fh: xl
                    }
                }),
                ql = ["name", "lang", "localService", "voiceURI", "default"],
                ll = w(function(a, c) {
                    return pa(a, c, Q("settings.form_goals"))
                }, vb),
                bu = v(!0, dh),
                cu = F("s.f.i", function(a, c) {
                    var b = [];
                    ha(a).D(a, ["click"], E(a, "s.f.c", G([a, c, b], kl)));
                    ha(a).D(a, ["submit"], E(a, "s.f.e", u(Q("target"), G([a, c, b], bu))));
                    fh(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                Zk = B,
                du = Gb("isp.stat", function(a, c) {
                    return new K(function(b, d) {
                        if (Vp(a, pk, "isp")) {
                            var e = function(f) {
                                ("1" === f ? b : d)();
                                Zk();
                                f = sj(pk);
                                H("isp", f.lb) && (f.lb = W(u(ia("isp"), Eb),
                                    f.lb), f.lb.length || (vc(f.bb), f.bb = null))
                            };
                            Zk = ha(a).D(a, ["message"], G([a, c, e], jl));
                            X(a, e, 1500)
                        } else d()
                    })
                }),
                eu = Gb("isp", function(a, c) {
                    pa(a, c, function(b) {
                        var d = db(function(h) {
                            return n(b, "settings." + h)
                        }, ["rt", "mf"]);
                        if (d && Ie(a)) {
                            var e = mi(b) && !he(a),
                                f = P(c),
                                g = Si(c);
                            g[f] = {
                                Uc: d,
                                status: e ? 3 : 4
                            };
                            if (!e) return d = il(a, c, d), du(a, d).then(function() {
                                g[f].status = 1
                            })["catch"](function() {
                                g[f].status = 2
                            })
                        }
                    })["catch"](E(a, "l.isp"))
                }),
                fu = /[\*\.\?\(\)]/g,
                gu = w(function(a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(fu, "");
                        de(a, "").warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter')
                    } catch (e) {}
                }, vb),
                hu = F("r.nn", function(a) {
                    Cf(a).isEnabled && re(a, rg, function(c) {
                        c.sa.D(function(b) {
                            gu(a, b[1], b[0]);
                            rg.splice(100)
                        })
                    })
                }),
                iu = F("lt.p", Gb("lt.p", function(a) {
                    var c;
                    if (Ca("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(E(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = L(function(f, g) {
                                    return f + g.duration
                                }, b, e), fc(a).C("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type =
                                "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return B
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                    return B
                }));
            "function" == typeof Promise && Promise.resolve();
            var Ec = {
                    position: "absolute"
                },
                ah = {
                    position: "fixed"
                },
                ef = {
                    borderRadius: "50%"
                },
                ju = u(Q("settings.sm"), ia(1)),
                ku = Gb("siteStatistics", function(a, c) {
                    return !Bj(a) && nc(a)(Ya(B, G([a, c, function(b) {
                        return ju(b) ? hl(a, c.id) : B
                    }], pa)))
                }),
                $k = w(function(a) {
                    return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }),
                lu = F("fpm", function(a, c) {
                    if (!rk(a)) return B;
                    var b = P(c);
                    if (!$k(a)) return qb(a, b, "Not supported"), B;
                    var d = za(a, c);
                    return d ? function(e) {
                        return (new K(function(f, g) {
                            return mb(e) ? ca(e).length ? f(Yg(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, B)) : g(Za("fpm.l")) : g(Za("fpm.o"))
                        }))["catch"](E(a, "fpm.en"))
                    } : B
                }),
                mu = F("p.sci", function(a, c) {
                    var b = O(a);
                    return b.o("scip") ? K.resolve() : pa(a, c, N).then(function(d) {
                        d = n(d, "settings.ins");
                        return !b.o("scip") && d ? Wg(a, c, b) : null
                    }, E(a, "ins.cs"))
                }),
                nu = Oa(/[a-z\u0430-\u044f,.]/gi),
                ou = F("ice", function(a, c, b) {
                    var d = za(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = nb(c)) && !(100 <= Ka(c)))) {
                            b = Kb(c);
                            var f = 0 < c.indexOf("@"),
                                g = "tel" === n(e, "type") || !f && Ka(b);
                            if (f || g) {
                                if (g) {
                                    if (nu(c)) return;
                                    g = c[0];
                                    var h = b[0];
                                    if (g !== h && "+" !== g) return;
                                    var k = c[1];
                                    if ("+" === g && k !== h) return;
                                    c = c[Ka(c) - 1];
                                    g = b[Ka(b) - 1];
                                    if (c !== g) return;
                                    c = b
                                }
                                b = f ? 5 : 11;
                                g = f ? 100 : 16;
                                Ka(c) < b || Ka(c) > g || Zg(a, c).then(function(l) {
                                    var m, q, p, r = hg(a, e);
                                    d.params((m = {}, m.__ym = (q = {}, q.fi = Qi((p = {}, p.a = f ? 1 : 0, p.b = r, p.c = l, p)).Aa(), q), m))
                                }, E(a,
                                    "ice.s"))
                            }
                        }
                    }
                }),
                pu = ["text", "email", "tel"],
                qu = ["cc-", "name", "shipping"],
                ru = F("icei", function(a, c) {
                    return xd(a) && $k(a) && nc(a)(Ya(B, G([a, c, function(b) {
                        var d = n(b, "settings.cf");
                        b = Sd(a) || n(b, "settings.eu");
                        if (d && !b) {
                            var e = ha(a);
                            d = ub("input", a.document.body);
                            A(function(f) {
                                Af(a, f) || !H(f.type, pu) || Ma(N, y(v(f.autocomplete, Wb), qu)) || e.D(f, ["blur"], G([a, c], ou))
                            }, na(d))
                        }
                    }], pa)))
                }),
                su = Gb("gic", ru),
                Cc = O(window);
            Cc.Ta("hitParam", {});
            Cc.Ta("lastReferrer", window.location.href);
            Cc.Ta("getCounters", cs(window));
            Pf.push(Et);
            (function() {
                var a, c, b = Fb([Sb]);
                x(ra, (a = {}, a.s = b, a.S = b, a.u = Sc, a));
                x(sa, (c = {}, c.s = zb, c.S = Ta, c.u = zb, c));
                la("s");
                la("u");
                la("S", Qb(["v", "hid", "u", "vf", "rn"]), 1);
                Bc.push(F("s", Tn))
            })();
            sa["8"] = zb;
            ra["8"] = [mj];
            Bc.push(function(a, c) {
                return pa(a, c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    return e && ki(a, b, {
                        Xa: c,
                        Uc: "8",
                        data: x({}, e, (d = {}, d.c = c.id, d)),
                        Yd: "cs"
                    })
                })
            });
            la("p", Qb(We), 1);
            la("p", ke(), 100);
            sa.p = le;
            ra.p = Fb([0, Sb]);
            Ue.push(ys);
            la("4", Qb(We), 1);
            sa["4"] = le;
            ra["4"] = Fb([0, Sb, wd]);
            Ue.push(Es);
            la("W", Qb(We),
                1);
            ra.W = Fb([0, Sb]);
            sa.W = le;
            Ue.push(nt);
            Bc.push(ot);
            Hd.push(["ecommerceAdd", pt]);
            Hd.push(["ecommerceRemove", qt]);
            Hd.push(["ecommerceDetail", rt]);
            Hd.push(["ecommercePurchase", st]);
            Bc.push(ut);
            Bc.push(Ct);
            ra["6"] = Fb([0, Sb]);
            sa["6"] = function(a, c, b) {
                var d = zb(a, c);
                return function(e) {
                    return Xf(a, b, e, !0).then(G([e, ["https://mc.yandex.md/cc"], {
                        jd: !0,
                        Ig: !1
                    }], d))
                }
            };
            la("6", td, 1);
            Bc.push(Dt);
            var al = function() {
                return function(a, c, b, d) {
                    var e = this;
                    return E(window, "c.i", function() {
                        (!window || isNaN(a) && !a) && kg();
                        var f =
                            window,
                            g = gq(a, nk, c, b, d);
                        if (!window["disableYaCounter" + g.id]) {
                            var h = P(g);
                            g.id || qb(f, h, "Invalid Metrika id: " + g.id);
                            var k = Cc.o("counters", {}),
                                l = [],
                                m = [dk, Fe, ck];
                            m.unshift(Cq);
                            var q = function(D, M) {
                                    D && (U(D) ? l.push(D) : M && l.push(D[M]))
                                },
                                p = function(D, M) {
                                    var ea = Fe(f, g, "", D)(f, g);
                                    ea && (U(ea.then) ? ea.then(function(La) {
                                        return q(La, M)
                                    }) : q(ea, M));
                                    return ea
                                },
                                r = y(function(D) {
                                    return v(D, p)
                                }, Ue),
                                t = function(D, M, ea) {
                                    e[M] = Sq(f, g, ea || m, M, D)
                                };
                            if (k[h]) return qb(f, h, "Duplicate counter " + h + " initialization"), k[h];
                            k[h] = e;
                            Cc.C("counters",
                                k);
                            Cc.Ta("counter", e);
                            p(ku);
                            var z = ds(window, g);
                            l.push(z);
                            Sd(window);
                            Zt(window, g) && delete k[h];
                            p(Vt);
                            Tt(f, [au, $t, Bl, yo, rl, po, ls, uo, ol, ml, tl]);
                            r.push(v(Ir, p));
                            r.push(v(mu, p));
                            p(as);
                            r.push(v(Fl, p));
                            r.push(v(su, p));
                            p(Ot);
                            p(Pt);
                            t(bs(f, g), "hit");
                            t(Gt(f, g), "params");
                            h = p(es, Sa({
                                unsubscribe: 1
                            }));
                            e.trackHash = Fe(f, g, "", n(h, Sa({
                                Ij: 1
                            })));
                            t(Nd(f, g), "reachGoal");
                            t(Ht(f, g), "experiments");
                            p(Rt);
                            h = p(hs, Sa({
                                zd: 1
                            }));
                            t(n(h, Sa({
                                Ri: 1
                            })), "notBounce");
                            k = p(lu);
                            t(k, "firstPartyParams");
                            t(G([f, g], el), "firstPartyParamsHashed");
                            t(n(h, Sa({
                                Zb: 1
                            })), "accurateTrackBounce");
                            p(It);
                            h = p(ks, Sa({
                                zd: 1
                            }));
                            t(n(h, Sa({
                                Dh: 1
                            })), "extLink");
                            t(n(h, Sa({
                                Yg: 1
                            })), "addFileExtension");
                            t(n(h, Sa({
                                file: 1
                            })), "file");
                            t(n(h, Sa({
                                ed: 1
                            })), "trackLinks");
                            l.push(Lt(f));
                            h = p(Qt);
                            t(h || B, "userParams");
                            t(St(f, g, l), "destruct", [dk, ck]);
                            p(Br);
                            h = p(Wt);
                            t(h || B, "setUserID");
                            e.getClientID = p(Xt) || B;
                            p(ns);
                            t(qs(f, g), "clickmap");
                            p(ps);
                            t(rs(f, g), "enableAll");
                            p(cu);
                            p(eu);
                            p(ss);
                            p(iu);
                            r.push(v(Nt, p));
                            (h = p(ts)) && h.then(ma("push", l));
                            Nb(f, G([f, r, function(D) {
                                p(D)
                            }, 1, "a.i"], Vi));
                            p(Yl);
                            hu(f);
                            A(function(D) {
                                var M = D[0];
                                t((0, D[1])(f, g), M)
                            }, Hd);
                            A(function(D) {
                                return p(D)
                            }, Bc)
                        }
                    })()
                }
            }();
            (function(a) {
                var c = O(a);
                c.o("i") || (c.C("i", !0), ha(a).D(a, ["message"], v(a, Ll)))
            })(window);
            if (window.Ya && al) {
                var bl = qa.dc;
                window.Ya[bl] = al;
                is(window);
                var cl = window.Ya[bl];
                cl.informer = no(window);
                cl.counters = Cc.o("getCounters")
            }(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Eh(a);
                    re(a, b, function(e) {
                        e.sa.D(d)
                    }, !0)
                }
            })(window)
        })()
    } catch (Wg) {};
}).call(this)