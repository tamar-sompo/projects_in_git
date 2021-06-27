import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import './config.css';
import './design.css'
import '../../wrap/newSetting.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions } from '../../../redux/actions/All_actions'
import DesignPicture1 from './designPicture1';
import { useDispatch, useSelector } from 'react-redux';
import ExampleTable from './exampleTable';
import FixLogo from './fixLogo'
import { CheckCircle } from '@material-ui/icons';
import Color1 from './color1';
import { light } from '@material-ui/core/styles/createPalette';
import $ from 'jquery'


export default function Design(props) {
  const [idBefor, setIdBefor] = useState('');

  const dispatch = useDispatch();
  //     const updateCustomerField = (fieldToUpdate) => dispatch(setCustomerDetails(fieldToUpdate))
  const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
  //     const customerDetails = useSelector(state => state.customerReducer.customer);
  const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
  const divRef = React.useRef(null);


  // $('li').click(function(){
  // alert("hglkj")
  // alert(this.id)
  // $(`#${this.id}`).addClass('liEnter')
  // if(idBefor!='')
  //     $(`#${idBefor}`).removeClass('liEnter')
  // setIdBefor(this.id)
  // })
const addClassToIl = (e) => {
  if($(`#${e}`).hasClass('liEnter'))
      $(`#${e}`).removeClass('liEnter');
else
    $(`#${e}`).addClass('liEnter');
    if (idBefor === '')
       setIdBefor(e)
    else{
      if(idBefor !== e)
     {
        $(`#${idBefor}`).removeClass('liEnter');
      setIdBefor(e)}
    }

    // console.log("ffffffff",e.target.class)
  }


      // $(this).addClass('liEnter');    
  

  return (
    <>


      <ul class="list-group list-group-flush">
        <ul class="list-group d-flex flex-column accordion" id="accordionExample">


          
          <li className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="1"
            onClick={() => addClassToIl('1')}
            data-toggle="collapse" data-target="#collapsePicture" aria-expanded="false" aria-controls="collapsePicture collapseColor">
            <FontAwesomeIcon
              // className='iconBtnConfig pr-2 pt-1'
              size="lg"
              icon={['fas', 'file-image']}
            >
            </FontAwesomeIcon>
            <h5 className="l">Picture</h5>
          </li>
          {/* </div>  */}

          <div className="d-flex justify-content-around">
            <div class="collapse" id="collapsePicture" data-parent="#accordionExample">
              <DesignPicture1></DesignPicture1>
            </div></div>

          <li
            onClick={() => addClassToIl('2')}

            className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="2"

            // className={ myData ? 'selected' : '' }
            data-toggle="collapse" data-target="#collapseColor" aria-expanded="false" aria-controls="collapseColor">
            <FontAwesomeIcon

              // className='iconBtnConfig pr-2 pt-1'
              size='lg'
              icon={['fas', 'palette']}
            >
            </FontAwesomeIcon>
            <h5 className="l">color</h5>
          </li>
          {/* </div>  */}
          <div className="d-flex justify-content-around">
            <div class="collapse" id="collapseColor" data-parent="#accordionExample" style={{ width: '100%' }}>
              <Color1></Color1>
            </div>
          </div>

          {/* <div className='bgcBtnConfig m-0 mt-2 p-0 mb-5' data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> */}
          <li 
          onClick={() => addClassToIl('3')}
          className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="3"
            data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
          //  className="btnConfig pl-4 ml-4 mt-3  m-0 p-0 font-weight-bold my-auto"
          >
            <FontAwesomeIcon
              // className='iconList'
              size='lg'
              icon={['fas', 'font']}
            >
            </FontAwesomeIcon>
            <h5 className="l">logo</h5>

          </li>
          {/* </div> */}
          <div className="d-flex justify-content-around">
            <div class="collapse" id="collapseExample" data-parent="#accordionExample" style={{ width: '70%' }}>

              <FixLogo></FixLogo>
            </div>
          </div>
        </ul>
      </ul>
{/* <ExampleTable></ExampleTable> */}

   
    </>) }; 























// import React from 'react'
// function Design(){
//     return(
//         <>
//         <div className="">
//                                 <FormLabel className={classes.textcontect}>From</FormLabel>
//                                 <AntSwitch onChange={this.handleChangeSwitchFrom} />
//                             </div>
//                             <input type="text"
//                                 width={2}
//                                 disabled={this.props.quote2.checkedSwitchFrom}
//                                 InputProps={{ className: classes.multilineColor }}
//                                 onChange={(e) => this.props.changeFrom(e.target.value)}
//                                 placeholder="From"
//                                 value={this.props.quote ? this.props.quote.contactDetailsFrom ? this.props.quote.contactDetailsFrom : window.location.pathname.split('/')[2] : window.location.pathname.split('/')[2]}
//                                 className={classes.fieldTextStyle} />


//                             <br></br>
//                             </>
//                             )
//     }
// }