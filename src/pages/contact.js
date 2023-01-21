import React from 'react'
import Layout from '../components/Layout'
import {  graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const Contact = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <SEO title='contact'/>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">

          <h3>Lorem, ipsum dolor.</h3>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quia non excepturi totam blanditiis debitis.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eligendi ratione quidem possimus inventore maxime.</p>

          </article>

          <article>
            <form  
            className="form contact-form"
            action="https://formspree.io/f/moqzvpvr"
            method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text"  name='name' id='name'/>
              </div>

              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text"  name='email' id='email'/>
              </div>

              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" ></textarea>
              </div>

              <button type='submit' className="btn block">
                submit
              </button>

            </form>
          </article>
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

export default Contact 
