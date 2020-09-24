import codeTheme from "@theme-ui/prism/presets/night-owl.json"
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#FFFFFF",
    muted: "#1588ed",
    primary: "#e5b875",
    secondary: "#1588ed",
    error: "#96cf4a",
    success: "#ec5d49",
    background: "#041c3a",
    surface: "#102759",
  },

  styles: {
    ...baseTheme.styles,
    p: {
      a: {
        ...baseTheme.styles.p.a,
        color: "secondary",
        wordBreak: "break-word",
      },
      code: {
        ...baseTheme.styles.p.code,
        color: "#addb66",
        fontSize: "14px",
        wordBreak: "break-word",
        backgroundColor: "surface",
      },
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme,
    },
    a: {
      ...baseTheme.styles.a,
      color: "secondary",
      button: {
        cursor: "pointer",
      },
    },
  },

  buttons: {
    ...baseTheme.buttons,
    success: {
      ...baseTheme.buttons.success,
    },
    primary: {
      ...baseTheme.buttons.primary,
      ":disabled": {
        cursor: "not-allowed",
        backgroundColor: "surface",
      },
    },
    ghost: {
      ...baseTheme.buttons.primary,
      color: "muted",
      backgroundColor: "background",
      transition: ".2s linear background-color",
      ":hover": {
        backgroundColor: "surface",
      },
    },
  },

  cards: {
    primary: {
      ...baseTheme.cards.primary,
      transition: ".2s linear box-shadow, .2s ease-in-out transform",
      ":hover": {
        transform: "translateY(-0.25rem)",
        boxShadow: 2,
      },
    },
  },
}
