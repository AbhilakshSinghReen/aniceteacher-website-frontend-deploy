(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [160],
  {
    6302: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 5218)),
        Promise.resolve().then(n.bind(n, 3180)),
        Promise.resolve().then(n.bind(n, 2591)),
        Promise.resolve().then(n.t.bind(n, 231, 23)),
        Promise.resolve().then(n.bind(n, 2324));
    },
    3180: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          buttonClasses: function () {
            return r.Z;
          },
          default: function () {
            return i.Z;
          },
          getButtonUtilityClass: function () {
            return r.F;
          },
        });
      var i = n(5519),
        r = n(468);
    },
    2324: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return f;
        },
      });
      var i = n(7437),
        r = n(2265),
        s = n(7138),
        l = n(7999),
        o = n(5519),
        a = n(2679),
        u = n(6871);
      function f(e) {
        let {
            render: t,
            targetSiteNavigationState: n,
            targetPageNavigationState: f,
          } = e,
          { setSiteNavigationState: c, setPageNavigationState: d } = (0,
          r.useContext)(u.i);
        return ((0, r.useEffect)(() => {
          c(n), d(f);
        }, []),
        t)
          ? (0, i.jsxs)(l.Z, {
              sx: {
                width: "100%",
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 3,
              },
              children: [
                (0, i.jsx)(l.Z, {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  children: (0, i.jsx)(s.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, i.jsx)(
                      o.Z,
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
                n.map((e, t) =>
                  (0, i.jsxs)(
                    l.Z,
                    {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [
                        (0, i.jsx)(a.Z, {}),
                        (0, i.jsx)(s.default, {
                          href: e.absoluteSlug,
                          passHref: !0,
                          children: (0, i.jsx)(o.Z, {
                            variant: "outlined",
                            color: "warning",
                            size: "small",
                            children: e.title,
                          }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              ],
            })
          : null;
      }
    },
    6871: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return l;
        },
        i: function () {
          return s;
        },
      });
      var i = n(7437),
        r = n(2265);
      let s = (0, r.createContext)(null);
      function l(e) {
        let { children: t } = e,
          [n, l] = (0, r.useState)([]),
          [o, a] = (0, r.useState)([]);
        return (0, i.jsx)(s.Provider, {
          value: {
            siteNavigationState: n,
            setSiteNavigationState: l,
            pageNavigationState: o,
            setPageNavigationState: a,
          },
          children: t,
        });
      }
    },
  },
  function (e) {
    e.O(0, [98, 134, 971, 23, 744], function () {
      return e((e.s = 6302));
    }),
      (_N_E = e.O());
  },
]);
