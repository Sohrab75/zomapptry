import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useGetAllFeatureDataQuery } from '../services/ApiConfig'
import FeatureStyled from './FeatureStyled';

const Feature = () => {
    const {data, isLoading, error}= useGetAllFeatureDataQuery();
    if (isLoading) {
        return <div>Loading.....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    console.log(data)
  return (
    <>
    <FeatureStyled>
    <h1>Features</h1>
    {data.features.map((item)=>{
        return(
            <Card as={Col} lg={4}>
            <Card.Title>{item.feature_heading}</Card.Title>
            <Card.Img src={item.feature_image} alt={item.feature_heading}/>
            <Card.Text>{item.feature_txt}</Card.Text>
            </Card>
        )
    })}
    
    </FeatureStyled>
    </>
  )
}

export default Feature