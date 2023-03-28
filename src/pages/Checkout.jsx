import React from 'react';
import '../styles/checkout.scss';
import { Container,Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);


  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
        <section>
          <Container>
            <Row>
              <Col lg='8'>
                  <h6 className='mb-4 fw-bold'>Billing Information</h6>
                  <Form className='billing_form'>
                      <FormGroup className='form_group'>
                          <Input type='text' placeholder='Enter your name' />
                      </FormGroup>

                      <FormGroup className='form_group'>
                          <Input type='email' placeholder='Enter your email' />
                      </FormGroup>

                      <FormGroup className='form_group'>
                          <Input type='number' placeholder='Phone number' />
                      </FormGroup>

                      <FormGroup className='form_group'>
                          <Input type='text' placeholder='Address' />
                      </FormGroup>

                      <FormGroup className='form_group'>
                          <Input type='text' placeholder='Post Code' />
                      </FormGroup>

                      <FormGroup className='form_group'>
                          <Input type='text' placeholder='Country' />
                      </FormGroup>
                  </Form>
              </Col>
              <Col lg='4'>
                  <div className="checkout_cart">
                      <h6>Total Qty: 
                          <span>{totalQty}</span>
                      </h6>
                      <h6>Subtotal: 
                          <span>${totalAmount}</span>
                      </h6>
                      <h6>
                          <span>
                              Shipping:<br/>
                              Free Shipping
                          </span>
                          <span>$0</span>
                      </h6>

                      <h4>Total Cost: 
                          <span>${totalAmount}</span>
                      </h4>

                      <Button className="auth_btn w-100 mt-5 p-2">
                          <Link to='/login'>Place an order</Link>
                      </Button>
                  </div>

              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>

  )
}

export default Checkout