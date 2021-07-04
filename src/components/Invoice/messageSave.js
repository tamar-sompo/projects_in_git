
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row, Container, Button, Modal } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import messageSave from './messageSave.css'
function MessageSave(props) {
    const dispatch = useDispatch();
    const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
    const modalBody = useSelector(state => state.messageReducer.modalBody);
    const showMessage = useSelector(state => state.messageReducer.showMessage);
    const allContact = useSelector(state => state.customerReducer.allContact)

    const flagModal = useSelector(state => state.messageReducer.flagModal)
    const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
    const setButtonClick = (btn) => dispatch(actions.setButtonClick(btn))
    const buttonClick = useSelector(state => state.messageReducer.buttonClick)
    const [flagFirst, setFlagFirst] = useState(false)
    // const [show, setShow] = useState(false);
    useEffect(() => {
        if (flagFirst === false)
            setFlagFirst(true)
        else
            setShowMessage(false)
    }, [allContact])

    const handleClose = () => setShowMessage(false);


    return (
        <>
            <Modal className="popUpAnswerTest" id='popUpAlertId' show={showMessage} onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // onHide={() => setShowMessage(false)}
                style={{ opacity: "1" }}
                style={{ left: "50%", top: "30%" }}>
                <Modal.Header style={{ opacity: "1", cursor: "pointer" }} closeButton>
                </Modal.Header>

                <Modal.Body style={{ paddingTop: '0px', textAlign: 'center' }}>

                    <h1 style={{ marginTop: '7%', paddingRight: '1%', marginBottom: '0.1rem', color: '#343a40e0', paddingBottom: '6vh', fontSize: '1.7rem' }}>
                        {modalBody}</h1>

                    <Button variant="secondary" style={{ marginRight: "10%", width: "30%", backgroundColor: "#917BDF", height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer" }}
                        onClick={flagModal === "contact" ? () => setButtonClick("saveContact") :
                            flagModal === "otherPage" ? () => setButtonClick("saveInvoiceOtherPage") :
                            flagModal === "otherPageInvoices" ? () => setButtonClick("saveInvoiceOtherPage"):
                             ""}>
                        {flagModal === "contact" ? "save to crm" : flagModal === "otherPage" || flagModal === "otherPageInvoices"? "yes" : ""}
                    </Button>
                    <Button variant="danger" style={{
                        width: "30%", backgroundColor: '#0A102E', height: "20%", fontSize: "1.3rem", marginBottom: "2vh", cursor: "pointer"
                    }}
                        onClick={flagModal === "contact" ? () => setButtonClick("saveContact1") :
                            flagModal === "otherPage" ? () => setButtonClick("continuOtherPage") : 
                            flagModal === "otherPageInvoices" ? () => setButtonClick("saveInvoiceOtherPageBack"): 
                            ""}>
                        {flagModal === "contact" ? "save contact" : flagModal === "otherPage" || flagModal === "otherPageInvoices" ? "no" : ""}
                    </Button>
                </Modal.Body >
            </Modal>




            {/* <Modal show={showMessage}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}
                // onHide={() => setShowMessage(false)}
                   style={{ opacity: "1" }}
            >

                <Modal.Header closeButton>
                    <Modal.Title>save contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer>
                          <Button 
                                 style={{ backgroundColor: "blue" }}
                                 onClick={flagModal==="contact" ? ()=>setButtonClick("saveContact")  :
                            flagModal==="otherPage" ? ()=> setButtonClick("saveInvoiceOtherPage"): ""}>
                           {flagModal==="contact" ? "save to crm"  : 
                            flagModal==="otherPage" ? "save invoice" :""}    
          </Button>
                    <Button 
                    style={{ backgroundColor: "blue" }} 
                    onClick={flagModal==="contact" ? ()=>setButtonClick("saveContact1")  :
                          flagModal==="otherPage" ? ()=> setButtonClick("continuOtherPage"): ""}>
                    {flagModal==="contact" ? "save contact" :
                    flagModal==="otherPage" ? "continue" :""}     pn
          </Button>
                    
                  
                </Modal.Footer>
            </Modal> */}

        </>
    )
}

export default MessageSave
