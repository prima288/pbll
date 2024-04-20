import React from "react";
import { motion } from 'framer-motion';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ArtikelCard = ({ imageSrc, title, id_artikel }) => {
    console.log("ID Artikel:", id_artikel);
    return (
        <Col lg='4' md='6' xs='12' style={{ marginBottom: '20px' }}>
            <Link to={`/detailartikel/${id_artikel}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="article__item-container" style={{ 
                    height: 'auto', 
                    width: '100%', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 
                    borderRadius: '8px', 
                    padding: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff'
                }}>
                    <div className="article__img" style={{ 
                        maxWidth: '100%', 
                        height: 'auto', 
                        flex: '1',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <motion.img whileHover={{ scale: 1.1 }} src={`http://localhost:8080/gambar/${imageSrc}`} alt={title} style={{ 
                            maxWidth: '100%', 
                            maxHeight: '100%', 
                            objectFit: 'cover', 
                            borderRadius: '8px',
                            maxWidth: '1000px', 
                            maxHeight: '1000px',
                            pointerEvents: 'none'
                        }} />
                    </div>
                    <div className="article__details" style={{ 
                        width: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                        <div className="article__title" style={{ 
                            marginBottom: '10px', 
                            fontSize: '1.5rem', 
                            fontWeight: 'bold' 
                        }}>{title}</div>
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default ArtikelCard;
