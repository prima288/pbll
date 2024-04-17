import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../shop/shop-cart/cartSlice';

//import '../../styles/product-details.css';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/produk/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    // Menampilkan status loading atau menangani kesalahan
    return <div>Loading...</div>;
  }

  const { nama_produk, harga_produk, deskripsi_produk, stok_tersedia } = product;

  return (
    <section className='common-section'>
      <Container>
        <Row>
          <Col lg='2' md='2'>
            <div className='product__images'>
              <div className='img__item mb-3' onClick={() => setPreviewImg(product.gambar_produk)}>
                <img src={`http://localhost:8080/gambar/${product.gambar_produk}`} alt={product.nama_produk} className='w-100' />
              </div>
              {/* Tambahkan gambar-gambar tambahan jika ada */}
            </div>
          </Col>

          <Col lg='4' md='4'>
            <div className='product__main-img'>
              <img src={previewImg} alt='' className='w-100' />
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='single__product-content'>
              <h2 className='product__title'>{nama_produk}</h2>
              <span className='product__price'>{harga_produk}</span>
              <p className='mb-5'>{deskripsi_produk}</p>
              <p>Stok: {stok_tersedia}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
