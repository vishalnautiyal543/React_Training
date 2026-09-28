import { createContext, useContext, useState } from "react";

const RecepiContext = createContext(null);

export const RecepiProvider = ({ children }) => {

    const [recipies, setRecipies] = useState([]);

    const onSubmitHandler = (data) => {
        setRecipies(prev => [...prev, data]);
    };

    console.log(recipies)

    return (
        <RecepiContext.Provider value={{ onSubmitHandler, recipies }}>
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