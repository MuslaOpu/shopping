

import React from 'react';
import '../styles/footer.scss';
import {  Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();
     return (
        <section className="footer">
            
                <Row>
                    <Col lg='4' className='mb-4' md='5'>
                        <div className="logo">
                            <div>
                                <h1 className='text-white'>MOPU</h1>
                            </div>
                        </div>
                        <p className="footer_text mt-4">
                                Lorem ipsum, dolor sit amet 
                                consectetur adipisicing elit. Obcaecati facilis beatae ratione, 
                                quia quae, consectetur vitae sed sapiente, ut eveniet assumenda aperiam 
                                laborum omnis animi fugiat. Ut facilis labore optio.
                        </p>
                    </Col>
                    <Col lg='3' className='mb-4' md='3'>
                        <div className="footer_quick-links">
                            <h4 className="quick_links-title">Top Categories</h4>
                            <ListGroup >
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="mobile">Mobile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="mobile">Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="mobile">Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="mobile">Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' className='mb-4' md='3'>
                        <div className="footer_quick-links">
                                <h4 className="quick_links-title">Useful Links</h4>
                                <ListGroup >
                                    <ListGroupItem className='ps-0 border-0'>
                                        <Link to="/shop">Shop</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0'>
                                        <Link to="/cart">Cart</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0'>
                                        <Link to="/login">Login</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0'>
                                        <Link to="mobile">Privacy Policy</Link>
                                    </ListGroupItem>
                                </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='2'>
                        <div className="footer_quick-links">
                                <h4 className="quick_links-title">Contact</h4>
                                <ListGroup className='footer_contact' >
                                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                       <span><i class="ri-map-pin-line"></i></span>  
                                        <p>12, Zurich, Switzerland</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-phone-line"></i></span>
                                        <p>00441235666</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-mail-line"></i></span>
                                        <p>ex123@gmail.com</p>
                                    </ListGroupItem>
                                </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer_copyright">Copyright {year} developed by Musla Uddin. All rights reserved. </p>
                    </Col>
                </Row>
            
        </section>
    )
}

export default Footer;