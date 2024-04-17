import React, { useState } from 'react';
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
    // Ambil item yang sesuai dengan id
    const selectedItem = cartItems.find(item => item.id === id);
    // Cek apakah jumlah barang lebih besar dari 1 sebelum dikurangi
    if (selectedItem.quantity > 1) {
      dispatch(cartActions.decrementItem(id));
    } else {
      // Jika jumlah barang sudah 1, maka hapus item dari keranjang
      dispatch(cartActions.removeItem(id));
    }
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
                <p>Harga: Rp.{item.price}</p>
              </Col>
              <Col sm="2">
                <p>Jumlah Barang: {item.quantity}</p>
              </Col>
              <Col sm="3">
                <Button color="info" onClick={() => handleIncrement(item.id)}>+</Button>{' '}
                <Button color="danger" onClick={() => handleDecrement(item.id)}>-</Button>{' '}
                <Button color="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
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
