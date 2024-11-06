import { toast } from 'react-toastify'
const getStoredCartList =()=>{
    const storedListStr = localStorage.getItem('Cart List')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return [];
    }
    
}
const addToCartList=(id)=>{
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        toast.error("Already add this Item to Cart");
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('Cart List', storedListStr)
        toast.success("Succesfully Added to Cart");
        
    }
}
const removeFromCart = (id) =>{
    const storedList = getStoredCartList();
    const updateList = storedList.filter(item => item !==id)
    const storedListStr = JSON.stringify(updateList)
    localStorage.setItem('Cart List', storedListStr)


}
const removeAllFormCart = ()=>{
    localStorage.setItem('Cart List', '')
}


const getWishList = ()=>{
    const storedListStr = localStorage.getItem('Wish List')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return[]
    }
}
const addToWishList =(id)=>{

    const storedList = getWishList();
    if(storedList.includes(id)){
        toast.error("Already add this Item to WishList");
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList)
        localStorage.setItem('Wish List' , storedListStr)
        toast.success("Succesfully Added to WishList");

    }
}
const removeFromWishList = (id) =>{
    const storedList = getWishList();
    const updateList = storedList.filter(item => item !== id)
    const storedListStr = JSON.stringify(updateList)
    localStorage.setItem('Wish List', storedListStr)


}

const updatCartLength =()=>{
    const storedListLength = getStoredCartList();
    return( storedListLength.length)
    
}
const updatWishLength =()=>{
    const storedListLength = getWishList();
    return( storedListLength.length)
}


export {addToCartList,getStoredCartList,removeFromCart,removeAllFormCart,addToWishList,getWishList,removeFromWishList,updatCartLength,updatWishLength}