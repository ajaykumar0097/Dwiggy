import { useEffect, useState } from "react";
import { KFC_OBJ } from "../../utils/__mock__/__mock__";
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
  const [listOfRestraurant, setListOfRestraurant]= useState([])

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async() =>{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    const restData=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(json.data.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestraurant(restData)
  }
  

  const handleClick=() => {
    const listOfRestraurant1=listOfRestraurant.filter((res) => res.info.avgRating>4.2

    
    )
    setListOfRestraurant(listOfRestraurant1);
  }

 
  
  return listOfRestraurant.length===0? (<Shimmer/>): (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={handleClick}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">

        {
          listOfRestraurant.map((item) => <ResCard resData={item} />)
        }

      </div>
    </div>
  )
}

export default Body;