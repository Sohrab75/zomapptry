// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { usePostLoginDataMutation } from '../services/ApiConfig'; 

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const navigate = useNavigate(); // Rename history to navigate
//   const [login] = usePostLoginDataMutation(); //firt welcome page then link to login page
//   // we are positing user login information to above mutataion
//   // we are setting data in our browser memory

//   const handleLogin = async () => {
//     // Check if email and password are not empty
//     if (!email || !password) {
//       setMessage('Please fill in both fields.');
//       return;
//     }
//     const credentials = {
//       email,
//       password,
//     };
//     const response = await login(credentials);
//     try {
//            console.log('Response:', response);
//       if (response.data.message === 'Login successful!') {
//         sessionStorage.setItem('ltk', response.data.token);
//         sessionStorage.setItem('loginStatus', 'loggedIn');//
//         navigate('/home');
//       } else {
//         setMessage('Invalid credentials');
//       }
//     } catch (error) {
//       if (response.error && response.error.originalStatus === 401) {
//         setMessage('Invalid credentials');
//       } else {
//         console.error('Error occurred while logging in:', error.message);
//         setMessage('Error occurred while logging in.');
//       }
//     }
//   };
//   return (
//     <>
//       {/* <Header /> */}
//       <div className='container'>
//         <hr />
//         <div className='panel panel-danger'>
//           <div className='panel-heading'>
//             <h3>Login</h3>
//           </div>
//           <div className='panel-body'>
//             <h3 style={{ color: 'red' }}>{message}</h3>
//             <div className='row'>
//               <div className='form-group col-md-6'>
//                 <label htmlFor='email' className='control-label'>
//                   Email
//                 </label>
//                 <input
//                   className='form-control'
//                   id='email'
//                   name='email'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className='form-group col-md-6'>
//                 <label htmlFor='password' className='control-label'>
//                   Password
//                 </label>
//                 <input
//                   className='form-control'
//                   id='password'
//                   name='password'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             <button className='btn btn-info' onClick={handleLogin}>
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;


import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;