import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignupPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignup = async (e) => {
    e.preventDefault()
    try {
        const { data } = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password
    })
    localStorage.setItem('token', data.token)
      // Redirect user to dashboard or another protected page after signup
    navigate('/dashboard')
    } catch (error) {
    console.error('Signup error:', error.response ? error.response.data : error.message)
    alert('Signup failed. Please try again.')
    }
}

return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
        <h2>Signup</h2>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px' }}
            required
        />
        <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px' }}
            required
        />
        <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px' }}
            required
        />
        <button type="submit" style={{ padding: '8px' }}>Sign Up</button>
    </form>
    </div>
    )
}

export default SignupPage