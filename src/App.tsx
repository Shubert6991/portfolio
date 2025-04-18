import { ChakraProvider, defaultConfig, createSystem, Box } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode"

import Navbar from "./components/navbar/navbar"

import config from "./themes/catppuccin";

const system = createSystem(defaultConfig, config)

function App() {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <Navbar />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App
