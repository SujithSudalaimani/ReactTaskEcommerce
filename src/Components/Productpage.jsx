import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductListPage from "./ProductListPage";

const ProductPage = () => {
  const [productlist, setProductlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // const response = await axios.get( "https://jsonplaceholder.typicode.com/users")
      setProductlist(response.data);
      console.log("Productvalue: ", response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {productlist.length > 0 ? (
        // if mapping is done here it will sent as single, single object not as an array
        // productlist.map((productlist,index)=>{
        //     return (
        // if send as state only it will be sent as array of object
        <div>
          <ProductListPage product={productlist} />
        </div>
      ) : (
        //     );
        // })
        <div className="flex justify-center text-center mt-50">No Data</div>
      )}
    </div>
  );
};

export default ProductPage;
