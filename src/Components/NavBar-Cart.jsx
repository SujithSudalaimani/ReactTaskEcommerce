import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const NavBarCart = ({cartvalue, setCartvalue}) => {
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        totalValue();
    }, [cartvalue])

    const totalValue = () => {
        const totalAmount = cartvalue.reduce((add, item) => add + item.price, 0);
        setTotal(totalAmount);
      };
      console.log("TOTAL: ", total)

      const handleRemove = (index) => {
        console.log("clicked")
        const updatedCart = cartvalue.filter((_, i) => i !== index);
        setCartvalue(updatedCart);

      };

      
      
        
    
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-1" >
      <div className="flex-1">
        <a className="font-bold text-xl">GUVI Mart</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle p-7">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
                {" "}
              </svg>
              <span className="badge badge-sm indicator-item">{cartvalue.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-5 xl:w-150 shadow max-h-90 overflow-y-auto"
          >
            <div className="card-body">
                <div className="flex justify-between">
              <span className="text-lg font-bold  text-amber-400">{cartvalue.length} <span className="text-blue-50">Items</span> </span>
              <span className="text-sm font-bold text-amber-400">Cart Value: <span className="text-blue-50">${total}</span> </span>
              </div>
              {cartvalue.map((product, index) => ( 
                <div key={index} >
                    <div className="bg-cyan-950 rounded-lg">
                    <div className="flex justify-between px-5 py-5 gap-10 ">
                   <div className="group relative shadow-xl/20 rounded-xl md:w-20 md:h-60 lg:w-20 lg:h-10">
                  <img
                    alt="no image"
                    src= {product.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-12 lg:w-40 md:w-14 md:h-10"
                  />
                  </div>
                  <p className="text-md font-bold text-amber-400">
                      {product.title}
                    </p>
                    <p className="text-md font-bold text-amber-400">
                      ${product.price}
                    </p>
                    <div>
                     <FontAwesomeIcon
                     onClick={ () => handleRemove(index)}
                        icon={faTrash}
                        className="text-amber-300 cursor-pointer"
                      />
                        </div>
                    </div>
                    </div>
                    </div>
              ))}

              {/* <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow"
          >
              <p className="text-md font-bold text-amber-400">
                Sujith
              </p>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarCart;
