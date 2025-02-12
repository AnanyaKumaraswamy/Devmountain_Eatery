import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const url = "https://recipes.devmountain.com";

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
  

  axios.post(`https://recipes.devmountain.com/recipes`, values)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

};

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h2>Tell us about your Recipe!</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input
                placeholder=" Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                placeholder=" Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className={styles.radio_container}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className={styles.input_container}>
              <input
                placeholder=" Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                placeholder=" Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                placeholder=" Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            
            <div className={styles.input_container}>
              <div className={styles.ingredient_inputs}>
                <input
                  placeholder=" Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder=" Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >
              Add Another
            </button>
            
            <textarea
              placeholder=" What are the instructions?"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button type="submit" className="blue-btn">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
