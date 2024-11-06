import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;
    return (
        <div className='flex flex-col gap-3 border rounded-2xl p-3' >
            <div ><img className='border rounded-2xl w-full md:h-[20vw] p-10'  src={product_image} alt="" /></div>
            <h1 className='text-[24px] font-bold'>{product_title}</h1>
            <p className='text-[20px]'>Price: ${price}</p>
            <NavLink to={`/home/${product_id}`}><button className='btn text-[18px] rounded-3xl bg-transparent border-fuchsia-700 '>View Details</button></NavLink>
        </div>
    );
};

export default Product;