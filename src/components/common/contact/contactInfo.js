/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

export const ContactInfo = () => {
  const data = useStaticQuery(graphql`
  {
    wpgraphql {
      contactSection(id: "Y29udGFjdHNlY3Rpb246Mzk3Mw==") {
        contactInfo {
          contactInfos: contactinfo {
            ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Telephone {
              __typename
              open
              telephonenumber
              title
            }
            ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Email {
              __typename
              additionalinfo
              emailaddress
              title
            }
            ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Address {
              __typename
              number
              street
              title
            }
          }
        }
      }
    }
  }
`)
  const contactInfos = data.wpgraphql.contactSection.contactInfo.contactInfos
  return (
    <Grid gap={[11, null, 0]} columns={[1]} sx={{ textAlign: 'center' }}>
      {contactInfos.map((contactInfo, i) => {
        const typeName = contactInfo.__typename;

        switch (typeName) {
          case 'WPGraphQL_ContactSection_Contactinfo_Contactinfo_Telephone':
            return (
              <Info key={i}>
                <Title>{contactInfo.title}</Title>
                <a href={`tel: ${contactInfo.telephonenumber}`}>{contactInfo.telephonenumber}</a>
                <Text>{contactInfo.open}</Text>
              </Info>
            );
          case 'WPGraphQL_ContactSection_Contactinfo_Contactinfo_Email':
            return (
              <Info key={i}>
                <Title>{contactInfo.title}</Title>
                <a href={`mailto: ${contactInfo.emailaddress}`}>{contactInfo.emailaddress}</a>
                <Text>{contactInfo.additionalinfo}</Text>
              </Info>
            );
          case 'WPGraphQL_ContactSection_Contactinfo_Contactinfo_Address':
            return (
              <Info key={i}>
                <Title>{contactInfo.title}</Title>
                <Text sx={{ mt: 0 }}>{contactInfo.street}</Text>
                <Text>{contactInfo.number}</Text>
              </Info>
            );
          default:
            return <p>Something went wrong. Please try again.</p>;
        }
      })}
    </Grid>
  );
}

const Info = styled.div`
  font-size: 15px;
`

const Title = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 28px;
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background: #b4b4b4;
    display: block;
    margin: 5px auto;
  }
`

const Text = styled.p`
  margin: 5px 0 0;
`

