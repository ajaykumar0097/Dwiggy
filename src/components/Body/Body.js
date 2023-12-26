import { useState } from "react";
import { KFC_OBJ } from "../../utils/__mock__/__mock__";
import ResCard from "./ResCard/ResCard";

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
  const [listOfRestraurant, setListOfRestraurant]= useState(KFC_OBJ)
  

  const handleClick=() => {
    const listOfRestraurant1=listOfRestraurant.filter((res) => res.info.avgRating>4.2

    
    )
    setListOfRestraurant(listOfRestraurant1);
  }
  return (
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