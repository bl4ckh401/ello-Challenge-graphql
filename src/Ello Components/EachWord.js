import { gql, useQuery } from '@apollo/client'
import React from 'react'

const EACH_PAGE = gql`
query getPageContent{
  book{
    pages{
      pageIndex
      content
      tokens{
          position
          value
      }
    }
  }
}
`

function EachWord() {
  const { error, loading, data } = useQuery(EACH_PAGE)

  console.log(error, loading, data)

  return (
    <div>

    </div>
  )
}

export default EachWord