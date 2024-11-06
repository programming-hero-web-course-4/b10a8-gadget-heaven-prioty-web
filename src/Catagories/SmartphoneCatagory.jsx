import { useLoaderData } from 'react-router-dom';
import Product from '../Home/Product';
import { Helmet } from 'react-helmet';
const SmartphoneCatagory = () => {
    const products =useLoaderData();
    const smartphones = products.filter(product => product.category === "Smartphone")
    return (
        <div>
            <Helmet><title>SmartphoneCatagory</title></Helmet>
            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            {
                         smartphones.map((smartphone,idx) => <Product key={idx} product={smartphone}></Product>)
                    }
        </div>
        </div>
    );
};

export default SmartphoneCatagory;