import Product from '../Home/Product';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AllCatagory = () => {
    const products = useLoaderData();
    return (
        <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            <Helmet><title>AllCatagory</title></Helmet>
            {
                        products.map((product,idx) => <Product key={idx} product={product}></Product>)
                    }
        </div>
    );
};

export default AllCatagory;