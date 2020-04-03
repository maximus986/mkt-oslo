import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

export const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
      contactSection(id: "Y29udGFjdHNlY3Rpb246Mzk3Mw==") {
        contactInfo {
          contactinfo {
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
              fieldGroupName
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
  const contactinfo = data.wpgraphql.contactSection.contactInfo.contactinfo
  console.log(contactinfo)
  return (
    <div>
      {/* {content.map((section, i) => {
        const typeName = section.__typename;

        switch (typeName) {
          case 'WPGraphQL_Page_Sections_Content_Hero':
            return <Hero key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Welcome':
            return <Welcome key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Pschylogistinfo':
            return <PsychologistInfo key={i} {...section} menuItems={menuItems} />;
          case 'WPGraphQL_Page_Sections_Content_About':
            return <About key={i} {...section} />;
          case 'WPGraphQL_Page_Sections_Content_Quotes':
            return <Quotes key={i} {...section} />;
          // This is a fake posts typename.
          // Its purpose is to hold a place for posts section because they are fetched and styled
          // in a separate component that is used on the blog page as well.
          case 'WPGraphQL_Page_Sections_Content_Fakeposts':
            return <PostListSection key={i} />;
          case 'WPGraphQL_Page_Sections_Content_Learnmore':
            return <LearnMore key={i} {...section} />;
          default:
            return <p>Something went wrong. Please try again.</p>;
        }
      })} */}
    </div>
  );
}

