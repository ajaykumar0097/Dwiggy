import { useEffect, useState } from "react";
import ResCard from "./ResCard/ResCard";
import Shimmer from "../Shimmer";

// const listOfRestraurantJs =
//     [
//       {
//       info: {
//         name: "ajay",
//         avgRating: "3"

//       }
//     },
//     {
//       info: {
//         name: "kmr",
//         avgRating: "4.5"

//       }
//     },
//     {
//       info: {
//         name: "kas",
//         avgRating: "5"

//       }
//     }
//   ]
const Body = () => {
  const [listOfRestraurant, setListOfRestraurant] = useState([])
  const [filteredRestraurant, setFilteredRestraurant] = useState([])
  const [searchText, setSearchText] = useState("")
  console.log("body render");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    const restData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(json.data.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestraurant(restData)
    setFilteredRestraurant(restData)
  }


  const handleClick = () => {
    const listOfRestraurant1 = listOfRestraurant.filter((res) => res.info.avgRating>4.2)
    setFilteredRestraurant(listOfRestraurant1);
  }



  return listOfRestraurant.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button onClick={() => {
              const filtereList = listOfRestraurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestraurant(filtereList)
          }}>Search</button>
        </div>
        <button className="filter-btn search" onClick={handleClick}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">

        {
          filteredRestraurant.map((item) => <ResCard resData={item} />)
        }

      </div>
    </div>
  )
}

export default Body;