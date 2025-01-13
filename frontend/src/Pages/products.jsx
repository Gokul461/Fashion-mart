import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../components/breadcrum/Breadcrum';
import { useParams } from 'react-router-dom';
import Productdisplay from '../components/productdisplay/Productdisplay';
const Products = () => {
const {all_products} = useContext(ShopContext);
const {productID} = useParams();
const product = all_products.find((e) => e.id === Number(productID)) 
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product = {product}/>
    </div>
  )
}

export default Products;
