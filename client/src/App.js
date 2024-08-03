import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Layout';
import SignUp from './pages/SignUp';
import './App.css';
import './font.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
