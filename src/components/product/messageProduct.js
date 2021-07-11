import { isThisISOWeek } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/All_actions'


export default function MessageProduct(props) {
    // console.log("functionshowModalDelete")

    const dispatch = useDispatch();
    const setShowMessagePr = (status) => dispatch(actions.setShowMessagePr(status))
    const modalBody = useSelector(state => state.messageReducer.modalBody);
    const showMessagePr = useSelector(state => state.messageReducer.showMessagePr);
    console.log("showMessagePr", showMessagePr)
    const newProductTable = useSelector(state => state.productReducer.newProductTable)
    const handleClose = () => setShowMessagePr(false);
    //no
    const openEdit = () => {
        debugger
        // אם עריכת מוצר תיהיה פתוחה או לא
        dispatch(actions.setFlagNewP(false))
        dispatch(actions.setIsEdit(true))
        dispatch(actions.setIfSave(false))
        dispatch(actions.setNewProductTableFull({}))
        // dispatch(actions.setIsOpen(false))
        handleClose()
    }
    //yes
    const save = () => {
        debugger
        // dispatch(actions.setIfSave(false))
        dispatch(actions.setIsSave(true))
        handleClose()
    }
    return (
        <>
            <Modal className="popUpAnswerTest" id='popUpAlertId' show={showMessagePr} onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}
                style={{ opacity: "1", background: "transparent" }}
                style={{ height: "100%", left: "50%" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <h1 style={{ marginTop: '7%', paddingRight: '1%', marginBottom: '0.1rem', color: '#343a40e0', paddingBottom: '6vh', fontSize: '1.7rem' }}>
                        Do you want to save the product?
                    </h1>

                    <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                        onClick={() => save()}>Yes
                    </Button>
                    <Button style={{
                        width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                    }}
                        onClick={() => openEdit()}
                    >No
                    </Button>
                </Modal.Body >
            </Modal>

        </>
    )
}