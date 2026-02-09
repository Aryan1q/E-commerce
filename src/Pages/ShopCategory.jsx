import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      {/* Banner */}
      <img className="shopcategory-banner" src={props.banner} alt="Banner"/>

      {/* Content container sits on top of banner */}
      <div className="shopcat-container">
        {/* Index / Sort Section */}
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown_icon} alt="Dropdown Icon" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null;
          })}
        </div>

        {/* Load More Button */}
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </div>
  );
};
