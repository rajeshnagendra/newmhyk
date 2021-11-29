import React from 'react';
import { render } from 'react-dom';
//import PropTypes from 'prop-types';
//import styles from './HomePageSlider.module.css';
import MenuHeader from '../MenuHeader/MenuHeader';
import AboutUs from '../AboutUsPage/AboutUsPage';
import Classess from '../ClassPage/ClassPage';
import Footer from '../FooterPage/FooterPage';
import Praveendetails from '../TrainerPraveen/TrainerPraveen';
import Ashadetails from '../TrainerAsha/TrainerAsha';
import ashaphoto from '../../img/portfolio/Asha.JPG';
//import aboutimg from '../../img/about/about.jpg';
//import slider2 from '../../img/slider/slider2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import { render } from '@testing-library/react';
import ReactPlayer from "react-player";


/*const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};*/

function aboutus(){
    render(<AboutUs />, document.getElementById('root'));
}

function classes(){
    render(<Classess />,document.getElementById('root'));
}

function praveendetails(){
    render(<Praveendetails />, document.getElementById('root'));
}

function ashadetails(){
    render(<Ashadetails />, document.getElementById('root'));
}

const HomePageSlider = () => ( 
    <div > 
    <MenuHeader />
  
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
    
    <section class="about-area pt-95 pb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="about-content">
                     <h2>about our Mysore Hatha Yoga Kendra</h2>
                     <p class="m-0" style={{textAlign:'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s, when an unknown lorem printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, lorem ipsum is.</p>
                     <p style={{textAlign:'left'}}>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and is more recently with desktop publishing software like Aldus PageMaker including versions. </p>
                     <a class="banner-btn" href="#/" onClick={aboutus} data-text="read more"><span>read more</span></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-video active">
                     <div class="video-icon video-hover">
                         <ReactPlayer class="video-popup" 
                            url="https://www.youtube.com/watch?v=A47zwWsjXgs"
                            allowfullscreen="1"
                            frameborder="0"
                            />
                     </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section class="class-area fix bg-gray pb-100 pt-95">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="section-title text-center">
                            <h2>our classes</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s, when an unknown lorem </p>
                        </div>  
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-lg-4 col-md-6">     
                        <div class="single-class">
                            <div class="single-img">
                                <a href="class.html"><img src="http://www.mysorehathayoga.com/mhy/images/slider/slider_image11.jpg" alt="class" /></a>
                                <div class="gallery-icon">
                                    <a class="image-popup" href="img/class/1.jpg">
                                        <i class="zmdi zmdi-zoom-in"></i>
                                    </a>   
                                </div>
                            </div>
                            <div class="single-content">
                                <h3><a href="class.html">yoga for Kids</a></h3>
                                <ul>
                                    <li><i class="zmdi zmdi-face"></i>Instructor: Deepa</li>
                                    <li><i class="zmdi zmdi-alarm"></i>5.00-6.00 PM (Monday to Thursday)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">     
                        <div class="single-class">
                            <div class="single-img">
                                <a href="class.html"><img src="img/class/2.jpg" alt="class" /></a>
                                <div class="gallery-icon">
                                    <a class="image-popup" href="img/class/2.jpg">
                                        <i class="zmdi zmdi-zoom-in"></i>
                                    </a>   
                                </div>
                            </div>
                            <div class="single-content">
                                <h3><a href="class.html">yoga for climbers</a></h3>
                                <ul>
                                    <li><i class="zmdi zmdi-face"></i>Sathi Bhuiyan</li>
                                    <li><i class="zmdi zmdi-alarm"></i>10.00Am-05:00Pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">     
                        <div class="single-class">
                            <div class="single-img">
                                <a href="class.html"><img src="img/class/3.jpg" alt="class" /></a>
                                <div class="gallery-icon">
                                    <a class="image-popup" href="img/class/3.jpg">
                                        <i class="zmdi zmdi-zoom-in"></i>
                                    </a>   
                                </div>
                            </div>
                            <div class="single-content">
                                <h3><a href="class.html">yoga for climbers</a></h3>
                                <ul>
                                    <li><i class="zmdi zmdi-face"></i>Sathi Bhuiyan</li>
                                    <li><i class="zmdi zmdi-alarm"></i>10.00Am-05:00Pm</li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <a class="banner-btn mt-55" href="#/" onClick={classes} data-text="view all classes"><span>view all classes</span></a>
                    </div>
                </div>
            </div>
    </section>

    <div class="trainer-area pt-90 pb-100 bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-xl-2 offset-lg-2">
                <div class="section-title text-center">
                    <h2>our trainer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s, when an unknown lorem </p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-trainer text-center">
                    <img src="http://www.mysorehathayoga.com/mhy/images/profile/praveen_profile.jpg" alt="trainer"  style={{width: 400, height: 400, borderRadius: 400/ 2 }} />
                    <div class="trainer-hover">
                        <h3><a href="#/" onClick={praveendetails}>Praveen</a></h3>
                        <ul>
                            <li><a href=" https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>  
                            <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://dribbble.com/"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-trainer text-center">
                    <img src={ashaphoto} alt="trainer" style={{width: 400, height: 400, borderRadius: 400/ 2 }} />
                    <div class="trainer-hover">
                        <h3><a href="#/" onClick={ashadetails}>Asha</a></h3>
                        <ul>
                            <li><a href=" https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>  
                            <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://dribbble.com/"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div class="single-trainer text-center">
                    <img src="img/trainer/trainer3.jpg" alt="trainer" />
                    <div class="trainer-hover">
                        <h3>John laisa do</h3>
                        <ul>
                            <li><a href=" https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>  
                            <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://dribbble.com/"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div style={{textAlign:'left'}}> 
       <Footer />
    </div>


    </div>
);

HomePageSlider.propTypes = {};

HomePageSlider.defaultProps = {};

export default HomePageSlider;
