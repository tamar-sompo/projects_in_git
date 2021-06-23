import React, { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './newInvoice.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { Button } from 'bootstrap';

export const TopNav = () => {
  const dispatch = useDispatch();
  const focusAction = useSelector(state => state.invoiceReducer.focusAction);
  const setFocusAction = (focusAction) => dispatch(actions.setFocusAction(focusAction));

  return (<>
  <h4>Name Of Invoice</h4>
  <Row>
    <div 
      className='col-md-8'
      style={{backgroundColor:'white', border:'1px solid black'}}
      >
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'paperclip']}
      onClick={() => setFocusAction('')}
    /> 
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'underline']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'paint-brush']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'paint-roller']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'italic']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'bold']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'font']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'align-left']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'align-right']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'align-center']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'align-justify']}
      onClick={() => setFocusAction('')}
    />
    </div>
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'save']}
      onClick={() => setFocusAction('')}
    />
    <FontAwesomeIcon 
      className={focusAction===''?'navBarIcon':'check'}
      icon={['fas', 'print']}
      onClick={() => setFocusAction('')}
    />
    <Button value='Export'/>
  </Row>
  </>)
}