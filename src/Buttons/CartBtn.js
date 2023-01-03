import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const CartBtn = () => {
  // we get a state of  addItems
  const state = useSelector((state) => state.addItem)
  return (
    <>
    <Link to="/cart" className='btn btn-outline-dark ms-2'>
      <span className='fa fa-shopping-cart me-1'></span>Cart ({state.length})
    </Link>
    </>
  )
}

export default CartBtn;