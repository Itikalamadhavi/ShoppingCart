
import { useState } from 'react';
import styles from './login.module.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const Login = () => {

    const[email, setEmail] = useState<string>('')
    const[password, setPassword] = useState<string>('')

    const navigate = useNavigate()
    const handleAfterLogin = () => {
        navigate('/images')
    }

    const handleOTP = () => {
        navigate('/images') 
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()

        axios.post('http:localhost:3000/login',{email,password})
        .then(res=> {console.log(res)})
        .catch(err => {console.log(err)})
    }


    const loginContent = () => {

        return (     
            <div className={styles.loginContainer}>
                <form action='POST' onSubmit={handleSubmit}>
                <label>Email/Username:</label><br></br>
                <input type='text' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.input}/><br></br>
                <label>Password:</label><br></br>
                <input type="text" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} className={styles.input}/><br></br>
                <button className={styles.submitButton} onClick={()=>handleAfterLogin()}>Login</button>
                <br></br>
                </form>

                <div>
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