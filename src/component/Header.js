import React from 'react'
import {BsFillCartCheckFill} from "react-icons/bs";
import "./Home.css";

const Header = (props) => {
  return (
    <div className='cart-icon'>
    {props.cardData.length ? <span className='num'>{props.cardData.length}</span> : ""}
     <BsFillCartCheckFill/>
  </div>
  )
}

export default Header;