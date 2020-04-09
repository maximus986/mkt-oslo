/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../core/link';

export const Button = ({ variant = 'primary', to, icon, label, children, ...props }) => {
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
  `);
  const {
    wpgraphql: {
      bestillTimeUrl: {
        url: { href },
      },
    },
  } = data;
  return (
    <button
      {...props}
      sx={{
        // pass variant prop to sx
        variant: `buttons.${variant}`,
      }}
    >
      <Link to={to ? to : href}>
        {icon && (
          <span sx={{ mr: '4', display: 'flex', placeItems: 'center' }}>{icon}</span>
        )}
        <span>{label}</span>
      </Link>
    </button>
  );
};
