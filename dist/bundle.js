(() => {
  "use strict";
  var n = {
      267: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var s = [].concat(n[d]);
                (o && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  t &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = t))
                      : (s[2] = t)),
                  r &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = r))
                      : (s[4] = "".concat(r))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      978: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      106: (n, e, t) => {
        t.d(e, { A: () => c });
        var o = t(978),
          r = t.n(o),
          i = t(267),
          a = t.n(i)()(r());
        a.push([
          n.id,
          'body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #008DDA;\n    color: #fff;\n    padding: 20px;\n    text-align: center;\n}\n\ncustom-heading {\n    display: block;\n    background-color: #008DDA;\n    padding: 20px;\n    text-align: center;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    position: sticky;\n}\n\nlabel {\n    font-weight: bold;\n}\n\ninput[type="text"],\ntextarea {\n    width: 100%;\n    padding: 8px;\n    margin: 5px 0 10px;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nbutton {\n    width: 100%;\n    padding: 10px;\n    background-color: #008DDA;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #0056b3;\n}\n\n.notes-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 40px 60px;\n    justify-items: center;\n    padding: 20px;\n}\n\nfooter {\n    background-color: #008DDA;\n    color: #fff;\n    padding: 20px;\n    text-align: center;\n}\n\n@media screen and (max-width: 768px) {\n    main {\n        padding: 20px 40px;\n    }\n}',
          "",
        ]);
        const c = a;
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var u = n[c],
              d = o.base ? u[0] + o.base : u[0],
              s = i[d] || 0,
              l = "".concat(d, " ").concat(s);
            i[d] = s + 1;
            var f = t(l),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(p);
            else {
              var h = r(p, o);
              (o.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: h, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              e[c].references--;
            }
            for (var u = o(n, r), d = 0; d < i.length; d++) {
              var s = t(i[d]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            i = u;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(72),
        e = t.n(n),
        o = t(825),
        r = t.n(o),
        i = t(659),
        a = t.n(i),
        c = t(56),
        u = t.n(c),
        d = t(540),
        s = t.n(d),
        l = t(113),
        f = t.n(l),
        p = t(106),
        h = {};
      function m(n) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          m(n)
        );
      }
      function v(n, e) {
        for (var t = 0; t < e.length; t++) {
          var o = e[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, g(o.key), o);
        }
      }
      function y(n, e, t) {
        return (
          e && v(n.prototype, e),
          t && v(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      function g(n) {
        var e = (function (n, e) {
          if ("object" != m(n) || !n) return n;
          var t = n[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(n, "string");
            if ("object" != m(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        })(n);
        return "symbol" == m(e) ? e : e + "";
      }
      function b(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function x(n, e, t) {
        return (
          (e = j(e)),
          (function (n, e) {
            if (e && ("object" === m(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (n) {
              if (void 0 === n)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return n;
            })(n);
          })(
            n,
            S()
              ? Reflect.construct(e, t || [], j(n).constructor)
              : e.apply(n, t),
          )
        );
      }
      function w(n, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (n.prototype = Object.create(e && e.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e && L(n, e);
      }
      function E(n) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (E = function (n) {
            if (
              null === n ||
              !(function (n) {
                try {
                  return (
                    -1 !== Function.toString.call(n).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof n;
                }
              })(n)
            )
              return n;
            if ("function" != typeof n)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(n)) return e.get(n);
              e.set(n, t);
            }
            function t() {
              return (function (n, e, t) {
                if (S()) return Reflect.construct.apply(null, arguments);
                var o = [null];
                o.push.apply(o, e);
                var r = new (n.bind.apply(n, o))();
                return t && L(r, t.prototype), r;
              })(n, arguments, j(this).constructor);
            }
            return (
              (t.prototype = Object.create(n.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              L(t, n)
            );
          }),
          E(n)
        );
      }
      function S() {
        try {
          var n = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (n) {}
        return (S = function () {
          return !!n;
        })();
      }
      function L(n, e) {
        return (
          (L = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, e) {
                return (n.__proto__ = e), n;
              }),
          L(n, e)
        );
      }
      function j(n) {
        return (
          (j = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              }),
          j(n)
        );
      }
      (h.styleTagTransform = f()),
        (h.setAttributes = u()),
        (h.insert = a().bind(null, "head")),
        (h.domAPI = r()),
        (h.insertStyleElement = s()),
        e()(p.A, h),
        p.A && p.A.locals && p.A.locals;
      var T,
        C = document.querySelector("form"),
        O = C.elements.noteTitle,
        A = C.elements.noteBody,
        D = "https://notes-api.dicoding.dev/v2";
      C.addEventListener("submit", function (n) {
        return n.preventDefault();
      });
      var M = function (n) {
        n.target.setCustomValidity(""),
          n.target.validity.valueMissing &&
            n.target.setCustomValidity("Wajib diisi.");
      };
      function k(n) {
        var e = n.target.validity.valid,
          t = n.target.validationMessage,
          o = n.target.getAttribute("aria-describedby"),
          r = o ? document.getElementById(o) : null;
        r && (r.innerText = t && !e ? t : "");
      }
      O.addEventListener("change", M),
        O.addEventListener("invalid", M),
        A.addEventListener("change", M),
        A.addEventListener("invalid", M),
        O.addEventListener("blur", k),
        A.addEventListener("blur", k);
      var P = function () {
        alert(
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "Check your internet connection",
        );
      };
      document.addEventListener("DOMContentLoaded", function () {
        customElements.define("custom-heading", H),
          customElements.define("notes-list", _),
          customElements.define("footer-custom", I),
          customElements.define("loading-indicator", q);
        var n = document.getElementById("noteForm");
        (T = document.querySelector("notes-list")),
          n.addEventListener("submit", function (n) {
            n.preventDefault();
            var e = document.querySelector("loading-indicator");
            e.show();
            var t = O.value,
              o = A.value;
            fetch("".concat(D, "/notes"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title: t, body: o }),
            })
              .then(function (n) {
                return n.json();
              })
              .then(function (n) {
                n.error ? P(n.message) : (R(), P("Note added successfully")),
                  e.hide();
              })
              .catch(function (n) {
                P(n), e.hide();
              });
          }),
          R();
      });
      var R = function () {
          var n = document.querySelector("loading-indicator");
          n.show(),
            fetch("".concat(D, "/notes"))
              .then(function (n) {
                return n.json();
              })
              .then(function (e) {
                e.error ? P(e.message) : T.updateList(e), n.hide();
              })
              .catch(function (e) {
                P(e), n.hide();
              });
        },
        H = (function (n) {
          function e() {
            var n;
            b(this, e), (n = x(this, e)).attachShadow({ mode: "open" });
            var t = n.getAttribute("title") || "Custom Heading";
            return (
              (n.shadowRoot.innerHTML =
                "\n            <style>\n                h1 {\n                    margin: 0;\n                    color: #fff;\n                }\n            </style>\n            <h1>".concat(
                  t,
                  "</h1>\n        ",
                )),
              n
            );
          }
          return w(e, n), y(e);
        })(E(HTMLElement)),
        _ = (function (n) {
          function e() {
            var n;
            return (
              b(this, e), (n = x(this, e)).attachShadow({ mode: "open" }), n
            );
          }
          return (
            w(e, n),
            y(e, [
              {
                key: "updateList",
                value: function (n) {
                  this.shadowRoot.innerHTML =
                    "\n            <style>\n                .notes-grid {\n                    display: grid;\n                    grid-template-columns: repeat(2, 1fr);\n                    gap: 40px 60px;\n                    justify-items: center;\n                    padding: 20px;\n                    border: 4px solid #008DDA;\n                    border-radius: 20px;\n                }\n\n                .note {\n                    position: relative;\n                    border: 5px solid #008DDA;\n                    border-radius: 20px;\n                    padding: 20px;\n                    background-color: #008DDA;\n                    color: #fff;\n                    width: calc(100% - 40px);\n                    margin: 20px;\n                }\n                \n                .note h2 {\n                    margin-top: 0;\n                }\n\n                .delete-button {\n                    position: absolute;\n                    top: 10px;\n                    right: 10px;\n                    z-index: 1;\n                    background-color: #ff5252;\n                    color: #fff;\n                    border: none;\n                    border-radius: 50%;\n                    width: 30px;\n                    height: 30px;\n                    font-size: 13px;\n                    cursor: pointer;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    padding: 25px;\n                    font-weight: bold;\n                }\n\n                .delete-button:hover {\n                    background-color: #cc0000;\n                }\n            </style>\n        ";
                  var e = document.createElement("div");
                  e.classList.add("notes-grid"),
                    console.log(n),
                    n.data.forEach(function (n) {
                      var t = document.createElement("div");
                      t.classList.add("note");
                      var o = document.createElement("h2");
                      o.textContent = n.title;
                      var r = document.createElement("p");
                      r.textContent = n.body;
                      var i = document.createElement("button");
                      i.classList.add("delete-button"),
                        (i.textContent = "Delete"),
                        i.addEventListener("click", function () {
                          var e;
                          (e = n.id),
                            fetch("".concat(D, "/notes/").concat(e), {
                              method: "DELETE",
                            })
                              .then(function (n) {
                                return n.json();
                              })
                              .then(function (n) {
                                n.error
                                  ? P(n.message)
                                  : (R(), P("Note deleted successfully"));
                              })
                              .catch(function (n) {
                                P(n);
                              });
                        }),
                        t.appendChild(o),
                        t.appendChild(r),
                        t.appendChild(i),
                        e.appendChild(t);
                    }),
                    this.shadowRoot.appendChild(e);
                },
              },
            ])
          );
        })(E(HTMLElement)),
        I = (function (n) {
          function e() {
            var n;
            b(this, e), (n = x(this, e)).attachShadow({ mode: "open" });
            var t = n.getAttribute("text") || "Custom Footer";
            return (
              (n.shadowRoot.innerHTML = "\n            <footer>".concat(
                t,
                "</footer>\n        ",
              )),
              n
            );
          }
          return w(e, n), y(e);
        })(E(HTMLElement)),
        q = (function (n) {
          function e() {
            var n;
            return (
              b(this, e),
              (n = x(this, e)).attachShadow({ mode: "open" }),
              (n.shadowRoot.innerHTML =
                '\n            <style>\n                .loading-container {\n                    display: none;\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                    background-color: rgba(255, 255, 255, 0.5);\n                    z-index: 9999;\n                    justify-content: center;\n                    align-items: center;\n                }\n\n                .loading-spinner {\n                    border: 8px solid #f3f3f3;\n                    border-top: 8px solid #3498db;\n                    border-radius: 50%;\n                    width: 50px;\n                    height: 50px;\n                    animation: spin 1s linear infinite;\n                }\n\n                @keyframes spin {\n                    0% { transform: rotate(0deg); }\n                    100% { transform: rotate(360deg); }\n                }\n            </style>\n            <div class="loading-container">\n                <div class="loading-spinner"></div>\n            </div>\n        '),
              n
            );
          }
          return (
            w(e, n),
            y(e, [
              {
                key: "show",
                value: function () {
                  this.shadowRoot.querySelector(
                    ".loading-container",
                  ).style.display = "flex";
                },
              },
              {
                key: "hide",
                value: function () {
                  this.shadowRoot.querySelector(
                    ".loading-container",
                  ).style.display = "none";
                },
              },
            ])
          );
        })(E(HTMLElement));
    })();
})();
