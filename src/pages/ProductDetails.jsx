import React, {useState} from 'react';
import { Container, Row, Col, Input, Textarea } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import '../styles/product-details.scss';
import {motion} from 'framer-motion';

const ProductDetails = () => {
    const [tab, setTab] = useState('desc');
    const { id } = useParams();
    const product = products.find((item)=> item.id === id);

    const { 
      imgUrl, 
      productName, 
      price, 
      avgRating, 
      description, 
      shortDesc, 
      reviews } = product;


return (
    <Helmet title ={productName}>
        <CommonSection title = {productName}/>
        <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src= { imgUrl} alt="" />
                    </Col>

                    <Col lg='6'>
                        <div className="product_details">
                            <h2>{productName}</h2>
                            <div className="product_rating d fles align-items-center gap-5 
                            mb-3">
                                <div>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-half-s-line"></i></span>
                                </div>
                                <p> (<span>{avgRating}</span> ratings)</p>
                            </div>

                            <span className='product_price'>${price}</span>
                                <p className='mt-3'>{shortDesc}</p>

                            <motion.button whileTap = {{scale:1.2}} 
                            className='buy_btn'>
                                Add to Cart
                            </motion.button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="tab_wrapper d-flex align-items-center gap-5">
                            <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`}
                            onClick={()=> setTab('desc')}>
                                Description
                            </h6>
                            <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`}
                            onClick ={()=> setTab('rev')}>
                                Reviews ({reviews.length})
                            </h6>
                        </div>

                        {tab === 'desc' ? (
                                <div className='tab_content mt-5'>
                                 <p>{description}</p>
                                </div>
                             ): (
                                <div className='product_review mt-5'>
                                    <div className="review_wrapper">
                                        <ul>
                                            {
                                                reviews?.map((item,index)=> (
                                                    <li key={index} className='mb-4'>
                                                        <h6>John Doe</h6>
                                                        <span>{item.rating} (rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))}
                                        </ul>

                                        <div className="review_form">
                                            <h4>Leave your experience</h4>
                                            <form action="">
                                                <div className="form_group">
                                                    <Input type="text" placeholder='Enter name' />
                                                </div>

                                                <div className="form_group d-flex align-items-center gap-5">
                                                    <span>1<i class="ri-star-s-fill"></i></span>
                                                    <span>2<i class="ri-star-s-fill"></i></span>
                                                    <span>3<i class="ri-star-s-fill"></i></span>
                                                    <span>4<i class="ri-star-s-fill"></i></span>
                                                    <span>5<i class="ri-star-s-fill"></i></span>
                                                    <span>6<i class="ri-star-s-fill"></i></span>
                                                </div>

                                                <div className="form_group">
                                                    <Input rows = {4} 
                                                    type="textarea" placeholder='Review Message ...' />
                                                </div>

                                                <button type ='submit' className="buy_btn">
                                                    Submit
                                                </button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                             )
                        }
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>    
   )
 }

 export default ProductDetails;