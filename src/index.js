import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import {
    createBrowserRouter, redirect,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Planet from "./pages/planet";
import People from "./pages/people";
import Starship from "./pages/starship";

const isAuth = localStorage.getItem('isAuth');

async function loader() {
    if (isAuth === 'false') {
        return redirect("/");
    }
    return null;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        loader: () => {
            if (isAuth === 'true') {
                return redirect("/people");
            }
            return null;
        },
        errorElement: <ErrorPage />,
    },
    {
        path: "/people",
        loader: loader,
        element: <People />,
    },
    {
        path: "/starships",
        loader: loader,
        element: <Starship />,
    },
    {
        path: "/planets",
        loader: loader,
        element: <Planet />,
    },
    {
        path: "/error",
        element: <ErrorPage />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
  </React.StrictMode>
);
