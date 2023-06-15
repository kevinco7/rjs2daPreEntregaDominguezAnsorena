import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// import reportWebVitals from "./reportWebVitals";

// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import ItemListContainer from "./components/itemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
// import NavBarPsi from "./components/navbar/Navbar";
// import { CartContext } from "./components/context/cartContext";

// const [carrito,setCarrito] = useState([]);

// const user="kevinco";
// const edad="33";

// const router = createBrowserRouter([
//   {
//     element: (
//       <>
//       <CartContext.Provider value={user}>

//         <NavBarPsi />
//         <Outlet />
//       </CartContext.Provider>
//       </>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <ItemListContainer />,
//       },
//       {
//         path: "/productos",
//         element: <ItemListContainer />,
//       },
//       {
//         path: "/item/:id",
//         element: <ItemDetailContainer />,
//       },
//       {
//         path: "/category/:categoria",
//         element: <ItemListContainer />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// reportWebVitals();
