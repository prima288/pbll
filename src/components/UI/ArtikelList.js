import React from "react";
import ArtikelCard from "./ArtikelCard";
import img1 from "../../assets/images/beras.png";
import img2 from "../../assets/images/phone-04.jpg";
import img3 from "../../assets/images/phone-01.jpg";

const ArtikelList = () => {
    const articles = [
        {
            imageSrc: img1,
            title: "Judul Artikel 1",
            description: "Deskripsi artikel 1."
        },
        {
            imageSrc: img2,
            title: "Judul Artikel 2",
            description: "Deskripsi artikel 2."
        },
        {
            imageSrc: img3,
            title: "Judul Artikel 3",
            description: "Deskripsi artikel 3."
        }
    ];

    return (
        <div>
            {articles.map((article, index) => (
                <ArtikelCard
                    key={index}
                    imageSrc={article.imageSrc}
                    title={article.title}
                    description={article.description}
                />
            ))}
        </div>
    );
};

export default ArtikelList;
