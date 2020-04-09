/** @jsx jsx */
import { jsx } from 'theme-ui';
import { PostList } from '../common/post/postList';
import { SectionContainer } from '../core';
import { Container } from '../core';

export const PostListSection = () => {
  return (
    <SectionContainer title="siste blogginnlegg" subtitle="om metakognitiv terapi">
      <Container>
        <div
          sx={{
            mt: '80px',
          }}
        >
          <div
            sx={{
              display: ['block', 'none'],
            }}
          >
            <PostList numberOfPosts={2} />
          </div>
          <div
            sx={{
              display: ['none', 'block'],
            }}
          >
            <PostList numberOfPosts={6} />
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};
