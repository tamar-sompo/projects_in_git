
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import messageSave from './messageSave.css'
import './modalNameInvoice.css'
function ModalNameInvoice(props) {
    const dispatch = useDispatch();
    const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
    const modalBody = useSelector(state => state.messageReducer.modalBody);
    const showModalName = useSelector(state => state.messageReducer.showModalName);
    const allContact = useSelector(state => state.customerReducer.allContact)
    const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    const invoice = useSelector(state => state.invoiceReducer.invoice);
    const flagModal = useSelector(state => state.messageReducer.flagModal)
    const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
    const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))
    const buttonClick = useSelector(state => state.messageReducer.buttonClick)
    const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
    const setFocus = (focus) => dispatch(actions.setFocus(focus));
    const [flagFirst, setFlagFirst] = useState(false)
    // const [show, setShow] = useState(false);
    useEffect(() => {
        if (flagFirst === false)
            setFlagFirst(true)
        else
            setShowMessage(false)
    }, [allContact])

    const handleClose = () => dispatch(actions.setShowModalName(false));


    const onFieldChanged = (fieldName) => (e) => {
        const value = e.target.value;
          updateinvoiceField({ key: fieldName, value: value })
      }
const OKNameInvoice=()=>{
    setFlagModal("successNameInvoice")
    dispatch(actions.setShowModalName(false))
}

    return (
        <>
            <Modal className="popUpAnswerTest1" id='popUpAlertId' show={showModalName} onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}
                style={{ opacity: "1" }}
                style={{ left: "50%", top: "30%" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <h1 style={{ marginTop: '3%', paddingRight: '1%', marginBottom: '0.1rem', color: '#343a40e0', paddingBottom: '8%', fontSize: '1.7rem' }}>
                    INVOICE NAME
                        </h1>
                        <input
                placeholder='Invoice Name'
                // id='title-temp1'
                className="fieldNmaeCss"
                // className="design_invoicename"
                maxlength="15"
                value={detailsInvoice ? detailsInvoice.type ? detailsInvoice.type : invoice.type ? invoice.type : "" : ""}
                onChange={onFieldChanged('type')}
                onClick={() => setFocus('type')}
              >
              </input>
              <div class="d-flex justify-content-center" style={{width:"100%"}}>
                    <Button variant="secondary"
                  
                    style={{ width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem",
                     marginBottom: "2vh",
                     cursor: "pointer" }}
                    onClick={OKNameInvoice}
                    >
                       OK 
                    </Button>
                    </div>
</Modal.Body >

                   
                
            </Modal>

        </>
    )
}

export default ModalNameInvoice
