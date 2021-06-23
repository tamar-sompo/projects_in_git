import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Invoice from '../Invoice/new_invoices/new_invoice'
// import Invoice from './invoice';
 
export const PdfContainer=()=> {

    const bodyRef = React.createRef();
    const createPdf = () => {
    // props.createPdf(bodyRef.current, emailRef.current.value);
  }
  return (
    <section className="pdf-container">
 	 {/* <button type="button" class="btn btn-primary"
 onClick={() => createPdf()} > export pdf!</button>   */} 
                      <FontAwesomeIcon
                        className='insertIcon'
                        onClick={() => createPdf()}
                        // onClick={()=>modalPDF}
                        size='2x'
                        icon={['fas', 'file-pdf']}
                       />
   <section className="pdf-body" ref={bodyRef}>
        <Invoice/>
      </section>
    </section>
  )
}
