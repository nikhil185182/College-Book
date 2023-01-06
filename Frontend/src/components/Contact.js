import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navigation from "./Navigation";
import MainNavigation from "./MainNavigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [feedback,SetFeedBack] = useState('');
    const navigate = useNavigate();
    const handleFeedChanges = ()=>{
        alert("Thanks for the feedback we will look into it");
        navigate("/");
    }
    if (localStorage.getItem('user') != '') {
        return (
            <div className="container">
                <MainNavigation />
                    <Form style={{margin:"20px"}}>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write to Us :</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" onChange={(e)=>SetFeedBack(e.target.value)}></textarea>
                        </div>
                        <Button variant="primary" type="submit" onClick={()=>handleFeedChanges()}>Submit</Button>
                    </Form>
            </div>
        );
    } else {
        return (
            <div className="container">
                <Navigation />
                <div className="d-flex p-2 justify-content-center">
                    <Form>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write to Us :</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;