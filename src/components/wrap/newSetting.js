import React, { useState, useEffect } from 'react'
import './newSetting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { useHistory } from 'react-router-dom';
import MessageProductP from '../product/messageProductPage'
import MessageBusiness from '../forms/messageBusineess'
export default function NewSetting(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const open_setting = useSelector(state => state.displayComponents.openSetting);
  const displaySetting = useSelector(state => state.displayComponents.displaySetting);
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const [specificRoute, setspecificRoute] = useState('')
  // const buisness = useSelector(state => state.buisnessReducer.buisness)
  // const flagSaveInvoice = useSelector(state => state.messageReducer.flagSaveInvoice)
  // const setFlagSaveInvoice = (status) => dispatch(actions.setFlagSaveInvoice(status))
  const setModalBody = (contact) => dispatch(actions.setModalBody(contact))
  const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
  const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
  const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))
  const buttonClick = useSelector(state => state.messageReducer.buttonClick)
  // const showMessagePr = useSelector(state => state.messageReducer.showMessagePr)
  // const invoice = useSelector(state => state.invoiceReducer.invoice);
  const savePr = useSelector(state => state.productReducer.ifSave);
  const flagIfEmpty = useSelector(state => state.invoiceReducer.flagIfEmpty);
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const [flagFirst, setFlagFirst] = useState(false)
  const [index, setIndex] = useState(0)
  const flagSave = useSelector(state => state.buisnessReducer.flagSave);



  //???? ???????? ???????? ?????????? ???? ?????????? ??????????
  useEffect(() => {
    if (buttonClick === "continuOtherPage") {
      flagShowSaveP.length > 0 && flagShowSaveP.forEach((flag, index) => {
        if (flag === true) {
          dispatch(actions.setFlagShowSaveP({ index: index, value: false }))
          dispatch(actions.setColorFlagShowSaveP("#707071"))
        }
      })
      setShowMessage(false)
      setButtonClick("")
      routePage()
    }
    if (buttonClick === 'saveInvoiceOtherPage') {
      // alert("lll")
      setButtonClick("")
      setShowMessage(false)
    }
  }, [buttonClick])

  // const [page, setPage] = useState(false)
  //???????? ?????????? ???? ?????????? ????????????????????????
  useEffect(() => {
    if (flagFirst === false)
      setFlagFirst(true)
    else {
      if (history.location.pathname === `/${userName}/invoice` || window.location.href.indexOf("invoice/edit") !== -1) {
        if (flagIfEmpty === false) {
          routePage()
          dispatch(actions.setFlagModal(""))
          dispatch(actions.setShowMessage(false))
          dispatch(actions.setButtonClick(""))
          dispatch(actions.setModalBody(""))
        }
        else {
          // if (flagSaveInvoice === false) {
          setModalBody("Do you want to save Invoice?")
          setFlagModal("otherPage")
          setShowMessage(true)
        }
      }
      else {
        if (savePr) {

          if (window.location.href.split('/')[4] === "product") {
            dispatch(actions.setPage(true))
            // setPage(true)
          }
          else {
            dispatch(actions.setPage(true))
            routePage()
            setShowMessage(false)
          }
        }
        else {

          if (flagSave == 'true1' || flagSave == 'true2' || flagSave == 'saveNewBusiness') {
            dispatch(actions.setFlagOverPage(true))
            // dispatch(actions.setflagSave(''))
          }
          else {
            routePage()
            setShowMessage(false)
          }
        }

      }

    }
  }, [index])

  const degel = useSelector(state => state.productReducer.degel1)
  useEffect(() => {
    if (degel === '2') {
      routePage()
      setShowMessage(false)
      dispatch(actions.setdegel1(0))
    }
    else {
      if (degel === '4') {
        routePage()
        setShowMessage(false)
        dispatch(actions.setdegel1(0))
      }
    }
  }, [degel])


  useEffect(() => {
    if (flagSave === 'overPage1') {
      routePage()
      setShowMessage(false)
      dispatch(actions.setflagSave('false'))
    }
    else {
      if (flagSave === 'overPage2') {
        routePage()
        setShowMessage(false)
        dispatch(actions.setflagSave('false'))
      }
      else {
        if (flagSave == 'noSave') {
          routePage()
          setShowMessage(false)
          dispatch(actions.setflagSave('false'))
        }
      }
    }
  }, [flagSave])

  const routePage = () => {
    dispatch(actions.setsendMessage("false"))
    dispatch(actions.setInvoiceSave(null))
    if (specificRoute === "Documents") {
      history.push(`/${userName}/allDocuments`)

    }

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
    }
    if (specificRoute === "Setting") {
      history.push(`/${userName}/setting`)
      dispatch(actions.setInvoiceSave(null))
    }
  }



  const checkIfBuisness = (value) => {
    // if (savePr) {
    //   if (value != 'Products') {
    //     dispatch(actions.setShowMessagePr(true))
    //   }
    // }
    dispatch(actions.setDisplayBoxShadow(false))
    setIndex(index + 1)
    setspecificRoute(value)
    setIndex(index + 1)
    if (allBuisnessToUser === undefined) {
      history.push(`/${userName}/add_buisness`)
    }
  }

  return (
    <>
      <MessageBusiness></MessageBusiness>
      <MessageProductP flag={1}></MessageProductP>
      {/* <button></button> */}
      {/* ${open_setting ? 'ttt setting':'setting2 ii'} */}
      <div className={`container-fluid 
      ${open_setting ? 'ttt setting' : displaySetting ? 'setting3' : 'setting2 ii'}`} >

        <ul class="list-group list-group-flush d-flex flex-column " style={{ marginTop: "40%" }}>

          {/* <li className="kkk" onClick={() => checkIfBuisness("Business")}>
              <li className={window.location.href.split('/')[4] == "buisness" ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"}>
                <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "buisness" ?
                "n" : "l"}>Buisness</div></li>
            </li> */}
          {/* <li className="list-group-item yy d-flex align-items-center" >
              <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon>
            </li>
            <li className="li_hidden"><div className="l" style={{ textDecoration: "none" }} onClick={() => checkIfBuisness("Business")}>Buisness</div></li> */}

          {/* <li className="kkk" onClick={() => checkIfBuisness("Documents")}>
              <li className={window.location.href.split('/')[4] == "allDocuments" ||
                window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"} >
                <FontAwesomeIcon size="lg" icon={['fas', 'receipt']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "allDocuments" ||
                window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
                "dd" : "d"}>Documents</div></li>
            </li>
           */}
          <li className={window.location.href.split('/')[4] === "buisness" ? 'li_wrapi_focus d-flex flex-column justify-content-center align-items-center' : 'li_wrapi d-flex flex-column justify-content-center align-items-center'} onClick={() => checkIfBuisness("Business")}>
            <div>
              <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon>
            </div>
            <div className="textinconfigurator">Buisness</div>
          </li>
          <li className={window.location.href.split('/')[4] === "allDocuments" ||
            window.location.href.indexOf("invoice") !== -1 || window.location.href.indexOf("/Invoice") > -1 ? 'li_wrapi_focus d-flex flex-column justify-content-center align-items-center' : 'li_wrapi d-flex flex-column justify-content-center align-items-center'} onClick={() => checkIfBuisness("Documents")}>
            <div>
              <FontAwesomeIcon size="lg" icon={['fas', 'receipt']}></FontAwesomeIcon>
            </div>
            <div className="textinconfigurator">Invoices</div>
          </li>
          <li className={window.location.href.split('/')[4] === "product" ? 'li_wrapi_focus d-flex flex-column justify-content-center align-items-center' : 'li_wrapi d-flex flex-column justify-content-center align-items-center'} onClick={() => checkIfBuisness("Products")}>
            <div>
              <FontAwesomeIcon size="lg" icon={['fas', 'user']}></FontAwesomeIcon>
            </div>
            <div className="textinconfigurator">Products</div>
          </li>
          <li className={window.location.href.split('/')[4] === "customers" ? 'li_wrapi_focus d-flex flex-column justify-content-center align-items-center' : 'li_wrapi d-flex flex-column justify-content-center align-items-center'} onClick={() => checkIfBuisness("Contacts")}>
            <div>
              <FontAwesomeIcon size="lg" icon={['fas', 'user-circle']}></FontAwesomeIcon>
            </div>
            <div className="textinconfigurator">Contacts</div>
          </li>
          <li className={window.location.href.split('/')[4] === "setting" ? 'li_wrapi_focus d-flex flex-column justify-content-center align-items-center' : 'li_wrapi d-flex flex-column justify-content-center align-items-center'} onClick={() => checkIfBuisness("Setting")}>
            <div>
              <FontAwesomeIcon size="lg" icon={['fas', 'cog']}></FontAwesomeIcon>
            </div>
            <span className="textinconfigurator">
              Setting
            </span>
          </li>
          <li className={window.location.href.split('/')[4] === "Payments" ? 'li_wrapi_focus d-flex flex-column justify-content-center align-items-center' : 'li_wrapi d-flex flex-column justify-content-center align-items-center'} onClick={() => checkIfBuisness("Payments")}>
            <div>
              <FontAwesomeIcon size="lg" icon={['fas', 'credit-card']}></FontAwesomeIcon>
            </div>
            <div className="textinconfigurator">Payments</div>
          </li>
          {/* <li className="list-group-item yy d-flex align-items-center">
              <FontAwesomeIcon size="lg" icon={['fas', 'user']}></FontAwesomeIcon>
            </li>
            <li className="li_hidden"><div onClick={()=>checkIfBuisness("Products")} className="l" >Products</div></li> */}

          {/* <li className="kkk" onClick={() => checkIfBuisness("Contacts")}>
              <li className={window.location.href.split('/')[4] == "customers" ?
                "list-group-item yyyy d-flex align-items-center" : "list-group-item yy d-flex align-items-center"} >
                <FontAwesomeIcon size="lg" icon={['fas', 'atom']}></FontAwesomeIcon>
              </li>
              <li className="li_hidden"><div className={window.location.href.split('/')[4] == "customers" ?
                "n" : "l"}>Contacts</div></li>
            </li> */}
          {/* <li className="list-group-item yy d-flex align-items-center" >
              <FontAwesomeIcon size="lg" icon={['fas', 'atom']}></FontAwesomeIcon>
            </li>
            <li className="li_hidden"><div className="l" onClick={() =>checkIfBuisness("Contacts")} >Contacts</div></li> */}


        </ul>
        {/* </ul> */}
        {/* </ul> */}

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
