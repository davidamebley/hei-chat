import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => { };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">HeiChat App</h1>
                <form onSubmit={handleSubmit}></form>
            </div>
        </div>
    );
};