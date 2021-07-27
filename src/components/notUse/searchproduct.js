import '../customers/customers.css'
import React, { useState } from 'react';

export default function SearchProduct(props) {

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
    }
    return (
        <>

            {/* <div class=" has-search d-flex align-items-center">
                <span class="fa fa-search  ff"></span>
             <input type="text" class="form-control" placeholder="Search" onChange={e => changeInput(e)}  aria-label="Username" aria-describedby="basic-addon1"/>
                
               </div> */}
            <div className="wrapsearch d-flex justify-content-center flex-column">
                <div className="has-search ">
                    <input type="text" className="myTextBox" onChange={e => changeInput(e)} placeholder={searchby} />
                    <span class="fa fa-search ff"></span>
                </div>
                {/* <div className="d-flex justify-content-around">
    <div>
<input className="myTextBox" type="text"/></div>
<div className="d-flex align-items-center">
<span class="fa fa-search  ff"></span></div>
</div> */}
                <div className="wraplabel">
                    <label className="label1" onClick={() => setplaceholder("productName")}>Name</label>
                    <label className="label1" onClick={() => setplaceholder('userProduct')}>User</label>
                    <label className="label1" onClick={() => setplaceholder('productAmount')}>Amount</label>
                    <label className="label1" onClick={() => setplaceholder('')}>All</label>
                </div>
            </div>
        </>
    )
}