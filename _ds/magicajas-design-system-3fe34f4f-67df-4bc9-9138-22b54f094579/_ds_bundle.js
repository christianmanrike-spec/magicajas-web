/* @ds-bundle: {"format":4,"namespace":"MagiCajasDesignSystem_3fe34f","components":[{"name":"ColorTab","sourcePath":"components/brand/ColorTab.jsx"},{"name":"FoldFrame","sourcePath":"components/brand/FoldFrame.jsx"},{"name":"FoldLine","sourcePath":"components/brand/FoldLine.jsx"},{"name":"FoldPattern","sourcePath":"components/brand/FoldPattern.jsx"},{"name":"ModularCard","sourcePath":"components/brand/ModularCard.jsx"},{"name":"SpecTag","sourcePath":"components/brand/SpecTag.jsx"},{"name":"StepSequence","sourcePath":"components/brand/StepSequence.jsx"},{"name":"StructuralArrow","sourcePath":"components/brand/StructuralArrow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/ColorTab.jsx":"86518efca29f","components/brand/FoldFrame.jsx":"e0b148fb815d","components/brand/FoldLine.jsx":"7fd670985c4b","components/brand/FoldPattern.jsx":"f693ef7c5dda","components/brand/ModularCard.jsx":"a3535c9607de","components/brand/SpecTag.jsx":"1f03160661f6","components/brand/StepSequence.jsx":"5ab9915a96e9","components/brand/StructuralArrow.jsx":"530238fe5191","components/core/Badge.jsx":"120a0a10c4ed","components/core/Button.jsx":"cacbc3ffeee8","components/core/Icon.jsx":"72661c07d1ae","components/forms/Checkbox.jsx":"22f73a73a92f","components/forms/Input.jsx":"5e6f5f8ce039","components/forms/Select.jsx":"79e750b60f01","components/forms/Switch.jsx":"d13b2b8d0a5f","ui_kits/website/CatalogScreen.jsx":"668e871fd47f","ui_kits/website/Footer.jsx":"ccb9addce799","ui_kits/website/Header.jsx":"18656f43c2db","ui_kits/website/HomeScreen.jsx":"089caa7bc561","ui_kits/website/ProductScreen.jsx":"8c747a7db666","ui_kits/website/QuoteScreen.jsx":"ce28637181a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MagiCajasDesignSystem_3fe34f = window.MagiCajasDesignSystem_3fe34f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ColorTab.jsx
try { (() => {
const tones = {
  orange: {
    bg: 'var(--mc-orange)',
    fg: '#fff'
  },
  yellow: {
    bg: 'var(--mc-yellow)',
    fg: 'var(--mc-purple)'
  },
  fuchsia: {
    bg: 'var(--mc-fuchsia)',
    fg: '#fff'
  },
  kraft: {
    bg: 'var(--mc-kraft)',
    fg: 'var(--mc-purple)'
  },
  purple: {
    bg: 'var(--mc-purple)',
    fg: 'var(--mc-cream)'
  }
};
const clips = {
  right: 'polygon(0 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%)',
  left: 'polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)',
  bottom: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), 50% 100%, 0 calc(100% - 10px))',
  none: 'none'
};

/** Pestaña de color: señalador, etiqueta, fondo de precio, número de paso. Parece salir de un marco. */
function ColorTab({
  children,
  tone = 'orange',
  notch = 'right',
  size = 'md',
  style,
  ...rest
}) {
  const t = tones[tone];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: size === 'sm' ? '5px 16px 5px 10px' : '8px 22px 8px 14px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size === 'sm' ? '12px' : '14px',
      letterSpacing: '0.01em',
      lineHeight: 1.3,
      clipPath: clips[notch],
      borderRadius: 'var(--radius-xs)',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { ColorTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ColorTab.jsx", error: String((e && e.message) || e) }); }

// components/brand/FoldFrame.jsx
try { (() => {
/** Marco plegado para fotografías: rectángulo con una esquina doblada y, opcionalmente, un bloque kraft detrás. */
function FoldFrame({
  src,
  alt = '',
  children,
  corner = 'top-right',
  frame = 'purple',
  backing = true,
  ratio = '4 / 3',
  foldSize = 36,
  style,
  ...rest
}) {
  const clips = {
    'top-right': 'polygon(0 0, calc(100% - ' + foldSize + 'px) 0, 100% ' + foldSize + 'px, 100% 100%, 0 100%)',
    'bottom-right': 'polygon(0 0, 100% 0, 100% calc(100% - ' + foldSize + 'px), calc(100% - ' + foldSize + 'px) 100%, 0 100%)',
    'bottom-left': 'polygon(0 0, 100% 0, 100% 100%, ' + foldSize + 'px 100%, 0 calc(100% - ' + foldSize + 'px))',
    'top-left': 'polygon(' + foldSize + 'px 0, 100% 0, 100% 100%, 0 100%, 0 ' + foldSize + 'px)'
  };
  const frames = {
    purple: 'var(--mc-purple)',
    orange: 'var(--mc-orange)',
    kraft: 'var(--mc-kraft-600)',
    none: 'transparent'
  };
  return React.createElement('div', {
    style: {
      position: 'relative',
      ...style
    },
    ...rest
  }, backing ? React.createElement('div', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: '14px -14px -14px 14px',
      background: 'var(--surface-kraft)',
      borderRadius: 'var(--radius-sm)'
    }
  }) : null, React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      clipPath: clips[corner],
      boxShadow: frame === 'none' ? 'none' : 'inset 0 0 0 3px ' + frames[frame]
    }
  }, src ? React.createElement('img', {
    src,
    alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : children || null), React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: foldSize + 'px',
      height: foldSize + 'px',
      background: 'var(--mc-kraft)',
      clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
      display: corner === 'top-right' ? 'block' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { FoldFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FoldFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/FoldLine.jsx
try { (() => {
/** Línea de pliegue / troquel. Continua = división; segmentada = doblez, recorrido o transformación. */
function FoldLine({
  variant = 'dashed',
  orientation = 'horizontal',
  color = 'var(--border-die-cut)',
  thickness = 2,
  length = '100%',
  style,
  ...rest
}) {
  const v = orientation === 'vertical';
  const border = variant === 'dashed' ? 'dashed' : variant === 'dotted' ? 'dotted' : 'solid';
  return React.createElement('div', {
    'aria-hidden': true,
    style: {
      width: v ? 0 : length,
      height: v ? length : 0,
      flex: 'none',
      borderTop: v ? 'none' : thickness + 'px ' + border + ' ' + color,
      borderLeft: v ? thickness + 'px ' + border + ' ' + color : 'none',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { FoldLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FoldLine.jsx", error: String((e && e.message) || e) }); }

// components/brand/FoldPattern.jsx
try { (() => {
/** Patrón de marca construido con planos, pestañas y líneas de troquel. Monocromático o a dos colores. */
function FoldPattern({
  tone = 'purple',
  scale = 64,
  opacity = 1,
  children,
  style,
  ...rest
}) {
  const c = {
    purple: ['#300C48', 'rgba(48,12,72,.16)'],
    kraft: ['#B98F5C', 'rgba(219,181,132,.35)'],
    orange: ['#F9600C', 'rgba(249,96,12,.18)'],
    cream: ['#FAF4E8', 'rgba(250,244,232,.28)']
  }[tone];
  const svg = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="' + c[0] + '" stroke-width="2"><path d="M8 40h16V24"/><path d="M40 24h16v16" stroke-dasharray="4 4"/><path d="M24 24 40 40"/></g><path d="M40 40h16v16H40z" fill="' + c[1] + '"/><path d="M8 8h16v16H8z" fill="' + c[1] + '"/></svg>');
  return React.createElement('div', {
    style: {
      backgroundImage: 'url("data:image/svg+xml,' + svg + '")',
      backgroundSize: scale + 'px ' + scale + 'px',
      opacity,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { FoldPattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FoldPattern.jsx", error: String((e && e.message) || e) }); }

// components/brand/ModularCard.jsx
try { (() => {
const surfaces = {
  white: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)'
  },
  kraft: {
    background: 'var(--surface-kraft)',
    color: 'var(--text-body)'
  },
  cream: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-body)'
  },
  purple: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-inverse)'
  }
};

/** Bloque modular: superficie rectangular que se une, desplaza o superpone. Orden y construcción. */
function ModularCard({
  children,
  surface = 'white',
  outline = true,
  fold = true,
  lift = false,
  padding = 'var(--pad-card)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      padding,
      borderRadius: 'var(--radius-card)',
      boxShadow: outline ? 'inset 0 0 0 2px ' + (surface === 'purple' ? 'var(--mc-purple-600)' : 'var(--border-structural)') : 'var(--shadow-card)',
      transform: lift && hover ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-fold),box-shadow var(--dur-base) var(--ease-fold)',
      clipPath: fold ? 'polygon(0 0, calc(100% - var(--fold-offset)) 0, 100% var(--fold-offset), 100% 100%, 0 100%)' : 'none',
      ...surfaces[surface],
      ...style
    },
    ...rest
  }, fold ? React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 'var(--fold-offset)',
      height: 'var(--fold-offset)',
      background: surface === 'purple' ? 'var(--mc-purple-600)' : 'var(--mc-kraft)',
      clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { ModularCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ModularCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpecTag.jsx
try { (() => {
/** Etiqueta técnica: ficha de producción en lenguaje cercano (medidas, material, mínimo, tiempos). */
function SpecTag({
  items = [],
  surface = 'kraft',
  columns = 1,
  style,
  ...rest
}) {
  const bg = surface === 'kraft' ? 'var(--surface-kraft)' : surface === 'white' ? 'var(--surface-card)' : 'var(--surface-inverse)';
  const fg = surface === 'purple' ? 'var(--text-on-inverse)' : 'var(--text-strong)';
  return React.createElement('dl', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      gap: '2px 24px',
      margin: 0,
      padding: '12px 14px',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'inset 0 0 0 2px ' + (surface === 'purple' ? 'var(--mc-purple-600)' : 'var(--mc-kraft-600)'),
      fontFamily: 'var(--font-body)',
      ...style
    },
    ...rest
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '12px',
      padding: '3px 0'
    }
  }, React.createElement('dt', {
    style: {
      fontSize: 'var(--text-spec)',
      letterSpacing: 'var(--ls-spec)',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, it.label), React.createElement('dd', {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpecTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/StepSequence.jsx
try { (() => {
/** Secuencia de pasos unida por líneas de pliegue; el número va en una pestaña de color. */
function StepSequence({
  steps = [],
  tone = 'yellow',
  style,
  ...rest
}) {
  const bg = {
    yellow: 'var(--mc-yellow)',
    orange: 'var(--mc-orange)',
    fuchsia: 'var(--mc-fuchsia)'
  }[tone];
  const fg = tone === 'yellow' ? 'var(--mc-purple)' : '#fff';
  return React.createElement('ol', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + steps.length + ',minmax(0,1fr))',
      gap: '0',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    },
    ...rest
  }, steps.map((s, i) => React.createElement('li', {
    key: i,
    style: {
      position: 'relative',
      paddingRight: '24px'
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '34px',
      height: '26px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '13px',
      clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)',
      borderRadius: 'var(--radius-xs)'
    }
  }, String(i + 1).padStart(2, '0')), React.createElement('h4', {
    style: {
      margin: '12px 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-heading-3)',
      color: 'var(--text-strong)'
    }
  }, s.title), React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, s.body), i < steps.length - 1 ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: '13px',
      left: '46px',
      right: '8px'
    }
  }, React.createElement(__ds_scope.FoldLine, {
    variant: 'dashed',
    color: 'var(--border-die-cut)'
  })) : null)));
}
Object.assign(__ds_scope, { StepSequence });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StepSequence.jsx", error: String((e && e.message) || e) }); }

// components/brand/StructuralArrow.jsx
try { (() => {
/** Flecha estructural: una cinta de cartón doblada. Muestra armado, transformación, antes/después. */
function StructuralArrow({
  direction = 'right',
  length = 64,
  color = 'var(--mc-orange)',
  thickness = 10,
  style,
  ...rest
}) {
  const rot = {
    right: 0,
    down: 90,
    left: 180,
    up: 270
  }[direction];
  return React.createElement('span', {
    'aria-hidden': true,
    style: {
      display: 'inline-block',
      width: length + 'px',
      height: thickness + 'px',
      background: color,
      clipPath: 'polygon(0 0, calc(100% - ' + thickness * 1.6 + 'px) 0, 100% 50%, calc(100% - ' + thickness * 1.6 + 'px) 100%, 0 100%)',
      transform: 'rotate(' + rot + 'deg)',
      transformOrigin: 'center',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { StructuralArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StructuralArrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  purple: {
    background: 'var(--mc-purple)',
    color: 'var(--mc-cream)'
  },
  orange: {
    background: 'var(--mc-orange)',
    color: '#fff'
  },
  yellow: {
    background: 'var(--mc-yellow)',
    color: 'var(--mc-purple)'
  },
  fuchsia: {
    background: 'var(--mc-fuchsia)',
    color: '#fff'
  },
  kraft: {
    background: 'var(--mc-kraft-200)',
    color: 'var(--mc-purple)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    boxShadow: 'inset 0 0 0 2px var(--border-structural)'
  }
};

/** Etiqueta corta. Sin píldoras: radio pequeño, como un rótulo impreso sobre cartón. */
function Badge({
  children,
  tone = 'purple',
  uppercase = true,
  style,
  ...rest
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '11px',
      letterSpacing: uppercase ? 'var(--ls-spec)' : '0',
      textTransform: uppercase ? 'uppercase' : 'none',
      borderRadius: 'var(--radius-xs)',
      lineHeight: 1.4,
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: '13px',
    minHeight: '36px'
  },
  md: {
    padding: '12px 20px',
    fontSize: '15px',
    minHeight: '44px'
  },
  lg: {
    padding: '16px 28px',
    fontSize: '17px',
    minHeight: '52px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--text-on-accent)',
    border: '2px solid var(--action-primary)'
  },
  secondary: {
    background: 'var(--action-secondary)',
    color: 'var(--text-on-inverse)',
    border: '2px solid var(--action-secondary)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid var(--border-structural)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '2px solid transparent'
  },
  accent: {
    background: 'var(--accent-tab)',
    color: 'var(--text-strong)',
    border: '2px solid var(--accent-tab)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-hover)',
    borderColor: 'var(--action-primary-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-hover)',
    borderColor: 'var(--action-secondary-hover)'
  },
  outline: {
    background: 'var(--mc-ink-06)'
  },
  ghost: {
    background: 'var(--mc-ink-06)'
  },
  accent: {
    background: 'var(--mc-yellow-600)',
    borderColor: 'var(--mc-yellow-600)'
  }
};

/** Botón principal. La pestaña de esquina (fold) es el código de marca: un pliegue en la esquina superior derecha. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fold = true,
  fullWidth = false,
  disabled = false,
  iconSrc,
  iconPosition = 'left',
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-control)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-fold),color var(--dur-fast) var(--ease-fold),transform var(--dur-fast) var(--ease-fold),border-color var(--dur-fast) var(--ease-fold)',
    transform: press ? 'scale(var(--press-scale))' : 'none',
    opacity: disabled ? 0.4 : 1,
    clipPath: fold ? 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' : 'none',
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...style
  };
  const icon = iconSrc ? React.createElement('img', {
    src: iconSrc,
    alt: '',
    width: size === 'lg' ? 22 : 18,
    height: size === 'lg' ? 22 : 18,
    style: {
      display: 'block'
    }
  }) : null;
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    ...rest
  }, iconPosition === 'left' ? icon : null, React.createElement('span', null, children), iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Envoltorio para la familia de iconos funcionales (SVG de 24x24, trazo 2px, morado + un acento). */
function Icon({
  name,
  size = 24,
  basePath = 'assets/icons',
  title,
  style,
  ...rest
}) {
  return React.createElement('img', {
    src: basePath.replace(/\/$/, '') + '/' + name + '.svg',
    alt: title || '',
    width: size,
    height: size,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    ...rest
  });
}
const ICON_NAMES = ['vender', 'saborear', 'regalar', 'impactar', 'a-tu-medida', 'personalizacion', 'diseno', 'cotizacion', 'produccion', 'armado', 'envios', 'materiales', 'medidas', 'resistencia', 'impresion', 'sostenibilidad', 'asesoria', 'entrega'];
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Casilla: cuadrado con contorno morado; al marcar se llena de naranja con una marca plegada. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : on;
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked: isOn,
    disabled,
    onChange: e => {
      if (checked === undefined) setOn(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: '20px',
      height: '20px',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: isOn ? 'var(--mc-orange)' : 'var(--surface-card)',
      boxShadow: 'inset 0 0 0 2px ' + (isOn ? 'var(--mc-orange)' : 'var(--border-structural)'),
      borderRadius: 'var(--radius-xs)',
      transition: 'background var(--dur-fast) var(--ease-fold),box-shadow var(--dur-fast) var(--ease-fold)'
    }
  }, isOn ? React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 12 12',
    fill: 'none',
    stroke: '#fff',
    'strokeWidth': 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M1.5 6.5 4.5 9.5 10.5 2.5'
  })) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Campo de texto: contorno morado de 2px, radio pequeño, etiqueta en Poppins SemiBold. */
function Input({
  label,
  hint,
  error,
  as = 'input',
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || 'mc-' + Math.random().toString(36).slice(2, 8), [id]);
  const field = React.createElement(as === 'textarea' ? 'textarea' : 'input', {
    id: uid,
    rows: as === 'textarea' ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      border: '2px solid ' + (error ? 'var(--state-error)' : focus ? 'var(--mc-orange)' : 'var(--border-structural)'),
      borderRadius: 'var(--radius-control)',
      outline: 'none',
      resize: as === 'textarea' ? 'vertical' : undefined,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-fold),box-shadow var(--dur-fast) var(--ease-fold)',
      ...style
    },
    ...rest
  });
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label ? React.createElement('label', {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label) : null, field, error || hint ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--state-error)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Desplegable con el mismo contorno estructural que Input. */
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || 'mc-' + Math.random().toString(36).slice(2, 8), [id]);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label ? React.createElement('label', {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-strong)'
    }
  }, label) : null, React.createElement('select', {
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      appearance: 'none',
      border: '2px solid ' + (focus ? 'var(--mc-orange)' : 'var(--border-structural)'),
      borderRadius: 'var(--radius-control)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--mc-purple) 50%),linear-gradient(135deg,var(--mc-purple) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 50%,calc(100% - 13px) 50%',
      backgroundSize: '7px 7px,7px 7px',
      backgroundRepeat: 'no-repeat',
      ...style
    },
    ...rest
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value !== undefined ? o.value : o
  }, o.label !== undefined ? o.label : o))), hint ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Interruptor: dos planos que se desplazan, como una pestaña que cambia de lado. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : on;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setOn(!isOn);
    onChange && onChange(!isOn);
  };
  return React.createElement('label', {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-body)',
      ...style
    },
    ...rest
  }, React.createElement('span', {
    role: 'switch',
    'aria-checked': isOn,
    style: {
      position: 'relative',
      width: '44px',
      height: '24px',
      flex: 'none',
      background: isOn ? 'var(--mc-orange)' : 'var(--mc-kraft-200)',
      boxShadow: 'inset 0 0 0 2px ' + (isOn ? 'var(--mc-orange)' : 'var(--border-structural)'),
      borderRadius: 'var(--radius-sm)',
      transition: 'background var(--dur-base) var(--ease-fold)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '3px',
      left: isOn ? '23px' : '3px',
      width: '18px',
      height: '18px',
      background: isOn ? '#fff' : 'var(--mc-purple)',
      borderRadius: 'var(--radius-xs)',
      transition: 'left var(--dur-base) var(--ease-fold)'
    }
  })), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogScreen.jsx
try { (() => {
const {
  Badge,
  ModularCard,
  ColorTab,
  FoldLine,
  FoldFrame,
  SpecTag,
  Icon,
  Button,
  Checkbox,
  Select
} = window.MagiCajasDesignSystem_3fe34f;
const ITEMS = [['vender', 'Caja de despacho', '20 × 20 × 10 cm', 'Kraft microcorrugado', 'Desde $1.900', "orange"], ['saborear', 'Empaque para alimentos', '18 × 12 × 8 cm', 'Cartulina grado alimenticio', 'Desde $1.400', "yellow"], ['regalar', 'Caja regalo con banda', '25 × 18 × 9 cm', 'Propalcote 300 g', 'Desde $3.200', "fuchsia"], ['impactar', 'Caja desplegable', '30 × 24 × 12 cm', 'Microcorrugado + interior impreso', 'Desde $5.600', "orange"], ['personalizacion', 'Caja con ventana', '22 × 22 × 8 cm', 'Dúplex + PET reciclado', 'Desde $2.800', "yellow"], ['envios', 'Sobre estructural', '32 × 24 cm', 'Kraft plegado', 'Desde $980', "fuchsia"]];
function CatalogScreen({
  go
}) {
  const [cat, setCat] = React.useState('Todas');
  const cats = ['Todas', 'Para vender', 'Para saborear', 'Para regalar', 'Para impactar'];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "purple"
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-3)',
      margin: '14px 0 10px',
      maxWidth: 620
    }
  }, "Estructuras base que adaptamos a tu producto"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      color: 'var(--text-body)'
    }
  }, "Toda referencia se ajusta en medidas, material e impresi\xF3n. Los precios son por unidad a partir de 100 unidades."), /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed",
    style: {
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 40,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 20,
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 'var(--ls-spec)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Uso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      textAlign: 'left',
      padding: '8px 10px',
      border: '2px solid ' + (cat === c ? 'var(--mc-purple)' : 'transparent'),
      background: cat === c ? 'var(--mc-white)' : 'transparent',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--mc-purple)',
      cursor: 'pointer'
    }
  }, c)))), /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: 'var(--ls-spec)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Acabados"), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Impresi\xF3n interior"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ventana troquelada"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Material reciclado",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Ordenar por",
    options: ['Más pedidas', 'Menor precio', 'Producción más rápida']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter-block)'
    }
  }, ITEMS.map(([ic, name, med, mat, price, tone]) => /*#__PURE__*/React.createElement(ModularCard, {
    key: name,
    lift: true,
    padding: "0",
    style: {
      overflow: 'hidden',
      cursor: 'pointer'
    },
    onClick: () => go('producto')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--mc-cream-deep)',
      display: 'grid',
      placeItems: 'center',
      borderBottom: '2px solid var(--mc-purple)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 44,
    basePath: "../../assets/icons"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: -6
    }
  }, /*#__PURE__*/React.createElement(ColorTab, {
    tone: tone,
    size: "sm"
  }, price))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(SpecTag, {
    surface: "white",
    items: [{
      label: 'Medidas',
      value: med
    }, {
      label: 'Material',
      value: mat
    }],
    style: {
      boxShadow: 'none',
      padding: 0,
      background: 'transparent'
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('cotizador')
  }, "No encuentro mi medida \u2014 cotizar a medida")));
}
Object.assign(window, {
  CatalogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  FoldPattern,
  FoldLine
} = window.MagiCajasDesignSystem_3fe34f;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--mc-purple)',
      color: 'var(--mc-cream)',
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement(FoldPattern, {
    tone: "cream",
    scale: 72,
    opacity: 0.14,
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 32px 56px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-dark-bg.png",
    alt: "Magicajas",
    style: {
      height: 40,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 14,
      color: 'var(--mc-purple-200)',
      maxWidth: 280,
      lineHeight: 1.6
    }
  }, "Cajas y empaques a la medida. Dise\xF1amos el troquel, imprimimos y entregamos listo para empacar.")), [['Soluciones', ['Para vender', 'Para saborear', 'Para regalar', 'Para impactar']], ['Producción', ['Materiales', 'Medidas', 'Impresión', 'Tiempos de entrega']], ['Magicajas', ['Cómo trabajamos', 'Sostenibilidad', 'Asesoría', 'Contacto']]].map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--mc-cream)',
      fontSize: 13,
      letterSpacing: 'var(--ls-spec)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      color: 'var(--mc-purple-200)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px 28px'
    }
  }, /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed",
    color: "var(--mc-purple-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--mc-purple-400)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Magicajas"), /*#__PURE__*/React.createElement("span", null, "M\xEDnimo 50 unidades por referencia"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button,
  Badge
} = window.MagiCajasDesignSystem_3fe34f;
function Header({
  route,
  go
}) {
  const links = [['catalogo', 'Catálogo'], ['producto', 'Materiales'], ['cotizador', 'Cotizar']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--mc-cream)',
      borderBottom: '2px solid var(--mc-purple)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      border: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-light-bg.png",
    alt: "Magicajas",
    style: {
      height: 36,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 'auto'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: route === id ? 'var(--mc-orange)' : 'var(--mc-purple)',
      borderBottom: '2px solid ' + (route === id ? 'var(--mc-orange)' : 'transparent'),
      paddingBottom: 2
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "kraft"
  }, "Bogot\xE1 \xB7 env\xEDos nacionales"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('cotizador')
  }, "Cotiza tu caja"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  ModularCard,
  ColorTab,
  FoldLine,
  FoldFrame,
  SpecTag,
  StepSequence,
  StructuralArrow,
  FoldPattern,
  Icon
} = window.MagiCajasDesignSystem_3fe34f;
const PHOTO = ({
  label
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--mc-cream-deep)',
    fontFamily: 'var(--font-body)',
    fontSize: 11,
    letterSpacing: 'var(--ls-spec)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    textAlign: 'center',
    padding: 12
  }
}, label);
const SOLUCIONES = [['vender', 'Para vender', 'Cajas de despacho que llegan intactas y se ven tuyas.'], ['saborear', 'Para saborear', 'Empaques para alimentos con apertura superior y grado alimenticio.'], ['regalar', 'Para regalar', 'Caja cerrada con banda modular: se abre y se entiende el detalle.'], ['impactar', 'Para impactar', 'Estructuras que se despliegan en varios planos al abrir.']];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px 0',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--mc-orange)'
    }
  }, "Cajas a la medida"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      marginTop: 14
    }
  }, "Haz que tu producto sorprenda"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-body)',
      maxWidth: 460,
      marginTop: 18
    }
  }, "Dise\xF1amos el troquel, imprimimos y entregamos la caja armada a tu medida. Desde 50 unidades."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('cotizador'),
    iconSrc: "../../assets/icons/cotizacion.svg"
  }, "Cotiza tu caja"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go('catalogo')
  }, "Ver soluciones")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(SpecTag, {
    columns: 2,
    items: [{
      label: 'Mínimo',
      value: '50 unidades'
    }, {
      label: 'Producción',
      value: '8 días hábiles'
    }, {
      label: 'Materiales',
      value: 'Kraft · propalcote'
    }, {
      label: 'Envíos',
      value: 'Todo el país'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(FoldFrame, {
    ratio: "4 / 3"
  }, /*#__PURE__*/React.createElement(PHOTO, {
    label: 'Foto: manos armando una caja\n(pendiente de banco de imágenes)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      left: -18
    }
  }, /*#__PURE__*/React.createElement(ColorTab, {
    tone: "yellow"
  }, "Se arma en 3 pliegues")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      maxWidth: 520
    }
  }, "Cuatro formas de usar una caja"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('catalogo');
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Ver el cat\xE1logo completo")), /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed",
    style: {
      margin: '20px 0 28px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter-block)'
    }
  }, SOLUCIONES.map(([icon, title, body], i) => /*#__PURE__*/React.createElement(ModularCard, {
    key: title,
    lift: true,
    surface: i === 3 ? 'kraft' : 'white',
    onClick: () => go('producto'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 34,
    basePath: "../../assets/icons"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)',
      margin: '14px 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--section-y)',
      background: 'var(--surface-sunken)',
      borderTop: '2px solid var(--mc-purple)',
      borderBottom: '2px solid var(--mc-purple)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "purple"
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      margin: '14px 0 32px',
      maxWidth: 560
    }
  }, "De la idea al pliegue"), /*#__PURE__*/React.createElement(StepSequence, {
    steps: [{
      title: 'Cotiza',
      body: 'Cuéntanos qué empacas, cuántas unidades y para cuándo.'
    }, {
      title: 'Diseñamos',
      body: 'Troquel a medida y arte listo para impresión.'
    }, {
      title: 'Producimos',
      body: 'Impresión, corte y control de resistencia.'
    }, {
      title: 'Entregamos',
      body: 'Caja armada o plana, a tu bodega o punto.'
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) 32px 0',
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(FoldFrame, {
    ratio: "1 / 1",
    corner: "bottom-right",
    frame: "orange",
    backing: false
  }, /*#__PURE__*/React.createElement(PHOTO, {
    label: 'Foto: detalle de impresión\nsobre kraft'
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      maxWidth: 460
    }
  }, "Materiales que aguantan el viaje"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-md)',
      marginTop: 14,
      maxWidth: 480
    }
  }, "Elegimos el calibre seg\xFAn el peso, el trayecto y la cantidad de manipulaciones. Si tu producto es fr\xE1gil, lo protegemos con una estructura envolvente, no con m\xE1s relleno."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 14,
      marginTop: 26
    }
  }, [['materiales', 'Kraft microcorrugado', 'Resistencia y textura de cartón visible.'], ['impresion', 'Cartulina propalcote', 'Color pleno y acabado mate o brillante.'], ['resistencia', 'Cartón dúplex', 'Cajas plegables ligeras para retail.'], ['sostenibilidad', 'Reciclado certificado', 'Fibra recuperada y tintas base agua.']].map(([ic, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26,
    basePath: "../../assets/icons"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, b))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) 32px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      marginBottom: 28,
      maxWidth: 520
    }
  }, "Antes y despu\xE9s de un empaque propio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(FoldFrame, {
    ratio: "4 / 3",
    backing: false,
    frame: "kraft",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(PHOTO, {
    label: 'Antes: caja genérica'
  })), /*#__PURE__*/React.createElement(StructuralArrow, {
    direction: "right",
    length: 88,
    thickness: 14
  }), /*#__PURE__*/React.createElement(FoldFrame, {
    ratio: "4 / 3",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(PHOTO, {
    label: 'Después: caja Magicajas'
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--section-y) auto 96px',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(ModularCard, {
    surface: "purple",
    padding: "var(--pad-card-lg)",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr auto',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--mc-cream)',
      fontSize: 'var(--text-heading-1)'
    }
  }, "Cu\xE9ntanos qu\xE9 empacas"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--mc-purple-200)',
      marginTop: 10,
      maxWidth: 520
    }
  }, "Te enviamos propuesta de troquel, materiales y precio en 24 horas h\xE1biles.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: () => go('cotizador')
  }, "Cotiza tu caja"))));
}
Object.assign(window, {
  HomeScreen,
  PHOTO
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
const {
  Badge,
  Button,
  ModularCard,
  ColorTab,
  FoldLine,
  FoldFrame,
  SpecTag,
  StructuralArrow,
  Icon,
  Switch
} = window.MagiCajasDesignSystem_3fe34f;
function ProductScreen({
  go
}) {
  const [material, setMaterial] = React.useState('Kraft microcorrugado');
  const [qty, setQty] = React.useState('100');
  const materiales = ['Kraft microcorrugado', 'Cartulina propalcote', 'Cartón dúplex'];
  const precios = {
    '50': '$2.480',
    '100': '$1.900',
    '250': '$1.620',
    '500': '$1.410'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('catalogo');
    },
    style: {
      border: 'none'
    }
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "Caja de despacho")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      marginTop: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FoldFrame, {
    ratio: "4 / 3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--mc-cream-deep)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "vender",
    size: 84,
    basePath: "../../assets/icons"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26
    }
  }, ['armado', 'medidas', 'impresion', 'materiales'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: 78,
      aspectRatio: '1',
      background: 'var(--mc-white)',
      boxShadow: 'inset 0 0 0 2px var(--mc-purple)',
      borderRadius: 'var(--radius-sm)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 30,
    basePath: "../../assets/icons"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)'
    }
  }, "Se arma en tres pliegues"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginTop: 16
    }
  }, ['produccion', 'armado', 'entrega'].map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mc-kraft-200)',
      padding: 14,
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 30,
    basePath: "../../assets/icons"
  })), i < 2 ? /*#__PURE__*/React.createElement(StructuralArrow, {
    direction: "right",
    length: 44,
    thickness: 9
  }) : null))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "M\xE1s pedida"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-heading-1)',
      margin: '14px 0 10px'
    }
  }, "Caja de despacho"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)'
    }
  }, "Autoarmable, con solapas de cierre y espacio para impresi\xF3n interior. Pensada para env\xEDos de e-commerce que se abren frente a una c\xE1mara."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Material"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, materiales.map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setMaterial(m),
    style: {
      padding: '9px 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      border: '2px solid ' + (material === m ? 'var(--mc-orange)' : 'var(--mc-purple)'),
      background: material === m ? 'var(--mc-orange)' : 'transparent',
      color: material === m ? '#fff' : 'var(--mc-purple)'
    }
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Cantidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, Object.keys(precios).map(q => /*#__PURE__*/React.createElement("button", {
    key: q,
    onClick: () => setQty(q),
    style: {
      padding: '9px 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      border: '2px solid var(--mc-purple)',
      background: qty === q ? 'var(--mc-purple)' : 'transparent',
      color: qty === q ? 'var(--mc-cream)' : 'var(--mc-purple)'
    }
  }, q, " uds")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Impresi\xF3n interior a un color",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Enviar muestra f\xEDsica antes de producir"
  })), /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed",
    style: {
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--ls-spec)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Precio por unidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 38,
      color: 'var(--mc-purple)',
      lineHeight: 1.1
    }
  }, precios[qty])), /*#__PURE__*/React.createElement(ColorTab, {
    tone: "yellow",
    notch: "left"
  }, "Producci\xF3n 8 d\xEDas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('cotizador')
  }, "Cotizar esta caja"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, "Descargar ficha t\xE9cnica")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(SpecTag, {
    columns: 2,
    items: [{
      label: 'Medidas',
      value: material === 'Cartón dúplex' ? '20 × 20 × 9 cm' : '20 × 20 × 10 cm'
    }, {
      label: 'Material',
      value: material
    }, {
      label: 'Mínimo',
      value: '50 unidades'
    }, {
      label: 'Impresión',
      value: 'Flexografía 1–2 tintas'
    }, {
      label: 'Resistencia',
      value: 'Hasta 8 kg'
    }, {
      label: 'Entrega',
      value: 'Plana o armada'
    }]
  })))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  ModularCard,
  ColorTab,
  FoldLine,
  SpecTag,
  Input,
  Select,
  Checkbox,
  Icon,
  StepSequence
} = window.MagiCajasDesignSystem_3fe34f;
function QuoteScreen({
  go
}) {
  const [step, setStep] = React.useState(0);
  const steps = ['Tu producto', 'Material y medidas', 'Contacto'];
  const done = step > 2;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '48px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "purple"
  }, "Cotizaci\xF3n"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-3)',
      margin: '14px 0 8px'
    }
  }, done ? 'Recibimos tu cotización' : 'Cuéntanos qué empacas'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      maxWidth: 520
    }
  }, done ? 'Te escribimos en 24 horas hábiles con propuesta de troquel, materiales y precio.' : 'Tres pasos. Respondemos en 24 horas hábiles.'), !done && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginTop: 28
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      paddingRight: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 26,
      borderRadius: 'var(--radius-xs)',
      background: i <= step ? 'var(--mc-orange)' : 'var(--mc-kraft-200)',
      color: i <= step ? '#fff' : 'var(--mc-purple)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      clipPath: 'polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: i <= step ? 'var(--mc-purple)' : 'var(--text-muted)'
    }
  }, s))))), /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed",
    style: {
      margin: '22px 0 28px'
    }
  }), done ? /*#__PURE__*/React.createElement(ModularCard, {
    surface: "purple",
    padding: "var(--pad-card-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--mc-cream)',
      padding: 12,
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cotizacion",
    size: 34,
    basePath: "../../assets/icons"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--mc-cream)',
      fontSize: 'var(--text-heading-3)'
    }
  }, "Solicitud #MC-2418"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--mc-purple-200)',
      marginTop: 8
    }
  }, "Caja de despacho \xB7 Kraft microcorrugado \xB7 100 unidades"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => go('home')
  }, "Volver al inicio"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: 'var(--mc-cream)'
    },
    onClick: () => setStep(0)
  }, "Cotizar otra caja"))))) : /*#__PURE__*/React.createElement(ModularCard, {
    padding: "var(--pad-card-lg)"
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\xBFQu\xE9 vas a empacar?",
    placeholder: "Velas artesanales de 8 cm"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\xBFPara qu\xE9 la necesitas?",
    options: ['Para vender', 'Para saborear', 'Para regalar', 'Para impactar']
  }), /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    rows: 3,
    label: "Cu\xE9ntanos el contexto",
    placeholder: "Vendo por Instagram y env\xEDo a todo el pa\xEDs. Quiero que la apertura se sienta especial."
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Ancho (cm)",
    placeholder: "20"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Alto (cm)",
    placeholder: "20"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Profundidad (cm)",
    placeholder: "10"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Material",
    options: ['Kraft microcorrugado', 'Cartulina propalcote', 'Cartón dúplex', 'No sé, asesórenme']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Cantidad",
    options: ['50 unidades', '100 unidades', '250 unidades', '500+ unidades']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Impresi\xF3n interior",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ventana troquelada"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Necesito material reciclado"
  }))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Ana Restrepo"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Negocio",
    placeholder: "Velas R\xFAa"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "ana@velasrua.co"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    placeholder: "300 000 0000"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "\xBFPara cu\xE1ndo la necesitas?",
    options: ['En 2 semanas', 'Este mes', 'El próximo mes', 'Estoy explorando']
  }), /*#__PURE__*/React.createElement(SpecTag, {
    columns: 2,
    items: [{
      label: 'Resumen',
      value: 'Caja de despacho'
    }, {
      label: 'Medidas',
      value: '20 × 20 × 10 cm'
    }, {
      label: 'Material',
      value: 'Kraft microcorrugado'
    }, {
      label: 'Cantidad',
      value: '100 unidades'
    }]
  })), /*#__PURE__*/React.createElement(FoldLine, {
    variant: "dashed",
    style: {
      margin: '26px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    disabled: step === 0,
    onClick: () => setStep(s => Math.max(0, s - 1))
  }, "Atr\xE1s"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ColorTab, {
    tone: "kraft",
    size: "sm"
  }, "Paso ", step + 1, " de 3"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(s => s + 1)
  }, step === 2 ? 'Enviar cotización' : 'Continuar')))));
}
Object.assign(window, {
  QuoteScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ColorTab = __ds_scope.ColorTab;

__ds_ns.FoldFrame = __ds_scope.FoldFrame;

__ds_ns.FoldLine = __ds_scope.FoldLine;

__ds_ns.FoldPattern = __ds_scope.FoldPattern;

__ds_ns.ModularCard = __ds_scope.ModularCard;

__ds_ns.SpecTag = __ds_scope.SpecTag;

__ds_ns.StepSequence = __ds_scope.StepSequence;

__ds_ns.StructuralArrow = __ds_scope.StructuralArrow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
