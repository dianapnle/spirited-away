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
            console.log(data.message)
          });
      };

    return (
        <>
        <div className={`form`}>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
            <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder='Username or Email'
          />
            </label>
            </div>
            <div>
            <label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
            />
            </label>
            </div>
            {errors.message && <p className={`errors`}>The provided credentials were invalid.</p>}
            <button type="submit" disabled={toggle()}>Log In</button>
        </form>
        </div>
        </>
    )
}
export default LoginFormModal;
