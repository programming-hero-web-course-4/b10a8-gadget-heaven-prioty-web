import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility";



const GadgetDetail = () => {

    const { gadgetId } = useParams();
    const gadgets = useLoaderData()
    const [singleGadget , setSingleGadget]= useState([]);
    useEffect(()=>{
        const findSingleGadget = gadgets.find(gadget => gadget.id === parseInt(gadgetId))
        setSingleGadget(findSingleGadget)
    },[gadgetId, gadgets])
    const {name, price,availableStock,ratings,specifications,details, imageUrl, gadgetId:currentGadgetId} = singleGadget;


    // const {gadgetId: currentGadgetId, image} = gadgets;
    
    const handleAddToCart = (gadgetId) =>{
        addToStoredReadList(gadgetId)

    }
    console.log(gadgetId);

    return (
        <div>
            {/* banner */}
            <div className=" p-16 md:p-28 rounded-xl space-y-5 bg-purple-600 text-center items-center">
                <h2 className="text-3xl font-bold text-slate-100">Product Details </h2>
                <p className="text-sm text-gray-300 mb-14"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>


            {/* cart */}
            <div className="md:flex gap-7 rounded-xl shadow-lg bg-white w-4/6 mx-auto -mt-[50px] md:-mt-[100px] p-4 md:p-10">
               <div>
                <img className="w-[30vw] h-[20vw] object-cover rounded-xl" src={imageUrl} alt="" />

               </div>
               <div className="my-auto space-y-5">
                <h2 className="text-2xl font-semibold ">{name}</h2>
                <p className="text-lg font-medium text-gray-500">Price : {price}k</p>
                <button className=" badge-xs badge badge-outline p-2 bg-lime-200">In-stock: {availableStock} left </button>
                <p className="text-sm text-gray-400">{details}</p>

                <p>Specification : 
                    {/* <ul>
                        {
                        specifications && specifications.map(gadget => (<li key={gadgetId}>{gadget}</li>))
                        }
                    </ul> */}
                </p>

                <p className="text-lg font-medium">Ratings ⭐ <span className="bg-gray-200 p-2 rounded-xl"> {ratings} </span> </p>
                <div className="flex items-center md:gap-6">
                    <button onClick={()=>handleAddToCart(gadgetId)} className="btn bg-purple-500 text-white rounded-full ">Add to Cart 🛒</button>
                    <button className="btn rounded-full"><img src="/Frame (1).png" /></button>
                </div>

               </div>
            </div>
        </div>
    );
};

export default GadgetDetail;