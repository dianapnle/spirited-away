import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton";
import './Navigation.css'

function Navigation({ isLoaded }) {
    //grab the user logged in the state if there is one
    const sessionUser = useSelector((state) => state.session.user);

    //if sessionuser DOES exist then logout:
    const sessionLinks = sessionUser ? (
        <>
        <li>
            <ProfileButton user={sessionUser} />
        </li>
        </>
    ) : (
        <>
        <li>
            <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
            <NavLink to="/signup">Sign Up</NavLink>
        </li>
        </>
    );

    return (
      <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            {isLoaded && sessionLinks}
        </ul>
    </nav>
    )
  }

  export default Navigation;
