module.exports = {
  "extends": ["stylelint-config-standard-scss"],
  "plugins": [
    "stylelint-order",
    "stylelint-declaration-strict-value"
  ],
  "rules": {
    "order/order": [
      "custom-properties",
      {
        "type": "at-rule",
        "name": "include"
      },
      "declarations",
      {
        "type": "at-rule",
        "name": "media"
      },
      {
        "type": "rule",
        "selector": "^&:+\\w+$"
      },
      {
        "type": "rule",
        "selector": "^\\.[-_a-zA-Z0-9]+"
      },
      {
        "type": "rule",
        "selector": "^&__[-a-z0-9]+"
      },
      {
        "type": "rule",
        "selector": "^&--[-a-z0-9]+"
      }
    ],

    "order/properties-order": [[
      {
        "properties": [
          "content",
          "box-sizing",
          "position",
          "z-index",
          "top",
          "right",
          "bottom",
          "left",
          "display",
          "grid",
          "grid-area",
          "grid-auto-*",
          "grid-column",
          "grid-column-*",
          "grid-gap",
          "grid-row",
          "grid-row-*",
          "grid-template",
          "grid-template-*",
          "flex",
          "flex-wrap",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "justify-content",
          "align-content",
          "align-items",
          "align-self",
          "order",
          "float",
          "clear",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "border",
          "border-color",
          "border-style",
          "border-width",
          "border-top",
          "border-top-color",
          "border-top-width",
          "border-top-style",
          "border-right",
          "border-right-color",
          "border-right-width",
          "border-right-style",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-width",
          "border-bottom-style",
          "border-left",
          "border-left-color",
          "border-left-width",
          "border-left-style",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "border-image",
          "border-image-source",
          "border-image-slice",
          "border-image-width",
          "border-image-outset",
          "border-image-repeat",
          "border-collapse",
          "border-spacing",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "overflow",
          "overflow-x",
          "overflow-y"
        ]
      },
      {
        "properties": [
          "font",
          "font-family",
          "src",
          "font-size",
          "font-weight",
          "font-style",
          "font-variant",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style",
          "font-smooth",
          "line-height",
          "color",
          "direction",
          "letter-spacing",
          "white-space",
          "text-align",
          "text-align-last",
          "text-transform",
          "text-decoration",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position",
          "text-indent",
          "text-justify",
          "text-outline",
          "text-wrap",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "text-orientation",
          "text-shadow",
          "vertical-align",
          "word-wrap",
          "word-break",
          "word-spacing",
          "overflow-wrap",
          "tab-size",
          "hyphens",
          "unicode-bidi",
          "columns",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "page-break-after",
          "page-break-before",
          "page-break-inside"
        ]
      },
      {
        "properties": [
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image",
          "table-layout",
          "empty-cells",
          "caption-side",
          "background",
          "background-color",
          "background-image",
          "background-repeat",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-size",
          "background-clip",
          "background-origin",
          "background-attachment",
          "background-blend-mode",
          "outline",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset",
          "box-shadow",
          "box-decoration-break",
          "transform",
          "transform-origin",
          "transform-style",
          "backface-visibility",
          "perspective",
          "perspective-origin",
          "visibility",
          "cursor",
          "opacity",
          "filter",
          "isolation",
          "backdrop-filter",
          "mix-blend-mode"
        ]
      },
      {
        "properties": [
          "appearance",
          "clip",
          "clip-path",
          "counter-reset",
          "counter-increment",
          "resize",
          "user-select",
          "nav-index",
          "nav-up",
          "nav-right",
          "nav-down",
          "nav-left",
          "pointer-events",
          "quotes",
          "touch-action",
          "will-change",
          "zoom",
          "fill",
          "fill-rule",
          "clip-rule",
          "stroke"
        ]
      },
      {
        "properties": [
          "transform",
          "transform-*",
          "backface-visibility",
          "perspective",
          "perspective-origin",
          "transition",
          "transition-*",
          "animation",
          "animation-*"
        ]
      }
    ]],

    "scale-unlimited/declaration-strict-value": [
      [
        "/color$/",
        "font-size",
        "fill",
        "stroke"
      ],
      {
        "ignoreValues": {
          "/color$/": ["currentColor",  "transparent", "inherit"],
          "font-size": ["inherit", "/^[\\d\\.]+[em|%]/", "/\\+/", "/\\d+$/", "/\\(.+\\)/"],
          "fill": ["currentColor", "inherit", "none"],
          "stroke": ["currentColor", "inherit", "none"]
      }
      }
    ],

    "scss/dollar-variable-colon-newline-after": ["always-multi-line"],
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-before": ["always", {
      "except": ["after-comment", "after-dollar-variable"],
      "ignore": ["after-comment", "inside-single-line-block"]
    }],
    "scss/dollar-variable-empty-line-after": null,
    "scss/dollar-variable-first-in-block": [true, {
      "ignore": ["comments", "imports"]
    }],
    "scss/dollar-variable-pattern": null,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/comment-no-empty": true,
    "scss/declaration-nested-properties": "never",
    "scss/no-global-function-names": null,


    "block-no-empty": [true, {
      "severity": "warning"
    }],
    "no-empty-source": [true, {
      "severity": "warning"
    }],
    "alpha-value-notation": null,
    "hue-degree-notation": null,
    "color-function-notation": null,
    "color-hex-alpha": "never",
    "color-hex-length": null,
    "color-named": "never",
    "font-weight-notation": ["numeric", {
      "ignore": ["relative"]
    }],
    "number-max-precision": 4,
    "shorthand-property-no-redundant-values": true,
    "property-no-vendor-prefix": [true, {
      "ignoreProperties": ["appearance"]
    }],
    "declaration-no-important": true,
    "declaration-property-unit-disallowed-list": [{
      "font-size": ["pt"],
      "/^animation/": ["ms"]
    }],
    "custom-property-empty-line-before": "always",
    "value-keyword-case": ["lower", {
      "ignoreKeywords": ["currentColor"]
    }],
    "selector-type-case": "lower",
    "rule-empty-line-before": ["always", {
      "ignore": ["after-comment"]
    }],
    "comment-empty-line-before": "always",
    "comment-whitespace-inside": "always",
    "color-hex-case": null,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "string-quotes": "single",
    "unit-case": "lower",
    "property-case": "lower",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "block-opening-brace-space-after": "always-single-line",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "at-rule-disallowed-list": [["extend"]],
    "at-rule-empty-line-before": ["always", {
      "ignoreAtRules": ["import", "include", "function", "return", "if", "else"],
      "ignore": ["after-comment"]
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "indentation": [2, {
      "ignore": ["value"]
    }],
    "linebreaks": ["unix"],
    "max-empty-lines": [3, {
      "ignore": ["comments"]
    }],
    "max-line-length": null,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true
  }
};
