/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { createLocalLink } from '../../utils/index'
import { Container } from '../core'
import styled from '@emotion/styled'
import { HeadingLine } from '../core'
import { Button } from '../core/button'

export const fragment = graphql`
  fragment PsychologistInfoSection on WPGraphQL_Page_Sections_Content_Pschylogistinfo {
    title
  }
`
const mapLinkLabelToSlugLabel = (linkLabel) => {
  switch (linkLabel) {
    case 'Online Terapi':
      return 'Online Terapi';
    case 'Om oss':
      return 'Våre terapeuter';
    case 'Behandling':
      return 'Hva vi kan hjelpe med';
    case 'Forløp':
      return 'Om behandling';
    case 'Priser':
      return 'Priser & timebestilling';
    case 'Blogg':
      return 'Blogg';
    case 'Kontakt':
      return 'Kontakt';
    default:
      return null;
  }
}

export const PsychologistInfo = props => {
  const { menuItems, title } = props
  const { theme: { colors } } = useThemeUI()
  return (
    <section sx={{
      py: ['70px', null, '100px'],
      bg: 'secondary',
      color: 'white'
    }}>
      <Container>
        <div sx={{
          display: ['none', 'none', 'block', 'block'],
          textAlign: 'center'
        }}>
          <HeadingLine />
          <Title sx={{
            variant: 'text.heading5',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            mb: 12,
            '&:after': {
              display: 'none'
            }
          }}>{title}</Title>
          <Button variant="outline" label="Våre psykologer" to="/psykologene" sx={{ mr: 11 }} />
          <Button variant="primary" label="timebestilling" />
        </div>
        <div sx={{
          display: ['block, block', 'block', 'none']
        }}>
          <Title sx={{
            variant: 'text.heading5',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Les mer om:</Title>
          <ul sx={{ m: 0, p: 0 }}>
            {
              menuItems.nodes.map(({ url, id, label }) => (
                <ListItem key={id} sx={{ listStyle: 'none', py: 4, m: 0 }} {...{ colors }}>
                  <Link
                    sx={{
                      border: 'none',
                      '&.active, &:hover': {
                        color: 'primary'
                      }
                    }}
                    to={createLocalLink(url)}
                    activeClassName="active"
                  >
                    {mapLinkLabelToSlugLabel(label)}
                  </Link>
                </ListItem>
              ))
            }
          </ul>
        </div>
      </Container>
    </section >
  )
}

const ListItem = styled.li`
  &:not(:first-of-type) {
    border-top: 1px solid ${props => props.colors.grey150};
  }
`
const Title = styled.h5`
  &:after {
    content: "";
    margin: 5px 0 5px;
    width: 30px;
    height: 1px;
    background: #b4b4b4;
    display: block;
  }
`

