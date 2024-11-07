import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'

const AllAnime = () => {
  return (
    <>
      <Header></Header>
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-80%">
              <h1 className="text-5xl font-bold">animepi</h1>
              <p className="py-6">
                Consume. Devour. API. 
              </p>
                <Search></Search>
            </div>
          </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AllAnime