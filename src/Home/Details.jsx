import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { addToCartList,addToWishList, updatCartLength } from '../JS/DB';
import { Helmet } from 'react-helmet';

const Details = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate()
    const handdleAddBtn =(id)=>{
        addToCartList(id);
        updatCartLength();
        navigate (`/home/${product_id}`)
      }
    const handdleWishListBtn =(id)=>{
        addToWishList(id)
        setIsDisabled(true);
      }
    const details = useLoaderData();
    const{product_id, product_title, product_image, price, description, specification, availability, rating } = details;
    return (
        <div className='md:mb-[300px] xl:mb-[400px] '> 
        <Helmet><title>Accessory</title></Helmet>
            <div className="bg-[#9538E2] md:w-[97%] m-auto p-5  static">
                <div className="flex flex-col items-center gap-5 w-[50%] m-auto text-center md:mb-[150px]">
                        <h1 className="text-4xl font-bold text-white ">
                        Product Details
                        </h1>
                        <h3 className="md:text-2xl text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </h3>
                </div>
                <div className="md:w-[80vw] md:absolute top-80 md:top-[350px] lg:top-[300px] xl:top-[270px] left-[10vw] md:flex gap-3 bg-white p-5 border rounded-2xl 2xl:w-[50vw] 2xl:left-[25vw]">
                    <div >
                        <img className='border rounded-2xl w-[30vw] 2xl:w-[15vw] '  src={product_image} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[28px] font-bold'>{product_title}</h2>
                        <p className='text-[20px]'>{price}</p>
                        <button className='btn text-[12px] rounded-3xl bg-transparent border-fuchsia-700 '>{availability? "In Stock" : "Out of Stock"}</button>
                        <p className='text-[18px] '>{description}</p>
                        <h3 className='text-[18px] font-bold'>Specification:</h3>
                        <ul className='text-[18px] '>
                            {
                                specification.map((spec,idx) => <li key={idx}>{spec}</li>)
                            }
                        </ul>
                        <h3 className='text-[18px] '>Rating: {rating}</h3>
                        <div className='flex items-center active gap-6'> 
                            <button onClick={()=>handdleAddBtn(product_id)} className='btn text-[14px] rounded-3xl bg-fuchsia-500 border-fuchsia-200 '>Add To Card <IoCartOutline /></button>
                            <button onClick={()=>handdleWishListBtn(product_id)}  className={`btn rounded-3xl text-[30px] ${isDisabled ? 'cursor-not-allowed' : ''}`} style={{ color: isDisabled ? '#b91c1c' : '#4b5563' }} disabled={isDisabled}><MdFavorite /></button>
                            
                        </div>
                    </div>
                </div>
            </div>




            
                
        </div>
    );
};

export default Details;