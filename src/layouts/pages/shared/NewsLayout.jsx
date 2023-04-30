import React from 'react';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from './RightNav';
import Footer from './Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <Container className='mt-3'>
                <Row>
                
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsLayout;