import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions';
import buisnessList from './buisnessList.css';
import './buisnessList.css'

export default function ModeldeleteBuisness(props) {
    debugger
    console.log("functionshowModalDelete")

    const dispatch = useDispatch();
    const setShowModalDelete = (status) => dispatch(actions.setShowModalDelete(status))
    const modalBody = useSelector(state => state.messageReducer.modalBody);
    const showModalDelete = useSelector(state => state.messageReducer.showModalDelete);
    const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);
    console.log("showModalDelete", showModalDelete)

    const handleClose = () => setShowModalDelete(false);
    const handleDelete = () => {
        dispatch(actions.setRemoveBuisnessById(currentBuisness._id))
        console.log("currentBuisness._id", currentBuisness._id)
        setShowModalDelete(false)
    }


    return (
        <>
            <Modal className="popUpAnswerTest" id='popUpAlertId' show={showModalDelete} onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}, top: "90%"
                style={{ height: "100%", left: "50%", opacity: "1" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <h1 style={{ marginTop: '7%', paddingRight: '1%', marginBottom: '0.1rem', color: '#343a40e0', paddingBottom: '6vh', fontSize: '1.7rem' }}>
                        Do You Want To delete The Buisness Forever?
                    </h1>

                    <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                        // onClick={dispatch(actions.setRemoveBuisnessById(currentBuisness._id))}
                        onClick={handleClose}>Cancel
                    </Button>
                    <Button style={{
                        width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                    }}
                        onClick={handleDelete}>Delete
                    </Button>
                </Modal.Body >
            </Modal>

        </>
    )
}