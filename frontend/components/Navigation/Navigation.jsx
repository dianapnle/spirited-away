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
      {isLoaded && (
        <div className={`profile-block`}>
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </div>
  );
}

  export default Navigation;
