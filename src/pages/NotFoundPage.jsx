import React from 'react'
import Header from '../components/Header'
import notFoundImage from '/Users/kendramoore/rick/public/rick-and-morty-31043.png'

function NotFoundPage() {
  return (
    <>
     <Header />
      <h1 id="error-page">404: Page Not Found</h1>
      <img src={notFoundImage}/>
    </>
  )
}

export default NotFoundPage