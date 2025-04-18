import {
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      background: "base"
    },
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    semanticTokens: {
      colors: {
        rosewater: { value: { base: "#dc8a78", _dark: "#f2d5cf" } },
        flamingo: { value: { base: "#dd7878", _dark: "#eebebe" } },
        pink: { value: { base: "#ea76cb", _dark: "#f4b8e4" } },
        mauve: { value: { base: "#8839ef", _dark: "#ca9ee6" } },
        red: { value: { base: "#d20f39", _dark: "#e78284" } },
        maroon: { value: { base: "#e64553", _dark: "#ea999c" } },
        peach: { value: { base: "#fe640b", _dark: "#ef9f76" } },
        yellow: { value: { base: "#df8e1d", _dark: "#e5c890" } },
        green: { value: { base: "#40a02b", _dark: "#a6d189" } },
        teal: { value: { base: "#179299", _dark: "#81c8be" } },
        sky: { value: { base: "#04a5e5", _dark: "#99d1db" } },
        sapphire: { value: { base: "#209fb5", _dark: "#85c1dc" } },
        blue: { value: { base: "#1e66f5", _dark: "#8caaee" } },
        lavender: { value: { base: "#7287fd", _dark: "#babbf1" } },
        text: { value: { base: "#4c4f69", _dark: "#c6d0f5" } },
        subtext1: { value: { base: "#5c5f77", _dark: "#b5bfe2" } },
        subtext0: { value: { base: "#6c6f85", _dark: "#a5adce" } },
        overlay2: { value: { base: "#7c7f93", _dark: "#949cbb" } },
        overlay1: { value: { base: "#8c8fa1", _dark: "#838ba7" } },
        overlay0: { value: { base: "#9ca0b0", _dark: "#737994" } },
        surface2: { value: { base: "#acb0be", _dark: "#626880" } },
        surface1: { value: { base: "#bcc0cc", _dark: "#51576d" } },
        surface0: { value: { base: "#ccd0da", _dark: "#414559" } },
        base: { value: { base: "#eff1f5", _dark: "#303446" } },
        mantle: { value: { base: "#e6e9ef", _dark: "#292c3c" } },
        crust: { value: { base: "#dce0e8", _dark: "#232634" } },
      },
    },
  },
})

export default config;
