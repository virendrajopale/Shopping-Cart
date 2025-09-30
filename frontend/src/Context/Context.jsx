import { createContext, useContext, useEffect, useReducer } from "react";
import { ShoppingCartReducer } from "./Reducer";

const ShoppingCart=createContext();
export const Context=({children})=>{

    const [state,dispatch]=useReducer(ShoppingCartReducer,{
        products:[],
        cart: JSON.parse(localStorage.getItem('cart') || '[]')
    })
    const fetchProducts=async()=>{
       const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:3001'
       const res=await fetch(`${apiBase}/api/products`)
       const data=await res.json();
       if(data && data.products){
         dispatch({
            type:"FETCH-PRODUCTS",
            payload:data.products
         })
       }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },[state.cart])

    return <ShoppingCart.Provider value={{state,dispatch}}>{children}</ShoppingCart.Provider>
}

export const ShoppingCartState=()=>{
     return useContext(ShoppingCart)
}