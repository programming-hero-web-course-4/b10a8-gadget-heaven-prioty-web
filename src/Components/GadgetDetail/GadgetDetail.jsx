import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const GadgetDetail = () => {

    const { gadgetId } = useParams();
    const gadgets = useLoaderData()
    const [singleGadget , setSingleGadget]= useState([]);
    useEffect(()=>{
        const findSingleGadget = gadgets.find(gadget => gadget.id === parseInt(gadgetId))
        setSingleGadget(findSingleGadget)
    },[gadgetId, gadgets])
    const {name, price,availableStock,ratings,specifications,details, imageUrl} = singleGadget

    return (
        <div>
            {/* banner */}
            <div className="p-28 rounded-xl space-y-5 bg-purple-600 text-center items-center">
                <h2 className="text-3xl font-bold text-slate-100">Product Details </h2>
                <p className="text-sm text-gray-300"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>


            {/* cart */}
            <div className="flex">
               <div>
                <img className="w-[38vw] h-[29vw] object-cover rounded-xl" src={imageUrl} alt="" />

               </div>
               <div>
                <h2>{name}</h2>
                <p>Price : {price}</p>
                <button className=" badge-xs badge badge-outline">In-stock: {availableStock} left </button>
                <p>{details}</p>

                <p>Specification : 
                    {/* <ul>
                        {
                        specifications && specifications.map(gadget => (<li key={gadgetId}>{gadget}</li>))
                        }
                    </ul> */}
                </p>

                <p>Ratings ⭐ <span className="bg-gray-200 p-1 rounded-l"> {ratings} </span> </p>

               </div>
            </div>
        </div>
    );
};

export default GadgetDetail;