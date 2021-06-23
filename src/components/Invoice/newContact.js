import React from 'react'
import ContactForm from './createContact'
import { connect } from 'react-redux';
import {actions} from '../../redux/actions/All_actions'
const mapStateToProps = (state) => {
    return {
    };
}
const mapDispatchToProps=(dispatch)=>{
return{
    postnewContact1:(e)=>dispatch(actions.setNewContact(e))
    }
}
function NewContact(props){
   
    const  handleSubmit= (values) => {
        console.log(values);
        props.postnewContact1({values})
    }
    return (
        <>
        <ContactForm onSubmit={handleSubmit} />    
        </>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(NewContact) 
