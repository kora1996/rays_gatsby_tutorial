

import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
import SEO from '../components/SEO'

const Tags = ({data:{allContentfulRecipe:{nodes:thing}}}) => {
  const newTags = setupTags(thing)
  return (
    <Layout>
      <SEO title='tags'/>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag,index)=>{
            const [text, value] = tag
            const textSlug = slugify(text, {lower:true})
            return (
              <Link to={`/tags/${textSlug}`} key={index} className='tag'>
                <h5>{text}</h5>
                <p>{value} recipes</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`


export default Tags 