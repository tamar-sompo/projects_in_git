import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { MdShare } from 'react-icons/md'
import Tooltip from '@material-ui/core/Tooltip';
import PdfModal from '../Pdf/pdfModal';
import './share.css';

export default function Share(props) {

    console.log("props.invoiceFhone", props.invoiceFhone)
    const dispatch = useDispatch();
    const [pdfDisplay, setPdfDisplay] = useState(false);
    console.log("pdfDisplay", pdfDisplay)
    // const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
    const userName = useSelector(state => state.publicReducer.userName)
    const [watsappText, setWatsappText] = useState("")
    const invoiceSaveId = useSelector(state => state.invoiceReducer.invoiceId)
    const flagSave = useSelector(state => state.invoiceReducer.invoice.contactOneTime);
    const flagSave1 = flagSave ? flagSave.flag : "";
    const emailcontact = useSelector(state => state.invoiceReducer.invoice.contact);
    const allContact = useSelector(state => state.customerReducer.allContact);
    const invoice = useSelector(state => state.invoiceReducer.invoice);
    const linkPayFromStore = useSelector(state => state.invoiceReducer.invoiceSave)

    // const contactPhone = '';
    const businessPhoneWatsapp1 = '';
    // const invoiceId="";
    let invoiceId = props.invoiceId ? props.invoiceId : invoiceSaveId ? invoiceSaveId : "";


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
        // let invoiceId = props.invoiceId ? props.invoiceId : invoiceSaveId ? invoiceSaveId : "";
        // console.log("invoiceIdwwwwww", invoiceId)
        businessPhoneWatsapp = businessPhone ? businessPhone.substring(1) : contactPhone ? contactPhone.substring(1) : props.invoiceFhone ? props.invoiceFhone.substring(1) : "";
        businessPhoneWatsapp1 = businessPhoneWatsapp ? 972 + businessPhoneWatsapp : "";
        // console.log("businessPhone", businessPhoneWatsapp1)
        checkIsInvoicePaypalLink()
    }

    // let watsappText;
    console.log(watsappText, "watsapp")
    // useEffect(() => {
    const checkIsInvoicePaypalLink = () => {
        let invoicePaypalLink = props.paypalLink ? props.paypalLink : linkPayFromStore ? linkPayFromStore.invoice ?
            linkPayFromStore.invoice.paypalLink ?
                linkPayFromStore.invoice.paypalLink : "null" : "null" : "null";
        console.log("lllinkk", invoicePaypalLink)
        if (invoicePaypalLink) {
            console.log("first1")
            setWatsappText(`Link to view invoice:   https://finance.leader.codes/${userName}/view/${invoiceId}   
            Link to pay:   ${invoicePaypalLink}`)
        }
        else {
            console.log("first2")
            setWatsappText(`Link to view invoice:   https://finance.leader.codes/${userName}/view/${invoiceId}`)
        }
    }
    // }, [])

    const setMail = () => {
        dispatch(actions.setsendMessage("true"))
    }
    return (
        <>
            {pdfDisplay === true && <PdfModal setPdfDisplay={setPdfDisplay} />}
            <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Share</p>} placement="bottom">
                <DropdownButton id={props && props.fl === 1 ? "dropdown-basic" : "dropdown-basic-button"}
                    title={<MdShare className={props && props.fl === 1 ? "inv" : "navt"} id={props && props.fl === 1 ?
                        "icons" : "ico"}> </MdShare>}>
                    {/* // title={<FontAwesomeIcon className={props && props.fl == 1? */}
                    {/* // "icons":"ico"} icon={['fas', 'share-alt']}></FontAwesomeIcon>}> */}
                    <Dropdown.Item onClick={() => setMail()}>
                        <FontAwesomeIcon className='insertIcon font-weight-bold' size='2x' icon={['fas', 'envelope']} /> Email</Dropdown.Item>
                    {props.invoiceFhone || allContact && allContact.find(x => x.email === emailcontact) && allContact.find(x => x.email === emailcontact).phone || invoice && invoice.contactOneTime && invoice.contactOneTime.phone ?
                        <Dropdown.Item onClick={() => sendWhatsApp()}
                            href={`https://wa.me/${businessPhoneWatsapp1}?text=${watsappText}`} target="_blank" >
                            <FontAwesomeIcon size='1.5x' className='insertIcon font-weight-bold'
                                icon={['fab', 'whatsapp']} />
                            Whatsapp
                        </Dropdown.Item> : ""
                    }
                </DropdownButton>
            </Tooltip>
        </>
    );
}