import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import {MdShare } from 'react-icons/md'


import PdfModal from '../Pdf/pdfModal';
import './share.css';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Share(props) {

    
    const dispatch = useDispatch();
    const sendEmail = () => dispatch(actions.setSendLinkToEmail())
    const [pdfDisplay, setPdfDisplay] = useState(false);
    console.log("pdfDisplay", pdfDisplay)
    const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
    const userName = useSelector(state => state.publicReducer.userName)
    const [phone, setPhone] = useState("")

    const setMail = () => {
        dispatch(actions.setsendMessage("true"))
    }

    return (
        <>
            {pdfDisplay === true && <PdfModal setPdfDisplay={setPdfDisplay} />}

            <DropdownButton id={props && props.fl == 1?"dropdown-basic":"dropdown-basic-button"}
                title={<MdShare className={props && props.fl == 1? "inv":"navt"} id={props && props.fl == 1? 
                   "icons":"ico"}> </MdShare>}>
                {/* //   title={<FontAwesomeIcon className={props && props.fl == 1?  */}
                {/* //    "icons":"ico"} icon={['fas', 'share-alt']}></FontAwesomeIcon>}>  */}
                <Dropdown.Item onClick={() => setMail()}>
                    <FontAwesomeIcon className='insertIcon font-weight-bold' size='2x' icon={['fas', 'envelope']} />  Email</Dropdown.Item>
                {invoiceSave && invoiceSave.invoice && invoiceSave.invoice.contactOneTime.phone ?  
                <Dropdown.Item href={`https://wa.me/${invoiceSave.invoice.contactOneTime.phone}?text=${`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id}`}`} target="_blank" >
                    <FontAwesomeIcon size='1.5x' className='insertIcon font-weight-bold'
                            icon={['fab', 'whatsapp']} /> 
                Whatsapp</Dropdown.Item> :""}

                {/* <Dropdown.Item href="#/action-3">
         <FontAwesomeIcon    className='insertIcon' size='1x' icon={['fas', 'file-pdf']}/> Print</Dropdown.Item> */}
  
            </DropdownButton>
        </>
    );
}