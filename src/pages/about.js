import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const about = ({data: {allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <SEO title='About' description='this is about page'/>

    <main className="page">
      <section className="about-page">
        <article>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis repellat aut, harum voluptatibus atque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis repellat aut, harum voluptatibus atque!</p>

        <Link to='/contact' className='btn'>
          contact
        </Link>
        </article>
      <StaticImage src='../assets/images/dog.jpg' alt='dog pic'
      className='about-img' //this class applied to the wrapper. not to image
      placeholder='blurred'
      />
      </section>

    <section className="featured-recipes">
      <h5>
        look at this awesome source
      </h5>

      <RecipesList recipes={recipes}/>
    </section>

    </main>

    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default about