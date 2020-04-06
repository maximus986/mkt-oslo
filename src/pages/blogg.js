import React from 'react';
import { Contact } from '../components/common/contact/contact'
import { Layout } from '../components/common/layout'
import SEO from '../components/common/seo'
import { SectionContainer, Container } from '../components/core/index'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { PostList } from '../components/common/post/postList'

const Blogg = () => {
  const { siteMetadata: { title } } = useSiteMetadata()
  return (
    <Layout>
      <SEO title={`Blogg - ${title}`} />
      <SectionContainer title="blogg" subtitle="Meta kognitivterapi Oslo" />
      <Container>
        <PostList />
      </Container>
      <Contact />
    </Layout>
  );
}

export default Blogg

