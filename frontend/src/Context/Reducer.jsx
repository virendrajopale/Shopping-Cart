export const ShoppingCartReducer=(state,action)=>{
    switch (action.type) {
        case "FETCH-PRODUCTS":
            return {
                ...state,
                products:action.payload
            }
          case "ADD-TO-CART":
            return {
                ...state,
                cart:[...state.cart,{...action.payload,qty:1}]
            }
          case "REMOVE-FROM-CART":
            return {
                ...state,
                cart:state.cart.filter((prd)=>prd.id!==action.payload.id)
            }
            case "CHANGE-CART-QTY":
            return {
                ...state,
                cart: state.cart.map((prd)=>{
                    if (prd.id === action.payload.id) {
                        const updatedQty = Math.max(1, action.payload.qty);
                        return { ...prd, qty: updatedQty };
                    }
                    return prd;
                })
            }
           
    
        default:
          return {...state}
    }
}

