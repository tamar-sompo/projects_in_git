import React, { useState, useEffect } from 'react';
import './config.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectItem } from './selectItem';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions';
import { ContactPhoneTwoTone } from '@material-ui/icons';
import Select from 'react-select'
import AddInvoiceOtomat from './addInvoiceOtomat';
import '../../wrap/newSetting.css'
import $ from 'jquery'
export default function Production(props) {
  const [idBefor, setIdBefor] = useState('');

  // const invoice = useSelector(state => state.invoiceReducer.invoice)

  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const [clickFrom, setClickFrom] = useState(false)
  const [clickFor, setClickFor] = useState(false)

  const invoice = useSelector(state => state.invoiceReducer.invoice);

  const dispatch = useDispatch();
  const detailsBusiness = useSelector(state => state.buisnessReducer.business);
  const companyChangesDetails = useSelector(state => state.invoiceReducer.companyChangesDetails);
  const contact = useSelector(state => state.customerReducer.contact);
  const contactsList = useSelector(state => state.customerReducer.allContact);
  const detailscontact = useSelector(state => state.customerReducer.detailscontact);
  // const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateCompnyFields(fieldToUpdate))
  // const setAllContacts = (allContacts) => dispatch(actions.setAllContacts(allContacts))
  const setAddContact = (newContact) => dispatch(actions.setAddContact(newContact))
  const setUpdateContactField = (fieldToUpdate) => dispatch(actions.setUpdateContactFields(fieldToUpdate))
  const setContactName = (name) => dispatch(actions.setContactName(name))
  const setContactEmail = (email) => dispatch(actions.setContactEmail(email))
  const setContactPhone = (phone) => dispatch(actions.setContactPhone(phone))
  const setContactAddress = (address) => dispatch(actions.setContactPhone(address))
  const focus = useSelector(state => state.invoiceReducer.focus);
  const setFocus = (focus) => dispatch(actions.setFocus(focus))
  const [inputValue, setInputValue] = useState('')

  const onFieldChanged = (fieldName) => (e) => {
    const value = e.target.value;
    updateinvoiceField({ [fieldName]: value })
  }
  const changeFrom = () => {
    setClickFrom(!clickFrom)
    setClickFor(false)
  }
  const changeFor = () => {
    setClickFor(!clickFor)
    setClickFrom(false)
  }
  // const getAllContacts = () => {
  //   fetch("https://api.dev.leader.codes/chedva/getContacts/?includesConversations=false")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setAllContacts(result)
  //       },
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  // }

  useEffect(() => {
    //getAllContacts()
    //setAllContacts(list)
    const selectedItem = contactsList.find(item => item.name === inputValue)
    if (selectedItem != undefined) {
      clearContactInp()
      setContactName(selectedItem.name)
      setContactEmail(selectedItem.email)
      setContactAddress(selectedItem.address)
      setContactPhone(selectedItem.phone)
    }
  }, [inputValue]);
  const clearContactInp = () => {
    setInputValue('')

    setContactName('')
    setContactEmail('')
    setContactPhone('')
    setContactAddress('')
  }
  const set_customer = (e) => {
    updateinvoiceField({ contact: e.value.email })
    dispatch(actions.getContactById(e.value.email))

  }
  const addClassToIl = (e) => {
    if ($(`#${e}`).hasClass('liEnter'))
      $(`#${e}`).removeClass('liEnter');
    else
      $(`#${e}`).addClass('liEnter');
    if (idBefor === '')
      setIdBefor(e)
    else {
      if (idBefor !== e) {
        $(`#${idBefor}`).removeClass('liEnter');
        setIdBefor(e)
      }
    }
  }
  return (
    <>
      <ul class="list-group list-group-flush">
        <ul class="list-group d-flex flex-column accordion" id="accordionExample">
          <li
            onClick={() => addClassToIl('1')}
            id="1"
            className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="1"
            data-toggle="collapse" data-target="#collapsePicture" aria-expanded="false" aria-controls="collapsePicture collapseColor">
            <FontAwesomeIcon
              size='lg'
              icon={['fas', 'long-arrow-alt-left']}
            >
            </FontAwesomeIcon>

            <h5 className="l">From</h5>
          </li>

          <div className="d-flex justify-content-around">
            <div class="collapse" id="collapsePicture" data-parent="#accordionExample">
              <div><div className="justify-content-center pl-4 ml-5 mr-5 mb-5">
                {/* <input className='inpConfig row mt-4'
          placeholder={companyDetails ? companyDetails.companyName ? companyDetails.companyName : "Flowers" : "Flowers"}
          onChange={onFieldChanged('companyName')}
          onClick={(e)=>setFocus('cpmpanyName')}>
        </input> */}


                <input
                disabled
                style={{color:"white"}}
                  size='15'
                  className={focus === 'companyWebsite' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                  placeholder={detailsBusiness && detailsBusiness.socialmedias ? detailsBusiness.socialmedias.website ? detailsBusiness.socialmedias.website : "business website" : "business website"}
                  value={detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website}
                />
                 <input
                 style={{color:"white"}}
                 disabled
                      size='15'
                      className={focus === 'companyAddress' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                      placeholder={detailsBusiness ? detailsBusiness.address ? detailsBusiness.address : "business Address" : "business Address"}
                      value={detailsBusiness && detailsBusiness.address}
                    />
                <input
                style={{color:"white"}}
                disabled
                  size='15'
                  className={focus === 'companyPhone' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                  placeholder={detailsBusiness ? detailsBusiness.phone ? detailsBusiness.phone : "business phone" : "business phone"}
                  onClick={() => setFocus('companyPhone')}
                  value={detailsBusiness && detailsBusiness.phone}
                />

                {/* <input 
          className='inpConfig row mt-4'
          // placeholder={companyDetails ? companyDetails.socialmedias.website ? companyDetails.socialmedias.website : "Flowers@gmail.com" : "Flowers@gmail.com"}
          value={invoice.companyWebsite}
           onChange={(e)=>onFieldChanged('companyWebsite')}
           onClick={(e)=>setFocus('companyWebsite')}
          >
            {console.log('invoice.companyWebsite',invoice.companyWebsite)}
        </input> */}
                
              </div>
              </div>
            </div></div>


          <li className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="2"
            onClick={() => addClassToIl('2')}
            data-toggle="collapse" data-target="#collapseColor" aria-expanded="false" aria-controls="collapseColor">
            <FontAwesomeIcon
              size='lg'
              icon={['fas', 'long-arrow-alt-right']}
            />

            <h5 className="l">To</h5>
          </li>
          {/* </div>  */}
          <div className="d-flex justify-content-around">
            <div class="collapse" id="collapseColor" data-parent="#accordionExample" style={{ width: '100%' }}>
              <div>
                <div className=" pl-3 ml-5 mr-5">
                  <div
                    className='mt-4'
                    style={{ width: '100%' }}
                  >
                    <Select onChange={set_customer} options={contactsList? contactsList.length>0 ?contactsList.map((contact) => {
                      return ({
                        "label": contact.name,
                        "value": contact
                      })
                    }):"":""} />
                    {/* <Select options={contactsList.map((contact)=>{return({
                            "label":contact.name,
                            "value":contact
                     })})} >
                 
                  </Select> */}
                    {/* <SelectItem
              placeholder="Look for a Customer"
              itemsList={contactsList}
              setValue={setInputValue}
              value={inputValue}
            /> */}
                  </div>
                </div>
                <div className="justify-content-center pl-4 ml-5 mr-5 ">
                  <input
                    className='inpConfig row mt-4'
                    // placeholder={invoice ? invoice.customerName ? invoice.customerName : "Customer's Name" : "Customer's Name"}
                    value={contact.name}
                    onChange={(e) => setContactName(e.target.value)}
                    //onChange={onFieldChanged('customerName')}
                    onClick={(e) => setFocus('customerName')}
                    // placeholder={detailscontact.name}

                    placeholder={detailscontact.contact ? detailscontact.contact.name ? detailscontact.contact.name : "Customer's Name" : "Customer's Name"}
                  // placeholder={invoice ? invoice.customerName ? invoice.customerName : "Customer's Name" : "Customer's Name"}
                  // value={}
                  //value={contact ? contact.name ? contact.name : '':''}
                  // onChange={(e) => setContactName(e.target.value)}
                  // onChange={onFieldChanged('customerName')}
                  // onChange={onFieldChanged('companyWebsite')}
                  />
                  <input
                    className='inpConfig row mt-4'
                    placeholder={detailscontact.contact ? detailscontact.contact.email ? detailscontact.contact.email
                      : "Customer's Email" : "Customer's Email"}
                    // value={detailscontact.email}
                    //value={contact ? contact.email ? contact.email : '':''}
                    onChange={(e) => setContactEmail(e.target.value)}
                    //onChange={onFieldChanged('customerEmail')}
                    onClick={(e) => setFocus('customerEmail')}
                  />
                  <input
                    className='inpConfig row mt-4'
                    placeholder={detailscontact.contact ? detailscontact.contact.phone ? detailscontact.contact.phone
                      : "Customer's Address" : "Customer's Address"}
                    // placeholder={invoice ? invoice.customerAddress ? invoice.customerAddress : "Customer's Address" : "Customer's Address"}
                    // value={ detailscontact.contact.phone}
                    //value={contact ? contact.address ? contact.address : '':''}
                    onChange={(e) => setContactAddress(e.target.value)}
                    //onChange={onFieldChanged('customerAddress')}
                    onClick={(e) => setFocus('customerAddress')}
                  />
                  <input
                    className='inpConfig row mt-4'
                    // placeholder={invoice ? invoice.customerPhone ? invoice.customerPhone : "Customer's Phone" : "Customer's Phone"}
                    value={contact.phone}
                    // placeholder={invoice ? invoice.customerPhone ? invoice.customerPhone : "Customer's Phone" : "Customer's Phone"}
                    placeholder={detailscontact.contact ? detailscontact.contact.phone ? detailscontact.contact.phone
                      : "Customer's Phone" : "Customer's Phone"}
                    onClick={(e) => setFocus('customerPhone')}
                  // value={detailscontact.contact.address}
                  // value={invoice.customerPhone}
                  //value={contact ? contact.phone ? contact.phone : '':''}
                  // onChange={(e) => setContactPhone(e.target.value)}
                  //onChange={onFieldChanged('customerPhone')}
                  //onClick={(e)=>setFocus('customerPhone')}
                  />
                </div>
                <div className='pl-4 ml-3 mb-5'>
                  {/* <button
            className='d-inline btnSave mt-4 py-2 mx-2'
            onClick={() => clearContactInp()}
          >Add a recipient
 </button> */}
                  <button
                    className='d-inline btnSave mt-4 py-2 mx-2'
                    onClick={() => setAddContact({
                      name: contact.name,
                      email: contact.email,
                      address: contact.address,
                      phone: contact.phone
                    })}
                  >Save customer
 </button>
                </div>
              </div>
            </div>
          </div>


        </ul></ul>







      {/* <div className='bgcBtnConfig m-0 mt-2 p-0 mb-2' onClick={() => changeFrom()}>
        <div className="btnConfig pl-4 ml-4 mt-3  m-0 p-0 font-weight-bold my-auto">
          <FontAwesomeIcon
            className='iconBtnConfig pr-2 pt-1'
            size='2x'
            icon={['fas', 'long-arrow-alt-left']}
          >
          </FontAwesomeIcon>
        From
      </div>
      </div> */}
      {/* {clickFrom && <div><div className="justify-content-center pl-4 ml-5 mr-5 mb-5"> */}
      {/* <input className='inpConfig row mt-4'
          placeholder={companyDetails ? companyDetails.companyName ? companyDetails.companyName : "Flowers" : "Flowers"}
          onChange={onFieldChanged('companyName')}
          onClick={(e)=>setFocus('cpmpanyName')}>
        </input> */}
      {/* <input 
          className='inpConfig row mt-4'
          // placeholder={companyDetails ? companyDetails.socialmedias.website ? companyDetails.socialmedias.website : "Flowers@gmail.com" : "Flowers@gmail.com"}
          value={invoice.companyWebsite}
          onChange={onFieldChanged('companyWebsite')}
          onClick={(e)=>setFocus('companyWebsite')}  
          >
        </input>
        <input className='inpConfig row mt-4'
          // placeholder={companyDetails ? companyDetails.address ? companyDetails.address : "Arlozorov 17, Tel Aviv" : "Arlozorov 17, Tel Aviv"}
          onChange={onFieldChanged('companyAddress')}
          value={invoice.companyAddress}
          onClick={(e)=>setFocus('companyAddress')}  
          >
        </input>
        <input className='inpConfig row mt-4'
          // placeholder={companyDetails ? companyDetails.phone ? companyDetails.phone : "03.9723456" : "03.9723456"}
          value={invoice.companyPhone}
          onChange={onFieldChanged('companyPhone')}
          onClick={(e)=>setFocus('companyPhone')}  
          >
        </input>
      </div>
      </div>} */}
      {/* <div className='bgcBtnConfig m-0 mt-4 p-0 mb-2' onClick={() => changeFor()}>
        <div className="btnConfig pl-4 ml-4 mt-3  m-0 p-0 font-weight-bold my-auto">
          <FontAwesomeIcon
            className='iconBtnConfig pr-2 pt-1'
            size='2x'
            icon={['fas', 'long-arrow-alt-right']}
          /> 
        For
      </div>
      </div> */}

    </>);
}
