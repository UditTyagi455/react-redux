import React from 'react';
import "./Home.css"


const Home = (props) => {
   
  return (
     <div className='main_cls container-fluid'>
        <div className='row m-5'>
           <div className='col col-md-6'>
             <div className='container01'>
                <img src='https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg' height="300px" width="300px" alt="mobile_img"/>
                <div className='d-flex flex-column'>
                <h4>Name : <span className='text-danger'>Iphone12</span></h4>
                <h4>Price : <span className='text-danger'>$250</span></h4>
                </div>
                <button className='btn btn-danger m-5' onClick={() => {props.addToCartHandler({price: 1000000,name: "I-phone 12"})}}>Add to cart</button>
                <button className='btn btn-danger m-5' onClick={() => {props.removeToCartHandler()}}>Remove to cart</button>
             </div>
           </div>
        </div>
     </div>
  )
}

export default Home