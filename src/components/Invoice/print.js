import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import Invoice from '../Invoice/new_invoices/new_invoice'
// import Invoice from './invoice.js';
import Steps from "./steps.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>hello
        <Invoice />
        {/* <Steps/> */}
      </div>
    );
  }
}

class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() =>
            <a href="#">
              <FontAwesomeIcon
                //   className='iconBtnConfig'
                size='2x'
                className='insertIcon'
                icon={['fas', 'print']}
              //onClick={() => printInvoice()}
              >
                {/* <BiPrinter /> */}
              </FontAwesomeIcon>



            </a>}
          content={() => this.componentRef}
        />

        <div style={{ display: 'none' }}> <ComponentToPrint ref={el => (this.componentRef = el)} /></div>
      </div>
    );
  }
}

export default Print;