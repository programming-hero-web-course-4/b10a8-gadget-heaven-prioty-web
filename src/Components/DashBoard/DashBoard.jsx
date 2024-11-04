
import {useEffect, useState} from 'react';
import GadgetDetail from '../GadgetDetail/GadgetDetail';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../utility';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Gadget from '../Gadgets/Gadget';

const DashBoard = () => {
    const allGadget = useLoaderData();
    const [addToCart, setAddToCart] = useState([]);

    useEffect(()=>{
        const storedGadgetList = getStoredReadList();
        const storedGadgetListInt =  storedGadgetList.map(gadgetId => parseInt(gadgetId));
        const readGadgetList = allGadget.filter(gadget => storedGadgetListInt.includes(gadget.gadgetId))
    

        setAddToCart(readGadgetList);
    }, [] )
    

    
    return (
        <div>
            <div>
                {/* banner */}
            <div className=" p-16 md:p-28 rounded-xl space-y-5 bg-purple-600 text-center items-center">
                <h2 className="text-3xl font-bold text-slate-100">Dashboard </h2>
                <p className="text-sm text-gray-300 mb-14"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            {/* cart */}
            <Tabs>
    <TabList>
      <Tab>ADD to Cart</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>ADD to Cart{addToCart.length}</h2>
    {
        addToCart.map( gadget=><Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)
    }
    </TabPanel>
    <TabPanel>
      <h2>Wishlist</h2>
    </TabPanel>
  </Tabs>

            
            
             </div>
           
        </div>
    );
};

export default DashBoard;