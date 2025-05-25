import { RESTRO_LOGO } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const RestuarantCard = ({ resdata }) => {
  const navigate = useNavigate();

  const handleclcik = () => {
    console.log("clicked");
    navigate(`/singlecard/${resdata.info.id}`);
  };

  return (
    <div
      onClick={handleclcik}
      className="bg-gray-100 rounded-lg shadow-md w-72 p-4 hover:shadow-xl transition duration-300 cursor-pointer"
    >
      <img
        alt="res-logo"
        className="w-full h-48 object-cover rounded-md mb-4"
        src={`${RESTRO_LOGO}${resdata.info.cloudinaryImageId}`}
      />
      <h3 className="text-lg font-semibold text-gray-800 truncate">
        {resdata.info.name}
      </h3>
      <h4 className="text-sm text-gray-600 truncate">
        {resdata.info.cuisines.join(", ")}
      </h4>
      <h4 className="text-sm text-gray-700 mt-1">{resdata.info.costForTwo}</h4>
      <h4 className="text-sm text-green-600 font-medium mt-1">
        ⭐ {resdata.info.avgRating}
      </h4>
    </div>
  );
};

export default RestuarantCard;
