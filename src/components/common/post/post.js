/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import format from 'date-fns/format';

const DATE_FORMAT = 'dd/LL/yyyy';

export const Post = ({ post }) => {
  const {
    date,
    title,
    slug,
    categories,
    featuredImage: {
      imageFile: {
        childImageSharp: { fluid },
      },
    },
  } = post;
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <article>
      <div sx={{ overflow: 'hidden', mb: 9 }}>
        <Link
          to={`/blogg/${slug}`}
          sx={{
            div: {
              transition: 'imageLink',
            },
            '&:hover': {
              div: {
                transform: 'scale(1.05)',
                opacity: '0.8',
              },
            },
          }}
        >
          <Image
            fluid={fluid}
            alt="Post image"
            sx={{
              filter: 'grayscale(90%)',
              transition: 'imageLink',
              '&:hover': {
                filter: 'none',
              },
            }}
          />{' '}
          {/*TODO Add alt*/}
        </Link>
      </div>
      <div
        sx={{
          mb: 7,
          fontSize: 0,
          letterSpacing: '2px',
        }}
      >
        {format(new Date(date), DATE_FORMAT)}
      </div>
      <h3
        sx={{
          variant: 'text.heading3',
          mb: 7,
          fontWeight: 'normal',
          fontFamily: 'heading',
          lineHeight: '28px',
        }}
      >
        <HeadingLink to={`/blogg/${slug}`} sx={{ transition: 'link' }} {...{ colors }}>
          {title}
        </HeadingLink>
      </h3>
      <div>
        {categories.nodes.map(({ id, slug, name }) => (
          <Link
            key={id}
            to={`/blogg/category/${slug}`}
            sx={{
              fontSize: 2,
              color: 'grey700',
              mr: 4,
              border: 'none',
              '&:hover': {
                bg: 'transparent',
                color: 'mainDark',
              },
            }}
          >
            {`#${name}`}
          </Link>
        ))}
      </div>
    </article>
  );
};

const HeadingLink = styled(Link)`
  border-color: transparent;
  &:hover {
    background: transparent;
    border-bottom: 1px solid ${props => props.colors.mainDark};
  }
`;
