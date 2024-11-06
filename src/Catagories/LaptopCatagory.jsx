import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Product from '../Home/Product';
const LaptopCatagory = () => {
    const products =useLoaderData();
    const laptops = products.filter(product => product.category === "Laptop")
    return (
        <div>
            <Helmet><title>LaptopCatagory</title></Helmet>
            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            {
                         laptops.map((laptop,idx) => <Product key={idx} product={laptop}></Product>)
                    }
        </div>
        </div>
    );
};

export default LaptopCatagory;