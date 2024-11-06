import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WishListUl from './WishListUl';
import { getWishList, removeFromWishList } from '../JS/DB';
import { Helmet } from 'react-helmet';

const Wishlist = () => {
    const products = useLoaderData();
    const [wishlists, setWishLists] = useState([])

    useEffect(()=>{
        const storedWishList = getWishList();
        const wishList = products.filter(product => storedWishList.includes(product.product_id) )
        setWishLists(wishList)
    },[products])

    const handdleRemove = (id) => {
        const removedWishList = wishlists.filter(wishlist => wishlist.product_id !== id);
        setWishLists(removedWishList);
        removeFromWishList(id)
    };
    return (
        <div className='px-[3vw]' >
            <Helmet><title>Error</title></Helmet>
            <Helmet><title>WishList</title></Helmet>
            <div>
                <div className='py-10'>
                    <p>WishList</p>
                </div>
                <ul className='flex flex-col gap-3'>
                    {
                        wishlists.map((wishlist,idx) => <WishListUl key={idx} wishlist={wishlist} handdleRemove={handdleRemove}></WishListUl>)
                    }
                </ul>
            </div>
            
        </div>
    );
};

export default Wishlist;