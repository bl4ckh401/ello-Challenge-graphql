import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";


const STORY_BOOK = gql`
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

function Page() {
    const { pageIndex } = useParams()
    const { error, loading, data } = useQuery(STORY_BOOK, {
        variables: {
            pageIndex,
        }
    })
    const navigate = useNavigate()


    //fetching data
    if (loading) return <div>Loading ......</div>

    //error validation
    if (error) return <div>Something went wrong ......</div>
    console.log(error, loading, data)

    return (
        <div >
            Page
            <div className="StoryPage">
                {data.book.pages.map((page) => {
                    const bookPosition = []
                    const pageId = page.pageIndex
                    const content = page.content
                    const tokens = page.tokens
                    const value = tokens.map((token) => token.value)
                    const position = tokens.map((token) => token.position)
                    const my_array = content.split(' ')

                    my_array.forEach((element, index) => {
                        bookPosition.push({
                            'content': element,
                            'position': position[index],
                            'value': value[index]
                        })
                    });

                    const bookContent = bookPosition.map((content) => content.content)
                    const bookValue = bookPosition.map((content, index) => content.value)


                    const handleClick = (letter, index) => {
                        navigate(`/story/${pageIndex}/${bookValue.forEach((element) => element.value)}`)
                        console.log(letter)
                            ;
                        // handle the rest

                    };

                    const renderParagraph = () => Array.from(bookContent).map((letter) => <span onClick={() => handleClick(letter)}>{letter}</span>).reduce((prev, curr) => [prev, ' ', curr]);

                    console.log(bookPosition)
                    return (
                        <div key={pageId} className="IndividualPage">
                            <div className="Word">
                                {renderParagraph()}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Page