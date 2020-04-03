/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'

const InternalButton = ({
  variant = 'internal',
  to,
  icon,
  label,
  ...props
}) => {
  return (
    <button
      {...props}
      sx={{
        // pass variant prop to sx
        variant: `buttons.${variant}`,
      }}
    >
      <Link to={to}>
        {
          icon && <span sx={{ mr: '4', display: 'flex', placeItems: 'center' }}>{icon}</span>
        }
        <span>{label}</span>
      </Link>
    </button>
  )
}

const ExternalButton = ({
  variant = 'primary',
  icon,
  label,
  children,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        bestillTimeUrl(id: "YmVzdGlsbHRpbWV1cmw6Mzk1NQ==") {
          url {
            href: url
          }
        }
      }
    }
  `)
  const { wpgraphql: { bestillTimeUrl: { url: { href } } } } = data
  return (
    <button
      {...props}
      sx={{
        // pass variant prop to sx
        variant: `buttons.${variant}`,
      }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {
          icon && <span sx={{ mr: '4', display: 'flex', placeItems: 'center' }}>{icon}</span>
        }
        <span>{label}</span>
      </a>
    </button>
  )
}

export { InternalButton, ExternalButton };
