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
        <body>
            <div className="div-banner">
                <div className='carousel-div'>
                    <img src={arrayImgs[currentIndex]} alt="Carousel Image" className='carousel-img'/>
                </div>
                <div className='carousel-button'>
                    <button onClick={carrusell}><FaAngleRight/></button>
                </div>
            </div>
            <div className='div-description'>
                <h1 className='title'>Welcome to our website dedicated to dog lovers!</h1>
                <p className='description'>Discover the perfect place where furry friends take the spotlight. Here, you'll find everything you need to know about the canine world and how to make life with your faithful companion an unforgettable experience.

From care and training tips to the most popular breeds and surprising curiosities, our website is packed with invaluable information for dog lovers of all ages and levels of experience.

Looking for a dog that fits your lifestyle? Our comprehensive breed finder will help you discover the perfect companion, taking into account your space, activity level, and personal preferences.

Need to solve a specific behavior problem? Our team of canine training experts is here to offer you the best advice and practical solutions for any situation.

And that's not all! Explore our gallery of adorable dog pictures, read heartwarming stories of dogs finding their forever homes, and join our community of dog lovers to share your experiences and learn from other passionate owners.

On our website, dogs are more than just pets—they are family members. So come and join our virtual pack. Your doggy adventure starts here!

Follow us on social media for exclusive content and exciting updates!</p>
            </div>
        </body>


);
};

export default Home;