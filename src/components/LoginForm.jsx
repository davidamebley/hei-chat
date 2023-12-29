import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': userName, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // If successful
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            // Reload page to ensure that the user is logged in
            window.location.reload();
        } catch (error) {
            setError('Please check your credentials and try again.');
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
                    <h2 className={`error ${error ? 'visible' : 'invisible'}`}>{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;