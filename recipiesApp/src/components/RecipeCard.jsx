import React from 'react'

function RecipeCard({card}) {

    console.log("card",card)



  return (
    <div>
        <div className=' lg:w-65 w-75 mx-auto shadow-sm p-2 rounded-xl'>
            <img src={card.recipeImg}
            className='rounded-xl'
            alt="" />
            <div className='p-2'>
                <h2 className='text-xl font-bold text-rose-600 '>{card.recipeTitle}</h2>
                <p className='text-md'>{card.ingredients}</p>
                <p className='text-md text-gray-600'>{card.recipeDesc}</p>
                <span className='text-blue-500 text-sm'>{card.chefName}</span><br />
                <button className='text-sm shadow cursor-pointer px-2 py-1 my-1 rounded-sm'>view full recipe</button>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard