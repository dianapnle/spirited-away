import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from '../components/Navigation/Navigation'
import SpotsBrowser from "./components/SpotsBrowser";
import SpotDetail from "./components/SpotDetail"
import CreateSpotForm from "./components/CreateSpot";
import ManageSpotsBrowser from "./components/ManageSpotsBrowser";

function Layout () {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);


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
import EditSpotForm from "./components/EditSpot";

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
      },
      {
        path: "spots/current",
        element: <ManageSpotsBrowser />
      },
      {
        path: "spots/:id/edit",
        element: <EditSpotForm />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
