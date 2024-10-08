import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
// import ResMenuCard from "./components/ResMenuCard";
// import Grocery from "./components/Grocery";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import cartStore from "./utils/cartStore";
import Cart from "./components/Cart";

const Contact = lazy(() => import("./components/Contact"));
const ResMenuCard = lazy(() => import("./components/ResMenuCard"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <Provider store={cartStore}>
      <UserContext.Provider value={{ loggedInUserInfo: userInfo, setUserInfo }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      
      //Colon indicates dynamic path
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <ResMenuCard />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
