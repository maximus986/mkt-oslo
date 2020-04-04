/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { ContactInfo } from './contactInfo'
import { SectionContainer, Container } from '../../core/index'
import { Map } from '../contact/map'
import { Form } from '../contact/form'

export const Contact = () => {
  return (
    <SectionContainer title="kontakt">
      <div sx={{ mb: 14 }}>
        <Container >
          <ContactInfo />
          <Grid gap={[11, null, 0]} columns={[1, 1, '1fr 1fr']}>
            <Form />
            <Map />
          </Grid>
        </Container>
      </div>
    </SectionContainer>
  );
}

