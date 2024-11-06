import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCartList, updatCartLength } from '../JS/DB';
import ChartList from './ChartList';
import { removeFromCart, removeAllFormCart } from '../JS/DB';
import { Helmet } from 'react-helmet';

const Chart = () => {
    const products = useLoaderData();
    const [charts, setCharts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0); 
    const navigate = useNavigate();
    const [isClicked ,setIsClicked] = useState(false)

    useEffect(()=>{
        const storedCartList = getStoredCartList();
        const chartList = products.filter(product => storedCartList.includes(product.product_id) )
        setCharts(chartList);
    },[products])

    useEffect(()=>{
        const priceArray= charts.map(item=> item.price);
        const total = priceArray.reduce((sum, price) => sum + price, 0);
        setTotalPrice(total)
    },[charts])

    const handdleRemove = (id) => {
        const removedCharts = charts.filter(chart => chart.product_id !== id);
        setCharts(removedCharts);
        removeFromCart(id);
        updatCartLength()
        navigate (`/dashboard`)
    };
    const handdlePurcase = ()=>{
        removeAllFormCart();
        setIsClicked(true);
        setCharts([]);
        updatCartLength();
        navigate (`/dashboard`)
    }
    const handdlePriceShort =()=>{
            const sorted = [...charts].sort((a, b) => b.price - a.price);
            setCharts(sorted);
    }
    const handleModal = () => {
        navigate('/');
        setIsClicked(false);
        
    };
    return (
        <div className='px-[3vw]' >
            <Helmet><title>Chart</title></Helmet>
            <div className='flex justify-between items-center py-10'>
                <p>Cart</p>
                <div className='flex gap-3 items-center'>
                    <p className=' font-bold'>Total Cost:{totalPrice}</p>
                    <button className='btn focus:bg-purple-800' onClick={()=>handdlePriceShort()}>Short by Price</button>
                    <button className='btn focus:bg-purple-800' disabled={totalPrice === 0} onClick={()=>handdlePurcase() }>Purcase</button>
                </div>
            </div>


            <section id="popup" className={` w-[50vw] lg:w-[20vw] p-10 rounded-lg fixed bottom-[30vw] left-[25vw]  lg:bottom-[15vw] md:left-[30vw] lg:left-[40vw] bg-white/90 ${isClicked ? 'show':'hidden'}  }`}>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[20px] text-black py-2">
                    Congrates!
                </h1>
                <div className="flex justify-center">
                    <img src="/assets/Group.png" alt="" />
                </div>
                <p className="text-black">You Have Donate For Humankind</p>
                <h2 className="text-black font-bold py-2">Successfully</h2>
                <div className="pt-5">
                    <button onClick={handleModal} id="popdown" className="btn btn-sm bg-purple-800 text-white">Close Confirmation</button>
                </div>
            </div>
          </section>



            <div>
                <ul className='flex flex-col gap-3'>
                    {
                        charts.map((chart,idx) => <ChartList key={idx} chart={chart} handdleRemove={handdleRemove}></ChartList>)
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default Chart;