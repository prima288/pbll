import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { cartActions } from '../../shop/shop-cart/cartSlice';

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
              <Col xs="12" md="2">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </Col>
              <Col xs="12" md="3">
                <p>{item.title}</p>
              </Col>
              <Col xs="6" md="2">
                <p>Harga: Rp.{(item.price * item.quantity).toFixed(2)}</p>
              </Col>
              <Col xs="6" md="2">
                <Button color="info" onClick={() => handleDecrement(item.id)}>-</Button>{' '}
                <span>{item.quantity}</span>{' '}
                <Button color="info" onClick={() => handleIncrement(item.id)}>+</Button>{' '}
              </Col>
              <Col xs="12" md="3">
                <Button color="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
              </Col>
            </Row>
          ))}
          <Row>
            <Col xs="12">
              <p>Total: Rp.{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
            </Col>
            <Col xs="12">
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
