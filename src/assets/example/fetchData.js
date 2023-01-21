import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
   query {
  site {
    info:siteMetadata {
      author
      description
      complexData {
        age
        name
      }
      persin {
        age
        name
      }
      simpleData
      title
    }
  }
}
`

const FetchData = () => {
    // const data = useStaticQuery(getData)
    // console.log(useStaticQuery(getData))

    // * destructure
    const {
        site: {
            info: {title},
        },
    } = useStaticQuery(getData)

  return (
    <div>
    {/* <h1>hello from fetch data</h1> */}
    <h1>site title is : {title}</h1>
    </div>
  )
}

export default FetchData