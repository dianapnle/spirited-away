import { useState } from 'react';
import * as sessionActions from '../../src/store/session';
import { useDispatch} from 'react-redux';
import { useModal } from '../../src/context/Modal';
import './SignupForm.css';

function SignupFormModal () {
    const dispatch = useDispatch();
    //if there is a logged in user, reload page

    const [ username, setUsername ] = useState("")
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ errors, setErrors ] = useState({});
    const { closeModal } = useModal();


    const toggle = () => {
      if (username.length < 4 || password.length < 6 || lastName.length === 0 || email.length === 0 || firstName.length === 0 || confirmPassword.length < 6) {
        return true
      }
      return false
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setErrors({});
          return dispatch(
            sessionActions.signup({
              email,
              username,
              firstName,
              lastName,
              password
            })
          )
            .then(closeModal)
            .catch(async (res) => {
              const data = await res.json();
              if (data && data.errors) {
                console.log(data)
                setErrors(data.errors);
              }
            });
        }
        return setErrors({
            confirmPassword: "Passwords do not match"
        })
    };

    return (
        <>
        <div className={`form signup`}>
        <h1>Sign Up</h1>
        {errors.email && <div className={`errors`}>{errors.email}</div>}
        {errors.username && <div className={`errors`}>{errors.username}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>
            <input
              className={`userinputsignup`}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
          />
            </label>
          </div>
            <div>
            <label>
            <input
                className={`userinputsignup`}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name'
          />
            </label>
            </div>
            <div>
            <label>
            <input
                className={`userinputsignup`}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name'
          />
            </label>
            {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
            <label>
            <input
                className={`userinputsignup`}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
            />
            </label>
            </div>
            <div>
            <label>
            <input
                className={`userinputsignup`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
          />
            </label>
            </div>
            <div>
            <label>
            <input
                className={`userinputsignup`}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm Password'
          />
            </label>
            {errors.confirmPassword && <div className={`errors`}>{errors.confirmPassword}</div>}
            </div>
            <br></br>
            <button className={`signupButton`} type="submit" disabled={toggle()}>Sign Up</button>
        </form>
        </div>
        </>
    )
}
export default SignupFormModal;
