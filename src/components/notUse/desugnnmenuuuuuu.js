import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import './design_menu.css'
import $ from 'jquery'
import { actions } from '../redux/actions/All_actions';
export default function Design_Menu() {
  const dispatch = useDispatch();
  const open_setting = useSelector(state => state.displayComponents.openSetting);
  const open_design_by_steps = useSelector(state => state.displayComponents.openDesignBySteps)
  const open_design = useSelector(state => state.displayComponents.openDesign)
  // const[openSetting,setOpensetting]=useState(false)
  useEffect(() => {
    if (open_design === true) {
      $("#b_design").focus()
      $("#b_design").addClass('stay_color_design');
      $("#b_menu").removeClass('stay_color_design');
      // $("#b_design").css(
      //   'backgroundColor','rgb(222, 222, 222,0.23)'
      // )

      vv();
    }
    // $("#b_menu").css(
    //   'background', 'linear-gradient(to right, rgb(209, 209, 209,0.13) 100%, rgb(222, 222, 222,0.23) 50%) left',
    //   'backgroundSize','200%'
    // )
    // $(".b").click()
    //   $("#b_menu").on('focus',function()
    // {
    //   $(".des").css({"opacity":"0.5"})

    // }) 
    // $("#b_design").on('focus',function()
    // {
    //   $(".f").css({"opacity":"0.5"})

    // })
  }, [open_design])

  useEffect(() => {

    $("#b_design").focus()
    // $("#b_design").addClass('stay_color_design');
    // $("#b_design").css(
    //   'backgroundColor','rgb(222, 222, 222,0.23)'
    // )

    vv();

  }, [])
  const ff = () => {
    dispatch(actions.setOpenSetting(true))
    dispatch(actions.setOpenDesign(false))
    dispatch(actions.setDisplaySetting(false))

  }

  const vv = () => {
    dispatch(actions.setOpenDesignBySteps(false))
    dispatch(actions.setOpenSetting(false))
    dispatch(actions.setDisplaySetting(false))
    dispatch(actions.setOpenDesign(true))
  }
  // $("p").click(function(){
  //   $(this).addClass('ppoo')
  // })
  // $("#b_design").click(function(){
  //   $("#b_design").addClass('stay_color_design')

  //  })
  //  $("#b_menu").click(function(){
  //   $("#b_menu").removeClass('stay_color_design')

  //  })
  // open_design&&
  // $("#b_design").addClass('stay_color_design');

  $("#b_menu").click(function () {
    $("#b_design").removeClass('stay_color_design');
    $("#b_menu").addClass('stay_color_design');

  })
  $("#b_design").click(function () {
    $("#b_menu").removeClass('stay_color_design');
    if ($("#b_design").hasClass('stay_color_design'))
      $("#b_design").addClass('');
    else
      $("#b_design").addClass('stay_color_design');

    // console.log("ffffffff",e.target.class)


  })

  return (
    <>
      {/* <button id="stamm" hidden="true"></button> */}
      {/* <p>yyyyyyyyyyyyyyyyyyyyyyyyyyyy</p> */}
      <div className="container-fluid t" style={{ marginBottom: "2%" }}>
        <div className="row wrapdm">
          {/* <div className="col-6 wrapb "> */}
          <button className="col-6 b f" id="b_menu" onClick={ff}>MENU</button>
          <button className=" col-6 b des" id="b_design" onClick={vv}>DESIGN</button>
          {/* </div> */}
          {/* <div className="col-6 wrapb "> */}

          {/* </div> */}
        </div>
      </div>
      {/* <div className="stam"style={{width:"50px",height:"10px" ,backgroundColor:"pink"}}></div> */}
      {/* <button className="b" id="b_menu">MENU</button>
    <button className="b des" id="b_design">DESIGN</button> */}

      {/* <div className="button1"></div><br></br>
    <div className="button2"></div> */}
      {/* <div className="ee">yyy</div> */}
      {/* <button class="button1"></button>
<button class="button2"></button> */}
    </>
  )
}









import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import './new_configurator.css'
// import { actions } from '../../../../redux/actions/action'
// import DropDownList from '../dropDownList/dropDownList'
// import ConfiguratorTop from '../configuratorTop/configuratorTop'
import $ from 'jquery'
import { useHistory } from 'react-router-dom';
// import history from '../../../history'
import { withRouter } from 'react-router-dom';
import Maincomp from './productions'
import Setting from '../warp_old/setting'
import NewSetting from '../wrap/newSetting';
import Design_Menu from './design_menu'
function NewConfigorator(props) {
  const [hidden_design, setHidden_design] = useState(true)
  const [margin1, setMargin] = useState('25%')
  const ifDesign = useSelector(state => state.displayComponents.openDesign)
  // const open_design=useSelector(state=>state.displayComponents.openDesign)
  const open_design_by_steps = useSelector(state => state.displayComponents.openDesignBySteps)
  const history = useHistory()
  const changeBackground = (e) => {
    // props.history.push("/" + props.user)
    $(document).ready(function () {
      $("li").removeClass("li-back")
      $(e).addClass("li-back")
    })

  }
  useEffect(() => {
    // $('.left_nav').addClass('border_configurator') 
  })
  return (
    <>
      <div className="left_nav border_configurator">
        {/* {window.location.href.indexOf("invoice") != -1 && $(".setting").css('margin-top','') &&  */}
        {window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
          $('.left_nav').removeClass('border_configurator') &&
          <>
            <Design_Menu />
            {ifDesign || open_design_by_steps ?
              <>

                <div style={{ position: "absolute" }}>
                  <NewSetting ></NewSetting></div>
                <div style={{ position: "relative" }}>
                  <Maincomp ></Maincomp> </div>
              </> :
              //  $('.left_nav').addClass('border_configurator')&&
              <>
                <div style={{ position: "absolute", zIndex: "999", paddingLeft: "16px" }}>
                  <Maincomp hidden={hidden_design}></Maincomp> </div>

                <div style={{ position: "relative" }}>
                  <NewSetting ></NewSetting>
                </div>
              </>}

            {/* {ifDesign ?
                              */}
          </>
          :
          $('.left_nav').addClass('border_configurator') &&
          <>
            <div style={{ marginTop: '25%' }}>
              {/* <Maincomp></Maincomp> */}
              <NewSetting ></NewSetting>
            </div>
          </>
        }
        {/* } */}


        {/* <Setting></Setting> */}

        {/* <ConfiguratorTop /> */}
        {/* <DropDownList /> */}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    // user: state.public_reducer.userName,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewConfigorator))












import React, { useState, useEffect } from 'react'
import './newSetting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';
import { actions } from '../../redux/actions/All_actions';
import $ from 'jquery'
import Design_Menu from '../design_menu'


export default function NewSetting(props) {
  const open_setting = useSelector(state => state.displayComponents.openSetting);
  const displaySetting = useSelector(state => state.displayComponents.displaySetting);
  const open_design_by_steps = useSelector(state => state.displayComponents.openDesignBySteps)
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch();
  const setdispatch = () => {
    dispatch(actions.setInvoiceShow({}));
    dispatch(actions.setDetailsContact({}));

    // dispatch({type:"GET_ALL_PRODUCT"});

  }
  const setdisplaySetting = (content) => {
    dispatch(actions.setOpenSetting(false));
    dispatch(actions.setDisplaySetting(true))

    if (content == 'products')
      dispatch({ type: "GET_ALL_PRODUCT" })
  }
  useEffect(() => {
    // dispatch(actions.setOpenSetting(false));
  }, [])
  //   $('button').click(function(){
  //     $(this).addClass('mnmn')
  //   })

  //  $('li').click( function(){
  //   //  $('li').removeClass('yuutiiuioio')
  //   $(this).addClass('yuutiiuioio');    

  // });
  return (
    <>
      {/* <button></button> */}
      {console.log("open_setting", open_setting)}
      {/* ${open_setting ? 'ttt setting':'setting2 ii'} */}
      {console.log("open_design_by_steps", open_design_by_steps)}
      <div className={`container-fluid ${open_setting ? 'ttt setting' : displaySetting ? 'setting3' : 'setting2 ii'}`} >
        {/* <Design_Menu /> */}

        <ul class="list-group list-group-flush d-flex flex-column r">
          <ul class="list-group d-flex flex-column border-hidden">
            <li className="list-group-item yy d-flex align-items-center" >
              <FontAwesomeIcon size="lg" icon={['fas', 'archive']}></FontAwesomeIcon><Link className="l" to="/buisness"
                style={{ textDecoration: "none" }} onClick={setdisplaySetting}>Buisness</Link>

            </li>
            <li className="li_hidden"></li>
            <li className="list-group-item yy d-flex align-items-center">
              <FontAwesomeIcon size="lg" icon={['fas', 'receipt']}></FontAwesomeIcon><Link className="l" onClick={setdisplaySetting} to="/allInvoices">Invoices</Link>
            </li>
            <li className="li_hidden"></li>
            <li className="list-group-item yy d-flex align-items-center">
              <FontAwesomeIcon size="lg" icon={['fas', 'user']}></FontAwesomeIcon><Link className="l" to="/product" onClick={() => setdisplaySetting('products')} >Products</Link>
            </li>
            <li className="li_hidden"></li>
            {/* <li className="list-group-item yy d-flex align-items-center"> */}
            {/* <FontAwesomeIcon size="1px" icon={['fas','dollar-sign']}></FontAwesomeIcon>  <a class="l" href="#">Payment</a> */}
            {/* </li> */}
            {/* <li className="list-group-item yy d-flex align-items-center"> */}
            {/* <FontAwesomeIcon size="1px" icon={['fas','file-signature']}></FontAwesomeIcon><Link class="l" to="/invoice" onClick={()=>setdispatch()}>Bit</Link> */}
            {/* </li> */}
            <li className="list-group-item yy d-flex align-items-center" >
              <FontAwesomeIcon size="lg" icon={['fas', 'atom']}></FontAwesomeIcon><Link class="l" to="/customers" onClick={setdisplaySetting} >contacts</Link>
            </li>
            <li className="li_hidden"></li>
            {/* <li className="list-group-item yy d-flex align-items-center" >
               <FontAwesomeIcon size="1px" icon={['fas','file-signature']}></FontAwesomeIcon><Link class="l" to="/customers" >signatures</Link>
              </li> */}
            {/* <li className="list-group-item yy d-flex align-items-center" style={{backgroundColor:"#0A102E",border:"none",
           color: "white"}}>
                <FontAwesomeIcon size="1px"  icon={['fas','palette']}></FontAwesomeIcon> <a class="l" href="#">Design</a>
              </li>
              <li className="list-group-item yy d-flex align-items-center li_wrap" style={{backgroundColor:"#0A102E",border:"none",
           color: "white"}}>
                <FontAwesomeIcon  size="1px"  icon={['fas','archive']}></FontAwesomeIcon><a class="l" href="#">Atoms</a>
              </li> */}
          </ul>
        </ul>

      </div>
      {/* <div className="trtr" style={{width:"50px",height:"50px",backgroundColor:"red"}}>fgyueryfggfgfgfggfgfg</div> */}
    </>
  )
}
    // const mapStateToProps=(state)=>{

    // }
    // const mapDispatchToProps=(dispatch)=>{
    //   return{ 
    //      getproduct:()=>dispatch({type:"GET_ALL_PRODUCT"}),
    //      setDetailsView:(e)=>dispatch(actions.setInvoiceShow(e))
    //     }

    // }
    // export default connect(mapStateToProps,mapDispatchToProps)(NewSetting)
















