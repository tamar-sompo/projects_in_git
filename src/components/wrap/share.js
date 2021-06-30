import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { MdShare } from 'react-icons/md'


import PdfModal from '../Pdf/pdfModal';
import './share.css';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Share(props) {

    console.log("props.invoiceFhone", props.invoiceFhone)
    const dispatch = useDispatch();
    const sendEmail = () => dispatch(actions.setSendLinkToEmail())
    const [pdfDisplay, setPdfDisplay] = useState(false);
    console.log("pdfDisplay", pdfDisplay)
    // const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
    const userName = useSelector(state => state.publicReducer.userName)
    const [phone, setPhone] = useState("")

    const invoiceId = useSelector(state => state.invoiceReducer.invoiceId)

    const flagSave = useSelector(state => state.invoiceReducer.invoice.contactOneTime);
    const flagSave1 = flagSave ? flagSave.flag : "";
    const emailcontact = useSelector(state => state.invoiceReducer.invoice.contact);
    const allContact = useSelector(state => state.customerReducer.allContact);
    const invoice = useSelector(state => state.invoiceReducer.invoice);

    const contactPhone = '';
    const businessPhoneWatsapp1 = '';


    const sendWhatsApp = () => {
        let businessPhone;
        let businessPhoneWatsapp;
        let businessPhoneWatsapp1;
        let contactPhone
        debugger
        if (flagSave1 === true) {
            businessPhone = invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                invoice.contactOneTime.phone : "";
        }
        else if (flagSave1 === false) {
            const contact1 = allContact.find(contact => contact.email === emailcontact)
            contactPhone = contact1 ? contact1.phone : "";
        }
        businessPhoneWatsapp = businessPhone ? businessPhone.substring(1) : contactPhone ? contactPhone.substring(1) : props.invoiceFhone ? props.invoiceFhone.substring(1) : "";
        businessPhoneWatsapp1 = businessPhoneWatsapp ? 972 + businessPhoneWatsapp : "";
        console.log("businessPhone", businessPhoneWatsapp1)
    }

    const setMail = () => {
        dispatch(actions.setsendMessage("true"))
    }

    return (
        <>
            {pdfDisplay === true && <PdfModal setPdfDisplay={setPdfDisplay} />}

            <DropdownButton id={props && props.fl == 1 ? "dropdown-basic" : "dropdown-basic-button"}
                title={<MdShare className={props && props.fl == 1 ? "inv" : "navt"} id={props && props.fl == 1 ?
                    "icons" : "ico"}> </MdShare>}>
                {/* //   title={<FontAwesomeIcon className={props && props.fl == 1?  */}
                {/* //    "icons":"ico"} icon={['fas', 'share-alt']}></FontAwesomeIcon>}>  */}
                <Dropdown.Item onClick={() => setMail()}>
                    <FontAwesomeIcon className='insertIcon font-weight-bold' size='2x' icon={['fas', 'envelope']} />  Email</Dropdown.Item>
                {props.invoiceFhone || allContact && allContact.find(x => x.email === emailcontact) && allContact.find(x => x.email === emailcontact).phone || invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                    <Dropdown.Item onClick={() => sendWhatsApp()}
                        href={`https://wa.me/${businessPhoneWatsapp1}?text=${`https://finance.leader.codes/${userName}/view/${invoiceId}`}`} target="_blank" >
                        <FontAwesomeIcon size='1.5x' className='insertIcon font-weight-bold'
                            icon={['fab', 'whatsapp']} />
                        Whatsapp
                    </Dropdown.Item> : ""
                }
                {/* <Dropdown.Item href="#/action-3">
         <FontAwesomeIcon    className='insertIcon' size='1x' icon={['fas', 'file-pdf']}/> Print</Dropdown.Item> */}

            </DropdownButton>
        </>
    );
}