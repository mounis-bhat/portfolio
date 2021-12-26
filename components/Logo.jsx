import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover {
    transform: rotate(30deg);
  }
`

const Logo = () => {
  const logoImg = `/images/m${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} alt="Logo" width="20" height="20" />
          <Text
            color={useColorModeValue('gray.400', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Mounis Bhat
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
