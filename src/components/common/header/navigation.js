/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby'
import { createLocalLink } from '../../../utils/index'

export const Navigation = ({ showMenu, onNavigate }) => {
  const {
    theme: { colors, space },
  } = useThemeUI();
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        menu(id: "TWVudTo0MQ==") {
          menuItems {
            nodes {
              id
              url
              label
            }
          }
        }
      }
    }
  `)
  const { wpgraphql:
    { menu:
      { menuItems }
    }
  } = data

  return (
    <NavigationContainer>
      <NavLinks
        sx={{
          p: 0,
          m: 0,
          transition: 'header',
          height: showMenu ? `${space[19]}px` : '0',
          maxHeight: `${space[22]}px`
        }}
        open={showMenu}
      >
        {menuItems.nodes.map((link) => (
          <ListItem key={link.id} {...{ colors }} sx={{
            transition: 'link',
            ml: [0, 0, 0, 10, 12],
            mb: 0
          }}>
            <NavLink
              to={createLocalLink(link.url)}
              activeClassName="active"
              sx={{
                fontFamily: 'body',
                fontWeight: 'normal',
                fontSize: 0,
                color: 'mainDark',
                p: 4,
                pb: 1,
                transition: 'link',
                '&.active, &:hover': {
                  color: 'primary',
                  bg: 'transparent',
                  '&:before': {
                    right: ['100%', null, null, 0]
                  }
                }
              }}
              onClick={onNavigate}
              {...{ colors }}
            >
              {link.label}
            </NavLink>
          </ListItem>
        ))}
      </NavLinks>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  flex: 1;
`;

const NavLinks = styled.ul`
  overflow: hidden;
  width: 85%;
  @media (min-width: 1030px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const ListItem = styled.li`
    list-style-type: none;
    border-bottom: 1px solid ${props => props.colors.grey150};
    position: relative;
    @media (min-width: 1030px) {
      border-bottom: none;
    }
  }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  border: none;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: ${props => props.colors.primary};
    height: 1px;
    transition: right 0.2s ease-out;
  }
  @media (min-width: 1030px) {
    padding: 3px 0 5px;
  }
`;
