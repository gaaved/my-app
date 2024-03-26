import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import ErrorPage from "./pages/Error-page";
import Planet from "./pages/Planet";
import People from "./pages/People";
import Starship from "./pages/Starship";

const isAuth = localStorage.getItem("isAuth");

const loader = () => {
  if (isAuth === false) {
    return redirect("/");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: () => {
      if (isAuth === true) {
        return redirect("/people");
      }
      return null;
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/people",
    loader,
    element: <People />,
  },
  {
    path: "/starships",
    loader,
    element: <Starship />,
  },
  {
    path: "/planets",
    loader,
    element: <Planet />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
