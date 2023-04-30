import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/category/0';

    const handleSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <Container className='mx-auto w-25 mt-5'>
        <h4 className='text-center mb-2'>Please Login</h4>
        <Form onSubmit={handleSingIn}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Text className="text-success pb-2">
      
    </Form.Text>
  <Form.Text className="text-danger pb-2">
      
    </Form.Text>
  <Button className='w-100' variant="primary" type="submit">
    Submit
  </Button>
  <p className='mt-2 text-center'>Already have an account? <Link to='/register' className='text-decoration-none text-danger'>Register</Link></p>
</Form>
    </Container>
    );
};

export default Login;