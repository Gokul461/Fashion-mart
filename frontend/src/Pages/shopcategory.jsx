import React, { useContext } from 'react';
import '../Pages/css/shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../components/Assets/dropdown_icon.png'
import Item from '../components/items/item'

const Shopcategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='category'></img>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt='dropdown'></img>
        </div>
      </div>
      <div className='shopcategory-products'>
{all_products.map((item,i) => {
  if(props.category === item.category){
return <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price}/>
  }
  else{
    return null
  }
})}
      </div>
      <div className='loadmore'>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      </div>
    </div>
  )
}

export default Shopcategory;
