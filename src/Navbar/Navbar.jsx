
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { updatCartLength, updatWishLength } from '../JS/DB';



const Navbar = () => {
    const cartL = updatCartLength();
    const WishL = updatWishLength();
    const location = useLocation();
    const navbarBgClass = location.pathname === '/' 
        ? 'bg-[#9538E2]'
        :'bg-white'
    return (
        <nav className={`p-4 ${navbarBgClass} md:w-[97%] m-auto mt-5 border-t rounded-t-2xl`}>
            <div>
            <div className=" max-sm:text-xs flex justify-between">
            <div>
                        <h6 className='font-bold'>Gadget Heaven</h6>
                    </div>
                    <div className="flex gap-1 sm:gap-3 items-center">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/statistic"}>Statistic</NavLink>
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                        <NavLink to={"/about"}>Feedback</NavLink>
                    </div>
                    <div className='flex  sm:gap-3 items-center'>
                        <div className="md:space-x-5">
                            <div className="indicator">
                                <IoCartOutline/>
                                <span className="badge badge-sm indicator-item">{cartL}</span>
                            </div>
                            <div className="indicator">
                                 <MdFavoriteBorder />
                                <span className="badge badge-sm indicator-item">{WishL}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </nav>
    );
};

export default Navbar;