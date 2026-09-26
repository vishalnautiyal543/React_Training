import React from 'react'
import {useForm} from "react-hook-form"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CreateRecipe() {

    const {register,handleSubmit} = useForm();

    const onSubmit =(data)=>{
        console.log(data)
    }

    const inputData = [
        {type:"text",name:"recipeTitle",placeholder:"Enter Recipe Title"},
        {type:"text",name:"ingredients",placeholder:"Enter Ingredients with seprated comma "}

    ]

    return (
    <>
        <Navbar/>
        <form onSubmit={handleSubmit(onSubmit)} >

            {
                inputData.map((inp,index)=>{
                    return (
                        <div key={index} >
                            <input 
                            type={inp.type} 
                            {...register(inp.name)}
                            placeholder={inp.placeholder} 
                            />
                        </div>
                    )
                })
            }
           
            <button type='submit' className='shadow-sm' >Submit   </button>
        </form>
        <Footer/>
    </>
  )
}

export default CreateRecipe