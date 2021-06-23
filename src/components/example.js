import React from 'react'
import { Field, reduxForm, submit } from 'redux-form'
import { Button, Form, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import $ from "jquery";
import './example.css'
// import { BsTrash } from "react-icons/bs";

const mapStateToProps = (state) => {
    return {
        onClickFlag:state.companyReducer.flagOnClick,
        company:state.companyReducer.company
    };
}

const mapDispatchToProps = (dispatch) => ({
    // allCompany:(company)=>dispatch(setCompany(company)),
    // deleteField: (e) => dispatch(actions.deleteField(e)),
    // updateDashboard: (e) => {
    //     dispatch(actions.updateDashboard(e))
    // }
})
let ContactForm = props => {
    const click11=()=>{

    }
    const refSub=React.createRef;
    const { handleSubmit, fields, deleteField } = props
    return (
        <>
       
                <Form onSubmit={handleSubmit} id='form1' ref={refSub}>
                    <Form>
                         {console.log("khiuhgiuhgiuh",props.onClickFlag)}
                         {/* {console.log("ccccccccccccc",props.company.email)} */}
                            <>

{/* <div className="row">
                    <div className="col-10  pl-4 mt-4 div_font">Company Information</div>
                    <div className="col-2 div_btn_save btn_save_small pr-2 mt-4">
                        <button className="btn_save btn btn-outline-dark" type="submit" onClick={saveInformation}>Save Setting</button>
                    </div> */}
                    {/* <div className="col-2 btn_save"><button>save</button></div> */}
                {/* </div> */}


                            <div className="container-fluid div1 scrollbar">

                {/* <div className="row"> */}
                    {/* <div className="col-10  pl-4 mt-4 div_font">Company Information</div> */}
                   
                    {/* <div className="col-2 btn_save"><button>save</button></div> */}
                {/* </div> */}
                <div className="row pb-4">
                {/* <div className="row pb-4"> */}
                    {/* <div className="col-md-1"> */}
                        <div className="container-fluid">
                                <Form sm="3" controlId="formGridEmail">
                                    {/* <Form.Label>uuuu</Form.Label> */}
                                    {/* <label onClick={() => deleteField(field)} ><BsTrash /></label> */}
                                    <div className="col-md-11">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col font_1">Company Name</div>
                            </div>
                            <div className="row">
                                <div className="col pr-2">
                                    <Field name='companyName' component='Input' type='text' type="text" class="form-control i_topic i_color_grey"
                                        placeholder={props.company.companyName} value={props.company.companyName} aria-describedby="basic-addon2"/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6 pl-2 pb-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col pl-3 font_2">
                                    Position / department
                                </div>
                            </div>
                            <div className="row">
                                <div className="col pr-1 col_small_left">
                                    <Field name='position' component='Input' type='text' 
                                    class="form-control form-control i_topic i_color_grey"  placeholder={props.company.position}
                                    value={props.company.position} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>


                    <div className="col-md-6 pr-2 pb-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col font_2 pr-0 pl-1 col_small_lable">
                                    Company Vat Namber
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col_small_right pl-0">
                                    <Field name='vat' component='Input' 
                                    type="number" class="form-control i_topic i_color_grey" value={props.company.vat} placeholder={props.company.vat} aria-describedby="basic-addon2"/>
                                   </div>
                            </div>
                        </div>
                    </div>
                

                <div className="row">
                    <div className="col-md-6 pl-2 pb-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col pl-3 font_2">
                                    Company Phon
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col pr-1 col_small_left">
                                <Field name='phone' component='Input'
                                type="text" class="form-control i_topic i_color_grey"
                                placeholder={props.company.phone}
                                aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 pr-2 pb-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col font_2 pr-0 pl-1 col_small_lable">
                                Company Email
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col_small_right pl-0">
                                 <Field name='companyEmail' component='Input' type='text' 
                                 class="form-control i_topic i_color_grey" placeholder={props.company.companyEmail} aria-describedby="basic-addon2"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-5 pl-2 pb-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col pl-3 font_2">
                                    Address
                                </div>
                            </div>

                            <div className="row">
                                <div className="col pr-0 col_small_left">
                                    <Field name='address' component='Input' type='text' 
                                    class="form-control i_topic i_color_grey" placeholder={props.company.address} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-md-1 pr-2 pl-2 pb-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col font_2 pl-0 col_small_lable">
                                    Number
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col_small_right col_small_num pl-0 pr-2">
                                    <Field name='numberAddress' component='Input'
                                    type="number" class="form-control i_topic i_color_grey" placeholder={props.company.numberAddress} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    </div>
                            </div>
                        </div>
                    </div></div>


                    {/* <div className="col-md-3 pl-2 pb-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col pl-3 font_2">
                                    Country
                                </div>
                            </div>

                            <div className="row">
                                <div className="col pr-1 col_small_left pl-2">
                                    <Field name='city' component='Input' type='text' />
                                    </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-3 pr-2 pb-4 pl-2">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col font_2 pr-0 pl-1 col_small_lable">
                                    City
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col_small_right pl-0">

                                    <Field name='personalInformation' component='Input' type='text' />
                                    </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}



                {/* <div className="row"> */}
                    {/* <div className="col-12 pb-3 div_font pl-4">Personal Information</div> */}
                {/* </div> */}
                {/* <div className="row">
                    <div className="col-md-3 pl-2 pb-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col pl-3 font_2">
                                    Username
                                </div>
                            </div>
                            <div className="row">
                                <div className="col pr-1 col_small_left"> */}
                                    {/* <Field name='username' component='Input' type='text' /> */}
                                    {/* <div className="center_txt pr-0 pl-2 input-group i_topic i_color_grey form-control"> */}
                                        {/* {props.user.username} */}
                                    {/* </div> */}
                                {/* </div>

                            </div>
                        </div>
                    </div> */}


<div className="col-md-3 pl-0 pr-2 pb-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col font_2 pr-0 pl-1 col_small_lable">
                                    Birthday
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col_small_right pl-0 pr-1">
                                    <Field name='birthday' component='Input' type='text' value={props.company.birthday}  placeholder={props.company.birthday} class="form-control i_topic i_color_grey calendar"/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 pr-2 pb-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col font_2 pr-0 pl-1 col_small_lable">
                                    Mail Address
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col_small_right pl-0">
                                    <Field name='email' component='Input' type='text' value={props.company.email}  placeholder={props.company.email} class="form-control i_topic i_color_grey calendar" aria-describedby="basic-addon2"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                                </Form>
                                </div>
                                </div>
                                </div>
                                {/* </div> */}
                                
                            </>
                    
                    </Form>
                    
                   {/* {props.onClickFlag? click11=()=>{}: <></>} */}
                    <Button variant="primary" name="sub" id="bs" type="submit">Submit</Button>
                   
                </Form> 
                <h1>Loading...</h1>
        </>)
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)