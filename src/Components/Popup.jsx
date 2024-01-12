import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber } from '../APIcall/Action/Index';

const Popup = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to order this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been sucessfull.",
          icon: "success"
        });
      }
    });
  }
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

 
  return (
    <div className='button'> 
    <ul>
      <li>
      <button  className="btn1" onClick={() => handleClick()}>Buy Now</button>     
      </li>
      <li>
      <button  className="btn2"  onClick={() => dispatch(incNumber())}>Add to cart</button>
      </li>
    </ul>    
    </div>
  )
}

export default Popup;