import { useState,useEffect } from "react";
import watch from '../assets/reloj.jpg';
import ring from '../assets/anillo.jpg';
import diamante from '../assets/piedrapreciosa1.png';
import pulsera from '../assets/pulsera.jpg';

import TypeModal from './TypeModal';

export default function Types() {
    const [isOpenModal, setOpenModal] = useState(false);
     const[selectedType, setSelectedType] = useState({})
     const [animarModal,setAnimar] = useState(false);

     useEffect(()=>{
     },[selectedType])

    const TYPES_INFO = [
        {
            type_name: "Watches",
            img: watch,
            desc: "Discover the perfect timepiece for every occasion. Our collection of watches combines exquisite craftsmanship, elegant design, and precision engineering. From classic styles to modern innovations, each watch is a statement of style and functionality. Whether you're seeking a sophisticated accessory for a formal event or a reliable companion for everyday wear, our watches are meticulously crafted to exceed your expectations."
        },
        {
            type_name: "Rings",
            img: ring,
            desc: "Make a lasting statement with our stunning collection of rings. Crafted with exquisite attention to detail, our rings showcase exceptional craftsmanship and timeless beauty. From delicate solitaires to intricate designs, each ring is a symbol of love, commitment, and style."
        },
        {
            type_name: "Precious stones",
            img: diamante,
            desc: "Experience the allure of precious stones with our captivating collection. Each precious stone is a masterpiece of nature, displaying mesmerizing colors, exceptional clarity, and breathtaking brilliance. From sparkling diamonds to vibrant emeralds, sapphires, and rubies, our collection showcases the rarest and most exquisite gemstones."
        },
        {
            type_name: "Pulseras",
            img: pulsera,
            desc: "Enjoy your pulseras with a touch of gold a diamond to give to your wife."
        }
    ];

    return (
        <section className="types" id="types">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="containerg-types">
                <div className="title-types">
                    <p>Our Products</p>
                </div>
                <div className="container-types">
                    {TYPES_INFO.map((type) => (
                        <div
                            className="type"
                            key={type.type_name}
                            onClick={() => {setOpenModal(!isOpenModal); setSelectedType(type); setAnimar(true)}}
                        >
                            <div className="container-typeimg">
                                <picture>
                                    <img  loading="lazy" src={type.img} alt="imgtype" />
                                </picture>
                            </div>
                            <div className="container-name-description">
                                <div className="container-type-name">
                                    <p>{type.type_name}</p>
                                </div>
                                <div className="container-type-description">
                                    <p>{type.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpenModal &&<TypeModal
                selectedType = {selectedType}
                setOpenModal={setOpenModal}
                isOpenModal={isOpenModal}
                animarModal = {animarModal}
                setAnimar={setAnimar}
            />}
        </section>
    );
}