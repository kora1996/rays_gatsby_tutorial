import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer'>
        <p>
            &copy; {new Date().getFullYear()} <span>SimplyRecipe</span> Built with <a href="https://www.gatsbyjs.com/plugins">Gatsby</a>
        </p>
    </footer>
  )
}

export default Footer