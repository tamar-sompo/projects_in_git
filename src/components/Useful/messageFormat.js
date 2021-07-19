
import React, { useEffect } from 'react'
import './messageFormat.css'
// import AllWorkspaces from '../workspace/allWorkspaces/allWorkspaces';
// import TeamExample from '../team/teamExample'
// import { Button, Modal, Form } from 'react-bootstrap';
// import Moment from 'moment';
// import { Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
// import { Col, Row, Container, Toast } from 'react-bootstrap'

function MassageFormat() {
  // let history = useHistory();
  const dispatch = useDispatch();
  const show = useSelector(state => state.designReducer.show);
  console.log("ssssssssssssssooooooooooooooooooooo", show)
  const setShow = (status) => dispatch(actions.setShow(status))
  const nameAction = useSelector(state => state.designReducer.nameAction);
  console.log("nameAction", nameAction)
  const productId = useSelector(state => state.productReducer.product1._id);
  // const invoiceId = useSelector(state => state.invoiceReducer.invoiceSave._id);
  console.log("productvvvvvvvvvvvvvId", productId)//אין לו  ברדוסר כזה משתנה בעת יצירה

  useEffect(() => {
    if (show) setTimeout(() => {
      setShow(false)
    }, 3000)
  }, [])

  // const deleteAction = (name) => {
  //    
  //   switch (name) {
  //     case "Adding a business successfully":
  //       dispatch(actions.setRemoveBuisnessById(buisnessId));
  //       setShow(false);
  //     case "Adding a product successfully":
  //       dispatch(actions.deleteProduct(productId))
  //       setShow(false);
  //     case "Adding an invoice successfully":
  //       // dispatch(actions.deleteProduct(invoiceId))
  //       //לא קיימת עדין פונקציית מחיקה כזאת
  //       setShow(false);
  //     default:
  //       console.log("clum!!!!!!!!!1")
  //       setShow(false);;
  //   }
  // }
  // const [show, setShow] = useState(false);
  return (
    <>
      <div className="container-fluid con dimScreen"
        style={{
          height: "100%", width: "100%", borderRadius: "7px", boxShadow: "0px 3px 6px #0A26B126", backgroundColor: "#eee"
        }}>
        {show ?
          <div className="aaa">
            <div className="bbb"></div>
            <div class="d-flex justify-content-between">
              <p style={{
                marginTop: "10px"
              }}> {nameAction}</p>
              {/* <button className="undo" style={{ border: "none", background: "transparent", color: " rgb(145, 123, 223)" }}
                onClick={() => deleteAction(nameAction)}
              >
                  Undo</button> */}
              <div class="d-flex align-items-center">
                <FontAwesomeIcon icon={['fas', 'times']}
                  // onclick={(e) => setTimeout(() => {
                  //   setShow(false)
                  // }, 5000)}
                  onClick={() => setShow(false)} show={show}

                >
                </FontAwesomeIcon>
              </div>


            </div>
          </div>


          // <CopyToClipboard text={`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id}`}
          //           onCopy={() => {
          //             setCopy(true)
          //             setTimeout(() => {
          //               setCopy(false)
          //             }, 3000);
          //           }}></CopyToClipboard>
          // <div className="col-3 deleteMsg">
          //   <label className="labelDeleteMsg"> Your Row Deleted</label>
          //   <button className="cencelBtn" 
          //   // onClick={() => {
          //   //   // props.reseteDeletedRowP()
          //   //   // props.setCurrentDataP(props.currentTable._id)
          //   //   // setClickUndoTr(true)
          //   //   // clearTimeout(id)
          //   //   // setAfterSubmit(false)
          //   // }}
          //   >Undo</button>
          //   <button className="ml-12 closeBtn" 
          //   onClick={() => setShow(false)} show={show}>x</button>
          // </div>
          : ''}
      </div>
    </>
  )


  // return (
  //   <>
  //     <div style={{
  //       zIndex: "999",
  //       position: "absolute"
  //     }}>
  //       <Row>
  //         <Col xs={6}>
  //           {/*  */}
  //           <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide >
  //             <Toast.Header>
  //               <img
  //                 src="holder.js/20x20?text=%20"
  //                 className="rounded mr-2"
  //                 alt=""
  //               />
  //               <strong className="mr-auto">Bootstrap</strong>
  //               {/* <small>11 mins ago</small> */}
  //             </Toast.Header>
  //             {/* <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body> */}
  //           </Toast>
  //         </Col>
  //         <Col xs={6}>
  //           {/* <Button onClick={() => setShow(true)}>Show Toast</Button> */}
  //         </Col>
  //       </Row>
  //     </div>
  //   </>
  // )

}
// const [show, setShow] = useState(true);

// const displayx = () => {
//   setShow(false);
// }
// return (
//   <>
//     <div className="container-fluid con dimScreen"  
//      style={{
//       height: "100%", width: "100%", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126"
//     }}>
//       {show ?
//         <div id="aaa">
//           <div id="bbb"></div>
//           <p> From Delete Succesfully‎ Undo
//           {/* <p props={props} /> */}
//             <FontAwesomeIcon icon={['fas', 'times']}
//               onClick={(e) => displayx()} ></FontAwesomeIcon>
//             {/* <p prop={props.mmm}> succesfully‎ </p> */}
//           </p>
//         </div>
//         : ''}
//     </div>
//   </>
// )

export default MassageFormat