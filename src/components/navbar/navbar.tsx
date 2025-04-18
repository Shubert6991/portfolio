import { Box } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

const Navbar = () => {
  return (
    <Box bg="surface0" w="auto" p="2" m="1" color="text">
      This is the Box
      <ColorModeButton />
    </Box>
  )
}

export default Navbar
