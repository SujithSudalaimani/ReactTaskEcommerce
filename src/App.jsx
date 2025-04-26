import React from 'react';
// import NavBarCart from './Components/NavBar-Cart';
import ProductPage from './Components/Productpage';


const App = () => {
  const handlebtn =()=>{
    console.log("clicked")
  }
  return (
    <div>
     
      <ProductPage/>
    </div>
  );
};

export default App;