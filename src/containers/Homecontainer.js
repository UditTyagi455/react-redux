import React from 'react'
import {connect} from "react-redux"
import Home from '../component/Home'
import { AddToCart, RemoveToCart } from '../services/Actions/action'

 const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(AddToCart(data)),
    removeToCartHandler:data => dispatch(RemoveToCart(data))
 })

 const mapStateToProps = state => ({
   cardData: state.CardItems
 })



export default connect(mapStateToProps,mapDispatchToProps)(Home);