import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shop/shop-cart/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "../../styles/product-card.css";

const ProductCard = (props) => {
  const { id_produk, nama_produk, gambar_produk, harga_produk } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id_produk,
        title: nama_produk,
        image01: gambar_produk,
        price: harga_produk,
      })
    );
  };

  return (
    <div className="product__container" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
      <div className="product__item">
        <div className="product__img">
          <img src={`http://localhost:8080/gambar/${gambar_produk}`} alt={nama_produk} className="w-50" />
        </div>

        <div className="product__content">
          <h5>
            <Link to={`/detail/${id_produk}`}>{nama_produk}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price">Rp.{harga_produk}</span>
            <button className="addTOCart__btn" onClick={addToCart}>
              <FontAwesomeIcon icon={faShoppingCart} /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
