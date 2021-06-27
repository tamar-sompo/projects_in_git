import React, { useRef } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import { useReactToPrint } from 'react-to-print';
import InvoiceShow from '../Invoice/invoiceShow';

import { Icon } from '@iconify/react';
import { BiPrinter } from "react-icons/bi";
import whatsappIcon from '@iconify-icons/mdi/whatsapp';
import gmailIcon from '@iconify-icons/mdi/gmail';
import Pdf from "react-to-pdf";

const ref = React.createRef();



function ExportInvoice(props) {
  const d = props.invoiceDetailsView;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const sendEmail = (viewUrl) => {
    console.log("mail")
    var url = viewUrl
    console.log("url", url)
    // var userName = (url.pathname.split('/')[1]);
    var userName = "ruthCohen"
    console.log("userName", userName)
    var mailTo = "r0527645207@gmail.com";
    // var mailTo = props.contact.email;
    // console.log("mailTo", mailTo)
    fetch('https://finance.leader.codes/' + userName + '/sendEmail', {
      method: 'POST',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
        Accept: 'appylication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "body": url, "mailTo": mailTo, "from": userName + "@leader.codes"
        , "subject": "Your Tax-Invoice"
      }),
    })
      .then((res) => res.json()).then((resJson) => {
        console.log("resJsonFromSendEmail", resJson)
        // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
        // dispatch({ type: "SET_ALERTSTATUSE", payload: 5 });
      })
      .catch((err) => {
        console.log(err)
        // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
      })
  }

  // const printInvoice = () => {
  //   console.log("inPrint")
  //   let printWindow = window.open(
  //     'Print', 
  //             'left=200', 
  //             'top=400', 
  //             'width=950', 
  //             'height=500', 
  //             'toolbar=0', 
  //             'resizable=0'
  //   );
  //   printWindow.addEventListener('load', () => {
  //     printWindow.print();
  // }, true);
  // }

  return (
    <>
      <div>
        <InvoiceShow ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
      <div className="container-fluid" ref={ref} style={{
        borderRadius: "5px",
        // width: "650px",
        // height: "800px",
        margin: "0 auto",
        padding: "10mm"
      }}>
        <div className="row">
          <div className="icon-bar">
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <button onClick={toPdf}
                className="btn btn-lg btn-link clearfix btn-lg"><span className="fa fa-file-pdf-o" style={{ color: 'gray' }} title="Export Pdf"
                  id="iconExport"></span></button>}
            </Pdf>
            <button
              className="btn btn-lg btn-link clearfix btn-lg">
              <span style={{ color: 'gray' }} title="Print" id="iconExport"
              //  onClick={() => printInvoice()}><BiPrinter/>
              ><BiPrinter />
              </span>
            </button>
            <button title="Whatsapp" className="btn btn-lg btn-link clearfix btn-lg">
              <a href={`https://wa.me/${+972587246207}?text=${d.invoiceNumber}`} style={{ color: 'gray' }}>
                <Icon icon={whatsappIcon} id="iconExport">
                </Icon>
              </a></button>
            <button onClick={() => sendEmail(window.location.href)} type="button"
              className="btn btn-lg btn-link clearfix btn-lg">
              <span style={{ color: 'gray' }} title="Send To Email"><Icon icon={gmailIcon} id="iconExport" />
              </span>
            </button>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const mapStateToProps = (state) => {
  return {
    invoiceDetailsView: state.invoiceReducer.invoiceDetailsView,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExportInvoice)







