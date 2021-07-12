import React from 'react';
import './Products.css';
import { useStateValue } from './StateProvider';

const Products = ({id,title, price, imageUrl, slug}) => {
    const [ {basket},dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title : title,
                price :price,
                imageUrl :imageUrl
            }
        })
    }
    return(
    <div className="product">
        <img src={
            imageUrl ? imageUrl :"https://th.bing.com/th/id/R.d86a684d618c40a73abd6d44902e044d?rik=L4zK6j4gcmMmqw&riu=http%3a%2f%2fsalasardyechem.com%2fimg%2fnot-available.jpg&ehk=pSdtM3n3ViaJaO5wv7EhzBHa9xCtzcg%2fkmPzzyjbU%2f0%3d&risl=&pid=ImgRaw"
        } alt={slug} />

        <div className="product-info">
            <h3>{title}</h3>
            <span className="price">₹{price}</span>
        </div>
        <button onClick={addToBasket} className="product-button">Add to Cart</button>
    </div>
    );
}

export default Products;

