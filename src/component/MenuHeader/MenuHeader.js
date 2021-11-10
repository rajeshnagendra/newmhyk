import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuHeader.module.css';
import logo from '../../img/logo/logo.png'

const MenuHeader = () => (
  <div className={styles.MenuHeader}>
    <header className="top">
			<div className="header-area ptb-18 header-sticky">
				<div className="container">
					<div className="row">
						<div className="col-lg-2">
							<div className="logo">
								<a href="index.html"><img src="http://www.mysorehathayoga.com/mhy/images/logo.png" alt="mhyk" style={{transform: `scale(0.8)`}}  /></a>
							</div>
						</div>
						<div className="col-lg-8">
                            <div className="content-wrapper">
                                
                                <div className="main-menu text-center">
                                    <nav>
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About us</a></li>
                                            <li><a href="class.html">classes</a></li>
                                            <li><a href="gallery.html">gallery</a></li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="mobile-menu d-block d-lg-none"></div>
                                
                            </div>
						</div>
						<div className="col-lg-2 d-none d-lg-block">
						    <div className="header-contact text-end">
						        <a className="banner-btn" data-text="contact" href="contact.html"><span>contact</span></a>
						    </div>
						</div>
					</div>
				</div>
			</div>
		</header>
  </div>
);

MenuHeader.propTypes = {};

MenuHeader.defaultProps = {};

export default MenuHeader;
