import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Recipes from '../components/Recipes'
import { useRecipe } from '../../context/RecepiContext'

function Home() {

  const {recipies} =useRecipe()

  //  const localStorageData =localStorage.getItem("result")

  //  const recipies = JSON.parse(localStorageData)

  return (
    <>
        <div className="w-[80%] mx-auto">
            <Navbar/>
            <Header/>
            
            <div className='my-2'>
              <h2 className='text-center my-3 text-4xl'>*-Recipes-*</h2>
              <div>
                <Recipes recepiesData={recipies} />
              </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Home