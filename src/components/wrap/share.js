import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { MdShare } from 'react-icons/md'
import Tooltip from '@material-ui/core/Tooltip';


import PdfModal from '../Pdf/pdfModal';
import './share.css';
import { ContactlessTwoTone } from '@material-ui/icons';

export default function Share(props) {

    const dispatch = useDispatch();

    const [pdfDisplay, setPdfDisplay] = useState(false);
    // const [watsappText, setWatsappText] = useState(false);

    const userName = useSelector(state => state.publicReducer.userName)

    const invoiceSaveId = useSelector(state => state.invoiceReducer.invoiceId)

    const flagSave = useSelector(state => state.invoiceReducer.invoice.contactOneTime);
    const flagSave1 = flagSave ? flagSave.flag : "";
    const emailcontact = useSelector(state => state.invoiceReducer.invoice.contact);
    const allContact = useSelector(state => state.customerReducer.allContact);
    const invoice = useSelector(state => state.invoiceReducer.invoice);

    const businessPhoneWatsapp1 = '';
    const invoiceId = "";
    //     const watsappText = `https://finance.leader.codes/${userName}/view/${invoiceId}`
    //     const watsappText2 = `https://finance.leader.codes/${userName}/view/${invoiceId}
    //     <br /> <br /> <br />
    // <a href=${props.paypalLink} class="btn btn-primary">Click here to pay</a>`

    const sendWhatsApp = () => {
        let businessPhone;
        let businessPhoneWatsapp;
        let businessPhoneWatsapp1;
        let contactPhone
        if (flagSave1 === true) {
            businessPhone = invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                invoice.contactOneTime.phone : "";
        }
        else if (flagSave1 === false) {
            const contact1 = allContact.find(contact => contact.email === emailcontact)
            contactPhone = contact1 ? contact1.phone : "";
        }
        let invoiceId = props.invoiceId ? props.invoiceId : invoiceSaveId ? invoiceSaveId : "";
        console.log("dddid", invoiceId)
        let invoicePaypalLink = props.paypalLink ? props.paypalLink : invoice ? invoice.paypalLink ? invoice.paypalLink : "" : "";
        console.log("invoicePaypalLink", invoicePaypalLink)
        businessPhoneWatsapp = businessPhone ? businessPhone.substring(1) : contactPhone ? contactPhone.substring(1) : props.invoiceFhone ? props.invoiceFhone.substring(1) : "";
        businessPhoneWatsapp1 = businessPhoneWatsapp ? 972 + businessPhoneWatsapp : "";
        // if (!invoicePaypalLink) {
        //     dd = watsappText
        // }
        // else {
        //     dd = watsappText2
        // }
    }
    const setMail = () => {
        dispatch(actions.setsendMessage("true"))
    }
    return (
        <>
            {pdfDisplay === true && <PdfModal setPdfDisplay={setPdfDisplay} />}
            <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Share</p>} placement="bottom">
                <DropdownButton id={props && props.fl == 1 ? "dropdown-basic" : "dropdown-basic-button"}
                    title={<MdShare className={props && props.fl == 1 ? "inv" : "navt"} id={props && props.fl == 1 ?
                        "icons" : "ico"}> </MdShare>}>
                    {/* // title={<FontAwesomeIcon className={props && props.fl == 1? */}
                    {/* // "icons":"ico"} icon={['fas', 'share-alt']}></FontAwesomeIcon>}> */}
                    <Dropdown.Item onClick={() => setMail()}>
                        <FontAwesomeIcon className='insertIcon font-weight-bold' size='2x' icon={['fas', 'envelope']} /> Email</Dropdown.Item>
                    {props.invoiceFhone || allContact && allContact.find(x => x.email === emailcontact) && allContact.find(x => x.email === emailcontact).phone || invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                        !props.paypalLink ?
                        <Dropdown.Item onClick={() => sendWhatsApp()}
                            href={`https://wa.me/${businessPhoneWatsapp1}?text=${`https://finance.leader.codes/${userName}/view/${invoiceId}`}`} target="_blank" >
                            <FontAwesomeIcon size='1.5x' className='insertIcon font-weight-bold'
                                icon={['fab', 'whatsapp']} />
                            Whatsapp
                        </Dropdown.Item> : "":""}
                    {/* {props.invoiceFhone || allContact && allContact.find(x => x.email === emailcontact) && allContact.find(x => x.email === emailcontact).phone || invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                    props.paypalLink ?
                       <Dropdown.Item onClick={() => sendWhatsApp()}
                       href={`https://wa.me/${businessPhoneWatsapp1}?text=${`https://finance.leader.codes/${userName}/view/${invoiceId}
                         <br /> <br /> <br />
                       <a href=${props.paypalLink} class="btn btn-primary">Click here to pay</a>`}`} target="_blank" >
                       <FontAwesomeIcon size='1.5x' className='insertIcon font-weight-bold'
                           icon={['fab', 'whatsapp']} />
                       Whatsapp
                   </Dropdown.Item> 
                   :"":"" } */}
                </DropdownButton>
            </Tooltip>
        </>
    );
}