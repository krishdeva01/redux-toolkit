import React, { useReducer } from 'react'

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return state - action.payload
    case 'DEPOSIT':
      return state + action.payload
    default: return state
  }
}

const Product = () => {

  const withdraw = (amount) => {
    dispatch({type: 'WITHDRAW', payload: amount})
  };

  const deposit = (amount) => {
    dispatch({type: 'DEPOSIT', payload: amount})
  };

  const [state, dispatch] = useReducer(transactionReducer, 1000);
  return (
    <div>
{state}
<button  onClick={()=>{withdraw(500)}}>withdraw</button>
<button onClick={() =>{deposit(500)}} >deposit</button>
    </div>
  )
}

export default Product
