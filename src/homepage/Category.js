import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import CategoryStyled from "./CategoryStyled";
import { useGetAllDataQuery } from '../services/ApiConfig';
import { Link } from 'react-router-dom';

const Category = () => {
    const {data, isLoading, error} = useGetAllDataQuery();
    console.log(data);
    if (isLoading) {
        return <div>Loading.....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

  return (
    <>
        <CategoryStyled>
        <h1>Category</h1>
        {data.categories.map((item)=>{
            return(
                
                <Card as={Col} lg={3}>
                    <Card.Img variant="top" src={item.category_img} />
                    <Link to={`/category/${item.category_id}`}>
                    <Card.Body>
                        <Card.Title>{item.category_name}</Card.Title>
                        <Card.Text>
                        {item.category_txt}
                        </Card.Text>
                    </Card.Body>
                    </Link>
                </Card>
            )
        })}
        </CategoryStyled>
    </>
  )
}

export default Category