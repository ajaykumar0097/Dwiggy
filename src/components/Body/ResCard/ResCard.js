import { CDN_URL } from "../../../utils/constants";


const ResCard = ({resData}) =>{
  
    return(
      <div className="card" style={{ backgroundColor:"#f0f0f0", }}>
        <img className="res-logo" src={`${CDN_URL}${resData.info.cloudinaryImageId}`} alt="cardImg"  />
    
        <h3>{resData.info.name}</h3>
        <p>{(resData.info.cuisines).join(", ")}</p>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    )
  }

  export default ResCard;
  