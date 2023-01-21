import React from 'react'
import styled from 'styled-components'
import big from '../images/big.jpg'
import { StaticImage } from 'gatsby-plugin-image'

const Images = () => {
  return (
    <Wrapper>
      <article>
      <h4>constraind / default</h4>
      < StaticImage src='../images/recipes/recipe-1.jpeg' 
      alt='food'
      height={400}
      placeholder='tracedSVG'
      layout='constrained' //default
      className='example-img'
      as='section'
      />
      <h2>Gatsby Images</h2>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`

export default Images