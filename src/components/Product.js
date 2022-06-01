import './Product.css'
import{Link} from 'react-router-dom';
function Product({name, productId, description, price, countInStock, imageUrl, productType}) {
  return (
    <div className='product'>
        <img src={imageUrl} alt ={name}/>
        <div className='product__info'>
            <p className='product__name'>{name}</p>
            <p className='product__description'>{description.substring(0, 100)}...</p>
            <p className='product__price'>EGP {price}</p>
            <Link to={`/product/${productId}`} className="product__button">view more</Link>
        </div>

    </div>
  )
}

export default Product;
//egp
/*

,
*/