import { useStateDataContext } from "../../context/StateContext";
import "./RecipeVideos.scss";

const RecipeVideos = () => {
  const { recipesVideos, recipeDetails } = useStateDataContext();
  console.log(recipesVideos);
  const { title } = recipeDetails;
  return (
    <div className="recipesVideos-container">
      {recipesVideos.length == 0 ? (
        <p>There are no videos to show</p>
      ) : (
        <>
          <h3>{`Watch ${title} recipes videos`}</h3>
          <div className="recipesVideos">
            {recipesVideos.slice(0, 3).map((item, index) => (
              <div className="recipes-videos-item">
                <a
                  key={index}
                  href={`https://www.youtube.com/watch?v=${item.youTubeId}`}
                >
                  <img src={item.thumbnail} alt="image" />
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeVideos;
