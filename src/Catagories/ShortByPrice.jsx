import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Home/Product';
import { Helmet } from 'react-helmet';
const ShortByPrice = () => {
    const products = useLoaderData();
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setPrices(sorted);
}, [products]);

    return (
        <div>
            <Helmet><title>ShortByPrice</title></Helmet>
            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            {
                         prices.map((price,idx) => <Product key={idx} product={price}></Product>)
                    }
        </div>
        </div>
    );
};

export default ShortByPrice;