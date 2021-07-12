import { ListItemAvatar } from '@material-ui/core';
import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
            <h2>My Cart Items</h2>

            {basket.map(item =>(
                <CheckoutProduct id={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
            ))}
            </div>
            <div className="checkout-right">
                <Subtotal />
                
            </div>
            
        </div>
    )
}

export default Checkout
