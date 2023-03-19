import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";
import RecipeVideos from "../../components/RecipeVideos/RecipeVideos";
import { useStateDataContext } from "../../context/StateContext";
const RecipeDetails = () => {
  const { setId } = useStateDataContext();
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id]);
  return (
    <div>
      <Detail />
      <RecipeVideos />
    </div>
  );
};

export default RecipeDetails;
