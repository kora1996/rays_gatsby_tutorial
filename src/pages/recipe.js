
import React from 'react'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

const Recipe = () => {
  return (
    <Layout>
      <SEO title='recipe'/>
      <main className="page">
        <AllRecipes/>
      </main>
    </Layout>
  )
}


export default Recipe