import React, { useEffect, useState } from 'react'
// import './carousel';
import ListInvoice from './carousel.js'
import './myInvoice.css';
import { useDispatch, useSelector } from 'react-redux';

export default function MyInvoice(props) {
    const allInvoicesToBuisness = useSelector(state => state.invoiceReducer.allInvoices)
    console.log("allInvoicesToBuisness",allInvoicesToBuisness.length)
    // useEffect(() => {
    //     props.dispatch(actions.getAllInvoicesToBuisness())
    // }, [])

    return <>
    {
        <div dir="rtl" className="container home">
            <div className="row">
                <div className="text-1 "> My Invoice</div>
            </div>
            <div className="row row-list mt-4">
            <div className="row row-list  px-0">
                 <ListInvoice invoiceList={allInvoicesToBuisness} /></div>
            </div>
        </div>
    }
    </>
    
 
}  
 