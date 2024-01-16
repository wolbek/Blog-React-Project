import { useState } from "react";
import './SignupForm.css';
import { Link, useNavigate } from "react-router-dom";
import api from '../api/blog';


function SignupForm(){

    const navigate = useNavigate()

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

    async function signup(event){
        event.preventDefault();

        if (userInput.email==='' || userInput.password===''){
            alert('All fields are mandatory');
            return;
        }

        try{
            const response = await api.post("/signup",userInput);
            if(response.status === 201){
                navigate('/login');
            }
        } catch(error){
            //Try to show invalid json message here
            alert(error);
            console.log(error);
        }
    }

    return(
        <div id='signup-container'>
            <h1>Sign Up</h1>
            <form onSubmit={signup}>
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
                <button type='submit' className="signup-blue-btn">Sign Up</button>
                <br/>
                <br/>
                <span>Already have account?<Link to='/login'>Log In</Link></span>
            </form>
            
        </div>
    );
}

export default SignupForm;