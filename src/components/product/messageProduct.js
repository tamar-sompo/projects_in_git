
import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/All_actions'


export default function MessageProduct(props) {
    // console.log("functionshowModalDelete")

    const dispatch = useDispatch();
    const setShowMessagePr = (status) => dispatch(actions.setShowMessagePr(status))
    const showMessagePr = useSelector(state => state.messageReducer.showMessagePr);
    console.log("showMessagePr", showMessagePr)
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
    const closeEdit = () => {
        dispatch(actions.setIsEdit(true))
        handleClose()
    }
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
        console.log('ppppppppppppppppp', props.flag)
        if (flagNewP) {
            dispatch(actions.setdegel1(1))
        }
        else {
            dispatch(actions.setdegel2(true))
        }

        handleClose()
    }
    return (
        <>
            <Modal className="popUpAnswerTest" id='popUpAlertId'
                show={showMessagePr}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}
                style={{ opacity: "1", background: "transparent", height: "100%", left: "50%" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <h1 style={{ marginTop: '7%', paddingRight: '1%', marginBottom: '0.1rem', color: '#343a40e0', paddingBottom: '6vh', fontSize: '1.7rem' }}>
                        Do you want to save the product?
                    </h1>
                    {props.flag === 5 ?
                        //הודעה בין עריכה לעריכה
                        <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                            onClick={() => saveEdit()}>Yes
                        </Button>
                        : props.flag === 1 ?
                            // הודעה במעבר בין עמודים
                            <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                                onClick={() => savePage()}>Yes
                            </Button>
                            // הודעה במעבר בין יצירה לעריכה
                            : <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                                onClick={() => save()}>Yes
                            </Button>
                    }
                    {props.flag === 5 ?
                        <Button style={{
                            width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                        }}
                            onClick={() => closeEdit()}>No</Button>
                        : props.flag === 1 ?
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