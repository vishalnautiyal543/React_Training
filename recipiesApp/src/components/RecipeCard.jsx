import React from 'react'
import {useNavigate} from "react-router-dom"

function RecipeCard({card,deleteHandler}) {

    const navigate = useNavigate();

    
    function clickHandler(title){
        navigate("/recipe/recipeDetail", {state:{title:title}})
    }



  return (
    <div>
        <div className=' lg:w-65 w-75 mx-auto shadow-sm p-2 rounded-xl'>
            <img src={card.recipeImg}
            className='rounded-xl'
            alt="" />
            <div className='p-2'>
                <h2 className='text-xl font-bold text-rose-600 '>{card.recipeTitle}</h2>
                <p className='text-md'>{card.ingredients}</p>
                <p className='text-md text-gray-600'>{`${(card.recipeDesc).slice(0,20)}...`}</p>
                <span className='text-blue-500 text-sm'>{card.chefName}</span><br />
                <button 
                onClick={()=>clickHandler(card.recipeTitle)}
                className='text-sm shadow cursor-pointer px-2 py-1 my-1 rounded-sm'
                >view full recipe</button>
                <button 
                onClick={()=>deleteHandler(card.recipeTitle)}
                className='text-sm mx-1 shadow cursor-pointer px-2 py-1 my-1 rounded-sm'
                >delete</button>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard