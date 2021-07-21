
import React, { useEffect } from 'react';
// import Header from './header/header';
// import Body from './body';
import Nav from './nav_top';
import Conversion from '../notUse/conversion';
// import Conversion from '../Invoice/conversion';
import Configurator from './new_configurator';
// import Nav_Right from './nav_right';
import AllInvoices from '../Invoice/allInvoices';
import Products from '../product/products';
import SettingBuisnessForm from '../forms/settingBusinessFrom';

// import createContact from '../Invoice/createContact';
// import Customers from '../customers/cutomers';
// import InvoiceShow from '../Invoice/invoiceShow';
// import ButtonSave from './buttonSinave'
// import Icons from './icons'
// import Links from './links'
import { useDispatch, useSelector } from 'react-redux';

// import { useLocation } from 'react-router-dom'


// import Invoice from '../Invoice/invoice';
import Invoice from '../Invoice/new_invoices/new_invoice'
import InvoiceAndSteps from '../Invoice/invoiceAndSteps';
import HomePage from '../Invoice/HomePage/home.js';
import BuisnessForm from '../forms/buisnessForm.js';
import Contactsiframe from '../customers/contactiframe.js';
import MassageFormat from '../Useful/messageFormat'
import MessageProduct from '../product/messageProduct'
import { actions } from '../../redux/actions/All_actions';
import './fiances.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// import ContactForm from '../forms/cotactForm';
import Business from '../Invoice/Business/business';
import ProtectedRoute from '../Useful/protected';
import $ from 'jquery';
import MessageSave from '../Invoice/messageSave'
import Payments from '../Payments/payments.js'
import ModalNameInvoice from '../Invoice/modalNameInvoice'


export default function Fiances() {
    // const Location = useLocation()
    const dispatch = useDispatch();

    let TokenToString = document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
        .filter(s => s.includes('devJwt'))[0].split("=").pop() : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJoY2h5U0VBZ1hFTmdvTnJTZ1ZMMWE4RTBrY3UxIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxMzI3MDg3fQ.MzgoqDOF_jMhJxa8BY5z7zFhMlka4fPzGYEL8opO_U4";
    dispatch(actions.setTokenFromCookies(TokenToString))


    const show = useSelector(state => state.designReducer.show);
    const displayBoxShadow = useSelector(state => state.invoiceReducer.displayBoxShadow);
    const isSendMessage = useSelector(state => state.exportInvoiceReducer.isSendMessage);


    const openDiv = () => {
        $(".sendEmailFromList").css("display", "block")
    }

    const closeDiv = () => {
        $(".sendEmailFromList").css("block", "none")
    }

    useEffect(() => {
        if (isSendMessage === "true") {
            openDiv()
        }
        if (isSendMessage === "false") {
            closeDiv()
        }
    }
        , [isSendMessage])
    useEffect(() => {

    }, [displayBoxShadow])

    return (
        <>
            <MessageProduct />
            <ModalNameInvoice />
            <MessageSave />
            <Router>

                <div className="container-fluid">
                    <div className="row">
                        <Nav />
                    </div>
                    <div className="row " style={{ height: "93vh", width: "100vw" }}>
                        {/* className="col-2 px-0 mt-0 flex_configurator" */}
                        <div
                            style={{ width: "4.5%" }} >
                            <Configurator />
                        </div>
                        {/* {isSendMessage == "true"} */}
                        <div className="d-flex justify-content-center" style={{ width: "95.5%", height: "100%" }}>
                            <div
                                className="width_wrap d-flex justify-content-center align-items-center"
                                // className={isSendMessage == "false" ? "width_wrap d-flex justify-content-center align-items-center " : "width_wrap_withemail d-flex justify-content-center align-items-center"}
                                style={displayBoxShadow ? { marginTop: "1%", marginBottom: "1%" } : { backgroundColor: "white", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126", marginTop: "1%", marginBottom: "1%" }}>
                                {/* // style={{ backgroundColor: 'red', width: '40vh' }} */}
                                {/* // className="d-flex justify-content-center" */}
                                {/* > */}


                                {/* <div className={isSendMessage == "true" ?
                            "col-8 d-flex justify-content-center align-items-center" : "col-10 d-flex justify-content-center align-items-center flex_main"}> */}

                                {show && <div style={{
                                    zIndex: "999", position: "absolute",
                                    marginRight: "160vh", marginTop: "70vh",
                                    width: "250px"
                                }}>
                                    <MassageFormat></MassageFormat> </div>}
                                {/* <button style={{
                                    background: "red", width: "100px",
                                    zindex:"999",position:"absolute"}}></button> */}

                                <Switch>
                                    <ProtectedRoute exact path="/:userName" user={TokenToString} component={HomePage} />
                                    <Route path="/:userName/invoice" component={InvoiceAndSteps} />
                                    <Route path="/:userName/Invoice/Conversion" component={Conversion} />
                                    <Route path='/:userName/allDocuments' component={AllInvoices} />
                                    <Route path="/:userName/view/:theId" component={Invoice} />
                                    <Route path="/:userName/customers" component={Contactsiframe} />
                                    <Route path="/:userName/buisness" component={Business} />
                                    <Route path="/:userName/payments" component={Payments} />
                                    <Route path="/:userName/add_buisness" component={BuisnessForm} />
                                    {/* <Route path="/:userName/newContact" component={createContact} /> */}
                                    <Route path="/:userName/product" component={Products} />
                                    <Route path="/:userName/setting" component={SettingBuisnessForm} />
                                    {/* <Route exact path="/:userName" component={HomePage} /> */}
                                </Switch>
                                {/* <div className="sendEmailFromList" style={{
                                width: "17vw",
                                border: "1px solid #917BDF",
                                height: "90vh",
                                display: "none",
                                marginTop: "10vh"
                            }}> */}
                            </div>

                        </div>
                    </div>

                    {/* </div> */}
                </div>


            </Router>
        </>
    )
}