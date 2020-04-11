/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { HeadingLine } from '../../core';

export const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        contactSection(id: "Y29udGFjdHNlY3Rpb246Mzk3Mw==") {
          contactInfo {
            contactInfos: contactinfo {
              ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Telephone {
                title
                telephonenumber
              }
              ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Email {
                additionalinfo
                emailaddress
                title
              }
              ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Address {
                number
                street
                title
              }
              ... on WPGraphQL_ContactSection_Contactinfo_Contactinfo_Openinghours {
                title
                workinghours
              }
            }
          }
        }
      }
    }
  `);
  const contactInfos = data.wpgraphql.contactSection.contactInfo.contactInfos;
  return (
    <div
      sx={{
        textAlign: 'center',
        bg: 'grey',
        p: [10, null, null, null, 14, 15],
        height: '100%',
      }}
    >
      <h2 sx={{ fontSize: [7, 5, null, 7], fontFamily: 'heading' }}>Detaljer</h2>
      <HeadingLine />
      <Grid gap={[10, null, 7]} columns={[1]}>
        {contactInfos.map((contactInfo, i) => {
          const typeName = contactInfo.__typename;

          switch (typeName) {
            case 'WPGraphQL_ContactSection_Contactinfo_Contactinfo_Telephone':
              return (
                <Info key={i}>
                  <Title>{contactInfo.title}</Title>
                  <a href={`tel: ${contactInfo.telephonenumber}`}>
                    {contactInfo.telephonenumber}
                  </a>
                </Info>
              );
            case 'WPGraphQL_ContactSection_Contactinfo_Contactinfo_Email':
              return (
                <Info key={i}>
                  <Title>{contactInfo.title}</Title>
                  <a href={`mailto: ${contactInfo.emailaddress}`}>
                    {contactInfo.emailaddress}
                  </a>
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
            case 'WPGraphQL_ContactSection_Contactinfo_Contactinfo_Openinghours':
              return (
                <Info key={i}>
                  <Title>{contactInfo.title}</Title>
                  <Text sx={{ mt: 0 }}>{contactInfo.workinghours}</Text>
                </Info>
              );
            default:
              return <p>Something went wrong. Please try again.</p>;
          }
        })}
      </Grid>
    </div>
  );
};

const Info = styled.div`
  font-size: 15px;
`;

const Title = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 28px;
  font-weight: 700;
  &:after {
    content: '';
    width: 30px;
    height: 1px;
    background: #b4b4b4;
    display: block;
    margin: 5px auto;
  }
`;

const Text = styled.p`
  margin: 5px 0 0;
`;
