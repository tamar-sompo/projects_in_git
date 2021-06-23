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

    <div className='mt-2 '
      // align-item-center'
      style={{ display: 'inline-block', marginTop: "1.5em", width: "80%" }}
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