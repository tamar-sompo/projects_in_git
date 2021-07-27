
// import React from 'react';

// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// import { actions } from '../../redux/actions/All_actions';
// import { makeStyles } from '@material-ui/core/styles';
// // import './pdfModal.css'

// import Modal from '@material-ui/core/Modal';
// import Pdf from "react-to-pdf";
// import Invoice from '../Invoice/invoice';

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
//     // const right = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'absolute',
//         width: 1000,
//         // height: 900,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

// export default function PdfModal(props) {
//     const dispatch = useDispatch();
//     const invoiceNumber = useSelector(state => state.invoiceReducer.invoiceNumber);
//     const invoice = useSelector(state => state.invoiceReducer.invoice);
//     const filename = invoiceNumber + "invoice.pdf"
//     const ref = React.createRef();
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);
//     const { setPdfDisplay } = props

//     useEffect(() => {
//         dispatch(actions.setInvoiceShow(invoice))
//           'invoice lea', invoice)
//         handleOpen()
//     }, [])

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//         setPdfDisplay(false)
//     };

//     return (
//         <div>
//             <Modal 
//             // className="d-flex justify-content-center"
//             style={{paddingLeft:"30%"}}
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//             >
//                 <div style={modalStyle} className={classes.paper}>
//                     <div ref={ref}>
//                         <Invoice />
//                     </div>
//                     <Pdf targetRef={ref} filename={filename}>
//                         {({ toPdf }) =>
//                             <button className="d-flex justify-content-center pdfButton btn-lg" type="button" onClick={toPdf}>
//                                 download PDF
//                 </button>
//                         }</Pdf>
//                 </div>
//             </Modal>
//         </div>
//     );
// }