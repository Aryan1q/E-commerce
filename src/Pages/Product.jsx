import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import {ProductDisplay} from '../Components/ProductDisplay/ProductDisplay'
import {DescriptionBox} from '../Components/DescriptionBox/DescriptionBox'
import {RelatedProducts} from '../Components/RelatedProducts/RelatedProducts'
export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // If data not yet loaded
  if (!all_product || all_product.length === 0) {
    return <div>Loading product...</div>;
  }

  // Find product after data is available
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      {/* Your product details here */}
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};
