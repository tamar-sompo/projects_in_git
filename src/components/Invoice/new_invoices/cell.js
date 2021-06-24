import React, { useEffect, useRef, useState } from 'react';
import '../invoice.css';
// import '../invoiceTemp1.css';
import '../../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions';
import { Link, useHistory } from "react-router-dom";


function Cell(props) {
    const { value, onChange, onFocus, onBlur } = props;
    const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)
    return (
        <input
            // id={id}
            onFocus={onFocus}
            disabled={displayInvoice === "true" ? "disable" : ""}
            className={props.flagValidPrice ? 'cell design_text validB' : 'cell design_text '}
            // className='cell design_text'
            // maxlength="15"
            size="7"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
        >
        </input>
    )
}
export default Cell