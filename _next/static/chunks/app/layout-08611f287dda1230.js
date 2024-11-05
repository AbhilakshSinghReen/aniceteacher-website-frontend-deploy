(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    698: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 902)),
        Promise.resolve().then(n.t.bind(n, 5326, 23)),
        Promise.resolve().then(n.t.bind(n, 3054, 23)),
        Promise.resolve().then(n.bind(n, 3245)),
        Promise.resolve().then(n.bind(n, 5877)),
        Promise.resolve().then(n.bind(n, 6871));
    },
    3245: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a;
        },
      });
      var i = n(7437),
        r = n(6463),
        l = n(7999),
        o = n(3719),
        s = n(1291);
      function a() {
        let e = (0, r.usePathname)();
        return (e.endsWith("/") && (e = e.slice(0, -1)), c.includes(e))
          ? null
          : (0, i.jsx)("footer", {
              style: { marginTop: 25 },
              children: (0, i.jsxs)(l.Z, {
                sx: {
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  paddingTop: 25,
                  borderTop: "1px solid black",
                },
                children: [
                  (0, i.jsx)("img", {
                    src: "".concat(
                      s.a6,
                      "/images/main-contact-email-light.jpg",
                    ),
                    style: { width: "250px", height: "27px" },
                  }),
                  (0, i.jsx)(o.Z, {
                    variant: "p",
                    children: "We typically reply within 24 hours.",
                  }),
                  (0, i.jsxs)(o.Z, {
                    variant: "h5",
                    children: ["\xa9 2024 ", s.WZ],
                  }),
                ],
              }),
            });
      }
      let c = ["/pd/who-am-i"];
    },
    5877: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return Z;
        },
      });
      var i = n(7437),
        r = n(6463),
        l = n(1733),
        o = n(4587),
        s = n(9806),
        a = n(3719),
        c = n(2265),
        u = n(7138),
        d = n(7999),
        h = n(335),
        x = n(7318),
        f = n(1651),
        p = n(110),
        g = n(9504),
        m = n(6871);
      function j(e) {
        let { open: t, setOpen: n, anchorElement: r } = e,
          { siteNavigationState: l, pageNavigationState: o } = (0,
          c.useContext)(m.i);
        return (0, i.jsxs)(p.Z, {
          anchorEl: r,
          anchorOrigin: { vertical: "top", horizontal: "right" },
          keepMounted: !0,
          transformOrigin: { vertical: "top", horizontal: "right" },
          open: t,
          onClose: () => n(!1),
          slotProps: { paper: { sx: { width: "100vw", maxWidth: 400 } } },
          children: [
            (0, i.jsx)(
              u.default,
              {
                href: "/",
                passHref: !0,
                onClick: () => n(!1),
                style: { textDecoration: "none", color: "black" },
                children: (0, i.jsx)(f.Z, { children: "Home" }),
              },
              "home-menu-item",
            ),
            l.map((e) => {
              var t;
              return (0, i.jsx)(
                u.default,
                {
                  href: e.absoluteSlug,
                  passHref: !0,
                  onClick: () => n(!1),
                  style: { textDecoration: "none", color: "black" },
                  children: (0, i.jsx)(f.Z, {
                    children:
                      null !== (t = e.fullTitle) && void 0 !== t ? t : e.title,
                  }),
                },
                e.absoluteSlug,
              );
            }),
            o.length > 0 &&
              (0, i.jsx)(x.Z, { sx: { bgcolor: "warning.main" } }),
            o.map((e) =>
              (0, i.jsx)(
                u.default,
                {
                  href: e.absoluteSlug,
                  passHref: !0,
                  onClick: () => n(!1),
                  style: { textDecoration: "none", color: "black" },
                  children: (0, i.jsx)(f.Z, { children: e.title }),
                },
                e.anchor,
              ),
            ),
          ],
        });
      }
      function v() {
        let [e, t] = (0, c.useState)(!1),
          [n, r] = (0, c.useState)(null);
        return (0, i.jsxs)(d.Z, {
          children: [
            (0, i.jsx)(h.Z, {
              color: "warning",
              onClick: (e) => {
                r(e.currentTarget), t(!0);
              },
              children: (0, i.jsx)(g.Z, { fontSize: "large" }),
            }),
            (0, i.jsx)(j, { open: e, setOpen: t, anchorElement: n }),
          ],
        });
      }
      var b = n(1291);
      function k() {
        let e = (0, r.useRouter)();
        return (0, i.jsx)(l.Z, {
          position: "fixed",
          children: (0, i.jsx)(o.Z, {
            maxWidth: "lg",
            children: (0, i.jsxs)(s.Z, {
              sx: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                padding: 0,
              },
              children: [
                (0, i.jsx)(a.Z, {
                  variant: "h4",
                  onClick: () => e.push("/"),
                  sx: {
                    fontWeight: "bold",
                    textAlign: "center",
                    background:
                      "linear-gradient(45deg, #FFD700 30%, #FFA500 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    "&:hover": { cursor: "pointer" },
                  },
                  children: b.DJ,
                }),
                (0, i.jsx)(v, {}),
              ],
            }),
          }),
        });
      }
      function Z() {
        let e = (0, r.usePathname)();
        return (e.endsWith("/") && (e = e.slice(0, -1)), y.includes(e))
          ? null
          : (0, i.jsxs)("header", {
              style: { marginBottom: 25 },
              children: [
                (0, i.jsx)(k, {}),
                (0, i.jsx)("div", { style: { paddingTop: 55 } }),
                " ",
              ],
            });
      }
      let y = ["/pd/who-am-i"];
    },
    1291: function (e, t, n) {
      "use strict";
      n.d(t, {
        DJ: function () {
          return r;
        },
        WZ: function () {
          return l;
        },
        a6: function () {
          return i;
        },
      });
      let i = "/media",
        r = "A.N.T",
        l = "A Nice Teacher";
    },
    6871: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o;
        },
        i: function () {
          return l;
        },
      });
      var i = n(7437),
        r = n(2265);
      let l = (0, r.createContext)(null);
      function o(e) {
        let { children: t } = e,
          [n, o] = (0, r.useState)([]),
          [s, a] = (0, r.useState)([]);
        return (0, i.jsx)(l.Provider, {
          value: {
            siteNavigationState: n,
            setSiteNavigationState: o,
            pageNavigationState: s,
            setPageNavigationState: a,
          },
          children: t,
        });
      }
    },
    3054: function () {},
  },
  function (e) {
    e.O(0, [370, 98, 748, 271, 971, 23, 744], function () {
      return e((e.s = 698));
    }),
      (_N_E = e.O());
  },
]);
