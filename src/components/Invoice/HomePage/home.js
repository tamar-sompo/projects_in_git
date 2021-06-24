import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions'

export default function HomePage(props) {


  let history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness)
  const buisness = useSelector(state => state.buisnessReducer.buisness)
  const [flag, setFlag] = useState("false")
  const ffd = useSelector(state => state.invoiceReducer.flagBorderProduct)
  const [specificRoute, setspecificRoute] = useState('')
  console.log("allBuisnessToUser", allBuisnessToUser)

//  useEffect(()=>{
//    console.log("ghgh1")
//    console.log("allBuisnessToUser.length", allBuisnessToUser && allBuisnessToUser.length)
//    debugger
//     if (allBuisnessToUser && allBuisnessToUser.length>0) {
//       console.log("ghgh2")
//       dispatch(actions.getLastBuisness())
//       // dispatch(actions.setGetUserByUsername())
//     }
//     if (allBuisnessToUser === undefined) {
//       console.log("ghgh3")
//       // history.push(`/${userName}/add_buisness`)
//       // dispatch(actions.setGetUserByUsername())
//       }
//  },[allBuisnessToUser])

 
//  const  checkIfBuisness = (value) => {
//   let specificRoute = value;
//   debugger
//   if (allBuisnessToUser === undefined) {
//     history.push(`/${userName}/add_buisness`)
//   }     
//   else if (specificRoute === "Business") {
//     history.push(`/${userName}/buisness`)
//   }
//   else if (specificRoute === "Documents") {
//     history.push(`/${userName}/allDocuments`)
//   }
//   else if (specificRoute === "Contacts") {
//     history.push(`/${userName}/customers`)
//   }
//   else if (specificRoute === "Products") { 
//     history.push(`/${userName}/product`)
//   }
// }


useEffect(()=>{
  if (specificRoute === "Invoice") 
      history.push(`/${userName}/allDocuments`)
    if (specificRoute === "Buisness")
      history.push(`/${userName}/buisness`)
    if (specificRoute === "Contacts")
      history.push(`/${userName}/customers`)
    if (specificRoute === "Products")
      history.push(`/${userName}/product`)
  }, [specificRoute])

  const checkIfBuisness = (value) => {
    if (allBuisnessToUser === undefined || !allBuisnessToUser.length) {
      history.push(`/${userName}/add_buisness`)
    }
    else {
      setspecificRoute(value)
    }
  }

  return (
    <>
      <div className="container-fluid con" style={{ height: "88vh", width: "90%", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126" }}>
        <div className="row title d-flex justify-content-center flex-column">
          <div id="firstTitle">What Would You Like</div>
          <div><h1 id="secondTitle">To Do Today?</h1></div>
        </div>
        {/* <button onClick={() => setFunc(allBuisnessToUser)}>
        Click me
        </button> */}
        <div className="row content d-flex justify-content-center">
          <CardDeck style={{ width: "90%", display: "inline-block" }} id="cardsDeck" className="d-flex justify-content-center align-items-center">
            <div className="col-3 c">
              {/* <button id="bgCard"> */}
              <Card id="bgCard" border="light"
                onClick={() => checkIfBuisness("Buisness")}>
                <div variant="" id='iconPosition'
                // onClick={() => checkIfBuisness("Buisness")}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: "0rem" }}
                    size='5x'
                    icon={['fas', 'briefcase']} />
                </div>
                <Card.Body>
                  <Card.Title id="cardTitle">Buisness</Card.Title>
                </Card.Body>
                <div id="bgFooterCard" >
                </div>
              </Card>
              {/* </button> */}
            </div>
            <div className="col-3 c">
              <Card id="bgCard" border="light"
                onClick={() => checkIfBuisness("Invoice")} >
                <div variant="button" id="iconPosition"
                // onClick={() => history.push(`/${userName}/Invoice/Production`)}>
                // onClick={() => checkIfBuisness("Invoice")}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: "0rem" }}
                    size='5x'
                    icon={['fas', 'align-justify']} />
                </div>
                <Card.Body>
                  <Card.Title id="cardTitle">Documents</Card.Title>
                </Card.Body>
                <div id="bgFooterCard" >
                </div>

              </Card>
            </div>
            {/* <div className="col-3 c">
          <Card id="bgCard" border="light">
            <div variant="" id="iconPosition">
              <FontAwesomeIcon
                size='5x'
                icon={['fas', 'credit-card']} />
            </div>
            <Card.Body>
              <Card.Title id="cardTitle">Payments</Card.Title>
              <Row></Row>
            </Card.Body>
            <div id="bgFooterCard" >
            </div>
          </Card>
          </div> */}
            <div className="col-3 c">
              <Card id="bgCard" border="light"
                onClick={() => checkIfBuisness("Contacts")}>
                <div variant="" id='iconPosition'
                // onClick={() => checkIfBuisness("Contacts")}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: "0rem" }}
                    size='5x'
                    icon={['fas', 'user']} />
                </div>
                <Card.Body>
                  <Card.Title id="cardTitle">Contacts</Card.Title>
                </Card.Body>
                <div id="bgFooterCard" >
                </div>
              </Card>
            </div>
            <div className="col-3 c">
              <Card id="bgCard" border="light"
                onClick={() => checkIfBuisness("Products")}>
                <div variant="" id='iconPosition'
                // onClick={() => checkIfBuisness("Products")}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: "0rem" }}
                    size='5x'
                    icon={['fas', 'box-open']} />
                </div>
                <Card.Body>
                  <Card.Title id="cardTitle">Products</Card.Title>
                </Card.Body>
                <div id="bgFooterCard" >
                </div>
              </Card>
            </div>
          </CardDeck>
        </div>
      </div>
    </>
  )
}
