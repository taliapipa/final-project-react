import React, { useState } from 'react';
import '../../../styles/Home.css'
import dog from '../../../imgs/dog.jpg';
import cat from '../../../imgs/gato.jpg';
import catdog from '../../../imgs/gatoperro.jpeg';
import perro from '../../../imgs/perro.jpeg';
import dogdog from '../../../imgs/perroperro.jpg';
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
    const arrayImgs = [dog, cat, catdog, perro, dogdog];
    const [currentIndex, setCurrentIndex] = useState(0);

    const carrusell = () => {
    const nextIndex = (currentIndex + 1) % arrayImgs.length;
    setCurrentIndex(nextIndex);
};

    return (
        <div className="div-banner">
            <div className='carousel-div'>
                <img src={arrayImgs[currentIndex]} alt="Carousel Image" className='carousel-img'/>
            </div>
            <div className='carousel-button'>
                <button onClick={carrusell}><FaAngleRight/></button>
            </div>
        </div>

);
};

export default Home;