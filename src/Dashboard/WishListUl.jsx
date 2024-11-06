import { TiDelete } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";


const WishListUl = ({wishlist,handdleRemove}) => {
    const {product_id,product_image,product_title,description,price} =wishlist;

    return (
        <li className='flex justify-between border rounded-3xl w-[70%] m-auto h-[150px] items-center p-5 gap-3'>
            <div className='flex items-center gap-3'>
                <div>
                    <div>< img className='h-[full] w-[100px]' src={product_image} alt="" /></div>
                </div>
                        <div className='flex flex-col'>
                            <h3 className='font-bold'>{product_title}</h3>
                            <p>{description}</p>
                            <p>price : ${price}</p>
                            <div><button className='btn text-[14px] rounded-3xl bg-fuchsia-700 border-fuchsia-700 '>Add to cart <IoCartOutline /></button></div>
                        </div>
            </div>
                <div>
                    <button onClick={()=>handdleRemove(product_id)}  className='text-3xl'><TiDelete /></button>
                </div>
        </li>
    );
};

export default WishListUl;