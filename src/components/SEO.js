import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({title, description}) => {
    const {site} = useStaticQuery(query)
    const metaDescription = description || site.siteMetadata.description
  return (
    //https://www.npmjs.com/package/react-helmet?activeTab=readme
    // Helmet is where you set up the meta information.   
    <Helmet 
    //The HTML lang attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, and it is also used by screen readers that switch language profiles to provide the correct accent and pronunciation.
    htmlAttributes={{lang:'en'}}
    title={title + ` | ${site.siteMetadata.title}`} 
    meta={[{name:`description`, content:metaDescription}]}
    ></Helmet>
  )
}

export default SEO