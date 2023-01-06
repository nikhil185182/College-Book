import axios from "axios";
import { useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
function Login() {
    let navigate = useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState('');

    const handleEmailChange = (value)=>{
        setEmail(value);
    }
    const handlePasswordChange = (value)=>{
        setPassword(value);
    }
    const handleSaveChanges= ()=>{
        const url = "https://localhost:44348/api/Users/User/"+email;
        axios.get(url).then((result)=>{
            var pw = result.data.password;
            if(pw==password){
                localStorage.setItem('user',result.data.email);
                navigate('/');
            }else{
                alert("Ivalid Username or Password");
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
    return (
        <div className="container">
            <Navigation/>
            <div className="d-flex p-2 justify-content-center">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleEmailChange(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>handlePasswordChange(e.target.value)}/>
                </Form.Group>
            <Button variant="primary" onClick={()=>handleSaveChanges()}>Submit</Button>
            </Form>           
            </div>
        </div>
    );
}

export default Login;