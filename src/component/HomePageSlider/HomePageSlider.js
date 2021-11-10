import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HomePageSlider.module.css';
import slider1 from '../../img/slider/slider1.jpg';
import slider2 from '../../img/slider/slider2.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};


const HomePageSlider = () => (  
  
    <div className="slider-area">	
		    <div className="slider-wrapper">
		    <Carousel>
                <div>
                    <img src="http://www.mysorehathayoga.com/mhy/images/slider/slider_image5.jpg" alt='aa' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.mysorehathayoga.com/mhy/images/slider/slider_image9.jpg" alt='aa'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.mysorehathayoga.com/mhy/images/slider/slider_image1.jpg" alt='aa'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
		    </div>

        

		</div>  
);

HomePageSlider.propTypes = {};

HomePageSlider.defaultProps = {};

export default HomePageSlider;
