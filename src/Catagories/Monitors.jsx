import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Product from '../Home/Product';
const Monitors = () => {
    const products =useLoaderData();
    const Monitors = products.filter(product => product.category === "Monitor")
    return (
        <div>
            <Helmet><title>Monitors</title></Helmet>
            <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80vw]'>
            {
                         Monitors.map((Monitor,idx) => <Product key={idx} product={Monitor}></Product>)
                    }
        </div>
        </div>
    );
};

export default Monitors;