import React, { useEffect, useState } from 'react';
import '../../App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { withRouter, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './invoice.css';
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
  const borderProductInvoice = useSelector(state => state.invoiceReducer.borderProductInvoice)
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

  useEffect(() => {
    // alert("ccc")
    dispatch(actions.setflagBorderProduct(false))
    // $('.left_nav').addClass('border_configurator') 
  }, [])
  useEffect(() => {
    console.log("prevPath", prevPath)
    if (prevPath == `/${userName}/invoice`) {
      dispatch(actions.setPrevPath(''))
      // alert('gyfsj')
    }
  }, [Location])



  //איך חזר מהמודל
  useEffect(() => {
    console.log("flagModal", flagModal)
    if (flagModal === "successContact")
      nameInvoice()
    if (flagModal === "successNameInvoice") {
      save()
    }
  }, [flagModal])

  //אחרי לחיצה על כפתור במודל 
  useEffect(() => {
    if (buttonClick === "saveInvoiceOtherPage")
      save1()

    // if (buttonClick === "continuOtherPage") {
    //   flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
    //     if (flag === true) {
    //       dispatch(actions.setFlagShowSaveP({ index: index, value: false }))
    //       dispatch(actions.setColorFlagShowSaveP("#707071"))

    //     }
    //   })
    //   setShowMessage(false)
    //   setButtonClick("")
    //   history.push(`/${userName}/allDocuments`)
    // }
    // }
  }, [buttonClick])

  //אחרי שבודק את המוצרים 
  useEffect(() => {
    if (first === false) {
      setFirst(true)
    }

    else {
      if (flagOfterValidation === true) {
        dispatch(actions.setFlagOfterValidation(false))
        if (flagToCheck === true) {
          setFlagToCheck(false)
          if (flagSaveP === false && borderProductInvoice === false) {
            dispatch(actions.setBorderProductInvoice(false))
            if (flagMessageContact) {
              setShowMessage(true)
              setFlagModal("contact")
              setModalBody("how do you want to save contact changes?")
            }
            else {
              nameInvoice()
            }
          }
        }
      }
    }
  }, [flagToCheck, flagOfterValidation])


  //ברגע שמשתנה הצבע של הכפתור לשמירת מוצר בחשבונית כאן הוא משנה את הצבע של הפתור של השמירה של החשבונית
  useEffect(() => {
    if (flagFirstToP === false)
      setFlagFirstToP(true)
    else {
      // flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
      if (colorFlagShowSaveP === "#707071")
        setFlagSaveP(false)
      else {
        dispatch(actions.setColorFlagShowSaveP("red"))
        setFlagSaveP(true)
      }
    }
  }, [colorFlagShowSaveP])


  //בלחיצה על שמירה מתחיל את הבדיקות תקינות 
  const save1 = () => {
    debugger
    //איפוס כל המשתנים

    dispatch(actions.setFlagPush(false))
    dispatch(actions.setFlagPush1(false))
    dispatch(actions.setColorFlagShowSaveP("#707071"))
    dispatch(actions.setFlagModal(""))
    dispatch(actions.setShowMessage(false))
    dispatch(actions.setButtonClick(""))
    dispatch(actions.setModalBody(""))
    dispatch(actions.setFlagValidation(true))
    debugger
    //בודק אם יש מוצר ריק בחשבונית
    if (((history.location.pathname == `/${userName}/invoice` && invoice.products) && (invoice.products[0].id === "null" || invoice.products[0].id == undefined) && flagIfEmptyProduct === false ) ||
      ((window.location.href.indexOf('invoice/edit') != -1 && detailsInvoice.products) && (detailsInvoice.products[0].id == 'null' || detailsInvoice.products[0].id === undefined) && flagIfEmptyProduct === false) ||
      ((history.location.pathname == `/${userName}/invoice` && invoice.products) && (invoice.products[invoice.products.length - 1].id === 'null' || invoice.products[invoice.products.length - 1].id == undefined  && flagIfEmptyProduct === false )) ||
      ((window.location.href.indexOf('invoice/edit') != -1 && detailsInvoice.products) && (detailsInvoice.products[detailsInvoice.products.length - 1].id == "null" ||detailsInvoice.products[detailsInvoice.products.length - 1].id == undefined  && flagIfEmptyProduct === false ))) {

      setFlagSaveP(true)
      dispatch(actions.setBorderProductInvoice(true))
    }
    else {
      if (window.location.href.indexOf('edit')!=-1) {
        alert("detailsInvoice.products[detailsInvoice.products.length - 1].id" + detailsInvoice.products[detailsInvoice.products.length - 1].id)
        alert(window.location.href)
      }
    }

    //בדיקה אם יש מוצר לא שמור
    flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
      setFlagToCheck(true)
      if (flag === true) {
        setFlagSaveP(true)
        dispatch(actions.setColorFlagShowSaveP("red"))
      }
    })

  }



  //אחרי השמירה מאפס את כל המשתנים 
  useEffect(() => {

    console.log("flagPush", flagPush)
    if (flagPush1 === true) {
      if (window.location.href.indexOf("invoice/edit") != -1
        && flagFromTable === false
      ) {
        dispatch(actions.setFlagIfEmpty(false))
        dispatch(actions.setFlagMessage(false))
        dispatch(actions.setDislayInvoice("false"));
        dispatch(actions.setGetInvoiceId(invoiceSave.invoice._id))
        dispatch(actions.setPDelete(['']))
        dispatch(actions.setResetAllNewProduct())
      }

      if (flagFromTable === true)
        dispatch(actions.setFlagFromTable(false))
    }
  }, [flagPush1])

  //אחרי השמירה מפעיל את המודל לשם החשבונית
  const nameInvoice = () => {
    // alert("uuu")
    if (history.location.pathname == `/${userName}/invoice` && invoice.type ||
      window.location.href.indexOf('invoice/edit') != -1 && detailsInvoice.type)
      save()
    else {
      dispatch(actions.setShowModalName(true))
    }
  }

  //השמירה של החשבונית
  const save = () => {
    setIslevel(3);
    dispatch(actions.setFlagIfEmpty(false))
    if (history.location.pathname === `/${userName}/invoice`) {

      dispatch(actions.setSaveInvoice(invoice))
    }
    else {
      if (detailsInvoice._id) {
        dispatch(actions.setGetInvoiceById(detailsInvoice._id))
      }
      else
        dispatch(actions.setGetInvoiceById(window.location.pathname.split("/").pop()))
      // console.log("detailsInvoice", detailsInvoice._id, detailsInvoice.products)
      // debugger
      updateinvoiceField({ key: "products", value: detailsInvoice.products });
      dispatch(actions.setUpdateInvoice())
    }
    console.log("save", invoice)
  }


  //בלחיצה על back
  const backtoAllInvoices = () => {
    if (flagIfEmpty == false) {
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

  //אחרי השמירה של החשבונית
  useEffect(() => {
    if (flagSaveinvoice1 === false)
      setFlagSaveinvoice1(true)
    else
      if (viewConversion === "true") {
        dispatch(actions.setViewConversion('false'))
        if (history.location.pathname === `/${userName}/invoice`) {
          history.push(`/${userName}/invoice/edit/` + invoiceSave.invoice._id)
        }
      }
  }, [viewConversion])


  return (
    <>

      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-2">
            <div className="d-flex flex-row align-items-center justufy-content-center" style={{ height: "fit-content", marginTop: "10%" }} >
              <div style={{ height: "fit-content" }}>
                <FontAwesomeIcon
                  icon={['fas', 'chevron-left']}
                ></FontAwesomeIcon>
              </div>
              {/* <div style={{ display: "inline" }}>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg></div> */}
              <div style={{ height: "fit-content", color: "black", backgroundColor: "transparent", fontWeight: "bold", fontSize: "medium" }}>
                <button onClick={backtoAllInvoices} style={{ color: "black", backgroundColor: "transparent", paddingTop: "10%", fontWeight: "bold", fontSize: "medium", paddingLeft: "20%" }}>back</button>
              </div></div></div>
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
          <div className="col-2">
            <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: "10%", height: "fit-content" }}>
              <button
                // style={colorFlagShowSaveP==="red" && {border: '1px solid red'}}
                onClick={save1}
                className={flagSaveP ? "saving2 mt-2 mb-2" : "saving1 mt-2 mb-2"}
              >
                {window.location.href.indexOf("invoice/edit") != -1 ? 'update' : 'save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}