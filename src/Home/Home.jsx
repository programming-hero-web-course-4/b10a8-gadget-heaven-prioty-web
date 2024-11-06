import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Home = () => {
    
    return (
        
        <div>
            <Helmet><title>Home</title></Helmet>
            <div className="bg-[#9538E2] md:w-[97%] m-auto p-5 ">
                <div className="flex flex-col items-center gap-5 lg:w-[50%] m-auto text-center">
                        <h1 className="md:text-4xl font-bold text-white ">
                            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h1>
                        <h3 className="md:text-2xl text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </h3>
                        <div className="pb-14 md:pb-48 2xl:pb-60">
                            <button className="btn rounded-full ">Shop Now</button>
                        </div>
                </div>
                <div className="w-[80vw] md:w-[60vw] 2xl:w-[50vw]  m-auto absolute left-[10%] md:left-[20%] 2xl:left-[25%] top-[380px] md:top-[400px] lg:top-[500px] xl:top-[400px] 2xl:top-[370px]">
                    <img className="border rounded-3xl border-transparent" src="/assets/banner.jpg" alt="" />
                </div>
            </div>
            <div className="mt-[150px] md:mt-[220px] lg:mt-[300px] xl:mt-[400px]  2xl:mt-[450px] mb-20 ">
                <h1 className="text-slate-950 text-2xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="md:flex m-auto">
                <div className=" flex flex-col gap-3 md:w-[10vw] max-sm:grid grid-cols-2 m-3">
                    <NavLink to={'/'}><button className="btn w-full">All product</button></NavLink>
                    <NavLink to={'/shortbyprice'}><button className="btn w-full">Short by Price</button></NavLink>
                    <NavLink to={'/laptop'}><button className="btn w-full">Laptop</button></NavLink>
                    <NavLink to={'/smartphone'}><button className="btn w-full">Smartphone</button></NavLink>
                    <NavLink to={'/accessories'}><button className="btn w-full">Accessory</button></NavLink>
                    <NavLink to={'/smartwatch'}><button className="btn w-full">Smartwatch</button></NavLink>
                    <NavLink to={'/monitor'}><button className="btn w-full">Monitor</button></NavLink>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Home;