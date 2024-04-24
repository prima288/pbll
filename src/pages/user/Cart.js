<<<<<<< HEAD
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { cartActions } from "../../shop/shop-cart/cartSlice";
=======
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { cartActions } from '../../shop/shop-cart/cartSlice';
>>>>>>> fabd4a95c54ee6571a7b012ef06f4ce9915273b9

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleIncrement = (id) => {
    dispatch(cartActions.incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(cartActions.decrementItem(id));
  };

  const handleRemove = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Row key={item.id} className="mb-3">
              <Col sm="2">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </Col>
              <Col sm="3">
                <p>{item.title}</p>
              </Col>
              <Col sm="2">
<<<<<<< HEAD
                <p>Harga: Rp.{parseFloat(item.price).toFixed(2)}</p>
              </Col>

              <Col sm="2">
                <Button color="info" onClick={() => handleDecrement(item.id)}>-
                </Button>{" "}
                
                <span>{item.quantity}</span>{" "}
                
                <Button color="info" onClick={() => handleIncrement(item.id)}>+
                </Button>{" "}
              </Col>

              <Col sm="3">
                <Button color="danger" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
=======
                <p>Harga: Rp.{item.price}</p>
              </Col>
              <Col sm="2">
                <Button color="info" onClick={() => handleDecrement(item.id)}>-</Button>{' '}
                <span>{item.quantity}</span>{' '}
                <Button color="info" onClick={() => handleIncrement(item.id)}>+</Button>{' '}
              </Col>
              <Col sm="3">
                <Button color="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
>>>>>>> fabd4a95c54ee6571a7b012ef06f4ce9915273b9
              </Col>
            </Row>
          ))}
          <Row>
            <Col sm="12">
              <Link to="/checkout">
                <Button color="primary">Checkout</Button>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
