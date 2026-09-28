import React from 'react'
import {useForm} from "react-hook-form"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRecipe } from '../../context/RecepiContext';

function CreateRecipe() {

    const {register,handleSubmit,reset} = useForm();

    const { onSubmitHandler } =useRecipe();

    const onSubmit =(data)=>{
        onSubmitHandler(data)
        reset()
    }

    const inputData = [
        {type:"text",name:"recipeImg",placeholder:"Enter img url"},
        {type:"text",name:"recipeTitle",placeholder:"Enter Recipe Title"},
        {type:"text",name:"ingredients",placeholder:"Enter Ingredients with seprated comma "},
        {type:"text",name:"recipeDesc",placeholder:"Enter Recipe Desc"},
        {type:"text",name:"chefName",placeholder:"Enter Chef Name"}

    ]

    return (
    <>
        <Navbar/>
        <div className=' h-120 flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border py-2 rounded-2xl w-80 text-center'>
                <h2 className='font-semibold text-2xl'>Create Recipe</h2>
                {
                    inputData.map((inp,index)=>{
                        return (
                            <div key={index} className='my-2'>
                                <input 
                                type={inp.type} 
                                {...register(inp.name)}
                                placeholder={inp.placeholder} 
                                className='border-b border-gray-800 w-[80%] my-1 focus:outline-0 p-1'
                                />
                            </div>
                        )
                    })
                }
            
                <button type='submit' className='shadow-sm px-4 py-2 my-1 rounded-2xl' >Submit   </button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default CreateRecipe