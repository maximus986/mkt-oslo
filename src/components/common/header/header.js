/** @jsx jsx */
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { jsx, useThemeUI } from 'theme-ui'
import { Navigation } from './navigation'
import { Link } from 'gatsby'
import logo from '../../../images/MKT_dark.svg'
import { Container } from '../container'
import { Flex } from 'theme-ui'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [animateNavbar, setAnimateNavbar] = useState(false)
  const {
    theme: { colors },
  } = useThemeUI()

  const handleShowMenu = () => {
    setShowMenu(showMenu => !showMenu)
  }

  const handleScroll = () => {
    const offset = window.pageYOffset
    if (offset >= 50) {
      setAnimateNavbar(true)
    } else {
      setAnimateNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <HeaderContainer animate={animateNavbar} {...{ colors }}>
      <Container>
        <Flex sx={{
          flexDirection: ['column', 'column', 'column', 'row'],
          justifyContent: 'space-between',
          alignItems: ['stretch', 'stretch', 'stretch', 'center']
        }}>
          <HeaderActionWrapper>
            <Link to="/" sx={{ lineHeight: 0 }}>
              <Img src={logo} alt="Site logo" animate={animateNavbar} />
            </Link>
            {!showMenu ? (
              <MenuBtn {...{ colors }} onClick={handleShowMenu} sx={{ color: 'black700' }}>
                <IoIosMenu />
              </MenuBtn>
            ) : (
                <MenuBtn {...{ colors }} onClick={handleShowMenu}>
                  <IoMdClose />
                </MenuBtn>
              )}
          </HeaderActionWrapper>
          <NavContainer>
            <Navigation showMenu={showMenu} onNavigate={() => setShowMenu(false)} />
          </NavContainer>
        </Flex>
      </Container>
    </HeaderContainer>
  )
}

const Img = styled.img`
  width: ${props =>
    props.animate ? 'auto' : '135px'};
  height: ${props =>
    props.animate ? '25px' : '20px'};
`

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  min-height: 46px;
  padding: ${props => (props.animate ? '23px 0' : '40px 0')};
  background: ${props =>
    props.animate ? props.colors.white : props.colors.rgbaWhite};
  transition: 0.3s linear;
  @media (min-width: 1030px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    padding: ${props => (props.animate ? '23px 0' : '47px 0')};

  }
  @media (min-width: 1600px) {

  }
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuBtn = styled.span`
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.colors.black700};
  cursor: pointer;
  font-size: 2rem;
  @media (min-width: 1030px) {
    display: none;
  }
`
