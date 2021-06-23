import React from 'react'
import './icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Icons(){
    return(
        <div className="wrapicons d-flex flex-column ">
         <div className="di"><FontAwesomeIcon className="i" icon={['fas','receipt']}></FontAwesomeIcon></div>
         <div className="di"><FontAwesomeIcon className="i" icon={['fas','user']}></FontAwesomeIcon></div>
         <div className="di"><FontAwesomeIcon className="i" icon={['fas','dollar-sign']}></FontAwesomeIcon></div>
         <div className="di"> <FontAwesomeIcon className="i" icon={['fas','file-signature']}></FontAwesomeIcon></div>
         <div className="di"> <FontAwesomeIcon className="i" icon={['fas','file-signature']}></FontAwesomeIcon></div>
         <div className="di"><FontAwesomeIcon className="i" icon={['fas','atom']}></FontAwesomeIcon></div>
         <div className="di"><FontAwesomeIcon className="i" icon={['fas','palette']}></FontAwesomeIcon></div>
         <div className="di"><FontAwesomeIcon className="i" icon={['fas','archive']}></FontAwesomeIcon></div>
        </div>
    )
}