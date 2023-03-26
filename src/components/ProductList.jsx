import React from 'react';
import {Row } from 'reactstrap';
import ProductCard from './ProductCard';
import '../styles/product-list.scss';

const Productslist = ({ data }) => {
  return (
    <section>
      <Row className='product-list'>
        {data?.map((item)=>(
            <ProductCard item={item}/>
        ))}
      </Row>
  </section>

  );
};

export default Productslist;