import RestuarantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setresLists] = useState([]);
  const [text, searchText] = useState("");
  const [filterText, setfilterText] = useState([]);
  const [Sliderdata, setSliderData] = useState([]);
  const [isPriceState, setPriceState] = useState(false);
  const [isRatingState, setRatingState] = useState(false);

  const fetchdata = async () => {
    const api = await fetch("./mockdata.json");
    const data = await api.json();
    let finaldata =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let silderdata = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;


    console.log(finaldata);
    console.log(silderdata);
    setSliderData(silderdata);
    setresLists(finaldata);
    setfilterText(finaldata);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return filterText.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Buttons and search */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto"
            onClick={() => {
              let filterlist = resList.filter((res) => res.info.avgRating > 4);
              setfilterText(filterlist);
            }}
          >
            Top Rated Restaurants
          </button>

          <input
            className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-60"
            type="text"
            placeholder="Search restaurant..."
            value={text}
            onChange={(e) => searchText(e.target.value)}
          />

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto"
            onClick={() => {
              const searchdata = resList.filter((res) =>
                res?.info?.name?.toLowerCase().includes(text.toLowerCase())
              );
              setfilterText(searchdata);
            }}
          >
            Search
          </button>

          <button
            className={`px-4 py-2 rounded-lg shadow w-full sm:w-auto ${
              isPriceState
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => {
              if (!isPriceState) {
                const PriceData = resList.filter((res) => {
                  const pricestring = res?.info?.costForTwo;
                  const Price = parseInt(pricestring.replace(/[^\d]/g, ""));
                  return Price >= 300 && Price <= 600;
                });
                setfilterText(PriceData);
                setPriceState(true);
              } else {
                setfilterText(resList);
                setPriceState(false);
              }
            }}
          >
            Rs. 300-Rs. 600 {isPriceState && <span className="ml-2">×</span>}
          </button>

          <button
            className={`px-4 py-2 rounded-lg shadow w-full sm:w-auto ${
              isRatingState
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => {
              if (!isRatingState) {
                const RatingFilter = resList.filter(
                  (res) => res?.info?.avgRating > 3.5
                );
                setfilterText(RatingFilter);
                setRatingState(true);
              } else {
                setfilterText(resList);
                setRatingState(false);
              }
            }}
          >
            Ratings 3.5+ {isRatingState && <span className="ml-2">×</span>}
          </button>
        </div>
      </div>

      {/* Slider Heading */}
      <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
        What's on your mind?
      </h2>

      {/* Slider Section */}
      <div className="relative w-full py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {Sliderdata.map((res) => (
            <img
              key={res.id}
              className="w-auto h-28 md:h-36 rounded-lg object-contain flex-shrink-0 bg-white"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${res.imageId}`}
              alt="slider"
            />
          ))}
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {filterText?.map((resturant) => (
          <RestuarantCard
            key={resturant.info.id}
            resdata={resturant}
            Sliderdata={Sliderdata}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
