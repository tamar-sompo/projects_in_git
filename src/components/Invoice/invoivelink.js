import React, { useEffect, useState } from 'react';
// import Invoice from './invoice'
import New_invoice from './new_invoices/new_invoice';


export default function Invoicelink() {
    return (
        <div className="container-fluid">
            <div className="row">

            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 ">
                    <New_invoice />
                </div>
                <div className="col-2"></div>
                {/* <div className="col -1 d-flex justify-content-end" style={{ height: "100vh" }}>
        <div onMouseEnter={handleshowSetting} onMouseLeave={handleshowSetting} className="ss d-flex align-items-center justify-content-end"  >

            {showSetting &&
                <Links></Links>}
            <Icons></Icons>
            
        </div>
    </div> */}
                {/* <div style={{ right:"0px", boxShadow: '0px 3px 6px #00000029', backgroundColor: "red",height:"100vh",width:"20vw" }}></div>   */}

            </div>
            {/* <div style={{ right:"0px", boxShadow: '0px 3px 6px #00000029', backgroundColor: "red",height:"100vh",width:"20vw" }}></div>   */}
        </div>
    )
}
