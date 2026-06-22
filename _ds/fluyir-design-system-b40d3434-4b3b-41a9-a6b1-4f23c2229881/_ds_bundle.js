/* @ds-bundle: {"format":3,"namespace":"FluyirDesignSystem_b40d34","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"ScriptQuote","sourcePath":"components/core/ScriptQuote.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"0e54fda5baf1","components/core/Badge.jsx":"5899e54b127a","components/core/Button.jsx":"4ecfe6181f3f","components/core/Card.jsx":"2dbd93521bf1","components/core/Input.jsx":"33decc25a823","components/core/Logo.jsx":"2449be1b3667","components/core/ScriptQuote.jsx":"73616d7b5d82","components/core/Tag.jsx":"387350c0c268","components/core/Textarea.jsx":"aa0be935e26f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FluyirDesignSystem_b40d34 = window.FluyirDesignSystem_b40d34 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir Avatar — round, calm. Falls back to initials on the turquoise
 * surface when no image is supplied.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  style = {},
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-alt)',
      border: '1px solid var(--border-strong)',
      color: 'var(--cream-200)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.36,
      letterSpacing: '0.02em',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir Badge — small status marker. Brand uses these for product
 * lifecycle states ("en construcción", "proyección", "disponible").
 */
function Badge({
  children,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--text-muted)',
      background: 'var(--cream-a08)',
      border: 'var(--border-strong)'
    },
    accent: {
      color: 'var(--turquoise-soft, #5F968A)',
      background: 'rgba(80,128,117,0.14)',
      border: 'rgba(80,128,117,0.34)'
    },
    available: {
      color: 'var(--positive)',
      background: 'rgba(127,169,138,0.12)',
      border: 'rgba(127,169,138,0.34)'
    },
    building: {
      color: 'var(--glow)',
      background: 'rgba(230,196,154,0.12)',
      border: 'rgba(230,196,154,0.30)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: t.color,
      background: t.background,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir Button — calm, deliberate. Primary uses the warm ember accent
 * on night; secondary is a cream hairline outline; ghost is text-only.
 * Nothing bounces — transitions are slow and water-like.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'var(--text-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-flow), color var(--dur-base) var(--ease-flow), border-color var(--dur-base) var(--ease-flow), transform var(--dur-fast) var(--ease-flow)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-hover)';
    if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--cream-a40)';
    if (variant === 'ghost') e.currentTarget.style.color = 'var(--text)';
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.borderColor = variant === 'secondary' ? 'var(--border-strong)' : 'transparent';
    e.currentTarget.style.color = variants[variant].color;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: base,
    disabled: disabled,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir Card — a calm container on a slightly raised surface.
 * `tone="turquoise"` swaps to the deep-turquoise surface for the
 * organic/natural register. `interactive` adds a quiet lift on hover.
 */
function Card({
  children,
  tone = 'night',
  interactive = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surfaces = {
    night: 'var(--surface)',
    turquoise: 'var(--surface-alt)',
    deep: 'var(--bg-deep)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: surfaces[tone] || surfaces.night,
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-flow), box-shadow var(--dur-base) var(--ease-flow)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir text input. Quiet field on a near-invisible surface, with a
 * hairline that warms to ember on focus. Label + optional hint.
 */
function Input({
  label,
  hint,
  type = 'text',
  invalid = false,
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `fl-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-muted)',
      letterSpacing: '0.01em'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text)',
      background: 'var(--cream-a08)',
      border: `1px solid ${invalid ? 'var(--critical)' : focused ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-flow), background var(--dur-base) var(--ease-flow)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--critical)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir Logo lockup. Renders the wordmark "fluyir" (or the isotype "f")
 * in the brand script, fully recolorable and scalable for UI use.
 *
 * NOTE: the canonical logo is the supplied PNG (Amsterdam Four). This
 * component renders the same brand script (self-hosted Amsterdam Four),
 * recolorable and scalable. For hero / print, prefer the PNG asset.
 */
function Logo({
  variant = 'wordmark',
  color = 'var(--cream)',
  size = 40,
  style = {},
  ...rest
}) {
  const isIso = variant === 'iso';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": "fluyir",
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1,
      color,
      letterSpacing: '0.01em',
      ...style
    }
  }, rest), isIso ? 'f' : 'fluyir');
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/ScriptQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir ScriptQuote — the signature "frase destacada". A featured
 * phrase set in the brand script, large and calm, with an optional
 * cream attribution. This is the brand's most recognizable text moment.
 */
function ScriptQuote({
  children,
  attribution,
  align = 'left',
  size = 'var(--text-3xl)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: size,
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text)',
      textWrap: 'balance'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--accent-quiet)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { ScriptQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScriptQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir Tag — topic / category chip (e.g. "sombra", "escritura",
 * "numerología"). Optionally selectable. Quieter than Badge.
 */
function Tag({
  children,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  const clickable = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: selected ? 'var(--night)' : 'var(--text-muted)',
      background: selected ? 'var(--cream-200)' : 'transparent',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-flow)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fluyir textarea — the writing surface (journaling / escritura catártica).
 * Roomy line-height, calm field, ember focus hairline.
 */
function Textarea({
  label,
  hint,
  rows = 5,
  invalid = false,
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `fl-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text)',
      background: 'var(--cream-a08)',
      border: `1px solid ${invalid ? 'var(--critical)' : focused ? 'var(--accent)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      resize: 'vertical',
      transition: 'border-color var(--dur-base) var(--ease-flow)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--critical)' : 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ScriptQuote = __ds_scope.ScriptQuote;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
