import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Product from '../Home/Product';
const Accessory = () => {
    const products =useLoaderData();
    const accessories = products.filter(product => product.category === "Accessory")
    return (
        <div>
            <Helmet><title>Accessory</title></Helmet>
            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            {
                         accessories.map((accessory,idx) => <Product key={idx} product={accessory}></Product>)
                    }
        </div>
        </div>
    );
};

export default Accessory;