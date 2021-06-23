import React from 'react'
import './links.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import {  useSelector } from 'react-redux';



 function Links(props){

  const userName = useSelector(state => state.publicReducer.userName);


  return(
    <div className="wraplinks d-flex flex-column ">
    <div className="dl d-flex align-items-center justify-content-start"> <Link class="nav-link s" to={{pathname: `/${userName}/buisness`}}>Buisness</Link></div>
    <div className="dl d-flex align-items-center justify-content-start"><Link class="nav-link s"  to={{pathname: `/${userName}/allDocuments`}}>Documents</Link> </div>
    <div className="dl d-flex align-items-center justify-content-start"><Link class="nav-link s" to={{pathname: `/${userName}/product`}} onClick={props.getproduct} >Products</Link></div>
    <div className="dl d-flex align-items-center justify-content-start"> <a class="nav-link s" href="#">Payment</a></div>
    <div className="dl d-flex align-items-center justify-content-start">  <Link class="nav-link s" to="/invoice" style={{ color: '#000000' }}>Bit</Link></div>
    <div className="dl d-flex align-items-center justify-content-start">  <Link class="nav-link s" to={{pathname: `/${userName}/customers`}} style={{ color: '#000000' }}>Contacts</Link></div>
    <div className="dl d-flex align-items-center justify-content-start"> <a class="nav-link s" href="#">Signatures</a></div>
    <div className="dl d-flex align-items-center justify-content-start"> <a class="nav-link s" href="#">Atoms</a></div>
    <div className="dl d-flex align-items-center justify-content-start"> <a class="nav-link s" href="#">Design</a></div>
   </div>
  )
}
const mapStateToProps=(state)=>{

}
const mapDispatchToProps=(dispatch)=>{
  return{ 
     getproduct:()=>dispatch({type:"GET_ALL_PRODUCT"})}

}

export default connect(mapStateToProps,mapDispatchToProps )(Links)