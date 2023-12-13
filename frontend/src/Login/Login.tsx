
import styles from './login.module.css';
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate()
    const handleAfterLogin = () => {
        navigate('/')
    }

    const handleOTP = () => {
        navigate('/') 
    }

    const loginContent = () => {
        return (
           
            <div className={styles.loginContainer}>
                <label>Email/Username:</label><br></br>
                <input type='text' placeholder='enter email' className={styles.input}/><br></br>
                <label>Password:</label><br></br>
                <input type="text" placeholder='enter password' className={styles.input}/><br></br>
                <button className={styles.submitButton} onClick={()=>handleAfterLogin()}>Login</button>
                <br></br>

                <div >
                    <br></br>
                    <span>Or Login with</span>
                    <br></br>
                    <label>Enter phone number</label>
                    <input type="number" placeholder='enter phone number' className={styles.input}/>
                    <button className={styles.submitButton} onClick={()=>handleOTP()}>Get OTP</button>
                </div>
            </div>
           
        )
    }

    const render = () => {
        return (
                <div className={styles.main}>{loginContent()}</div>
        )
    }

    return render()
    
}