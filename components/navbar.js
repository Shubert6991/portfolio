import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Icon,
  MenuRoot,
  MenuTrigger,
  MenuContent
} from '@chakra-ui/react'
import { useTheme } from 'next-themes'

import { GiHamburgerMenu } from 'react-icons/gi'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={{ _active: 'glassTeal' }}
        color={{ base: 'gray200', _dark: 'whiteAlpha.900', _active: '#202023' }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={{ base: '#ffffff40', _dark: '20202380' }}
      style={{ backgroundFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <MenuRoot>
              <MenuTrigger asChild>
                <IconButton variant="outline" aria-label="Options">
                  <GiHamburgerMenu />
                </IconButton>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="works">
                  <LinkItem href="/works" path={path}>
                    Works
                  </LinkItem>
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Navbar
