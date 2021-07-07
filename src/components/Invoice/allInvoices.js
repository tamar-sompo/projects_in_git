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
import Tooltip from '@material-ui/core/Tooltip';

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
    dispatch(actions.setDisplayBoxShadow(false))
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
 async function showInvoiceById(invoice){
    dispatch(actions.setDisplayBoxShadow(true))
    dispatch(actions.setFlagFromTable(true))
    dispatch(actions.setFlagIfEmpty(false))
    dispatch(actions.setFlagMessage(false))
    await dispatch(actions.setInvoiceSave(invoice))
    // dispatch(actions.setInvoiceSave(invoice))
    setDisplayInvoice("false")
    console.log("props.allproduct", props.allproduct)
    dispatch(actions.setDetailsContact({}))
    dispatch(actions.setInvoiceShow(invoice))
    dispatch(actions.setPDelete(['']))
    dispatch(actions.setResetAllNewProduct())
    dispatch(actions.setFlagPush(true))
    dispatch(actions.setFlagPush1(true))
    history.push(`/${userName}/invoice/edit/` + invoice._id)
  }

  useEffect(() => {
    if (flagView === true)
      setShowViewInvoiceInModal(true)
  }, [flagView])

  const showInvoiceByIdAcord = (invoice, index) => {


    setDisplayInvoice("true")
    // setFlagView(true)
    dispatch(actions.setInvoiceShow(invoice))
  }

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
  const showInvoiceByIdAcord11 = (invoice) => {
    dispatch(actions.setInvoiceShow(invoice))
  }

  const clickSearch = (value) => {
    setFlagSearch(value)
  }
  var Allinvoices = props.allInvoices;
  useEffect(() => {
    dispatch(actions.setFilteredInvoices(Allinvoices))
  }, [Allinvoices])

  const filtersearchInvoices = useSelector(state => state.invoiceReducer.filteredInvoices);
  console.log("filtersearchInvoices", filtersearchInvoices)

  const [filteredinvoices, setfilteredinvoices] = useState()
  const searchInvoices = (searchInvoice) => {

    dispatch(actions.setFilteredInvoices([]))
    var invoices = props.allInvoices
    invoices.forEach(invoice => {
      if (invoice.contactOneTime.name != undefined && invoice.contactOneTime.name.toLowerCase().indexOf(searchInvoice) > -1) {
        console.log("filteredinvoices", invoice.contactOneTime.name);
        dispatch(actions.setFilteredInvoices1(invoice))
      }
    });
  }

  const search = (result) => {
    if (result != "") {
      console.log(result);
      searchInvoices(result)
      clickSearch(true)
    }
    else {
      dispatch(actions.setFilteredInvoices(props.allInvoices))
    }
  }
  return (
    <>
      <div className="container-fluid con" style={{
        height: "86vh",
        width: "98%"
        // , borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126"
      }}>
        <div className="row ">
          <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
            <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Invoices</h1>
          </div>
          <div className="col-8 d-flex justify-content-end ">
            <div className="d-flex flex-row" style={{ display: "inline" }}
              onClick={() => clickSearch(true)}
            >
              <div>
                <input className={flagSearch === true ? "backgroundSearchClick" : "backgroundSearch"}   
                 onChange={(e) => search(e.target.value.toLowerCase())}
                  onMouseOut={() => clickSearch(false)}
                >
                </input>
              </div>
              <div className={flagSearch === true ? "SearchIconClick d-flex justify-content-center align-items-center " : "SearchIcon d-flex justify-content-center align-items-center "}>
                <BsSearch
                  style={{ color: "gray", fontWeight: "bold" }}>
                </BsSearch>
              </div>
            </div>
            <div >
              <ButtonPlus></ButtonPlus>
              {/* onClick={() => changeFlag(true)} >
              <button className="newProd11">New Invoice +</button> */}
            </div>
          </div>
        </div>
        <div className="wrap_table">
          <div className="row" style={{ backgroundColor: "#F5F5FA" }}>
            <div className="col">
              <div className="table-responsive">
                {flagLoud &&
                  <div class="d-flex justify-content-center"
                    className={flagLoud ? "d-flex justify-content-center oposity" : "d-flex justify-content-center"}>
                    <LeaderLouder></LeaderLouder>
                  </div>
                }
                <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px", marginBottom: "0rem" }}>
                  <thead style={{ backgroundColor: "#F5F5FA", opacity: "100%" }}>
                    <tr>
                      <th style={{ width: "3%", backgroundColor: "#F5F5FA" }}></th>
                      <th>CUSTOMER NAME</th>
                      <th>INVOICE NUMBER</th>
                      <th>CUSTOMER PHONE</th>
                      <th>PAYMENT STATUS</th>
                      <th>DATE</th>
                      <th style={{ width: "3%", backgroundColor: "#F5F5FA" }}></th>
                    </tr>
                  </thead>
                  <tbody >
                    {(searchby === "" || de === true) && filtersearchInvoices &&
                      filtersearchInvoices.length > 0 && filtersearchInvoices.map((invoice, index) => {
                        {/* {(searchby === "" || de === true) &&
                      props.allInvoices.length > 0 && props.allInvoices.map((invoice, index) => { */}
                        return (
                          <>
                            <tr className="tr"
                              style={{ height: "55px" }}
                              id={"flag" + index}
                              onMouseEnter={() => fff(invoice._id)}
                              onMouseLeave={() => ppp(invoice._id)}
                              key={invoice._id}>
                              <td style={{ width: "5%" }}></td>
                              <td>{invoice.contactOneTime.flag == true && invoice.contactOneTime.name ? invoice.contactOneTime.name : props.allContact.length > 0 ? props.allContact.find(x => x.email === invoice.contact) ? props.allContact.find(x => x.email === invoice.contact).name : '' : ''}</td>
                              <td>{invoice.invoiceNumber}</td>
                              <td>{invoice.contactOneTime.flag == true && invoice.contactOneTime.phone ? invoice.contactOneTime.phone : props.allContact.length > 0 ? props.allContact.find(x => x.email === invoice.contact) ? props.allContact.find(x => x.email === invoice.contact).phone : '' : ''}</td>
                              <td className={invoice.paymentStatus === false ? "noP" : "PaU"}>
                                <div className={invoice.paymentStatus === false ? "mechilN" : "mechilY"} >
                                  {invoice.paymentStatus === false ? 'Not Paid' : 'Paid Up'}</div>
                              </td>
                              <td>{convertdate(invoice.date)}</td>
                              <td className="td_tt" >
                                <div className="td_side_edit_delete_copy d-flex-justify-content-center" style={{ display: "inline-block" }}>
                                  {
                                    chooselinei.isShown && chooselinei.index === invoice._id && (
                                      <div className="d-flex flex-row" style={{ display: "inline-block", width: "100%" }}>
                                        <Share fl={1}
                                          invoiceFhone={invoice.contactOneTime.flag == true && invoice.contactOneTime.phone ? invoice.contactOneTime.phone : props.allContact.length > 0 ? props.allContact.find(x => x.email === invoice.contact) ? props.allContact.find(x => x.email === invoice.contact).phone : '' : ''} />
                                        <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Edit</p>} placement="bottom">
                                          <a style={{ height: "14px" }}>
                                            <MdEdit id="icon" onClick={() => showInvoiceById(invoice)}
                                              style={{ verticalAlign: "top", cursor: 'pointer', marginLeft: "6px" }}
                                            ></MdEdit>
                                          </a>
                                        </Tooltip>
                                        <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>View</p>} placement="bottom">
                                          <a href={`https://finance.leader.codes/${userName}/view/${invoice._id}`} target="_blank"
                                            style={{ height: "14px" }}>
                                            <MdRemoveRedEye id="icon"
                                              style={{ verticalAlign: "top", marginLeft: "5px" }}
                                              data-toggle="collapse"
                                              data-target={"#collapsePicture" + index}
                                              aria-expanded="false"
                                              onClick={() => showInvoiceByIdAcord(invoice, index)}>
                                            </MdRemoveRedEye>
                                          </a>
                                        </Tooltip>
                                      </div>
                                    )
                                  }
                                </div>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>


                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
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