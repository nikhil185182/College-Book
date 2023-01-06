import axios from "axios";
import { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [password,setPassword]=useState('');

    let navigate = useNavigate();


    const handleNameChange = (value) => {
        setName(value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handleCourseChange = (value) => {
        setCourse(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const handleSaveChanges = () =>{
        var today = new Date();
        var x = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const data1 ={
            name : name,
            email: email,
            course:course
        }
        const data2 ={
            email:email,
            password:password,
            registerdate: x
        }
        const url1="https://localhost:44348/api/Student";
        axios.post(url1,data1).then((result)=>{
            console.log(result.data);            
        }).catch((error)=>{
            alert(error);
        })
        const url2 ="https://localhost:44348/api/Users/User";
        axios.post(url2,data2).then((result)=>{
            console.log(result.data);
        }).catch((error)=>{
            alert(error);
        })
        navigate('/login');
    }
     
    return (
        <Fragment>
            <Navigation/>
            <div className="d-flex p-2 justify-content-center">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => handleNameChange(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Course</Form.Label>
                        <Form.Control type="text" placeholder="Enter your course" onChange={(e) => handleCourseChange(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I accept all terms and Conditions" />
                    </Form.Group>
                    <Button variant="primary" onClick={()=>handleSaveChanges()}>Submit</Button>
                </Form>
            </div>
        </Fragment>
    );
}

export default Register;