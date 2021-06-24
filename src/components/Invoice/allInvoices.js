import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/All_actions'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import $ from "jquery";
import { BsSearch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchInvoices from './searchInvoices'
import '../customers/customers.css'
import { MdEdit, MdDelete, MdContentCopy, MdRemoveRedEye, MdShare } from 'react-icons/md'
import ButtonPlus from '../forms/buttonPlus'
import Invoice from '../Invoice/new_invoices/new_invoice'
// import Invoice from './invoice'
import './allInvoices'
import { debounce } from '@material-ui/core';
import LeaderLouder from '../../components/Useful/leaderLouder'
import './allInvoices.css';
import Share from '../wrap/share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import New_Invoice from './new_invoices/new_invoice'
import ModalToViewInvoice from './modalToViewInvoice'
// import ImageList from '@material-ui/core/ImageList';

function AllInvoices(props) {

  const sendEmail = () => dispatch(actions.setSendLinkToEmail())
  const [pdfDisplay, setPdfDisplay] = useState(false);
  console.log("pdfDisplay", pdfDisplay)
  const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
  const [phone, setPhone] = useState("")

  const setMail = () => {
    dispatch(actions.setsendMessage("true"))
  }

  // const dispatch = useDispatch();
  const setDisplayInvoice = (status) => dispatch(actions.setDislayInvoice(status));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchby, setSearchby] = useState('');
  const invoiceDetails = useSelector(state => state.invoiceReducer.invoice);
  // const prodactions = [...invoiceDetails.productions];
  const [de, setDel] = useState(false);
  const [searchinvoice, setsearchinvice] = useState([])
  const [flag, setFlag] = useState([])
  const [flagToUseEffect, setFlagToUseEffect] = useState("false")
  const buisness = useSelector(state => state.buisnessReducer.buisness)
  const invoiceDetailsView = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const flagView = useSelector(state => state.invoiceReducer.flagView);
  const setFlagView = (status) => dispatch(actions.setFlagView(status));
  const [invoiceDetailsViewFlag, setInvoiceDetailsViewFlag] = useState("false")
  const setShowViewInvoiceInModal = (status) => dispatch(actions.setShowViewInvoiceInModal(status))
  const setFlagSaveInvoice = (status) => dispatch(actions.setFlagSaveInvoice(status))

  const userName = useSelector(state => state.publicReducer.userName);
  const [chooselinei, setchooselinei] = useState({
    flag: "false",
    index: "",
    isShown: false
  });
  const dislayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice);
  const getAllInvoicesToBuisness = () => dispatch(actions.setGetAllInvoicesToBuisness())
  const [flagLoud, setFlagLoud] = useState(true)
  const [flagProduct, setFlagProduct] = useState(false)
  const [flag1, setFlag1] = useState();
  const [flagSearch, setFlagSearch] = useState("false")

  // useEffect(() => {
  //   console.log("detailsInvoice", detailsInvoice);
  // }, [detailsInvoice])

  useEffect(() => {
    // console.log("allllll", props.allContact)
    // alert("allContact")
  }, [props.allContact])
  useEffect(() => {
    // dispatch(actions.setViewConversion('false'))
    if (history.location.pathname === `/${userName}/allDocuments`) {
    }
    console.log("useeffecttt")
    // dispatch(actions.setDetailsContact({}))
    // dispatch(actions.setGetAllbuisness());
    // dispatch(actions.getAllProduct())
    getAllInvoicesToBuisness()
    dispatch(actions.setViewConversion('false'))
    setFlagSaveInvoice(false)
    dispatch(actions.setFlagFromTable(false))

    // setsearchinvice(props.allInvoices)
  }, []);

  useEffect(() => {
    setFlagLoud(false);
  }, [getAllInvoicesToBuisness])

  useEffect(() => {

    if (invoiceDetailsViewFlag === "false")
      setInvoiceDetailsViewFlag("true")
    else
      console.log("invoiceeyeee", invoiceDetailsView)

  }, [invoiceDetailsView]);

  useEffect(() => {
    if (flagProduct == false)
      setFlagProduct(true)
    else {
      // dispatch(actions.getAllProduct())
      getAllInvoicesToBuisness()
    }
    // setsearchinvice(props.allInvoices)
  }, [buisness])
  // useEffect(()=>{
  //   if(props.allInvoices.length>0)
  //   setsearchinvice(props.allInvoices)
  // },[props.allInvoices])
  // useEffect(()=>{
  //   getAllInvoicesToBuisness()
  // })
  //  const calculateProductions = (field) => {
  //  var sum=0;
  //  for(var i = 0; i< prodactions.length; i++) 
  //   { sum += prodactions[i][field]
  //   console.log(sum)}
  //   return sum}
  const history = useHistory();
  const dispatch = useDispatch();
  const saveIdToDispatch = (theId) => dispatch(actions.setInvoiceId(theId))
  const fff = (key) => {

    setchooselinei({
      flag: "true",
      index: key,
      isShown: true
    })

  }
  const ppp = (key) => {

    setchooselinei({
      flag: "false",
      index: key,
      isShown: false
    })
  }
  const isPayed = (invoice) => {
    let isInvoicePayed = invoice.paid;
    // conversation.waves.forEach(wave => {
    if (isInvoicePayed == "Paid")
    // if (wave.files.length > 0) {
    {
      isInvoicePayed = true;
    }
    return isInvoicePayed;
  }
  const showInvoiceById = (invoice) => {
    dispatch(actions.setFlagFromTable(true))
    dispatch(actions.setFlagIfEmpty(false))
    dispatch(actions.setFlagMessage(false))
    setDisplayInvoice("false")
    console.log("props.allproduct", props.allproduct)
    dispatch(actions.setDetailsContact({}))
    dispatch(actions.setInvoiceShow(invoice))
    dispatch(actions.setPDelete(['']))
    dispatch(actions.setResetAllNewProduct())
    dispatch(actions.setFlagPush(true))
    history.push(`/${userName}/invoice/edit/` + invoice._id)
  }

  useEffect(() => {
    if (flagView === true)
      setShowViewInvoiceInModal(true)
  }, [flagView])

  const showInvoiceByIdAcord = (invoice, index) => {

    debugger
    setDisplayInvoice("true")
    setFlagView(true)
    dispatch(actions.setInvoiceShow(invoice))
    // dispatch(actions.setInvoicecye('eye'+index))
    // dispatch(actions.setInvoice(  {
    //   products:[],
    //   type:"invoice"
    //   } ))


    // invoice.products.map((prrr, index) => {
    //    console.log(props.allproduct.find(x => x._id === prrr))
    // })

    // dispatch(actions.setInvoice(  {
    //   products:[],
    //   type:"invoice"
    //   } ))
    // dispatch(actions.setDetailsContact({}))

    // dispatch(actions.setPDelete(['']))
    // 
  }
  // useEffect(()=>{

  // },[detailsInvoice])

  const editInvoiceById = (theId) => {
    saveIdToDispatch(theId);
    $.ajax({
      url: 'https://finance.leader.codes/show/' + theId,
      type: 'GET',
      withCradentials: true,
      async: false,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: async function (invoiceDetailsView) {
        console.log("success", invoiceDetailsView)
        await dispatch(actions.setInvoiceShow(invoiceDetailsView));
        history.push("/show/" + theId)
      },
    });
  }
  const deleteinvoice = (arr, index) => {
    let arr1 = [...searchinvoice]
    arr1.splice(index, 1)
    setsearchinvice(arr1)
  }
  const convertdate = (date1) => {
    let date = new Date(date1)
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  }
  const renderInvoices = (invoice, id) => {
    return <tr
      className="zebra"
      key={'row_' + id}>
      <td>
        <span>{id + 1}</span>
      </td>
      <td>{invoice.invoiceNumber}</td>
      <td>{invoice.clientName}</td>
      <td>{invoice.clientPhone}</td>
      <td>{invoice.paid}</td>

      <td><span className="glyphicon glyphicon-eye-open addIcon" aria-hidden="true"
        onClick={() => showInvoiceById(invoice._id)}></span></td>
      {isPayed(invoice) &&
        <td><span className="glyphicon glyphicon-edit" aria-hidden="true"
          onClick={() => editInvoiceById(invoice._id)}
        ></span></td>
      }
    </tr>
  }

  // const filterby = () => {
  //   console.log("filter")
  //   if (searchby === "") {
  //     setsearchinvice(props.allInvoices)
  //   }
  //   if (searchby === "customerInvoice") {
  //     console.log("tamar")
  //     console.log()
  //     let arr = props.allInvoices.filter(invoice => invoice.invoiceNumber === 3000)
  //     console.log(arr);
  //     setsearchinvice(arr);
  //     setDel(true)

  //   }
  // }


  const showInvoiceByIdAcord11 = (invoice) => {
    dispatch(actions.setInvoiceShow(invoice))
  }
  const changeFlag = (value) => {
    setDisplayInvoice("false")
    dispatch(actions.setInvoiceSave(null))
    setFlag1(value)
    history.push(`/${userName}/invoice`)
  }
  const clickSearch = (value) => {
    setFlagSearch(value)
  }
  const filtersearchInvoices = useSelector(state => state.invoiceReducer.filteredinvoices);;

  const [filteredinvoices, setfilteredinvoices] = useState('')

  const searchInvoices = (searchInvoice) => {
    debugger
    dispatch(actions.setFilteredInvoices(filteredinvoices))
    var invoices = props.allInvoices
    invoices.forEach(invoice => {
      if (invoice.contactOneTime.name != undefined && invoice.contactOneTime.name.toLowerCase().indexOf(searchInvoice) > -1) {
        console.log("filteredinvoices", invoice.contactOneTime.name);
        setfilteredinvoices(invoice)
        debugger
        dispatch(actions.setFilteredInvoices(filteredinvoices))
        console.log("successfilteredinvoices")
      }
    });
    console.log(filteredinvoices);
  }

  const search = (result) => {
    if (result != "") {
      console.log(result);
      searchInvoices(result)
    }
    else {
      dispatch(actions.setFilteredInvoices(props.allInvoices))
    }
  }

  return (
    <>
      <div className="container-fluid con" style={{
        height: "95%",
        width: "95%",
      }}>
        <div className="row" >
          <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
            <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Documents</h1>
            <div style={{ width: 50 + '%' }}>
              <ButtonPlus></ButtonPlus>
            </div>
          </div>

          {/* <SearchInvoices filter={filterby} changeInput={changeInput} handlesearchby={handlesearchby}></SearchInvoices> */}
          <div className="col-8 d-flex justify-content-end ">
            <div className="d-flex flex-row" style={{ display: "inline" }}
              onClick={() => clickSearch(true)}>
              <div>
                <input className={flagSearch === true ? "backgroundSearchClick" : "backgroundSearch"}
                  onChange={(e) => search(e.target.value)}>
                </input>
              </div>
              <div className={flagSearch === true ? "SearchIconClick" : "SearchIcon"}>
                <BsSearch
                  style={{ color: "gray", fontWeight: "bold" }}>
                </BsSearch>
              </div>
            </div>
            {/* <div onClick={() => changeFlag(true)} >
              <button className="newProd11">New Invoice +</button>
            </div> */}
          </div>
        </div >
        {/* <div className="col-8 d-flex justify-content-end ">
            <SearchInvoices filter={filterby} changeInput={changeInput} handlesearchby={handlesearchby}></SearchInvoices>
          </div>
        </div> */}
        < div className="wrap_table" >
          <div className="row">
            <div className="col">
              <div className="table-responsive">
                {flagLoud &&
                  <div class="d-flex justify-content-center"
                    className={flagLoud ? "d-flex justify-content-center oposity" : "d-flex justify-content-center"}>
                    <LeaderLouder></LeaderLouder>
                  </div>
                }
                <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px" }}>
                  <thead style={{ backgroundColor: "#F5F5FA", opacity: "100%" }}>
                    <tr>
                      <th style={{ width: "5%", backgroundColor: "white", border: "none" }}></th>
                      <th>INVOICE NUMBER</th>
                      <th>customerName</th>
                      <th>customerPhone</th>
                      <th>paymentStatus</th>
                      <th>date</th>
                      <th style={{ width: "3%", backgroundColor: "white", border: "none" }}></th>
                    </tr>
                  </thead>

                  <tbody >
                    {(searchby === "" || de === true) &&
                      props.allInvoices.length > 0 && props.allInvoices.map((invoice, index) => {
                        return (
                          <>
                            <tr
                              id={"flag" + index}
                              onMouseEnter={() => fff(invoice._id)}
                              onMouseLeave={() => ppp(invoice._id)}
                              key={invoice._id}>
                              {/* {contact.googleContact ?
                                                <td><img style={{ height: '8vh', width: '8vh', borderRadius: "50%" }} src={contact.googleContact.coverPhotos[0].url} /></td>:<td></td>} */}
                              {/* {contact.googleContact &&
                                                <td><img style={{ height: '8vh', width: '8vh', borderRadius: "50%" }} src={contact.googleContact.coverPhotos[0].url} /></td>} */}
                              {/* <td>profile</td> */}

                              <td className="td_checbox" id="td_hover">
                                {/* <input className="cb" name="select_test" type="checkbox"
                                >
                                </input> */}
                              </td>
                              <td>{invoice.invoiceNumber}</td>



                              <td>{invoice.contactOneTime.flag == true && invoice.contactOneTime.name ? invoice.contactOneTime.name : props.allContact.length > 0 ? props.allContact.find(x => x.email === invoice.contact) ? props.allContact.find(x => x.email === invoice.contact).name : '' : ''}</td>
                              <td>{invoice.contactOneTime.flag == true && invoice.contactOneTime.phone ? invoice.contactOneTime.phone : props.allContact.length > 0 ? props.allContact.find(x => x.email === invoice.contact) ? props.allContact.find(x => x.email === invoice.contact).phone : '' : ''}</td>
                              {/* <td>{invoice.customerName}</td>
                              <td>{invoice.customerPhone}</td> */}
                              <td className={invoice.paymentStatus === false ? "noP" : "PaU"}>
                                <div className={invoice.paymentStatus === false ? "mechilN" : "mechilY"} >
                                  {invoice.paymentStatus === false ? 'Not Paid' : 'Paid Up'}</div></td>
                              <td>{convertdate(invoice.date)}</td>
                              <td className="td_tt" id="td_hover">
                                <div className="td_side_edit_delete_copy d-flex-justify-content-center" style={{ display: "inline-block" }}>
                                  {
                                    chooselinei.isShown && chooselinei.index === invoice._id && (
                                      <div className="d-flex flex-row" style={{ display: "inline-block", width: "100%" }}>
                                        <Share fl={1} />
                                        <MdEdit id="icon" onClick={() => showInvoiceById(invoice)}></MdEdit>
                                        {/* <MdDelete id="icon" onClick={() => deleteinvoice(index, searchinvoice)} />
                                        <MdContentCopy id="icon"></MdContentCopy> */}
                                        <MdRemoveRedEye id="icon"
                                          data-toggle="collapse"
                                          data-target={"#collapsePicture" + index}
                                          aria-expanded="false"
                                          onClick={() => showInvoiceByIdAcord(invoice, index)}></MdRemoveRedEye>

                                        {/* <Share fl={1}/> */}
                                        {/* <span id="icon" className="glyphicon glyphicon-eye-open addIcon" aria-hidden="true"
                                            // onClick={() => showInvoiceById(invoice._id)}></span> */}
                                      </div>
                                    )
                                  }
                                </div>      </td>
                              {/* <div>
{invoiceDetailsView && invoiceDetailsView._id && invoiceDetailsView._id===invoice._id && <Invoice></Invoice>}
</div> */}


                            </tr>
                            {/* <tr> */}
                            {/* <td id={"flagTd" + index} colSpan={7} className="tdToggle" style={{
                              "border": "none",
                              "height": "0px",
                              "padding": "0px"
                            }}> */}
                            {/* <div className="d-flex justify-content-around">
                                <div class="collapse" id={"collapsePicture" + index} data-parent="#accordionExample">
                                  <div style={{ width: '45vw', height: '5vh', display: "inline-block", boxShadow: "0px 3px 6px #0a26b126" }}> */}
                            {/* {dispatch(actions.setInvoiceShow(invoice))} */}


                            {/* {invoiceDetailsView._id === invoice._id && <New_Invoice></New_Invoice>} */}
                            {/* </div>
                                </div>
                                </div> */}
                            {/* </td> */}
                          </>
                        )
                      })
                    }
                  </tbody>
                </table>
                <ModalToViewInvoice></ModalToViewInvoice>
              </div>
            </div >
          </div >
        </div >
      </div >

      {/* <div className="container d-flex justify-content-center mt-5 mb-5">
        <table className="table table-striped table-hover mt-3 ml-5 mr-5" responsive>‏
            <thead>
            <tr>
              <th clasaName="col">#</th>
              <th clasaName="col">invoice-number</th>
              <th clasaName="col">clientName</th>
              <th clasaName="col">clientPhone</th>
              <th clasaName="col">Payment status</th>
            </tr>
          </thead>
          <tbody>
            {getAllInvoices()}
          </tbody>
        </table>
      </div> */}
    </>

  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    // deleteinvoice:(id)=>dispatch(actions.)
  }
}

const mapStateToProps = (state) => {
  return {
    allInvoices: state.invoiceReducer.allInvoices,
    contact1: state.customerReducer.detailscontact,
    allContact: state.customerReducer.allContact,
    allproduct: state.productReducer.allProducts,
    product_object: state.productReducer.product1
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllInvoices)