import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import Header from './Header';
import HomePageBanner from './HomePageBanner';
import Category from './Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Feature from './Feature';

const Home = () => {
  return (
    <>
    <Container fluid>
    <Row>
        <Header/>
        <HomePageBanner/>
    </Row>
    <Feature/>
    <Category/>
    <Row>
        <Footer/>
    </Row>
    </Container>
    </>
  )
}

export default Home