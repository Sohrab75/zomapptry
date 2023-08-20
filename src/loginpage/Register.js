import React, { useState } from 'react';
import { usePostRegistrationDataMutation } from "../services/ApiConfig";
import { useNavigation, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [data, { isError, error, isLoading }]= usePostRegistrationDataMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const register = async () => {
    const reg = { email, password };
    console.log(reg);
    const response = await data(reg);
    try {
      console.log(response, "login data", response.data.token);
      // navigate("/login"); 
      // Check the status code to handle different scenarios
      if (response.data.message === "Registration successful!") {
        // Registration successful
        setMessage("Registration successful!");
        alert("Registration successful!")
        setEmail("");
        setPassword("");
        navigate("/login"); // Navigate to login page if successful
      } 
    } catch {
      console.log("error occurred:");
      // alert("catch the error ")
      if (response.error.originalStatus === 409) {
        // User already registered with this email
        setMessage(response.error.data);
        alert("User already registered with this email please login")
        // setMessage("User already registered with this email please login")
        navigate("/login");
      } else {
        // Other status codes (e.g., 500, 400, etc.)
        setMessage("Registration failed. Please try again.");
        console.log(response.error.data);
      }
    }
  };
  
  return (
    <div>
      <h3>Register</h3>
      <h3 style={{ color: 'red' }}>{message}</h3>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
