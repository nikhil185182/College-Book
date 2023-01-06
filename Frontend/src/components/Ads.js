import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Ads.css';


export default function Ads() {
    return (
        <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="First slide" height={"500px"} width={"100%"}
                    />
                    <Carousel.Caption>
                        <h3>Post your Thoughts !</h3>
                        <p>Start each day with a positive thought and a grateful heart.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                        alt="Second slide" height={"500px"} width={"100%"}
                    />

                    <Carousel.Caption>
                        <h3>Enlight others with your spark.</h3>
                        <p>The soul becomes dyed with the colour of its thoughts.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                        alt="Third slide"
                        height={"500px"}
                        width={"100%"}
                    />

                    <Carousel.Caption>
                        <h3>Where does a thought go when it's forgotten?</h3>
                        <p>
                            Closed in a room, my imagination becomes the universe, and the rest of the world is missing out.                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
