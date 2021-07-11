import React from 'react'

const Products = ({title, price}) => {
    <div className="product">
        {/* <img src={
            products.imageUrl ? products.imageUrl :"https://th.bing.com/th/id/R.d86a684d618c40a73abd6d44902e044d?rik=L4zK6j4gcmMmqw&riu=http%3a%2f%2fsalasardyechem.com%2fimg%2fnot-available.jpg&ehk=pSdtM3n3ViaJaO5wv7EhzBHa9xCtzcg%2fkmPzzyjbU%2f0%3d&risl=&pid=ImgRaw"
        } alt={products.slug} /> */}

        <div className="product-info">
            <h3>{title}</h3>
            <span className="price">{price}</span>
        </div>
    </div>
}

export default Products

