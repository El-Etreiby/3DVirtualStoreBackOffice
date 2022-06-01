import './ProductScreen.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {useSelector, useDispatch} from "react-redux";

//actions
import { getProductDetails } from '../redux/actions/productActions.js';
import {addToCart} from '../redux/actions/cartActions.js'


const ProductScreen = ({ history}) => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch,id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return(
    <div className="productscreen">
      {loading  ? ( 
      <h2>Loading . . .</h2>
      ): error ? (
      <h2>{error}</h2>
      ):(
      <>
        
        <div className="productscreen__left">
            <div className="left__image">
              <img  src={product.imageUrl}  alt={product.name}/>
            </div>
            <div className="left__info">
              <p className="left__name"> {product.name}</p>
              <p>Price: EGP {product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Total Price:
                <span>{product.price * qty}</span>
              </p>
              <p>
                Status:
                <span>
                {product.countInStock >0 ? "In Stock": "Out Of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler} >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
      
      </>
      )}

    </div>
  );
};

export default ProductScreen;