import React, { useState } from 'react'
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { Col, Row, Container, Toast } from 'react-bootstrap'
// import loudIcon from '../../assets/loude.gif'
import uploadAnimation from '../assets/ddd.gif'
import './messageFormat.css';
function LeaderLouder() {
    return (
        <>       
            {/* <div style={{background:"red", width:"100%", height:"30px"}}> */}
                <img src={uploadAnimation} className="uploadAnimation"></img>
            {/* </div> */}
 {/* <img src={loudIcon}></img> */}
        </>
    )

}
export default LeaderLouder