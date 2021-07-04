// import React, { useState, useEffect } from 'react'
// import { Form } from 'react-bootstrap'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import './invoice.css'
// import './conversion.css'
// import '../SideConfig/configurator/config.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../../redux/actions/All_actions';
// import { BiPrinter } from "react-icons/bi";
// import Print from '../Invoice/print';
// import SuccessIcon from '../SaveObjects/Artboard – 2.png'
// import Modal from 'react-modal';
// import PdfModal from '../Pdf/pdfModal';
// import publicReducer from '../../redux/reducers/publicReducer';

// export default function Conversion() {



//   const dispatch = useDispatch();
//   const [invoiceUrl, setInvoiceUrl] = useState('');
//   const [pdfDisplay, setPdfDisplay] = useState(false);
//   console.log("pdfDisplay", pdfDisplay)
//   const ref = React.createRef();
//   const sendEmail = () => dispatch(actions.setSendLinkToEmail())
//   // const sendEmail = () => dispatch(actions.setSendLinkToEmail())
//   const detailscontact = useSelector(state => state.customerReducer.detailscontact);
//   const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);
//   const allcontact1 = useSelector(state => state.customerReducer.allContact);
//   const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
//   const userName = useSelector(state => state.publicReducer.userName)
//   const [url, setUrl] = useState("")
//   const [phonContact, setPhonContact] = useState("")
//   const setIslevel = (level) => dispatch(actions.setIsLevel(level))
//   useEffect(() => {
//     setIslevel(3)
//     if (invoiceSave && invoiceSave.invoice && invoiceSave.invoice.contact) {
//       let objectontact = allcontact1.find(x => x.email == invoiceSave.invoice.contact)
//        ;
//       if (objectontact && objectontact.phone) {

//         setPhonContact(objectontact.phone)
//         setUrl(`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id}`)
//       }
//     }
//   }, [allcontact1])
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
//   return (<>
//     <div className="warp-conversion">
//       {pdfDisplay === true && <PdfModal setPdfDisplay={setPdfDisplay} />}
//       <div className='box text-center top'>
//         <div >We're Done</div>
//       </div>
//       <div className='box text-center main'>
//         <div class="p-2 col-6 row">
//           <div className='col-4'></div>
//           <div className='col-8'>
//             <div className='row'>
//               <div className='btnConfig  col-md-10 text-left'>
//                 Save Tamplate
//                 </div>
//               <Form className='text-right col-md-2'>
//                 <Form.Check
//                   type="switch"
//                   id="saveTemplateSwitch"
//                   label=""
//                   size='5'
//                 // value="end" 
//                 />
//               </Form>
//             </div>
//             <div className='row'>

//               <div className='col-md-10 btnConfig text-left'>

//                 Customer signature
//                 </div>
//               <Form className='text-right col-md-2'>
//                 <Form.Check
//                   type="switch"
//                   id="customerSignatureSwitch"
//                   label=""
//                   size='5'
//                 // value="end" 
//                 />
//               </Form>
//             </div>
//             <div className='row'>
//               <div className='btnConfig  col-md-10 text-left'>
//                 Export:
//                 </div>
//             </div>
//             <div className='row justify-content-center'>
//               <div className='borderIcon d-flex align-items-center justify-content-center  m-auto'>
//                 <FontAwesomeIcon
//                   size='2x'
//                   className='insertIcon'
//                   icon={['fas', 'envelope']}
//                   onClick={() => sendEmail()}
//                 />
//               </div>
//               <div className='borderIcon d-flex align-items-center justify-content-center  m-auto'>
//                 <a href={`https://wa.me/${phonContact}?text=${url}`} target="_blank" >
//                   {/* <a href={`https://wa.me/${phonContact}?text=${url}`} target="_blank" >  */}
//                   <FontAwesomeIcon
//                     size='2x'
//                     className='insertIcon font-weight-bold'
//                     icon={['fab', 'whatsapp']}
//                   />
//                 </a>
//               </div>
//               <div className='borderIcon d-flex align-items-center justify-content-center m-auto'>
//                 <FontAwesomeIcon
//                   className='insertIcon'
//                   onClick={(e) => setPdfDisplay(true)}
//                   size='2x'
//                   icon={['fas', 'file-pdf']}
//                 />
//               </div>
//               <div className='borderIcon d-flex align-items-center justify-content-center m-auto'>
//                 <FontAwesomeIcon
//                   size='2x'
//                   className='insertIcon'
//                   icon={['fas', 'print']}
//                   onClick={() => printInvoice()}><BiPrinter style={{ color: '#917BDF' }} />
//                 </FontAwesomeIcon>

//                 {/* <Print /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="p-2 m-auto col-6 img">
//           {/* img */}
//           {/* <img src={SuccessIcon}style={{width:'25%',height:'25%'}}/> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   </>)
// }