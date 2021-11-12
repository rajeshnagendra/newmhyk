import React from 'react';
import { render } from 'react-dom';
import Header from '../MenuHeader/MenuHeader';
import Footer from '../FooterPage/FooterPage';
import AboutUs from '../AboutUsPage/AboutUsPage';

//import PropTypes from 'prop-types';
import styles from './AboutUsPage.module.css';
import aboutimg from '../../img/about/about.jpg';


function aboutus(){
	render(<AboutUs />, document.getElementById('root'));
}

const AboutUsPage = () => (
  <div className={styles.AboutUsPage}>
    AboutUsPage Component

    <Header />

    <section class="banner-area text-start">	
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-content-wrapper">
                            <div class="banner-content">
                                <h2>About Us</h2>
                                <div class="banner-breadcrumb">
                                    <ul>
                                        <li><a href="index.html">home </a> <i class="zmdi zmdi-chevron-right"></i></li>
                                        <li>about us</li>
                                    </ul>
                                </div>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
		</section>
    
    <section class="about-area pt-95 pb-100">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="about-content">
                     <h2>about our Mysore Hatha Yoga Kendra</h2>
                     <p class="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s, when an unknown lorem printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, lorem ipsum is.</p>
                     <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and is more recently with desktop publishing software like Aldus PageMaker including versions. </p>
                     <a class="banner-btn" href="#/" onClick={aboutus} data-text="read more"><span>read more</span></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-video active">
                     <div class="game">
                         <a href="#/"><img src={aboutimg} alt="about" /></a>
                     </div> 
                     <div class="video-icon video-hover">
                         <a class="video-popup" href="https://www.youtube.com/watch?v=A47zwWsjXgs">
                             <i class="zmdi zmdi-play"></i>
                         </a>
                     </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section class="event-area pt-95 pb-100 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-xl-2 offset-lg-2">
                        <div class="section-title text-center">
                            <h2>awesome event</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s, when an unknown lorem </p>
                        </div>
                        <div class="event-wrapper">
                            <div class="event-content text-center">
                                <h3>Yoga celebration in Handstand</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'ssurvived </p>
                                <h4>25 March 2021</h4>
                                <h5>10AM - 12AM</h5>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <Footer />



  </div>
);

AboutUsPage.propTypes = {};

AboutUsPage.defaultProps = {};

export default AboutUsPage;
