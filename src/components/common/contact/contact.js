/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { SectionContainer } from '../../core/index';
import { Map, ContactInfo, Form } from './index';

export const Contact = () => {
  return (
    <SectionContainer title="kontakt">
      <Flex
        sx={{
          flexDirection: ['column', 'row', 'row'],
          flexWrap: [null, 'wrap'],
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <div
          sx={{
            flexBasis: [null, '50%', '30%', '33.4%', '24%', '20%'],
          }}
        >
          <ContactInfo />
        </div>
        <div
          sx={{
            flexBasis: [null, '100%', '30%', '33.3%', '45%', '50%'],
            flexGrow: [null, '1', '0', null],
            order: [null, 3, 0],
          }}
        >
          <Form />
        </div>
        <div
          sx={{
            flexBasis: [null, '50%', '30%', '33.3%', '24%', '20%'],
          }}
        >
          <Map />
        </div>
      </Flex>
    </SectionContainer>
  );
};
