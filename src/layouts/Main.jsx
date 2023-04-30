import React from 'react';
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './pages/shared/LeftNav';
import RightNav from './pages/shared/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from './pages/shared/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Container className='mt-3'>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
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

export default Main;