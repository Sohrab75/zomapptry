// Test.js
import React from 'react';
import { useGetDataCategoryIdQuery } from '../services/ApiConfig';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import TestStyled from './TestStyled';

const Test = ({ sendId, catID}) => {
    // const{catId} = useParams();
    console.log(catID)
  const { data, isLoading, error } = useGetDataCategoryIdQuery(catID);

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
console.log("items with same category",data);
  return (
    <>
      <TestStyled>
        <h3>Try These products as well</h3>
        {data.products.map((item) => (
          <Card as={Col} lg={3} key={item.index}>
            <Card.Img src={item.image} alt={item.name} />
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Best Price:{item.cost}</Card.Text>
            <Card.Text>Quantity: {item.quantity}</Card.Text>
            <Link to={`/products/${item.id}`}>
              <Button>Buy Now</Button>
            </Link>
            <Button onClick={() => sendId(item.id)}>Add to Cart<i class="fa-solid fa-cart-shopping"></i></Button>
          </Card>
        ))}
      </TestStyled>
    </>
  );
};

export default Test;
