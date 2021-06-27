import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Form}from 'react-bootstrap'
export function Production(props){
    const [fromClicked,setFromClicked]=useState(false)
    const [toClicked,setToClicked]=useState(false)
    
  return (
<>
{/* 1 */}
<div className="d-flex justify-content-center p-2 pl-2">
      <div  className="btn pl-2 rounded-5 col-md-8 row mt-2">
        <h5  className="col-md-10 textConfig p-2">
            From
        </h5>
        <div className='col-md-2 textConfig p-2' onClick={()=>setFromClicked(!fromClicked)}>
          <FontAwesomeIcon icon={['fas', !toClicked?'angle-right':'angle-down']}></FontAwesomeIcon></div>
      </div>
 </div> 
 {fromClicked&&<div className="justify-content-center ml-5 mr-5 pb-5">
 <input className='inp textConfig row mt-2'placeholder='Edit your name'></input>
 <input className='inp textConfig row mt-2'placeholder='Edit your Email' ></input>
 <input className='inp textConfig row mt-2'placeholder='Edit your address' ></input>
 <input className='inp textConfig row mt-2'placeholder='Edit your phone'></input>
</div>}
<div className="d-flex justify-content-center p-2 pl-2">
      <div  className="btn pl-2 rounded-5 col-md-8 row mt-2">
        <h5  className="col-md-10 textConfig p-2">
            To
        </h5>
        <div className='col-md-2 textConfig p-2'onClick={()=>setToClicked(!toClicked)}>
        <FontAwesomeIcon icon={['fas', !toClicked?'angle-right':'angle-down']}></FontAwesomeIcon>
        </div>
      </div>
 </div> 
 {toClicked&&<div className="justify-content-center ml-5 mr-5 pb-5">
 <input className='inp textConfig row mt-2'placeholder='Edit your name'></input>
 <input className='inp textConfig row mt-2'placeholder='Edit your name' ></input>
 <input className='inp textConfig row mt-2'placeholder='Edit your name' ></input>
 <input className='inp textConfig row mt-2'placeholder='Edit your name'></input>
</div>}
{/* 4 */}
<div className=' justify-content-center ml-5'>
<div className='row'>
{/* <div className='col-md-8 textConfig'>Save Tamplate</div> */}

<Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Save Tamplate"
    size='5'
  />
</Form>

</div>

<div className='textConfig'>export:</div>
<div className='row  justify-content-center mt-0  mr-5 pb-5'>
<FontAwesomeIcon className='col-md-3 icon4 text-left'size='2x' icon={['fas', 'envelope']}></FontAwesomeIcon>
<FontAwesomeIcon className='col-md-3 icon4 text-left'size='2x' icon={['fas', 'phone-square']}></FontAwesomeIcon>
<FontAwesomeIcon className='col-md-3 icon4 text-left'size='2x' icon={['fas', 'file-pdf']}></FontAwesomeIcon>
<FontAwesomeIcon className='col-md-3 icon4 text-left'size='2x' icon={['fas','print']}></FontAwesomeIcon>
</div>
</div>
{/*routing buttons */}
 <div className='row'>
<button className='col-md-1 rounded-circle text-center routindBtn'>1</button>
<hr className='col-md-2 routinHr'></hr>
<button className='col-md-1 rounded-circle text-center routindBtn'>2</button>
<hr className='col-md-2 routinHr'></hr>
<button className='col-md-1 rounded-circle text-center routindBtn'>3</button>
<hr className='col-md-2 routinHr'></hr>
<button className='col-md-1 rounded-circle text-center routindBtn'>4</button>
</div>
 </>);

}

