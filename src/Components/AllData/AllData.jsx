import { useEffect, useState } from "react";
import Category from "../Category/Category";

const AllData = () => {
    const [allData,setAllData] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
        .then((res)=>res.json())
        .then((data) =>setAllData(data))
    },[]);
    console.log(allData);
    // {Object.keys(data).map((category)
    return (
        <div>
     
        {Object.keys(allData).map((category) => (
          <div key={category}>
           
            <div className="grid grid-cols-4 gap-10 px-10">
              {allData[category].map((item) =><Category key={item.product_id} item={item}></Category>)}
                {/* // <li key={item.product_id}>
                //   <h3>{item.product_title}</h3>
                //   <img src={item.product_image} alt={item.product_title}/>
                //   <p>Category: {item.category}</p>
                //   <p>Price: ${item.price}</p>
                //   <p>Description: {item.description}</p>
                //   <p>Rating: {item.rating} ⭐</p>
                //   <p>Available: {item.availability ? "Yes" : "No"}</p>
                //   <ul>
                //     <strong>Specifications:</strong>
                //     {item.specification.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </li> */}
             
            </div>
          </div>
        ))}
      </div>
    );
};

export default AllData;