import * as React from "react"
import Layout from '../components/Layout'
import Images from "../assets/example/Images"
import { StaticImage } from "gatsby-plugin-image"
import Hi from '../assets/example/hi'
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' />
      <main className="page">
        <header className="hero">
          <StaticImage
          src="../assets/images/big.jpg"
          alt="hero"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth" 
          />

          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipe</h1>
              <h4>no fluff, just recipe</h4>
            </div>
          </div>
        </header>
      <AllRecipes/>
      </main>


    </Layout>
  )
}
