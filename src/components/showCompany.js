import React from 'react'
import ContactForm from './example'
import { connect } from 'react-redux';
import {actions} from '../redux/actions/All_actions'

const mapStateToProps = (state) => {
    return {
    };
}
const mapDispatchToProps=(dispatch)=>{
return{
    postCompany:(e)=>dispatch(actions.setCompanyEdit(e))
    }
}
function ShowCompany(props){
   
    const handleSubmit= (values) => {
        console.log(values);
        props.postCompany({values})
    }
    return (
        <>
        <ContactForm onSubmit={handleSubmit} />    
        </>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowCompany) 