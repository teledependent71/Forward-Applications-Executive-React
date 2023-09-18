import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Applications Executive</title>
        <meta property="og:title" content="Forward Applications Executive" />
      </Helmet>
    </div>
  )
}

export default Home
