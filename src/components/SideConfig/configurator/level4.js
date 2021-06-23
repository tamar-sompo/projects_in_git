// import React, { useState } from 'react';
// import './config.css';

// import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../../../redux/actions/All_actions';
// import { Col, Row, Container, Button } from 'react-bootstrap'
// // import ImageList from '@material-ui/core/ImageList';


// import { Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { BiPrinter } from "react-icons/bi";
// import Pdf from "react-to-pdf";
// import AddInvoiceOtomat from './addInvoiceOtomat';
// import Invoice from '../../Invoice/invoice';
// import { PdfInvoice } from './pdfInvoice';
// import PdfModal from '../../Invoice/pdfModal';


// export function Conversion(props) {

//   const dispatch = useDispatch();
//   const [invoiceUrl, setInvoiceUrl] = useState('');
  
//   const pdfRef= React.createRef();
 

//   const sendEmail = (url) => dispatch(actions.setSendLinkToEmail(url))
//   const invoiceDetails = useSelector(state => state.invoiceReducer.invoice);
//   const saveInvoiceToStore = (invoiceDetails) => dispatch(actions.setSaveInvoice(invoiceDetails))
//   const buisness = useSelector(state => state.buisnessReducer.currentBuisness)

//   const printInvoice = () => {
//     let printWindow = window.open(
//       'Print',
//       'left=200',
//       'top=400',
//       'width=950',
//       'height=500',
//       'toolbar=0',
//       'resizable=0'
//     );
//     printWindow.addEventListener('load', () => {
//       printWindow.print();
//     }, true);
//   }
//   const invoiceNumber=useSelector(state => state.invoiceReducer.invoiceNumber);
//   const [pdfDisplay, setPdfDisplay] = useState(false);
//   return (
//     <>
//     <AddInvoiceOtomat></AddInvoiceOtomat>
//       <div 
//         className="container-fluid" 
//         // ref={pdfRef}
//         style={{
//             // borderRadius: "5px",
//             margin: "0 auto",
//             padding: "10mm"
//           }}
//       >
//          {pdfDisplay===true&&<PdfModal setPdfDisplay={setPdfDisplay}/>}
//       <div className='row pl-3 ml-4 mr-5 mb-3'>
//         <div className='btnConfig mr-3 text-left col-md-9'>
//           Save Tamplate
//     </div>
//         <Form className='text-right col-md-2'>
//           <Form.Check
//             type="switch"
//             id="custom-switch"
//             label=""
//             size='5'
//             onClick = {() => {saveInvoiceToStore()}} 
//           />
//         </Form>
//       </div>
//       <div className='row pl-3 ml-4 mr-5 mb-3'>
//         <div className='col-md-9 btnConfig mr-3 text-left'>
//           Customer signature
//     </div>
//         <Form className='text-right col-md-2'>
//           <Form.Check
//             type="switch"
//             id="custom-switch"
//             label=""
//             size='5' 
//           />
//         </Form>
//       </div>
//       <Row className='pl-3 ml-4 mr-5 mb-3'>
//         <div className='col-md-9 btnConfig mr-3 text-left'>
//           Export:
//       </div>
//       </Row>
//       <div className='row justify-content-center pl-3 ml-4 mr-3 mb-3'>
//         <div className='col-md-3'> 
//         <FontAwesomeIcon
//             // className='col-md-3 icon4 text-left iconBtnConfig'
//             size='2x'
//             icon={['fas', 'envelope']}
//             className='iconBtnConfig'
//             onClick={() => sendEmail(window.location.href)}
//             />
//           </div>
//          <div className='col-md-3 icon4 text-left'>
         
         
//             <FontAwesomeIcon
//               className='iconBtnConfig font-weight-bold'
//               size='2x'
//               icon={['fab', 'whatsapp']} 
//               />
//           {/* </a> */}
//         </div>
//             <div className='col-md-3'>
//               {/* <Pdf targetRef={pdfRef} filename={filename}>
//                 {({ toPdf }) => */}
//                   <FontAwesomeIcon
//                     // onClick={toPdf}
//                     onClick={(e)=>setPdfDisplay(true)}
//                     size='2x'
//                     className='iconBtnConfig'
//                     // className='col-md-3 icon4 text-left iconBtnConfig'
//                     icon={['fas', 'file-pdf']}
//                   />
//                   {/* }
//               </Pdf> */}
//         </div>
//         <div className='col-3' >
//         <FontAwesomeIcon
//           size='2x'
//           icon={['fas', 'print']}
//           className='iconBtnConfig'
//           onClick={() => printInvoice()}>
//             {/* <BiPrinter /> */}
//         </FontAwesomeIcon>
//         </div>
//       </div>
//     </div>
//     </>);
// }