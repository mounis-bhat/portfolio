import Logo from "./Logo"
import NextLink from "next/link"
import {
  Container,
  Box,
  Link,
  Heading,
  Stack,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, children, path }) => {
  const active = path === href
  const isInActiveColor = useColorModeValue("gray.200", "whiteAlpha.900")
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : isInActiveColor}
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
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      Navbar
    </Box>
  )
}

export default Navbar
