import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../src/store/session';
// import OpenModalButton from "../../src/components/OpenModalButton"
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import { NavLink } from 'react-router-dom';
import { getCurrentUserSpots } from '../../src/store/spots';

function ProfileButton({ user }) {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  const handleSubmit = async () => {
              await dispatch(getCurrentUserSpots())

  };

  return (
    <>
    <div className={`profile-button`}>
      <button className={'menu-icons'} onClick={toggleMenu}>
        <div className={`both-icons`}>
        <div style={{fontSize: "20px" }}>
          <div>
        <FiMenu className={`menu`}/>
          </div>
          <div>
        <FaUserCircle className={`profile`}/>
        </div>
        </div>
        </div>
      </button></div>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div>Hello, {user.firstName}</div>
            <div>{user.email}</div>
            <div><NavLink to="/spots/current" onClick={handleSubmit()} className={`manage-spots-link`}>Manage Spots</NavLink></div>
            <div>
              <button onClick={logout}>Log Out</button>
            </div>
          </>
        ) : (
          <>
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </>
  );
}


export default ProfileButton;
