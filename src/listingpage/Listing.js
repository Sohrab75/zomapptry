import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useGetDataCategoryIdQuery } from '../services/ApiConfig'
import { Link, useParams } from 'react-router-dom'
import ListingStyled from './ListingStyled'

const Listing = () => {
    const{catId}= useParams();
    console.log(catId)
    const {data, isLoading, error}= useGetDataCategoryIdQuery(catId);
    console.log(data);
    if (isLoading) {
        return <div>Loading.....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
  return (
    <>
    <ListingStyled fluid>
        <Row>
            <Col lg={2}>
                <ul>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                </ul>
            </Col>
            <Col lg={10}>
                {data.products.map((item, index)=>{
                    return(
                        <Card key={item.index}>
                            <Card.Img src={item.image} alt={item.name}/>
                            <Card.Title>{item.name}</Card.Title>
                            <Button className='btn btn-primary'>{item.cost}</Button>
                            <Button className='btn btn-info'>{item.quantity}</Button>
                            <Button className='btn btn-warning'>{item.type}</Button>
                            <Link to={`/products/${item.id}`}>
                                <Button>Buy Now</Button>
                            </Link>
                        </Card>
                    )
                })}
                <Link to={"/"}><Button className='btn btn-danger'>Back</Button></Link> 
            </Col>
        </Row>
    </ListingStyled>
    </>
  )
}

export default Listing