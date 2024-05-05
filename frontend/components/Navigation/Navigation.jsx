import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../../src/components/OpenModalButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
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
            <OpenModalButton
                buttonText="Log In"
                modalComponent={<LoginFormModal />}
            />
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
