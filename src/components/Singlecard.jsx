import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Singlecard = () => {
  const { id } = useParams();
  console.log("id: " + id);
  const [RestoName, setRestoName] = useState("");

  const getdata = async () => {
    const getdata = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await getdata.json();
    console.log(data);
    const RestoName = data?.data?.cards[2]?.card?.card?.info;
    setRestoName(RestoName);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-2 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
  {/* Restaurant Name */}
  <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
    {RestoName.name}
  </h2>

  {/* Rating and Cost */}
  <div className="flex items-center text-sm text-gray-600 gap-3 mb-3">
    <span className="bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
      ⭐ {RestoName.avgRating}
    </span>
    <span className="text-gray-500">({RestoName.totalRatingsString})</span>
    <span className="text-gray-400">•</span>
    <span className="text-gray-700">{RestoName.costForTwoMessage}</span>
  </div>

  {/* Cuisines */}
  <div className="flex flex-wrap gap-2 mb-3">
    {RestoName.cuisines?.map((cuisine, index) => (
      <span
        key={index}
        className="text-xs bg-[#ff5200] text-white px-3 py-1 rounded-full font-medium"
      >
        {cuisine}
      </span>
    ))}
  </div>

  {/* Location & Delivery Time */}
  <div className="text-sm text-gray-700 space-y-1">
    <p className="flex items-center gap-2">
      📍 <span>{RestoName.city}</span>
    </p>
    <p className="flex items-center gap-2">
      ⏱️ <span>{RestoName.sla?.slaString}</span>
    </p>
  </div>
</div>

  );
};
export default Singlecard;
