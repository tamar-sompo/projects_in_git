import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import Setting from '../warp/setting';
import './customers.css'
// import profileDefault from '../assets/newLogo.png'
import SearchContact from './search'
// import { borderRadius } from 'react-select/src/theme';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { MdEdit, MdDelete, MdContentCopy } from 'react-icons/md'
import ButtonPlus from '../forms/buttonPlus'
// import ContactForm from '../forms/cotactForm'
import pimg from '../assets/profil.png'
// const removeCustomerById = (theId) => {
//     $.ajax({
//       url: 'https://finance.leader.codes/deleteCustomer/DYc3VUmEHScqaZBw300lv89fna82/' + theId,
//       type: 'POST',
//       withCradentials: true,
//       async: false,
//       contentType: 'application/json; charset=utf-8',
//       dataType: 'json',
//       success: async function (result) {
//         console.log("successRemoveCustomer", result)

//       },
//     });
//   }
// const EditCustomerById  = (theId) => {
//     saveIdToDispatch(theId);
//     console.log(theId);
//     // var theId = theId;
//     $.ajax({
//       url: 'https://finance.leader.codes/show/' + theId,
//       type: 'GET',
//       withCradentials: true,
//       async: false,
//       contentType: 'application/json; charset=utf-8',
//       dataType: 'json',
//       success: async function (customerDetailsView) {
//         console.log("success", customerDetailsView)
//         await dispatch({ type: 'SET_CUSTOMERVIEW', payload: customerDetailsView });
//         history.push("/show/" + theId)
//       },
//     });
//   }

const useStyles = makeStyles((theme) => ({
    root: {

    },
    searchClose: {

    },
    searchOpen: {

    }
}))
function Customers(props) {
    const classes = useStyles();
    const status = ['new', 'in progress', 'connected']
    // const statusClrs = { 'Open': 'green','Deal': '#d93025','In Progress': '#FFA756', 'New': '#00B69B', 'Connected': '#6226EF', 'Unqualified': '#EF3826' }
    const statusLeft = { 'Open': '22px', 'Deal': '20px', 'In Progress': '17px', 'New': '47px', 'Connected': '27px', 'Unqualified': '25px' }
    const list = ['aaaa', 'bbbb', 'cccc', 'dddddd', 'eeeeee'];
    const statusClrs = [{ 'inProgress': '#FFA756' }, { 'new': '#00B69B' }];
    const [searchTerm, setSearchTerm] = useState('');
    const [searchby, setSearchby] = useState('');
    // const [searchcontact,setSearchcontact]=useState([])
    const [arr, setarr] = useState(['t', 'y', 'g', '0'])
    const [chooseline, setchooseline] = useState({
        flag: "false",
        index: "",
        isShown: false
    });
    const [flag, setFlag] = useState()

    let contacts = [];
    let searchcontact = []
    // let searchcontact=[];
    useEffect(() => { }, [chooseline])
    // const [flag,setFlag]=useState(false);
    const handlesearchby = (value) => {
        setSearchby(value);
    }
    const changeInput = (val) => {
        setSearchTerm(val)
    }
    const convertdate = (date1) => {
        let date = new Date(date1)
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
    const mmm = (email) => {
        //   console.log("jjjj",email.length)

        if (email.length > 22) {
            return email.substring(0, email.length - (email.length - 25)) + '...';
        }
        return email


    }
    const vvv = (arr, ind) => {

        arr.splice(ind, 1)
        return arr;
    }
    const fff = (key) => {

        setchooseline({
            flag: "true",
            index: key,
            isShown: true
        })
        console.log("tytyt", chooseline)
    }
    const ppp = (key) => {

        setchooseline({
            flag: "false",
            index: key,
            isShown: false
        })
        console.log("tytyt", chooseline)
    }
    const f = () => {
        if (searchby === "customerName") {

            //console.log("hhh",contacts)
            console.log('begining name')
            console.log('', contacts)
            console.log(searchTerm)

            searchcontact = contacts.filter(contact1 =>
                (contact1.name != null && contact1.name.toLowerCase().includes(searchTerm)));
            console.log("oooo", searchcontact)
            return true

        }
        if (searchby === "customerEmail") {

            //  searchcontact.push
            searchcontact = contacts.filter(contact =>
                (contact.email != null && contact.email.toLowerCase().includes(searchTerm)));
            return true
        }
        if (searchby === "customerPhone") {

            //  searchcontact.push
            searchcontact = contacts.filter(contact =>
                (contact.phone != null && contact.phone.toLowerCase().includes(searchTerm)));
            return true
        }
        if (searchby === "") {
            searchcontact = contacts;
        }

    }
    const changeFlag = (value) => {
        setFlag(value)
    }
    return (
        <>
            {/* marginTop:"1.5em"marginLeft: "65px" */}
            {/* <Setting></Setting> */}

            <div className="container con" style={{ height: "88vh", width: "100%", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126" }}>
                <div className="row ">
                    <div className="col d-flex row" style={{ height: 15 + 'vh' }}>

                        <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Contants</h1>
                        <div onClick={() => changeFlag(true)} style={{ width: 50 + '%' }}><ButtonPlus ></ButtonPlus>  </div>

                    </div>

                    <div className="col-8 d-flex justify-content-end ">

                        <SearchContact changeInput={changeInput} handlesearchby={handlesearchby}></SearchContact>

                    </div>
                </div>
                <div className="wrap_table">


                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                {props.allcontact ?
                                    <table className="table table-hover">
                                        <thead style={{ backgroundColor: "#F5F5FA", opacity: "100%" }}>
                                            <tr>
                                                <th style={{ width: "5%", backgroundColor: "white", border: "none" }}></th>
                                                <th>PROFILE</th>
                                                <th>NAME</th>
                                                <th>EMAIL</th>
                                                <th>PHONE</th>
                                                <th>ADRESS</th>
                                                <th>DATE CREATE</th>
                                                {/* <th>ACTIVE</th> */}

                                            </tr>
                                        </thead>
                                        {/* {console.log("serch_costumers",props.allcontact)} */}
                                        <tbody >
                                            {flag == true &&
                                                <tr>
                                                    <td colSpan="6" style={{ align: "center" }}>
                                                        {/* <ContactForm changeFlag={changeFlag} flag={flag}></ContactForm> */}
                                                    </td>
                                                </tr>}
                                            {/* {props.allcontact.map(contact=>{ 
                                            {console.log(contact)}
                                            return (
                                            <tr key={contact._id}>
                                                {console.log("googlecontact",contact.googleContact)}
                                                <td></td>
                                         
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>adress</td>
                                            <td>{contact.createDateAndTime}</td>
                                            <td  >
                                                <div style={{ backgroundColor: statusClrs[0].inProgress, opacity: '20%' }} >
                                                    <label style={{ color: statusClrs[0].inProgress, opacity: '200%' }}> in progress</label>
                                                </div>
                                            </td>
                                        </tr>
                                                    )
                                                })
                                        } */}
                                            {props.allcontact.map(contact => {
                                                contacts.push(contact)
                                            })}

                                            {(f() || searchby === "") &&

                                                searchcontact.map((contact1, index) => {
                                                    { console.log("contacts", searchcontact) }
                                                    return (
                                                        <tr onMouseEnter={() => fff(contact1._id)} onMouseLeave={() => ppp(contact1._id)} key={contact1._id}>
                                                            {/* {console.log("googlecontact",contact1.googleContact)} */}
                                                            {/* <td></td> */}
                                                            {console.log("uuuu", contact1.active)}
                                                            {/**/}
                                                            <td className="td_checbox" id="td_hover">
                                                                <input className="cb" name="select_test" type="checkbox"
                                                                >
                                                                </input>
                                                            </td>
                                                            <td style={{ paddingLeft: "2%" }}> <img style={{ width: "35px", height: "33px" }} className="rounded-circle" alt="" src={contact1.thumbnail ? contact1.thumbnail : pimg} /> </td>
                                                            <td>{contact1.name}</td>
                                                            {/* {flag1 ?<td className="tdemail">{contact1.email}</td>:
                                                    <td>{mmm(contact1.email)}</td>
                                                } */}
                                                            {/* {console.log("erer",chooseline.index===contact1._id  )} */}
                                                            <td>  {chooseline.index === contact1._id && chooseline.flag === "true" ?
                                                                <div className="tgtg">{contact1.email}</div>
                                                                : <div >{mmm(contact1.email)}</div>} </td>
                                                            <td>adress</td>
                                                            <td>{contact1.phone}</td>
                                                            <td>{convertdate(contact1.createDateAndTime)}</td>
                                                            {/* {contact1.active==true ? <td>true</td>:<td>false</td>
                                             } */}
                                                            <td className="td_tt" id="td_hover">
                                                                <div className="td_side_edit_delete_copy " >
                                                                    {
                                                                        chooseline.isShown && chooseline.index === contact1._id && (
                                                                            <div >

                                                                                <MdEdit id="icon">
                                                                                </MdEdit>

                                                                                <MdDelete id="icon" onClick={vvv(searchcontact, index)} >
                                                                                    <span className="tool">gg</span>
                                                                                </MdDelete></div>

                                                                        )
                                                                    }
                                                                </div></td>

                                                        </tr>
                                                    )
                                                })
                                            }
                                            {/* {searchby==="customerName" &&
                                     
                                        contacts.filter(contact =>
                                        (contact.name != null && contact.name.toLowerCase().includes(searchTerm))).
                                    
                                        map(contact1 => {
                                            return (
                                                  <tr key={contact1._id}>
                                                    {console.log("googlecontact",contact1.googleContact)}
                                                    <td></td>
                                             
                                                <td>{contact1.name}</td>
                                                <td>{contact1.email}</td>
                                                <td>{contact1.phone}</td>
                                                <td>adress</td>
                                                <td>{contact1.createDateAndTime}</td>
                                                <td  >
                                                    <div style={{ backgroundColor: statusClrs[0].inProgress, opacity: '20%' }} >
                                                        <label style={{ color: statusClrs[0].inProgress, opacity: '200%' }}> in progress</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            )})
                                        || searchby==="customerEmail" &&
                                        contacts.filter(contact =>
                                        (contact.email != null && contact.email.toLowerCase().includes(searchTerm))).
                                    
                                        map(contact1 => {
                                            return (
                                                  <tr key={contact1._id}>
                                                    {console.log("googlecontact",contact1.googleContact)}
                                                    <td></td>
                                             
                                                <td>{contact1.name}</td>
                                                <td>{contact1.email}</td>
                                                <td>{contact1.phone}</td>
                                                <td>adress</td>
                                                <td>{contact1.createDateAndTime}</td>
                                                <td  >
                                                    <div style={{ backgroundColor: statusClrs[0].inProgress, opacity: '20%' }} >
                                                        <label style={{ color: statusClrs[0].inProgress, opacity: '200%' }}> in progress</label>
                                                    </div>
                                                </td>
                                            </tr> */}
                                            {/* )})} */}




                                        </tbody>

                                    </table> : <div></div>}

                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </>

    )
}

// {props.allcontact.map(contact=>{ 
//     {console.log(contact)}
//     return (
//     <tr key={contact._id}>
//         {console.log("googlecontact",contact.googleContact)}
//         <td></td>

//     <td>{contact.name}</td>
//     <td>{contact.email}</td>
//     <td>{contact.phone}</td>
//     <td>adress</td>
//     <td>{contact.createDateAndTime}</td>
//     <td  >
//         <div style={{ backgroundColor: statusClrs[0].inProgress, opacity: '20%' }} >
//             <label style={{ color: statusClrs[0].inProgress, opacity: '200%' }}> in progress</label>
//         </div>
//     </td>
// </tr>
//             )
//         })
// }

//     )
// }





//     return(
//         <>
// <table className="table  tbl_customers">
//                 <thead>
//                     <tr>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Phone</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {props.contacts.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.address}</td>
//                         <td>{item.phone}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//                 </table>
//         </>
//     )

const mapStateToProps = (state) => {
    return {
        allcontact: state.customerReducer.allContact


    }
}
export default connect(mapStateToProps)(Customers);