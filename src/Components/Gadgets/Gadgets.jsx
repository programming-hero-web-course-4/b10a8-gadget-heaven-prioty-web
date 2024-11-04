import { useEffect, useState } from "react";
import Gadget from "./Gadget";


const Gadgets = () => {
    const [gadgets, setGadgets]= useState([]);
    useEffect(()=>{
        fetch('/fakeGadget.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl my-14 font-bold text-center">Explore Cutting-Edge Gadgets</h1>

            <div className="grid md:grid-cols-3">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;