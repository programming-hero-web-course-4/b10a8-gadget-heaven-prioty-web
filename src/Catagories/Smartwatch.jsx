import { useLoaderData } from 'react-router-dom';
import Product from '../Home/Product';
import { Helmet } from 'react-helmet';
const Smartwatch = () => {
    const products =useLoaderData();
    const smartwatches = products.filter(product => product.category === "Smartwatch")
    return (
        <div>
            <Helmet><title>Smartwatch</title></Helmet>
            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            {
                         smartwatches.map((smartwatch,idx) => <Product key={idx} product={smartwatch}></Product>)
                    }
        </div>
        </div>
    );
};

export default Smartwatch;