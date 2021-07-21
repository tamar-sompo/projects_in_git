import React, { useState } from 'react';
import '../customers/customers.css'

export default function SearchInvoices(props) {
    const [searchby, setsearchby] = useState('')
    const setplaceholder = (value) => {
        setsearchby(value);
        props.handlesearchby(value)
    }
    const changeInput = (e) => {
        "hi");
        let val = e.target.value.toLowerCase();
        val);
        props.changeInput(val);
        props.filter();
    }
    return (
        <>
            <div className="wrapsearch d-flex justify-content-center flex-column">
                <div className="has-search ">
                    <input type="text" className="myTextBox" onChange={e => changeInput(e)} placeholder={searchby} />
                    <span class="fa fa-search ff"></span>
                </div>
                <div className="wraplabel">
                    <label className="label1" onClick={() => setplaceholder("customerInvoice")}>Name</label>
                    <label className="label1" onClick={() => setplaceholder('customerEmail')} >Email</label>
                    <label className="label1" onClick={() => setplaceholder('customer phone')}>Phone</label>
                    <label className="label1" onClick={() => setplaceholder('')}>All</label>
                </div>
            </div>
        </>
    )
}