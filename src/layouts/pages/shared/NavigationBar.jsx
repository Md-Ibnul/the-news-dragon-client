import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => { 
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => {console.log(error);})
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              <Link className='ms-3 text-decoration-none text-black' to='/category/0'>Home</Link>
              <Link className='ms-3 text-decoration-none text-black'>About</Link>
              <Link className='ms-3 text-decoration-none text-black'>Career</Link>
          </Nav>
          <Nav>
            {
              user && <Nav.Link href=""><FaUserCircle style={{fontSize:'2rem'}} /></Nav.Link>
            }
            {
              user ? <Button onClick={handleLogOut} variant="dark">Logout</Button> :
              <Link to='/login'>
                <Button variant="dark">Login</Button>
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;