import { useState } from "react";
import './LoginForm.css';
import { Link } from "react-router-dom";
import api from '../api/blog';
import { useNavigate } from "react-router-dom";


function LoginForm(props){

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        email:'',
        password:''
    })

    function emailChangeHandler(event){
        setUserInput({
            ...userInput,
            email:event.target.value
        })
    }
    function passwordChangeHandler(event){
        setUserInput({
            ...userInput,
            password:event.target.value
        })
    }

    async function login(event){
        event.preventDefault();

        if (userInput.email==='' || userInput.password===''){
            alert('All fields are mandatory');
            return;
        }

        try{
            const response = await api.post("/login",userInput)
            if (props.onLogin) {
                props.onLogin(response.data.token);
            }
            navigate('/');
        } catch(error){
            //Try to show invalid json message here
            alert(error);
            console.log(error);
        }
    }

    return(
        <div id='login-container'>
            <h1>Login</h1>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <br/>
                    <input type='email' name='email' placeholder='Enter email' onChange={emailChangeHandler} value={userInput.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input type='password' name='password' placeholder='Enter password' onChange={passwordChangeHandler} value={userInput.password}/>
                </div>
                <button type='submit' className="login-blue-btn">Login</button>
                <br/>
                <br/>
                <span>Don't have an account? <Link to='/signup'>Signup</Link></span>
            </form>
            
        </div>
    );
}

export default LoginForm;