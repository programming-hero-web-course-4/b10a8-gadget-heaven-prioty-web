import { Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const navigate =useNavigate();
    const handdleChart =()=>{
        navigate("/dashboard")
    }
    const handdleWishlist = ()=>{
        navigate("/dashboard/wishlist")
    }
    return (
        <div>
            <Helmet><title>Dashboard</title></Helmet>
            <div className='md:mb-[40px]'> 
            <div className="bg-[#9538E2] md:w-[97%] m-auto p-5  static">
                <div className="flex flex-col items-center gap-5 w-[50%] m-auto text-center md:mb-[150px]">
                        <h1 className="text-4xl font-bold text-white ">
                        Dashboard
                        </h1>
                        <h3 className="md:text-2xl text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </h3>
                        <div className='flex gap-5'>
                        <button onClick={handdleChart} className="btn rounded-full px-10">Cart</button>
                        <button onClick={handdleWishlist} 
                        className="btn rounded-full px-10">Wishlist</button>
                        </div>
                    </div>
                
                </div>

                <Outlet></Outlet>               
            </div>
        </div>
    );
};

export default Dashboard;