import { useLocation } from "react-router-dom";
import { useRecipe } from "../../context/RecepiContext";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function RecipeDetail() {
  const { recipies } = useRecipe();
  const location = useLocation();

  const { title } = location.state;

  const detail = recipies.find(
    (e) => e.recipeTitle === title
  );

  console.log(detail)

  return (
    <>
    <div className="w-[80%]  mx-auto">
      <Navbar/>
      <div className="flex flex-col lg:flex-row p-3 my-3  gap-5">
        <div className="lg:w-[50%] rounded-2xl overflow-hidden">
          <img src={detail?.recipeImg} alt="" />
        </div>

        <div className="pl-5 lg:w-[50%]">
          <h2 className="text-4xl font-bold">{detail?.recipeTitle}</h2>
          <span className="text-sm my-1 text-red-500 py-2" >Ingredients:</span>
          <p className="text-xl font-medium">{detail.ingredients}</p>
          <span className="text-sm my-1 text-red-500 py-2" >Recipe Description:</span>
          <p>{detail?.recipeDesc}</p>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default RecipeDetail;
