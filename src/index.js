import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import NavBarPsi from "./components/navbar/Navbar";

const router = createBrowserRouter([
  {
    element: (
      <>
        <NavBarPsi />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <ItemListContainer />,
      },
      {
        path: "/productos",
        element: <ItemListContainer />,
      },
      {
        path: "/item/:id",
        element: <ItemDetailContainer />,
      },
      {
        path: "/category/:categoria",
        element: <ItemListContainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
