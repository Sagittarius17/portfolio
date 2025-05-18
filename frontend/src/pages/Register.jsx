import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/admin');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div className="bg-white text-black absolute lg:top-[40%] lg:left-[38%] top-[25%] left-[10%] w-[80%] max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registerForm.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (min 8 characters)"
          value={registerForm.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
      <p className="text-center text-sm mt-4">
        Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
      </p>
    </div>
  );
};

export default Register;
