import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/beras.png';

import Services from "../services/Services";

const Home = ( ) => {

    const year = new Date().getFullYear();
    return (
    <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending Product in {year}</p>
                            <h2>Beras Sehat Pilihan Kita</h2>
                            <p>Beras sehat adalah jenis beras yang telah melalui proses pengolahan
                            yang minimal atau tanpa menggunakan bahan kimia sintetis seperti pestisida atau pupuk buatan,
                            sehingga menjaga kualitas alami dan kebersihan beras. Biasanya beras sehat dihasilkan dari pertanian 
                            organik yang ramah lingkungan, tanpa penggunaan pestisida dan pupuk kimia,
                            serta melalui praktik pertanian yang berkelanjutan.Beras sehat sering dianggap lebih nutrisi dan lebih
                            baik untuk kesehatan karena tidak terkontaminasi oleh residu kimia dan memiliki kandungan nutrisi yang lebih tinggi.</p>

                            <motion.button whileTap={{scale: 1.2}} className="buy__button"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>

                    <Col lg="6" md="6" >
                        <div className="hero__img">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Services />
    </Helmet>
    );
};

export default Home;
