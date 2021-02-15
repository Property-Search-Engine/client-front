import React from 'react'; 

import { Carousel } from 'react-bootstrap'; 

import "./ImageCarousel.scss"; 

export default function ImageCarousel(props) {

    const { property } = props; 

    return (
        <Carousel className="carousel-slider">
            {property.images.map((carouselItem, i) => (
            <Carousel.Item key={`carousel_${i}`}className="carousel-image">
                <img
                className="d-block w-100 carouselImg"
                src={carouselItem}
                alt="First slide"
                />
            </Carousel.Item>
            ))}
        </Carousel>
    )
}
