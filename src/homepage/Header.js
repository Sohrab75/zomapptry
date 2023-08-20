import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {



  // const conditionalHeader = () => {
  //   if (data) {
  //     console.log("to go forward i need data", data.email)
  //     sessionStorage.setItem('loginStatus', 'loggedIn');
  //     sessionStorage.setItem('userInfo', data.email);
  
  //     return (
  //       <>
  //         <button className='btn btn-success'>
  //           <span className='glyphicon glyphicon-user'> Hi {data.email} </span>
  //         </button>
  //         &nbsp;
  //         <button className='btn btn-danger' onClick={handleLogout}>
  //           <span className='glyphicon glyphicon-log-out'></span> Logout
  //         </button>
  //       </>
  //     );
  //   }else {
  //         return (
  //           <>
  //             <Link to='/login'>
  //               <li className='right-side'>Login</li>
  //             </Link>
  //             <Link to='/register'>
  //               <li className='right-side'>SignUp</li>
  //             </Link>
  //           </>
  //         );
  //       }
  //  }

  return (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ansari</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header