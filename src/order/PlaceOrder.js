import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { usePostOrderDataByIdMutation } from '../services/ApiConfig';
import PlaceOrderStyled from './PlaceOrderStyled';

const PlaceOrder = ({orderDetails}) => {
    const[totalPrice, setTotalPrice] = useState();
    console.log("data from ProdDetails component ", orderDetails);
    const [submitData,{isLoading, isError}] = usePostOrderDataByIdMutation();
    console.log("data of Place order details",submitData);
    const [formData, setFormData]= useState({
        id:Math.floor(Math.random()*100000),
        cost:"",
        name:"",
        email:"",
        phone:"",
        address:"",
        orderItem:''
    })

    useEffect(() => {
        // Calculate the total price only when availableProducts changes
        const newTotalPrice = orderDetails.reduce((total, item) => total + parseFloat(item.cost), 0);
        setTotalPrice(newTotalPrice);
      }, [orderDetails]);

    console.log("data of Place order form data",formData);
    const handleChange =(e)=>{
        const {name,value}= e.target
        setFormData((prevState)=>
        ({...prevState, [name]:value, })
        )
    }

    const orderData = async () => {
        try {
            // Make API call to submit the form data
            const response = await submitData(formData);
            
            // Handle the API response here if needed
            console.log("API response:", response);
        } catch (error) {
            // Handle error
            console.error("API error:", error);
        }
    };

  return (
    <>
    <PlaceOrderStyled className='d-flex justify-content-center'>
        <h3>Please fill the details to complete the order</h3>
        <Form as={Col} lg={4} className='form-data'>
            <input type='hidden' name='cost' value={formData.cost}/>
            <input type='hidden' name='id' value={formData.id}/>
            <input type='hidden' name='Product_Name' value={formData.name}/>
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="" id='fname' value={formData.name} name="name" onChange={handleChange}/>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" id='email' value={formData.email} name="email" onChange={handleChange}/>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="" id='phone' value={formData.phone} name="phone" onChange={handleChange}/>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="" id='address' value={formData.address} name="address" onChange={handleChange}/>
            <Button onClick={orderData} type="submit">Place Order</Button>
        </Form>
        
        <Col lg={4}>
            <h3>Products selected</h3>
        {orderDetails&&orderDetails.map((item, index)=>{
            return(
                <Card>
                    <Card.Img src={item.image} alt={item.name}/>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Rs.{item.cost}/-</Card.Text>
                </Card>
            )
        })}
        <h5>Total Cost {totalPrice}</h5>
        </Col>
    </PlaceOrderStyled>
    
    </>
  )
}

export default PlaceOrder