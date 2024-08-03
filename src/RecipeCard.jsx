import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./RecipeCard.css";



const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
    <div className="recipe_card">
      <div className="recipe_card_main">
        <div className="recipe_img_container">
        <img src={recipe && recipe.image_url} />
        </div>
        <h3 className="recipe-name">{recipe && recipe.recipe_name}</h3>
      </div>
      <button className="see-more-btn" onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;

