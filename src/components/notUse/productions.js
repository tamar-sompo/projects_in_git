import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import $ from 'jquery'
import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import {
  Link
} from "react-router-dom";
// import Logo from '../Invoice/editLogo'
import './production.css'
import ButtonsUpdate from '../buttons';
import { actions } from '../../redux/actions/All_actions';
import { Route } from "react-router-dom";
import Production from '../notUse/configurator/level1';
import Design from '../notUse/configurator/design.js';
import { Content } from '../notUse/configurator/content';
import { Conversion } from '../notUse/configurator/level4';

// const mapDispatchToProps = (dispatch) => {
//   return {
//       set_name_component:(name_componenet)=>dispatch(actions.setCurrentComponent(name_componenet))
//     }}



function Maincomp(props) {

  const dispatch = useDispatch();
  const isLevel = useSelector(state => state.designReducer.isLevel)
  // const isLevel = 

  const { step } = props
  const [setDropdownOpen] = useState(false);

  // const dispatch = useDispatch();P

  // const currentComponentStep = useSelector(state => state.displayComponentSteps.isComponentStep);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  { console.log("props.hidden_design", props.hidden) }
  // {props.hidden && $(".lll").fadeOut()}
  return (<div className={`lll ${props.hidden ? 'ggg' : 'trtrtr'}`}>

    {isLevel === 1 &&
      <>
        <Production />

      </>}

    {isLevel === 2 &&
      <Design></Design>
    }
    {/* <Route path="/:userName/Invoice/Production" component={Production} />
    <Route path="/:userName/Invoice/Design" component={Design} />
    <Route path="/:userName/Invoice/Content" component={Content} /> */}
    {/* <Route path="/:userName/Invoice/Conversion" component={Conversion} /> */}
  </div>
  )
}
const mapStateToProps = (state) => {
  return {
    gg: state.LogoReducer.logoDesign.currentComponent,
  }
}
export default connect(mapStateToProps)(Maincomp)

