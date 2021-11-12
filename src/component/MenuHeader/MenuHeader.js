import React from 'react';
//import PropTypes from 'prop-types';
import { render } from 'react-dom';
import styles from './MenuHeader.module.css';
import AboutUs from '../AboutUsPage/AboutUsPage';
import Classess from '../ClassPage/ClassPage';
import Contact from '../ContactPage/ContactPage';
//import { render } from '@testing-library/react';
//import logo from '../../img/logo/logo.png'


function aboutus(){
	render(<AboutUs />, document.getElementById('root'));
}

function classess(){
	render(<Classess />, document.getElementById('root'));
}

function contact(){
	render(<Contact />, document.getElementById('root'));
}

const MenuHeader = () => (
  <div className={styles.MenuHeader} >
    <header className="top" >
			<div className="header-area ptb-18 header-sticky"  >
				<div className="container" >
					<div className="row" >
						<div className="col-lg-2" >
							<div className="logo" >
								<a href="index.html"><img src="http://www.mysorehathayoga.com/mhy/images/logo.png" alt="mhyk" style={{transform: `scale(0.8)`}}  /></a>
							</div>
						</div>
						<div className="col-lg-8" >
                            <div className="content-wrapper" >
                                
                                <div className="main-menu text-center" >
                                    <nav>
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#/" onClick={aboutus}>About us</a></li>
                                            <li><a href="#/" onClick={classess}>classes</a></li>
                                            <li><a href="gallery.html" >gallery</a></li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="#/" onClick={contact}>Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="mobile-menu d-block d-lg-none"></div>
                                
                            </div>
						</div>
						<div className="col-lg-2 d-none d-lg-block">
						    <div className="header-contact text-end" >
						        <a className="banner-btn" data-text="contact" href="#/" onClick={contact}><span>contact</span></a>
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
