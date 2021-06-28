// 


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sideConfig.css';

export default function Production(props) {
  const [clickFrom, setClickFrom] = useState(false)
  const [clickFor, setClickFor] = useState(false)


  return (
    <>
      <div className="d-flex justify-content-center p-2 pl-2">
        <div className="btn pl-2 rounded-5 col-md-8 row mt-2">
          <h5 className="col-md-10 textButton p-2">
            From
          </h5>
          <div className='col-md-2 textButton p-2' onClick={() => setClickFrom(!clickFrom)}>
            <FontAwesomeIcon
              icon={['fas', clickFrom ? 'angle-right' : 'angle-down']}
            ></FontAwesomeIcon>

          </div>
        </div>
      </div>
      {!clickFrom && <div className="justify-content-center ml-5 mr-5 pb-5">
        <input className='inp row mt-2' placeholder='Edit your name'></input>
        <input className='inp row mt-2' placeholder='Edit your Email' ></input>
        <input className='inp row mt-2' placeholder='Edit your address' ></input>
        <input className='inp row mt-2' placeholder='Edit your phone'></input>
      </div>}
      <div className="d-flex justify-content-center p-2 pl-2">
        <div className="btn pl-2 rounded-5 col-md-8 row mt-2">
          <h5 className="col-md-10 textButton p-2">
            To
          </h5>
          <div className='col-md-2 textButton p-2' onClick={() => setClickFor(!clickFor)}>
            <FontAwesomeIcon
              icon={['fas', clickFor ? 'angle-right' : 'angle-down']}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {!clickFor && <div className="justify-content-center ml-5 mr-5 pb-5" ref={refTo}>
        <input className='inp row mt-2' placeholder='Edit your name'></input>
        <input className='inp row mt-2' placeholder='Edit your name' ></input>
        <input className='inp row mt-2' placeholder='Edit your name' ></input>
        <input className='inp row mt-2' placeholder='Edit your name'></input>
      </div>}
    </>
  )
}
