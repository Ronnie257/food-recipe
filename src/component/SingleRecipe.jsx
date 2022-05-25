
import style from "../recipe.module.css"


export const SingleRecipe = ({ title, image, calories, ingredients }) => {
  return (
    <>
      <div className={style.recipe}>
        <h1>{title}</h1>
        <ul>
          {ingredients.map((ingredient, i) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <p>{calories}</p>
        <img className={style.image} src={image} alt={title} />
      </div>
    </>
  );
};