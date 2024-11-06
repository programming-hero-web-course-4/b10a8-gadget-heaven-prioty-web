import { TiDelete } from "react-icons/ti";

const ChartList = ({chart,handdleRemove}) => {
    const {product_id,product_image,product_title,description,price} =chart;
    return (
        <li className='flex justify-between border rounded-3xl w-[70%] m-auto h-[100px] items-center p-5 gap-3'>
            <div className='flex gap-5'>
                <div>
                    <div>< img className='h-full w-[100px]' src={product_image} alt="" /></div>
                </div>
                <div>
                    <h3 className='font-bold'>{product_title}</h3>
                    <p>{description}</p>
                    <p className=' font-bold'>price : ${price}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handdleRemove(product_id)} className='text-3xl'><TiDelete /></button>
            </div>
        </li>
    );
};

export default ChartList;