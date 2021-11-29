import React from 'react';
//import PropTypes from 'prop-types';
import styles from './FooterPage.module.css';

const FooterPage = () => (
  <div className={styles.FooterPage}>
    <div class="map-area">
            <div class="google-map-area">
                <div id="contacts" class="map-area">
                    <iframe class="contact-map-size" title= "map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124745.8687952489!2d76.57556245150641!3d12.29500609287215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf700115533321%3A0x7d5050431f1f614e!2sMysore%20Hatha%20Yoga%20Kendra!5e0!3m2!1sen!2sin!4v1637217218781!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
    </div>

    <footer class="footer-area bg-gray">
            <div class="footer-widget-area bg-3 pt-98 pb-90 fix">
                <div class="container">
                    <div class="row">  
                        <div class="col-lg-4 col-md-6">
                            <div class="single-footer-widget">
                                <a href="index.html"><img src="http://www.mysorehathayoga.com/mhy/images/logo1.png" alt="logo" style={{height:40,width:140}} /></a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a convallis nulla. Ut </p>
                                <ul>
                                    <li><i class="zmdi zmdi-email"></i> praveensomu@rediff.com</li>
                                    <li><i class="zmdi zmdi-phone"></i> +91 821 - 2331505</li>
                                    <li><i class="zmdi zmdi-home"></i> 953/1,Ganesha Krupa,<br />
                                    Kantharaja Urs Road,<br />
                                    Opposite Friendly Motors,<br />
                                    Laxmipuram, Mysore 570 004,<br />
                                    Karnataka - India</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-footer-widget">
                                <h3>Recent Tweets</h3>
                                <div class="single-twitt mb-10">
                                    <div class="twitt-icon">
                                        <i class="zmdi zmdi-twitter"></i>
                                    </div>
                                    <div class="twitt-content">
                                        <p>@envato good News for today!! We got  2 psd templete weekly top selling quality template in technology category !!!</p>
                                   <a href="https://twitter.com/login/">https://twitter.com/login</a>
                                    </div>
                                </div>
                                <div class="single-twitt">
                                    <div class="twitt-icon">
                                        <i class="zmdi zmdi-twitter"></i>
                                    </div>
                                    <div class="twitt-content">
                                        <p>@envato good News for today!! We got  2 psd templete weekly top selling quality template in technology category !!!</p>
                                   <a href="https://twitter.com/login/">https://twitter.com/login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-footer-widget">
                                <h3>get in touch</h3>
                                <form id="subscribe-form" action="https://whizthemes.com/mail-php/other/mail.php">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="Name" name="con_name" />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" placeholder="Email" name="con_email" />
                                        </div>
                                        <div class="col-sm-12">
                                            <textarea cols="30" rows="7" name="con_message" placeholder="subject"></textarea>
                                            <button type="submit">submit</button>
                                            <p class="subscribe-message"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-text-area fix bg-coffee ptb-18">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer-text text-center">
                                <span>Copyright &copy; <a href="https://themeforest.net/user/codecarnival/portfolio">© 2013 Mysore Hatha Yoga Kendra.</a> All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>

  </div>
);

FooterPage.propTypes = {};

FooterPage.defaultProps = {};

export default FooterPage;
