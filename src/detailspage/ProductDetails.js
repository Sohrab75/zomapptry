import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useGetProductDataByIdQuery } from '../services/ApiConfig'
import { Link, useParams} from 'react-router-dom'
import Test from './Test'
import ProductDetailsStyled from './ProductDetailsStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "../homepage/Header";
const ProductDetails = ({setDetails}) => {
    const{id} = useParams();
    const[prodId, setProdId] = useState(id)
    const [totalPrice, setTotalPrice]= useState();
    console.log("total price is ",totalPrice);
    console.log("use param id ",id);
    const {data, isLoading, error} = useGetProductDataByIdQuery(prodId);
    // const [cartProducts, setCartProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]); // Store processed products
  setDetails(availableProducts);
  useEffect(() => {
    if (!isLoading && !error) {
      setAvailableProducts((prevAvailableProducts) => [
        ...prevAvailableProducts,
        ...data.products
      ]);
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    // Calculate the total price only when availableProducts changes
    const newTotalPrice = availableProducts.reduce((total, item) => total + parseFloat(item.cost), 0);
    setTotalPrice(newTotalPrice);
  }, [availableProducts]);
    console.log("availableCartProducts......",availableProducts)
    if (isLoading) {
        return <div>Loading.....</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log("prod details page",data);
    const HandleId =(receivedId) => {
        setProdId(receivedId);
        console.log("id getting from Test",receivedId);
      };
      const handleRemoveFromCart = (productId) => {
        const indexToRemove = availableProducts.findIndex((item) => item.id === productId);
        if (indexToRemove !== -1) {
          const updatedProducts = [...availableProducts];
          updatedProducts.splice(indexToRemove, 1);
          setAvailableProducts(updatedProducts);
        }
      };
   
  return (
    <>
    <Header/>
    <ProductDetailsStyled>
        <Col lg={8} className="details-column">
        <p>Items added to cart</p>
        {availableProducts.map((item)=>{
            return(
                <>
                <div className='wrapper'>
                    <Card>
                        <Card.Img src={item.image} alt={item.name}/>
                        <Card.Title>{item.name}</Card.Title>
                    </Card>
                    <Card>
                        <Card.Text>Quantity:{item.quantity}</Card.Text>
                        <Card.Text>Location: {item.location}</Card.Text>
                        <Card.Text>Category:{item.type}</Card.Text>
                        <Card.Text>Best Price:{item.cost}</Card.Text>
                    </Card>
                    <Link to={"/placeOrder"}>
                      <Button>Buy Now</Button>
                    </Link>
                    <Button onClick={() => handleRemoveFromCart(item.id)}><i class="fa-solid fa-trash"></i>
                    </Button>
                    </div>
                </>
            )
        })}
        <div className='total-item'>
          <h6>Total Quantity: {availableProducts.length}</h6>
          <p>Total Price {totalPrice}</p>
        </div>
        </Col>
        <Link to={`/category/${data.products[0].category_id}`}>
            <Button>Back</Button>
        </Link>
        <Link to={"/placeOrder"}>
          <Button>Proceed</Button>
        </Link>
    </ProductDetailsStyled>
    <Test sendId={HandleId} catID={data.products[0].category_id}/>
    </>
  )
}
export default ProductDetails;