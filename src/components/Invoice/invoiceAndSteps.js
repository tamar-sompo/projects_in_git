import React, { useEffect, useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import Steps from './steps.js';
// import Conversion from './conversion.js'
import ProductForm from '../forms/productForm.js';
// import ContactForm from '../forms/cotactForm'
import ButtonPlus from '../forms/buttonPlus'
// import Invoice from './invoice'
import New_Invoice from './new_invoices/new_invoice'

// import productForm from '../forms/productForm'


export default function InvoiceAndSteps(props) {
  const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
  const [isLevel4, setIsLevel4] = useState(false)
  return (

    <div className='container-fluid con con2 d-flex justify-content-center '
      // align-item-center'
      style={{
        height: "88vh",
        width: "98%", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126",
 
      }}
    //marginLeft:"81px",
    >
      {/* <Steps setIsLevel4={setIsLevel4} /> */}
      {/* {viewConversion === 'false' && */}
      <New_Invoice />
      {/* <Invoice></Invoice> */}
      {/* } */}
      {/* {viewConversion === 'true' && */}
      {/* <Conversion /> */}
      {/* } */}
    </div>
  )
}