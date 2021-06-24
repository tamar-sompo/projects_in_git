

import React, { useEffect, useRef, useState } from 'react';
import './invoice.css';
// import './invoiceTemp1.css';
import '../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select'
import $ from 'jquery'
// import {Link} from "react-router-dom";
import DigitalSignature from './digitalSignature';
import flowersLogo from '../../Img/flowersLogo.png';
import signature from '../../Img/signature.png'
import ReactDOM from 'react-dom';
import ShowCompany from '../showCompany'
// import flowerbackground from '../assets/flo.jpg'
import Untitled from '../../../src/Img/Untitled-1.jpg'
import { ListItemIcon } from '@material-ui/core';

// var sectionStyle = {
//   backgroundImage: `url(${flowerbackground})`
// };
{/* <tr  
id={"flag"+index}
data-toggle="collapse"
    data-target={"#collapsePicture" +index}
    aria-expanded="false" 

onMouseEnter={() => fff(invoice._id)} 
onMouseLeave={() => ppp(invoice._id)} 
key={invoice._id}>


<tr onMouseEnter={() => fff(invoice._id)} onMouseLeave={() => ppp(invoice._id)} key={invoice._id}>

   {console.log("contactnameee",props.contact1)}
 
 <td className="td_checbox" id="td_hover">
   <input className="cb" name="select_test" type="checkbox"
   >
   </input>
 </td>

 <td>{invoice.invoiceNumber}</td>
 <td>{props.allContact?props.allContact.find(x=>x.email===invoice.contact)?props.allContact.find(x=>x.email===invoice.contact).name:'yy':'uu'}</td>
 <td>{props.allContact?props.allContact.find(x=>x.email===invoice.contact)?props.allContact.find(x=>x.email===invoice.contact).phone:'uu':'mm'}</td>
 <td>{invoice.paymentStatus === false ? 'false' : 'true'}</td>
 <td>{convertdate(invoice.date)}</td>
 <td className="td_tt" id="td_hover">
   <div className="td_side_edit_delete_copy d-flex-justify-content-center" style={{ display: "inline-block" }}>
     {
       chooselinei.isShown && chooselinei.index === invoice._id && (
         <div className="d-flex flex-row" style={{ display: "inline-block", width: "100%" }}>
           <MdEdit id="icon" onClick={() => showInvoiceById(invoice)}></MdEdit>
           <MdDelete id="icon" onClick={() => deleteinvoice(index, searchinvoice)} />
           <MdContentCopy id="icon"></MdContentCopy>
           <MdRemoveRedEye id="icon"  onClick={() =>dispatch(actions.setInvoiceShow(invoice))} ></MdRemoveRedEye>
           
         </div>

       )
     }
   </div>      </td>

</tr>


</tr>   

 <td id={"flagTd"+index} colSpan={7} className="tdToggle" style={{
   "border": "none" ,
   "height":"0px" ,

   "padding":"0px"
 }}>
             <div className="d-flex justify-content-around">
<div class="collapse" id={"collapsePicture" +index} data-parent="#accordionExample">
<div style={{width:'45vw', height:'5vh',display: "inline-block", boxShadow: "0px 3px 6px #0a26b126"}}>

<Invoice></Invoice>
</div>
</div></div></td>
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

</> */}



const Input = styled.input`
::placeholder {
  color: ${(props) => props.bgColor};
}
`


function Invoice(props) {
  const dispatch = useDispatch();
  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const dispatchgetbusiness = () => dispatch({ type: "GET_BUSINESS_BY_ID" })
  const allcontact = useSelector(state => state.customerReducer.allContact);
  // const changeCurrentComponent = (event) => dispatch(actions.setCurrentComponentStep(event))
  const invoiceNumber = useSelector(state => state.invoiceReducer.lastInvoice.invoiceNumber);
  const invoiceDetails = useSelector(state => state.invoiceReducer.invoice);
  const focus = useSelector(state => state.invoiceReducer.focus);
  const setFocus = (focus) => dispatch(actions.setFocus(focus))
  // const companyChangesDetails = useSelector(state => state.invoiceReducer.companyChangesDetails);
  const allcontact1 = useSelector(state => state.customerReducer.allContact);
  const publicNoteInvoice = useSelector(state => state.invoiceReducer.publicNote);
  const contactDetails = useSelector(state => state.customerReducer.contact);
  const allproduct = useSelector(state => state.productReducer.allProducts);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const detailscontact = useSelector(state => state.customerReducer.detailscontact);
  const detailsBusiness = useSelector(state => state.buisnessReducer.business);
  const allInvoices = useSelector(state => state.invoiceReducer.allInvoices);
  const userName = useSelector(state => state.publicReducer.userName);
  const updatedetailsBusiness = (fieldToUpdate) => dispatch(actions.setUpdateBusiness(fieldToUpdate))
  const invoice = useSelector(state => state.invoiceReducer.invoice);
  const prodactions = [...invoice.products];
  const setInvoiceShow = ({ }) => dispatch(actions.setInvoiceShow({}))
  let productSelect=useSelector(state => state.productReducer.productSelect);
  let history = useHistory()
  const p = useSelector(state => state.displayComponents.p);
  useEffect(() => {
    // history.push("/ruthChoen/Invoice/Production")
    $(".step1").click()
    console.log("useeeeeeeeeeeeeeeeeeeeee", detailsInvoice)
    // dispatchgetbusiness()
    updateinvoiceField({ date: convertdate(new Date()) })
    // updateinvoiceField({ buisness: detailsBusiness._id })

    debugger;
    if (history.location.pathname === `/${userName}/invoice`) {
      console.log("useeeeeeeeeeeeeeeeeeeeee1111111")
      setInvoiceShow({})
    }
  }, [])


  // console.log("props", props)
  let date1 = new Date();
  const [isLoading, setIsLoading] = useState(false);

  // const updateinvoiceField = (fieldToUpdate) => dispatch(actions.updateInvoiceFieldAction(fieldToUpdate))

  const focus_steps = (url_string, num) => {
    console.log("url_string", url_string)
    window.location.href.indexOf('Invoice') != -1 &&
      history.push("/ruthChoen/Invoice/" + url_string)
    $(".step" + num).click()
  }
  const onLoad = () => {
    setIsLoading(true);
  }
  const onFieldChangeContact = (fieldName) => (e) => {
    detailscontact.contact[fieldName] = e.target.value
  }
  const onFieldChanged = (fieldName) => (e) => {

    const value = e.target.value;
    if (fieldName = "dueDate")
      updateinvoiceField({ [fieldName]: convertdate(value) })
    else
      updateinvoiceField({ [fieldName]: value })
  }
  const updatedetailsBusiness1 = (fieldName) => (e) => {
    updatedetailsBusiness({ [fieldName]: e.target.value })
  }
  const saveItemToStore = (index, fieldChanged) => {
    prodactions[index] = { ...prodactions[index], ...fieldChanged }
    updateinvoiceField({ productions: prodactions });
  }


  const addItem = () => {
    dispatch(actions.setProductSelectLimit([]))
    allproduct.map(
      function (x) {
        debugger;
        // console.log("marrrrr11rrr", x)
        console.log("p", p)
        let oo = p.find(y => y === x.name);
        if (oo == undefined) {
          console.log("hi")
         dispatch(actions.setProductSelect(x)) 
          console.log("productSelect",productSelect)
        // dispatch(actions.setProductSelect(x))  
        }

      })
console.log("productSelect5",productSelect)
    if (detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) {

      console.log("gjdkhghhfkfkfkhk", detailsInvoice.products)
      debugger;
      const newProdactions = [...detailsInvoice.products];
      // console.log("newProdactions",newProdactions)
      newProdactions.push('null');
      dispatch(actions.setProduction('null'))
      console.log("dp", invoice.products)
      // updateinvoiceField({ products: newProdactions });
    }

    //  }
    else {

      debugger;
      console.log("ghg")
      dispatch(actions.setProducts('null'));
      console.log("invoiceee", invoice)
      // focus_steps('Content', 3)
    }
  }


  // }

  const save = () => {
    dispatch(actions.setSaveInvoice(invoice))
    console.log("saveeee", invoice)
  }
  const deleteItemFromStore = (index) => {
    // let productss=[...detailsInvoice.products]
    // productss.splice(index, 1)
    if (detailsInvoice.products && detailsInvoice.products.length > 0) {
      let productSelect3id=detailsInvoice.products[index];
      let productSelect3=allproduct.find(x=>x._id===productSelect3id)
      if(p.length!==detailsInvoice.products.length){
        let prr=[...p]
        prr.map((pr,ind)=>{
           if(pr===productSelect3.name){
           console.log("ind",ind,pr)
              prr.splice(ind,1)  
               dispatch(actions.setPDelete(prr));}
        })
     }
      console.log("productss", detailsInvoice.products)
      let productss = [...detailsInvoice.products]
      productss.splice(index, 1);
      dispatch(actions.setProductionAfterDelete(productss))
    }
    else {
      
    let productSelect3id=invoice.products[index];
    let productSelect3=allproduct.find(x=>x._id===productSelect3id)
   console.log("productSelect3",productSelect3)
  //  dispatch(actions.setPDelete(productSelect3.name))
  //  console.log("productSelect3",productSelect3.name)
   console.log("productSelect3",p)
   console.log("tammmm",p.length,invoice.products.length)
   if(p.length!==invoice.products.length){
   let prr=[...p]
   prr.map((pr,ind)=>{
      if(pr===productSelect3.name){
      console.log("ind",ind,pr)
         prr.splice(ind,1)  
          dispatch(actions.setPDelete(prr));}
   })
}
    //  dispatch(actions.setProductSelect(productSelect3))
      console.log("productSelect2",productSelect)
      let productss = [...invoice.products]
      console.log("productss1111", productss)
      productss.splice(index, 1)
      console.log("productss", productss)
      dispatch(actions.setProductAfterDelete(productss))

    }
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

  return (
    <>
      {/* {console.log("invoice", invoice)}
      {console.log("detailsBusiness", detailsBusiness)}
     {console.log("invoiceee",invoice)}  */}
      <div className="wrap_invoice">
        <div id="bgImg" style={{ backgroundImage: `url(${props.imageInvoice})` }}>
          <Container className="main-temp1">

            <Row className="justify-content-md-center py-3" onClick={() => focus_steps('Design', 2)}>

              <img style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                // placeholder={require('../../../src/Img/Untitled-1.jpg')}
                id='userLogo-temp1'
                // onClick={() => {changeCurrentComponent("Design")}}
                // src='../../../src/Img/flowersLogo.png'
                // placeholder={flowersLogo}
                src={flowersLogo}
                alt="Logo"
                title="Your Logo Here"
                onClick={() => { onLoad() }}
              // style={isLoading ? { display: "none" } : {}}
              >
              </img>
              <div
              // style={{ width: props.logowidth, borderRadius: props.borderlogo }}
              // id='user-logo'
              // src={props.logo}
              // alt="Logo"
              // title="Your Logo Here"
              // onload={onLoad}
              // style={isLoading ? {} : { display: "none" }}
              >
              </div>

            </Row>
            <Row className="justify-content-md-center mb-0">
              <Col md={8} >
                <Row onClick={() => focus_steps('Production', 1)}>
                  <Col md={4}>
                    <input
                      size='15'
                      className={focus === 'companyWebsite' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                      placeholder={detailsBusiness && detailsBusiness.socialmedias ? detailsBusiness.socialmedias.website ? detailsBusiness.socialmedias.website : "business website" : "business website"}
                      //placeholder={detailsBusiness ? detailsBusiness.phone ? detailsBusiness.phone : "business phone" : "business phone"}
                      onClick={() => setFocus('companyWebsite')}
                      onBlur={updatedetailsBusiness1('website')}
                      // onChange={('companyWebsite')}
                      // value={companyChangesDetails.companyWebsite}
                      // value={invoice.companyWebsite}
                      value={detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website}
                    />
                  </Col>

                  <Col md={4}>
                    <input
                      size='15'
                      className={focus === 'companyAddress' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                      placeholder={detailsBusiness ? detailsBusiness.address ? detailsBusiness.address : "business Address" : "business Address"}
                      onClick={() => setFocus('companyAddress')}
                      onBlur={updatedetailsBusiness1('address')}
                      // onChange={('companyWebsite')}
                      // value={companyChangesDetails.companyWebsite}
                      // value={invoice.companyAddress}
                      value={detailsBusiness && detailsBusiness.address}
                    />
                  </Col>
                  <Col md={4}>
                    {/* <Link to="/" */}
                    <input
                      size='15'
                      className={focus === 'companyPhone' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                      placeholder={detailsBusiness ? detailsBusiness.phone ? detailsBusiness.phone : "business phone" : "business phone"}
                      onClick={() => setFocus('companyPhone')}
                      onChange={onFieldChanged('companyWebsite')}
                      onBlur={updatedetailsBusiness1('phone')}
                      // onChange={('companyWebsite')}
                      // value={companyChangesDetails.companyWebsite}
                      // value={invoice.companyPhone}
                      value={detailsBusiness && detailsBusiness.phone}
                    />
                  </Col>
                </Row></Col></Row>
            <Row className="justify-content-center align-items-center">
              <Col md={9}>
                <hr
                  style={props.colors ? { backgroundColor: props.colors[1] } : {}}
                />
              </Col>
            </Row>
            <Row className="my-5"></Row>
            <Row className='m-0'>
              <Col md={8} className='' onClick={() => focus_steps('Production', 1)}>
                <Row className='static-temp1'>To:</Row>
                <Row className="font-weight-bold mt-1 mb-1">
                  {/* detailsInvoice || detailscontact ?detailsInvoice.customerName|| detailscontact.contact 
              ? detailsInvoice.customerName?detailsInvoice.customerName:detailscontact.contact.name:"Customer's name"
              :detailscontact.contact.name */}
                  {console.log("detailsss", detailsInvoice)}
                  {console.log("detailssscontact", detailscontact)}
                  {console.log("detailssscontact", detailsInvoice && !detailscontact)}
                  {/* detailsInvoice?detailscontact?detailscontact.contact.name:detailsInvoice.customerName?
              detailsInvoice.customerName:"Customer's name":detailscontact?detailscontact.contact.name:"Customer's name" */}

                  <input
                    // placeholder={contactDetails ? contactDetails.name ? contactDetails.name : "Flowers" : "Flowers"}
                    placeholder={
                      detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).name : "Customer's name" : "Customer's name" :
                        detailsInvoice ? detailscontact.contact.name : detailscontact.contact ? detailscontact.contact.name : "Customer's name"}
                    className={focus === 'customerName' ? 'focus-temp1' : 'editable-temp1'}
                    onClick={() => setFocus('customerName')}
                    value={detailscontact && detailscontact.contact && detailscontact.contact.name}
                    ConBlur={onFieldChangeContact('name')}
                  // onChange={onFieldChanged('customerName')}
                  />
                </Row>
                <Row >
                  <input
                    // placeholder={contactDetails ? contactDetails.email ? contactDetails.email : "Flowers@gmail.com" : "Flowers@gmail.com"}
                    placeholder={
                      detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).email : "contact_email" : "contact_email" :
                        detailsInvoice ? detailscontact.contact.email : detailscontact.contact ? detailscontact.contact.email : "contact_email"}
                    type='email'
                    className={focus === 'customerEmail' ? 'focus-temp1' : 'editable-temp1'}
                    value={detailscontact && detailscontact.contact && detailscontact.contact.email}
                    onBlur={onFieldChangeContact('email')}
                  >
                  </input>
                </Row>

                <Row >
                  <input
                    // detailsInvoice?detailsInvoice.customerPhone? detailsInvoice.customerPhone:"xxxx":"xxxx"
                    // placeholder={contactDetails ? contactDetails.phone ? contactDetails.phone : "02.5864321" : "02.5864321"}
                    placeholder={detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).phone : "contact_phone" : "contact_phone" :
                      detailsInvoice ? detailscontact.contact.phone : detailscontact.contact ? detailscontact.contact.phone : "contact_phone"}
                    className={focus === 'customerPhone' ? 'focus-temp1' : 'editable-temp1'}
                    value={detailscontact && detailscontact.contact && detailscontact.contact.phone}
                    onChange={onFieldChanged('phone')}>
                  </input>
                </Row>
                <Row >
                  <input
                    // detailsInvoice?detailsInvoice.customerAddress? detailsInvoice.customerAddress:"xxxx":"xxxx"
                    // placeholder={contactDetails ? contactDetails.address ? contactDetails.address : "Arlozerov 2,Tel-Aviv" : "Arlozerov 2,Tel-Aviv"}
                    placeholder={detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).phone : "contact_adrress" : "contact_adrress" :
                      detailsInvoice ? detailscontact.contact.address : detailscontact.contact ? detailscontact.contact.address : "contact_adrress"}
                    className={focus === 'customerAddress' ? 'focus-temp1' : 'editable-temp1'}
                    value={detailscontact && detailscontact.contact && detailscontact.contact.address}
                    onChange={onFieldChangeContact('address')}>
                  </input>
                </Row>
              </Col>
              <Col md={4} className='' onClick={() => focus_steps('Content', 3)}>
                <Row ><br /></Row>
                <Row className="font-weight-bold mt-1 mb-1 ">
                  {/*  */}
                  {/* <Col md={2}></Col> */}
                  <Col md={6} className='static-temp1 text-left'>Invoice</Col>
                  <Col md={6} className='static-temp1 text-right p-0'>{detailsInvoice.invoiceNumber ? detailsInvoice.invoiceNumber : allInvoices.length + 1}</Col>
                </Row>
                <Row>
                  {/* <Col md={2}></Col> */}
                  <Col md={6} className='static-temp1 text-left'>Date:{() => convertdate(detailsInvoice.date)}</Col>
                  <Col md={6}
                    className='static-temp1 text-right right p-0'
                    readOnly>
                    {shortDate}
                  </Col>
                </Row>
                <Row>
                  {/* <Col md={2}></Col> */}
                  <Col md={6} className='static-temp1 text-left'> Due Date:</Col>
                  <Col md={6} className='text-right p-0'>

                    <input
                      className={focus === 'dueDate' ? 'focus-temp1' : 'editable-temp1'}
                      type="date"
                      size="6"
                      defaultValue={new Date()}
                      // onClick={changeCurrentComponent("Content")}
                      onChange={onFieldChanged('dueDate')}>
                      {/* <Link to="/Design" style={{ backgroundColor: "white", border: "none" }}></Link> */}
                    </input>

                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              // id='invoiceName' 
              className="font-weight-bold  justify-content-md-center py-5 mt-3 mb-3" onClick={() => focus_steps('Content', 3)}
            >

              <input
                placeholder='Invoice Name'
                id='title-temp1'
                className={focus === 'invoiceName' ? 'focus-temp1' : 'editable-temp1'}
                maxlength="15"
                onChange={onFieldChanged('title')}
                bgColor={props.colors ? props.colors[2] : 'black'}
              >
              </input>

              <Button
                className='button4'>
              </Button>
            </Row>
            <Row className='mr-0 text-left font-weight-bold'>
              <Col md={1}>
              </Col>
              <Col md={2}>Product Name</Col>
              <Col md={2}>Description</Col>
              <Col md={2}>Unit Price</Col>
              <Col md={2}>Quantity</Col>
              <Col md={2}>Discount</Col>
              <Col md={1}></Col>
            </Row>
            <div id='table-temp1' className='text-left font-weight-bold py-4'>
              {detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ?
                detailsInvoice.products.map((p, index) =>
                  <Item key={index} pro={p}
                  productSelect={productSelect}
                    onItemChanged={(fieldChanged) =>
                      saveItemToStore(index, fieldChanged)}
                    onItemDeleted={() => deleteItemFromStore(index)} />) :
                invoice.products.map((p, index) =>
                  <Item key={index} 
                  productSelect={productSelect}
                    pro={p}
                    onItemChanged={(fieldChanged) =>
                      saveItemToStore(index, fieldChanged)}
                    onItemDeleted={() => deleteItemFromStore(index)} />)}
            </div>

            <Row className='mt-2'>
              <Col className='m-0 p-0'>
                <Row>
                  <Button variant="light"
                    className='plusIcon-temp1 mb-2'
                    onClick={addItem} >
                    <FontAwesomeIcon
                      size='1x'
                      icon={['fas', 'plus']}
                    >
                    </FontAwesomeIcon>
                  </Button>
                </Row>
                <Row>
                  <Button variant="light"
                    id='comment-temp1'
                    className={focus === 'comment' ? 'focus-temp1' : 'editable-temp1'}
                  // onClick={changeCurrentComponent("Content")}         
                  >
                    Comment +
                                   </Button>
                </Row>
              </Col>

              <Col md={{ span: 4, offset: 9 }} className="total-temp1 text-right">
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
                <Row className=' font-weight-bold'>
                  {/* <Link to="/Content" style={{ color: "black", border: "none" }}> */}
                  <Col md={4} className='totalSum-temp1 text-left pt-4'>Total:</Col>
                  {/* </Link> */}
                  <Col md={4} className='totalSum-temp1 text-right pt-4 p-0'>138$</Col>
                </Row>
              </Col>
            </Row>
            <div id='signatue' className='justify-content-md-center'>
              <div>
                <DigitalSignature />
              </div>
            </div>
          </Container>
          {/* <Setting></Setting> */}
        </div>
      </div>
      <button style={{ backgroundColor: "red" }} onClick={save}></button>
    </>
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



// export const Cell1 = (props) => {  
//   console.log("cell1")
//   const [flag,setFlag]=useState(true)
//   const allproduct=useSelector(state => state.productReducer.allProducts);
//   const set_product=(e)=>{

//     console.log("productssss",e)
//     setFlag(false)
//     //  return <Item></Item>
//   }
//   return (
//     <>
//     {console.log("nhhhhh",flag)}
//     {flag==false &&<Item></Item>}

//   <Col className='py-3' md={2}>
//           <Select onChange={(e)=>set_product(e)} options={allproduct.map((contact)=>{return({
//             "label":contact.name,
//             "value":contact
//      })})} />
//   </Col>
//   </>)
// }



const productTotalCalculate = (a, b, c) => a * b - c
// export const Hi = () => {
//   // console.log("hiiii")
// }

export const Item = (props) => {

  const p = useSelector(state => state.displayComponents.p);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const invoice = useSelector(state => state.invoiceReducer.invoice)
  const allproduct = useSelector(state => state.productReducer.allProducts);
  // const productSelect1 = useSelector(state => state.productReducer.productSelect);
  // let productSelect1=[]

  console.log("allproductctctctc", allproduct)
  // const set_product=(e)=>{
  //    debugger;
  //   console.log("productssss",e)
  //   dispatch(actions.setProduction(e.value))
  //  return <Item></Item>
  // }
  console.log("", props)

  const vv2 = (e) => {
    dispatch(actions.setP(e.value.name))
    console.log("evaluename", p)
    console.log("tamar11", invoice.products.length)
    dispatch(actions.deleteLastProductInvoice());
    console.log("tamar", invoice.products.length)
    dispatch(actions.setProducts(e.value._id));
    console.log("yyyyyy", invoice.products)

  }
  const vv = (e) => {
    dispatch(actions.setP(e.value.name))
    console.log("hereeee")
    dispatch(actions.deleteLastProduct());
    dispatch(actions.setProduction(e.value._id))
    dispatch(actions.setInvoceShow(detailsInvoice))
  }
  const [prod, setProd] = useState()
  // console.log("ggpropsgg",props);
  const { vvv } = props
  // console.log("vvv",vvv);
  const dispatch = useDispatch();
  const {
   
    onItemChanged, onItemDeleted,productSelect } = props;
    // console.log("mumumuuuuuuuuu",mumumuuuuuuuuu)

  const updateCell = (title) => (value) => {
    onItemChanged({ [title]: value })
  }
  const totalProductRef = useRef([]);

  // const searchP=(e)=>
  // {
  //   debugger;
  //   console.log("allpr",allproduct)
  //   let val=e.target.value.toLowerCase();

  //   allproduct.filter(product=>(product.name!=null && product.name.toLowerCase().includes(val)))
  //   .map(
  //     product1=> 
  //     {return(
  //       console.log("marushhh",product1) &&
  //       <h1>{product1.name}</h1>
  //     )}
  //   )
  // }
  useEffect(() => {
  
    console.log("props.pro", props.pro)
    if (props.pro != "null") {
      setProd(allproduct.find(x => x._id === props.pro))
      console.log("prod", prod)
    }
    console.log("totalProductRef")
  } // prints ref1 with the expected current  
  )

  // const hhh=(key)=>{
  //   console.log("key",key)
  //   let addp=allproduct.find(x=>x._id==key);
  //   console.log("addp",addp)
  //   onItemDeleted()
  //   productSelect.push(addp)
  // }
  return (

    <>

      {/* {console.log("rrrr", props)} */}
      <Row className='mr-0 ' id='row1'>
        <Col md={1} className='py-3'>
          <Button id='1'
            onClick={onItemDeleted}
            className='button4'>X</Button>

        </Col>
        {/* {props.allproduct.find(x=>x.id==props.id)} */}
        {props.pro == "null" ?
        
          <Col>
            <Select className="select_p" onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv2(e)} options={productSelect.map((x)=>{
           return ({
                    "label": x.name,
                    "value": x
                  })
})}

            /></Col>
          :
          <Cell
            value={prod && prod.name}
            onChange={updateCell('product')}
            type="text"
          > </Cell>}

        {/* </Link> */}
        <Cell
          value={prod && prod.description}
          onChange={updateCell('description')}
        ></Cell>
        <Cell
          value={prod && prod.price}
          onChange={updateCell('unitPrice')}
          type="number"
        ></Cell>
        <Cell
          value={prod && prod.amount}
          onChange={updateCell('quantity')}
          type="number"
        ></Cell>
        <Cell
          // value={prod.discount}
          onChange={updateCell('discount')}
          type="number"
        ></Cell>
        <Col md={1} className='sum' style={props.arrColor ? { backgroundColor: props.arrColor[2] } : { backgroundColor: '#F2E7E7' }}>
          {/* {console.log("sum",props.arrColor)}*/}
          <div className='py-3' ref={totalProductRef}>
            {/*{productTotalCalculate(unitPrice, quantity, discount)}*/}
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
      className='editable-temp1 cell'
      maxlength="15" size="7"
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
    // aa: state.invoiceReducer.username,
    allproduct: state.productReducer.allProducts
  };
}
const mapDispatchToProps = (dispatch) => ({
  changeimageInvoice: (image) => dispatch(actions.setImageInvoice(image)),

})


export default connect(mapStateToProps, mapDispatchToProps)(Invoice)