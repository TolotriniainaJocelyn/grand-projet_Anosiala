import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import '../tolotra/login.css';
//import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            const { token, id } = response.data;
            localStorage.setItem('token', token);
            if (id === 1) {
                window.location.href = "/page1";
            } else if (id === 2) {
                window.location.href = "/page2";
            } else {
                alert('Accès non autorisé!.');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion : ', error);
            alert('Erreur lors de la connexion!.');
        }
    };

    return (
        <div className="contenu">
            <div className='transparent'>
                <h1 className='wrapper'>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <div className='username'>
                        <label>Username:</label>
                        <input className='entrer' type="text" placeholder='username' value={username}  onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className='password'>
                        <label>Password:</label>
                        <input className='entrer' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>
                    <button className='bouton' type="submit">Connexion</button>
                </form>
            </div>
        
        </div>
    );   
};

export default LoginPage;

           
