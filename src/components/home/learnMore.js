/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import { Container } from '../core';
import { parseContentWithLinks } from '../../utils/index';

export const fragment = graphql`
  fragment LearnMoreSection on WPGraphQL_Page_Sections_Content_Learnmore {
    title
    url
  }
`;

export const LearnMore = ({ title, url }) => {
  return (
    <section
      sx={{
        py: ['50px'],
        bg: 'secondary',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container>
        <h5
          sx={{
            variant: 'text.heading4',
            color: 'white',
            mb: 2,
          }}
        >
          {title}
        </h5>
        <div
          sx={{
            p: { m: 0 },
            a: {
              borderBottomColor: 'grey300',
              fontSize: 0,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 'normal',
              paddingBottom: 1,
              '&:hover': {
                borderBottomColor: 'primary',
              },
            },
          }}
        >
          {parseContentWithLinks(url)}
        </div>
      </Container>
    </section>
  );
};
