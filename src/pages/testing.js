import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../assets/example/Gallery'

const Testing = () => {
  return (
    <Layout>
      <main className="page">

      <Gallery />
      </main>
    </Layout>
  )
}

export default Testing