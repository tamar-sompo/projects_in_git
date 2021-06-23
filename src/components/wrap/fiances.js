
import React, { useEffect, useState } from 'react';
// import Header from './header/header';
// import Body from './body';
import Nav from './nav_top';
import Conversion from '../notUse/conversion';
// import Conversion from '../Invoice/conversion';
import Configurator from './new_configurator';
// import Nav_Right from './nav_right';
import AllInvoices from '../Invoice/allInvoices';
import Products from '../product/products';
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
import ProductForm from '../forms/productForm.js';
import HomePage from '../Invoice/HomePage/home.js';
import BuisnessForm from '../forms/buisnessForm.js';
import Buisness from '../Invoice/Business/business.js';
import Contactsiframe from '../customers/contactiframe.js';
import MassageFormat from '../Useful/messageFormat'

import './fiances.css'

import { actions } from '../../redux/actions/All_actions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
} from 'react-router-dom';

// import ContactForm from '../forms/cotactForm';
import Business from '../Invoice/Business/business';
import ProtectedRoute from '../Useful/protected';
import $ from 'jquery';
import Massage from '../Export/email.js'
import MessageSave from '../Invoice/messageSave'


export default function Fiances() {
    // const Location = useLocation()
    const dispatch = useDispatch();

    const userName = useSelector(state => state.publicReducer.userName);

    let TokenToString = document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
        .filter(s => s.includes('devJwt'))[0].split("=").pop() : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJoY2h5U0VBZ1hFTmdvTnJTZ1ZMMWE4RTBrY3UxIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIxMzI3MDg3fQ.MzgoqDOF_jMhJxa8BY5z7zFhMlka4fPzGYEL8opO_U4";
    console.log("TTT", TokenToString)
    dispatch(actions.setTokenFromCookies(TokenToString))

    const handleshowSetting = () => {
        setshowSetting(!showSetting);
    }

    const drawerWidth = '15%';
    const [showSetting, setshowSetting] = useState(false);
    const show = useSelector(state => state.designReducer.show);
    const isSendMessage = useSelector(state => state.exportInvoiceReducer.isSendMessage);
    console.log("isSendMessage", isSendMessage)

    const openDiv = () => {
        console.log("openEmailForm")
        $(".sendEmailFromList").css("display", "block")
    }

    const closeDiv = () => {
        console.log("ccclose")
        $(".sendEmailFromList").css("block", "none")
    }

    useEffect(() => {
        if (isSendMessage == "true") {
            openDiv()
        }
        if (isSendMessage == "false") {
            closeDiv()
        }
    }
        , [isSendMessage])

    return (
        <>


            <MessageSave></MessageSave>
            <Router >
                <div className="container-fluid">
                    <div className="row">
                        <Nav />
                    </div>
                    <div className="row">

                        <div className="col-2 px-0 mt-0 flex_configurator">
                            <Configurator />
                        </div>

                        <div className={isSendMessage == "true" ?
                            "col-8 d-flex justify-content-center align-items-center" : "col-10 d-flex justify-content-center align-items-center flex_main"}>
                            <div style={{
                                zIndex: "999", position: "absolute",
                                marginRight: "160vh", marginTop: "70vh",
                                width: "250px"
                            }}>
                                {show &&
                                    <MassageFormat></MassageFormat>}
                                {/* <button style={{
                                    background: "red", width: "100px",
                                    zindex:"999",position:"absolute"}}></button> */}
                            </div>
                            <Switch>
                                <ProtectedRoute exact path="/:userName" user={TokenToString} component={HomePage} />
                                <Route path="/:userName/invoice" component={InvoiceAndSteps} />
                                <Route path="/:userName/Invoice/Conversion" component={Conversion} />
                                <Route path='/:userName/allDocuments' component={AllInvoices} />
                                <Route path="/:userName/view/:theId" component={Invoice} />
                                <Route path="/:userName/customers" component={Contactsiframe} />
                                <Route path="/:userName/buisness" component={Business} />
                                <Route path="/:userName/add_buisness" component={BuisnessForm} />
                                {/* <Route path="/:userName/newContact" component={createContact} /> */}
                                <Route path="/:userName/product" component={Products} />
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
                        {isSendMessage == "true" &&
                            <div className="sendEmailFromList" style={{
                                width: "17vw",
                                border: "1px solid #917BDF",
                                height: "90vh", display: "none", marginTop: "10vh"
                            }}>
                                <Massage></Massage>
                            </div>}
                    </div>
                </div>


            </Router>
        </>
    )
}