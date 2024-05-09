import { createBrowserRouter, RouterProvider, Outlet, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from '../components/Navigation/Navigation'
import SpotsBrowser from "./components/SpotsBrowser";
import SpotDetail from "./components/SpotDetail"
import CreateSpotForm from "./components/CreateSpot";

function Layout () {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);
  const navigate= useNavigate();

   useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    })
   }, [dispatch])

   return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && <Outlet />}
    </>
   )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SpotsBrowser />
      },
      {
        path: "spots/:spotId",
        element: <SpotDetail />
      },
      {
        path: "spots/new",
        element: <CreateSpotForm />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
