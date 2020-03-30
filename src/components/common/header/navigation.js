/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby'
import { createLocalLink } from '../../../utils/index'

export const Navigation = ({ showMenu, onNavigate }) => {
  const {
    theme: { colors },
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
  const { wpgraphql: { menu: { menuItems } } } = data

  return (
    <NavigationContainer>
      <NavLinks
        open={showMenu}
      >
        {menuItems.nodes.map((link) => (
          <ListItem key={link.id} {...{ colors }}>
            <NavLink
              to={createLocalLink(link.url)}
              sx={{
                fontFamily: 'body',
                fontWeight: 'links',
                transition: 'link',
                '&:hover': {
                  color: 'primary',
                },
              }}
              onClick={onNavigate}
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
  margin-top: 1.2rem;
  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

const NavLinks = styled.ul`
  overflow: hidden;
  transition: height 0.35s ease;
  height: ${props => (props.open ? '258px' : '0')};
  @media (min-width: 992px) {
    height: auto;
    display: flex;
  }
`;

const ListItem = styled.li`
    list-style-type: none;
    color: #323232;
    &.active {
      color: ${props => props.colors.primary};
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 1rem 1.2rem;
  color: inherit;
  @media (min-width: 992px) {
    padding: 0.4rem 1.2rem;
  }
`;
