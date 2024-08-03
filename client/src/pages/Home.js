import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';


const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            // Handle successful login (e.g., store the token, redirect, etc.)
            console.log('Login successful:', response.data);
        } catch (err) {
            // Handle login failure
            setError('Invalid username or password');
            console.error('Login error:', err);
        }
    };

    return (
        <div className="container-fluid">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="row vh-100">
                <div className="col-md-6 left-side">
                    <h1 style={{marginLeft: 300}} className="w-75 p-3 card-header fw-bold">Task Manager</h1>
                    <p style={{marginLeft: 175}} className='w-75 p-3'>Hello, my name is Ramiyan Gangatharan and this is my attempt at creating a calendar/scheduling app on the internet.</p>
                </div>
                <div className="col-md-6 right-side">
                    <div className="card login-card">
                        <div className="card-header text-center">
                            <h4>User Login</h4>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleLogin}>
                                <div className="mb-3 text-start">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className=" justify-content-between">
                                    <div className='card-header m-3'>
                                        <button className='btn btn-primary' type="submit">Login</button>
                                    </div>
                                    <div className='card-header m-3'>
                                    <button className="btn btn-primary" type="button" onClick={() => window.location.href = '/SignUp'}> Sign Up </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
