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
import { actions } from '../../redux/actions/All_actions';
import { useHistory } from 'react-router-dom';
// import productForm from '../forms/productForm'


export default function InvoiceAndSteps(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const setModalBody = (contact) => dispatch(actions.setModalBody(contact))
  const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
  const showMessage = useSelector(state => state.messageReducer.showMessage);
  const flagModal = useSelector(state => state.messageReducer.flagModal)
  const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
  const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))
  const buttonClick = useSelector(state => state.messageReducer.buttonClick)
  const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
  const flagIfEmpty = useSelector(state => state.invoiceReducer.flagIfEmpty);
  const [flagFirstB, setFlagFirstB] = useState(false)
  const [flagFirst, setFlagFirst] = useState(false)
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const [isLevel4, setIsLevel4] = useState(false)
  const userName = useSelector(state => state.publicReducer.userName);

  useEffect(() => {
    if (buttonClick === "continuOtherPage") {
      flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
        if (flag === true) {
          dispatch(actions.setFlagShowSaveP({ index: index, value: false }))
          dispatch(actions.setColorFlagShowSaveP("#DBD0D7"))

        }
      })
      setShowMessage(false)
      setButtonClick("")
      history.push(`/${userName}/allDocuments`)
    }
  }, [buttonClick])

const backtoAllInvoices=()=>{
    if (flagIfEmpty==false) {
      history.push(`/${userName}/allDocuments`)
      dispatch(actions.setFlagModal(""))
      dispatch(actions.setShowMessage(false))
      dispatch(actions.setButtonClick(""))
      dispatch(actions.setModalBody(""))
    }
    else {
        setModalBody("Do you want to save Invoice?")
        setFlagModal("otherPage")
        setShowMessage(true)
    }
}




  // const backtoAllInvoices = () => {
  //   history.push(`/${userName}/allDocuments`)
  // }
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