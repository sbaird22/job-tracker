export function getToken() {
    return localStorage.getItem('token');
}
  
export function isLoggedIn() {
    return !!getToken();
}
  
export function logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
}  
import { useState, useEffect } from 'react';  
export function useAuth() {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn());  
    useEffect(() => {
        setLoggedIn(isLoggedIn());
    }, []);
    return loggedIn;
}