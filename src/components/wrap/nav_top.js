import React, { useState, useEffect } from 'react';
import './nav_top.css';
import logo from '../assets/newLogo.png';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import Select from 'react-select';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from './share';
import { ImLink } from 'react-icons/im'
import HeaderLeader from '@leadercodes/header'
import { useHistory } from 'react-router-dom';
import keys from '../../config/env/keys';



export default function Nav() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [copy, setCopy] = useState(false);
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);
  const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
  const flagSaveP = useSelector(state => state.invoiceReducer.flagSaveP)
  const Location = useLocation()
  const setIslevel = (level) => dispatch(actions.setIsLevel(level))
  const invoice = useSelector(state => state.invoiceReducer.invoice);
  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  // const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)

  const prevPath = useSelector(state => state.displayComponents.prevPath)



  const setShowMessage = (status) => dispatch(actions.setShowMessage(status))

  // const flagMessage = useSelector(state => state.messageReducer.flagMessage)
  const flagMessageContact = useSelector(state => state.messageReducer.flagMessageContact)
  const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
  const setModalBody = (status) => dispatch(actions.setModalBody(status))
  const [flagSaveinvoice1, setFlagSaveinvoice1] = useState(false)


  const buttonClick = useSelector(state => state.messageReducer.buttonClick)
  const flagModal = useSelector(state => state.messageReducer.flagModal)


  const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
  // const [flagSaveP, setFlagSaveP] = useState(false)
  const setFlagSaveP = (status) => dispatch(actions.setFlagSaveP(status))
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)

  const [flagFirstToP, setFlagFirstToP] = useState(false)
  const [flagToCheck, setFlagToCheck] = useState(false)
  const [first, setFirst] = useState(false)
  // dispatch(actions.setFlagFromTable(true))
  const flagFromTable = useSelector(state => state.invoiceReducer.flagFromTable);
  const flagPush = useSelector(state => state.invoiceReducer.flagPush);
  const flagPush1 = useSelector(state => state.invoiceReducer.flagPush1);
  const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)


  const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))


  // const setClickSave = (status) => dispatch(actions.setClickSave(status))
  // const clickSave = useSelector(state => state.invoiceReducer.clickSave);
  // const validProduct = useSelector(state => state.invoiceReducer.validProduct);
  // const invalidProduct = useSelector(state => state.invoiceReducer.invalidProduct)
  // const flagValidPrice = useSelector(state => state.invoiceReducer.invalidProduct)
  // const setflagValidPrice = (status) => dispatch(actions.setflagValidPrice(status))
  // const flagValidName = useSelector(state => state.invoiceReducer.flagValidName)
  // const setflagValidName = (status) => dispatch(actions.setflagValidName(status))
  // const new_product = useSelector(state => state.productReducer.newProduct)
  const submitSaveInvoice = useSelector(state => state.invoiceReducer.submitSaveInvoice)
  // const detailsProducts = useSelector(state => state.invoiceReducer.invoice.products);
  const submitProduct = useSelector(state => state.invoiceReducer.submitProduct);
  // const allproduct = useSelector(state => state.productReducer.allProducts);

  useEffect(() => {
    console.log("navTop")
  }, [invoiceSave])

  const chooseCurrentBuisness = (event) => {
    const buisnessChoose = event.value;
    const objBuisness = JSON.parse(buisnessChoose)
    if (currentBuisness._id !== objBuisness._id) {
      dispatch(actions.setShow(true))
      dispatch(actions.setNameAction("You moved to another business"))
    }
    dispatch(actions.getAllProduct(objBuisness._id))
    dispatch(actions.setGetBusiness(objBuisness._id))
    dispatch(actions.setGeCurrenttBuisness(objBuisness))
  }

  const send = () => {
    history.push(`/${userName}/`)
  }
  useEffect(() => {
    // alert("ccc")
    dispatch(actions.setflagBorderProduct(false))
    // $('.left_nav').addClass('border_configurator') 
  }, [])

  useEffect(() => {

    if (prevPath === `/${userName}/invoice`) {
      dispatch(actions.setPrevPath(''))
      // alert('gyfsj')
    }
  }, [Location])



  //?????? ?????? ????????????
  useEffect(() => {

    if (flagModal === "successContact")
      nameInvoice()
    if (flagModal === "successNameInvoice") {
      // alert("saveeeeeee")
      save()
    }
  }, [flagModal])

  //???????? ?????????? ???? ?????????? ?????????? 
  useEffect(() => {
    // if (buttonClick === "saveInvoiceOtherPage"){
    //   alert("formmm")
    //   document.getElementById("form_id").submit();
    // }

    // save1()
    if (buttonClick === "saveInvoiceOtherPageBack") {
      flagShowSaveP.length > 0 && flagShowSaveP.forEach((flag, index) => {
        if (flag === true) {
          dispatch(actions.setFlagShowSaveP({ index: index, value: false }))
          dispatch(actions.setColorFlagShowSaveP("#707071"))

        }
      })
      setShowMessage(false)
      setButtonClick("")
      history.push(`/${userName}/allDocuments`)
    }

  }, [buttonClick])

  //???????? ?????????? ???? ?????????????? 
  useEffect(() => {
    if (first === false) {
      setFirst(true)
    }

    else {
      if (flagToCheck === true) {
        setFlagToCheck(false)
        if (flagSaveP === false) {
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
  }, [flagToCheck])




  //???????? ???????????? ???????? ???? ???????????? ???????????? ???????? ???????????????? ?????? ?????? ???????? ???? ???????? ???? ?????????? ???? ???????????? ???? ????????????????
  useEffect(() => {
    if (flagFirstToP === false)
      setFlagFirstToP(true)
    else {
      // flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
      if (colorFlagShowSaveP === "#707071")
        setFlagSaveP(false)
      else {
        setFlagSaveP(true)
      }
    }
  }, [colorFlagShowSaveP])

  useEffect(() => {
    if (submitSaveInvoice === true) {
      // alert("submitSaveInvoice")

      dispatch(actions.setFlagPush(false))
      dispatch(actions.setFlagPush1(false))
      dispatch(actions.setColorFlagShowSaveP("#707071"))
      dispatch(actions.setFlagModal(""))
      dispatch(actions.setShowMessage(false))
      dispatch(actions.setButtonClick(""))
      dispatch(actions.setModalBody(""))
      dispatch(actions.setClickSave(true))


      flagShowSaveP.length > 0 && flagShowSaveP.forEach((flag, index) => {
        setFlagToCheck(true)
        if (flag === true) {
          setFlagSaveP(true)
          dispatch(actions.setColorFlagShowSaveP("red"))
        }
      })
    }
  }, [submitSaveInvoice])

  useEffect(() => {

  }, [submitProduct])

  //???????? ???????????? ???????? ???? ???? ?????????????? 
  useEffect(() => {
    if (flagPush1 === true) {
      if (window.location.href.indexOf("invoice/edit") !== -1
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

  //???????? ???????????? ?????????? ???? ?????????? ?????? ????????????????
  const nameInvoice = () => {
    // alert("uuu")
    if (history.location.pathname === `/${userName}/invoice` && invoice.type ||
      window.location.href.indexOf('invoice/edit') !== -1 && detailsInvoice.type)
      save()
    else {
      dispatch(actions.setShowModalName(true))
    }
  }

  //???????????? ???? ????????????????
  const save = () => {

    setIslevel(3);
    // alert('route'+history.location.pathname)
    dispatch(actions.setFlagIfEmpty(false))
    if (history.location.pathname === `/${userName}/invoice`) {

      dispatch(actions.setSaveInvoice(invoice))
    }
    else {

      if (detailsInvoice._id) {

        dispatch(actions.setGetInvoiceById(detailsInvoice._id))
      }
      else {

        dispatch(actions.setGetInvoiceById(window.location.pathname.split("/").pop()))
      }
      //   "detailsInvoice", detailsInvoice._id, detailsInvoice.products)
      // 
      updateinvoiceField({ key: "products", value: detailsInvoice.products });
      dispatch(actions.setUpdateInvoice())
    }
  }




  //???????? ???????????? ???? ????????????????
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

  // useEffect(()=>{
  //   dispatch(actions.setDisplayBoxShadow(true))
  // })

  // const clickBigInput = () => {
  //   dispatch(actions.setClickBigInputForm(true))
  // }



  return (

    // <div className="col-11 d-flex justify-content-end" >


    <div className="nav_top1 container-fluid  d-flex align-items-center " style={{ padding: "0px" }}>
      {/* <div className="row" style={{ width: "100%" }}>
      </div> */}
      <div className="col-2 d-flex justify-content-start align-items-center" style={{ padding: "0px", paddingLeft: "1%" }}>
        <div
        // style={{ display: "inline-block" }}
        >
          <img src={logo} alt={"logo"}
            className="pointer"
            style={{ height: "30px" }}
            onClick={(e) => send()}
          />
        </div></div>

      <div className="col-7 d-flex justify-content-center" style={{ border: "3px black" }}>

        {invoiceSave ? invoiceSave.invoice ? invoiceSave.invoice._id ?
          <div className="col-8 d-flex justify-content-center" style={{ border: "3px black" }}>
            <div className="copy" style={{ border: "solid 1px #917BDF" }}>
              <CopyToClipboard
                text={`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id}`}
                onCopy={() => {
                  setCopy(true)
                  setTimeout(() => {
                    setCopy(false)
                  }, 3000);
                }}>
                <div className="linkCopydiv pointer" style={{ display: "inline" }}>
                  <span className="linkCopyspan px-3">
                    <span>{`https://finance.leader.codes/${invoiceSave.invoice._id.slice(0, 5)}${"..."}`}</span>
                  </span>
                  <span className="linkCopyicon px-1"
                  // onClick={()=>setMail()}
                  >
                    {/* <FontAwesomeIcon className="ic" size="2x" icon={['fas', 'link']}
        ></FontAwesomeIcon> */}
                    <ImLink className="ic" size="2x" icon={['fas', 'link']}
                    ></ImLink>
                  </span>
                  {copy && <span className="px-3 alert-copy">Test Link Copied!</span>}
                </div>
              </CopyToClipboard>
            </div>
            <div className="share">
              <Share fl={2} />
            </div>
          </div>
          : "" : invoiceSave._id ?
          <div className="col-8 d-flex justify-content-center" style={{ border: "3px black" }}>
            <div className="copy" style={{ border: "solid 1px #917BDF" }}>
              <CopyToClipboard
                text={`https://finance.leader.codes/${userName}/view/${invoiceSave._id}`}
                onCopy={() => {
                  setCopy(true)
                  setTimeout(() => {
                    setCopy(false)
                  }, 3000);
                }}>
                <div className="linkCopydiv pointer" style={{ display: "inline" }}>
                  <span className="linkCopyspan px-3">
                    <span>{`https://finance.leader.codes/${invoiceSave._id.slice(0, 5)}${"..."}`}</span>
                  </span>
                  <span className="linkCopyicon px-1"
                  // onClick={()=>setMail()}
                  >
                    {/* <FontAwesomeIcon className="ic" size="2x" icon={['fas', 'link']}
        ></FontAwesomeIcon> */}
                    <ImLink className="ic" size="2x" icon={['fas', 'link']}
                    ></ImLink>
                  </span>
                  {copy && <span className="px-3 alert-copy">Test Link Copied!</span>}
                </div>
              </CopyToClipboard>
            </div>
            <div className="share">
              <Share fl={2} />
            </div>
          </div>
          : "" : ""}
      </div>
      <div className="col-3 d-flex flex-row">
        {/* <button onClick={()=>setMail()}>email</button> */}
        {/* <div className="col-5 d-flex justify-content-end" > */}

        {/* <h2>{currentBuisness? currentBuisness.name? currentBuisness.name: "":""}</h2> */}

        <div className="col-6 d-flex align-items-center justify-content-center">
          {

            // {/* // onClick={save1}
            // // className={flagSaveP ? "saving2 mt-2 mb-2" : "saving1 mt-2 mb-2"}>
            // // {window.location.href.indexOf("invoice/edit") != -1 ? 'update' : 'save'} */}
            // {/* > */}

            window.location.href.indexOf("invoice") !== -1 &&
            // <button
            //   onClick={clickBigInput}
            // >
            <input
              form="form_id1"
              immediate="true"
              name='selectBillingAddress'
              style={{ marginLeft: "33%", width: "100%", height: "39%", border: "none", color: "white", fonStize: "0.8vw", backgroundColor: colorFlagShowSaveP, marginBottom: "2px" }}
              // onClick={savepr}backgroundColor: 'transparent'
              className={flagSaveP ? "saving2 mt-2 mb-2" : "saving1 mt-2 mb-2"}
              value={window.location.href.indexOf("invoice/edit") != -1 ? 'update' : 'save'}
              // className="btn"
              type="submit"
            />
            // </button>
          }
        </div>


        <div className="col-6 d-flex-row row">
          <Select
            components={{ IndicatorSeparator: () => null }}
            style={{
              border: "0", boxShadow: "none", fontSize: "160%", maxWidth: "90%",
              // backgroundImage: ('../assets/newLogo.png'),
              webkitAppearance: "none",
              mozAppearance: "none",
              appearance: "none"
            }}
            class="form-select-lg mr-2" className="css-yk16xz-control1"
            value={{
              label: currentBuisness ? currentBuisness._id ? currentBuisness.name : userName : userName,
              value: currentBuisness ? currentBuisness._id ? currentBuisness : "" : ""
            }}
            onChange={chooseCurrentBuisness}
            options={allBuisnessToUser ? allBuisnessToUser ? allBuisnessToUser.map((buisness) => {
              return ({
                label: <div><img src={buisness.imgLogo ? buisness.imgLogo : logo} alt="" height="25px" width="25px" /> {buisness.name}</div>,
                value: JSON.stringify(buisness),
              })
            }) : "" : ""}>
          </Select>

          <div className="ml-3 mt-1">
            <HeaderLeader appName={"finance"} userName={userName} />
          </div>

        </div>
      </div>
      {/* <div className="col-1 d-flex-row p-0" align="right">
        <HeaderLeader appName={"finance"} userName={userName} />
      </div> */}

    </div>



  );
}