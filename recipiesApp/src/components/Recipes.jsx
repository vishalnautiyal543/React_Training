import React from 'react'
import RecipeCard from './RecipeCard'
import {useRecipe} from "../../context/RecepiContext"

function Recipes({recepiesData}) {

  const {setRecipies,recipies} = useRecipe()

  function deleteHandler(id){
    const newRecipes = recipies.filter(r => r.recipeTitle !== id)
    setRecipies(newRecipes)
  }

  return (
    <div className=" my-8 grid gap-4 lg:grid-cols-3 md:grid-cols-2 mx-auto">

      {
        recepiesData?.map((card)=>{
          return <RecipeCard key={card.recipeTitle} card={card} deleteHandler={deleteHandler} />
        })
      }

    </div>
  )
}

export default Recipes