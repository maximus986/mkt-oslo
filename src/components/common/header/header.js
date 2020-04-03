/** @jsx jsx */
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { jsx, useThemeUI } from 'theme-ui'
import { Navigation } from './navigation'
import { Link } from 'gatsby'
import logo from '../../../images/MKT_dark.svg'
import { Container } from '../../core'
import { Flex } from 'theme-ui'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [animateNavbar, setAnimateNavbar] = useState(false)
  const {
    theme: { colors, space },
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
    <HeaderContainer
      animate={animateNavbar}
      sx={{
        py:
          animateNavbar ?
            [`${space[7]}px`, null, null, null, `${space[8]}px`]
            :
            [`${space[11]}px`, null, null, null, `${space[13]}px`],
        bg: animateNavbar ? 'white' : 'rgbaWhite',
        transition: 'header',
        minHeight: `${space[12]}px`
      }}>
      <Container>
        <Flex sx={{
          flexDirection: ['column', 'column', 'column', 'row'],
          justifyContent: 'space-between',
          alignItems: ['stretch', 'stretch', 'stretch', 'center']
        }}>
          <HeaderActionWrapper>
            <Link to="/" sx={{ lineHeight: 0, border: 'none' }}>
              <Img
                src={logo}
                alt="Site logo"
                animate={animateNavbar}
                sx={{
                  width: animateNavbar ? 'auto' : `${space[18]}px`,
                  height: animateNavbar ? `${space[9]}px` : `${space[7]}px`
                }}
              />
            </Link>
            {!showMenu ? (
              <MenuBtn {...{ colors }} onClick={handleShowMenu} {...{ space }}>
                <IoIosMenu />
              </MenuBtn>
            ) : (
                <MenuBtn {...{ colors }} onClick={handleShowMenu} {...{ space }}>
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

const Img = styled.img``

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  @media(min-width: 1030px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  height: ${props => props.space[12]}px;
  width: ${props => props.space[12]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ props => props.colors.mainDark};
  border: 1px solid ${ props => props.colors.mainDark};
  cursor: pointer;
  font-size: 2rem;
  @media(min-width: 1030px) {
    display: none;
  }
  `
