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
import { useHistory } from 'react-router-dom';
// import productForm from '../forms/productForm'


export default function InvoiceAndSteps(props) {
  let history = useHistory();
  const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
  const [isLevel4, setIsLevel4] = useState(false)
  const userName = useSelector(state => state.publicReducer.userName);
  const backtoAllInvoices = () => {
    history.push(`/${userName}/allDocuments`)
  }
  return (
    <>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-2 d-flex flex-row">
            {/* <div style={{ display: "inline" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg></div> */}
            <div style={{ display: "inline", color: "black", backgroundColor: "transparent", paddingTop: "10%", fontWeight: "bold", fontSize: "medium", paddingLeft: "20%" }}>
              <button onClick={backtoAllInvoices} style={{ color: "black", backgroundColor: "transparent", paddingTop: "10%", fontWeight: "bold", fontSize: "medium", paddingLeft: "20%" }}>back</button>
            </div></div>
          <div className="col-8 gggff" style={{
            // height: "100%",
            // width: "86%"

          }}>
            <div className='container-fluid con con2 d-flex justify-content-center '
              style={{
                // display: "inline"
                height: "100%",
                // width: "86%"

              }}
            >
              <New_Invoice />
            </div></div>
          <div className="col-2"></div></div>
      </div>
    </>
  )
}