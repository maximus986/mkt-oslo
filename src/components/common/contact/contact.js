/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { ContactInfo } from './contactInfo'
import { SectionContainer, Container } from '../../core/index'
import { Map } from '../contact/map'
import { Form } from '../contact/form'

export const Contact = () => {
  return (
    <SectionContainer title="kontakt">
      <Flex
        sx={{
          flexDirection: ['column', 'row', 'row'],
          flexWrap: [null, 'wrap'],
          justifyContent: 'space-between',
          textAlign: 'center'
        }}>
        <div
          sx={{
            flexBasis: [null, '50%', '30%', '33.4%', '20%']
          }}>
          <ContactInfo />
        </div>
        <div
          sx={{
            flexBasis: [null, '100%', '30%', '33.3%', '50%'],
            flexGrow: [null, '1', '0', null],
            order: [null, 3, 0],
          }}>
          <Form />
        </div>
        <div
          sx={{
            flexBasis: [null, '50%', '30%', '33.3%', '20%']
          }}>
          <Map />
        </div>
      </Flex>
    </SectionContainer>
  );
}

