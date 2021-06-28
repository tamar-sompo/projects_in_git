import React, { useState, useEffect } from 'react'
import './newSetting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';
import { actions } from '../../redux/actions/All_actions';
import { useHistory } from 'react-router-dom';
import $ from 'jquery'
import Design_Menu from '../design_menu'


export default function NewSetting(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const open_setting = useSelector(state => state.displayComponents.openSetting);
  const displaySetting = useSelector(state => state.displayComponents.displaySetting);
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const [specificRoute, setspecificRoute] = useState('')
  const buisness = useSelector(state => state.buisnessReducer.buisness)
  const flagSaveInvoice = useSelector(state => state.messageReducer.flagSaveInvoice)
  const setFlagSaveInvoice = (status) => dispatch(actions.setFlagSaveInvoice(status))
  const setModalBody = (contact) => dispatch(actions.setModalBody(contact))
  const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
  const showMessage = useSelector(state => state.messageReducer.showMessage);
  const flagModal = useSelector(state => state.messageReducer.flagModal)
  const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
  const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))
  const buttonClick = useSelector(state => state.messageReducer.buttonClick)
  const invoice = useSelector(state => state.invoiceReducer.invoice);
  const flagIfEmpty = useSelector(state => state.invoiceReducer.flagIfEmpty);
  const [flagFirstB, setFlagFirstB] = useState(false)
  const [flagFirst, setFlagFirst] = useState(false)
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const [flagIfSave, setFlagIfSave] = useState(false)
  const [index, setIndex] = useState(0)
  console.log("allBuisnessToUser", allBuisnessToUser)

  const setdispatch = () => {
    dispatch(actions.setInvoiceShow({}));
    dispatch(actions.setDetailsContact({}));
  }

  const [open, setOpen] = useState(true)


  //מה יעשה אחרי שלוחץ על כפתור במודל
  useEffect(() => {
    if (buttonClick === "continuOtherPage") {
      flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
        if (flag === true) {
          dispatch(actions.setFlagShowSaveP({ index: index, value: false }))
          dispatch(actions.setColorFlagShowSaveP("black"))

        }
      })
      setShowMessage(false)
      setButtonClick("")
      routePage()
    }
  }, [buttonClick])

  //אחרי לחיצה על קישור בקונפיגורטור
  useEffect(() => {
    if (flagFirst === false)
      setFlagFirst(true)
    else {
      console.log("rrrrrrrr", setspecificRoute)
      if (history.location.pathname === `/${userName}/invoice` || window.location.href.indexOf("invoice/edit") != -1) {
        if (flagIfEmpty == false) {
          routePage()
          dispatch(actions.setFlagModal(""))
          dispatch(actions.setShowMessage(false))
          dispatch(actions.setButtonClick(""))
          dispatch(actions.setModalBody(""))
        }
        else {
          console.log("invoiceeeewwww", setspecificRoute)
          // if (flagSaveInvoice === false) {
          setModalBody("Do you want to save Invoice?")
          console.log("seyttttttt", setspecificRoute)
          setFlagModal("otherPage")
          setShowMessage(true)

          // }
          // else{
          //   routePage()
          //   dispatch(actions.setFlagModal(""))
          //   dispatch(actions.setShowMessage(false))
          //   dispatch(actions.setButtonClick(""))
          //   dispatch(actions.setModalBody(""))
          // }
        }
      }
      else {
        routePage()
        setShowMessage(false)
      }

    }
  }, [index])

  const routePage = () => {
    dispatch(actions.setsendMessage("false"))
    dispatch(actions.setInvoiceSave(null))
    if (specificRoute === "Documents")
      history.push(`/${userName}/allDocuments`)
    if (specificRoute === "Business") {
      history.push(`/${userName}/buisness`)
      dispatch(actions.setInvoiceSave(null))
    }
    if (specificRoute === "Contacts") {
      history.push(`/${userName}/customers`)
      dispatch(actions.setInvoiceSave(null))
    }
    if (specificRoute === "Products") {
      history.push(`/${userName}/product`)
      dispatch(actions.getAllProduct())
      dispatch(actions.setInvoiceSave(null))
    }
    if (specificRoute === "Payments") {
      history.push(`/${userName}/payments`)
      dispatch(actions.setInvoiceSave(null))
    }
  }



  const checkIfBuisness = (value) => {
    setIndex(index + 1)
    setspecificRoute(value)
    setIndex(index + 1)
    if (allBuisnessToUser === undefined) {
      history.push(`/${userName}/add_buisness`)
    }
  }

  return (
    <>
      {/* <button></button> */}
      {console.log("open_setting", open_setting)}
      {/* ${open_setting ? 'ttt setting':'setting2 ii'} */}
      <div className={`container-fluid 
      ${open_setting ? 'ttt setting' : displaySetting ? 'setting3' : 'setting2 ii'}`} >    {/* <Design_Menu /> */}

        <ul class="list-group list-group-flush d-flex flex-column r">
          <ul class="list-group d-flex flex-column border-hidden">

            <li className="kkk" onClick={() => checkIfBuisness("Business")}>
              <li className={window.location.href.split('/')[4] == "buisness" ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"}>
                <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "buisness" ?
                "n" : "l"}>Buisness</div></li>
            </li>
            {/* <li className="list-group-item yy d-flex align-items-center" >
              <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon>
            </li>
            <li className="li_hidden"><div className="l" style={{ textDecoration: "none" }} onClick={() => checkIfBuisness("Business")}>Buisness</div></li> */}

            <li className="kkk" onClick={() => checkIfBuisness("Documents")}>
              <li className={window.location.href.split('/')[4] == "allDocuments" ||
                window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"} >
                <FontAwesomeIcon size="lg" icon={['fas', 'receipt']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "allDocuments" ||
                window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
                "dd" : "d"}>Documents</div></li>
            </li>
            {/* <li className="list-group-item yy d-flex align-items-center">
              <FontAwesomeIcon size="lg" icon={['fas', 'receipt']}></FontAwesomeIcon>
            </li>
            <li className="li_hidden"><div className="d" onClick={() => checkIfBuisness("Documents")}>Documents</div></li> */}

            <li className="kkk" onClick={() => checkIfBuisness("Products")}>
              <li className={window.location.href.split('/')[4] == "product" ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"} >
                <FontAwesomeIcon size="lg" icon={['fas', 'user']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "product" ?
                "n" : "l"}>Products</div></li>
            </li>
            <li className="kkk" onClick={() => checkIfBuisness("Contacts")}>
              <li className={window.location.href.split('/')[4] == "customers" ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"} >
                <FontAwesomeIcon size="lg" icon={['fas', 'atom']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "customers" ?
                "n" : "l"}>Contacts</div></li>
            </li>
            {/* <li className="kkk" onClick={() => checkIfBuisness("Payments")}>
              <li className={window.location.href.split('/')[4] == "payments" ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"} >
                <FontAwesomeIcon size="lg" icon={['fas', 'credit-card']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "payments" ?
                "n" : "l"}>Payments</div></li>
            </li> */}
          </ul>
        </ul>

        {/* <ul class="list-group list-group-flush d-flex flex-column r">
          <ul class="list-group d-flex flex-column border-hidden">
            <li className="list-group-item yy d-flex align-items-center" >
              <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon><Link className="l" to={{ pathname: `/${userName}/buisness` }}
                style={{ textDecoration: "none" }} onClick={setdisplaySetting("Business")}>Buisness</Link>
            </li>
          <li className="li_hidden"></li>
          <li  onClick={setdisplaySetting} className="list-group-item yy d-flex align-items-center">
            <FontAwesomeIcon size="lg" icon={['fas', 'receipt']}></FontAwesomeIcon><Link className="l" to={{pathname: `/${userName}/allDocuments`}} >Documents</Link>
          </li>
          <li className="li_hidden"></li>
          <li  className="list-group-item yy d-flex align-items-center">
            <FontAwesomeIcon size="lg" icon={['fas', 'user']}></FontAwesomeIcon><Link onClick={()=>setdisplaySetting("Products")} className="l" to={{pathname: `/${userName}/product`}}  >Products</Link>
          </li>
          <li className="li_hidden"></li>
     
          <li onClick={setdisplaySetting} className="list-group-item yy d-flex align-items-center" >
            <FontAwesomeIcon size="lg" icon={['fas', 'atom']}></FontAwesomeIcon><Link class="l" to={{pathname: `/${userName}/customers`}} >Contacts</Link>
          </li>
          <li className="li_hidden"></li>
     
          </ul>
        </ul> */}

      </div>
      {/* <FontAwesomeIcon size="lg" icon={['fas', 'atom']}></FontAwesomeIcon><Link class="l" to="/customers"  onClick={setdisplaySetting} >contacts</Link> */}
      {/* <div className="trtr" style={{width:"50px",height:"50px",backgroundColor:"red"}}>fgyueryfggfgfgfggfgfg</div> */}
    </>
  )
}
    // const mapStateToProps=(state)=>{

    // }
    // const mapDispatchToProps=(dispatch)=>{
    //   return{ 
    //      getproduct:()=>dispatch({type:"GET_ALL_PRODUCT"}),
    //      setDetailsView:(e)=>dispatch(actions.setInvoiceShow(e))
    //     }

    // }