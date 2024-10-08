function kd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Pd = { exports: {} },
  Jo = {},
  Rd = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Il = Symbol.for("react.element"),
  Wh = Symbol.for("react.portal"),
  bh = Symbol.for("react.fragment"),
  Vh = Symbol.for("react.strict_mode"),
  Hh = Symbol.for("react.profiler"),
  Qh = Symbol.for("react.provider"),
  Kh = Symbol.for("react.context"),
  Yh = Symbol.for("react.forward_ref"),
  Gh = Symbol.for("react.suspense"),
  Xh = Symbol.for("react.memo"),
  Jh = Symbol.for("react.lazy"),
  $u = Symbol.iterator;
function Zh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ld = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _d = Object.assign,
  Id = {};
function Lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Id),
    (this.updater = n || Ld);
}
Lr.prototype.isReactComponent = {};
Lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Td() {}
Td.prototype = Lr.prototype;
function ys(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Id),
    (this.updater = n || Ld);
}
var ws = (ys.prototype = new Td());
ws.constructor = ys;
_d(ws, Lr.prototype);
ws.isPureReactComponent = !0;
var Uu = Array.isArray,
  Md = Object.prototype.hasOwnProperty,
  xs = { current: null },
  Od = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dd(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Md.call(t, r) && !Od.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Il,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: xs.current,
  };
}
function qh(e, t) {
  return {
    $$typeof: Il,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ss(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Il;
}
function em(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Au = /\/+/g;
function Ai(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? em("" + e.key)
    : t.toString(36);
}
function co(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Il:
          case Wh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ai(i, 0) : r),
      Uu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Au, "$&/") + "/"),
          co(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ss(l) &&
            (l = qh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Au, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Uu(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + Ai(o, a);
      i += co(o, t, n, s, l);
    }
  else if (((s = Zh(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ai(o, a++)), (i += co(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function Ql(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    co(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function tm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  fo = { transition: null },
  nm = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: fo,
    ReactCurrentOwner: xs,
  };
X.Children = {
  map: Ql,
  forEach: function (e, t, n) {
    Ql(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ql(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ql(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ss(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
X.Component = Lr;
X.Fragment = bh;
X.Profiler = Hh;
X.PureComponent = ys;
X.StrictMode = Vh;
X.Suspense = Gh;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _d({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = xs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Md.call(t, s) &&
        !Od.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Il, type: e.type, key: l, ref: o, props: r, _owner: i };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qh, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Dd;
X.createFactory = function (e) {
  var t = Dd.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: Yh, render: e };
};
X.isValidElement = Ss;
X.lazy = function (e) {
  return { $$typeof: Jh, _payload: { _status: -1, _result: e }, _init: tm };
};
X.memo = function (e, t) {
  return { $$typeof: Xh, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = fo.transition;
  fo.transition = {};
  try {
    e();
  } finally {
    fo.transition = t;
  }
};
X.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
X.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ge.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
X.useId = function () {
  return Ge.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ge.current.useRef(e);
};
X.useState = function (e) {
  return Ge.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ge.current.useTransition();
};
X.version = "18.2.0";
Rd.exports = X;
var y = Rd.exports;
const Wt = Nd(y),
  rm = kd({ __proto__: null, default: Wt }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm = y,
  om = Symbol.for("react.element"),
  im = Symbol.for("react.fragment"),
  am = Object.prototype.hasOwnProperty,
  sm = lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  um = { key: !0, ref: !0, __self: !0, __source: !0 };
function zd(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) am.call(t, r) && !um.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: om,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: sm.current,
  };
}
Jo.Fragment = im;
Jo.jsx = zd;
Jo.jsxs = zd;
Pd.exports = Jo;
var u = Pd.exports,
  ga = {},
  Fd = { exports: {} },
  st = {},
  $d = { exports: {} },
  Ud = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, B) {
    var W = P.length;
    P.push(B);
    e: for (; 0 < W; ) {
      var ee = (W - 1) >>> 1,
        te = P[ee];
      if (0 < l(te, B)) (P[ee] = B), (P[W] = te), (W = ee);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var B = P[0],
      W = P.pop();
    if (W !== B) {
      P[0] = W;
      e: for (var ee = 0, te = P.length, He = te >>> 1; ee < He; ) {
        var _e = 2 * (ee + 1) - 1,
          Ie = P[_e],
          Ee = _e + 1,
          Ue = P[Ee];
        if (0 > l(Ie, W))
          Ee < te && 0 > l(Ue, Ie)
            ? ((P[ee] = Ue), (P[Ee] = W), (ee = Ee))
            : ((P[ee] = Ie), (P[_e] = W), (ee = _e));
        else if (Ee < te && 0 > l(Ue, W)) (P[ee] = Ue), (P[Ee] = W), (ee = Ee);
        else break e;
      }
    }
    return B;
  }
  function l(P, B) {
    var W = P.sortIndex - B.sortIndex;
    return W !== 0 ? W : P.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    j = !1,
    x = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var B = n(c); B !== null; ) {
      if (B.callback === null) r(c);
      else if (B.startTime <= P)
        r(c), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = n(c);
    }
  }
  function E(P) {
    if (((w = !1), v(P), !x))
      if (n(s) !== null) (x = !0), se(R);
      else {
        var B = n(c);
        B !== null && K(E, B.startTime - P);
      }
  }
  function R(P, B) {
    (x = !1), w && ((w = !1), m(_), (_ = -1)), (j = !0);
    var W = h;
    try {
      for (
        v(B), f = n(s);
        f !== null && (!(f.expirationTime > B) || (P && !b()));

      ) {
        var ee = f.callback;
        if (typeof ee == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var te = ee(f.expirationTime <= B);
          (B = e.unstable_now()),
            typeof te == "function" ? (f.callback = te) : f === n(s) && r(s),
            v(B);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var He = !0;
      else {
        var _e = n(c);
        _e !== null && K(E, _e.startTime - B), (He = !1);
      }
      return He;
    } finally {
      (f = null), (h = W), (j = !1);
    }
  }
  var T = !1,
    g = null,
    _ = -1,
    D = 5,
    M = -1;
  function b() {
    return !(e.unstable_now() - M < D);
  }
  function ne() {
    if (g !== null) {
      var P = e.unstable_now();
      M = P;
      var B = !0;
      try {
        B = g(!0, P);
      } finally {
        B ? J() : ((T = !1), (g = null));
      }
    } else T = !1;
  }
  var J;
  if (typeof p == "function")
    J = function () {
      p(ne);
    };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(),
      re = ae.port2;
    (ae.port1.onmessage = ne),
      (J = function () {
        re.postMessage(null);
      });
  } else
    J = function () {
      k(ne, 0);
    };
  function se(P) {
    (g = P), T || ((T = !0), J());
  }
  function K(P, B) {
    _ = k(function () {
      P(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || j || ((x = !0), se(R));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = h;
      }
      var W = h;
      h = B;
      try {
        return P();
      } finally {
        h = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, B) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var W = h;
      h = P;
      try {
        return B();
      } finally {
        h = W;
      }
    }),
    (e.unstable_scheduleCallback = function (P, B, W) {
      var ee = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? ee + W : ee))
          : (W = ee),
        P)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = W + te),
        (P = {
          id: d++,
          callback: B,
          priorityLevel: P,
          startTime: W,
          expirationTime: te,
          sortIndex: -1,
        }),
        W > ee
          ? ((P.sortIndex = W),
            t(c, P),
            n(s) === null &&
              P === n(c) &&
              (w ? (m(_), (_ = -1)) : (w = !0), K(E, W - ee)))
          : ((P.sortIndex = te), t(s, P), x || j || ((x = !0), se(R))),
        P
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (P) {
      var B = h;
      return function () {
        var W = h;
        h = B;
        try {
          return P.apply(this, arguments);
        } finally {
          h = W;
        }
      };
    });
})(Ud);
$d.exports = Ud;
var cm = $d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad = y,
  at = cm;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Bd = new Set(),
  dl = {};
function Qn(e, t) {
  wr(e, t), wr(e + "Capture", t);
}
function wr(e, t) {
  for (dl[e] = t, e = 0; e < t.length; e++) Bd.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ya = Object.prototype.hasOwnProperty,
  dm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bu = {},
  Wu = {};
function fm(e) {
  return ya.call(Wu, e)
    ? !0
    : ya.call(Bu, e)
      ? !1
      : dm.test(e)
        ? (Wu[e] = !0)
        : ((Bu[e] = !0), !1);
}
function pm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hm(e, t, n, r) {
  if (t === null || typeof t > "u" || pm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Xe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $e[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var js = /[\-:]([a-z])/g;
function Es(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(js, Es);
    $e[t] = new Xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(js, Es);
    $e[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(js, Es);
  $e[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new Xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cs(e, t, n, r) {
  var l = $e.hasOwnProperty(t) ? $e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hm(t, n, l, r) && (n = null),
    r || l === null
      ? fm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Kl = Symbol.for("react.element"),
  er = Symbol.for("react.portal"),
  tr = Symbol.for("react.fragment"),
  ks = Symbol.for("react.strict_mode"),
  wa = Symbol.for("react.profiler"),
  Wd = Symbol.for("react.provider"),
  bd = Symbol.for("react.context"),
  Ns = Symbol.for("react.forward_ref"),
  xa = Symbol.for("react.suspense"),
  Sa = Symbol.for("react.suspense_list"),
  Ps = Symbol.for("react.memo"),
  an = Symbol.for("react.lazy"),
  Vd = Symbol.for("react.offscreen"),
  bu = Symbol.iterator;
function Ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bu && e[bu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ye = Object.assign,
  Bi;
function Jr(e) {
  if (Bi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bi = (t && t[1]) || "";
    }
  return (
    `
` +
    Bi +
    e
  );
}
var Wi = !1;
function bi(e, t) {
  if (!e || Wi) return "";
  Wi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Wi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function mm(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = bi(e.type, !1)), e;
    case 11:
      return (e = bi(e.type.render, !1)), e;
    case 1:
      return (e = bi(e.type, !0)), e;
    default:
      return "";
  }
}
function ja(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tr:
      return "Fragment";
    case er:
      return "Portal";
    case wa:
      return "Profiler";
    case ks:
      return "StrictMode";
    case xa:
      return "Suspense";
    case Sa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bd:
        return (e.displayName || "Context") + ".Consumer";
      case Wd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ns:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ps:
        return (
          (t = e.displayName || null), t !== null ? t : ja(e.type) || "Memo"
        );
      case an:
        (t = e._payload), (e = e._init);
        try {
          return ja(e(t));
        } catch {}
    }
  return null;
}
function vm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ja(t);
    case 8:
      return t === ks ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Hd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gm(e) {
  var t = Hd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Yl(e) {
  e._valueTracker || (e._valueTracker = gm(e));
}
function Qd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Hd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Eo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ea(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Kd(e, t) {
  (t = t.checked), t != null && Cs(e, "checked", t, !1);
}
function Ca(e, t) {
  Kd(e, t);
  var n = Sn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ka(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ka(e, t.type, Sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ka(e, t, n) {
  (t !== "number" || Eo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Zr(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function Yd(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ku(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Gl,
  Xd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gl = Gl || document.createElement("div"),
          Gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ym = ["Webkit", "ms", "Moz", "O"];
Object.keys(tl).forEach(function (e) {
  ym.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tl[t] = tl[e]);
  });
});
function Jd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (tl.hasOwnProperty(e) && tl[e])
      ? ("" + t).trim()
      : t + "px";
}
function Zd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Jd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var wm = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ra(e, t) {
  if (t) {
    if (wm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function La(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _a = null;
function Rs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ia = null,
  hr = null,
  mr = null;
function Yu(e) {
  if ((e = Ol(e))) {
    if (typeof Ia != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = ni(t)), Ia(e.stateNode, e.type, t));
  }
}
function qd(e) {
  hr ? (mr ? mr.push(e) : (mr = [e])) : (hr = e);
}
function ef() {
  if (hr) {
    var e = hr,
      t = mr;
    if (((mr = hr = null), Yu(e), t)) for (e = 0; e < t.length; e++) Yu(t[e]);
  }
}
function tf(e, t) {
  return e(t);
}
function nf() {}
var Vi = !1;
function rf(e, t, n) {
  if (Vi) return e(t, n);
  Vi = !0;
  try {
    return tf(e, t, n);
  } finally {
    (Vi = !1), (hr !== null || mr !== null) && (nf(), ef());
  }
}
function pl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ni(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Ta = !1;
if (Ht)
  try {
    var Br = {};
    Object.defineProperty(Br, "passive", {
      get: function () {
        Ta = !0;
      },
    }),
      window.addEventListener("test", Br, Br),
      window.removeEventListener("test", Br, Br);
  } catch {
    Ta = !1;
  }
function xm(e, t, n, r, l, o, i, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var nl = !1,
  Co = null,
  ko = !1,
  Ma = null,
  Sm = {
    onError: function (e) {
      (nl = !0), (Co = e);
    },
  };
function jm(e, t, n, r, l, o, i, a, s) {
  (nl = !1), (Co = null), xm.apply(Sm, arguments);
}
function Em(e, t, n, r, l, o, i, a, s) {
  if ((jm.apply(this, arguments), nl)) {
    if (nl) {
      var c = Co;
      (nl = !1), (Co = null);
    } else throw Error(L(198));
    ko || ((ko = !0), (Ma = c));
  }
}
function Kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gu(e) {
  if (Kn(e) !== e) throw Error(L(188));
}
function Cm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Gu(l), e;
        if (o === r) return Gu(l), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function of(e) {
  return (e = Cm(e)), e !== null ? af(e) : null;
}
function af(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = af(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sf = at.unstable_scheduleCallback,
  Xu = at.unstable_cancelCallback,
  km = at.unstable_shouldYield,
  Nm = at.unstable_requestPaint,
  Se = at.unstable_now,
  Pm = at.unstable_getCurrentPriorityLevel,
  Ls = at.unstable_ImmediatePriority,
  uf = at.unstable_UserBlockingPriority,
  No = at.unstable_NormalPriority,
  Rm = at.unstable_LowPriority,
  cf = at.unstable_IdlePriority,
  Zo = null,
  Dt = null;
function Lm(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(Zo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : Tm,
  _m = Math.log,
  Im = Math.LN2;
function Tm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_m(e) / Im) | 0)) | 0;
}
var Xl = 64,
  Jl = 4194304;
function qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = qr(a)) : ((o &= i), o !== 0 && (r = qr(o)));
  } else (i = n & ~l), i !== 0 ? (r = qr(i)) : o !== 0 && (r = qr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Mm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Om(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Pt(o),
      a = 1 << i,
      s = l[i];
    s === -1
      ? (!(a & n) || a & r) && (l[i] = Mm(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function df() {
  var e = Xl;
  return (Xl <<= 1), !(Xl & 4194240) && (Xl = 64), e;
}
function Hi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pt(t)),
    (e[t] = n);
}
function Dm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Pt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function _s(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var le = 0;
function ff(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pf,
  Is,
  hf,
  mf,
  vf,
  Da = !1,
  Zl = [],
  pn = null,
  hn = null,
  mn = null,
  hl = new Map(),
  ml = new Map(),
  un = [],
  zm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ju(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      hl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ml.delete(t.pointerId);
  }
}
function Wr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Ol(t)), t !== null && Is(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Fm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pn = Wr(pn, e, t, n, r, l)), !0;
    case "dragenter":
      return (hn = Wr(hn, e, t, n, r, l)), !0;
    case "mouseover":
      return (mn = Wr(mn, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return hl.set(o, Wr(hl.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ml.set(o, Wr(ml.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function gf(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lf(n)), t !== null)) {
          (e.blockedOn = t),
            vf(e.priority, function () {
              hf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function po(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = za(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_a = r), n.target.dispatchEvent(r), (_a = null);
    } else return (t = Ol(n)), t !== null && Is(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zu(e, t, n) {
  po(e) && n.delete(t);
}
function $m() {
  (Da = !1),
    pn !== null && po(pn) && (pn = null),
    hn !== null && po(hn) && (hn = null),
    mn !== null && po(mn) && (mn = null),
    hl.forEach(Zu),
    ml.forEach(Zu);
}
function br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Da ||
      ((Da = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, $m)));
}
function vl(e) {
  function t(l) {
    return br(l, e);
  }
  if (0 < Zl.length) {
    br(Zl[0], e);
    for (var n = 1; n < Zl.length; n++) {
      var r = Zl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pn !== null && br(pn, e),
      hn !== null && br(hn, e),
      mn !== null && br(mn, e),
      hl.forEach(t),
      ml.forEach(t),
      n = 0;
    n < un.length;
    n++
  )
    (r = un[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
    gf(n), n.blockedOn === null && un.shift();
}
var vr = Xt.ReactCurrentBatchConfig,
  Ro = !0;
function Um(e, t, n, r) {
  var l = le,
    o = vr.transition;
  vr.transition = null;
  try {
    (le = 1), Ts(e, t, n, r);
  } finally {
    (le = l), (vr.transition = o);
  }
}
function Am(e, t, n, r) {
  var l = le,
    o = vr.transition;
  vr.transition = null;
  try {
    (le = 4), Ts(e, t, n, r);
  } finally {
    (le = l), (vr.transition = o);
  }
}
function Ts(e, t, n, r) {
  if (Ro) {
    var l = za(e, t, n, r);
    if (l === null) ta(e, t, r, Lo, n), Ju(e, r);
    else if (Fm(l, e, t, n, r)) r.stopPropagation();
    else if ((Ju(e, r), t & 4 && -1 < zm.indexOf(e))) {
      for (; l !== null; ) {
        var o = Ol(l);
        if (
          (o !== null && pf(o),
          (o = za(e, t, n, r)),
          o === null && ta(e, t, r, Lo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ta(e, t, r, null, n);
  }
}
var Lo = null;
function za(e, t, n, r) {
  if (((Lo = null), (e = Rs(r)), (e = Mn(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Lo = e), null;
}
function yf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Pm()) {
        case Ls:
          return 1;
        case uf:
          return 4;
        case No:
        case Rm:
          return 16;
        case cf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  Ms = null,
  ho = null;
function wf() {
  if (ho) return ho;
  var e,
    t = Ms,
    n = t.length,
    r,
    l = "value" in dn ? dn.value : dn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (ho = l.slice(e, 1 < r ? 1 - r : void 0));
}
function mo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ql() {
  return !0;
}
function qu() {
  return !1;
}
function ut(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ql
        : qu),
      (this.isPropagationStopped = qu),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ql));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ql));
      },
      persist: function () {},
      isPersistent: ql,
    }),
    t
  );
}
var _r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Os = ut(_r),
  Ml = ye({}, _r, { view: 0, detail: 0 }),
  Bm = ut(Ml),
  Qi,
  Ki,
  Vr,
  qo = ye({}, Ml, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ds,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Vr &&
            (Vr && e.type === "mousemove"
              ? ((Qi = e.screenX - Vr.screenX), (Ki = e.screenY - Vr.screenY))
              : (Ki = Qi = 0),
            (Vr = e)),
          Qi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ki;
    },
  }),
  ec = ut(qo),
  Wm = ye({}, qo, { dataTransfer: 0 }),
  bm = ut(Wm),
  Vm = ye({}, Ml, { relatedTarget: 0 }),
  Yi = ut(Vm),
  Hm = ye({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qm = ut(Hm),
  Km = ye({}, _r, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ym = ut(Km),
  Gm = ye({}, _r, { data: 0 }),
  tc = ut(Gm),
  Xm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Jm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Zm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function qm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
}
function Ds() {
  return qm;
}
var ev = ye({}, Ml, {
    key: function (e) {
      if (e.key) {
        var t = Xm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = mo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Jm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ds,
    charCode: function (e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  tv = ut(ev),
  nv = ye({}, qo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nc = ut(nv),
  rv = ye({}, Ml, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ds,
  }),
  lv = ut(rv),
  ov = ye({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iv = ut(ov),
  av = ye({}, qo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sv = ut(av),
  uv = [9, 13, 27, 32],
  zs = Ht && "CompositionEvent" in window,
  rl = null;
Ht && "documentMode" in document && (rl = document.documentMode);
var cv = Ht && "TextEvent" in window && !rl,
  xf = Ht && (!zs || (rl && 8 < rl && 11 >= rl)),
  rc = String.fromCharCode(32),
  lc = !1;
function Sf(e, t) {
  switch (e) {
    case "keyup":
      return uv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function jf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nr = !1;
function dv(e, t) {
  switch (e) {
    case "compositionend":
      return jf(t);
    case "keypress":
      return t.which !== 32 ? null : ((lc = !0), rc);
    case "textInput":
      return (e = t.data), e === rc && lc ? null : e;
    default:
      return null;
  }
}
function fv(e, t) {
  if (nr)
    return e === "compositionend" || (!zs && Sf(e, t))
      ? ((e = wf()), (ho = Ms = dn = null), (nr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function oc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pv[e.type] : t === "textarea";
}
function Ef(e, t, n, r) {
  qd(r),
    (t = _o(t, "onChange")),
    0 < t.length &&
      ((n = new Os("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ll = null,
  gl = null;
function hv(e) {
  Of(e, 0);
}
function ei(e) {
  var t = or(e);
  if (Qd(t)) return e;
}
function mv(e, t) {
  if (e === "change") return t;
}
var Cf = !1;
if (Ht) {
  var Gi;
  if (Ht) {
    var Xi = "oninput" in document;
    if (!Xi) {
      var ic = document.createElement("div");
      ic.setAttribute("oninput", "return;"),
        (Xi = typeof ic.oninput == "function");
    }
    Gi = Xi;
  } else Gi = !1;
  Cf = Gi && (!document.documentMode || 9 < document.documentMode);
}
function ac() {
  ll && (ll.detachEvent("onpropertychange", kf), (gl = ll = null));
}
function kf(e) {
  if (e.propertyName === "value" && ei(gl)) {
    var t = [];
    Ef(t, gl, e, Rs(e)), rf(hv, t);
  }
}
function vv(e, t, n) {
  e === "focusin"
    ? (ac(), (ll = t), (gl = n), ll.attachEvent("onpropertychange", kf))
    : e === "focusout" && ac();
}
function gv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ei(gl);
}
function yv(e, t) {
  if (e === "click") return ei(t);
}
function wv(e, t) {
  if (e === "input" || e === "change") return ei(t);
}
function xv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : xv;
function yl(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ya.call(t, l) || !_t(e[l], t[l])) return !1;
  }
  return !0;
}
function sc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uc(e, t) {
  var n = sc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = sc(n);
  }
}
function Nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Nf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Pf() {
  for (var e = window, t = Eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Eo(e.document);
  }
  return t;
}
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Sv(e) {
  var t = Pf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = uc(n, o));
        var i = uc(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var jv = Ht && "documentMode" in document && 11 >= document.documentMode,
  rr = null,
  Fa = null,
  ol = null,
  $a = !1;
function cc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $a ||
    rr == null ||
    rr !== Eo(r) ||
    ((r = rr),
    "selectionStart" in r && Fs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ol && yl(ol, r)) ||
      ((ol = r),
      (r = _o(Fa, "onSelect")),
      0 < r.length &&
        ((t = new Os("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rr))));
}
function eo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: eo("Animation", "AnimationEnd"),
    animationiteration: eo("Animation", "AnimationIteration"),
    animationstart: eo("Animation", "AnimationStart"),
    transitionend: eo("Transition", "TransitionEnd"),
  },
  Ji = {},
  Rf = {};
Ht &&
  ((Rf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function ti(e) {
  if (Ji[e]) return Ji[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rf) return (Ji[e] = t[n]);
  return e;
}
var Lf = ti("animationend"),
  _f = ti("animationiteration"),
  If = ti("animationstart"),
  Tf = ti("transitionend"),
  Mf = new Map(),
  dc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Cn(e, t) {
  Mf.set(e, t), Qn(t, [e]);
}
for (var Zi = 0; Zi < dc.length; Zi++) {
  var qi = dc[Zi],
    Ev = qi.toLowerCase(),
    Cv = qi[0].toUpperCase() + qi.slice(1);
  Cn(Ev, "on" + Cv);
}
Cn(Lf, "onAnimationEnd");
Cn(_f, "onAnimationIteration");
Cn(If, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(Tf, "onTransitionEnd");
wr("onMouseEnter", ["mouseout", "mouseover"]);
wr("onMouseLeave", ["mouseout", "mouseover"]);
wr("onPointerEnter", ["pointerout", "pointerover"]);
wr("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var el =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  kv = new Set("cancel close invalid load scroll toggle".split(" ").concat(el));
function fc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Em(r, t, void 0, e), (e.currentTarget = null);
}
function Of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== o && l.isPropagationStopped())) break e;
          fc(l, a, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          fc(l, a, c), (o = s);
        }
    }
  }
  if (ko) throw ((e = Ma), (ko = !1), (Ma = null), e);
}
function ce(e, t) {
  var n = t[ba];
  n === void 0 && (n = t[ba] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Df(t, e, 2, !1), n.add(r));
}
function ea(e, t, n) {
  var r = 0;
  t && (r |= 4), Df(n, e, r, t);
}
var to = "_reactListening" + Math.random().toString(36).slice(2);
function wl(e) {
  if (!e[to]) {
    (e[to] = !0),
      Bd.forEach(function (n) {
        n !== "selectionchange" && (kv.has(n) || ea(n, !1, e), ea(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[to] || ((t[to] = !0), ea("selectionchange", !1, t));
  }
}
function Df(e, t, n, r) {
  switch (yf(t)) {
    case 1:
      var l = Um;
      break;
    case 4:
      l = Am;
      break;
    default:
      l = Ts;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ta ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function ta(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Mn(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  rf(function () {
    var c = o,
      d = Rs(n),
      f = [];
    e: {
      var h = Mf.get(e);
      if (h !== void 0) {
        var j = Os,
          x = e;
        switch (e) {
          case "keypress":
            if (mo(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = tv;
            break;
          case "focusin":
            (x = "focus"), (j = Yi);
            break;
          case "focusout":
            (x = "blur"), (j = Yi);
            break;
          case "beforeblur":
          case "afterblur":
            j = Yi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            j = ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = bm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = lv;
            break;
          case Lf:
          case _f:
          case If:
            j = Qm;
            break;
          case Tf:
            j = iv;
            break;
          case "scroll":
            j = Bm;
            break;
          case "wheel":
            j = sv;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = nc;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          m = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var p = c, v; p !== null; ) {
          v = p;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              m !== null && ((E = pl(p, m)), E != null && w.push(xl(p, E, v)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((h = new j(h, x, null, n, d)), f.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          h &&
            n !== _a &&
            (x = n.relatedTarget || n.fromElement) &&
            (Mn(x) || x[Qt]))
        )
          break e;
        if (
          (j || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          j
            ? ((x = n.relatedTarget || n.toElement),
              (j = c),
              (x = x ? Mn(x) : null),
              x !== null &&
                ((k = Kn(x)), x !== k || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((j = null), (x = c)),
          j !== x)
        ) {
          if (
            ((w = ec),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = nc),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (k = j == null ? h : or(j)),
            (v = x == null ? h : or(x)),
            (h = new w(E, p + "leave", j, n, d)),
            (h.target = k),
            (h.relatedTarget = v),
            (E = null),
            Mn(d) === c &&
              ((w = new w(m, p + "enter", x, n, d)),
              (w.target = v),
              (w.relatedTarget = k),
              (E = w)),
            (k = E),
            j && x)
          )
            t: {
              for (w = j, m = x, p = 0, v = w; v; v = Zn(v)) p++;
              for (v = 0, E = m; E; E = Zn(E)) v++;
              for (; 0 < p - v; ) (w = Zn(w)), p--;
              for (; 0 < v - p; ) (m = Zn(m)), v--;
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Zn(w)), (m = Zn(m));
              }
              w = null;
            }
          else w = null;
          j !== null && pc(f, h, j, w, !1),
            x !== null && k !== null && pc(f, k, x, w, !0);
        }
      }
      e: {
        if (
          ((h = c ? or(c) : window),
          (j = h.nodeName && h.nodeName.toLowerCase()),
          j === "select" || (j === "input" && h.type === "file"))
        )
          var R = mv;
        else if (oc(h))
          if (Cf) R = wv;
          else {
            R = gv;
            var T = vv;
          }
        else
          (j = h.nodeName) &&
            j.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (R = yv);
        if (R && (R = R(e, c))) {
          Ef(f, R, n, d);
          break e;
        }
        T && T(e, h, c),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            ka(h, "number", h.value);
      }
      switch (((T = c ? or(c) : window), e)) {
        case "focusin":
          (oc(T) || T.contentEditable === "true") &&
            ((rr = T), (Fa = c), (ol = null));
          break;
        case "focusout":
          ol = Fa = rr = null;
          break;
        case "mousedown":
          $a = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($a = !1), cc(f, n, d);
          break;
        case "selectionchange":
          if (jv) break;
        case "keydown":
        case "keyup":
          cc(f, n, d);
      }
      var g;
      if (zs)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        nr
          ? Sf(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (xf &&
          n.locale !== "ko" &&
          (nr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && nr && (g = wf())
            : ((dn = d),
              (Ms = "value" in dn ? dn.value : dn.textContent),
              (nr = !0))),
        (T = _o(c, _)),
        0 < T.length &&
          ((_ = new tc(_, e, null, n, d)),
          f.push({ event: _, listeners: T }),
          g ? (_.data = g) : ((g = jf(n)), g !== null && (_.data = g)))),
        (g = cv ? dv(e, n) : fv(e, n)) &&
          ((c = _o(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new tc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = g)));
    }
    Of(f, t);
  });
}
function xl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _o(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = pl(e, n)),
      o != null && r.unshift(xl(e, o, l)),
      (o = pl(e, t)),
      o != null && r.push(xl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pc(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((s = pl(n, o)), s != null && i.unshift(xl(n, s, a)))
        : l || ((s = pl(n, o)), s != null && i.push(xl(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Nv = /\r\n?/g,
  Pv = /\u0000|\uFFFD/g;
function hc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Nv,
      `
`,
    )
    .replace(Pv, "");
}
function no(e, t, n) {
  if (((t = hc(t)), hc(e) !== t && n)) throw Error(L(425));
}
function Io() {}
var Ua = null,
  Aa = null;
function Ba(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wa = typeof setTimeout == "function" ? setTimeout : void 0,
  Rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mc = typeof Promise == "function" ? Promise : void 0,
  Lv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mc < "u"
        ? function (e) {
            return mc.resolve(null).then(e).catch(_v);
          }
        : Wa;
function _v(e) {
  setTimeout(function () {
    throw e;
  });
}
function na(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), vl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  vl(t);
}
function vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ir = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + Ir,
  Sl = "__reactProps$" + Ir,
  Qt = "__reactContainer$" + Ir,
  ba = "__reactEvents$" + Ir,
  Iv = "__reactListeners$" + Ir,
  Tv = "__reactHandles$" + Ir;
function Mn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qt] || n[Ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vc(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = vc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ol(e) {
  return (
    (e = e[Ot] || e[Qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function ni(e) {
  return e[Sl] || null;
}
var Va = [],
  ir = -1;
function kn(e) {
  return { current: e };
}
function de(e) {
  0 > ir || ((e.current = Va[ir]), (Va[ir] = null), ir--);
}
function ue(e, t) {
  ir++, (Va[ir] = e.current), (e.current = t);
}
var jn = {},
  Ve = kn(jn),
  et = kn(!1),
  An = jn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function To() {
  de(et), de(Ve);
}
function gc(e, t, n) {
  if (Ve.current !== jn) throw Error(L(168));
  ue(Ve, t), ue(et, n);
}
function zf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, vm(e) || "Unknown", l));
  return ye({}, n, r);
}
function Mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (An = Ve.current),
    ue(Ve, e),
    ue(et, et.current),
    !0
  );
}
function yc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = zf(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(et),
      de(Ve),
      ue(Ve, e))
    : de(et),
    ue(et, n);
}
var Ut = null,
  ri = !1,
  ra = !1;
function Ff(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function Mv(e) {
  (ri = !0), Ff(e);
}
function Nn() {
  if (!ra && Ut !== null) {
    ra = !0;
    var e = 0,
      t = le;
    try {
      var n = Ut;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (ri = !1);
    } catch (l) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), sf(Ls, Nn), l);
    } finally {
      (le = t), (ra = !1);
    }
  }
  return null;
}
var ar = [],
  sr = 0,
  Oo = null,
  Do = 0,
  pt = [],
  ht = 0,
  Bn = null,
  At = 1,
  Bt = "";
function In(e, t) {
  (ar[sr++] = Do), (ar[sr++] = Oo), (Oo = e), (Do = t);
}
function $f(e, t, n) {
  (pt[ht++] = At), (pt[ht++] = Bt), (pt[ht++] = Bn), (Bn = e);
  var r = At;
  e = Bt;
  var l = 32 - Pt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Pt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (At = (1 << (32 - Pt(t) + l)) | (n << l) | r),
      (Bt = o + e);
  } else (At = (1 << o) | (n << l) | r), (Bt = e);
}
function $s(e) {
  e.return !== null && (In(e, 1), $f(e, 1, 0));
}
function Us(e) {
  for (; e === Oo; )
    (Oo = ar[--sr]), (ar[sr] = null), (Do = ar[--sr]), (ar[sr] = null);
  for (; e === Bn; )
    (Bn = pt[--ht]),
      (pt[ht] = null),
      (Bt = pt[--ht]),
      (pt[ht] = null),
      (At = pt[--ht]),
      (pt[ht] = null);
}
var it = null,
  ot = null,
  he = !1,
  Nt = null;
function Uf(e, t) {
  var n = vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (ot = vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bn !== null ? { id: At, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ha(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qa(e) {
  if (he) {
    var t = ot;
    if (t) {
      var n = t;
      if (!wc(e, t)) {
        if (Ha(e)) throw Error(L(418));
        t = vn(n.nextSibling);
        var r = it;
        t && wc(e, t)
          ? Uf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (it = e));
      }
    } else {
      if (Ha(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (it = e);
    }
  }
}
function xc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function ro(e) {
  if (e !== it) return !1;
  if (!he) return xc(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (Ha(e)) throw (Af(), Error(L(418)));
    for (; t; ) Uf(e, t), (t = vn(t.nextSibling));
  }
  if ((xc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = it ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function Af() {
  for (var e = ot; e; ) e = vn(e.nextSibling);
}
function Sr() {
  (ot = it = null), (he = !1);
}
function As(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var Ov = Xt.ReactCurrentBatchConfig;
function Et(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var zo = kn(null),
  Fo = null,
  ur = null,
  Bs = null;
function Ws() {
  Bs = ur = Fo = null;
}
function bs(e) {
  var t = zo.current;
  de(zo), (e._currentValue = t);
}
function Ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function gr(e, t) {
  (Fo = e),
    (Bs = ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null));
}
function yt(e) {
  var t = e._currentValue;
  if (Bs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
      if (Fo === null) throw Error(L(308));
      (ur = e), (Fo.dependencies = { lanes: 0, firstContext: e });
    } else ur = ur.next = e;
  return t;
}
var On = null;
function Vs(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Bf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Vs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var sn = !1;
function Hs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Vs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function vo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _s(e, n);
  }
}
function Sc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function $o(e, t, n, r) {
  var l = e.updateQueue;
  sn = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = l.baseState;
    (i = 0), (d = c = s = null), (a = o);
    do {
      var h = a.lane,
        j = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: j,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((h = t), (j = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                f = x.call(j, f, h);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (h = typeof x == "function" ? x.call(j, f, h) : x),
                h == null)
              )
                break e;
              f = ye({}, f, h);
              break e;
            case 2:
              sn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (j = {
          eventTime: j,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = j), (s = f)) : (d = d.next = j),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = f),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (bn |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function jc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(L(191, l));
        l.call(r);
      }
    }
}
var bf = new Ad.Component().refs;
function Ya(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      l = wn(e),
      o = bt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, l)),
      t !== null && (Rt(t, e, l, r), vo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      l = wn(e),
      o = bt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, l)),
      t !== null && (Rt(t, e, l, r), vo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ye(),
      r = wn(e),
      l = bt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = gn(e, l, r)),
      t !== null && (Rt(t, e, r, n), vo(t, e, r));
  },
};
function Ec(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !yl(n, r) || !yl(l, o)
        : !0
  );
}
function Vf(e, t, n) {
  var r = !1,
    l = jn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = yt(o))
      : ((l = tt(t) ? An : Ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xr(e, l) : jn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Cc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && li.enqueueReplaceState(t, t.state, null);
}
function Ga(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = bf), Hs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = yt(o))
    : ((o = tt(t) ? An : Ve.current), (l.context = xr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ya(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && li.enqueueReplaceState(l, l.state, null),
      $o(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === bf && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function lo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function kc(e) {
  var t = e._init;
  return t(e._payload);
}
function Hf(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function l(m, p) {
    return (m = xn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, v, E) {
    return p === null || p.tag !== 6
      ? ((p = ca(v, m.mode, E)), (p.return = m), p)
      : ((p = l(p, v)), (p.return = m), p);
  }
  function s(m, p, v, E) {
    var R = v.type;
    return R === tr
      ? d(m, p, v.props.children, E, v.key)
      : p !== null &&
          (p.elementType === R ||
            (typeof R == "object" &&
              R !== null &&
              R.$$typeof === an &&
              kc(R) === p.type))
        ? ((E = l(p, v.props)), (E.ref = Hr(m, p, v)), (E.return = m), E)
        : ((E = jo(v.type, v.key, v.props, null, m.mode, E)),
          (E.ref = Hr(m, p, v)),
          (E.return = m),
          E);
  }
  function c(m, p, v, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = da(v, m.mode, E)), (p.return = m), p)
      : ((p = l(p, v.children || [])), (p.return = m), p);
  }
  function d(m, p, v, E, R) {
    return p === null || p.tag !== 7
      ? ((p = Un(v, m.mode, E, R)), (p.return = m), p)
      : ((p = l(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ca("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Kl:
          return (
            (v = jo(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = Hr(m, null, p)),
            (v.return = m),
            v
          );
        case er:
          return (p = da(p, m.mode, v)), (p.return = m), p;
        case an:
          var E = p._init;
          return f(m, E(p._payload), v);
      }
      if (Zr(p) || Ar(p))
        return (p = Un(p, m.mode, v, null)), (p.return = m), p;
      lo(m, p);
    }
    return null;
  }
  function h(m, p, v, E) {
    var R = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return R !== null ? null : a(m, p, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Kl:
          return v.key === R ? s(m, p, v, E) : null;
        case er:
          return v.key === R ? c(m, p, v, E) : null;
        case an:
          return (R = v._init), h(m, p, R(v._payload), E);
      }
      if (Zr(v) || Ar(v)) return R !== null ? null : d(m, p, v, E, null);
      lo(m, v);
    }
    return null;
  }
  function j(m, p, v, E, R) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(v) || null), a(p, m, "" + E, R);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Kl:
          return (m = m.get(E.key === null ? v : E.key) || null), s(p, m, E, R);
        case er:
          return (m = m.get(E.key === null ? v : E.key) || null), c(p, m, E, R);
        case an:
          var T = E._init;
          return j(m, p, v, T(E._payload), R);
      }
      if (Zr(E) || Ar(E)) return (m = m.get(v) || null), d(p, m, E, R, null);
      lo(p, E);
    }
    return null;
  }
  function x(m, p, v, E) {
    for (
      var R = null, T = null, g = p, _ = (p = 0), D = null;
      g !== null && _ < v.length;
      _++
    ) {
      g.index > _ ? ((D = g), (g = null)) : (D = g.sibling);
      var M = h(m, g, v[_], E);
      if (M === null) {
        g === null && (g = D);
        break;
      }
      e && g && M.alternate === null && t(m, g),
        (p = o(M, p, _)),
        T === null ? (R = M) : (T.sibling = M),
        (T = M),
        (g = D);
    }
    if (_ === v.length) return n(m, g), he && In(m, _), R;
    if (g === null) {
      for (; _ < v.length; _++)
        (g = f(m, v[_], E)),
          g !== null &&
            ((p = o(g, p, _)), T === null ? (R = g) : (T.sibling = g), (T = g));
      return he && In(m, _), R;
    }
    for (g = r(m, g); _ < v.length; _++)
      (D = j(g, m, _, v[_], E)),
        D !== null &&
          (e && D.alternate !== null && g.delete(D.key === null ? _ : D.key),
          (p = o(D, p, _)),
          T === null ? (R = D) : (T.sibling = D),
          (T = D));
    return (
      e &&
        g.forEach(function (b) {
          return t(m, b);
        }),
      he && In(m, _),
      R
    );
  }
  function w(m, p, v, E) {
    var R = Ar(v);
    if (typeof R != "function") throw Error(L(150));
    if (((v = R.call(v)), v == null)) throw Error(L(151));
    for (
      var T = (R = null), g = p, _ = (p = 0), D = null, M = v.next();
      g !== null && !M.done;
      _++, M = v.next()
    ) {
      g.index > _ ? ((D = g), (g = null)) : (D = g.sibling);
      var b = h(m, g, M.value, E);
      if (b === null) {
        g === null && (g = D);
        break;
      }
      e && g && b.alternate === null && t(m, g),
        (p = o(b, p, _)),
        T === null ? (R = b) : (T.sibling = b),
        (T = b),
        (g = D);
    }
    if (M.done) return n(m, g), he && In(m, _), R;
    if (g === null) {
      for (; !M.done; _++, M = v.next())
        (M = f(m, M.value, E)),
          M !== null &&
            ((p = o(M, p, _)), T === null ? (R = M) : (T.sibling = M), (T = M));
      return he && In(m, _), R;
    }
    for (g = r(m, g); !M.done; _++, M = v.next())
      (M = j(g, m, _, M.value, E)),
        M !== null &&
          (e && M.alternate !== null && g.delete(M.key === null ? _ : M.key),
          (p = o(M, p, _)),
          T === null ? (R = M) : (T.sibling = M),
          (T = M));
    return (
      e &&
        g.forEach(function (ne) {
          return t(m, ne);
        }),
      he && In(m, _),
      R
    );
  }
  function k(m, p, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === tr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Kl:
          e: {
            for (var R = v.key, T = p; T !== null; ) {
              if (T.key === R) {
                if (((R = v.type), R === tr)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (p = l(T, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  T.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === an &&
                    kc(R) === T.type)
                ) {
                  n(m, T.sibling),
                    (p = l(T, v.props)),
                    (p.ref = Hr(m, T, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            v.type === tr
              ? ((p = Un(v.props.children, m.mode, E, v.key)),
                (p.return = m),
                (m = p))
              : ((E = jo(v.type, v.key, v.props, null, m.mode, E)),
                (E.ref = Hr(m, p, v)),
                (E.return = m),
                (m = E));
          }
          return i(m);
        case er:
          e: {
            for (T = v.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = l(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = da(v, m.mode, E)), (p.return = m), (m = p);
          }
          return i(m);
        case an:
          return (T = v._init), k(m, p, T(v._payload), E);
      }
      if (Zr(v)) return x(m, p, v, E);
      if (Ar(v)) return w(m, p, v, E);
      lo(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = l(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = ca(v, m.mode, E)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return k;
}
var jr = Hf(!0),
  Qf = Hf(!1),
  Dl = {},
  zt = kn(Dl),
  jl = kn(Dl),
  El = kn(Dl);
function Dn(e) {
  if (e === Dl) throw Error(L(174));
  return e;
}
function Qs(e, t) {
  switch ((ue(El, t), ue(jl, e), ue(zt, Dl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pa(t, e));
  }
  de(zt), ue(zt, t);
}
function Er() {
  de(zt), de(jl), de(El);
}
function Kf(e) {
  Dn(El.current);
  var t = Dn(zt.current),
    n = Pa(t, e.type);
  t !== n && (ue(jl, e), ue(zt, n));
}
function Ks(e) {
  jl.current === e && (de(zt), de(jl));
}
var ve = kn(0);
function Uo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var la = [];
function Ys() {
  for (var e = 0; e < la.length; e++)
    la[e]._workInProgressVersionPrimary = null;
  la.length = 0;
}
var go = Xt.ReactCurrentDispatcher,
  oa = Xt.ReactCurrentBatchConfig,
  Wn = 0,
  ge = null,
  Ce = null,
  Pe = null,
  Ao = !1,
  il = !1,
  Cl = 0,
  Dv = 0;
function Ae() {
  throw Error(L(321));
}
function Gs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Xs(e, t, n, r, l, o) {
  if (
    ((Wn = o),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (go.current = e === null || e.memoizedState === null ? Uv : Av),
    (e = n(r, l)),
    il)
  ) {
    o = 0;
    do {
      if (((il = !1), (Cl = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Pe = Ce = null),
        (t.updateQueue = null),
        (go.current = Bv),
        (e = n(r, l));
    } while (il);
  }
  if (
    ((go.current = Bo),
    (t = Ce !== null && Ce.next !== null),
    (Wn = 0),
    (Pe = Ce = ge = null),
    (Ao = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Js() {
  var e = Cl !== 0;
  return (Cl = 0), e;
}
function Mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (ge.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function wt() {
  if (Ce === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Pe === null ? ge.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Ce = e);
  else {
    if (e === null) throw Error(L(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Pe === null ? (ge.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function kl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ia(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      c = o;
    do {
      var d = c.lane;
      if ((Wn & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = f), (i = r)) : (s = s.next = f),
          (ge.lanes |= d),
          (bn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = a),
      _t(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ge.lanes |= o), (bn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function aa(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    _t(o, t.memoizedState) || (qe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Yf() {}
function Gf(e, t) {
  var n = ge,
    r = wt(),
    l = t(),
    o = !_t(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (qe = !0)),
    (r = r.queue),
    Zs(Zf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nl(9, Jf.bind(null, n, r, l, t), void 0, null),
      Re === null)
    )
      throw Error(L(349));
    Wn & 30 || Xf(n, t, l);
  }
  return l;
}
function Xf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qf(t) && ep(e);
}
function Zf(e, t, n) {
  return n(function () {
    qf(t) && ep(e);
  });
}
function qf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = Kt(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function Nc(e) {
  var t = Mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $v.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function Nl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tp() {
  return wt().memoizedState;
}
function yo(e, t, n, r) {
  var l = Mt();
  (ge.flags |= e),
    (l.memoizedState = Nl(1 | t, n, void 0, r === void 0 ? null : r));
}
function oi(e, t, n, r) {
  var l = wt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ce !== null) {
    var i = Ce.memoizedState;
    if (((o = i.destroy), r !== null && Gs(r, i.deps))) {
      l.memoizedState = Nl(t, n, o, r);
      return;
    }
  }
  (ge.flags |= e), (l.memoizedState = Nl(1 | t, n, o, r));
}
function Pc(e, t) {
  return yo(8390656, 8, e, t);
}
function Zs(e, t) {
  return oi(2048, 8, e, t);
}
function np(e, t) {
  return oi(4, 2, e, t);
}
function rp(e, t) {
  return oi(4, 4, e, t);
}
function lp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function op(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), oi(4, 4, lp.bind(null, t, e), n)
  );
}
function qs() {}
function ip(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ap(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sp(e, t, n) {
  return Wn & 21
    ? (_t(n, t) || ((n = df()), (ge.lanes |= n), (bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function zv(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oa.transition;
  oa.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (oa.transition = r);
  }
}
function up() {
  return wt().memoizedState;
}
function Fv(e, t, n) {
  var r = wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cp(e))
  )
    dp(t, n);
  else if (((n = Bf(e, t, n, r)), n !== null)) {
    var l = Ye();
    Rt(n, e, r, l), fp(n, t, r);
  }
}
function $v(e, t, n) {
  var r = wn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) dp(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), _t(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Vs(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bf(e, t, l, r)),
      n !== null && ((l = Ye()), Rt(n, e, r, l), fp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function dp(e, t) {
  il = Ao = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _s(e, n);
  }
}
var Bo = {
    readContext: yt,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  Uv = {
    readContext: yt,
    useCallback: function (e, t) {
      return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: yt,
    useEffect: Pc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        yo(4194308, 4, lp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Fv.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nc,
    useDebugValue: qs,
    useDeferredValue: function (e) {
      return (Mt().memoizedState = e);
    },
    useTransition: function () {
      var e = Nc(!1),
        t = e[0];
      return (e = zv.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        l = Mt();
      if (he) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(L(349));
        Wn & 30 || Xf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Pc(Zf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nl(9, Jf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Mt(),
        t = Re.identifierPrefix;
      if (he) {
        var n = Bt,
          r = At;
        (n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Cl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Dv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Av = {
    readContext: yt,
    useCallback: ip,
    useContext: yt,
    useEffect: Zs,
    useImperativeHandle: op,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: ap,
    useReducer: ia,
    useRef: tp,
    useState: function () {
      return ia(kl);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = wt();
      return sp(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ia(kl)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yf,
    useSyncExternalStore: Gf,
    useId: up,
    unstable_isNewReconciler: !1,
  },
  Bv = {
    readContext: yt,
    useCallback: ip,
    useContext: yt,
    useEffect: Zs,
    useImperativeHandle: op,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: ap,
    useReducer: aa,
    useRef: tp,
    useState: function () {
      return aa(kl);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = wt();
      return Ce === null ? (t.memoizedState = e) : sp(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = aa(kl)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yf,
    useSyncExternalStore: Gf,
    useId: up,
    unstable_isNewReconciler: !1,
  };
function Cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mm(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Wv = typeof WeakMap == "function" ? WeakMap : Map;
function pp(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bo || ((bo = !0), (is = r)), Xa(e, t);
    }),
    n
  );
}
function hp(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Xa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Xa(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Rc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ng.bind(null, e, t, n)), t.then(e, e));
}
function Lc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _c(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bt(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bv = Xt.ReactCurrentOwner,
  qe = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? Qf(t, null, n, r) : jr(t, e.child, n, r);
}
function Ic(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    gr(t, l),
    (r = Xs(e, t, n, r, o, l)),
    (n = Js()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Yt(e, t, l))
      : (he && n && $s(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
  );
}
function Tc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !au(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mp(e, t, o, r, l))
      : ((e = jo(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : yl), n(i, r) && e.ref === t.ref)
    )
      return Yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mp(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (yl(o, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (qe = !0);
      else return (t.lanes = e.lanes), Yt(e, t, l);
  }
  return Ja(e, t, n, r, l);
}
function vp(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(dr, lt),
        (lt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(dr, lt),
          (lt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ue(dr, lt),
        (lt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(dr, lt),
      (lt |= r);
  return Ke(e, t, l, n), t.child;
}
function gp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ja(e, t, n, r, l) {
  var o = tt(n) ? An : Ve.current;
  return (
    (o = xr(t, o)),
    gr(t, l),
    (n = Xs(e, t, n, r, o, l)),
    (r = Js()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Yt(e, t, l))
      : (he && r && $s(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
  );
}
function Mc(e, t, n, r, l) {
  if (tt(n)) {
    var o = !0;
    Mo(t);
  } else o = !1;
  if ((gr(t, l), t.stateNode === null))
    wo(e, t), Vf(t, n, r), Ga(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = yt(c))
      : ((c = tt(n) ? An : Ve.current), (c = xr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && Cc(t, i, r, c)),
      (sn = !1);
    var h = t.memoizedState;
    (i.state = h),
      $o(t, r, i, l),
      (s = t.memoizedState),
      a !== r || h !== s || et.current || sn
        ? (typeof d == "function" && (Ya(t, n, d, r), (s = t.memoizedState)),
          (a = sn || Ec(t, n, a, r, h, s, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Wf(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Et(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = yt(s))
        : ((s = tt(n) ? An : Ve.current), (s = xr(t, s)));
    var j = n.getDerivedStateFromProps;
    (d =
      typeof j == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || h !== s) && Cc(t, i, r, s)),
      (sn = !1),
      (h = t.memoizedState),
      (i.state = h),
      $o(t, r, i, l);
    var x = t.memoizedState;
    a !== f || h !== x || et.current || sn
      ? (typeof j == "function" && (Ya(t, n, j, r), (x = t.memoizedState)),
        (c = sn || Ec(t, n, c, r, h, x, s) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Za(e, t, n, r, o, l);
}
function Za(e, t, n, r, l, o) {
  gp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && yc(t, n, !1), Yt(e, t, o);
  (r = t.stateNode), (bv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = jr(t, e.child, null, o)), (t.child = jr(t, null, a, o)))
      : Ke(e, t, a, o),
    (t.memoizedState = r.state),
    l && yc(t, n, !0),
    t.child
  );
}
function yp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gc(e, t.context, !1),
    Qs(e, t.containerInfo);
}
function Oc(e, t, n, r, l) {
  return Sr(), As(l), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var qa = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps,
    l = ve.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ue(ve, l & 1),
    e === null)
  )
    return (
      Qa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = si(i, r, 0, null)),
              (e = Un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = es(n)),
              (t.memoizedState = qa),
              e)
            : eu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Vv(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = xn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = xn(a, o)) : ((o = Un(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? es(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = qa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function eu(e, t) {
  return (
    (t = si({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oo(e, t, n, r) {
  return (
    r !== null && As(r),
    jr(t, e.child, null, n),
    (e = eu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = sa(Error(L(422)))), oo(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = si({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Un(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && jr(t, e.child, null, i),
          (t.child.memoizedState = es(i)),
          (t.memoizedState = qa),
          o);
  if (!(t.mode & 1)) return oo(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = sa(o, r, void 0)), oo(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), qe || a)) {
    if (((r = Re), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Kt(e, l), Rt(r, e, l, -1));
    }
    return iu(), (r = sa(Error(L(421)))), oo(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ot = vn(l.nextSibling)),
      (it = t),
      (he = !0),
      (Nt = null),
      e !== null &&
        ((pt[ht++] = At),
        (pt[ht++] = Bt),
        (pt[ht++] = Bn),
        (At = e.id),
        (Bt = e.overflow),
        (Bn = t)),
      (t = eu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Dc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ka(e.return, t, n);
}
function ua(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function xp(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ke(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
        else if (e.tag === 19) Dc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ue(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Uo(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ua(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Uo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ua(t, !0, n, null, o);
        break;
      case "together":
        ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hv(e, t, n) {
  switch (t.tag) {
    case 3:
      yp(t), Sr();
      break;
    case 5:
      Kf(t);
      break;
    case 1:
      tt(t.type) && Mo(t);
      break;
    case 4:
      Qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ue(zo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? wp(e, t, n)
            : (ue(ve, ve.current & 1),
              (e = Yt(e, t, n)),
              e !== null ? e.sibling : null);
      ue(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ue(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vp(e, t, n);
  }
  return Yt(e, t, n);
}
var Sp, ts, jp, Ep;
Sp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ts = function () {};
jp = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Dn(zt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ea(e, l)), (r = Ea(e, r)), (o = []);
        break;
      case "select":
        (l = ye({}, l, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Na(e, l)), (r = Na(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Io);
    }
    Ra(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (dl.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (dl.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && ce("scroll", e),
                    o || a === s || (o = []))
                  : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ep = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qr(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Qv(e, t, n) {
  var r = t.pendingProps;
  switch ((Us(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Be(t), null;
    case 1:
      return tt(t.type) && To(), Be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Er(),
        de(et),
        de(Ve),
        Ys(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ro(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (us(Nt), (Nt = null)))),
        ts(e, t),
        Be(t),
        null
      );
    case 5:
      Ks(t);
      var l = Dn(El.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        jp(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Be(t), null;
        }
        if (((e = Dn(zt.current)), ro(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ot] = t), (r[Sl] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < el.length; l++) ce(el[l], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Vu(r, o), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              Qu(r, o), ce("invalid", r);
          }
          Ra(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      no(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : dl.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              Yl(r), Hu(r, o, !0);
              break;
            case "textarea":
              Yl(r), Ku(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Io);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Sl] = r),
            Sp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = La(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < el.length; l++) ce(el[l], e);
                l = r;
                break;
              case "source":
                ce("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (l = r);
                break;
              case "details":
                ce("toggle", e), (l = r);
                break;
              case "input":
                Vu(e, r), (l = Ea(e, r)), ce("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ye({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                Qu(e, r), (l = Na(e, r)), ce("invalid", e);
                break;
              default:
                l = r;
            }
            Ra(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? Zd(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Xd(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && fl(e, s)
                        : typeof s == "number" && fl(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (dl.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && ce("scroll", e)
                          : s != null && Cs(e, o, s, i));
              }
            switch (n) {
              case "input":
                Yl(e), Hu(e, r, !1);
                break;
              case "textarea":
                Yl(e), Ku(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? pr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Be(t), null;
    case 6:
      if (e && t.stateNode != null) Ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Dn(El.current)), Dn(zt.current), ro(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (o = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                no(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  no(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return Be(t), null;
    case 13:
      if (
        (de(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && ot !== null && t.mode & 1 && !(t.flags & 128))
          Af(), Sr(), (t.flags |= 98560), (o = !1);
        else if (((o = ro(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[Ot] = t;
          } else
            Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Be(t), (o = !1);
        } else Nt !== null && (us(Nt), (Nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? ke === 0 && (ke = 3) : iu())),
          t.updateQueue !== null && (t.flags |= 4),
          Be(t),
          null);
    case 4:
      return (
        Er(), ts(e, t), e === null && wl(t.stateNode.containerInfo), Be(t), null
      );
    case 10:
      return bs(t.type._context), Be(t), null;
    case 17:
      return tt(t.type) && To(), Be(t), null;
    case 19:
      if ((de(ve), (o = t.memoizedState), o === null)) return Be(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Qr(o, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Uo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Qr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Se() > kr &&
            ((t.flags |= 128), (r = !0), Qr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Uo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !he)
            )
              return Be(t), null;
          } else
            2 * Se() - o.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Se()),
          (t.sibling = null),
          (n = ve.current),
          ue(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Be(t), null);
    case 22:
    case 23:
      return (
        ou(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? lt & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Kv(e, t) {
  switch ((Us(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && To(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Er(),
        de(et),
        de(Ve),
        Ys(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ks(t), null;
    case 13:
      if (
        (de(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(ve), null;
    case 4:
      return Er(), null;
    case 10:
      return bs(t.type._context), null;
    case 22:
    case 23:
      return ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var io = !1,
  be = !1,
  Yv = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function ns(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var zc = !1;
function Gv(e, t) {
  if (((Ua = Ro), (e = Pf()), Fs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var j;
              f !== n || (l !== 0 && f.nodeType !== 3) || (a = i + l),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (j = f.firstChild) !== null;

            )
              (h = f), (f = j);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === l && (a = i),
                h === o && ++d === r && (s = i),
                (j = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = j;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Aa = { focusedElem: e, selectionRange: n }, Ro = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    k = x.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Et(t.type, w),
                      k,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          we(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (x = zc), (zc = !1), x;
}
function al(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ns(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ii(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ot], delete t[Sl], delete t[ba], delete t[Iv], delete t[Tv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
function os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (os(e, t, n), e = e.sibling; e !== null; ) os(e, t, n), (e = e.sibling);
}
var ze = null,
  Ct = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) Np(e, t, n), (n = n.sibling);
}
function Np(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(Zo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      be || cr(n, t);
    case 6:
      var r = ze,
        l = Ct;
      (ze = null),
        ln(e, t, n),
        (ze = r),
        (Ct = l),
        ze !== null &&
          (Ct
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (Ct
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? na(e.parentNode, n)
              : e.nodeType === 1 && na(e, n),
            vl(e))
          : na(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (l = Ct),
        (ze = n.stateNode.containerInfo),
        (Ct = !0),
        ln(e, t, n),
        (ze = r),
        (Ct = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ns(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !be &&
        (cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          we(n, t, a);
        }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((be = (r = be) || n.memoizedState !== null), ln(e, t, n), (be = r))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function $c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yv()),
      t.forEach(function (r) {
        var l = lg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function jt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ze = a.stateNode), (Ct = !1);
              break e;
            case 3:
              (ze = a.stateNode.containerInfo), (Ct = !0);
              break e;
            case 4:
              (ze = a.stateNode.containerInfo), (Ct = !0);
              break e;
          }
          a = a.return;
        }
        if (ze === null) throw Error(L(160));
        Np(o, i, l), (ze = null), (Ct = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        we(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pp(t, e), (t = t.sibling);
}
function Pp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((jt(t, e), Tt(e), r & 4)) {
        try {
          al(3, e, e.return), ii(3, e);
        } catch (w) {
          we(e, e.return, w);
        }
        try {
          al(5, e, e.return);
        } catch (w) {
          we(e, e.return, w);
        }
      }
      break;
    case 1:
      jt(t, e), Tt(e), r & 512 && n !== null && cr(n, n.return);
      break;
    case 5:
      if (
        (jt(t, e),
        Tt(e),
        r & 512 && n !== null && cr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          fl(l, "");
        } catch (w) {
          we(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Kd(l, o),
              La(a, i);
            var c = La(a, o);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i],
                f = s[i + 1];
              d === "style"
                ? Zd(l, f)
                : d === "dangerouslySetInnerHTML"
                  ? Xd(l, f)
                  : d === "children"
                    ? fl(l, f)
                    : Cs(l, d, f, c);
            }
            switch (a) {
              case "input":
                Ca(l, o);
                break;
              case "textarea":
                Yd(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var j = o.value;
                j != null
                  ? pr(l, !!o.multiple, j, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? pr(l, !!o.multiple, o.defaultValue, !0)
                      : pr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Sl] = o;
          } catch (w) {
            we(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((jt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          we(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (jt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vl(t.containerInfo);
        } catch (w) {
          we(e, e.return, w);
        }
      break;
    case 4:
      jt(t, e), Tt(e);
      break;
    case 13:
      jt(t, e),
        Tt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ru = Se())),
        r & 4 && $c(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((be = (c = be) || d), jt(t, e), (be = c)) : jt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (f = z = d; z !== null; ) {
              switch (((h = z), (j = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  al(4, h, h.return);
                  break;
                case 1:
                  cr(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      we(r, n, w);
                    }
                  }
                  break;
                case 5:
                  cr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ac(f);
                    continue;
                  }
              }
              j !== null ? ((j.return = h), (z = j)) : Ac(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Jd("display", i)));
              } catch (w) {
                we(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (w) {
                we(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      jt(t, e), Tt(e), r & 4 && $c(e);
      break;
    case 21:
      break;
    default:
      jt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (fl(l, ""), (r.flags &= -33));
          var o = Fc(e);
          os(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Fc(e);
          ls(e, a, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (s) {
      we(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xv(e, t, n) {
  (z = e), Rp(e);
}
function Rp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || io;
      if (!i) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || be;
        a = io;
        var c = be;
        if (((io = i), (be = s) && !c))
          for (z = l; z !== null; )
            (i = z),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Bc(l)
                : s !== null
                  ? ((s.return = i), (z = s))
                  : Bc(l);
        for (; o !== null; ) (z = o), Rp(o), (o = o.sibling);
        (z = l), (io = a), (be = c);
      }
      Uc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Uc(e);
  }
}
function Uc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              be || ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !be)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && jc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                jc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && vl(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        be || (t.flags & 512 && rs(t));
      } catch (h) {
        we(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ac(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Bc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ii(4, t);
          } catch (s) {
            we(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              we(t, l, s);
            }
          }
          var o = t.return;
          try {
            rs(t);
          } catch (s) {
            we(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            rs(t);
          } catch (s) {
            we(t, i, s);
          }
      }
    } catch (s) {
      we(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var Jv = Math.ceil,
  Wo = Xt.ReactCurrentDispatcher,
  tu = Xt.ReactCurrentOwner,
  gt = Xt.ReactCurrentBatchConfig,
  q = 0,
  Re = null,
  je = null,
  Fe = 0,
  lt = 0,
  dr = kn(0),
  ke = 0,
  Pl = null,
  bn = 0,
  ai = 0,
  nu = 0,
  sl = null,
  Ze = null,
  ru = 0,
  kr = 1 / 0,
  $t = null,
  bo = !1,
  is = null,
  yn = null,
  ao = !1,
  fn = null,
  Vo = 0,
  ul = 0,
  as = null,
  xo = -1,
  So = 0;
function Ye() {
  return q & 6 ? Se() : xo !== -1 ? xo : (xo = Se());
}
function wn(e) {
  return e.mode & 1
    ? q & 2 && Fe !== 0
      ? Fe & -Fe
      : Ov.transition !== null
        ? (So === 0 && (So = df()), So)
        : ((e = le),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yf(e.type))),
          e)
    : 1;
}
function Rt(e, t, n, r) {
  if (50 < ul) throw ((ul = 0), (as = null), Error(L(185)));
  Tl(e, n, r),
    (!(q & 2) || e !== Re) &&
      (e === Re && (!(q & 2) && (ai |= n), ke === 4 && cn(e, Fe)),
      nt(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((kr = Se() + 500), ri && Nn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  Om(e, t);
  var r = Po(e, e === Re ? Fe : 0);
  if (r === 0)
    n !== null && Xu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xu(n), t === 1))
      e.tag === 0 ? Mv(Wc.bind(null, e)) : Ff(Wc.bind(null, e)),
        Lv(function () {
          !(q & 6) && Nn();
        }),
        (n = null);
    else {
      switch (ff(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = uf;
          break;
        case 16:
          n = No;
          break;
        case 536870912:
          n = cf;
          break;
        default:
          n = No;
      }
      n = zp(n, Lp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lp(e, t) {
  if (((xo = -1), (So = 0), q & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = Po(e, e === Re ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ho(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var o = Ip();
    (Re !== e || Fe !== t) && (($t = null), (kr = Se() + 500), $n(e, t));
    do
      try {
        eg();
        break;
      } catch (a) {
        _p(e, a);
      }
    while (1);
    Ws(),
      (Wo.current = o),
      (q = l),
      je !== null ? (t = 0) : ((Re = null), (Fe = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oa(e)), l !== 0 && ((r = l), (t = ss(e, l)))), t === 1)
    )
      throw ((n = Pl), $n(e, 0), cn(e, r), nt(e, Se()), n);
    if (t === 6) cn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Zv(l) &&
          ((t = Ho(e, r)),
          t === 2 && ((o = Oa(e)), o !== 0 && ((r = o), (t = ss(e, o)))),
          t === 1))
      )
        throw ((n = Pl), $n(e, 0), cn(e, r), nt(e, Se()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Tn(e, Ze, $t);
          break;
        case 3:
          if (
            (cn(e, r), (r & 130023424) === r && ((t = ru + 500 - Se()), 10 < t))
          ) {
            if (Po(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Wa(Tn.bind(null, e, Ze, $t), t);
            break;
          }
          Tn(e, Ze, $t);
          break;
        case 4:
          if ((cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Pt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Jv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wa(Tn.bind(null, e, Ze, $t), r);
            break;
          }
          Tn(e, Ze, $t);
          break;
        case 5:
          Tn(e, Ze, $t);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return nt(e, Se()), e.callbackNode === n ? Lp.bind(null, e) : null;
}
function ss(e, t) {
  var n = sl;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    (e = Ho(e, t)),
    e !== 2 && ((t = Ze), (Ze = n), t !== null && us(t)),
    e
  );
}
function us(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function Zv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!_t(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function cn(e, t) {
  for (
    t &= ~nu,
      t &= ~ai,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Wc(e) {
  if (q & 6) throw Error(L(327));
  yr();
  var t = Po(e, 0);
  if (!(t & 1)) return nt(e, Se()), null;
  var n = Ho(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oa(e);
    r !== 0 && ((t = r), (n = ss(e, r)));
  }
  if (n === 1) throw ((n = Pl), $n(e, 0), cn(e, t), nt(e, Se()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tn(e, Ze, $t),
    nt(e, Se()),
    null
  );
}
function lu(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((kr = Se() + 500), ri && Nn());
  }
}
function Vn(e) {
  fn !== null && fn.tag === 0 && !(q & 6) && yr();
  var t = q;
  q |= 1;
  var n = gt.transition,
    r = le;
  try {
    if (((gt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (gt.transition = n), (q = t), !(q & 6) && Nn();
  }
}
function ou() {
  (lt = dr.current), de(dr);
}
function $n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rv(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((Us(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && To();
          break;
        case 3:
          Er(), de(et), de(Ve), Ys();
          break;
        case 5:
          Ks(r);
          break;
        case 4:
          Er();
          break;
        case 13:
          de(ve);
          break;
        case 19:
          de(ve);
          break;
        case 10:
          bs(r.type._context);
          break;
        case 22:
        case 23:
          ou();
      }
      n = n.return;
    }
  if (
    ((Re = e),
    (je = e = xn(e.current, null)),
    (Fe = lt = t),
    (ke = 0),
    (Pl = null),
    (nu = ai = bn = 0),
    (Ze = sl = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function _p(e, t) {
  do {
    var n = je;
    try {
      if ((Ws(), (go.current = Bo), Ao)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ao = !1;
      }
      if (
        ((Wn = 0),
        (Pe = Ce = ge = null),
        (il = !1),
        (Cl = 0),
        (tu.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (Pl = t), (je = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = Fe),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var j = Lc(i);
          if (j !== null) {
            (j.flags &= -257),
              _c(j, i, a, o, t),
              j.mode & 1 && Rc(o, c, t),
              (t = j),
              (s = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Rc(o, c, t), iu();
              break e;
            }
            s = Error(L(426));
          }
        } else if (he && a.mode & 1) {
          var k = Lc(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              _c(k, i, a, o, t),
              As(Cr(s, a));
            break e;
          }
        }
        (o = s = Cr(s, a)),
          ke !== 4 && (ke = 2),
          sl === null ? (sl = [o]) : sl.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = pp(o, s, t);
              Sc(o, m);
              break e;
            case 1:
              a = s;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (yn === null || !yn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = hp(o, a, t);
                Sc(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Mp(n);
    } catch (R) {
      (t = R), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Ip() {
  var e = Wo.current;
  return (Wo.current = Bo), e === null ? Bo : e;
}
function iu() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Re === null || (!(bn & 268435455) && !(ai & 268435455)) || cn(Re, Fe);
}
function Ho(e, t) {
  var n = q;
  q |= 2;
  var r = Ip();
  (Re !== e || Fe !== t) && (($t = null), $n(e, t));
  do
    try {
      qv();
      break;
    } catch (l) {
      _p(e, l);
    }
  while (1);
  if ((Ws(), (q = n), (Wo.current = r), je !== null)) throw Error(L(261));
  return (Re = null), (Fe = 0), ke;
}
function qv() {
  for (; je !== null; ) Tp(je);
}
function eg() {
  for (; je !== null && !km(); ) Tp(je);
}
function Tp(e) {
  var t = Dp(e.alternate, e, lt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mp(e) : (je = t),
    (tu.current = null);
}
function Mp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Kv(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (je = null);
        return;
      }
    } else if (((n = Qv(n, t, lt)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Tn(e, t, n) {
  var r = le,
    l = gt.transition;
  try {
    (gt.transition = null), (le = 1), tg(e, t, n, r);
  } finally {
    (gt.transition = l), (le = r);
  }
  return null;
}
function tg(e, t, n, r) {
  do yr();
  while (fn !== null);
  if (q & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Dm(e, o),
    e === Re && ((je = Re = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ao ||
      ((ao = !0),
      zp(No, function () {
        return yr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = gt.transition), (gt.transition = null);
    var i = le;
    le = 1;
    var a = q;
    (q |= 4),
      (tu.current = null),
      Gv(e, n),
      Pp(n, e),
      Sv(Aa),
      (Ro = !!Ua),
      (Aa = Ua = null),
      (e.current = n),
      Xv(n),
      Nm(),
      (q = a),
      (le = i),
      (gt.transition = o);
  } else e.current = n;
  if (
    (ao && ((ao = !1), (fn = e), (Vo = l)),
    (o = e.pendingLanes),
    o === 0 && (yn = null),
    Lm(n.stateNode),
    nt(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (bo) throw ((bo = !1), (e = is), (is = null), e);
  return (
    Vo & 1 && e.tag !== 0 && yr(),
    (o = e.pendingLanes),
    o & 1 ? (e === as ? ul++ : ((ul = 0), (as = e))) : (ul = 0),
    Nn(),
    null
  );
}
function yr() {
  if (fn !== null) {
    var e = ff(Vo),
      t = gt.transition,
      n = le;
    try {
      if (((gt.transition = null), (le = 16 > e ? 16 : e), fn === null))
        var r = !1;
      else {
        if (((e = fn), (fn = null), (Vo = 0), q & 6)) throw Error(L(331));
        var l = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (z = c; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (z = f);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var h = d.sibling,
                        j = d.return;
                      if ((Cp(d), d === c)) {
                        z = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = j), (z = h);
                        break;
                      }
                      z = j;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    al(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (z = m);
                break e;
              }
              z = o.return;
            }
        }
        var p = e.current;
        for (z = p; z !== null; ) {
          i = z;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (z = v);
          else
            e: for (i = p; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(9, a);
                  }
                } catch (R) {
                  we(a, a.return, R);
                }
              if (a === i) {
                z = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (z = E);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((q = l), Nn(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(Zo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (gt.transition = t);
    }
  }
  return !1;
}
function bc(e, t, n) {
  (t = Cr(n, t)),
    (t = pp(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = Ye()),
    e !== null && (Tl(e, 1, t), nt(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) bc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = Cr(n, e)),
            (e = hp(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = Ye()),
            t !== null && (Tl(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ng(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Re === e &&
      (Fe & n) === n &&
      (ke === 4 || (ke === 3 && (Fe & 130023424) === Fe && 500 > Se() - ru)
        ? $n(e, 0)
        : (nu |= n)),
    nt(e, t);
}
function Op(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Jl), (Jl <<= 1), !(Jl & 130023424) && (Jl = 4194304))
      : (t = 1));
  var n = Ye();
  (e = Kt(e, t)), e !== null && (Tl(e, t, n), nt(e, n));
}
function rg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Op(e, n);
}
function lg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Op(e, n);
}
var Dp;
Dp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), Hv(e, t, n);
      qe = !!(e.flags & 131072);
    }
  else (qe = !1), he && t.flags & 1048576 && $f(t, Do, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      wo(e, t), (e = t.pendingProps);
      var l = xr(t, Ve.current);
      gr(t, n), (l = Xs(null, t, r, e, l, n));
      var o = Js();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((o = !0), Mo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Hs(t),
            (l.updater = li),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ga(t, r, e, n),
            (t = Za(null, t, r, !0, o, n)))
          : ((t.tag = 0), he && o && $s(t), Ke(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (wo(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ig(r)),
          (e = Et(r, e)),
          l)
        ) {
          case 0:
            t = Ja(null, t, r, e, n);
            break e;
          case 1:
            t = Mc(null, t, r, e, n);
            break e;
          case 11:
            t = Ic(null, t, r, e, n);
            break e;
          case 14:
            t = Tc(null, t, r, Et(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Et(r, l)),
        Ja(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Et(r, l)),
        Mc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((yp(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Wf(e, t),
          $o(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Cr(Error(L(423)), t)), (t = Oc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Cr(Error(L(424)), t)), (t = Oc(e, t, r, n, l));
            break e;
          } else
            for (
              ot = vn(t.stateNode.containerInfo.firstChild),
                it = t,
                he = !0,
                Nt = null,
                n = Qf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sr(), r === l)) {
            t = Yt(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kf(t),
        e === null && Qa(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ba(r, l) ? (i = null) : o !== null && Ba(r, o) && (t.flags |= 32),
        gp(e, t),
        Ke(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Qa(t), null;
    case 13:
      return wp(e, t, n);
    case 4:
      return (
        Qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jr(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Et(r, l)),
        Ic(e, t, r, l, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ue(zo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (_t(o.value, i)) {
            if (o.children === l.children && !et.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = bt(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ka(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ka(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ke(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        gr(t, n),
        (l = yt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Et(r, t.pendingProps)),
        (l = Et(r.type, l)),
        Tc(e, t, r, l, n)
      );
    case 15:
      return mp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Et(r, l)),
        wo(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), Mo(t)) : (e = !1),
        gr(t, n),
        Vf(t, r, l),
        Ga(t, r, l, n),
        Za(null, t, r, !0, e, n)
      );
    case 19:
      return xp(e, t, n);
    case 22:
      return vp(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function zp(e, t) {
  return sf(e, t);
}
function og(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function vt(e, t, n, r) {
  return new og(e, t, n, r);
}
function au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ig(e) {
  if (typeof e == "function") return au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ns)) return 11;
    if (e === Ps) return 14;
  }
  return 2;
}
function xn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function jo(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) au(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case tr:
        return Un(n.children, l, o, t);
      case ks:
        (i = 8), (l |= 8);
        break;
      case wa:
        return (
          (e = vt(12, n, t, l | 2)), (e.elementType = wa), (e.lanes = o), e
        );
      case xa:
        return (e = vt(13, n, t, l)), (e.elementType = xa), (e.lanes = o), e;
      case Sa:
        return (e = vt(19, n, t, l)), (e.elementType = Sa), (e.lanes = o), e;
      case Vd:
        return si(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wd:
              i = 10;
              break e;
            case bd:
              i = 9;
              break e;
            case Ns:
              i = 11;
              break e;
            case Ps:
              i = 14;
              break e;
            case an:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Un(e, t, n, r) {
  return (e = vt(7, e, r, t)), (e.lanes = n), e;
}
function si(e, t, n, r) {
  return (
    (e = vt(22, e, r, t)),
    (e.elementType = Vd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ca(e, t, n) {
  return (e = vt(6, e, null, t)), (e.lanes = n), e;
}
function da(e, t, n) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ag(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hi(0)),
    (this.expirationTimes = Hi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function su(e, t, n, r, l, o, i, a, s) {
  return (
    (e = new ag(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = vt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hs(o),
    e
  );
}
function sg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: er,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fp(e) {
  if (!e) return jn;
  e = e._reactInternals;
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return zf(e, n, t);
  }
  return t;
}
function $p(e, t, n, r, l, o, i, a, s) {
  return (
    (e = su(n, r, !0, e, l, o, i, a, s)),
    (e.context = Fp(null)),
    (n = e.current),
    (r = Ye()),
    (l = wn(n)),
    (o = bt(r, l)),
    (o.callback = t ?? null),
    gn(n, o, l),
    (e.current.lanes = l),
    Tl(e, l, r),
    nt(e, r),
    e
  );
}
function ui(e, t, n, r) {
  var l = t.current,
    o = Ye(),
    i = wn(l);
  return (
    (n = Fp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(l, t, i)),
    e !== null && (Rt(e, l, i, o), vo(e, l, i)),
    i
  );
}
function Qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uu(e, t) {
  Vc(e, t), (e = e.alternate) && Vc(e, t);
}
function ug() {
  return null;
}
var Up =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cu(e) {
  this._internalRoot = e;
}
ci.prototype.render = cu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  ui(e, t, null, null);
};
ci.prototype.unmount = cu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vn(function () {
      ui(null, e, null, null);
    }),
      (t[Qt] = null);
  }
};
function ci(e) {
  this._internalRoot = e;
}
ci.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
    un.splice(n, 0, e), n === 0 && gf(e);
  }
};
function du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function di(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hc() {}
function cg(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Qo(i);
        o.call(c);
      };
    }
    var i = $p(t, r, e, 0, null, !1, !1, "", Hc);
    return (
      (e._reactRootContainer = i),
      (e[Qt] = i.current),
      wl(e.nodeType === 8 ? e.parentNode : e),
      Vn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Qo(s);
      a.call(c);
    };
  }
  var s = su(e, 0, !1, null, null, !1, !1, "", Hc);
  return (
    (e._reactRootContainer = s),
    (e[Qt] = s.current),
    wl(e.nodeType === 8 ? e.parentNode : e),
    Vn(function () {
      ui(t, s, n, r);
    }),
    s
  );
}
function fi(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = Qo(i);
        a.call(s);
      };
    }
    ui(t, i, e, l);
  } else i = cg(n, t, e, l, r);
  return Qo(i);
}
pf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qr(t.pendingLanes);
        n !== 0 &&
          (_s(t, n | 1), nt(t, Se()), !(q & 6) && ((kr = Se() + 500), Nn()));
      }
      break;
    case 13:
      Vn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var l = Ye();
          Rt(r, e, 1, l);
        }
      }),
        uu(e, 1);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Ye();
      Rt(t, e, 134217728, n);
    }
    uu(e, 134217728);
  }
};
hf = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Ye();
      Rt(n, e, t, r);
    }
    uu(e, t);
  }
};
mf = function () {
  return le;
};
vf = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
Ia = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ca(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ni(r);
            if (!l) throw Error(L(90));
            Qd(r), Ca(r, l);
          }
        }
      }
      break;
    case "textarea":
      Yd(e, n);
      break;
    case "select":
      (t = n.value), t != null && pr(e, !!n.multiple, t, !1);
  }
};
tf = lu;
nf = Vn;
var dg = { usingClientEntryPoint: !1, Events: [Ol, or, ni, qd, ef, lu] },
  Kr = {
    findFiberByHostInstance: Mn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  fg = {
    bundleType: Kr.bundleType,
    version: Kr.version,
    rendererPackageName: Kr.rendererPackageName,
    rendererConfig: Kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = of(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Kr.findFiberByHostInstance || ug,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!so.isDisabled && so.supportsFiber)
    try {
      (Zo = so.inject(fg)), (Dt = so);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dg;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!du(t)) throw Error(L(200));
  return sg(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!du(e)) throw Error(L(299));
  var n = !1,
    r = "",
    l = Up;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = su(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qt] = t.current),
    wl(e.nodeType === 8 ? e.parentNode : e),
    new cu(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = of(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return Vn(e);
};
st.hydrate = function (e, t, n) {
  if (!di(t)) throw Error(L(200));
  return fi(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!du(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Up;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = $p(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Qt] = t.current),
    wl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ci(t);
};
st.render = function (e, t, n) {
  if (!di(t)) throw Error(L(200));
  return fi(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!di(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Vn(function () {
        fi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qt] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = lu;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!di(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return fi(e, t, n, !1, r);
};
st.version = "18.2.0-next-9e3b772b8-20220608";
function Ap() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), (Fd.exports = st);
var pi = Fd.exports;
const Bp = Nd(pi),
  pg = kd({ __proto__: null, default: Bp }, [pi]);
var Qc = pi;
(ga.createRoot = Qc.createRoot), (ga.hydrateRoot = Qc.hydrateRoot);
var Wp = { exports: {} },
  bp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = y;
function hg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mg = typeof Object.is == "function" ? Object.is : hg,
  vg = Nr.useState,
  gg = Nr.useEffect,
  yg = Nr.useLayoutEffect,
  wg = Nr.useDebugValue;
function xg(e, t) {
  var n = t(),
    r = vg({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    yg(
      function () {
        (l.value = n), (l.getSnapshot = t), fa(l) && o({ inst: l });
      },
      [e, n, t],
    ),
    gg(
      function () {
        return (
          fa(l) && o({ inst: l }),
          e(function () {
            fa(l) && o({ inst: l });
          })
        );
      },
      [e],
    ),
    wg(n),
    n
  );
}
function fa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mg(e, n);
  } catch {
    return !0;
  }
}
function Sg(e, t) {
  return t();
}
var jg =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Sg
    : xg;
bp.useSyncExternalStore =
  Nr.useSyncExternalStore !== void 0 ? Nr.useSyncExternalStore : jg;
Wp.exports = bp;
var Eg = Wp.exports,
  Vp = { exports: {} },
  Hp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hi = y,
  Cg = Eg;
function kg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ng = typeof Object.is == "function" ? Object.is : kg,
  Pg = Cg.useSyncExternalStore,
  Rg = hi.useRef,
  Lg = hi.useEffect,
  _g = hi.useMemo,
  Ig = hi.useDebugValue;
Hp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = Rg(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = _g(
    function () {
      function s(j) {
        if (!c) {
          if (((c = !0), (d = j), (j = r(j)), l !== void 0 && i.hasValue)) {
            var x = i.value;
            if (l(x, j)) return (f = x);
          }
          return (f = j);
        }
        if (((x = f), Ng(d, j))) return x;
        var w = r(j);
        return l !== void 0 && l(x, w) ? x : ((d = j), (f = w));
      }
      var c = !1,
        d,
        f,
        h = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        h === null
          ? void 0
          : function () {
              return s(h());
            },
      ];
    },
    [t, n, r, l],
  );
  var a = Pg(e, o[0], o[1]);
  return (
    Lg(
      function () {
        (i.hasValue = !0), (i.value = a);
      },
      [a],
    ),
    Ig(a),
    a
  );
};
Vp.exports = Hp;
var Tg = Vp.exports;
function Mg(e) {
  e();
}
let Qp = Mg;
const Og = (e) => (Qp = e),
  Dg = () => Qp,
  Kc = Symbol.for("react-redux-context"),
  Yc = typeof globalThis < "u" ? globalThis : {};
function zg() {
  var e;
  if (!y.createContext) return {};
  const t = (e = Yc[Kc]) != null ? e : (Yc[Kc] = new Map());
  let n = t.get(y.createContext);
  return n || ((n = y.createContext(null)), t.set(y.createContext, n)), n;
}
const En = zg();
function fu(e = En) {
  return function () {
    return y.useContext(e);
  };
}
const Kp = fu(),
  Fg = () => {
    throw new Error("uSES not initialized!");
  };
let Yp = Fg;
const $g = (e) => {
    Yp = e;
  },
  Ug = (e, t) => e === t;
function Ag(e = En) {
  const t = e === En ? Kp : fu(e);
  return function (r, l = {}) {
    const {
        equalityFn: o = Ug,
        stabilityCheck: i = void 0,
        noopCheck: a = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: s,
        subscription: c,
        getServerState: d,
        stabilityCheck: f,
        noopCheck: h,
      } = t();
    y.useRef(!0);
    const j = y.useCallback(
        {
          [r.name](w) {
            return r(w);
          },
        }[r.name],
        [r, f, i],
      ),
      x = Yp(c.addNestedSub, s.getState, d || s.getState, j, o);
    return y.useDebugValue(x), x;
  };
}
const Lt = Ag();
var Gp = { exports: {} },
  oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Le = typeof Symbol == "function" && Symbol.for,
  pu = Le ? Symbol.for("react.element") : 60103,
  hu = Le ? Symbol.for("react.portal") : 60106,
  mi = Le ? Symbol.for("react.fragment") : 60107,
  vi = Le ? Symbol.for("react.strict_mode") : 60108,
  gi = Le ? Symbol.for("react.profiler") : 60114,
  yi = Le ? Symbol.for("react.provider") : 60109,
  wi = Le ? Symbol.for("react.context") : 60110,
  mu = Le ? Symbol.for("react.async_mode") : 60111,
  xi = Le ? Symbol.for("react.concurrent_mode") : 60111,
  Si = Le ? Symbol.for("react.forward_ref") : 60112,
  ji = Le ? Symbol.for("react.suspense") : 60113,
  Bg = Le ? Symbol.for("react.suspense_list") : 60120,
  Ei = Le ? Symbol.for("react.memo") : 60115,
  Ci = Le ? Symbol.for("react.lazy") : 60116,
  Wg = Le ? Symbol.for("react.block") : 60121,
  bg = Le ? Symbol.for("react.fundamental") : 60117,
  Vg = Le ? Symbol.for("react.responder") : 60118,
  Hg = Le ? Symbol.for("react.scope") : 60119;
function ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case pu:
        switch (((e = e.type), e)) {
          case mu:
          case xi:
          case mi:
          case gi:
          case vi:
          case ji:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wi:
              case Si:
              case Ci:
              case Ei:
              case yi:
                return e;
              default:
                return t;
            }
        }
      case hu:
        return t;
    }
  }
}
function Xp(e) {
  return ct(e) === xi;
}
oe.AsyncMode = mu;
oe.ConcurrentMode = xi;
oe.ContextConsumer = wi;
oe.ContextProvider = yi;
oe.Element = pu;
oe.ForwardRef = Si;
oe.Fragment = mi;
oe.Lazy = Ci;
oe.Memo = Ei;
oe.Portal = hu;
oe.Profiler = gi;
oe.StrictMode = vi;
oe.Suspense = ji;
oe.isAsyncMode = function (e) {
  return Xp(e) || ct(e) === mu;
};
oe.isConcurrentMode = Xp;
oe.isContextConsumer = function (e) {
  return ct(e) === wi;
};
oe.isContextProvider = function (e) {
  return ct(e) === yi;
};
oe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === pu;
};
oe.isForwardRef = function (e) {
  return ct(e) === Si;
};
oe.isFragment = function (e) {
  return ct(e) === mi;
};
oe.isLazy = function (e) {
  return ct(e) === Ci;
};
oe.isMemo = function (e) {
  return ct(e) === Ei;
};
oe.isPortal = function (e) {
  return ct(e) === hu;
};
oe.isProfiler = function (e) {
  return ct(e) === gi;
};
oe.isStrictMode = function (e) {
  return ct(e) === vi;
};
oe.isSuspense = function (e) {
  return ct(e) === ji;
};
oe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === mi ||
    e === xi ||
    e === gi ||
    e === vi ||
    e === ji ||
    e === Bg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ci ||
        e.$$typeof === Ei ||
        e.$$typeof === yi ||
        e.$$typeof === wi ||
        e.$$typeof === Si ||
        e.$$typeof === bg ||
        e.$$typeof === Vg ||
        e.$$typeof === Hg ||
        e.$$typeof === Wg))
  );
};
oe.typeOf = ct;
Gp.exports = oe;
var Qg = Gp.exports,
  Jp = Qg,
  Kg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Yg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Zp = {};
Zp[Jp.ForwardRef] = Kg;
Zp[Jp.Memo] = Yg;
var ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vu = Symbol.for("react.element"),
  gu = Symbol.for("react.portal"),
  ki = Symbol.for("react.fragment"),
  Ni = Symbol.for("react.strict_mode"),
  Pi = Symbol.for("react.profiler"),
  Ri = Symbol.for("react.provider"),
  Li = Symbol.for("react.context"),
  Gg = Symbol.for("react.server_context"),
  _i = Symbol.for("react.forward_ref"),
  Ii = Symbol.for("react.suspense"),
  Ti = Symbol.for("react.suspense_list"),
  Mi = Symbol.for("react.memo"),
  Oi = Symbol.for("react.lazy"),
  Xg = Symbol.for("react.offscreen"),
  qp;
qp = Symbol.for("react.module.reference");
function xt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vu:
        switch (((e = e.type), e)) {
          case ki:
          case Pi:
          case Ni:
          case Ii:
          case Ti:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Gg:
              case Li:
              case _i:
              case Oi:
              case Mi:
              case Ri:
                return e;
              default:
                return t;
            }
        }
      case gu:
        return t;
    }
  }
}
ie.ContextConsumer = Li;
ie.ContextProvider = Ri;
ie.Element = vu;
ie.ForwardRef = _i;
ie.Fragment = ki;
ie.Lazy = Oi;
ie.Memo = Mi;
ie.Portal = gu;
ie.Profiler = Pi;
ie.StrictMode = Ni;
ie.Suspense = Ii;
ie.SuspenseList = Ti;
ie.isAsyncMode = function () {
  return !1;
};
ie.isConcurrentMode = function () {
  return !1;
};
ie.isContextConsumer = function (e) {
  return xt(e) === Li;
};
ie.isContextProvider = function (e) {
  return xt(e) === Ri;
};
ie.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === vu;
};
ie.isForwardRef = function (e) {
  return xt(e) === _i;
};
ie.isFragment = function (e) {
  return xt(e) === ki;
};
ie.isLazy = function (e) {
  return xt(e) === Oi;
};
ie.isMemo = function (e) {
  return xt(e) === Mi;
};
ie.isPortal = function (e) {
  return xt(e) === gu;
};
ie.isProfiler = function (e) {
  return xt(e) === Pi;
};
ie.isStrictMode = function (e) {
  return xt(e) === Ni;
};
ie.isSuspense = function (e) {
  return xt(e) === Ii;
};
ie.isSuspenseList = function (e) {
  return xt(e) === Ti;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ki ||
    e === Pi ||
    e === Ni ||
    e === Ii ||
    e === Ti ||
    e === Xg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Oi ||
        e.$$typeof === Mi ||
        e.$$typeof === Ri ||
        e.$$typeof === Li ||
        e.$$typeof === _i ||
        e.$$typeof === qp ||
        e.getModuleId !== void 0))
  );
};
ie.typeOf = xt;
function Jg() {
  const e = Dg();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Gc = { notify() {}, get: () => [] };
function Zg(e, t) {
  let n,
    r = Gc,
    l = 0,
    o = !1;
  function i(w) {
    d();
    const k = r.subscribe(w);
    let m = !1;
    return () => {
      m || ((m = !0), k(), f());
    };
  }
  function a() {
    r.notify();
  }
  function s() {
    x.onStateChange && x.onStateChange();
  }
  function c() {
    return o;
  }
  function d() {
    l++, n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Jg()));
  }
  function f() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Gc));
  }
  function h() {
    o || ((o = !0), d());
  }
  function j() {
    o && ((o = !1), f());
  }
  const x = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: h,
    tryUnsubscribe: j,
    getListeners: () => r,
  };
  return x;
}
const qg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ey = qg ? y.useLayoutEffect : y.useEffect;
function ty({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: o = "once",
}) {
  const i = y.useMemo(() => {
      const c = Zg(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: o,
      };
    }, [e, r, l, o]),
    a = y.useMemo(() => e.getState(), [e]);
  ey(() => {
    const { subscription: c } = i;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      a !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [i, a]);
  const s = t || En;
  return y.createElement(s.Provider, { value: i }, n);
}
function eh(e = En) {
  const t = e === En ? Kp : fu(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const ny = eh();
function ry(e = En) {
  const t = e === En ? ny : eh(e);
  return function () {
    return t().dispatch;
  };
}
const St = ry();
$g(Tg.useSyncExternalStoreWithSelector);
Og(pi.unstable_batchedUpdates);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
var xe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xe || (xe = {}));
const Xc = "popstate";
function ly(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return Rl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Hn(l);
  }
  return iy(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Pr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function oy() {
  return Math.random().toString(36).substr(2, 8);
}
function Jc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    me(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Jt(t) : t,
      { state: n, key: (t && t.key) || r || oy() },
    )
  );
}
function Hn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Jt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function iy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = xe.Pop,
    s = null,
    c = d();
  c == null && ((c = 0), i.replaceState(me({}, i.state, { idx: c }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = xe.Pop;
    let k = d(),
      m = k == null ? null : k - c;
    (c = k), s && s({ action: a, location: w.location, delta: m });
  }
  function h(k, m) {
    a = xe.Push;
    let p = Rl(w.location, k, m);
    n && n(p, k), (c = d() + 1);
    let v = Jc(p, c),
      E = w.createHref(p);
    try {
      i.pushState(v, "", E);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      l.location.assign(E);
    }
    o && s && s({ action: a, location: w.location, delta: 1 });
  }
  function j(k, m) {
    a = xe.Replace;
    let p = Rl(w.location, k, m);
    n && n(p, k), (c = d());
    let v = Jc(p, c),
      E = w.createHref(p);
    i.replaceState(v, "", E),
      o && s && s({ action: a, location: w.location, delta: 0 });
  }
  function x(k) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      p = typeof k == "string" ? k : Hn(k);
    return (
      (p = p.replace(/ $/, "%20")),
      G(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(k) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Xc, f),
        (s = k),
        () => {
          l.removeEventListener(Xc, f), (s = null);
        }
      );
    },
    createHref(k) {
      return t(l, k);
    },
    createURL: x,
    encodeLocation(k) {
      let m = x(k);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: j,
    go(k) {
      return i.go(k);
    },
  };
  return w;
}
var pe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(pe || (pe = {}));
const ay = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function sy(e) {
  return e.index === !0;
}
function cs(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (G(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        G(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        sy(l))
      ) {
        let s = me({}, l, t(l), { id: a });
        return (r[a] = s), s;
      } else {
        let s = me({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = s), l.children && (s.children = cs(l.children, t, i, r)), s
        );
      }
    })
  );
}
function fr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Jt(t) : t,
    l = Gt(r.pathname || "/", n);
  if (l == null) return null;
  let o = th(e);
  cy(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let s = Sy(l);
    i = wy(o[a], s);
  }
  return i;
}
function uy(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function th(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = Vt([r, s.relativePath]),
      d = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      th(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: gy(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let s of nh(o.path)) l(o, i, s);
    }),
    t
  );
}
function nh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = nh(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function cy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const dy = /^:[\w-]+$/,
  fy = 3,
  py = 2,
  hy = 1,
  my = 10,
  vy = -2,
  Zc = (e) => e === "*";
function gy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Zc) && (r += vy),
    t && (r += py),
    n
      .filter((l) => !Zc(l))
      .reduce((l, o) => l + (dy.test(o) ? fy : o === "" ? hy : my), r)
  );
}
function yy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      s = i === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      d = ds(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        c,
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = a.route;
    o.push({
      params: r,
      pathname: Vt([l, d.pathname]),
      pathnameBase: Cy(Vt([l, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (l = Vt([l, d.pathnameBase]));
  }
  return o;
}
function ds(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: h, isOptional: j } = d;
      if (h === "*") {
        let w = a[f] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[f];
      return (
        j && !x ? (c[h] = void 0) : (c[h] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function xy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Pr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Sy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Pr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Gt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function jy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Jt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Ey(n, t)) : t,
    search: ky(r),
    hash: Ny(l),
  };
}
function Ey(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function rh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function yu(e, t) {
  let n = rh(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function wu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Jt(e))
    : ((l = me({}, e)),
      G(
        !l.pathname || !l.pathname.includes("?"),
        pa("?", "pathname", "search", l),
      ),
      G(
        !l.pathname || !l.pathname.includes("#"),
        pa("#", "pathname", "hash", l),
      ),
      G(!l.search || !l.search.includes("#"), pa("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      l.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let s = jy(l, a),
    c = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (c || d) && (s.pathname += "/"), s;
}
const Vt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Cy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ky = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Ny = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Su(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const lh = ["post", "put", "patch", "delete"],
  Py = new Set(lh),
  Ry = ["get", ...lh],
  Ly = new Set(Ry),
  _y = new Set([301, 302, 303, 307, 308]),
  Iy = new Set([307, 308]),
  ha = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ty = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Yr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ju = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  My = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  oh = "remix-router-transitions";
function Oy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  G(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    l = (C) => ({ hasErrorBoundary: S(C) });
  } else l = My;
  let o = {},
    i = cs(e.routes, l, void 0, o),
    a,
    s = e.basename || "/",
    c = e.unstable_dataStrategy || $y,
    d = me(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    f = null,
    h = new Set(),
    j = null,
    x = null,
    w = null,
    k = e.hydrationData != null,
    m = fr(i, e.history.location, s),
    p = null;
  if (m == null) {
    let S = ft(404, { pathname: e.history.location.pathname }),
      { matches: C, route: N } = sd(i);
    (m = C), (p = { [N.id]: S });
  }
  let v,
    E = m.some((S) => S.route.lazy),
    R = m.some((S) => S.route.loader);
  if (E) v = !1;
  else if (!R) v = !0;
  else if (d.v7_partialHydration) {
    let S = e.hydrationData ? e.hydrationData.loaderData : null,
      C = e.hydrationData ? e.hydrationData.errors : null,
      N = (I) =>
        I.route.loader
          ? typeof I.route.loader == "function" && I.route.loader.hydrate === !0
            ? !1
            : (S && S[I.route.id] !== void 0) || (C && C[I.route.id] !== void 0)
          : !0;
    if (C) {
      let I = m.findIndex((F) => C[F.route.id] !== void 0);
      v = m.slice(0, I + 1).every(N);
    } else v = m.every(N);
  } else v = e.hydrationData != null;
  let T,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: m,
      initialized: v,
      navigation: ha,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = xe.Pop,
    D = !1,
    M,
    b = !1,
    ne = new Map(),
    J = null,
    ae = !1,
    re = !1,
    se = [],
    K = [],
    P = new Map(),
    B = 0,
    W = -1,
    ee = new Map(),
    te = new Set(),
    He = new Map(),
    _e = new Map(),
    Ie = new Set(),
    Ee = new Map(),
    Ue = new Map(),
    Ln = !1;
  function Mr() {
    if (
      ((f = e.history.listen((S) => {
        let { action: C, location: N, delta: I } = S;
        if (Ln) {
          Ln = !1;
          return;
        }
        Pr(
          Ue.size === 0 || I != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let F = Ou({
          currentLocation: g.location,
          nextLocation: N,
          historyAction: C,
        });
        if (F && I != null) {
          (Ln = !0),
            e.history.go(I * -1),
            Wl(F, {
              state: "blocked",
              location: N,
              proceed() {
                Wl(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  e.history.go(I);
              },
              reset() {
                let Q = new Map(g.blockers);
                Q.set(F, Yr), Te({ blockers: Q });
              },
            });
          return;
        }
        return rt(C, N);
      })),
      n)
    ) {
      Xy(t, ne);
      let S = () => Jy(t, ne);
      t.addEventListener("pagehide", S),
        (J = () => t.removeEventListener("pagehide", S));
    }
    return g.initialized || rt(xe.Pop, g.location, { initialHydration: !0 }), T;
  }
  function Or() {
    f && f(),
      J && J(),
      h.clear(),
      M && M.abort(),
      g.fetchers.forEach((S, C) => Bl(C)),
      g.blockers.forEach((S, C) => Mu(C));
  }
  function Dr(S) {
    return h.add(S), () => h.delete(S);
  }
  function Te(S, C) {
    C === void 0 && (C = {}), (g = me({}, g, S));
    let N = [],
      I = [];
    d.v7_fetcherPersist &&
      g.fetchers.forEach((F, Q) => {
        F.state === "idle" && (Ie.has(Q) ? I.push(Q) : N.push(Q));
      }),
      [...h].forEach((F) =>
        F(g, {
          deletedFetchers: I,
          unstable_viewTransitionOpts: C.viewTransitionOpts,
          unstable_flushSync: C.flushSync === !0,
        }),
      ),
      d.v7_fetcherPersist &&
        (N.forEach((F) => g.fetchers.delete(F)), I.forEach((F) => Bl(F)));
  }
  function U(S, C, N) {
    var I, F;
    let { flushSync: Q } = N === void 0 ? {} : N,
      A =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        kt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((I = S.state) == null ? void 0 : I._isRedirect) !== !0,
      $;
    C.actionData
      ? Object.keys(C.actionData).length > 0
        ? ($ = C.actionData)
        : ($ = null)
      : A
        ? ($ = g.actionData)
        : ($ = null);
    let Y = C.loaderData
        ? id(g.loaderData, C.loaderData, C.matches || [], C.errors)
        : g.loaderData,
      H = g.blockers;
    H.size > 0 && ((H = new Map(H)), H.forEach((V, fe) => H.set(fe, Yr)));
    let Me =
      D === !0 ||
      (g.navigation.formMethod != null &&
        kt(g.navigation.formMethod) &&
        ((F = S.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      ae ||
        _ === xe.Pop ||
        (_ === xe.Push
          ? e.history.push(S, S.state)
          : _ === xe.Replace && e.history.replace(S, S.state));
    let Oe;
    if (_ === xe.Pop) {
      let V = ne.get(g.location.pathname);
      V && V.has(S.pathname)
        ? (Oe = { currentLocation: g.location, nextLocation: S })
        : ne.has(S.pathname) &&
          (Oe = { currentLocation: S, nextLocation: g.location });
    } else if (b) {
      let V = ne.get(g.location.pathname);
      V
        ? V.add(S.pathname)
        : ((V = new Set([S.pathname])), ne.set(g.location.pathname, V)),
        (Oe = { currentLocation: g.location, nextLocation: S });
    }
    Te(
      me({}, C, {
        actionData: $,
        loaderData: Y,
        historyAction: _,
        location: S,
        initialized: !0,
        navigation: ha,
        revalidation: "idle",
        restoreScrollPosition: zu(S, C.matches || g.matches),
        preventScrollReset: Me,
        blockers: H,
      }),
      { viewTransitionOpts: Oe, flushSync: Q === !0 },
    ),
      (_ = xe.Pop),
      (D = !1),
      (b = !1),
      (ae = !1),
      (re = !1),
      (se = []),
      (K = []);
  }
  async function O(S, C) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let N = fs(
        g.location,
        g.matches,
        s,
        d.v7_prependBasename,
        S,
        d.v7_relativeSplatPath,
        C == null ? void 0 : C.fromRouteId,
        C == null ? void 0 : C.relative,
      ),
      {
        path: I,
        submission: F,
        error: Q,
      } = qc(d.v7_normalizeFormMethod, !1, N, C),
      A = g.location,
      $ = Rl(g.location, I, C && C.state);
    $ = me({}, $, e.history.encodeLocation($));
    let Y = C && C.replace != null ? C.replace : void 0,
      H = xe.Push;
    Y === !0
      ? (H = xe.Replace)
      : Y === !1 ||
        (F != null &&
          kt(F.formMethod) &&
          F.formAction === g.location.pathname + g.location.search &&
          (H = xe.Replace));
    let Me =
        C && "preventScrollReset" in C ? C.preventScrollReset === !0 : void 0,
      Oe = (C && C.unstable_flushSync) === !0,
      V = Ou({ currentLocation: A, nextLocation: $, historyAction: H });
    if (V) {
      Wl(V, {
        state: "blocked",
        location: $,
        proceed() {
          Wl(V, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: $,
          }),
            O(S, C);
        },
        reset() {
          let fe = new Map(g.blockers);
          fe.set(V, Yr), Te({ blockers: fe });
        },
      });
      return;
    }
    return await rt(H, $, {
      submission: F,
      pendingError: Q,
      preventScrollReset: Me,
      replace: C && C.replace,
      enableViewTransition: C && C.unstable_viewTransition,
      flushSync: Oe,
    });
  }
  function Ft() {
    if (
      ($i(),
      Te({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        rt(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      rt(_ || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function rt(S, C, N) {
    M && M.abort(),
      (M = null),
      (_ = S),
      (ae = (N && N.startUninterruptedRevalidation) === !0),
      Uh(g.location, g.matches),
      (D = (N && N.preventScrollReset) === !0),
      (b = (N && N.enableViewTransition) === !0);
    let I = a || i,
      F = N && N.overrideNavigation,
      Q = fr(I, C, s),
      A = (N && N.flushSync) === !0;
    if (!Q) {
      let V = ft(404, { pathname: C.pathname }),
        { matches: fe, route: Ne } = sd(I);
      Ui(),
        U(
          C,
          { matches: fe, loaderData: {}, errors: { [Ne.id]: V } },
          { flushSync: A },
        );
      return;
    }
    if (
      g.initialized &&
      !re &&
      Vy(g.location, C) &&
      !(N && N.submission && kt(N.submission.formMethod))
    ) {
      U(C, { matches: Q }, { flushSync: A });
      return;
    }
    M = new AbortController();
    let $ = qn(e.history, C, M.signal, N && N.submission),
      Y;
    if (N && N.pendingError)
      Y = [cl(Q).route.id, { type: pe.error, error: N.pendingError }];
    else if (N && N.submission && kt(N.submission.formMethod)) {
      let V = await qt($, C, N.submission, Q, {
        replace: N.replace,
        flushSync: A,
      });
      if (V.shortCircuited) return;
      (Y = V.pendingActionResult),
        (F = ma(C, N.submission)),
        (A = !1),
        ($ = qn(e.history, $.url, $.signal));
    }
    let {
      shortCircuited: H,
      loaderData: Me,
      errors: Oe,
    } = await _n(
      $,
      C,
      Q,
      F,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      A,
      Y,
    );
    H ||
      ((M = null),
      U(C, me({ matches: Q }, ad(Y), { loaderData: Me, errors: Oe })));
  }
  async function qt(S, C, N, I, F) {
    F === void 0 && (F = {}), $i();
    let Q = Yy(C, N);
    Te({ navigation: Q }, { flushSync: F.flushSync === !0 });
    let A,
      $ = hs(I, C);
    if (!$.route.action && !$.route.lazy)
      A = {
        type: pe.error,
        error: ft(405, {
          method: S.method,
          pathname: C.pathname,
          routeId: $.route.id,
        }),
      };
    else if (((A = (await zr("action", S, [$], I))[0]), S.signal.aborted))
      return { shortCircuited: !0 };
    if (Fn(A)) {
      let Y;
      return (
        F && F.replace != null
          ? (Y = F.replace)
          : (Y =
              rd(A.response.headers.get("Location"), new URL(S.url), s) ===
              g.location.pathname + g.location.search),
        await Yn(S, A, { submission: N, replace: Y }),
        { shortCircuited: !0 }
      );
    }
    if (zn(A)) throw ft(400, { type: "defer-action" });
    if (mt(A)) {
      let Y = cl(I, $.route.id);
      return (
        (F && F.replace) !== !0 && (_ = xe.Push),
        { pendingActionResult: [Y.route.id, A] }
      );
    }
    return { pendingActionResult: [$.route.id, A] };
  }
  async function _n(S, C, N, I, F, Q, A, $, Y, H) {
    let Me = I || ma(C, F),
      Oe = F || Q || dd(Me),
      V = a || i,
      [fe, Ne] = ed(
        e.history,
        g,
        N,
        Oe,
        C,
        d.v7_partialHydration && $ === !0,
        d.unstable_skipActionErrorRevalidation,
        re,
        se,
        K,
        Ie,
        He,
        te,
        V,
        s,
        H,
      );
    if (
      (Ui(
        (Z) =>
          !(N && N.some((Qe) => Qe.route.id === Z)) ||
          (fe && fe.some((Qe) => Qe.route.id === Z)),
      ),
      (W = ++B),
      fe.length === 0 && Ne.length === 0)
    ) {
      let Z = Iu();
      return (
        U(
          C,
          me(
            {
              matches: N,
              loaderData: {},
              errors: H && mt(H[1]) ? { [H[0]]: H[1].error } : null,
            },
            ad(H),
            Z ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: Y },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ae && (!d.v7_partialHydration || !$)) {
      Ne.forEach((Qe) => {
        let dt = g.fetchers.get(Qe.key),
          De = Gr(void 0, dt ? dt.data : void 0);
        g.fetchers.set(Qe.key, De);
      });
      let Z;
      H && !mt(H[1])
        ? (Z = { [H[0]]: H[1].data })
        : g.actionData &&
          (Object.keys(g.actionData).length === 0
            ? (Z = null)
            : (Z = g.actionData)),
        Te(
          me(
            { navigation: Me },
            Z !== void 0 ? { actionData: Z } : {},
            Ne.length > 0 ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: Y },
        );
    }
    Ne.forEach((Z) => {
      P.has(Z.key) && nn(Z.key), Z.controller && P.set(Z.key, Z.controller);
    });
    let $r = () => Ne.forEach((Z) => nn(Z.key));
    M && M.signal.addEventListener("abort", $r);
    let { loaderResults: rn, fetcherResults: Gn } = await Ru(
      g.matches,
      N,
      fe,
      Ne,
      S,
    );
    if (S.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", $r),
      Ne.forEach((Z) => P.delete(Z.key));
    let Xn = ud([...rn, ...Gn]);
    if (Xn) {
      if (Xn.idx >= fe.length) {
        let Z = Ne[Xn.idx - fe.length].key;
        te.add(Z);
      }
      return await Yn(S, Xn.result, { replace: A }), { shortCircuited: !0 };
    }
    let { loaderData: Jn, errors: It } = od(g, N, fe, rn, H, Ne, Gn, Ee);
    Ee.forEach((Z, Qe) => {
      Z.subscribe((dt) => {
        (dt || Z.done) && Ee.delete(Qe);
      });
    }),
      d.v7_partialHydration &&
        $ &&
        g.errors &&
        Object.entries(g.errors)
          .filter((Z) => {
            let [Qe] = Z;
            return !fe.some((dt) => dt.route.id === Qe);
          })
          .forEach((Z) => {
            let [Qe, dt] = Z;
            It = Object.assign(It || {}, { [Qe]: dt });
          });
    let bl = Iu(),
      Vl = Tu(W),
      Hl = bl || Vl || Ne.length > 0;
    return me(
      { loaderData: Jn, errors: It },
      Hl ? { fetchers: new Map(g.fetchers) } : {},
    );
  }
  function Ul(S, C, N, I) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    P.has(S) && nn(S);
    let F = (I && I.unstable_flushSync) === !0,
      Q = a || i,
      A = fs(
        g.location,
        g.matches,
        s,
        d.v7_prependBasename,
        N,
        d.v7_relativeSplatPath,
        C,
        I == null ? void 0 : I.relative,
      ),
      $ = fr(Q, A, s);
    if (!$) {
      Fr(S, C, ft(404, { pathname: A }), { flushSync: F });
      return;
    }
    let {
      path: Y,
      submission: H,
      error: Me,
    } = qc(d.v7_normalizeFormMethod, !0, A, I);
    if (Me) {
      Fr(S, C, Me, { flushSync: F });
      return;
    }
    let Oe = hs($, Y);
    if (((D = (I && I.preventScrollReset) === !0), H && kt(H.formMethod))) {
      en(S, C, Y, Oe, $, F, H);
      return;
    }
    He.set(S, { routeId: C, path: Y }), Al(S, C, Y, Oe, $, F, H);
  }
  async function en(S, C, N, I, F, Q, A) {
    if (($i(), He.delete(S), !I.route.action && !I.route.lazy)) {
      let De = ft(405, { method: A.formMethod, pathname: N, routeId: C });
      Fr(S, C, De, { flushSync: Q });
      return;
    }
    let $ = g.fetchers.get(S);
    tn(S, Gy(A, $), { flushSync: Q });
    let Y = new AbortController(),
      H = qn(e.history, N, Y.signal, A);
    P.set(S, Y);
    let Me = B,
      V = (await zr("action", H, [I], F))[0];
    if (H.signal.aborted) {
      P.get(S) === Y && P.delete(S);
      return;
    }
    if (d.v7_fetcherPersist && Ie.has(S)) {
      if (Fn(V) || mt(V)) {
        tn(S, on(void 0));
        return;
      }
    } else {
      if (Fn(V))
        if ((P.delete(S), W > Me)) {
          tn(S, on(void 0));
          return;
        } else
          return te.add(S), tn(S, Gr(A)), Yn(H, V, { fetcherSubmission: A });
      if (mt(V)) {
        Fr(S, C, V.error);
        return;
      }
    }
    if (zn(V)) throw ft(400, { type: "defer-action" });
    let fe = g.navigation.location || g.location,
      Ne = qn(e.history, fe, Y.signal),
      $r = a || i,
      rn =
        g.navigation.state !== "idle"
          ? fr($r, g.navigation.location, s)
          : g.matches;
    G(rn, "Didn't find any matches after fetcher action");
    let Gn = ++B;
    ee.set(S, Gn);
    let Xn = Gr(A, V.data);
    g.fetchers.set(S, Xn);
    let [Jn, It] = ed(
      e.history,
      g,
      rn,
      A,
      fe,
      !1,
      d.unstable_skipActionErrorRevalidation,
      re,
      se,
      K,
      Ie,
      He,
      te,
      $r,
      s,
      [I.route.id, V],
    );
    It.filter((De) => De.key !== S).forEach((De) => {
      let Ur = De.key,
        Fu = g.fetchers.get(Ur),
        Bh = Gr(void 0, Fu ? Fu.data : void 0);
      g.fetchers.set(Ur, Bh),
        P.has(Ur) && nn(Ur),
        De.controller && P.set(Ur, De.controller);
    }),
      Te({ fetchers: new Map(g.fetchers) });
    let bl = () => It.forEach((De) => nn(De.key));
    Y.signal.addEventListener("abort", bl);
    let { loaderResults: Vl, fetcherResults: Hl } = await Ru(
      g.matches,
      rn,
      Jn,
      It,
      Ne,
    );
    if (Y.signal.aborted) return;
    Y.signal.removeEventListener("abort", bl),
      ee.delete(S),
      P.delete(S),
      It.forEach((De) => P.delete(De.key));
    let Z = ud([...Vl, ...Hl]);
    if (Z) {
      if (Z.idx >= Jn.length) {
        let De = It[Z.idx - Jn.length].key;
        te.add(De);
      }
      return Yn(Ne, Z.result);
    }
    let { loaderData: Qe, errors: dt } = od(
      g,
      g.matches,
      Jn,
      Vl,
      void 0,
      It,
      Hl,
      Ee,
    );
    if (g.fetchers.has(S)) {
      let De = on(V.data);
      g.fetchers.set(S, De);
    }
    Tu(Gn),
      g.navigation.state === "loading" && Gn > W
        ? (G(_, "Expected pending action"),
          M && M.abort(),
          U(g.navigation.location, {
            matches: rn,
            loaderData: Qe,
            errors: dt,
            fetchers: new Map(g.fetchers),
          }))
        : (Te({
            errors: dt,
            loaderData: id(g.loaderData, Qe, rn, dt),
            fetchers: new Map(g.fetchers),
          }),
          (re = !1));
  }
  async function Al(S, C, N, I, F, Q, A) {
    let $ = g.fetchers.get(S);
    tn(S, Gr(A, $ ? $.data : void 0), { flushSync: Q });
    let Y = new AbortController(),
      H = qn(e.history, N, Y.signal);
    P.set(S, Y);
    let Me = B,
      V = (await zr("loader", H, [I], F))[0];
    if (
      (zn(V) && (V = (await uh(V, H.signal, !0)) || V),
      P.get(S) === Y && P.delete(S),
      !H.signal.aborted)
    ) {
      if (Ie.has(S)) {
        tn(S, on(void 0));
        return;
      }
      if (Fn(V))
        if (W > Me) {
          tn(S, on(void 0));
          return;
        } else {
          te.add(S), await Yn(H, V);
          return;
        }
      if (mt(V)) {
        Fr(S, C, V.error);
        return;
      }
      G(!zn(V), "Unhandled fetcher deferred data"), tn(S, on(V.data));
    }
  }
  async function Yn(S, C, N) {
    let {
      submission: I,
      fetcherSubmission: F,
      replace: Q,
    } = N === void 0 ? {} : N;
    C.response.headers.has("X-Remix-Revalidate") && (re = !0);
    let A = C.response.headers.get("Location");
    G(A, "Expected a Location header on the redirect Response"),
      (A = rd(A, new URL(S.url), s));
    let $ = Rl(g.location, A, { _isRedirect: !0 });
    if (n) {
      let fe = !1;
      if (C.response.headers.has("X-Remix-Reload-Document")) fe = !0;
      else if (ju.test(A)) {
        const Ne = e.history.createURL(A);
        fe = Ne.origin !== t.location.origin || Gt(Ne.pathname, s) == null;
      }
      if (fe) {
        Q ? t.location.replace(A) : t.location.assign(A);
        return;
      }
    }
    M = null;
    let Y = Q === !0 ? xe.Replace : xe.Push,
      { formMethod: H, formAction: Me, formEncType: Oe } = g.navigation;
    !I && !F && H && Me && Oe && (I = dd(g.navigation));
    let V = I || F;
    if (Iy.has(C.response.status) && V && kt(V.formMethod))
      await rt(Y, $, {
        submission: me({}, V, { formAction: A }),
        preventScrollReset: D,
      });
    else {
      let fe = ma($, I);
      await rt(Y, $, {
        overrideNavigation: fe,
        fetcherSubmission: F,
        preventScrollReset: D,
      });
    }
  }
  async function zr(S, C, N, I) {
    try {
      let F = await Uy(c, S, C, N, I, o, l);
      return await Promise.all(
        F.map((Q, A) => {
          if (Hy(Q)) {
            let $ = Q.result;
            return {
              type: pe.redirect,
              response: Wy($, C, N[A].route.id, I, s, d.v7_relativeSplatPath),
            };
          }
          return By(Q);
        }),
      );
    } catch (F) {
      return N.map(() => ({ type: pe.error, error: F }));
    }
  }
  async function Ru(S, C, N, I, F) {
    let [Q, ...A] = await Promise.all([
      N.length ? zr("loader", F, N, C) : [],
      ...I.map(($) => {
        if ($.matches && $.match && $.controller) {
          let Y = qn(e.history, $.path, $.controller.signal);
          return zr("loader", Y, [$.match], $.matches).then((H) => H[0]);
        } else
          return Promise.resolve({
            type: pe.error,
            error: ft(404, { pathname: $.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        cd(
          S,
          N,
          Q,
          Q.map(() => F.signal),
          !1,
          g.loaderData,
        ),
        cd(
          S,
          I.map(($) => $.match),
          A,
          I.map(($) => ($.controller ? $.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: Q, fetcherResults: A }
    );
  }
  function $i() {
    (re = !0),
      se.push(...Ui()),
      He.forEach((S, C) => {
        P.has(C) && (K.push(C), nn(C));
      });
  }
  function tn(S, C, N) {
    N === void 0 && (N = {}),
      g.fetchers.set(S, C),
      Te(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (N && N.flushSync) === !0 },
      );
  }
  function Fr(S, C, N, I) {
    I === void 0 && (I = {});
    let F = cl(g.matches, C);
    Bl(S),
      Te(
        { errors: { [F.route.id]: N }, fetchers: new Map(g.fetchers) },
        { flushSync: (I && I.flushSync) === !0 },
      );
  }
  function Lu(S) {
    return (
      d.v7_fetcherPersist &&
        (_e.set(S, (_e.get(S) || 0) + 1), Ie.has(S) && Ie.delete(S)),
      g.fetchers.get(S) || Ty
    );
  }
  function Bl(S) {
    let C = g.fetchers.get(S);
    P.has(S) && !(C && C.state === "loading" && ee.has(S)) && nn(S),
      He.delete(S),
      ee.delete(S),
      te.delete(S),
      Ie.delete(S),
      g.fetchers.delete(S);
  }
  function zh(S) {
    if (d.v7_fetcherPersist) {
      let C = (_e.get(S) || 0) - 1;
      C <= 0 ? (_e.delete(S), Ie.add(S)) : _e.set(S, C);
    } else Bl(S);
    Te({ fetchers: new Map(g.fetchers) });
  }
  function nn(S) {
    let C = P.get(S);
    G(C, "Expected fetch controller: " + S), C.abort(), P.delete(S);
  }
  function _u(S) {
    for (let C of S) {
      let N = Lu(C),
        I = on(N.data);
      g.fetchers.set(C, I);
    }
  }
  function Iu() {
    let S = [],
      C = !1;
    for (let N of te) {
      let I = g.fetchers.get(N);
      G(I, "Expected fetcher: " + N),
        I.state === "loading" && (te.delete(N), S.push(N), (C = !0));
    }
    return _u(S), C;
  }
  function Tu(S) {
    let C = [];
    for (let [N, I] of ee)
      if (I < S) {
        let F = g.fetchers.get(N);
        G(F, "Expected fetcher: " + N),
          F.state === "loading" && (nn(N), ee.delete(N), C.push(N));
      }
    return _u(C), C.length > 0;
  }
  function Fh(S, C) {
    let N = g.blockers.get(S) || Yr;
    return Ue.get(S) !== C && Ue.set(S, C), N;
  }
  function Mu(S) {
    g.blockers.delete(S), Ue.delete(S);
  }
  function Wl(S, C) {
    let N = g.blockers.get(S) || Yr;
    G(
      (N.state === "unblocked" && C.state === "blocked") ||
        (N.state === "blocked" && C.state === "blocked") ||
        (N.state === "blocked" && C.state === "proceeding") ||
        (N.state === "blocked" && C.state === "unblocked") ||
        (N.state === "proceeding" && C.state === "unblocked"),
      "Invalid blocker state transition: " + N.state + " -> " + C.state,
    );
    let I = new Map(g.blockers);
    I.set(S, C), Te({ blockers: I });
  }
  function Ou(S) {
    let { currentLocation: C, nextLocation: N, historyAction: I } = S;
    if (Ue.size === 0) return;
    Ue.size > 1 && Pr(!1, "A router only supports one blocker at a time");
    let F = Array.from(Ue.entries()),
      [Q, A] = F[F.length - 1],
      $ = g.blockers.get(Q);
    if (
      !($ && $.state === "proceeding") &&
      A({ currentLocation: C, nextLocation: N, historyAction: I })
    )
      return Q;
  }
  function Ui(S) {
    let C = [];
    return (
      Ee.forEach((N, I) => {
        (!S || S(I)) && (N.cancel(), C.push(I), Ee.delete(I));
      }),
      C
    );
  }
  function $h(S, C, N) {
    if (((j = S), (w = C), (x = N || null), !k && g.navigation === ha)) {
      k = !0;
      let I = zu(g.location, g.matches);
      I != null && Te({ restoreScrollPosition: I });
    }
    return () => {
      (j = null), (w = null), (x = null);
    };
  }
  function Du(S, C) {
    return (
      (x &&
        x(
          S,
          C.map((I) => uy(I, g.loaderData)),
        )) ||
      S.key
    );
  }
  function Uh(S, C) {
    if (j && w) {
      let N = Du(S, C);
      j[N] = w();
    }
  }
  function zu(S, C) {
    if (j) {
      let N = Du(S, C),
        I = j[N];
      if (typeof I == "number") return I;
    }
    return null;
  }
  function Ah(S) {
    (o = {}), (a = cs(S, l, void 0, o));
  }
  return (
    (T = {
      get basename() {
        return s;
      },
      get future() {
        return d;
      },
      get state() {
        return g;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Mr,
      subscribe: Dr,
      enableScrollRestoration: $h,
      navigate: O,
      fetch: Ul,
      revalidate: Ft,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: Lu,
      deleteFetcher: zh,
      dispose: Or,
      getBlocker: Fh,
      deleteBlocker: Mu,
      _internalFetchControllers: P,
      _internalActiveDeferreds: Ee,
      _internalSetRoutes: Ah,
    }),
    T
  );
}
function Dy(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function fs(e, t, n, r, l, o, i, a) {
  let s, c;
  if (i) {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === i)) {
        c = f;
        break;
      }
  } else (s = t), (c = t[t.length - 1]);
  let d = wu(l || ".", yu(s, o), Gt(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      c &&
      c.route.index &&
      !Eu(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : Vt([n, d.pathname])),
    Hn(d)
  );
}
function qc(e, t, n, r) {
  if (!r || !Dy(r)) return { path: n };
  if (r.formMethod && !Ky(r.formMethod))
    return { path: n, error: ft(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: ft(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = ah(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!kt(i)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((j, x) => {
                let [w, k] = x;
                return (
                  "" +
                  j +
                  w +
                  "=" +
                  k +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!kt(i)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  G(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let s, c;
  if (r.formData) (s = ps(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (s = ps(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (c = ld(s));
  else if (r.body == null) (s = new URLSearchParams()), (c = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (c = ld(s));
    } catch {
      return l();
    }
  let d = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (kt(d.formMethod)) return { path: n, submission: d };
  let f = Jt(n);
  return (
    t && f.search && Eu(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: Hn(f), submission: d }
  );
}
function zy(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ed(e, t, n, r, l, o, i, a, s, c, d, f, h, j, x, w) {
  let k = w ? (mt(w[1]) ? w[1].error : w[1].data) : void 0,
    m = e.createURL(t.location),
    p = e.createURL(l),
    v = w && mt(w[1]) ? w[0] : void 0,
    E = v ? zy(n, v) : n,
    R = w ? w[1].statusCode : void 0,
    T = i && R && R >= 400,
    g = E.filter((D, M) => {
      let { route: b } = D;
      if (b.lazy) return !0;
      if (b.loader == null) return !1;
      if (o)
        return typeof b.loader != "function" || b.loader.hydrate
          ? !0
          : t.loaderData[b.id] === void 0 &&
              (!t.errors || t.errors[b.id] === void 0);
      if (
        Fy(t.loaderData, t.matches[M], D) ||
        s.some((ae) => ae === D.route.id)
      )
        return !0;
      let ne = t.matches[M],
        J = D;
      return td(
        D,
        me(
          {
            currentUrl: m,
            currentParams: ne.params,
            nextUrl: p,
            nextParams: J.params,
          },
          r,
          {
            actionResult: k,
            unstable_actionStatus: R,
            defaultShouldRevalidate: T
              ? !1
              : a ||
                m.pathname + m.search === p.pathname + p.search ||
                m.search !== p.search ||
                ih(ne, J),
          },
        ),
      );
    }),
    _ = [];
  return (
    f.forEach((D, M) => {
      if (o || !n.some((re) => re.route.id === D.routeId) || d.has(M)) return;
      let b = fr(j, D.path, x);
      if (!b) {
        _.push({
          key: M,
          routeId: D.routeId,
          path: D.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ne = t.fetchers.get(M),
        J = hs(b, D.path),
        ae = !1;
      h.has(M)
        ? (ae = !1)
        : c.includes(M)
          ? (ae = !0)
          : ne && ne.state !== "idle" && ne.data === void 0
            ? (ae = a)
            : (ae = td(
                J,
                me(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: p,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: k,
                    unstable_actionStatus: R,
                    defaultShouldRevalidate: T ? !1 : a,
                  },
                ),
              )),
        ae &&
          _.push({
            key: M,
            routeId: D.routeId,
            path: D.path,
            matches: b,
            match: J,
            controller: new AbortController(),
          });
    }),
    [g, _]
  );
}
function Fy(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function ih(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function td(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function nd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  G(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let s = l[i] !== void 0 && i !== "hasErrorBoundary";
    Pr(
      !s,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !s && !ay.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, me({}, t(l), { lazy: void 0 }));
}
function $y(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Uy(e, t, n, r, l, o, i, a) {
  let s = r.reduce((f, h) => f.add(h.route.id), new Set()),
    c = new Set(),
    d = await e({
      matches: l.map((f) => {
        let h = s.has(f.route.id);
        return me({}, f, {
          shouldLoad: h,
          resolve: (x) => (
            c.add(f.route.id),
            h
              ? Ay(t, n, f, o, i, x, a)
              : Promise.resolve({ type: pe.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((f) =>
      G(
        c.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    d.filter((f, h) => s.has(l[h].route.id))
  );
}
async function Ay(e, t, n, r, l, o, i) {
  let a,
    s,
    c = (d) => {
      let f,
        h = new Promise((w, k) => (f = k));
      (s = () => f()), t.signal.addEventListener("abort", s);
      let j = (w) =>
          typeof d != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : d(
                { request: t, params: n.params, context: i },
                ...(w !== void 0 ? [w] : []),
              ),
        x;
      return (
        o
          ? (x = o((w) => j(w)))
          : (x = (async () => {
              try {
                return { type: "data", result: await j() };
              } catch (w) {
                return { type: "error", result: w };
              }
            })()),
        Promise.race([x, h])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let f,
          [h] = await Promise.all([
            c(d).catch((j) => {
              f = j;
            }),
            nd(n.route, l, r),
          ]);
        if (f !== void 0) throw f;
        a = h;
      } else if ((await nd(n.route, l, r), (d = n.route[e]), d)) a = await c(d);
      else if (e === "action") {
        let f = new URL(t.url),
          h = f.pathname + f.search;
        throw ft(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: pe.data, result: void 0 };
    else if (d) a = await c(d);
    else {
      let f = new URL(t.url),
        h = f.pathname + f.search;
      throw ft(404, { pathname: h });
    }
    G(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (d) {
    return { type: pe.error, result: d };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function By(e) {
  let { result: t, type: n, status: r } = e;
  if (sh(t)) {
    let i;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (i = null)
          : (i = await t.json())
        : (i = await t.text());
    } catch (a) {
      return { type: pe.error, error: a };
    }
    return n === pe.error
      ? {
          type: pe.error,
          error: new xu(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: pe.data, data: i, statusCode: t.status, headers: t.headers };
  }
  if (n === pe.error)
    return { type: pe.error, error: t, statusCode: Su(t) ? t.status : r };
  if (Qy(t)) {
    var l, o;
    return {
      type: pe.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: pe.data, data: t, statusCode: r };
}
function Wy(e, t, n, r, l, o) {
  let i = e.headers.get("Location");
  if (
    (G(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !ju.test(i))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (i = fs(new URL(t.url), a, l, !0, i, o)), e.headers.set("Location", i);
  }
  return e;
}
function rd(e, t, n) {
  if (ju.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = Gt(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function qn(e, t, n, r) {
  let l = e.createURL(ah(t)).toString(),
    o = { signal: n };
  if (r && kt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (o.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = ps(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function ps(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function ld(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function by(e, t, n, r, l, o) {
  let i = {},
    a = null,
    s,
    c = !1,
    d = {},
    f = r && mt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((h, j) => {
      let x = t[j].route.id;
      if (
        (G(!Fn(h), "Cannot handle redirect results in processLoaderData"),
        mt(h))
      ) {
        let w = h.error;
        if ((f !== void 0 && ((w = f), (f = void 0)), (a = a || {}), o))
          a[x] = w;
        else {
          let k = cl(e, x);
          a[k.route.id] == null && (a[k.route.id] = w);
        }
        (i[x] = void 0),
          c || ((c = !0), (s = Su(h.error) ? h.error.status : 500)),
          h.headers && (d[x] = h.headers);
      } else
        zn(h)
          ? (l.set(x, h.deferredData),
            (i[x] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !c &&
              (s = h.statusCode),
            h.headers && (d[x] = h.headers))
          : ((i[x] = h.data),
            h.statusCode && h.statusCode !== 200 && !c && (s = h.statusCode),
            h.headers && (d[x] = h.headers));
    }),
    f !== void 0 && r && ((a = { [r[0]]: f }), (i[r[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: d }
  );
}
function od(e, t, n, r, l, o, i, a) {
  let { loaderData: s, errors: c } = by(t, n, r, l, a, !1);
  for (let d = 0; d < o.length; d++) {
    let { key: f, match: h, controller: j } = o[d];
    G(
      i !== void 0 && i[d] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let x = i[d];
    if (!(j && j.signal.aborted))
      if (mt(x)) {
        let w = cl(e.matches, h == null ? void 0 : h.route.id);
        (c && c[w.route.id]) || (c = me({}, c, { [w.route.id]: x.error })),
          e.fetchers.delete(f);
      } else if (Fn(x)) G(!1, "Unhandled fetcher revalidation redirect");
      else if (zn(x)) G(!1, "Unhandled fetcher deferred data");
      else {
        let w = on(x.data);
        e.fetchers.set(f, w);
      }
  }
  return { loaderData: s, errors: c };
}
function id(e, t, n, r) {
  let l = me({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function ad(e) {
  return e
    ? mt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function cl(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function sd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ft(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (a = "defer() is not supported in actions")
            : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new xu(e || 500, i, new Error(a), !0)
  );
}
function ud(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Fn(n)) return { result: n, idx: t };
  }
}
function ah(e) {
  let t = typeof e == "string" ? Jt(e) : e;
  return Hn(me({}, t, { hash: "" }));
}
function Vy(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Hy(e) {
  return sh(e.result) && _y.has(e.result.status);
}
function zn(e) {
  return e.type === pe.deferred;
}
function mt(e) {
  return e.type === pe.error;
}
function Fn(e) {
  return (e && e.type) === pe.redirect;
}
function Qy(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function sh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Ky(e) {
  return Ly.has(e.toLowerCase());
}
function kt(e) {
  return Py.has(e.toLowerCase());
}
async function cd(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      s = t[i];
    if (!s) continue;
    let c = e.find((f) => f.route.id === s.route.id),
      d = c != null && !ih(c, s) && (o && o[s.route.id]) !== void 0;
    if (zn(a) && (l || d)) {
      let f = r[i];
      G(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await uh(a, f, l).then((h) => {
          h && (n[i] = h || n[i]);
        });
    }
  }
}
async function uh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: pe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: pe.error, error: l };
      }
    return { type: pe.data, data: e.deferredData.data };
  }
}
function Eu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function hs(e, t) {
  let n = typeof t == "string" ? Jt(t).search : t.search;
  if (e[e.length - 1].route.index && Eu(n || "")) return e[e.length - 1];
  let r = rh(e);
  return r[r.length - 1];
}
function dd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function ma(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Yy(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Gr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Gy(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function on(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Xy(e, t) {
  try {
    let n = e.sessionStorage.getItem(oh);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Jy(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(oh, JSON.stringify(n));
    } catch (r) {
      Pr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ll.apply(this, arguments)
  );
}
const zl = y.createContext(null),
  Cu = y.createContext(null),
  Pn = y.createContext(null),
  Di = y.createContext(null),
  Zt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ch = y.createContext(null);
function Zy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Fl() || G(!1);
  let { basename: r, navigator: l } = y.useContext(Pn),
    { hash: o, pathname: i, search: a } = zi(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : Vt([r, i])),
    l.createHref({ pathname: s, search: a, hash: o })
  );
}
function Fl() {
  return y.useContext(Di) != null;
}
function $l() {
  return Fl() || G(!1), y.useContext(Di).location;
}
function dh(e) {
  y.useContext(Pn).static || y.useLayoutEffect(e);
}
function Tr() {
  let { isDataRoute: e } = y.useContext(Zt);
  return e ? f0() : qy();
}
function qy() {
  Fl() || G(!1);
  let e = y.useContext(zl),
    { basename: t, future: n, navigator: r } = y.useContext(Pn),
    { matches: l } = y.useContext(Zt),
    { pathname: o } = $l(),
    i = JSON.stringify(yu(l, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    dh(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = wu(c, JSON.parse(i), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Vt([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, o, e],
    )
  );
}
const e0 = y.createContext(null);
function t0(e) {
  let t = y.useContext(Zt).outlet;
  return t && y.createElement(e0.Provider, { value: e }, t);
}
function fh() {
  let { matches: e } = y.useContext(Zt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function zi(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Pn),
    { matches: l } = y.useContext(Zt),
    { pathname: o } = $l(),
    i = JSON.stringify(yu(l, r.v7_relativeSplatPath));
  return y.useMemo(() => wu(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function n0(e, t, n, r) {
  Fl() || G(!1);
  let { navigator: l } = y.useContext(Pn),
    { matches: o } = y.useContext(Zt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let c = $l(),
    d;
  if (t) {
    var f;
    let k = typeof t == "string" ? Jt(t) : t;
    s === "/" || ((f = k.pathname) != null && f.startsWith(s)) || G(!1),
      (d = k);
  } else d = c;
  let h = d.pathname || "/",
    j = h;
  if (s !== "/") {
    let k = s.replace(/^\//, "").split("/");
    j = "/" + h.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let x = fr(e, { pathname: j }),
    w = a0(
      x &&
        x.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: Vt([
              s,
              l.encodeLocation
                ? l.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? s
                : Vt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && w
    ? y.createElement(
        Di.Provider,
        {
          value: {
            location: Ll(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: xe.Pop,
          },
        },
        w,
      )
    : w;
}
function r0() {
  let e = d0(),
    t = Su(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: l }, n) : null,
    o,
  );
}
const l0 = y.createElement(r0, null);
class o0 extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Zt.Provider,
          { value: this.props.routeContext },
          y.createElement(ch.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function i0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = y.useContext(zl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Zt.Provider, { value: t }, r)
  );
}
function a0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let d = i.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    d >= 0 || G(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: j } = n,
          x =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!j || j[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (s = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, h) => {
    let j,
      x = !1,
      w = null,
      k = null;
    n &&
      ((j = a && f.route.id ? a[f.route.id] : void 0),
      (w = f.route.errorElement || l0),
      s &&
        (c < 0 && h === 0
          ? (p0("route-fallback", !1), (x = !0), (k = null))
          : c === h &&
            ((x = !0), (k = f.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, h + 1)),
      p = () => {
        let v;
        return (
          j
            ? (v = w)
            : x
              ? (v = k)
              : f.route.Component
                ? (v = y.createElement(f.route.Component, null))
                : f.route.element
                  ? (v = f.route.element)
                  : (v = d),
          y.createElement(i0, {
            match: f,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? y.createElement(o0, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: j,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var ph = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(ph || {}),
  Ko = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ko || {});
function s0(e) {
  let t = y.useContext(zl);
  return t || G(!1), t;
}
function u0(e) {
  let t = y.useContext(Cu);
  return t || G(!1), t;
}
function c0(e) {
  let t = y.useContext(Zt);
  return t || G(!1), t;
}
function hh(e) {
  let t = c0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function d0() {
  var e;
  let t = y.useContext(ch),
    n = u0(Ko.UseRouteError),
    r = hh(Ko.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function f0() {
  let { router: e } = s0(ph.UseNavigateStable),
    t = hh(Ko.UseNavigateStable),
    n = y.useRef(!1);
  return (
    dh(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Ll({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
const fd = {};
function p0(e, t, n) {
  !t && !fd[e] && (fd[e] = !0);
}
function h0(e) {
  return t0(e.context);
}
function m0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = xe.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Fl() && G(!1);
  let s = t.replace(/^\/*/, "/"),
    c = y.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: Ll({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, i],
    );
  typeof r == "string" && (r = Jt(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: j = null,
      key: x = "default",
    } = r,
    w = y.useMemo(() => {
      let k = Gt(d, s);
      return k == null
        ? null
        : {
            location: { pathname: k, search: f, hash: h, state: j, key: x },
            navigationType: l,
          };
    }, [s, d, f, h, j, x, l]);
  return w == null
    ? null
    : y.createElement(
        Pn.Provider,
        { value: c },
        y.createElement(Di.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
function v0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: y.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: y.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: y.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rr() {
  return (
    (Rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rr.apply(this, arguments)
  );
}
function mh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function g0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function y0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !g0(e);
}
const w0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  x0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  S0 = "6";
try {
  window.__reactRouterVersion = S0;
} catch {}
function j0(e, t) {
  return Oy({
    basename: t == null ? void 0 : t.basename,
    future: Rr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: ly({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || E0(),
    routes: e,
    mapRouteProperties: v0,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function E0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Rr({}, t, { errors: C0(t.errors) })), t;
}
function C0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new xu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const vh = y.createContext({ isTransitioning: !1 }),
  k0 = y.createContext(new Map()),
  N0 = "startTransition",
  pd = rm[N0],
  P0 = "flushSync",
  hd = pg[P0];
function R0(e) {
  pd ? pd(e) : e();
}
function Xr(e) {
  hd ? hd(e) : e();
}
class L0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function _0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = y.useState(n.state),
    [i, a] = y.useState(),
    [s, c] = y.useState({ isTransitioning: !1 }),
    [d, f] = y.useState(),
    [h, j] = y.useState(),
    [x, w] = y.useState(),
    k = y.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    p = y.useCallback(
      (g) => {
        m ? R0(g) : g();
      },
      [m],
    ),
    v = y.useCallback(
      (g, _) => {
        let {
          deletedFetchers: D,
          unstable_flushSync: M,
          unstable_viewTransitionOpts: b,
        } = _;
        D.forEach((J) => k.current.delete(J)),
          g.fetchers.forEach((J, ae) => {
            J.data !== void 0 && k.current.set(ae, J.data);
          });
        let ne =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!b || ne) {
          M ? Xr(() => o(g)) : p(() => o(g));
          return;
        }
        if (M) {
          Xr(() => {
            h && (d && d.resolve(), h.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: b.currentLocation,
                nextLocation: b.nextLocation,
              });
          });
          let J = n.window.document.startViewTransition(() => {
            Xr(() => o(g));
          });
          J.finished.finally(() => {
            Xr(() => {
              f(void 0), j(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            Xr(() => j(J));
          return;
        }
        h
          ? (d && d.resolve(),
            h.skipTransition(),
            w({
              state: g,
              currentLocation: b.currentLocation,
              nextLocation: b.nextLocation,
            }))
          : (a(g),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: b.currentLocation,
              nextLocation: b.nextLocation,
            }));
      },
      [n.window, h, d, k, p],
    );
  y.useLayoutEffect(() => n.subscribe(v), [n, v]),
    y.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new L0());
    }, [s]),
    y.useEffect(() => {
      if (d && i && n.window) {
        let g = i,
          _ = d.promise,
          D = n.window.document.startViewTransition(async () => {
            p(() => o(g)), await _;
          });
        D.finished.finally(() => {
          f(void 0), j(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          j(D);
      }
    }, [p, i, d, n.window]),
    y.useEffect(() => {
      d && i && l.location.key === i.location.key && d.resolve();
    }, [d, h, l.location, i]),
    y.useEffect(() => {
      !s.isTransitioning &&
        x &&
        (a(x.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        w(void 0));
    }, [s.isTransitioning, x]),
    y.useEffect(() => {}, []);
  let E = y.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (g) => n.navigate(g),
        push: (g, _, D) =>
          n.navigate(g, {
            state: _,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
        replace: (g, _, D) =>
          n.navigate(g, {
            replace: !0,
            state: _,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
      }),
      [n],
    ),
    R = n.basename || "/",
    T = y.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: R }),
      [n, E, R],
    );
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(
      zl.Provider,
      { value: T },
      y.createElement(
        Cu.Provider,
        { value: l },
        y.createElement(
          k0.Provider,
          { value: k.current },
          y.createElement(
            vh.Provider,
            { value: s },
            y.createElement(
              m0,
              {
                basename: R,
                location: l.location,
                navigationType: l.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? y.createElement(I0, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function I0(e) {
  let { routes: t, future: n, state: r } = e;
  return n0(t, void 0, r, n);
}
const T0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  M0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  O0 = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: s,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      h = mh(t, w0),
      { basename: j } = y.useContext(Pn),
      x,
      w = !1;
    if (typeof c == "string" && M0.test(c) && ((x = c), T0))
      try {
        let v = new URL(window.location.href),
          E = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
          R = Gt(E.pathname, j);
        E.origin === v.origin && R != null
          ? (c = R + E.search + E.hash)
          : (w = !0);
      } catch {}
    let k = Zy(c, { relative: l }),
      m = z0(c, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: f,
      });
    function p(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return y.createElement(
      "a",
      Rr({}, h, { href: x || k, onClick: w || o ? r : p, ref: n, target: s }),
    );
  }),
  ms = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: a,
        to: s,
        unstable_viewTransition: c,
        children: d,
      } = t,
      f = mh(t, x0),
      h = zi(s, { relative: f.relative }),
      j = $l(),
      x = y.useContext(Cu),
      { navigator: w, basename: k } = y.useContext(Pn),
      m = x != null && F0(h) && c === !0,
      p = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
      v = j.pathname,
      E =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    l ||
      ((v = v.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (p = p.toLowerCase())),
      E && k && (E = Gt(E, k) || E);
    const R = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let T = v === p || (!i && v.startsWith(p) && v.charAt(R) === "/"),
      g =
        E != null &&
        (E === p || (!i && E.startsWith(p) && E.charAt(p.length) === "/")),
      _ = { isActive: T, isPending: g, isTransitioning: m },
      D = T ? r : void 0,
      M;
    typeof o == "function"
      ? (M = o(_))
      : (M = [
          o,
          T ? "active" : null,
          g ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let b = typeof a == "function" ? a(_) : a;
    return y.createElement(
      O0,
      Rr({}, f, {
        "aria-current": D,
        className: M,
        ref: n,
        style: b,
        to: s,
        unstable_viewTransition: c,
      }),
      typeof d == "function" ? d(_) : d,
    );
  });
var vs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vs || (vs = {}));
var md;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(md || (md = {}));
function D0(e) {
  let t = y.useContext(zl);
  return t || G(!1), t;
}
function z0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = Tr(),
    c = $l(),
    d = zi(e, { relative: i });
  return y.useCallback(
    (f) => {
      if (y0(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Hn(c) === Hn(d);
        s(e, {
          replace: h,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [c, s, d, r, l, n, e, o, i, a],
  );
}
function F0(e, t) {
  t === void 0 && (t = {});
  let n = y.useContext(vh);
  n == null && G(!1);
  let { basename: r } = D0(vs.useViewTransitionState),
    l = zi(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Gt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Gt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ds(l.pathname, i) != null || ds(l.pathname, o) != null;
}
/*! js-cookie v3.0.5 | MIT */ function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var $0 = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    );
  },
};
function gs(e, t) {
  function n(l, o, i) {
    if (!(typeof document > "u")) {
      (i = uo({}, t, i)),
        typeof i.expires == "number" &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var s in i)
        i[s] &&
          ((a += "; " + s), i[s] !== !0 && (a += "=" + i[s].split(";")[0]));
      return (document.cookie = l + "=" + e.write(o, l) + a);
    }
  }
  function r(l) {
    if (!(typeof document > "u" || (arguments.length && !l))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          i = {},
          a = 0;
        a < o.length;
        a++
      ) {
        var s = o[a].split("="),
          c = s.slice(1).join("=");
        try {
          var d = decodeURIComponent(s[0]);
          if (((i[d] = e.read(c, d)), l === d)) break;
        } catch {}
      }
      return l ? i[l] : i;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (l, o) {
        n(l, "", uo({}, o, { expires: -1 }));
      },
      withAttributes: function (l) {
        return gs(this.converter, uo({}, this.attributes, l));
      },
      withConverter: function (l) {
        return gs(uo({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  );
}
var U0 = gs($0, { path: "/" });
async function Je(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = U0.get("XSRF-TOKEN")));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const gh = "session/loginUser",
  ku = (e) => ({ type: gh, payload: e }),
  yh = "session/logoutUser",
  A0 = () => ({ type: yh }),
  vd = (e) => async (t) => {
    const { credential: n, password: r } = e,
      l = await Je("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential: n, password: r }),
      });
    if (l.ok) {
      const o = await l.json();
      return t(ku(o.user)), l;
    }
  },
  B0 = () => async (e) => {
    const t = await Je("/api/session");
    if (t.ok) {
      const n = await t.json();
      return e(ku(n.user)), t;
    }
  },
  W0 = (e) => async (t) => {
    const { username: n, firstName: r, lastName: l, email: o, password: i } = e,
      a = await Je("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: l,
          email: o,
          password: i,
        }),
      });
    if (a.ok) {
      const s = await a.json();
      return t(ku(s.user)), a;
    }
  },
  b0 = () => async (e) => {
    const t = await Je("/api/session", { method: "DELETE" });
    if (t.ok) return e(A0()), t;
  },
  V0 = { user: null },
  H0 = (e = V0, t) => {
    switch (t.type) {
      case gh:
        return { ...e, user: t.payload };
      case yh:
        return { ...e, user: null };
      default:
        return e;
    }
  };
var wh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gd = Wt.createContext && Wt.createContext(wh),
  Q0 = ["attr", "size", "title"];
function K0(e, t) {
  if (e == null) return {};
  var n = Y0(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Y0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Yo() {
  return (
    (Yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yo.apply(this, arguments)
  );
}
function yd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yd(Object(n), !0).forEach(function (r) {
          G0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : yd(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function G0(e, t, n) {
  return (
    (t = X0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function X0(e) {
  var t = J0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function J0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xh(e) {
  return (
    e &&
    e.map((t, n) =>
      Wt.createElement(t.tag, Go({ key: n }, t.attr), xh(t.child)),
    )
  );
}
function Sh(e) {
  return (t) =>
    Wt.createElement(Z0, Yo({ attr: Go({}, e.attr) }, t), xh(e.child));
}
function Z0(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = K0(e, Q0),
      a = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      Wt.createElement(
        "svg",
        Yo(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: s,
            style: Go(Go({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        o && Wt.createElement("title", null, o),
        e.children,
      )
    );
  };
  return gd !== void 0
    ? Wt.createElement(gd.Consumer, null, (n) => t(n))
    : t(wh);
}
function q0(e) {
  return Sh({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function e1(e) {
  return Sh({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z",
        },
        child: [],
      },
    ],
  })(e);
}
const Nu = y.createContext();
function t1({ children: e }) {
  const t = y.useRef(),
    [n, r] = y.useState(null),
    [l, o] = y.useState(null),
    a = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof l == "function" && (o(null), l());
      },
    };
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(Nu.Provider, { value: a, children: e }),
      u.jsx("div", { ref: t }),
    ],
  });
}
function n1() {
  const { modalRef: e, modalContent: t, closeModal: n } = y.useContext(Nu);
  return !e || !e.current || !t
    ? null
    : Bp.createPortal(
        u.jsxs("div", {
          id: "modal",
          children: [
            u.jsx("div", { id: "modal-background", onClick: n }),
            u.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current,
      );
}
const Rn = () => y.useContext(Nu);
function wd({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: l, setOnModalClose: o } = Rn(),
    i = () => {
      r && o(r), l(e), typeof n == "function" && n();
    };
  return u.jsx(u.Fragment, {
    children: u.jsx("div", {
      className: "dropdown",
      children: u.jsx("div", { onClick: i, children: t }),
    }),
  });
}
function r1() {
  const e = St(),
    [t, n] = y.useState(""),
    [r, l] = y.useState(""),
    [o, i] = y.useState({}),
    { closeModal: a } = Rn(),
    s = () => t.length < 4 || r.length < 6,
    c = (f) => {
      const h = "demousername",
        j = "ilikebananas1";
      return (
        f.preventDefault(),
        e(vd({ credential: h, password: j }))
          .then(() => {
            i({});
          })
          .then(a)
      );
    },
    d = (f) => (
      f.preventDefault(),
      i({}),
      e(vd({ credential: t, password: r }))
        .then(a)
        .catch(async (h) => {
          const j = await h.json();
          j && j.message && i({ message: j.message });
        })
    );
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "form login",
      children: [
        u.jsx("h1", { children: "Log In" }),
        o.message &&
          u.jsx("div", {
            className: "errors",
            children: "The provided credentials were invalid.",
          }),
        u.jsx("br", {}),
        u.jsxs("form", {
          onSubmit: d,
          children: [
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "userinput",
                  type: "text",
                  value: t,
                  onChange: (f) => n(f.target.value),
                  placeholder: "Username or Email",
                }),
              }),
            }),
            u.jsx("br", {}),
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "passwordinput",
                  type: "password",
                  value: r,
                  onChange: (f) => l(f.target.value),
                  placeholder: "Password",
                }),
              }),
            }),
            u.jsx("br", {}),
            u.jsx("button", {
              className: "loginButton",
              type: "submit",
              disabled: s(),
              children: "Log In",
            }),
            u.jsx("br", {}),
            u.jsx("button", {
              className: "demouserbutton",
              onClick: c,
              children: "Demo User",
            }),
          ],
        }),
      ],
    }),
  });
}
function l1() {
  const e = St(),
    [t, n] = y.useState(""),
    [r, l] = y.useState(""),
    [o, i] = y.useState(""),
    [a, s] = y.useState(""),
    [c, d] = y.useState(""),
    [f, h] = y.useState(""),
    [j, x] = y.useState({}),
    { closeModal: w } = Rn(),
    [k, m] = y.useState(!1),
    p = () =>
      t.length < 4 ||
      c.length < 6 ||
      o.length === 0 ||
      a.length === 0 ||
      r.length === 0 ||
      f.length < 6;
  y.useEffect(() => {
    const E = {};
    a.includes("@") || (E.email = "Invalid email"),
      c !== f && (E.matchPassword = "Passwords do not match"),
      x(E);
  }, [a, c, f]);
  const v = (E) => {
    if ((E.preventDefault(), m(!0), !Object.values(j).length)) {
      if (Object.values(j).length === 0)
        return e(
          W0({ email: a, username: t, firstName: r, lastName: o, password: c }),
        )
          .then(w)
          .catch(async (R) => {
            const T = await R.json();
            T && T.errors && (console.log(T), x(T.errors));
          });
      x({}), m(!1);
    }
  };
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "form signup",
      children: [
        u.jsx("h1", { children: "Sign Up" }),
        u.jsxs("form", {
          onSubmit: v,
          children: [
            u.jsxs("div", {
              children: [
                k === !0 &&
                  j.email &&
                  u.jsx("div", { className: "errors", children: j.email }),
                u.jsx("br", {}),
                k === !0 &&
                  j.matchPassword &&
                  u.jsx("div", {
                    className: "errors",
                    children: j.matchPassword,
                  }),
                u.jsx("label", {
                  children: u.jsx("input", {
                    className: "userinputsignup",
                    type: "text",
                    value: t,
                    onChange: (E) => n(E.target.value),
                    placeholder: "Username",
                  }),
                }),
              ],
            }),
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "userinputsignup",
                  type: "text",
                  value: r,
                  onChange: (E) => l(E.target.value),
                  placeholder: "First Name",
                }),
              }),
            }),
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "userinputsignup",
                  type: "text",
                  value: o,
                  onChange: (E) => i(E.target.value),
                  placeholder: "Last Name",
                }),
              }),
            }),
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "userinputsignup",
                  type: "text",
                  value: a,
                  onChange: (E) => s(E.target.value),
                  placeholder: "Email",
                }),
              }),
            }),
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "userinputsignup",
                  type: "password",
                  value: c,
                  onChange: (E) => d(E.target.value),
                  placeholder: "Password",
                }),
              }),
            }),
            u.jsx("div", {
              children: u.jsx("label", {
                children: u.jsx("input", {
                  className: "userinputsignup",
                  type: "password",
                  value: f,
                  onChange: (E) => h(E.target.value),
                  placeholder: "Confirm Password",
                }),
              }),
            }),
            u.jsx("br", {}),
            u.jsx("button", {
              className: "signupButton",
              type: "submit",
              disabled: p(),
              children: "Sign Up",
            }),
          ],
        }),
      ],
    }),
  });
}
const jh = "spots/LOAD",
  Eh = (e) => ({ type: jh, payload: e }),
  Ch = "spots/DETAIL",
  Pu = (e) => ({ type: Ch, payload: e }),
  kh = "spots/REMOVE",
  o1 = (e) => ({ type: kh, spotId: e }),
  i1 = () => async (e) => {
    let t = !1,
      n = 1;
    for (; !t; ) {
      const r = await Je(`/api/spots?page=${n}`);
      if (r.ok) {
        const o = (await r.json()).Spots;
        e(Eh(o)), o.length === 0 && (t = !0), (n += 1);
      }
    }
  },
  Nh = () => async (e) => {
    const t = await Je("/api/spots/current");
    if (t.ok) {
      const r = (await t.json()).Spots;
      return e(Eh(r)), r;
    }
  },
  Fi = (e) => async (t) => {
    const n = await Je(`/api/spots/${e}`);
    if (n.ok) {
      const r = await n.json();
      if (r.SpotImages)
        for (const l of r.SpotImages)
          l.preview === !0 && (r.previewImage = l.url);
      return t(Pu(r)), r;
    }
  },
  a1 = (e) => async (t) => {
    const n = await Je("/api/spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (n.ok) {
      const r = await n.json();
      return t(Pu(r)), r;
    }
  },
  s1 = (e, t) => async (n) => {
    const r = await Je(`/api/spots/${t}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (r.ok) {
      const l = await r.json();
      return n(Pu(l)), l;
    }
  },
  u1 = (e) => async () => {
    const t = await Je(`/api/spots/${e.spotId}/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (t.ok) return await t.json();
  },
  c1 = (e) => async () => {
    const t = await Je(`/api/spots/${e.spotId}/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (t.ok) return await t.json();
  },
  d1 = (e) => async (t) => {
    const n = await Je(`/api/spots/${e}`, { method: "DELETE" });
    if (n.ok) {
      const r = await n.json();
      return t(o1(e)), r;
    }
  },
  f1 = { byId: {} },
  p1 = (e = f1, t) => {
    switch (t.type) {
      case jh: {
        const n = { ...e };
        return (
          t.payload.forEach((r) => {
            n.byId[r.id] = r;
          }),
          { ...n, ...e }
        );
      }
      case Ch: {
        const n = structuredClone(e),
          r = t.payload;
        return (n.byId[r.id] = r), n;
      }
      case kh: {
        const n = { ...e },
          r = { ...e.byId };
        return delete r[t.spotId], (n.byId = r), n;
      }
      default:
        return e;
    }
  };
function h1({ user: e }) {
  const t = St(),
    n = Tr(),
    [r, l] = y.useState(!1),
    o = y.useRef(),
    i = (f) => {
      f.stopPropagation(), l(!r);
    };
  y.useEffect(() => {
    if (!r) return;
    const f = (h) => {
      o.current.contains(h.target) || l(!1);
    };
    return (
      document.addEventListener("click", f),
      () => document.removeEventListener("click", f)
    );
  }, [r]);
  const a = () => l(!1),
    s = (f) => {
      f.preventDefault(), t(b0()), a(), n("/");
    },
    c = "profile-dropdown" + (r ? "" : " hidden"),
    d = () => {
      t(Nh());
    };
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("div", {
        className: "profile-button profileButtonBox",
        children: u.jsx("button", {
          className: "menu-icons",
          onClick: i,
          children: u.jsx("div", {
            className: "both-icons",
            children: u.jsxs("div", {
              style: { fontSize: "20px" },
              children: [
                u.jsx("div", { children: u.jsx(q0, { className: "menu" }) }),
                u.jsx("div", { children: u.jsx(e1, { className: "profile" }) }),
              ],
            }),
          }),
        }),
      }),
      u.jsx("div", {
        className: `${c} profileButtonList`,
        ref: o,
        children: e
          ? u.jsxs(u.Fragment, {
              children: [
                u.jsxs("div", {
                  className: "text",
                  children: ["Hello, ", e.firstName],
                }),
                u.jsx("div", { className: "text", children: e.email }),
                u.jsx("hr", {}),
                u.jsx("div", {
                  children: u.jsx(ms, {
                    to: "/spots/current",
                    onClick: d,
                    className: "manage-spots-link text",
                    children: "Manage Spots",
                  }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("hr", {}),
                    u.jsx("button", {
                      className: "logout-button",
                      onClick: s,
                      children: "Log Out",
                    }),
                  ],
                }),
              ],
            })
          : u.jsxs(u.Fragment, {
              children: [
                u.jsx("div", {
                  className: "signup-dropdown",
                  children: u.jsx(wd, {
                    itemText: "Sign Up",
                    onItemClick: a,
                    modalComponent: u.jsx(l1, {}),
                  }),
                }),
                u.jsx("div", {
                  className: "login-dropdown",
                  children: u.jsx(wd, {
                    itemText: "Log In",
                    onItemClick: a,
                    modalComponent: u.jsx(r1, {}),
                  }),
                }),
              ],
            }),
      }),
    ],
  });
}
const m1 = "/assets/newspiritedlogo-34487c18.png";
function v1({ isLoaded: e }) {
  const t = Lt((n) => n.session.user);
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "overall-block",
      children: [
        u.jsx("div", {
          className: "home-block",
          children: u.jsx(ms, {
            to: "/",
            className: "home-button",
            children: u.jsx("img", { src: m1, style: { height: "50px" } }),
          }),
        }),
        u.jsxs("div", {
          className: "profile-area",
          children: [
            e &&
              t &&
              u.jsx("div", {
                className: "createspotlink",
                children: u.jsx(ms, {
                  to: "/spots/new",
                  className: "create-spot-link",
                  children: "Create a New Spot",
                }),
              }),
            e &&
              u.jsx("div", {
                className: "profile-block",
                children: u.jsx(h1, { className: "profilebutton", user: t }),
              }),
          ],
        }),
      ],
    }),
  });
}
function Ph({ spot: e }) {
  var n, r;
  const t = Tr();
  return (
    e.previewImage ||
      (e.previewImage =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"),
    e.avgRating || (e.avgRating = 0),
    u.jsx(u.Fragment, {
      children: u.jsx("div", {
        onClick: () => {
          t(`/spots/${e.id}`);
        },
        "data-text": e.name,
        className: "spotTileContainer tooltip",
        children: u.jsxs("div", {
          className: "spotitem",
          children: [
            u.jsx("img", { className: "spotsimg", src: `${e.previewImage}` }),
            u.jsxs("div", {
              children: [
                u.jsxs("div", {
                  className: "top-text",
                  children: [
                    u.jsxs("div", {
                      className: "location",
                      children: [e.city, ", ", e.state],
                    }),
                    e.avgRating === 0
                      ? u.jsx("div", { children: "★ New" })
                      : u.jsxs("div", {
                          className: "rating",
                          children: [
                            "★ ",
                            (n = e.avgRating) == null ? void 0 : n.toFixed(1),
                          ],
                        }),
                  ],
                }),
                u.jsxs("div", {
                  className: "bottom-text",
                  children: [
                    u.jsxs("div", {
                      className: "price",
                      children: [
                        "$",
                        (r = e.price) == null ? void 0 : r.toFixed(2),
                        " ",
                      ],
                    }),
                    u.jsx("div", { children: " night" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
function g1() {
  const e = St(),
    t = Lt((l) => l.spots.byId),
    [n, r] = y.useState(!1);
  return (
    y.useEffect(() => {
      e(i1()).then(() => {
        r(!0);
      });
    }, [n, e]),
    u.jsxs(u.Fragment, {
      children: [
        u.jsx("h2", {}),
        u.jsx("div", {
          className: "spotscontainer",
          children: Object.values(t).map((l) =>
            u.jsx(Ph, { spot: l }, `${l.id}`),
          ),
        }),
      ],
    })
  );
}
const Rh = "reviews/LOAD",
  y1 = (e) => ({ type: Rh, payload: e }),
  Lh = "reviews/REMOVE",
  w1 = (e) => ({ type: Lh, reviewId: e }),
  x1 = (e) =>
    e.sort((t, n) => {
      var r = new Date(t.updatedAt).getTime(),
        l = new Date(n.updatedAt).getTime();
      return l - r;
    }),
  _h = (e) => async (t) => {
    const n = await Je(`/api/spots/${e}/reviews`);
    if (n.ok) {
      const l = (await n.json()).Reviews;
      return t(y1(l)), l;
    }
  },
  S1 = (e, t) => async () => {
    const n = await Je(`/api/spots/${t}/reviews`, {
      method: "POST",
      body: JSON.stringify(e),
    });
    if (n.ok) return await n.json();
  },
  j1 = (e) => async (t) => {
    const n = await Je(`/api/reviews/${e}`, { method: "DELETE" });
    if (n.ok) {
      const r = await n.json();
      return t(w1(e)), r;
    }
  },
  E1 = { byId: {}, sortedReviews: [] },
  C1 = (e = E1, t) => {
    switch (t.type) {
      case Rh: {
        const n = { ...e };
        return (
          t.payload.forEach((r) => {
            n.byId[r.id] = r;
          }),
          { ...n, ...e, sortedReviews: x1(t.payload) }
        );
      }
      case Lh: {
        const n = { ...e },
          r = { ...e.byId },
          l = e.sortedReviews.filter((o) => o.id != t.reviewId);
        return delete r[t.reviewId], (n.byId = r), (n.sortedReviews = l), n;
      }
      default:
        return e;
    }
  };
function Ih({ modalComponent: e }) {
  const { setModalContent: t } = Rn(),
    n = () => {
      t(e);
    };
  return u.jsx("button", {
    className: "delete-button",
    onClick: n,
    children: "Delete",
  });
}
function k1({ reviewId: e, spotId: t }) {
  const n = St(),
    { closeModal: r } = Rn(),
    l = (o) => (
      o.preventDefault(),
      n(j1(e))
        .then(() => n(Fi(t)))
        .then(r)
    );
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "delete-modal",
      children: [
        u.jsx("h1", { children: "Confirm Delete" }),
        u.jsx("h3", {
          children: "Are you sure you want to delete this review?",
        }),
        u.jsxs("div", {
          className: "buttons",
          children: [
            u.jsx("div", {
              children: u.jsx("button", {
                className: "delete-review-button",
                onClick: l,
                children: "Yes (Delete Review) ",
              }),
            }),
            u.jsx("br", {}),
            u.jsx("div", {
              children: u.jsx("button", {
                className: "no-review-button",
                onClick: r,
                children: "No (Keep Review) ",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function N1({ review: e, spotId: t }) {
  var o;
  const n = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    r = new Date(e == null ? void 0 : e.updatedAt),
    l = Lt((i) => i.session.user);
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "reviewitem",
      children: [
        u.jsx("br", {}),
        u.jsx("div", {
          className: "review-user",
          children: (o = e.User) == null ? void 0 : o.firstName,
        }),
        u.jsxs("span", {
          className: "review-date",
          children: [n[r.getMonth()], " ", r.getFullYear()],
        }),
        u.jsx("p", {
          className: "review-body",
          children: e == null ? void 0 : e.review,
        }),
        (l == null ? void 0 : l.id) === e.userId &&
          u.jsx("div", {
            children: u.jsx(Ih, {
              modalComponent: u.jsx(k1, { reviewId: e.id, spotId: t }),
            }),
          }),
        u.jsx("br", {}),
      ],
    }),
  });
}
function xd({ modalComponent: e }) {
  const { setModalContent: t } = Rn(),
    n = () => {
      t(e);
    };
  return u.jsx("div", {
    children: u.jsx("button", {
      className: "post-review-button",
      onClick: n,
      children: "Post Your Review",
    }),
  });
}
function Sd({ spotId: e }) {
  const t = St(),
    [n, r] = y.useState(""),
    [l, o] = y.useState(0),
    [i, a] = y.useState(0),
    [s, c] = y.useState({}),
    d = Lt((x) => x.session.user),
    f = () => n.length < 10 || l === 0,
    { closeModal: h } = Rn(),
    j = (x) => {
      x.preventDefault();
      const w = { userId: d.id, spotId: e, review: n, stars: l };
      return t(S1(w, e))
        .then(() => t(_h(e)))
        .then(() => t(Fi(e)))
        .then(h)
        .catch(async (k) => {
          const m = await k.json();
          m && m.message && c({ message: m.message });
        });
    };
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "review-modal",
      children: [
        u.jsx("h1", { children: "How was your stay?" }),
        s.message && u.jsx("p", { className: "errors", children: s.message }),
        u.jsx("textarea", {
          className: "text-area",
          placeholder: "Leave your review here...",
          value: n,
          onChange: (x) => r(x.target.value),
        }),
        u.jsxs("div", {
          className: "star-area",
          children: [
            u.jsx("span", {
              onMouseEnter: () => a(1),
              onMouseLeave: () => a(0),
              onClick: () => o(1),
              className: "star star1",
              children:
                (i || l) >= 1
                  ? u.jsx("span", { children: "★" })
                  : u.jsx("span", { children: "☆" }),
            }),
            u.jsx("span", {
              onMouseEnter: () => a(2),
              onMouseLeave: () => a(0),
              onClick: () => o(2),
              className: "star star1",
              children:
                (i || l) >= 2
                  ? u.jsx("span", { children: "★" })
                  : u.jsx("span", { children: "☆" }),
            }),
            u.jsx("span", {
              onMouseEnter: () => a(3),
              onMouseLeave: () => a(0),
              onClick: () => o(3),
              className: "star star1",
              children:
                (i || l) >= 3
                  ? u.jsx("span", { children: "★" })
                  : u.jsx("span", { children: "☆" }),
            }),
            u.jsx("span", {
              onMouseEnter: () => a(4),
              onMouseLeave: () => a(0),
              onClick: () => o(4),
              className: "star star1",
              children:
                (i || l) >= 4
                  ? u.jsx("span", { children: "★" })
                  : u.jsx("span", { children: "☆" }),
            }),
            u.jsx("span", {
              onMouseEnter: () => a(5),
              onMouseLeave: () => a(0),
              onClick: () => o(5),
              className: "star star1",
              children:
                (i || l) >= 5
                  ? u.jsx("span", { children: "★" })
                  : u.jsx("span", { children: "☆" }),
            }),
            " Stars",
          ],
        }),
        u.jsx("div", {}),
        u.jsxs("div", {
          className: "buttons-area",
          children: [
            u.jsx("div", {
              children: u.jsx("button", {
                disabled: f(),
                className: "submit-review-button",
                onClick: j,
                children: "Submit Your Review",
              }),
            }),
            u.jsx("br", {}),
          ],
        }),
      ],
    }),
  });
}
function P1() {
  var w, k;
  const { spotId: e } = fh(),
    t = Number(e),
    n = Lt((m) => m.spots.byId[t]),
    r = Lt((m) => m.session.user),
    l = Lt((m) => m.reviews.sortedReviews),
    [o, i] = y.useState(!1),
    a = St(),
    s = [];
  for (const m of Object.values(l)) r && r.id === m.userId && s.push(m);
  let c =
      (n == null ? void 0 : n.SpotImages) &&
      n.SpotImages.filter((m) => m.preview === !1),
    d = n == null ? void 0 : n.previewImage,
    f = (c == null ? void 0 : c.length) >= 1 && c[0].url,
    h = (c == null ? void 0 : c.length) >= 2 && c[1].url,
    j = (c == null ? void 0 : c.length) >= 3 && c[2].url,
    x = (c == null ? void 0 : c.length) >= 4 && c[3].url;
  return (
    y.useEffect(() => {
      a(Fi(t))
        .then(a(_h(t)))
        .then(() => {
          i(!0);
        });
    }, [t, a, o]),
    u.jsx(u.Fragment, {
      children: u.jsxs("div", {
        className: "overallContainer",
        children: [
          u.jsxs("div", {
            className: "spots-area",
            children: [
              u.jsx("h2", { children: n == null ? void 0 : n.name }),
              u.jsxs("h3", {
                children: [
                  n == null ? void 0 : n.city,
                  ", ",
                  n == null ? void 0 : n.state,
                  ", ",
                  n == null ? void 0 : n.country,
                ],
              }),
              u.jsx("br", {}),
              u.jsxs("div", {
                className: "imgContainer",
                children: [
                  u.jsx("img", { className: "previewImage spotImage", src: d }),
                  f && u.jsx("img", { className: "spotImage", src: f }),
                  h && u.jsx("img", { className: "spotImage", src: h }),
                  j && u.jsx("img", { className: "spotImage", src: j }),
                  x && u.jsx("img", { className: "spotImage", src: x }),
                ],
              }),
              u.jsx("br", {}),
              u.jsx("div", {
                className: "spot-details",
                children: u.jsxs("div", {
                  className: "body",
                  children: [
                    u.jsxs("div", {
                      className: "paragraph",
                      children: [
                        u.jsxs("div", {
                          children: [
                            "Hosted by ",
                            (n == null ? void 0 : n.Owner) &&
                              (n == null ? void 0 : n.Owner.firstName),
                            " ",
                            (n == null ? void 0 : n.Owner) &&
                              (n == null ? void 0 : n.Owner.lastName),
                          ],
                        }),
                        u.jsx("p", {
                          children: n == null ? void 0 : n.description,
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "pricing-block",
                      children: [
                        u.jsxs("div", {
                          className: "pricing-grid",
                          children: [
                            u.jsxs("span", {
                              children: [
                                u.jsxs("span", {
                                  className: "price-bold",
                                  children: ["$", n == null ? void 0 : n.price],
                                }),
                                " night",
                              ],
                            }),
                            u.jsx("span", {
                              className: "pricing-stars",
                              children:
                                (n == null ? void 0 : n.avgStarRating) === null
                                  ? u.jsx("div", { children: "★ New" })
                                  : u.jsxs("span", {
                                      children: [
                                        "★ ",
                                        (w =
                                          n == null
                                            ? void 0
                                            : n.avgStarRating) == null
                                          ? void 0
                                          : w.toFixed(1),
                                        " · ",
                                        (n == null ? void 0 : n.numReviews) ===
                                        1
                                          ? u.jsxs("span", {
                                              children: [
                                                n == null
                                                  ? void 0
                                                  : n.numReviews,
                                                " review",
                                              ],
                                            })
                                          : u.jsxs("span", {
                                              children: [
                                                " ",
                                                n == null
                                                  ? void 0
                                                  : n.numReviews,
                                                " reviews",
                                              ],
                                            }),
                                        " ",
                                      ],
                                    }),
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "reserve-area",
                          children: u.jsx("button", {
                            onClick: () => {
                              alert("Feature coming soon");
                            },
                            className: "reserve-button",
                            children: " Reserve",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("div", {
            className: "reviews-area",
            children: [
              u.jsx("hr", {}),
              u.jsx("div", {
                className: "reviews-star",
                children:
                  (n == null ? void 0 : n.avgStarRating) === null
                    ? u.jsx("div", { children: "★ New" })
                    : u.jsxs("span", {
                        children: [
                          "★ ",
                          (k = n == null ? void 0 : n.avgStarRating) == null
                            ? void 0
                            : k.toFixed(1),
                          " · ",
                          (n == null ? void 0 : n.numReviews) === 1
                            ? u.jsxs("span", {
                                children: [
                                  n == null ? void 0 : n.numReviews,
                                  " review",
                                ],
                              })
                            : u.jsxs("span", {
                                children: [
                                  " ",
                                  n == null ? void 0 : n.numReviews,
                                  " reviews",
                                ],
                              }),
                          " ",
                        ],
                      }),
              }),
              u.jsx("br", {}),
              u.jsxs("div", {
                className: "post-review-area",
                children: [
                  r &&
                    r.id !== (n == null ? void 0 : n.ownerId) &&
                    s.length === 0 &&
                    l.length === 0 &&
                    u.jsxs("div", {
                      className: "post-review-child",
                      children: [
                        u.jsx(xd, {
                          modalComponent: u.jsx(Sd, {
                            className: "post-review-modal",
                            spotId: t,
                          }),
                        }),
                        u.jsx("br", {}),
                        "Be the first to post a review!",
                      ],
                    }),
                  r &&
                    r.id !== (n == null ? void 0 : n.ownerId) &&
                    s.length === 0 &&
                    l.length !== 0 &&
                    u.jsxs("div", {
                      children: [
                        u.jsx(xd, {
                          modalComponent: u.jsx(Sd, {
                            className: "post-review-modal",
                            spotId: t,
                          }),
                        }),
                        u.jsx("br", {}),
                      ],
                    }),
                ],
              }),
              u.jsx("div", {
                className: "reviewscontainer",
                children:
                  l &&
                  Object.values(l).map((m) =>
                    u.jsx(
                      "div",
                      {
                        children: u.jsx(
                          N1,
                          { className: "reviewItem", review: m, spotId: t },
                          `review-${m.id}`,
                        ),
                      },
                      `${m.id}`,
                    ),
                  ),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const R1 = () => {
  const e = St(),
    t = Tr(),
    n = Lt((U) => U.session.user),
    [r, l] = y.useState(""),
    [o, i] = y.useState(""),
    [a, s] = y.useState(""),
    [c, d] = y.useState(""),
    [f, h] = y.useState(""),
    [j, x] = y.useState(""),
    [w, k] = y.useState(""),
    [m, p] = y.useState(""),
    [v, E] = y.useState(""),
    [R, T] = y.useState(""),
    [g, _] = y.useState(""),
    [D, M] = y.useState(""),
    [b, ne] = y.useState(""),
    [J, ae] = y.useState(""),
    [re, se] = y.useState(!1),
    [K, P] = y.useState({}),
    B = (U) => l(U.target.value),
    W = (U) => i(U.target.value),
    ee = (U) => s(U.target.value),
    te = (U) => d(U.target.value),
    He = (U) => h(U.target.value),
    _e = (U) => x(U.target.value),
    Ie = (U) => k(U.target.value),
    Ee = (U) => p(U.target.value),
    Ue = (U) => E(U.target.value),
    Ln = (U) => T(U.target.value),
    Mr = (U) => _(U.target.value),
    Or = (U) => M(U.target.value),
    Dr = (U) => ne(U.target.value),
    Te = (U) => ae(U.target.value);
  if (
    (y.useEffect(() => {
      const U = {};
      r || (U.country = "Country is required"),
        o || (U.address = "Address is required"),
        a || (U.city = "City is required"),
        c || (U.state = "State is required"),
        f || (U.lat = "Latitude is required"),
        j || (U.lng = "Longitude is required"),
        (!w || (w && w.length < 30)) &&
          (U.description =
            "Description needs a minimum length of 30 characters"),
        m || (U.name = "Name is required"),
        v || (U.price = "Price is required"),
        R || (U.previewImg = "Preview image is required"),
        g &&
          !g.endsWith(".png") &&
          !g.endsWith(".jpg") &&
          !g.endsWith(".jpeg") &&
          (U.spotImg1 = "Image URL must end in .png, .jpg, or .jpeg"),
        D &&
          !D.endsWith(".png") &&
          !D.endsWith(".jpg") &&
          !D.endsWith(".jpeg") &&
          (U.spotImg2 = "Image URL must end in .png, .jpg, or .jpeg"),
        b &&
          !b.endsWith(".png") &&
          !b.endsWith(".jpg") &&
          !g.endsWith(".jpeg") &&
          (U.spotImg3 = "Image URL must end in .png, .jpg, or .jpeg"),
        J &&
          !J.endsWith(".png") &&
          !J.endsWith(".jpg") &&
          !J.endsWith(".jpeg") &&
          (U.spotImg4 = "Image URL must end in .png, .jpg, or .jpeg"),
        P(U);
    }, [r, o, a, c, f, j, w, m, v, R, g, D, b, J]),
    n)
  ) {
    const { id: U } = n,
      O = async (Ft) => {
        if ((Ft.preventDefault(), se(!0), Object.values(K).length)) return;
        const rt = {
          ownerId: U,
          country: r,
          address: o,
          city: a,
          state: c,
          lat: Number(f),
          lng: Number(j),
          description: w,
          name: m,
          price: Number(v),
        };
        let qt = await e(a1(rt));
        if (qt) {
          const _n = qt.id;
          e(u1({ spotId: _n, url: R, preview: !0 }))
            .then(() => {
              let en = [g, D, b, J];
              for (const Al of en)
                Al.length !== 0 && e(c1({ spotId: _n, url: Al, preview: !1 }));
            })
            .then(() => {
              t(`/spots/${_n}`);
            });
        }
        se(!1),
          l(""),
          i(""),
          s(""),
          d(""),
          h(""),
          x(""),
          k(""),
          p(""),
          E(""),
          T(""),
          _(""),
          M(""),
          ne(""),
          ae("");
      };
    return u.jsx("section", {
      className: "form-container",
      children: u.jsxs("form", {
        className: "create-spots-form",
        onSubmit: O,
        children: [
          u.jsx("h2", { children: "Create a new Spot" }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Where's your place located?" }),
              u.jsx("p", {
                children:
                  "Guests will only get your exact address once they book a reservation.",
              }),
              "Country",
              u.jsx("input", {
                type: "country",
                className: "input-box",
                placeholder: "Country",
                value: r,
                onChange: B,
              }),
            ],
          }),
          re === !0 &&
            K.country &&
            u.jsx("div", { className: "errors", children: K.country }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              "Street Address",
              u.jsx("br", {}),
              u.jsx("input", {
                type: "address",
                className: "input-box",
                placeholder: "Address",
                value: o,
                onChange: W,
              }),
            ],
          }),
          re === !0 &&
            K.address &&
            u.jsx("div", { className: "errors", children: K.address }),
          u.jsx("br", {}),
          u.jsxs("div", {
            className: "state-area",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsxs("label", {
                    className: "city-label",
                    children: [
                      "City",
                      u.jsx("input", {
                        type: "city",
                        className: "input-box city",
                        placeholder: "City",
                        value: a,
                        onChange: ee,
                      }),
                    ],
                  }),
                  re === !0 &&
                    K.city &&
                    u.jsx("div", { className: "errors", children: K.city }),
                  u.jsx("br", {}),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsxs("label", {
                    children: [
                      "State",
                      u.jsx("input", {
                        type: "city",
                        className: "input-box state",
                        placeholder: "STATE",
                        value: c,
                        onChange: te,
                      }),
                    ],
                  }),
                  re === !0 &&
                    K.state &&
                    u.jsx("div", { className: "errors", children: K.state }),
                ],
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("div", {
            className: "lat-lng-area",
            children: [
              u.jsxs("label", {
                children: [
                  "Latitude",
                  u.jsx("input", {
                    type: "latitude",
                    className: "input-box lat",
                    placeholder: "Latitude",
                    value: f,
                    onChange: He,
                  }),
                ],
              }),
              re === !0 &&
                K.lat &&
                u.jsx("div", { className: "errors", children: K.lat }),
              u.jsx("br", {}),
              u.jsxs("label", {
                children: [
                  "Longitude",
                  u.jsx("input", {
                    type: "longitude",
                    className: "input-box lng",
                    placeholder: "Longitude",
                    value: j,
                    onChange: _e,
                  }),
                ],
              }),
              u.jsx("span", {}),
              re === !0 &&
                K.lng &&
                u.jsxs("div", { className: "errors", children: [" ", K.lng] }),
            ],
          }),
          u.jsx("br", {}),
          u.jsx("hr", { className: "create-form" }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Describe your place to guests" }),
              u.jsx("p", {
                children:
                  "Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.",
              }),
              u.jsx("textarea", {
                placeholder: "Please write at least 30 characters",
                className: "description-box",
                value: w,
                onChange: Ie,
              }),
            ],
          }),
          re === !0 &&
            K.description &&
            u.jsx("span", { className: "errors", children: K.description }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Create a title for your spot" }),
              u.jsx("p", {
                children:
                  "Catch guests' attention with a spot title that highlights what makes your place special.",
              }),
              u.jsx("input", {
                type: "text",
                placeholder: "Name of your spot",
                className: "input-box",
                value: m,
                onChange: Ee,
              }),
            ],
          }),
          u.jsx("br", {}),
          re === !0 &&
            K.name &&
            u.jsx("div", { className: "errors", children: K.name }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Set a base price for your spot" }),
              u.jsx("p", {
                children:
                  "Competitive pricing can help your listing stand out and rank higher in search results",
              }),
              "$ ",
              u.jsx("input", {
                type: "text",
                className: "price-input-box",
                placeholder: "Price per night (USD)",
                value: v,
                onChange: Ue,
              }),
            ],
          }),
          u.jsx("br", {}),
          re === !0 &&
            K.price &&
            u.jsx("span", { className: "errors", children: K.price }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Liven up your spot with photos" }),
              u.jsx("p", {
                children:
                  "Submit a link to at least one photo to publish your spot.",
              }),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Preview Image URL",
                value: R,
                onChange: Ln,
              }),
              re === !0 &&
                K.previewImg &&
                u.jsx("div", { className: "errors", children: K.previewImg }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: g,
                onChange: Mr,
              }),
              re === !0 &&
                K.spotImg1 &&
                u.jsx("span", { className: "errors", children: K.spotImg1 }),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: D,
                onChange: Or,
              }),
              re === !0 &&
                K.spotImg2 &&
                u.jsx("span", { className: "errors", children: K.spotImg2 }),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: b,
                onChange: Dr,
              }),
              re === !0 &&
                K.spotImg13 &&
                u.jsx("span", { className: "errors", children: K.spotImg3 }),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: J,
                onChange: Te,
              }),
              re === !0 &&
                K.spotImg4 &&
                u.jsx("span", { className: "errors", children: K.spotImg4 }),
            ],
          }),
          u.jsx("div", {
            className: "input-container",
            children: u.jsx("button", {
              onClick: O,
              className: "create-spot-button",
              type: "submit",
              children: "Create Spot",
            }),
          }),
        ],
      }),
    });
  } else t("/");
};
function L1({ spotId: e }) {
  const t = St(),
    { closeModal: n } = Rn(),
    r = (l) => (l.preventDefault(), t(d1(e)).then(n));
  return u.jsx(u.Fragment, {
    children: u.jsxs("div", {
      className: "delete-modal",
      children: [
        u.jsx("h1", { children: "Confirm Delete" }),
        u.jsx("h3", {
          children:
            "Are you sure you want to remove this spot from the listings?",
        }),
        u.jsxs("div", {
          className: "buttons",
          children: [
            u.jsx("div", {
              children: u.jsx("button", {
                className: "delete-post-button",
                onClick: r,
                children: "Yes (Delete Spot) ",
              }),
            }),
            u.jsx("br", {}),
            u.jsx("div", {
              children: u.jsx("button", {
                className: "no-post-button",
                onClick: n,
                children: "No (Keep Spot) ",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function _1() {
  const e = St(),
    t = Tr(),
    n = Lt((a) => a.session.user),
    r = Lt((a) => a.spots.byId),
    l = [];
  n || t("/");
  for (const a of Object.values(r)) n && n.id === a.ownerId && l.push(a);
  const [o, i] = y.useState(!1);
  return (
    y.useEffect(() => {
      e(Nh()).then(() => {
        i(!0);
      });
    }, [o, e]),
    u.jsx(u.Fragment, {
      children: u.jsxs("div", {
        children: [
          u.jsx("div", {
            className: "header",
            children: u.jsx("h2", { children: "Manage Spots" }),
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsxs("div", {
            className: "spotscontainer",
            children: [
              l.length === 0 &&
                u.jsxs("div", {
                  children: [
                    "No Spots Currently Owned! ",
                    u.jsx("div", {
                      children: u.jsx("button", {
                        onClick: () => {
                          t("/spots/new");
                        },
                        className: "create-spots-button",
                        children: "Create a New Spot",
                      }),
                    }),
                  ],
                }),
              Object.values(l).map((a) =>
                u.jsx(u.Fragment, {
                  children: u.jsxs("div", {
                    children: [
                      u.jsx(
                        Ph,
                        {
                          onClick: () => {
                            t(`/spots/${a.id}`);
                          },
                          spot: a,
                        },
                        `${a.id}`,
                      ),
                      u.jsx("div", {
                        className: "buttons-area",
                        children: u.jsxs("span", {
                          children: [
                            u.jsx(
                              "button",
                              {
                                className: "update-button",
                                onClick: () => {
                                  t(`/spots/${a.id}/edit`);
                                },
                                children: "Update",
                              },
                              `update-${a.id}`,
                            ),
                            u.jsx(Ih, {
                              className: "delete-button",
                              modalComponent: u.jsx(L1, { spotId: a.id }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ),
            ],
          }),
        ],
      }),
    })
  );
}
const I1 = () => {
  const e = St(),
    t = Tr(),
    n = Lt((O) => O.session.user),
    { id: r } = fh(),
    [l, o] = y.useState(""),
    [i, a] = y.useState(""),
    [s, c] = y.useState(""),
    [d, f] = y.useState(""),
    [h, j] = y.useState(""),
    [x, w] = y.useState(""),
    [k, m] = y.useState(""),
    [p, v] = y.useState(""),
    [E, R] = y.useState(""),
    [T, g] = y.useState(""),
    [_, D] = y.useState(""),
    [M, b] = y.useState(""),
    [ne, J] = y.useState(""),
    [ae, re] = y.useState(""),
    [se, K] = y.useState(!1),
    [P, B] = y.useState({}),
    W = (O) => o(O.target.value),
    ee = (O) => a(O.target.value),
    te = (O) => c(O.target.value),
    He = (O) => f(O.target.value),
    _e = (O) => j(O.target.value),
    Ie = (O) => w(O.target.value),
    Ee = (O) => m(O.target.value),
    Ue = (O) => v(O.target.value),
    Ln = (O) => R(O.target.value),
    Mr = (O) => g(O.target.value),
    Or = (O) => D(O.target.value),
    Dr = (O) => b(O.target.value),
    Te = (O) => J(O.target.value),
    U = (O) => re(O.target.value);
  if (
    (y.useEffect(() => {
      e(Fi(r)).then((O) => {
        let Ft = [];
        if (O.SpotImages.length !== 0)
          for (const en of O.SpotImages)
            en.preview === !0
              ? (O.previewImage = en.url)
              : en.preview === !1 && Ft.push(en.url);
        let [rt, qt, _n, Ul] = Ft;
        o(O.country),
          a(O.address),
          c(O.city),
          f(O.state),
          j(O.lat),
          w(O.lng),
          m(O.description),
          R(O.price),
          v(O.name),
          g(O.previewImage),
          D(rt),
          b(qt),
          J(_n),
          re(Ul);
      });
    }, [e, r]),
    y.useEffect(() => {
      const O = {};
      l || (O.country = "Country is required"),
        i || (O.address = "Address is required"),
        s || (O.city = "City is required"),
        d || (O.state = "State is required"),
        h || (O.lat = "Latitude is required"),
        x || (O.lng = "Longitude is required"),
        (!k || (k && k.length < 30)) &&
          (O.description =
            "Description needs a minimum length of 30 characters"),
        p || (O.name = "Name is required"),
        E || (O.price = "Price is required"),
        T || (O.previewImg = "Preview image is required"),
        _ &&
          !_.endsWith(".png") &&
          !_.endsWith(".jpg") &&
          !_.endsWith(".jpeg") &&
          (O.spotImg1 = "Image URL must end in .png, .jpg, or .jpeg"),
        M &&
          !M.endsWith(".png") &&
          !M.endsWith(".jpg") &&
          !M.endsWith(".jpeg") &&
          (O.spotImg2 = "Image URL must end in .png, .jpg, or .jpeg"),
        ne &&
          !ne.endsWith(".png") &&
          !ne.endsWith(".jpg") &&
          !_.endsWith(".jpeg") &&
          (O.spotImg3 = "Image URL must end in .png, .jpg, or .jpeg"),
        ae &&
          !ae.endsWith(".png") &&
          !ae.endsWith(".jpg") &&
          !ae.endsWith(".jpeg") &&
          (O.spotImg4 = "Image URL must end in .png, .jpg, or .jpeg"),
        B(O);
    }, [l, i, s, d, h, x, k, p, E, T, _, M, ne, ae]),
    n)
  ) {
    const O = n.id,
      Ft = async (rt) => {
        if ((rt.preventDefault(), K(!0), Object.values(P).length)) return;
        const qt = {
          ownerId: O,
          country: l,
          address: i,
          city: s,
          state: d,
          lat: Number(h),
          lng: Number(x),
          description: k,
          name: p,
          price: Number(E),
        };
        await e(s1(qt, r)).then(() => {
          t(`/spots/${r}`);
        }),
          K(!1);
      };
    return u.jsx("section", {
      className: "form-container",
      children: u.jsxs("form", {
        className: "create-spots-form",
        onSubmit: Ft,
        children: [
          u.jsx("h2", { children: "Update your Spot" }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Where's your place located?" }),
              u.jsx("p", {
                children:
                  "Guests will only get your exact address once they book a reservation.",
              }),
              "Country ",
              se === !0 &&
                P.country &&
                u.jsx("span", { className: "errors", children: P.country }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "country",
                className: "input-box",
                placeholder: "Country",
                value: l,
                onChange: W,
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              "Street Address ",
              se === !0 &&
                P.address &&
                u.jsx("span", { className: "errors", children: P.address }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "address",
                className: "input-box",
                placeholder: "Address",
                value: i,
                onChange: ee,
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              "City ",
              se === !0 &&
                P.city &&
                u.jsx("span", { className: "errors", children: P.city }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "city",
                className: "input-box",
                placeholder: "City",
                value: s,
                onChange: te,
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              "State",
              se === !0 &&
                P.state &&
                u.jsx("span", { className: "errors", children: P.state }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "city",
                className: "input-box",
                placeholder: "STATE",
                value: d,
                onChange: He,
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              "Latitude ",
              se === !0 &&
                P.lat &&
                u.jsx("span", { className: "errors", children: P.lat }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "latitude",
                className: "input-box",
                placeholder: "Latitude",
                value: h,
                onChange: _e,
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              "Longitude ",
              se === !0 &&
                P.lng &&
                u.jsxs("span", { className: "errors", children: [" ", P.lng] }),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "longitude",
                className: "input-box",
                placeholder: "Longitude",
                value: x,
                onChange: Ie,
              }),
            ],
          }),
          u.jsx("br", {}),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Describe your place to guests" }),
              u.jsx("p", {
                children:
                  "Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.",
              }),
              u.jsx("textarea", {
                placeholder: "Description",
                className: "description-box",
                value: k,
                onChange: Ee,
              }),
            ],
          }),
          se === !0 &&
            P.description &&
            u.jsx("span", { className: "errors", children: P.description }),
          u.jsxs("label", {
            children: [
              u.jsx("h2", { children: "Create a title for your spot" }),
              u.jsx("p", {
                children:
                  "Catch guests' attention with a spot title that highlights what makes your place special.",
              }),
              u.jsx("input", {
                type: "text",
                placeholder: "Name of your spot",
                className: "input-box",
                value: p,
                onChange: Ue,
              }),
            ],
          }),
          u.jsx("br", {}),
          se === !0 &&
            P.name &&
            u.jsx("span", { className: "errors", children: P.name }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Set a base price for your spot" }),
              u.jsx("p", {
                children:
                  "Competitive pricing can help your listing stand out and rank higher in search results",
              }),
              "$ ",
              u.jsx("input", {
                type: "text",
                className: "price-input-box",
                placeholder: "Price per night (USD)",
                value: E,
                onChange: Ln,
              }),
            ],
          }),
          u.jsx("br", {}),
          se === !0 &&
            P.price &&
            u.jsx("span", { className: "errors", children: P.price }),
          u.jsxs("label", {
            children: [
              u.jsx("h3", { children: "Liven up your spot with photos" }),
              u.jsx("p", {
                children:
                  "Submit a link to at least one photo to publish your spot.",
              }),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Preview Image URL",
                value: T,
                onChange: Mr,
              }),
              se === !0 &&
                P.previewImg &&
                u.jsx("span", { className: "errors", children: P.previewImg }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: _,
                onChange: Or,
              }),
              se === !0 &&
                P.spotImg1 &&
                u.jsx("span", { className: "errors", children: P.spotImg1 }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: M,
                onChange: Dr,
              }),
              se === !0 &&
                P.spotImg2 &&
                u.jsx("span", { className: "errors", children: P.spotImg2 }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: ne,
                onChange: Te,
              }),
              se === !0 &&
                P.spotImg13 &&
                u.jsx("span", { className: "errors", children: P.spotImg3 }),
              u.jsx("br", {}),
              u.jsx("br", {}),
              u.jsx("input", {
                type: "text",
                className: "input-box",
                placeholder: "Image URL",
                value: ae,
                onChange: U,
              }),
              se === !0 &&
                P.spotImg4 &&
                u.jsx("span", { className: "errors", children: P.spotImg4 }),
            ],
          }),
          u.jsx("br", {}),
          u.jsx("br", {}),
          u.jsx("div", {
            className: "input-container",
            children: u.jsx("button", {
              onClick: Ft,
              className: "update-spot-button",
              type: "submit",
              children: "Update your Spot",
            }),
          }),
        ],
      }),
    });
  } else t("/");
};
function T1() {
  const e = St(),
    [t, n] = y.useState(!1);
  return (
    y.useEffect(() => {
      e(B0()).then(() => {
        n(!0);
      });
    }, [e]),
    u.jsxs(u.Fragment, {
      children: [u.jsx(v1, { isLoaded: t }), t && u.jsx(h0, {})],
    })
  );
}
const M1 = j0([
  {
    element: u.jsx(T1, {}),
    children: [
      { path: "/", element: u.jsx(g1, {}) },
      { path: "spots/:spotId", element: u.jsx(P1, {}) },
      { path: "spots/new", element: u.jsx(R1, {}) },
      { path: "spots/current", element: u.jsx(_1, {}) },
      { path: "spots/:id/edit", element: u.jsx(I1, {}) },
    ],
  },
]);
function O1() {
  return u.jsx(_0, { router: M1 });
}
function _l(e) {
  "@babel/helpers - typeof";
  return (
    (_l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _l(e)
  );
}
function D1(e, t) {
  if (_l(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (_l(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z1(e) {
  var t = D1(e, "string");
  return _l(t) === "symbol" ? t : String(t);
}
function F1(e, t, n) {
  return (
    (t = z1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jd(Object(n), !0).forEach(function (r) {
          F1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jd(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function We(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Cd = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  va = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Xo = {
    INIT: "@@redux/INIT" + va(),
    REPLACE: "@@redux/REPLACE" + va(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + va();
    },
  };
function $1(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Th(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(We(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(We(1));
    return n(Th)(e, t);
  }
  if (typeof e != "function") throw new Error(We(2));
  var l = e,
    o = t,
    i = [],
    a = i,
    s = !1;
  function c() {
    a === i && (a = i.slice());
  }
  function d() {
    if (s) throw new Error(We(3));
    return o;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(We(4));
    if (s) throw new Error(We(5));
    var k = !0;
    return (
      c(),
      a.push(w),
      function () {
        if (k) {
          if (s) throw new Error(We(6));
          (k = !1), c();
          var p = a.indexOf(w);
          a.splice(p, 1), (i = null);
        }
      }
    );
  }
  function h(w) {
    if (!$1(w)) throw new Error(We(7));
    if (typeof w.type > "u") throw new Error(We(8));
    if (s) throw new Error(We(9));
    try {
      (s = !0), (o = l(o, w));
    } finally {
      s = !1;
    }
    for (var k = (i = a), m = 0; m < k.length; m++) {
      var p = k[m];
      p();
    }
    return w;
  }
  function j(w) {
    if (typeof w != "function") throw new Error(We(10));
    (l = w), h({ type: Xo.REPLACE });
  }
  function x() {
    var w,
      k = f;
    return (
      (w = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(We(11));
          function v() {
            p.next && p.next(d());
          }
          v();
          var E = k(v);
          return { unsubscribe: E };
        },
      }),
      (w[Cd] = function () {
        return this;
      }),
      w
    );
  }
  return (
    h({ type: Xo.INIT }),
    (r = { dispatch: h, subscribe: f, getState: d, replaceReducer: j }),
    (r[Cd] = x),
    r
  );
}
function U1(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Xo.INIT });
    if (typeof r > "u") throw new Error(We(12));
    if (typeof n(void 0, { type: Xo.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(We(13));
  });
}
function A1(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    U1(n);
  } catch (a) {
    i = a;
  }
  return function (s, c) {
    if ((s === void 0 && (s = {}), i)) throw i;
    for (var d = !1, f = {}, h = 0; h < o.length; h++) {
      var j = o[h],
        x = n[j],
        w = s[j],
        k = x(w, c);
      if (typeof k > "u") throw (c && c.type, new Error(We(14)));
      (f[j] = k), (d = d || k !== w);
    }
    return (d = d || o.length !== Object.keys(s).length), d ? f : s;
  };
}
function B1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (r, l) {
          return function () {
            return r(l.apply(void 0, arguments));
          };
        });
}
function W1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        o = function () {
          throw new Error(We(15));
        },
        i = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        a = t.map(function (s) {
          return s(i);
        });
      return (
        (o = B1.apply(void 0, a)(l.dispatch)),
        Ed(Ed({}, l), {}, { dispatch: o })
      );
    };
  };
}
function Mh(e) {
  var t = function (r) {
    var l = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (a) {
        return typeof a == "function" ? a(l, o, e) : i(a);
      };
    };
  };
  return t;
}
var Oh = Mh();
Oh.withExtraArgument = Mh;
const b1 = Oh,
  V1 = A1({ session: H0, spots: p1, reviews: C1 });
let Dh;
Dh = W1(b1);
const H1 = (e) => Th(V1, e, Dh),
  Q1 = H1();
ga.createRoot(document.getElementById("root")).render(
  u.jsx(Wt.StrictMode, {
    children: u.jsx(t1, {
      children: u.jsxs(ty, {
        store: Q1,
        children: [u.jsx(O1, {}), u.jsx(n1, {})],
      }),
    }),
  }),
);
