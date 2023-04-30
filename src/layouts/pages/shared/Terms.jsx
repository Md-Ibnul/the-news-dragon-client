import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae expedita voluptatum repudiandae error veritatis architecto sit ipsam. Similique, adipisci laudantium minima magnam deserunt voluptates ducimus delectus optio facilis officia eius iusto accusantium, doloribus et, cumque voluptate consequuntur cupiditate quas eligendi laboriosam consectetur eum exercitationem sequi. Distinctio explicabo labore maxime.</p>
            <p>Goo back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;