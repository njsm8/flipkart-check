import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title, price, imageUrl}) {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =() => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

    }
    return (
        <div className="checkoutProduct">
            <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/R.d86a684d618c40a73abd6d44902e044d?rik=L4zK6j4gcmMmqw&riu=http%3a%2f%2fsalasardyechem.com%2fimg%2fnot-available.jpg&ehk=pSdtM3n3ViaJaO5wv7EhzBHa9xCtzcg%2fkmPzzyjbU%2f0%3d&risl=&pid=ImgRaw"} className="checkoutProduct-image" alt={title}/>
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">₹{price}</p>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
