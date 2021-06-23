import React, { useState } from 'react'
// import './body.css'
// import AllWorkspaces from '../workspace/allWorkspaces/allWorkspaces';
// import TeamExample from '../team/teamExample'
import { Button, Modal, Form } from 'react-bootstrap';
import Moment from 'moment';



export default function DateFormat() {
    const arrFormatDate = ["ddd DD-MM-YYYY", 'DD-MM-YYYY', 'l', 'L', 'LL', "MMMM Do YYYY", "MM-DD-YYYY"]

    return (
        <>
            <div className='row container-format-date'>
                {/* <p className='format-date-title pb-1 m-0' */}
                {/* //    onClick={setScrollFormatDate} */}
                {/* // >format Date</p> */}
                <div className="col-1">
                    <select className='format-date'
                        style={{ fontSize: "" }}
                    //    defaultChecked={objMagazine.dateFormat}
                    //    onChange={ (e)=>setMagazineFormatDateAndScroll(e.target.value)}
                    >
                        {arrFormatDate.map((item, index) => <option key={index} value={item}>{Moment(new Date(Date.now())).format(item)}</option>)}
                    </select>
                </div>
            </div>
        </>
    );
}
// )




