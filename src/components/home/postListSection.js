/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PostList } from '../common/post/postList'
import { SectionContainer } from '../common/sectionContainer'
import { Container } from '../common/container'

export const PostListSection = () => {
  return (
    <SectionContainer title="siste blogginnlegg" subtitle="om metakognitiv terapi">
      <Container>
        <div sx={{
          mt: '80px'
        }}>
          <PostList numberOfPosts={6} />
        </div>
      </Container>
    </SectionContainer>
  );
}

