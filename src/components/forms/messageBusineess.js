
import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions/All_actions'


export default function MessageBusiness(props) {
    // console.log("functionshowModalDelete")

    const dispatch = useDispatch();
    const setFlagOverPage = (status) => dispatch(actions.setFlagOverPage(status))
    const flagOverPage = useSelector(state => state.buisnessReducer.flagOverPage);
    const handleClose = () => setFlagOverPage(false);
    //no
    // const openEdit = () => {
    //     debugger
    //     // אם עריכת מוצר תיהיה פתוחה או לא
    //     dispatch(actions.setFlagNewP(false))
    //     dispatch(actions.setIsEdit(true))
    //     dispatch(actions.setIfSave(false))
    //     dispatch(actions.setNewProductTableFull({}))
    //     // dispatch(actions.setIsOpen(false))
    //     handleClose()
    // }
    // const closeEdit = () => {
    //     dispatch(actions.setIsEdit(true))
    //     handleClose()
    // }
    //yes
    // const save = () => {
    //     debugger
    //     console.log('ppppppppppppppppp', props.flag)
    //     // dispatch(actions.setIfSave(false))
    //     dispatch(actions.setIsSave(true))
    //     handleClose()
    // }
    // const saveEdit = () => {
    //     debugger
    //     console.log('ppppppppppppppppp', props.flag)
    //     dispatch(actions.setdegel(true))
    //     handleClose()
    // }
    const overPage = () => {
        debugger
        // אם עריכת מוצר תיהיה פתוחה או לא
        // dispatch(actions.setFlagNewP(false))
        // dispatch(actions.setIfSave(false))
        // dispatch(actions.setNewProductTableFull({}))
        dispatch(actions.setflagSave('noSave'))
        // dispatch(actions.setIsOpen(false))
        handleClose()
    }
    //במעבר בין עמודים
    const flagSave = useSelector(state => state.buisnessReducer.flagSave);
    const savePage = () => {
        debugger
        if (flagSave == 'true1' || flagSave == 'saveNewBusiness') {
            dispatch(actions.setflagSave('saveNewBusiness'))
        }
        else {
            if (flagSave == 'true2' || flagSave == 'updateBusiness') {
                dispatch(actions.setflagSave('updateBusiness'))
            }
        }

        handleClose()
    }
    return (
        <>
            <Modal className="popUpAnswerTest" id='popUpAlertId'
                show={flagOverPage}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}
                style={{ opacity: "1", background: "transparent", height: "100%", left: "50%" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <h1 style={{ marginTop: '7%', paddingRight: '1%', marginBottom: '0.1rem', color: '#343a40e0', paddingBottom: '6vh', fontSize: '1.7rem' }}>
                        Do you want to save the business?
                    </h1>
                    {/* // הודעה במעבר בין עמודים */}
                    <Button style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                        onClick={() => savePage()}>Yes </Button>
                    <Button style={{
                        width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                    }}
                        onClick={() => overPage()} >No </Button>
                </Modal.Body >
            </Modal>

        </>
    )
}