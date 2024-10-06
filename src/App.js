import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenuCard from "./components/ResMenuCard";
// import Grocery from "./components/Grocery";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import cartStore from "./utils/cartStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));
const nama = "Nithin Patil";

const AppLayout = () => {
  const [name, setName] = useState(nama);
  return (
    <Provider store={cartStore}>
      <UserContext.Provider value={{ loggedInUser: name, setName }}>
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      //Colon indicates dynamic path
      {
        path: "/restaurant/:resId",
        element: <ResMenuCard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
