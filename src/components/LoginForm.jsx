import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': process.env.REACT_APP_USER_NAME, 'User-Secret': process.env.REACT_APP_USER_SECRET };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // If successful
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            // Reload page to ensure that the user is logged in
            window.location.reload();
        } catch (error) {

        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">HeiChat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Begin a Conversation</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;