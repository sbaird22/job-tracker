import React from 'react';
import { Link } from 'react-router-dom';
import { logout, isLoggedIn } from '../utils/auth';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn() ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;