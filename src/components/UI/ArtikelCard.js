import React from "react";
import { motion } from 'framer-motion';
import { Col } from "reactstrap";

const ArtikelCard = ({ imageSrc, title, description }) => {
    return (
        <Col lg='3' md='4'>
            <div className="article__item-container" style={{ height: 'auto', width: '100%', maxWidth: '600px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="article__item" style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
                    <div className="article__img mr-3" style={{ maxWidth: '100%', height: 'auto', flex: '1' }}>
                        <motion.img whileHover={{ scale: 1.1 }} src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                </div>
                <div className="article__details" style={{ width: '50%', padding: '0 20px' }}>
                    <div className="article__description"><strong>{title}</strong></div>
                    <div className="article__description">
                        <span className="article__description-text">{description}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ArtikelCard;
