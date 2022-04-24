import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom';

const GET_BOOK = gql`
query {
  book{
    author
    title
    pages{
        pageIndex
        content
    }
  }
}
`;



function Book() {

    const { error, loading, data } = useQuery(GET_BOOK)

    //fetching data
    if (loading) return <div>Loading ......</div>

    //error validation
    if (error) return <div>Something went wrong ......</div>
    console.log(error, loading, data)

    return (
        <div>
            Book
            <h1>{data?.book.title}</h1>
            <h3>{data?.book.author}</h3>
            {data?.book.pages.map((page) => {
                return (
                    <Link to={`/story/${page.pageIndex}`}>
                        <p>{page.pageIndex}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Book