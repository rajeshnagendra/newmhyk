import React from 'react';
//import { render } from 'react-dom';
//import PropTypes from 'prop-types';
import styles from './TrainerPraveen.module.css';

const TrainerPraveen = () => (
  <div className={styles.TrainerPraveen}>
    <div >
    <img src="http://www.mysorehathayoga.com/mhy/images/profile/praveen_profile.jpg"
                  style={{width: 400, height: 400, borderRadius: 400/ 2, marginTop: 30}}
                  alt="" />
    </div>
  
    <p style={{float:'right'}}>
        Praveen<br />
        Praveen is result oriented broad minded person who welcomes to all levels of practisers.
        He handles in various aspects of Yoga like Ashthanga Vinyasa Yoga Primary Series, Hatha Yoga, Teacher's Training Program, Yoga Therapy, Yoga for Kids, Warrior Flow, Yoga for Co-operates, Yoga for Stress, Yoga for Back Pain, Back Bending, Hip Opening Classes, Pranayama & Meditation Classes
        PROFESSIONAL TRAININGS & CERTIFICATIONS<br />
        Ashtanga Yoga – TTC Primary Series<br />
        Hatha Yoga- Advance Practice Level-1 " A Grade"<br />
        Pranayma & Meditation Course – Mysore University<br />
        Kriya Course - Pavitra<br />
        Yoga Therapy Class- Atma Darshan<br />
        Diploma in Yoga- Annamalai University " First Class"<br />
        "Good health, stress relief and mind management Course" - Swami Satyananda Saraswathi
        At present he has been certified for completing 35 Teachers Training in RYS200 handling Ashtanga Yoga & Hatha Yoga in other institute.
        Yoga for Youth – Teresina College
    </p>
    <p style={{textAlign: 'center'}}>Expertise in: Hatha Yoga Astanga Trainings</p>
 
    

  </div>
);

TrainerPraveen.propTypes = {};

TrainerPraveen.defaultProps = {};

export default TrainerPraveen;
