import React from 'react'
import RecipeCard from './RecipeCard'

function Recipes({recepiesData}) {

  console.log("Recipe",recepiesData)

  return (
    <div className=" my-8 grid gap-4 lg:grid-cols-3 md:grid-cols-2 mx-auto">


      {
        recepiesData?.map((card)=>{
          return <RecipeCard key={card.recipeTitle} card={card} />
        })
      }




      
      {/* <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/> */}
    </div>
  )
}

export default Recipes