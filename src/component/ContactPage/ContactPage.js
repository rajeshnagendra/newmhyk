import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ContactPage.module.css';
import Header from '../MenuHeader/MenuHeader';
import Footer from '../FooterPage/FooterPage';


const ContactPage = () => (
  <div className={styles.ContactPage}>
    ContactPage Component
    <Header />

    <section class="banner-area text-start">	
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-content-wrapper">
                            <div class="banner-content">
                                <h2>contact</h2>
                                <div class="banner-breadcrumb">
                                    <ul>
                                        <li><a href="index.html">home </a> <i class="zmdi zmdi-chevron-right"></i></li>
                                        <li>contact</li>
                                    </ul>
                                </div>
                            </div>  
                        </div> 
                    </div>
                </div>
            </div>
		</section>

    <div class="contact-area pt-95">
		    <div class="container">
		        <div class="row">
		            <div class="col-12">
		                <div class="contact-form section-title text-center">
                            <h2 class="section-title text-center">Contact Form</h2>
                            <form id="contact-form" class="row" action="https://whizthemes.com/mail-php/other/mail.php">
                                <div class="col-md-6">
                                    <input class="mb-30" placeholder="Name" name="con_name" type="text" />
                                </div>
                                <div class="col-md-6">
                                    <input class="mb-30" placeholder="Email" name="con_email" type="text" />
                                </div>
                                <div class="col-md-12">
                                    <textarea class="mb-30" cols="30" rows="7" name="con_message" placeholder="subject"></textarea>
                                    <button type="submit">submit</button>
                                    <p class="form-message"></p>
                                </div>
                            </form>
                        </div>
		            </div>
		        </div>
		    </div>
		</div>

    <Footer />
  </div>
);

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;
