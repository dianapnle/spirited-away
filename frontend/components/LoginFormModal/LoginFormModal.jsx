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

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password }))
          .then(closeModal)
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              setErrors(data.errors);
            }
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
            {errors.credential && <p>{errors.credential}</p>}
            <button type="submit">Log In</button>
        </form>
        </div>
        </>
    )
}
export default LoginFormModal;
