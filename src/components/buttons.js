import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';




    const mapStateToProps = (state) => {
        return {
          name_componenet:state.LogoReducer.logoDesign.currentComponent
              
            
          }
          }
function ButtonsUpdate(props) {

const f=props.flag;
const userName = useSelector(state => state.publicReducer.userName);

    return(
        <>
        <>
        <div className="d-flex justify-content-center">

          <h4 id="textButton" className="d-flex justify-content-left mt-2 text-light">
{
        (() => {
          switch(props.name_componenet) {
            case "INVOICE":
              return <Link to={{pathname: `/${userName}/invoice`}} style={{ color: '#FFF' }}>new invoice</Link>
              break;
              case "CUSTOMERS":
              return <Link to={{pathname: `/${userName}/newContact`}} style={{ color: '#FFF' }}>new customers</Link>
              break;
              case "PRODUCTS":
                return <Link to="/invoice" style={{ color: '#FFF' }}>new product</Link>
                break;
            default: return null; break;
          }
        }).call(this)
      }


          
          </h4>
        </div>

<div className="d-flex justify-content-center">
  <h4 id="textButton" className="d-flex justify-content-left mt-2 text-light">

  {
        (() => {
          switch(props.name_componenet) {
            case "INVOICE":
              return <Link to={{pathname: `/${userName}/allDocuments`}} style={{ color: '#FFF' }}>all invoices</Link> 
              break;
              case "CUSTOMERS":
                return <Link to="/:userName/customers" style={{ color: '#FFF' }}>all customers</Link> 
                case "PRODUCTS":
              return <Link to={{pathname: `/${userName}/allDocuments`}} style={{ color: '#FFF' }}>all products</Link> 
              break;
            default: return null; break;
          }
        }).call(this)
      }
     </h4></div>

</>


  </>
        )
}

export default connect(mapStateToProps)(ButtonsUpdate)