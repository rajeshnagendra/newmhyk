import React from 'react';
//import PropTypes from 'prop-types';
//import styles from './SchedulePage.module.css';
import MenuHeader from '../MenuHeader/MenuHeader';
import FooterPage from '../FooterPage/FooterPage';
import ClassPage from '../ClassPage/ClassPage';
import { render } from 'react-dom';
const dataitems = require("../../Data/data.json");
const dataitems2 = require("../../Data/data2.json");
const dataitems1 = require("../../Data/data3.json");

function classPage(){
  render(<ClassPage />, document.getElementById('root'));
}

const SchedulePage = () => {
    return(
        <div>
            <MenuHeader />

            <section class="banner-area text-start">	
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-content-wrapper">
                            <div class="banner-content">
                                <h2>Schedule</h2>
                                <div class="banner-breadcrumb">
                                    <ul>
                                        <li><a href="#/" onClick={classPage}>Class </a> <i class="zmdi zmdi-chevron-right"></i></li>
                                        <li>Schedule</li>
                                    </ul>
                                </div>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
		    </section>

            <ClassSchedule />
            <ClassScheduleAshtangaYoga />
            <ClassScheduleHathayoga />
            <ClassScheduleTeachersTrainingHatha />
            <ClassScheduleTeachersTrainingAshtanga />
            <FooterPage />
        </div>);


}

const Stock = ({ date, year }) => 
  {
    if (!date) return <div />;
    return (
      <table >
        <th>Date</th>
        <th>Year</th>
        <tbody class="pt-30">    
          <tr>
            <td class="olive">
              {date}
            </td>
            <td class="purple">
              {year}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

const Stock1 = ({ duration, convenient }) => {
    if (!duration) return <div />;
    return (
      <table>
        <th>Duration</th>
        <th>Convenient for the Students</th>
      <tbody>
          <tr>
            <td class="pink">
              {duration}
            </td>
            <td class="blue">
              {convenient}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

const Stock2 = ({ classes, timings, day, teacher }) => {
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

const ClassScheduleAshtangaYoga = () => {
    //console.log(dataitems);
    return(
            <div class="schedule-area pt-85 pb-90 text-center">
            <div class="container">
                <div class="row">
                <div class="col-lg-8 offset-xl-2 offset-lg-2">
                    <div class="section-title">
                        <h2>ASHTANGA YOGA INTERNATIONAL TEACHERS TRAINING 200 hrs COURSE SCHEDULES</h2>
                    </div>
                </div>
                </div> 
                <div class="row">
                    <div class="scehedule-table table-content table-responsive text-center">
                        <div class="col-12">
                        {dataitems.map((data, key) => {
                            return (
                            <div key={key}>
                                <Stock
                                key={key}
                                date={data.date}
                                year={data.year}
                                />
                            </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
            </div>);
}

const ClassScheduleHathayoga = () => {
    //console.log(dataitems);
    return(
        <div class="schedule-area pt-85 pb-90 text-center">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 offset-xl-2 offset-lg-2">
                <div class="section-title">
                    <h2>HATHA YOGA INTERNATIONAL TEACHERS TRAINING COURSE SCHEDULES</h2>
                </div>
            </div>
            </div> 
            <div class="row">
                <div class="scehedule-table table-content table-responsive text-center">
                    <div class="col-12">
                    {dataitems.map((data, key) => {
                        return (
                        <div key={key}>
                            <Stock
                            key={key}
                            date={data.date}
                            year={data.year}
                            />
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
        </div>);


}

const ClassScheduleTeachersTrainingHatha = () => {
    //console.log(dataitems1);
    return(
        <div class="schedule-area pt-85 pb-90 text-center">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 offset-xl-2 offset-lg-2">
                <div class="section-title">
                    <h2>200 Hours Teachers Training Course Hatha Yoga</h2>
                </div>
            </div>
            </div> 
            <div class="row">
                <div class="scehedule-table table-content table-responsive text-center">
                    <div class="col-12">
                    {dataitems1.map((data, key) => {
                        return (
                            <div key={key}>
                                <Stock1
                                key={key}
                                duration={data.duration}
                                convenient={data.convenient}
                                />
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
        </div>);


}

const ClassScheduleTeachersTrainingAshtanga = () => {
    //console.log(dataitems1);
    return(
        <div class="schedule-area pt-85 pb-90 text-center">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 offset-xl-2 offset-lg-2">
                <div class="section-title">
                    <h2>200 Hours Teachers Training Course Ashtanga Yoga</h2>
                </div>
            </div>
            </div> 
            <div class="row">
                <div class="scehedule-table table-content table-responsive text-center">
                    <div class="col-12">
                    {dataitems1.map((data, key) => {
                        return (
                            <div key={key}>
                                <Stock1
                                key={key}
                                duration={data.duration}
                                convenient={data.convenient}
                                />
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>
        </div>);


}

const ClassSchedule = () => {
    //console.log(dataitems2);
    return(
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
                            <Stock2
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
        </div>);
}
 

SchedulePage.propTypes = {};

SchedulePage.defaultProps = {};

export default SchedulePage;

