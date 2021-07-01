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


    const dispatch = useDispatch();
    const sendEmail = () => dispatch(actions.setSendLinkToEmail())
    const [pdfDisplay, setPdfDisplay] = useState(false);
    const [watsappText, setWatsappText] = useState(false);

    console.log("pdfDisplay", pdfDisplay)

    const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
    const userName = useSelector(state => state.publicReducer.userName)
    const linkPayToContact = useSelector(state => state.paymentsReducer.linkPayToContact)

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

        debugger
        if (flagSave1 === true) {
            businessPhone = invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                invoice.contactOneTime.phone : "";
        }
        else {
            const contact1 = allContact.find(contact => contact.email === emailcontact)
            contactPhone = contact1 ? contact1.phone : "";
        }
        businessPhoneWatsapp = businessPhone ? businessPhone.substring(1) : contactPhone ? contactPhone.substring(1) : "";
        businessPhoneWatsapp1 = businessPhoneWatsapp ? 972 + businessPhoneWatsapp : "";
        console.log("businessPhone", businessPhoneWatsapp1)
    }

    const setMail = () => {
        dispatch(actions.setsendMessage("true"))
    }

    useEffect(() => {
        console.log("inuse")
        if (invoiceSave && invoiceSave.invoice && invoiceSave.invoice.contactOneTime && invoiceSave.invoice.contactOneTime.phone) {
            console.log("invoicesave")
            // setWatsappText = "ppp"
            setWatsappText(`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id}`)
            if (linkPayToContact) {
                console.log("linkkk")
                setWatsappText(`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id} 
                <br /> Attached is a link to pay <br /> ${linkPayToContact}`)
            }
        }
    }, [invoiceSave, linkPayToContact])


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
                {invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                    <Dropdown.Item onClick={() => sendWhatsApp()}
                        href={`https://wa.me/${businessPhoneWatsapp1}?text=${watsappText}`} target="_blank" >
                        <FontAwesomeIcon size='1.5x' className='insertIcon font-weight-bold'
                            icon={['fab', 'whatsapp']} />
                        Whatsapp
                    </Dropdown.Item> : ""}

                {/* <Dropdown.Item href="#/action-3">
         <FontAwesomeIcon    className='insertIcon' size='1x' icon={['fas', 'file-pdf']}/> Print</Dropdown.Item> */}

            </DropdownButton>
        </>
    );
}