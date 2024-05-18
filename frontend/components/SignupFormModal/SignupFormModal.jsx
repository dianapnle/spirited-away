import { useState, useEffect } from 'react';
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
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const toggle = () => {
      if (username.length < 4 || password.length < 6 || lastName.length === 0 || email.length === 0 || firstName.length === 0 || confirmPassword.length < 6) {
        return true
      }
      return false
    }

    useEffect(() => {
      const errors = {};

      if (!email.includes(`@`)) errors.email = 'Invalid email';
      if (password !== confirmPassword) errors.matchPassword = 'Passwords do not match'
      setErrors(errors)

    }, [email, password, confirmPassword])

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (Object.values(errors).length) {
          return
        }

        if (Object.values(errors).length === 0) {
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
        setErrors({});
        setHasSubmitted(false)
    };

    return (
        <>
        <div className={`form signup`}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
          {hasSubmitted===true && errors.email && <div className={`errors`}>{errors.email}</div>}
          <br></br>
          {hasSubmitted===true && errors.matchPassword && <div className={`errors`}>{errors.matchPassword}</div>}
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
              </div>
            <br></br>
            <button className={`signupButton`} type="submit" disabled={toggle()}>Sign Up</button>
        </form>
        </div>
        </>
    )
}
export default SignupFormModal;
