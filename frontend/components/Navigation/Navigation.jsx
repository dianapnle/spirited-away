import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../../images/spiritedhome.png'


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className={`overall-block`}>
      <div className={`home-block`}>
        <NavLink to="/" className={`home-button`}><img src={logo} style={{ height: "50px"}}/></NavLink>
      </div>
      <div>
      {isLoaded && sessionUser && (
        <div className={`profile-block profile-area`}>
          <NavLink to="/spots/new" className={`create-spot-link`}>Create a New Spot</NavLink>
        </div>
      )}
      {isLoaded && (
        <div className={`profile-block profile-area`}>
          <ProfileButton user={sessionUser} />
        </div>
      )}
      </div>
    </div>
  );
}

  export default Navigation;
