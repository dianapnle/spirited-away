import { useState } from 'react';
import * as sessionActions from '../../src/store/session';
import { useDispatch} from 'react-redux';
import { useModal } from '../../src/context/Modal';
import './LoginForm.css';

function LoginFormModal () {
    const dispatch = useDispatch();

    const [ credential, setCredential ] = useState("");
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState({});
    const { closeModal } = useModal();



    const toggle = () => {
      if (credential.length < 4 || password.length < 6) {
        return true
      }
      return false
    }

    const demoUser = (e) => {
      const credential = 'demousername';
      const password = 'ilikebananas1';
      e.preventDefault();
      return dispatch(sessionActions.login({ credential, password }))
      .then(() => {
        setErrors({});
      })
      .then((closeModal))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password }))
          .then(closeModal)
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.message) {
              setErrors({message: data.message});
            }
          });
      };

    return (
        <>
        <div className={`form login`}>
        <h1>Log In</h1>
        {errors.message && <div className={`errors`}>The provided credentials were invalid.</div>}
          <br></br>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
            <input
                className={`userinput`}
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder='Username or Email'
          />
            </label>
            </div>
            <br></br>
            <div>
            <label>
            <input
               className={`passwordinput`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            </label>
            </div>
            <br></br>
            <button className={`loginButton`} type="submit" disabled={toggle()}>Log In</button>
            <br></br>
            <button className={`demouserbutton`} onClick={demoUser}>Demo User</button>
        </form>
        </div>
        </>
    )
}
export default LoginFormModal;
