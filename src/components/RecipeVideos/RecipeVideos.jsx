import { useStateDataContext } from "../../context/StateContext";
import "./RecipeVideos.scss";

const RecipeVideos = () => {
  const { recipesVideos, recipeDetails } = useStateDataContext();
  console.log(recipesVideos);
  const { title } = recipeDetails;
  return (
    <div className="recipesVideos-container">
      <h3>{`Watch ${title} recipes videos`}</h3>
      <div className="recipesVideos">
        {recipesVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.youTubeId}`}
          >
            <img src={item.thumbnail} alt="image" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecipeVideos;
