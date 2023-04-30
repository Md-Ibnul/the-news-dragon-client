import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {

  const [accepted, setAccepted] = useState(false);

    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleAccepted = event => {
      setAccepted(event.target.checked);
    }

    return (
       <Container className='mx-auto w-25 mt-5'>
        <h4 className='text-center mb-2'>Please Register</h4>
        <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Name" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoto">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Enter photo url" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
    onClick={handleAccepted}
    type="checkbox" 
    label={<>Accept <Link to='/terms'>Terms & Condition</Link></>} />
  </Form.Group>
  <Form.Text className="text-success pb-2">
      
    </Form.Text>
  <Form.Text className="text-danger pb-2">
      
    </Form.Text>
  <Button className='w-100' disabled={!accepted} variant="primary" type="Register">
    Submit
  </Button>
  <p className='mt-2 text-center'>Don't have an account? <Link to='/login' className='text-decoration-none text-success'>Login</Link></p>
</Form>
    </Container>
    );
};

export default Register;