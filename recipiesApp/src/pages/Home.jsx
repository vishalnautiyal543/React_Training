import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {


  return (
    <>
        <div className="w-[80%] mx-auto">
            <Navbar/>
            <Header/>
            <Footer/>
        </div>
    </>
  )
}

export default Home