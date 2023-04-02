import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Input, Textarea } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import '../styles/product-details.scss';
import {motion} from 'framer-motion';
import {db} from '../firebase/firebase';
import {doc, getDoc} from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';
import Productslist from '../components/ProductList';
import { cartActions } from '../redux/slices/cartSlice';
import {  useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const ProductDetails = () => {

    const[product, setProduct] = useState({});
    const [tab, setTab] = useState('desc');

    const { id } = useParams();

    const {data: products} = useGetData('products');

    const docRef = doc(db, 'products', id);

   

    useEffect(()=>{
        const getProduct = async() => {
            const docSnap = await getDoc(docRef);

           if (docSnap.exists()) {
            setProduct(docSnap.data())
           }else{
            console.log('no product!')
           }
        }

        getProduct();
    })

    const { 
      imgUrl, 
      productName, 
      price, 
    //   avgRating, 
      description, 
      shortDesc, 
    //   reviews,
    category 
    } = product;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                imgUrl,
                productName,
                price
            })
        );

        toast.success('Product added successfully');

    } 

    const relatedProducts = products.filter(item=>item.category === category);



    

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
                            </div>
                            <div className='d-flex align-items-center gap-5'>
                                <h3 className='product_price'> ${price}</h3>
                                <h5>Category : {category}</h5>
                            </div>
                                <p className='mt-3'>{shortDesc}</p>

                            <motion.button whileTap = {{scale:1.2}} 
                            className='buy_btn' onClick={addToCart}>
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
                                Reviews 
                            </h6>
                        </div>

                        {tab === 'desc' ? (
                                <div className='tab_content mt-5'>
                                 <p>{description}</p>
                                </div>
                             ): (
                                <div className='product_review mt-5'>
                                    <div className="review_wrapper">
                                        {/* <ul>
                                            {
                                                reviews?.map((item,index)=> (
                                                    <li key={index} className='mb-4'>
                                                        <h6>John Doe</h6>
                                                        <span>{item.rating} (rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))}
                                        </ul> */}

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
                    <Col lg='12'>
                        <h2 className='related_title'>You might also like</h2>
                    </Col>

                    <Productslist data={relatedProducts}/>
                </Row>
            </Container>
        </section>

    </Helmet>    
   )
 }

 export default ProductDetails;