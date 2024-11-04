/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Gadget = ({gadget}) => {
    const {id, name,price,imageUrl} = gadget
    return (
        <div className="space-y-4 border p-8 rounded-xl m-2">
            <img className="w-[28vw] h-[19vw] object-cover rounded-xl" src={imageUrl} />
            <h3 className="md:text-xl font-bold">{name}</h3>
            <p className="text-lg  text-gray-600">Price:{price}k</p>
            
            <Link className="btn btn-outline btn-primary rounded-full" to={`/gadget/${id}`}>View Details </Link>
        </div>
    );
};

export default Gadget;