import { useEffect, useState } from "react"
import Shimmer from "../Shimmer"
import { useParams } from "react-router-dom"
import { CDN_URL } from "../../utils/constants";

import './RestraurantMenu.css'

const RestraurantMenu = () => {
    const [resInfo, setResInfo]= useState(null)

    const {resId} =useParams()
  

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.637278&lng=77.2259488&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)

        const json = await data.json();
        // const Data=json?.data
        setResInfo(json.data)
    }
    console.log("data mil gya", resInfo);

// const {name} = resInfo?.cards?.[0]?.card?.card?.info
const itemCards= resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards
console.log("img",resInfo?.cards?.[0]?.card?.card?.info?.cloudinaryImageId);


 
  return  resInfo===null? (<Shimmer/>):(
    <div className="menu">
        <h1 className="name">{resInfo?.cards?.[0]?.card?.card?.info?.name}</h1>
        <img className="rest__img" src={`${CDN_URL}${resInfo?.cards?.[0]?.card?.card?.info?.cloudinaryImageId}`} />
        <p>{resInfo?.cards?.[0]?.card?.card?.info?.cuisines.join(", ")}</p>
        <h5>{resInfo?.cards?.[0]?.card?.card?.info?.costForTwoMessage}</h5>

        <ul>
            {itemCards?.map((val) => <li>{val?.card?.info?.name} - Rs. {val?.card?.info?.price} {val?.card?.info?.defaultPrice}</li>)}
        </ul>
      
    </div>
  )
}

export default RestraurantMenu
