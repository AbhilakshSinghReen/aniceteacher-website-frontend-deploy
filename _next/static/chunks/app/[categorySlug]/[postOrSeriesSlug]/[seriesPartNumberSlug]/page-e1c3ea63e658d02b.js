(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [559],
  {
    7977: function (e, n, t) {
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
        Promise.resolve().then(t.bind(t, 2324)),
        Promise.resolve().then(t.bind(t, 3713));
    },
    6480: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return d;
        },
      });
      var i = t(7437),
        r = t(2265),
        o = t(7999),
        s = t(335),
        l = t(5885),
        a = t(5787);
      function d(e) {
        let { contentToCopy: n } = e,
          [t, d] = (0, r.useState)(!0);
        return (0, i.jsx)(o.Z, {
          sx: {
            backgroundColor: "rgb(227, 234, 242)",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          },
          children: (0, i.jsx)(s.Z, {
            onClick: (e) => {
              d &&
                (navigator.clipboard.writeText(n),
                d(!1),
                setTimeout(() => {
                  d(!0);
                }, 5e3));
            },
            color: "primary",
            size: "large",
            children: t ? (0, i.jsx)(l.Z, {}) : (0, i.jsx)(a.Z, {}),
          }),
        });
      }
    },
    2324: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return u;
        },
      });
      var i = t(7437),
        r = t(2265),
        o = t(7138),
        s = t(7999),
        l = t(5519),
        a = t(2679),
        d = t(6871);
      function u(e) {
        let {
            render: n,
            targetSiteNavigationState: t,
            targetPageNavigationState: u,
          } = e,
          { setSiteNavigationState: c, setPageNavigationState: f } = (0,
          r.useContext)(d.i);
        return ((0, r.useEffect)(() => {
          c(t), f(u);
        }, []),
        n)
          ? (0, i.jsxs)(s.Z, {
              sx: {
                width: "100%",
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 3,
              },
              children: [
                (0, i.jsx)(s.Z, {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  children: (0, i.jsx)(o.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, i.jsx)(
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
                  (0, i.jsxs)(
                    s.Z,
                    {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(a.Z, {}),
                        (0, i.jsx)(o.default, {
                          href: e.absoluteSlug,
                          passHref: !0,
                          children: (0, i.jsx)(l.Z, {
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
          return d;
        },
      });
      var i = t(7437),
        r = t(7999),
        o = t(335),
        s = t(1364),
        l = t(2388),
        a = t(3642);
      function d(e) {
        let { socialMediaProfiles: n } = e;
        return (0, i.jsx)(r.Z, {
          sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
          children: n.map((e) =>
            "LinkedIn" === e.network_name
              ? (0, i.jsx)(
                  o.Z,
                  {
                    onClick: () => window.open(e.profile_url, "_blank"),
                    sx: { color: "#0077B5" },
                    children: (0, i.jsx)(s.Z, {}),
                  },
                  e.network_name,
                )
              : "Twitter" === e.network_name
                ? (0, i.jsx)(
                    o.Z,
                    {
                      onClick: () => window.open(e.profile_url, "_blank"),
                      sx: { color: "#000000" },
                      children: (0, i.jsx)(l.Z, {}),
                    },
                    e.network_name,
                  )
                : "GitHub" === e.network_name
                  ? (0, i.jsx)(
                      o.Z,
                      {
                        onClick: () => window.open(e.profile_url, "_blank"),
                        sx: { color: "#000000" },
                        children: (0, i.jsx)(a.Z, {}),
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
      var i = t(7437),
        r = t(2265);
      let o = (0, r.createContext)(null);
      function s(e) {
        let { children: n } = e,
          [t, s] = (0, r.useState)([]),
          [l, a] = (0, r.useState)([]);
        return (0, i.jsx)(o.Provider, {
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
      return e((e.s = 7977));
    }),
      (_N_E = e.O());
  },
]);
