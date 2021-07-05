import React, { useEffect, useState } from 'react';
import '../../App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { withRouter, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './new_invoices/new_invoice.css';
// import { connect, useDispatch, useSelector } from 'react-redux';
import Steps from './steps.js';
import $ from 'jquery'
// import Conversion from './conversion.js'
import ProductForm from '../forms/productForm.js';
// import ContactForm from '../forms/cotactForm'
import ButtonPlus from '../forms/buttonPlus'
// import Invoice from './invoice'
import New_Invoice from './new_invoices/new_invoice'
// import { actions } from '../../redux/actions/All_actions';
import { useHistory } from 'react-router-dom';
// import productForm from '../forms/productForm'
import { FontAwesomeIcon, fas } from "@fortawesome/react-fontawesome"
import { AirlineSeatReclineExtra } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import Massage from '../Export/email.js'
export default function InvoiceAndSteps(props) {
  // let history = useHistory();
  const Location = useLocation()
  const dispatch = useDispatch()
  const setIslevel = (level) => dispatch(actions.setIsLevel(level))
  const invoice = useSelector(state => state.invoiceReducer.invoice);
  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const userName = useSelector(state => state.publicReducer.userName);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  // const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
  const setViewConversion = () => dispatch(actions.setViewConversion())
  const prevPath = useSelector(state => state.displayComponents.prevPath)
  const sendWave = () => dispatch(actions.setSystemWave())
  const [flagM, setFlagM] = useState(false)
  const allInvoices = useSelector(state => state.invoiceReducer.allInvoices);
  const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
  const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
  const showMessage = useSelector(state => state.messageReducer.showMessage);
  // const flagMessage = useSelector(state => state.messageReducer.flagMessage)
  const flagMessageContact = useSelector(state => state.messageReducer.flagMessageContact)
  const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
  const setModalBody = (status) => dispatch(actions.setModalBody(status))
  const [flagSaveinvoice1, setFlagSaveinvoice1] = useState(false)
  const setFlagSaveInvoice = (status) => dispatch(actions.setFlagSaveInvoice(status))
  const flagSaveInvoice = useSelector(state => state.messageReducer.flagSaveInvoice)
  const buttonClick = useSelector(state => state.messageReducer.buttonClick)
  const flagModal = useSelector(state => state.messageReducer.flagModal)
  const [flagFirst, setFlagFirst] = useState(false)
  const [flagFirstB, setFlagFirstB] = useState(false)
  const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
  // const [flagSaveP, setFlagSaveP] = useState(false)
  const setFlagSaveP = (status) => dispatch(actions.setFlagSaveP(status))
  const flagSaveP = useSelector(state => state.invoiceReducer.flagSaveP)
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const invoiceId = useSelector(state => state.invoiceReducer.invoiceId)
  const [flagFirstToP, setFlagFirstToP] = useState(false)
  const [flagToCheck, setFlagToCheck] = useState(false)
  const [first, setFirst] = useState(false)
  // dispatch(actions.setFlagFromTable(true))
  const flagFromTable = useSelector(state => state.invoiceReducer.flagFromTable);
  const flagPush = useSelector(state => state.invoiceReducer.flagPush);
  const flagPush1 = useSelector(state => state.invoiceReducer.flagPush1);
  const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
  const flagIfEmpty = useSelector(state => state.invoiceReducer.flagIfEmpty);
  const flagIfEmptyProduct = useSelector(state => state.invoiceReducer.flagIfEmptyProduct);
  const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))
  const flagOfterValidation = useSelector(state => state.invoiceReducer.flagOfterValidation);
  const borderProductInvoice = useSelector(state => state.invoiceReducer.borderProductInvoice);
  const setClickSave = (status) => dispatch(actions.setClickSave(status))
  const clickSave = useSelector(state => state.invoiceReducer.clickSave);
  const validProduct = useSelector(state => state.invoiceReducer.validProduct);
  const invalidProduct = useSelector(state => state.invoiceReducer.invalidProduct)
  const flagValidPrice = useSelector(state => state.invoiceReducer.invalidProduct)
  const setflagValidPrice = (status) => dispatch(actions.setflagValidPrice(status))
  const flagValidName = useSelector(state => state.invoiceReducer.flagValidName)
  const setflagValidName = (status) => dispatch(actions.setflagValidName(status))
  const new_product = useSelector(state => state.productReducer.newProduct)
  const isSendMessage = useSelector(state => state.exportInvoiceReducer.isSendMessage);

  // const [flagFirstB, setFlagFirstB] = useState(false)
  // const [flagFirst, setFlagFirst] = useState(false)
  // const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const [isLevel4, setIsLevel4] = useState(false)
  // const userName = useSelector(state => state.publicReducer.userName);
  // const backtoAllInvoices = () => {
  //   history.push(`/${userName}/allDocuments`)
  // }
  const history = useHistory()

  // const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  // const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);

  // const invoice = useSelector(state => state.invoiceReducer.invoice);
  // {type:'SET_SYSTEM_WAVE'})





  //בלחיצה על back
  const backtoAllInvoices = () => {

    dispatch(actions.setDisplayBoxShadow(false))
    if (flagIfEmpty == false) {
      history.push(`/${userName}/allDocuments`)
      dispatch(actions.setFlagModal(""))
      dispatch(actions.setShowMessage(false))
      dispatch(actions.setButtonClick(""))
      dispatch(actions.setModalBody(""))
    }
    else {
      setModalBody("Do you want to save Invoice?")
      setFlagModal("otherPageInvoices")
      setShowMessage(true)
    }

  }


  useEffect(() => {
    dispatch(actions.setDisplayBoxShadow(true))
  })
  return (
    <>

      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%", backgroundColor: "#F7F7F7" }}>
          <div className="col-2">
            <div className="d-flex flex-row align-items-center justufy-content-center" style={{ height: "fit-content", marginTop: "10%" }} >

              {/* <div style={{ display: "inline" }}>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg></div> */}

              <span className="backTo">
                <button onClick={backtoAllInvoices} style={{ color: "black", color: "#8D8DAE", backgroundColor: "transparent", fontWeight: "bold", fontSize: "small" }}>All Invoices</button>
              </span>
              <span className="d-flex align-items-center icon_chevron" >
                <FontAwesomeIcon
                  icon={['fas', 'chevron-right']}
                ></FontAwesomeIcon>
              </span>
              <span>
                <button style={{ color: "black", backgroundColor: "transparent", fontWeight: "bold", fontSize: "small" }}>my Invoice</button></span>
            </div></div>
          <div className="col-8 gggff" style={{
            // height: "100%",
            // width: "86%"

          }}>
            <div className='container-fluid con con2 d-flex justify-content-center '
              style={{
                // display: "inline"
                height: "100%",
                backgroundColor: "#F7F7F7"
                // width: "86%"

              }}
            >
              <New_Invoice />
            </div></div>
          <div className="col-2">
            {isSendMessage == "true" &&
              <div className=" d-flex justify-content-center align-items-center " style={{ height: "100%" }}>
                <div className=" sendEmailFromList" style={{
                  backgroundColor: "white",
                  width: "119%",
                  height: "107% ",
                  marginRight: "-14%",
                  boxShadow: "0px 3px 6px #0000001A",
                  // border: "1px solid #917BDF",
                  // boxShadow:"1px -3px 1px 3px",
                  display: "none"
                }}>
                  <Massage></Massage>
                </div>
              </div>}
            {/* <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: "10%", height: "fit-content" }}>
              <button
                // style={colorFlagShowSaveP==="red" && {border: '1px solid red'}}
                // onClick={save1}
                className={flagSaveP ? "saving2 mt-2 mb-2" : "saving1 mt-2 mb-2"}
              >
                {window.location.href.indexOf("invoice/edit") != -1 ? 'update' : 'save'}
              </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}