import React, { useEffect, useRef, useState } from 'react';
// import './invoice.css';
import './invoiceTemp3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select'

// import {Link} from "react-router-dom";
import DigitalSignature from '../Invoice/digitalSignature';
import flowersLogo from '../../Img/flowersLogo.png';
import signature from '../../Img/signature.png'
import ReactDOM from 'react-dom';
import Untitled from '../../../src/Img/Untitled-1.jpg'

const Input = styled.input`
::placeholder {
  color: ${(props) => props.bgColor};
}
`


function InvoiceTemp2(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);


  const [borderLogo, setBorderLogo] = useState(false);

  console.log("props", props)
  // const updateinvoiceField = (fieldToUpdate) => dispatch(actions.updateInvoiceFieldAction(fieldToUpdate))
  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const allcontact = useSelector(state => state.customerReducer.allContact);
  // const changeCurrentComponent = (event) => dispatch(actions.setCurrentComponentStep(event))
  const invoiceNumber = useSelector(state => state.invoiceReducer.lastInvoice.invoiceNumber);
  const invoiceDetails = useSelector(state => state.invoiceReducer.invoice);
  const focus = useSelector(state => state.invoiceReducer.focus);
  const setFocus = (focus) => dispatch(actions.setFocus(focus))
  const companyChangesDetails = useSelector(state => state.invoiceReducer.companyChangesDetails);

  const publicNoteInvoice = useSelector(state => state.invoiceReducer.publicNote);
  const contactDetails = useSelector(state => state.customerReducer.contact);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const detailscontact = useSelector(state => state.customerReducer.detailscontact);
  // const prodactions = [...detailsInvoice.productions];

  const onLoad = () => {
    setIsLoading(true);
  }

  const onFieldChanged = (fieldName) => (e) => {
    const value = e.target.value;
    updateinvoiceField({ [fieldName]: value })
  }

  const saveItemToStore = (index, fieldChanged) => {
    // prodactions[index] = { ...prodactions[index], ...fieldChanged }
    // updateinvoiceField({ productions: prodactions });
  }

  const addItem = () => {
    // const newProdactions = [...prodactions];
    // newProdactions.push({});
    // updateinvoiceField({ productions: newProdactions });
  }

  const deleteItemFromStore = (index) => {
    // prodactions.splice(index, 1);
    // updateinvoiceField({ productions: prodactions });
  }
  const setcustomer = (e) => {

  }

  const calculateProductions = (f) => detailsInvoice.prodactions.reduce((oldVal, item) => +oldVal + +item[f], 0)

  const shortDate = new Date().toLocaleDateString()
  const convertdate = (date1) => {
    let date = new Date(date1)
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  }
  // useEffect(() => {
  //   gotTheInvoiceNumber();
  // }, [])
  return (

    <div className="wrap_invoice">
      <div className='triangle'></div>
      <header className='header-temp3 text-left align-items-left'>
        {/* <div className='logo-temp3'>{"{Your Logo}"}</div> */}
        {/* <div className="justify-content-md-left">
                  <img style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                  // placeholder={require('../../../src/Img/Untitled-1.jpg')}
                  id='userLogo-temp3'
                  // onClick={() => {changeCurrentComponent("Design")}}
                  // src='../../../src/Img/flowersLogo.png'
                  // placeholder={flowersLogo}
                  src={flowersLogo}
                  alt="Logo"
                  title="Your Logo Here"
                  onClick={() => { onLoad() }}
                  style={isLoading ? { display: "none" } : {}}
                  >
                  </img> 
                  <img style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                  id='user-logo-temp3'
                  src={props.logo}
                  alt="Logo"
                  title="Your Logo Here"
                  // onload={onLoad}
                  style={isLoading ? {} : { display: "none" }}
                  >
                  </img>  
            </div>       */}
      </header>
      <div className='main-temp3'>
        <Row className="m-0 mt-2 mb-1" >
          <input
            placeholder='Invoice Name'
            id="title-temp3"
            className='editable-temp3 text-left'
            maxlength="15"
            size="15"
            // onClick={changeCurrentComponent("Content")}
            onChange={onFieldChanged('title')}
          // style={props.colors? {placeholderColor:props.colors[2]}:{}}
          >
          </input>
        </Row>
        <Row className='m-0'>
          <Col md={8}>

            <Row className="font-weight-bold mt-1 mb-1" >

              <input
                placeholder={contactDetails ? contactDetails.name ? contactDetails.name : "Flowers" : "Flowers"}
                className={focus === 'customerName' ? 'focus-temp3' : 'editable-temp3'}
                value={companyChangesDetails.customerName}
                onChange={onFieldChanged('customerName')} />
            </Row>
            <Row >
              <input
                // placeholder={contactDetails ? contactDetails.email ? contactDetails.email : "Flowers@gmail.com" : "Flowers@gmail.com"}
                placeholder={detailsInvoice || detailscontact ? detailsInvoice.customerEmail || detailscontact.contact ?
                  detailsInvoice.customerEmail ? detailsInvoice.customerEmail : detailscontact.contact.email : "Customer's email"
                  : detailscontact.contact.email}
                type='email'
                placeholder='Flowers@gmail.com'
                className={focus === 'customerEmail' ? 'focus-temp3' : 'editable-temp3'}
                value={companyChangesDetails.customerEmail}
                onChange={onFieldChanged('customerEmail')}>
              </input>
            </Row>
            <Row >
              <input
                placeholder={contactDetails ? contactDetails.address ? contactDetails.address : "Arlozerov 2,Tel-Aviv" : "Arlozerov 2,Tel-Aviv"}
                className={focus === 'customerAddress' ? 'focus-temp3' : 'editable-temp3'}
                value={companyChangesDetails.customerAddress}
                onChange={onFieldChanged('customerAddress')}>
              </input>
            </Row>
            <Row >
              <input
                placeholder={contactDetails ? contactDetails.phone ? contactDetails.phone : "02.5864321" : "02.5864321"}
                className={focus === 'customerPhone' ? 'focus-temp3' : 'editable-temp3'}
                value={companyChangesDetails.customerPhone}
                onChange={onFieldChanged('customerPhone')}>
              </input>
            </Row>
          </Col>

          <Col md={4} className=''>
            <Row className="font-weight-bold mt-1 mb-1 ">
              {/*  */}
              <Col md={2}></Col>
              <Col md={5} className='static-temp3 text-left'>Invoice</Col>
              <Col md={5} className='static-temp3 text-right p-0'>{detailsInvoice.invoiceNumber}</Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={5} className='static-temp3 text-left'>Date:{() => convertdate(detailsInvoice.date)}</Col>
              <Col md={5}
                className='static-temp3 text-right right p-0'
                readOnly>
                {shortDate}
              </Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={5} className='static-temp3 text-left'>Due Date:{() => convertdate(detailsInvoice.dueDate)}</Col>
              <Col md={5} className='text-right p-0'>
                <Link to="Invoice/Content"
                  style={{ color: "black", border: "none" }}
                >
                  <input
                    className={focus === 'dueDate' ? 'focus-temp3' : 'editable-temp3'}
                    type="Date"
                    size="6"
                    // onClick={changeCurrentComponent("Content")}
                    onChange={onFieldChanged('dueDate')}>
                    {/* <Link to="/Design" style={{ backgroundColor: "white", border: "none" }}></Link> */}
                  </input>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>


        <Row className='mr-0 mt-4 text-left font-weight-bold tableHeader-temp3'>
          <Col md={1}>
          </Col>
          <Col md={2}>Product Name</Col>
          <Col md={2}>Description</Col>
          <Col md={2}>Unit Price</Col>
          <Col md={2}>Quantity</Col>
          <Col md={2}>Discount</Col>
          <Col md={1}></Col>
        </Row>
        <div id='table-temp3' className='text-left font-weight-bold py-4 my-4'>
          {detailsInvoice.productions &&

            detailsInvoice.productions.map((p, index) =>
              <div className={index % 2 === 0 ? '' : 'odd'}>
                <Item key={index}
                  // arrColor={props.colors}

                  {...p}
                  // {p.product}
                  onItemChanged={(fieldChanged) =>
                    saveItemToStore(index, fieldChanged)}
                  onItemDeleted={() => deleteItemFromStore(index)}
                />
              </div>)}
        </div>
        <Row className='mt-2'>
          <Col className='text-left'>
            <Row>
              <Button variant="light"
                className='plusIcon-temp3 mb-2'
              >
                <FontAwesomeIcon
                  size='1x'
                  icon={['fas', 'plus']}
                >
                </FontAwesomeIcon>
              </Button>
            </Row>
            <Row>
              <Link to="/Content" style={{ color: "black", border: "none" }}>
                <Button variant="light"
                  id='comment-temp3'
                  className={focus === 'comment' ? 'focus-temp3' : 'editable-temp3'}
                // onClick={changeCurrentComponent("Content")}
                >Comment +
                </Button>
              </Link>
            </Row>
          </Col>
          <Col md={{ span: 4, offset: 9 }} className="total text-right">
            <Row>
              {/* <Link to="/Content" style={{ color: "black", border: "none" }}> */}
              <Col md={4} className='font-weight-bold text-left'>SubTotal:</Col>
              {/* </Link> */}
              <Col md={4} className='text-right p-0'>000</Col>
            </Row>
            <Row>
              {/* <Link to="/Content" style={{ color: "black", border: "none" }}> */}
              <Col md={4} className='font-weight-bold text-left'>Discounts:</Col>
              {/* </Link> */}
              <Col md={4} className='text-right p-0'>000</Col>
            </Row>
            <Row>
              {/* <Link to="/Content" style={{ color: "black", border: "none" }}> */}
              <Col md={4} className='font-weight-bold text-left'>Taxes:</Col>
              {/* </Link> */}
              <Col md={4} className='text-right p-0'>000</Col>
            </Row>
            {/* <Row>
                <Col md={{ span: 8 }}><hr className='total-hr' /></Col>
              </Row> */}
            <Row className=' font-weight-bold'>
              {/* <Link to="/Content" style={{ color: "black", border: "none" }}> */}
              <Col md={4} className='text-left py-3 totalSum-temp3'>Total:</Col>
              {/* </Link> */}
              <Col md={4} className='text-right py-3 p-0 totalSum-temp3'>138$</Col>
            </Row>
          </Col>
        </Row>
        <Link to="/Conversion">
          <div id='signatue' className='justify-content-md-center'>
            <div>
              <DigitalSignature />
            </div>
          </div>
        </Link>
      </div>
      <footer className='footer-temp3 py-1'>
        <Row className="justify-content-md-center">
          <Col md={8} >
            <Row className="justify-content-md-center align-items-center">
              <Col md={4} className='justify-content-md-center'>
                {/* <Link to="/" */}
                <input
                  size='15'
                  className={focus === 'companyWebsite' ? 'focus-temp3 text-center' : 'editable-temp3 text-center'}
                  // placeholder={companyDetails ? companyDetails.website ? companyDetails.website : "WWW.Flowers.co.il" : "WWW.Flowers.co.il"}
                  onChange={onFieldChanged('companyWebsite')}
                  value={companyChangesDetails.companyWebsite}
                />
              </Col>
              <Col md={4} className='justify-content-md-center'>
                <input
                  size='15'
                  className={focus === 'companyAddress' ? 'focus-temp3 text-center' : 'editable-temp3 text-center'}
                  // placeholder={companyDetails ? companyDetails.address ? companyDetails.address : "Arlozerov 2,Tel-Aviv" : "Arlozerov 2,Tel-Aviv"}
                  onChange={onFieldChanged('companyAddress')}
                  value={companyChangesDetails.companyAddress}
                />
              </Col>
              <Col md={4} className='justify-content-md-center'>
                <input
                  size='15'
                  className={focus === 'companyPhone' ? 'focus-temp3 text-center' : 'editable-temp3 text-center'}
                  // placeholder={companyDetails ? companyDetails.phone ? companyDetails.phone : "03.9723456" : "03.9723456"}
                  value={companyChangesDetails.companyPhone}
                  onChange={onFieldChanged('companyPhone')} />
              </Col>
            </Row></Col></Row>
      </footer>
    </div>
  )
}

// {this.props.quote && this.props.quote.trimmedDataURLYesOrNo
// ?
// className="d-flex justify-content-center align-items-center"
// <div style={{ textAlign: "center", position: "fixed", bottom: "0", marginLeft: "58vh" }} className="d-flex justify-content-center align-items-center">
//   <label style={{ textAlign: "center", fontSize: "1.3vw", marginTop: "4vh" }}>Do you want to sign this document?</label>
//   <div style={{ height: "8vh",borderBottom:"1px solid black"}}>
//     <DigitalSignature></DigitalSignature>
//   </div>
// </div>







const productTotalCalculate = (a, b, c) => a * b - c

export const Item = (props) => {

  const dispatch = useDispatch();

  const { product, description, unitPrice, quantity, discount, total,
    onItemChanged, onItemDeleted } = props;

  const updateCell = (title) => (value) => {
    onItemChanged({ [title]: value })
  }
  const totalProductRef = useRef([]);


  useEffect(() => {
    console.log(totalProductRef)
  },
    [] // prints ref1 with the expected current  
  )

  return (
    <>
      <Row className='mr-0 ' id='row1'>
        <Col md={1} className='py-3'>
          <Button id='1'
            onClick={onItemDeleted}
            className='button4'>X</Button>
        </Col>
        {/* <Link to="/Content" > */}
        <Cell
          // value=""
          onChange={updateCell('product')}
          type="text"
        ></Cell>
        {/* </Link> */}
        <Cell
          // value=""
          onChange={updateCell('description')}
        ></Cell>
        <Cell
          // value=""
          onChange={updateCell('unitPrice')}
          type="number"
        ></Cell>
        <Cell
          // value=""
          onChange={updateCell('quantity')}
          type="number"
        ></Cell>
        <Cell
          // value=""
          onChange={updateCell('discount')}
          type="number"
        ></Cell>
        <Col md={1} className='sum-temp3' style={props.arrColor ? { backgroundColor: props.arrColor[2] } : { backgroundColor: '#F2E7E7' }}>
          {console.log('sum', props.arrColor)}
          <div className='py-3' ref={totalProductRef}>
            {productTotalCalculate(unitPrice, quantity, discount)}
          </div>
        </Col>
      </Row>
      {/* <Design111></Design111> */}
    </>
  )
}


export const Cell = (props) => {
  const { value, onChange } = props;

  return <Col className='py-3' md={2}>
    <input
      className='editable-temp3'
      maxlength="25" size="15"
      value={value}
      onChange={(e) => onChange(e.target.value)}>
    </input>
  </Col>
}


const mapStateToProps = (state) => {
  return {
    imageInvoice: state.designReducer.imageInvoice,
    logowidth: state.LogoReducer.logoDesign.logoWidth,
    logoheight: state.LogoReducer.logoDesign.logoHeight,
    borderlogo: state.LogoReducer.logoDesign.logoBorderRadiusLogo,
    logo: state.LogoReducer.logoDesign.logo,
    colors: state.invoiceReducer.colors,
    aa: state.invoiceReducer.username

  };
}
const mapDispatchToProps = (dispatch) => ({
  changeimageInvoice: (image) => dispatch(actions.setImageInvoice(image)),

})


export default connect(mapStateToProps, mapDispatchToProps)(InvoiceTemp2)