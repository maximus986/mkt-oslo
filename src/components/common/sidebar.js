/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from '../core/link'
import styled from '@emotion/styled'

export const Sidebar = () => {
  const { theme: { colors } } = useThemeUI()
  const { wpgraphql: { pageBy: { childPages } } } = useStaticQuery(graphql`
  {
    wpgraphql {
      pageBy(uri: "behandling") {
        childPages(first: 30) {
          nodes {
            id
            slug
            parent {
              ... on WPGraphQL_Page {
                slug
              }
            }
            sections {
              content {
                ... on WPGraphQL_Page_Sections_Content_Pagetitle {
                  title
                }
              }
            }
            childPages(first: 10) {
              nodes {
                id
                slug
                parent {
                  ... on WPGraphQL_Page {
                    slug
                  }
                }
                sections {
                  content {
                    ... on WPGraphQL_Page_Sections_Content_Pagetitle {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `)
  const sortedPages = childPages.nodes.sort((pageA, pageB) => {
    if (pageA.slug < pageB.slug) {
      return -1
    } else {
      if (pageA.slug > pageB.slug) {
        return 1
      }
      return 0
    }
  })
  return (
    <aside>
      <Title sx={{
        variant: 'text.heading5',
        mb: 11
      }}>Les mer om:</Title>
      <ul>
        {
          sortedPages.map(page => {
            const parent = page.parent.slug
            return (
              <ListItem
                key={page.id}
                sx={{ listStyle: 'none', py: 4, m: 0 }} {...{ colors }}>
                <Link
                  to={`/${page.parent.slug}/${page.slug}`}
                  activeClassName="active"
                  partiallyActive={true}
                  sx={{ lineHeight: 0, border: 'none', '&:hover, &.active': { color: 'primary', bg: 'transparent' } }}
                >
                  {page.sections.content[0].title}
                </Link>
                {page.childPages.nodes.length > 0 ? <ul>
                  {
                    page.childPages && page.childPages.nodes.map(page => {
                      return (
                        <ListItem
                          key={page.id}
                          sx={{ listStyle: 'none', py: 4, m: 0 }} {...{ colors }}>
                          <Link
                            to={`/${parent}/${page.parent.slug}/${page.slug}`}
                            activeClassName="active"
                            partiallyActive={true}
                            sx={{ lineHeight: 0, border: 'none', '&:hover, &.active': { color: 'primary', bg: 'transparent' } }}
                          >
                            {page.sections.content[0].title}
                          </Link>
                        </ListItem>
                      )
                    })
                  }
                </ul> : null
                }
              </ListItem>
            )
          })
        }
      </ul>
    </aside >
  );
}

const Title = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 28px;
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background: #b4b4b4;
    display: block;
    margin: 5px 0;
  }
`

const ListItem = styled.li`
  &:not(:first-of-type) {
    border-top: 1px solid ${props => props.colors.grey150};
  }
`
