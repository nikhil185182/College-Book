import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post";
import SubmitForm from "./SubmitForm";
import '../styles/Main.css';

function Main() {
    const [user, setUser] = useState('');
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser != '') {
            setUser(loggedInUser);
        } else {
            alert("Login to continue ");
        }
    }, []);

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        async function fetchList() {
            try {
                await axios.get("https://localhost:44348/api/Quote").then((res) => {
                    console.log(res.data);
                    setUserList(res.data);
                }).catch((error) => {
                    console.log(error);
                });
            } catch {
            }
        }
        fetchList();
        console.log("data checked");
    }, []);

    return (
        <div className="container">
            <p className="p1"> Hello {user} , post your thoughts here.</p>
            <SubmitForm />
            <h6 className="ha1">Look what others are thinking !</h6>
            <Post userList={userList}/>
        </div>
    );
}
export default Main;