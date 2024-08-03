import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3 mt-auto">
            <div className="container">
                <ul className="nav justify-content-center mb-3">
                    <li className="nav-item">
                        <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/terms-of-service">Terms of Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <hr className="my-2"/>
                <p className="mb-0">© 2024 Ramiyan Gangatharan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
