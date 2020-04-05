/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Container } from '../core/index'
import { Link } from 'gatsby'
import logo from '../../images/MKT_dark.svg'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = () => {
  const {
    theme: { colors, space },
  } = useThemeUI()
  return (
    <footer>
      <Container>
        <div sx={{
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center'
        }}>
          <Link
            to="/"
            sx={{
              mb: 8,
              lineHeight: 0,
              border: 'none', '&:hover': { bg: 'transparent', }
            }}>
            <img
              src={logo}
              alt="Site logo"
              sx={{
                width: 'auto',
                height: `${space[9]}px`
              }}
            />
          </Link>
          <p sx={{
            fontSize: 0,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>{CURRENT_YEAR} &copy; Sunniva Kleiven Itland	</p>
        </div>
      </Container>
    </footer>
  );
}

