import { isThisISOWeek } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/All_actions'


export default function MessageProductP(props) {
    // console.log("functionshowModalDelete")

    const dispatch = useDispatch();
    const setPage = (status) => dispatch(actions.setPage(status))
    const modalBody = useSelector(state => state.messageReducer.modalBody);
    const page = useSelector(state => state.productReducer.page);

    console.log("page", page)
    const newProductTable = useSelector(state => state.productReducer.newProductTable)
    const handleClose = () => setPage(false);
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
    const closeEdit = () => {
        dispatch(actions.setIsEdit(true))
        handleClose()
    }
    useEffect(() => {
        debugger
    })
    //yes
    const save = () => {
        debugger
        console.log('ppppppppppppppppp', props.flag)
        // dispatch(actions.setIfSave(false))
        dispatch(actions.setIsSave(true))
        handleClose()
    }
    const saveEdit = () => {
        debugger
        console.log('ppppppppppppppppp', props.flag)
        dispatch(actions.setdegel(true))
        handleClose()
    }
    const overPage = () => {
        debugger
        // אם עריכת מוצר תיהיה פתוחה או לא
        dispatch(actions.setFlagNewP(false))
        dispatch(actions.setIfSave(false))
        dispatch(actions.setNewProductTableFull({}))
        dispatch(actions.setdegel1(4))
        // dispatch(actions.setIsOpen(false))
        handleClose()
    }
    //במעבר בין עמודים
    const flagNewP = useSelector(state => state.productReducer.flagNewP)
    const savePage = () => {
        debugger
        if (flagNewP) {
            dispatch(actions.setdegel1(1)) //go to save new product
        }
        else {
            debugger
            dispatch(actions.setdegel1(10))// after editing a product
            // dispatch(actions.setdegel2(true))
        }

        handleClose()
    }
    return (
        <>
            <Modal className="popUpAnswerTest" id='popUpAlertId'
                show={page}
                onHide={handleClose}
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
                    {props.flag == 5 ?
                        //הודעה בין עריכה לעריכה
                        <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                            onClick={() => saveEdit()}>Yes
                        </Button>
                        : props.flag == 1 ?
                            // הודעה במעבר בין עמודים
                            <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                                onClick={() => savePage()}>Yes
                            </Button>
                            // הודעה במעבר בין יצירה לעריכה
                            : <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                                onClick={() => save()}>Yes
                            </Button>
                    }
                    {props.flag == 5 ?
                        <Button style={{
                            width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                        }}
                            onClick={() => closeEdit()}>No</Button>
                        : props.flag == 1 ?
                            <Button style={{
                                width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                            }}
                                onClick={() => overPage()}
                            >No
                            </Button> :
                            <Button style={{
                                width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                            }}
                                onClick={() => openEdit()}
                            >No
                            </Button>
                    }
                </Modal.Body >
            </Modal>

        </>
    )
}