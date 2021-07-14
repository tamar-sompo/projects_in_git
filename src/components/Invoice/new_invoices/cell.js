import React from 'react';

// import '../invoice.css';
// import '../invoiceTemp1.css';
import '../../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Row, Container, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
// import { actions } from '../../../redux/actions/All_actions';
// import { Link, useHistory } from "react-router-dom";
import './new_invoice.css'


function Cell(props) {
    const { value, onChange, onFocus, onBlur, type } = props;
    // debugger
    const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)
    return (
        <>
            <input
                // id={id}

                type={type}
                onFocus={onFocus}
                disabled={displayInvoice === "true" ? "disable" : ""}
                className={'cell design_text ffgf'}
                // className='cell design_text'
                // maxlength="15"
                size="7"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />
        </>
    )
}
export default Cell