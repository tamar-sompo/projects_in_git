
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import messageSave from './modalToViewInvoice.css'
import New_Invoice from './new_invoices/new_invoice'
function ModalToViewInvoice(props) {
    const dispatch = useDispatch();
    const setShowViewInvoiceInModal = (status) => dispatch(actions.setShowViewInvoiceInModal(status))
    const showViewInvoiceInModal = useSelector(state => state.messageReducer.showViewInvoiceInModal);
    const setFlagView = (status) => dispatch(actions.setFlagView(status));



    const handleClose = () => {
        setShowViewInvoiceInModal(false);
        setFlagView(false)
    }


    return (
        <>
            <Modal
                className="popUpAnswerTestView"
                id='popUpAlertId'
                show={showViewInvoiceInModal}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}
                style={{ opacity: "1" }}
                style={{ left: "50%", top: "30%" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <New_Invoice></New_Invoice>
                </Modal.Body >
            </Modal>

        </>
    )
}

export default ModalToViewInvoice
