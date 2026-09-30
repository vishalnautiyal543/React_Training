import { createContext, useContext, useEffect, useState } from "react";

const RecepiContext = createContext(null);

export const RecepiProvider = ({ children }) => {

     const [recipies, setRecipies] = useState(() => {
        const data = localStorage.getItem("result");
        return data ? JSON.parse(data) : [];
    });

    const onSubmitHandler = (data) => {
        setRecipies(prev => [...prev, data]);
    };



    useEffect(()=>{
         const result =  JSON.stringify(recipies)
            localStorage.setItem("result",result)
    },[recipies])

   

    return (
        <RecepiContext.Provider value={{ onSubmitHandler, recipies,setRecipies }}>
            {children}
        </RecepiContext.Provider>
    );
};

export const useRecipe = () => {

    const context = useContext(RecepiContext);

    if (context === null) {
        throw new Error("useRecipe must be used within a RecepiProvider");
    }

    return context;
};