import React from 'react';
import { Contact } from '../components/common/contact/contact';
import { Layout } from '../components/common/layout';
import SEO from '../components/common/seo';
import { SectionContainer, Container } from '../components/core/index';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { PostList } from '../components/common/post/postList';

const Blogg = () => {
  const {
    siteMetadata: { title },
  } = useSiteMetadata();
  return (
    <Layout>
      <SEO title={`Blogg - ${title}`} />
      {/* NOTE: Title and subtitle are hardcoded because there is no blog page in WP */}
      {/* NOTE: All the fetching and styling of the blogs are done in PostList component */}
      <SectionContainer title="blogg" subtitle="Meta kognitivterapi Oslo" />
      <Container>
        <PostList />
      </Container>
      <Contact />
    </Layout>
  );
};

export default Blogg;
