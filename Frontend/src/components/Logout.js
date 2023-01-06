import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";


function Logout() {
    let navigate = useNavigate();
    const handleSaveChanges = ()=>{
        localStorage.setItem('user','');
        alert('Logout Successful');
        navigate('/');
    }
    return(
        <div className='container'>
            <div className="d-flex flex-column jusify-content-center">
                <h4></h4>
                <h6>Are you sure you want to Logout ?</h6>
                <h4> </h4>
                <Button variant="primary" onClick={()=>handleSaveChanges()}>Submit</Button>
            </div>
        </div>
    );
}
export default Logout;