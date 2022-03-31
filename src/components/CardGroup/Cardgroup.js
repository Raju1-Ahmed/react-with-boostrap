import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Cards from '../Card/Cards';

const Cardgroup = () => {
    const products=[
        {id:1, name:'laptop', price:'321'},
        {id:2, name:'Mobile', price:'764'},
        {id:3, name:'watch', price:'941'},
        {id:4, name:'Tablet', price:'98120'}
    ]
    return (
        <div>

            <CardGroup>
            {
                products.map(product => <Cards
                key={product.id}
                product={product}
                ></Cards>)
            }
            </CardGroup>
        </div>
    );
};

export default Cardgroup;