import { KFC_OBJ } from "../../utils/__mock__/__mock__";
import ResCard from "./ResCard/ResCard";

const Body =() => {
    return(
      <div className="body">
        <div className="search">
            <button className="filter-btn"  onClick={() => console.log("clicked")}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        
          {
              KFC_OBJ.map((item)=> <ResCard resData={item}/>)
          }
         
        </div>
      </div>
    )
  }

  export default Body;