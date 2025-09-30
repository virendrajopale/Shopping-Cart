import React from 'react'
import { ShoppingCartState } from '../Context/Context'


const Cart = () => {
    const {state:{cart},dispatch}=ShoppingCartState()
    const subtotal = cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0)
  return (
    <div className='py-9 flex flex-col gap-5'>
    <div className='text-2xl text-center'>Sub Total &#x20B9;{subtotal} </div>
    {cart?.map((prod)=>{
        return <span key={prod.id} className='flex h-36 border-2 p-5 items-center justify-between'>
            <img src={prod.thumbnail}
                alt={prod.title}
                className=' h-full w-48 object-contain'
            />
            <div className='flex flex-col'>
                <span>{prod.title}</span>
                <span>&#x20B9;{prod.price}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <button onClick={()=> {  dispatch({type:'CHANGE-CART-QTY',payload:{ id: prod.id, qty: (prod.qty || 1) + 1 }})}}>+</button>
            {prod.qty}
                <button onClick={()=> {  dispatch({type:'CHANGE-CART-QTY',payload:{ id: prod.id, qty: Math.max(1, (prod.qty || 1) - 1) }})}}>-</button>
                

            </div>
            <button className=' border-2 rounded-full p-3' onClick={()=>{ dispatch({type:"REMOVE-FROM-CART",payload:prod})}}>REMOVE </button>
        </span>
    })}
    <div className='flex justify-end px-5'>
        <button
            className=' bg-yellow-700 text-white px-4 py-2 rounded-lg disabled:opacity-50'
            disabled={!cart.length}
            onClick={async ()=>{
                const payload = { items: cart.map(({id, qty})=>({id, qty})) }
                const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:3001'
                try {
                    const res = await fetch(`${apiBase}/api/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
                    if (!res.ok) throw new Error('Request failed')
                    alert('Order placed successfully!')
                } catch (e) {
                    console.log('Checkout error (or backend not running). Payload:', payload)
                    alert('Checkout failed or backend not running. See console.')
                }
            }}
        >
            Checkout (&#x20B9;{subtotal})
        </button>
    </div>
    </div>
  )
}

export default Cart