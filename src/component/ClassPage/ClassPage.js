import React from 'react';
import { render } from 'react-dom';
//import PropTypes from 'prop-types';
import styles from './ClassPage.module.css';
import Header from '../MenuHeader/MenuHeader';
import Footer from '../FooterPage/FooterPage';
import SchedulePage from '../SchedulePage/SchedulePage';
const dataitems2 = require("../../Data/data2.json");


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

 
    <ClassSchedule />
   

    <Footer />
  </div>
);

const Scheduledata = ({ classes, timings, day, teacher }) => {
    if (!classes) return <div />;
    return (
        <table>
            <th>CLASSES</th>
            <th>TIMINGS</th>
            <th>DAY</th>
            <th>TEACHER</th>
        <tbody>    
          <tr>
            <td class="purple">
              {classes}
            </td>
            <td class="olive">
              {timings}
            </td>
            <td class="pink">
              {day}
            </td>
            <td class="blue">
              {teacher}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const ClassSchedule = () => {
    //console.log(dataitems2);
    return(
        <div>
        <div class="schedule-area pt-85 pb-90 text-center">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 offset-xl-2 offset-lg-2">
                <div class="section-title">
                    <h2>CLASS SCHEDULES</h2>
                </div>
            </div>
            </div> 
            <div class="row">
                <div class="scehedule-table table-content table-responsive text-center">
                    <div class="col-12">
                    {dataitems2.map((data, key) => {
                        return (
                          <div key={key}>
                            <Scheduledata
                              key={key}
                              classes={data.classes}
                              timings={data.timings}
                              day={data.day}
                              teacher={data.teacher}
                            />
                          </div>
                        );
                      })}
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="row">
                    <div class="col-12 text-center">
                        <a class="banner-btn mt-55" href="#/" onClick={schedule} data-text="view all classes"><span>view all Schedule</span></a>
                    </div>
                </div>
        </div>);
}

ClassPage.propTypes = {};

ClassPage.defaultProps = {};

export default ClassPage;
