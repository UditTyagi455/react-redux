import React from 'react'
import {connect} from "react-redux"
import Header from '../component/Header'


 const mapDispatchToProps = dispatch => ({
    
 })

 const mapStateToProps = state => ({
   cardData: state.CardItems
 })



export default connect(mapStateToProps,mapDispatchToProps)(Header);