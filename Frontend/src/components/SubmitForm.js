import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';


function SubmitForm() {

    const [text, setText] = useState('');

    const [selected, setSelected] = useState(new Date());


    let navigate = useNavigate();

    const handleTextChanges = (val) => {
        setText(val);
    }
    const handleSaveChanges = () => {
        var today = new Date();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();
        var value = selected.getFullYear() + '-' + (selected.getMonth() + 1) + '-' + selected.getDate();
        const dat = {
            email: localStorage.getItem("user"),
            textd: text,
            postdate: value,
            posttime: time
        }
        console.log(dat);
        const url = "https://localhost:44348/api/Quote";
        axios.post(url, dat).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
        window.location.reload(false);
    }

    return (
        <div className="container">
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type here .." onChange={(e) => { handleTextChanges(e.target.value) }} />
                </Form.Group>
                <button type="button" className="btn btn-success" onClick={() => { handleSaveChanges() }}>Post</button>
            </Form>
        </div>
    );
}
export default SubmitForm;