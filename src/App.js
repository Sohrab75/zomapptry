import React, { useEffect, useState } from 'react';
import Home from './homepage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Listing from './listingpage/Listing';
import ProductDetails from './detailspage/ProductDetails';
import PlaceOrder from './order/PlaceOrder';
import {availableProducts} from "./order/PlaceOrder"
import { useAuth0 } from "@auth0/auth0-react";
import Login from './loginpage/Login';

function App() {
  const { user, isAuthenticated, isLoading,logout,loginWithRedirect } = useAuth0();

  const[orderDetails, setDetails] = useState([]);
    console.log("taking data from product details",orderDetails);

    // const { user, isAuthenticated, isLoading } = useAuth0();

    // if (isLoading) {
    //   return <div>Loading ...</div>;
    // }

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       loginWithRedirect({
  
        
  //         // Add any additional redirect options if needed
  //         // For example:
  //         appState: { targetUrl: "/Cart" }, 
          
  //       });
  //     }
  //   }, []);
  return (
    <>
    {(isAuthenticated) &&  <h3>hello {user.name}</h3>}
      {(isAuthenticated)?
      (<button onClick={() => logout()}>logout</button>):
      
      (<Login/>)}
      {(isAuthenticated)?
        (<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/category/:catId" element={<Listing/>}/>
        <Route exact path="/products/:id" element={<ProductDetails setDetails={setDetails}/>}/>
        <Route exact path="/placeOrder" element={<PlaceOrder orderDetails={orderDetails}/>}/>
      </Routes>
    </BrowserRouter>):"null"
      }
    </>
  );
}

export default App;
