import React, { useState, useSyncExternalStore } from "react";
import NavBarCart from "./NavBar-Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const ProductListPage = ({ product }) => {
  const [cartvalue, setCartvalue] = useState([]);
  // const [prodData, setProdData] = useState(product)

  const handlebtn = (product) => {
    // using some operator to check id and it returns true or false
    const isProductInCart = cartvalue.some(
      (element) => element.id === product.id
    );
    console.log(isProductInCart);
    if (isProductInCart) {
    const ProdAlert =  alert("This product is already in the cart!");
    } else {
      setCartvalue((prevCart) => {
        const updatedCart = [...prevCart, product];
        console.log("cartvalue:", updatedCart);
        return updatedCart;
      });
    }
  };

  return (
    <>
      <NavBarCart cartvalue={cartvalue} setCartvalue={setCartvalue}  />

      <div className="bg-[#0d0c0c]">
       {/* <p>{ProdAlert}</p>  */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid:cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
            {product.map((product, index) => (
              
              <div key={index}>
                <div className=" flex flex-col justify-between group relative shadow-sm shadow-gray-100 rounded-xl h-full">
                  <img
                    alt="no image"
                    src={product.image}
                    className="aspect-square w-full object-contain rounded-lg bg-neutral-50 group-hover:opacity-75 lg:aspect-auto lg:h-80 xs:h-10"
                  />
                  <div className="mt-4 flex px-5">
                    <div>
                      <h3 className="text-md font-bold text-[#ede9e6]">
                          {product.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-between px-5 mt-3 items-center">
                    <p className="mt-1 text-[10px] sm:text-sm md:text-[9px] lg:text-sm xl:text-sm text-amber-300 bg-[#51524d] px-2 py-1 rounded ">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="sm:text-amber-300 md:text-amber-300 lg:text-amber-300 xl:text-amber-300"
                      />{" "}
                      {product.rating?.rate}
                    </p>
                    <p className="text-xs sm:text-xl md:text-xl lg:text-xl xl:text-xl md:text-[14px] font-bold text-[#ede9e6]">
                      ${product.price}
                    </p>
                    <p className="text-[10px] sm:text-sm md:text-[9px] lg:text-sm xl:text-smfont-medium text-amber-300  bg-[#51524d] px-2 py-1 rounded">
                      {product.rating?.count}
                      <span className=" md:text-xs lg:text-xs xl:text-xs text-[10px] text-amber-300"> Buys</span>
                    </p>
                  </div>

                  <div className="flex justify-center pt-5 pb-3">
                  <button
                    className="bg-amber-300 text-black px-4 py-2 rounded-2xl cursor-pointer active:scale-95 transition transform duration-150"
                    onClick={() => handlebtn(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
