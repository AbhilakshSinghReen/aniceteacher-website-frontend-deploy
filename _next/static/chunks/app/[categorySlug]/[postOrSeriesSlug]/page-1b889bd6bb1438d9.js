(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [533],
  {
    2043: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 8125)),
        Promise.resolve().then(t.bind(t, 4204)),
        Promise.resolve().then(t.bind(t, 3578)),
        Promise.resolve().then(t.bind(t, 1847)),
        Promise.resolve().then(t.bind(t, 5218)),
        Promise.resolve().then(t.bind(t, 3180)),
        Promise.resolve().then(t.bind(t, 6652)),
        Promise.resolve().then(t.bind(t, 2818)),
        Promise.resolve().then(t.bind(t, 6981)),
        Promise.resolve().then(t.bind(t, 3507)),
        Promise.resolve().then(t.bind(t, 7005)),
        Promise.resolve().then(t.bind(t, 8888)),
        Promise.resolve().then(t.bind(t, 4775)),
        Promise.resolve().then(t.bind(t, 9697)),
        Promise.resolve().then(t.bind(t, 9355)),
        Promise.resolve().then(t.bind(t, 3037)),
        Promise.resolve().then(t.bind(t, 7842)),
        Promise.resolve().then(t.bind(t, 2591)),
        Promise.resolve().then(t.t.bind(t, 231, 23)),
        Promise.resolve().then(t.bind(t, 6480)),
        Promise.resolve().then(t.bind(t, 1454)),
        Promise.resolve().then(t.bind(t, 2324)),
        Promise.resolve().then(t.bind(t, 3713));
    },
    4247: function (e, n, t) {
      "use strict";
      var r = t(3963);
      n.Z = void 0;
      var i = r(t(9118)),
        o = t(7437);
      n.Z = (0, i.default)(
        (0, o.jsx)("path", {
          d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z",
        }),
        "Launch",
      );
    },
    6480: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return u;
        },
      });
      var r = t(7437),
        i = t(2265),
        o = t(7999),
        s = t(335),
        l = t(5885),
        a = t(5787);
      function u(e) {
        let { contentToCopy: n } = e,
          [t, u] = (0, i.useState)(!0);
        return (0, r.jsx)(o.Z, {
          sx: {
            backgroundColor: "rgb(227, 234, 242)",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          },
          children: (0, r.jsx)(s.Z, {
            onClick: (e) => {
              u &&
                (navigator.clipboard.writeText(n),
                u(!1),
                setTimeout(() => {
                  u(!0);
                }, 5e3));
            },
            color: "primary",
            size: "large",
            children: t ? (0, r.jsx)(l.Z, {}) : (0, r.jsx)(a.Z, {}),
          }),
        });
      }
    },
    1454: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return l;
        },
      });
      var r = t(7437),
        i = t(7138),
        o = t(335),
        s = t(4247);
      function l(e) {
        let { href: n } = e;
        return (0, r.jsx)(i.default, {
          href: n,
          passHref: !0,
          children: (0, r.jsx)(o.Z, {
            color: "primary",
            mr: 2,
            onClick: (e) => e.stopPropagation(),
            children: (0, r.jsx)(s.Z, {}),
          }),
        });
      }
    },
    2324: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return c;
        },
      });
      var r = t(7437),
        i = t(2265),
        o = t(7138),
        s = t(7999),
        l = t(5519),
        a = t(2679),
        u = t(6871);
      function c(e) {
        let {
            render: n,
            targetSiteNavigationState: t,
            targetPageNavigationState: c,
          } = e,
          { setSiteNavigationState: d, setPageNavigationState: f } = (0,
          i.useContext)(u.i);
        return ((0, i.useEffect)(() => {
          d(t), f(c);
        }, []),
        n)
          ? (0, r.jsxs)(s.Z, {
              sx: {
                width: "100%",
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 3,
              },
              children: [
                (0, r.jsx)(s.Z, {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  children: (0, r.jsx)(o.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, r.jsx)(
                      l.Z,
                      {
                        variant: "outlined",
                        color: "warning",
                        size: "small",
                        children: "Home",
                      },
                      "home-button",
                    ),
                  }),
                }),
                t.map((e, n) =>
                  (0, r.jsxs)(
                    s.Z,
                    {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [
                        (0, r.jsx)(a.Z, {}),
                        (0, r.jsx)(o.default, {
                          href: e.absoluteSlug,
                          passHref: !0,
                          children: (0, r.jsx)(l.Z, {
                            variant: "outlined",
                            color: "warning",
                            size: "small",
                            children: e.title,
                          }),
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              ],
            })
          : null;
      }
    },
    3713: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return u;
        },
      });
      var r = t(7437),
        i = t(7999),
        o = t(335),
        s = t(1364),
        l = t(2388),
        a = t(3642);
      function u(e) {
        let { socialMediaProfiles: n } = e;
        return (0, r.jsx)(i.Z, {
          sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
          children: n.map((e) =>
            "LinkedIn" === e.network_name
              ? (0, r.jsx)(
                  o.Z,
                  {
                    onClick: () => window.open(e.profile_url, "_blank"),
                    sx: { color: "#0077B5" },
                    children: (0, r.jsx)(s.Z, {}),
                  },
                  e.network_name,
                )
              : "Twitter" === e.network_name
                ? (0, r.jsx)(
                    o.Z,
                    {
                      onClick: () => window.open(e.profile_url, "_blank"),
                      sx: { color: "#000000" },
                      children: (0, r.jsx)(l.Z, {}),
                    },
                    e.network_name,
                  )
                : "GitHub" === e.network_name
                  ? (0, r.jsx)(
                      o.Z,
                      {
                        onClick: () => window.open(e.profile_url, "_blank"),
                        sx: { color: "#000000" },
                        children: (0, r.jsx)(a.Z, {}),
                      },
                      e.network_name,
                    )
                  : null,
          ),
        });
      }
    },
    6871: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return s;
        },
        i: function () {
          return o;
        },
      });
      var r = t(7437),
        i = t(2265);
      let o = (0, i.createContext)(null);
      function s(e) {
        let { children: n } = e,
          [t, s] = (0, i.useState)([]),
          [l, a] = (0, i.useState)([]);
        return (0, r.jsx)(o.Provider, {
          value: {
            siteNavigationState: t,
            setSiteNavigationState: s,
            pageNavigationState: l,
            setPageNavigationState: a,
          },
          children: n,
        });
      }
    },
  },
  function (e) {
    e.O(0, [98, 134, 830, 748, 411, 971, 23, 744], function () {
      return e((e.s = 2043));
    }),
      (_N_E = e.O());
  },
]);
