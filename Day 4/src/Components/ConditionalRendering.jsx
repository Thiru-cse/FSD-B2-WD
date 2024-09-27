import React from 'react';
import Card from './Card';

const ConditionalRendering = ({product, setProduct, cartCount, setCardCount}) => {
    return (
        <div>
            <h1>Conditional Rendering Component</h1>
            {product.map((item, index)=>{
                return(
                    <>
                    <Card item={item} setProduct={setProduct} setCardCount={setCardCount}/>
                    </>
                )
            })}
        </div>
    );
};

export default ConditionalRendering;