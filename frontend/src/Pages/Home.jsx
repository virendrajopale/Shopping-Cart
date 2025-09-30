import React, { useState } from 'react'
import { ShoppingCartState } from '../Context/Context'

import Card from '../Components/Card'

const Home = () => {
   const {state:{products,cart}, dispatch}= ShoppingCartState()
//    console.log(products.slice(0,10));
// const [products,setProducts]=useState([])
const [page,setPage]=useState(1)

  return (
   <div>
   <div className='py-9'>
   
  {
   products?.length>0 && (<div>

       <div className=' m-5 p-0 list-none grid grid-cols-3 gap-4'>
           {
               products?.slice(page*12-12,page*12).map((prod)=>{
               return (
                  <div key={prod.id}>
                   <Card  prod={prod} cart={cart} dispatch={dispatch}/>
                 </div> 
               )
           })
           }
       </div>
   </div>
   )
  }
  </div>
 
  </div>
 )
}

export default Home