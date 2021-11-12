import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ClassPage.module.css';
import Header from '../MenuHeader/MenuHeader';
import Footer from '../FooterPage/FooterPage';
import SchedulePage from '../SchedulePage/SchedulePage';
import { render } from 'react-dom';
//import SchedulePage from '../SchedulePage/SchedulePage';

function schedule(){
    render(<SchedulePage/>, document.getElementById('root'));
}

const ClassPage = () => (
  <div className={styles.ClassPage}>
    ClassPage Component
    <Header />

    <section class="banner-area text-start">	
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-content-wrapper">
                            <div class="banner-content">
                                <h2>class</h2>
                                <div class="banner-breadcrumb">
                                    <ul>
                                        <li><a href="index.html">home </a> <i class="zmdi zmdi-chevron-right"></i></li>
                                        <li>class</li>
                                    </ul>
                                </div>
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
                            <p>Classes incorporate traditional Hatha Yoga postures and Power Yoga movements for increasing your flexibility, strength and get you in shape. Students will explore the deeper realms,de-stress and get energiesed via Meditation and Pranayama techniques. Kriyas & Shatkarmas are thought for internal cleansing and practiced to help students enhance their yogic experience. The classes are held by an expert Yoga teacher who is friendly, bi-lingual (Kannada & Engilsh) and a result-oriented person, helping you to achieve your goals.</p>
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
                        <a class="banner-btn mt-55" href="class.html" data-text="view all classes"><span>view all classes</span></a>
                    </div>
                </div>
            </div>
    </section>

    <section class="schedule-area pt-85 pb-90 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-xl-2 offset-lg-2">
                        <div class="section-title">
                            <h2>class schedule</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum issss has been the industry's standard dummy text ever since the 1500s, when an unknown lorem </p>
                        </div>
                    </div>
                </div>    
                <div class="row">
                    <div class="col-12">                             
                        <div class="scehedule-table table-content table-responsive text-center">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Classes</th>
                                        <th>Timings</th>
                                        <th>Day</th>
                                        <th>Teacher</th>
                                        
                                    </tr>
                                </thead>
                                <tbody class="pt-30">
                                    <tr >
                                        <td class="purple">Ashtanga Yoga TTC & Drop-in's</td>
                                        <td class="purple">4.30 am - 6.00 am</td>
                                        <td class="purple">Monday to Friday</td>
                                        <td class="purple">Praveen</td> 
                                    </tr>
                                    <tr >
                                        <td class="olive">Hatha Yoga TTC & Drop-in's</td>
                                        <td class="olive">6.00 am - 7.30 am</td>
                                        <td class="olive">Monday to Friday</td>
                                        <td class="olive">Praveen / Kumudha / Kavya / Rajesh</td> 
                                    </tr>
                                    <tr >
                                        <td class="purple">Kids Yoga</td>
                                        <td class="purple">5.00 pm - 5.45 pm</td>
                                        <td class="purple">Monday to Thursday</td>
                                        <td class="purple">Deepa / Kavya</td> 
                                    </tr>
                                    <tr >
                                        <td class="olive">Singing Classes</td>
                                        <td class="olive">6.00 pm - 6.45 pm	</td>
                                        <td class="olive">2 classes per week	</td>
                                        <td class="olive">Sree Lakshmi</td> 
                                    </tr>
                                    <tr >
                                        <td class="purple">Pranayama / Meditation / Chantting Class	</td>
                                        <td class="purple">6.30 am - 7.30 am</td>
                                        <td class="purple">Monday to Thursday</td>
                                        <td class="purple">Praveen/Asha</td> 
                                    </tr>
                                    <tr >
                                        <td class="olive">Asana Adjustment Class for TTC</td>
                                        <td class="olive">3.30 pm - 5.00 pm	</td>
                                        <td class="olive">Monday to Friday</td>
                                        <td class="olive">Praveen / Asha</td> 
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <a class="banner-btn mt-55" href="#/" onClick={schedule} data-text="view all schedule"><span>view all Schedule</span></a>
                </div>
            </div>
    </section>
    
    <Footer />
  </div>
);

ClassPage.propTypes = {};

ClassPage.defaultProps = {};

export default ClassPage;
