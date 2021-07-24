import React, { useEffect, useRef, useState } from 'react';
import '../../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../example.css';
import { Form } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions';
import { useHistory } from "react-router-dom";
import Item from './item'
import Untitled from '../../../../src/Img/Untitled-1.jpg'
import { useLocation } from "react-router-dom";
import $ from 'jquery'
import './new_invoice.css'


function New_Invoice(props) {

  const Location = useLocation()
  const dispatch = useDispatch();
  let history = useHistory()


  //dispatch
  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const setFocus = (focus) => dispatch(actions.setFocus(focus));
  const setDisplayInvoice = (status) => dispatch(actions.setDislayInvoice(status));
  const updatedetailsBusiness = (fieldToUpdate) => dispatch(actions.setUpdateBusiness(fieldToUpdate))
  const setImage = (objectImage) => dispatch(actions.setImage(objectImage))
  const setIslevel = (level) => dispatch(actions.setIsLevel(level))
  const setFlagSaveP = (status) => dispatch(actions.setFlagSaveP(status))


  //useSelector
  const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)
  const allcontact1 = useSelector(state => state.customerReducer.allContact);
  const allproduct = useSelector(state => state.productReducer.allProducts);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const detailscontact = useSelector(state => state.customerReducer.detailscontact);
  const detailsBusiness = useSelector(state => state.buisnessReducer.currentBuisness);
  const allInvoices = useSelector(state => state.invoiceReducer.allInvoices);
  const userName = useSelector(state => state.publicReducer.userName);
  const invoice = useSelector(state => state.invoiceReducer.invoice);
  let productSelect = useSelector(state => state.productReducer.productSelect);
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const buttonClick = useSelector(state => state.messageReducer.buttonClick)
  const saveSum = useSelector(state => state.invoiceReducer.saveSum)
  const flagLoud = useSelector(state => state.invoiceReducer.showLoud)
  const flagPush = useSelector(state => state.invoiceReducer.flagPush)
  const flagValidation = useSelector(state => state.invoiceReducer.flagValidation);
  const flagTmpSave = useSelector(state => state.invoiceReducer.flagTmpSave);


  //useRef & uesState
  const prodactions = [...invoice.products];
  const inputFile = useRef();
  const inputFile1 = useRef();
  const [str, setStr] = useState()
  const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);
  const [firstFlagSaveContact1, setFirstFlagSaveContact1] = useState(false)
  const [validated, setValidated] = useState(false);
  const [clickSubmitItem, setClickSubmitItem] = useState(false)
  const [validatedItem, setValidateItem] = useState(false);
  const [saveSum2, setsaveSum2] = useState(0)
  const [flagcontactFromInvoice1, setflagcontactFromInvoice1] = useState(false)
  const [flagdetailsContact, setflagdetailsContact] = useState(false)
  const [flag, setFlag] = useState(false)
  const [borderLogo, setBorderLogo] = useState(false);
  const [borderBgImage, setBorderBgImage] = useState("true");
  const [contactFromInvoice, setContactFromInvoice] = useState({})
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [errorMessage1, setErrorMessage1] = useState(false);
  const [errorMessage2, setErrorMessage2] = useState(false);
  const [firstTmp, setfirstTmp] = useState(false);
  const [saveContactOne, setsaveContactOne] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    flag: false
  })
  const [contactedit, setcontactedit] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })


  useEffect(() => {

    let summ = 0
    if (window.location.href.indexOf("view") !== -1) {
      dispatch(actions.setsendMessage("false"))
      detailsInvoice.products.filter(x => summ += x.sum_product)
      setsaveSum2(summ)
      dispatch(actions.setViewConversion('false'))
      setIslevel(1);
      $(".step1").click()
      if (history.location.pathname === `/${userName}/invoice`) {
        if (invoice.products.length === 0)
          dispatch(actions.setProducts({ id: 'null', amount: null, sum_product: null }))
        dispatch(actions.setPushNewProduct({}))
        dispatch(actions.setPDelete(['']))

      }
      else {
        // dispatch(actions.setPushNewProduct({}))
        if (detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag === true) {

          setsaveContactOne({
            flag: true,
            name: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.name : '',
            email: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.email : '',
            phone: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.phone : '',
            address: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.address : '',
          })

          setcontactedit({
            name: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.name,
            email: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.email,
            phone: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.phone,
            address: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.address
          })
        }
        else {
          let ojectContact = allcontact1.find(x => x.email === detailsInvoice.contact)
          setContactFromInvoice(ojectContact)
          if (contactFromInvoice) {
            setcontactedit({
              name: contactFromInvoice.name,
              email: contactFromInvoice.email,
              phone: contactFromInvoice.phone,
              address: contactFromInvoice.address
            })
          }

        }
        if (history.location.pathname !== `/${userName}/allDocuments` && history.location.pathname !== `/${userName}/Invoice/Conversion` && history.location.pathname !== `/${userName}/Invoice/Content` && history.location.pathname !== `/${userName}/Invoice/Design` && history.location.pathname !== `/${userName}/Invoice/Production`) {
          if (window.location.href.indexOf("view") !== -1) {
            // if (allproduct.length > 0) {
            //   detailsInvoice.products.map(p =>
            //     dispatch(actions.setP(allproduct.find(x => x._id == p.id).name)))
            //   // detailsInvoice.products.map((x) => {
            //   //   dispatch(actions.setSaveSumView(x.sum_product))
            //   // })
            //   // }
            // }
          }
          else {
            // detailsInvoice.products.map(p =>
            //   dispatch(actions.setP(allproduct.find(x => x._id == p.id).name)))
          }
          // }
        }
      }
    }
  }, [allcontact1, allproduct, detailsBusiness])


  useEffect(() => {
    dispatch(actions.setFlagTmpSave(true))
    dispatch(actions.setFlagOfterValidation(false))
    if (flagPush === true) {
      dispatch(actions.setViewConversion('false'))
      setIslevel(1);
      $(".step1").click()
      if (history.location.pathname === `/${userName}/invoice`) {
        dispatch(actions.setPushNewProduct({}))
        setDisplayInvoice("false")
        if (invoice.products.length === 0)
          setDisplayInvoice("false")
        dispatch(actions.setProducts({ id: 'null', amount: null, sum_product: null }))
        dispatch(actions.setPDelete(['']))
      }
      else {

        if (window.location.href.indexOf('invoice/edit') !== -1) {
          dispatch(actions.setPushNewProduct({}))
          setDisplayInvoice("false")
        }

        let summ = 0
        if (detailsInvoice.products && detailsInvoice.products.length > 0) {
          // dispatch(actions.setProduction({ id: 'null', amount: null, sum_product: null }))
          detailsInvoice.products.filter(x =>
            dispatch(actions.setPushNewProduct({})))
          detailsInvoice.products.filter(x =>
            summ += x.sum_product)
          // setsaveSum2(summ)
          dispatch(actions.setResetSaveSum(summ))
        }
        else {
          dispatch(actions.setProduction({ id: 'null', amount: null, sum_product: null }))
        }

        if (detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag === true) {

          setsaveContactOne({
            flag: true,
            name: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.name : '',
            email: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.email : '',
            phone: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.phone : '',
            address: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.address : '',
          })

          setcontactedit({
            name: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.name,
            email: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.email,
            phone: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.phone,
            address: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.address
          })
        }
        else {

          let ojectContact = allcontact1.find(x => x.email === detailsInvoice.contact)
          setContactFromInvoice(ojectContact)

          if (contactFromInvoice) {
            setcontactedit({
              name: contactFromInvoice.name,
              email: contactFromInvoice.email,
              phone: contactFromInvoice.phone,
              address: contactFromInvoice.address
            })
          }

        }

        // }
        if (history.location.pathname !== `/${userName}/allDocuments` && history.location.pathname !== `/${userName}/Invoice/Conversion` && history.location.pathname !== `/${userName}/Invoice/Content` && history.location.pathname !== `/${userName}/Invoice/Design` && history.location.pathname !== `/${userName}/Invoice/Production`) {
          if (window.location.href.indexOf("view") !== -1) {
            setValidName(false)
            if (allproduct.length > 0) {
              detailsInvoice.products.map(p =>
                dispatch(actions.setP(allproduct.find(x => x._id === p.id).name)))
              // detailsInvoice.products.map((x) => {
              //   dispatch(actions.setSaveSumView(x.sum_product))
              // })
              // }
            }
          }
          else {
            setValidName(false)
          }
          // }
        }
      }
    }
  }, [flagPush])


  useEffect(() => {
    if (buttonClick === "saveContact1") {
      saveContact1()
    }

    if (buttonClick === "saveContact") {
      saveContact()
    }

  }, [buttonClick])

  useEffect(() => {
    if (firstFlagSaveContact1 === false)
      setFirstFlagSaveContact1(true)
    else {
      if (buttonClick === "saveContact1") {
        dispatch(actions.setFlagMessageContact(false))
        dispatch(actions.setFlagModal("successContact"))
        dispatch(actions.setShowMessage(false))
        dispatch(actions.setButtonClick(""))
        dispatch(actions.setModalBody(""))
      }
    }

    updateinvoiceField({ key: "contactOneTime", value: saveContactOne });
  }, [saveContactOne])

  useEffect(() => {
    if (flagcontactFromInvoice1 === false)
      setflagcontactFromInvoice1(true)
    else {
      setcontactedit({
        name: contactFromInvoice && contactFromInvoice.name ? contactedit.name : contactedit.name,
        email: contactFromInvoice && contactFromInvoice.email ? contactedit.email : contactedit.email,
        phone: contactFromInvoice && contactFromInvoice.phone ? contactedit.phone : contactedit.phone,
        address: contactFromInvoice && contactFromInvoice.address ? contactedit.address : contactedit.address
      })
    }
  }, [contactFromInvoice])

  useEffect(() => {
    if (flagdetailsContact == false)
      setflagdetailsContact(true)
    else {
      console.log("contactedit", contactedit)
      console.log("contactFromInvoice", contactFromInvoice)

      setsaveContactOne({
        name: detailscontact.contact && detailscontact.contact.name ? detailscontact.contact.name : contactedit.name,
        email: detailscontact.contact && detailscontact.contact.email ? detailscontact.contact.email : contactedit.email,
        phone: detailscontact.contact && detailscontact.contact.phone ? detailscontact.contact.phone : contactedit.phone,
        address: detailscontact.contact && detailscontact.contact.address ? detailscontact.contact.address : contactedit.address
      })
    }
  }, [detailscontact])


  useEffect(() => {

    if (firstTmp) {
      let tmp3 = true;
      if (contactedit.phone) {
        tmp3 = validatorPhone(contactedit.phone);
      }
      if (window.location.href.indexOf('edit') !== -1 && !contactedit.email) {

        setErrorMessage1(false)
        setErrorMessage2(false)
        dispatch(actions.setFlagValidation(false))
        if (!flagTmpSave) {
          dispatch(actions.setFlagOfterValidation(true))
        }
        else { dispatch(actions.setFlagTmpSave(false)) }
      }
      else {
        if ((validatorEmail(contactedit.email) || validName) && tmp3) {

          setErrorMessage1(false)
          setErrorMessage2(false)
          dispatch(actions.setFlagValidation(false))
          if (!flagTmpSave) {
            dispatch(actions.setFlagOfterValidation(true))
          }
          else { dispatch(actions.setFlagTmpSave(false)) }
        }
        else {
          if (!contactedit.email && !validName) {
            setErrorMessage1(true)
            dispatch(actions.setFlagValidation(false))
          }
          else {
            if (!validatorEmail(contactedit.email) && !validName) {
              dispatch(actions.setFlagValidation(false))
              setErrorMessage1(true)
            }
            else {
              setErrorMessage1(false)
            }
          }
          if (!tmp3) {
            setErrorMessage2(true)
            dispatch(actions.setFlagValidation(false))
          }
          else { setErrorMessage2(false) }
        }
      }
    }
    // }
    // if (!tmp3) {
    //   setErrorMessage2(true)
    //   dispatch(actions.setFlagValidation(false))
    // }
    // else { setErrorMessage2(false) }
    //     }
    //   }
    // }
    // }
    // else (setfirstTmp(true))
  }, [flagValidation])


  const validatorPhone = (v) => {
    const tmp = v.length == 13 && v.includes('+');
    return tmp || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v);
  }
  const validatorEmail = (v) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
  }

  const saveContact1 = () => {

    dispatch(actions.setShowInInvoice(true))

    if (!detailscontact.contact) {

      setsaveContactOne({
        flag: true,
        name: contactedit.name ? contactedit.name : contactFromInvoice ? contactFromInvoice.name : '',
        email: contactedit.email ? contactedit.email : contactFromInvoice ? contactFromInvoice.email : '',
        phone: contactedit.phone ? contactedit.phone : contactFromInvoice ? contactFromInvoice.phone : '',
        address: contactedit.address ? contactedit.address : contactFromInvoice ? contactFromInvoice.address : '',
      })
    }
    else
      setsaveContactOne({
        flag: true,
        name: contactedit.name ? contactedit.name : saveContactOne ? saveContactOne.name : '',
        email: contactedit.email ? contactedit.email : saveContactOne ? saveContactOne.email : '',
        phone: contactedit.phone ? contactedit.phone : saveContactOne ? saveContactOne.phone : '',
        address: contactedit.address ? contactedit.address : saveContactOne ? saveContactOne.address : '',
      })
  }
  const saveContact = () => {

    dispatch(actions.setShowInInvoice(true))
    setFlag(false)
    if (contactFromInvoice && contactFromInvoice._id || detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag && detailsInvoice.contactOneTime.flag === true) {
      let ojectContact = allcontact1.find(x => x.email === detailsInvoice.contact)
      if (!ojectContact) {
        dispatch(actions.createContact(contactedit))
      }
      else {
        dispatch(actions.setContactId(contactFromInvoice._id ? contactFromInvoice._id : ojectContact._id))
        dispatch(actions.updateContact(contactedit))
      }
    }
    else {
      if (detailscontact && detailscontact.contact && detailscontact.contact._id) {
        dispatch(actions.setContactId(detailscontact.contact._id))

        dispatch(actions.updateContact(contactedit))
      }
      else {
        dispatch(actions.createContact(contactedit))
      }
    }

  }

  const onFieldChangeContact = (fieldName, e) => {
    if (fieldName == 'email') {
      if (e.target.value) {

        setValidEmail(true)
      }
      else { setValidEmail(false) }
    }
    // else { setErrorMessage1(true) }

    let id_contact
    dispatch(actions.setFlagIfEmpty(true))
    if (fieldName === "name") {

      dispatch(actions.setContactReset(fieldName))
      setcontactedit({ ...contactedit, [fieldName]: e.target.value })
      // $("#" + select2 + " option[value*='" + val + "']").prop('disabled', true).addClass('disabled');

      if (e.target.value) {


        id_contact = $("#contactname").find("option[data-value=" + "option" + e.target.value + "]").data("id")

        if (id_contact) {
          let dc = allcontact1.find(x => x._id === id_contact)
          dispatch(actions.setFlagMessageContact(false))
          if (detailsInvoice.contact) {
            dispatch(actions.setResetContactFromEdiit())
          }

          dispatch(actions.getContactById(dc.email))
          updateinvoiceField({ key: "contact", value: dc.email })
          setcontactedit({ [fieldName]: e.target.value })
        }
        else {
          dispatch(actions.setRsetDetailsContact())
          setcontactedit({ ...contactedit, "name": e.target.value })
          dispatch(actions.setFlagMessageContact(true))
        }
      }

    }
    else {
      setcontactedit({ ...contactedit, [fieldName]: e.target.value })
      dispatch(actions.setFlagMessageContact(true))
    }
  }

  const resetfieldcontact = (fieldName, e) => {

    if (detailsInvoice.contact && !detailsInvoice.contactOneTime.flag) {
      setcontactedit({ ...contactedit, [fieldName]: e.target.value })
      setContactFromInvoice({ ...contactFromInvoice, [fieldName]: undefined })
    }
    else {
      if (detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag && detailsInvoice.contactOneTime.flag === true) {
        setcontactedit({ ...contactedit, [fieldName]: e.target.value })
        setsaveContactOne({ ...saveContactOne, [fieldName]: undefined })
      }
      else {

        setcontactedit({ ...contactedit, [fieldName]: e.target.value })
        dispatch(actions.setContactReset(fieldName))
      }
    }
  }


  const onFieldChanged = (fieldName, e) => {
    dispatch(actions.setFlagIfEmpty(true))
    const value = e.target.value;
    if (fieldName === "dueDate")
      updateinvoiceField({ key: fieldName, value: convertdate(value) })
    else
      updateinvoiceField({ key: fieldName, value: value })
  }
  const updatedetailsBusiness1 = (fieldName) => (e) => {
    updatedetailsBusiness({ [fieldName]: e.target.value })
  }
  const saveItemToStore = (index, fieldChanged) => {
    prodactions[index] = { ...prodactions[index], ...fieldChanged }
    updateinvoiceField({ key: "productions", value: prodactions });
  }

  const convertdate = (date1) => {
    let date = new Date(date1)
    if (date.getDate() < 10 && date.getMonth() > 9)
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + '0' + (date.getDate())
    if (date.getDate() < 10 && date.getMonth() < 10)
      return date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + '0' + (date.getDate())
    if (date.getDate() > 9 && date.getMonth() < 10)
      return date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + (date.getDate())
    else
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
  }
  const addItem = (event) => {
    event.preventDefault()
    let flagIfSave = false
    dispatch(actions.setProduct1({}))

    dispatch(actions.setPushNewProduct({}))
    dispatch(actions.setProductAmount(0))
    // setsaveSum2(saveSum + saveSum2)

    dispatch(actions.setFlagSavePr(true))
    flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
      if (flag === true) {
        flagIfSave = true
        dispatch(actions.setColorFlagShowSaveP("red"))
      }
    })

    // dispatch(actions.setProductAmount(0))

    if (flagIfSave === false) {
      dispatch(actions.setColorFlagShowSaveP("#707071"))
      // dispatch(actions.setResetNewProduct({}))
      dispatch(actions.setProductSelectLimit([]))
      ////////////////////////////////////////////////////////להחזיר בינתיים הורדתי אתזה
      // allproduct.length > 0 && allproduct.map(
      //   function (x) {
      //       "p", p)
      //     let oo = p.find(y => y === x.name);
      //     if (oo == undefined) {
      //         "hi")
      //       dispatch(actions.setProductSelect(x))
      //         "productSelect", productSelect)
      //     }
      //   })
      if (detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) {
        if (detailsInvoice.products[detailsInvoice.products.length - 1].id != "null") {
          ;
          const newProdactions = [...detailsInvoice.products];
          //   "newProdactions",newProdactions)
          // newProdactions.push({ id: 'null', amount: 0 });
          dispatch(actions.setProduction({ id: 'null', amount: null, sum_product: null }))
        }
      }

      else {

        if (invoice.products[invoice.products.length - 1].id !== "null") {
          dispatch(actions.setProducts({ id: 'null', amount: null, sum_product: null }))
        }

      }
    }

    // const save = () => {
    //   if (history.location.pathname === `/${userName}/invoice`) {
    //     dispatch(actions.setSaveInvoice(invoice))
    //   }
    //   else {
    //     dispatch(actions.setGetInvoiceById(detailsInvoice._id))
    //       "detailsInvoice", detailsInvoice._id)
    //     updateinvoiceField({ key: "products", value: detailsInvoice.products });
    //     dispatch(actions.setUpdateInvoice(invoice))
    //   }

    //     "saveeee", invoice)
    // }
  }

  const deleteItemFromStore = (index) => {
    console.log("in onItemDeleted function, delete ", index)
    dispatch(actions.setBorderProductInvoice(false))
    setFlagSaveP(false)
    dispatch(actions.setFlagIfEmpty(true))
    dispatch(actions.setColorFlagShowSaveP("#707071"))
    dispatch(actions.setFlagShowSaveP({ index: index, value: false }))
    if (saveSum >= 0) {
      dispatch(actions.setDeleteSaveSum(index))
    }
    // setsaveSum2(saveSum-saveSum2)
    dispatch(actions.setResetNewProduct(index))
    // let productss=[...detailsInvoice.products]
    // productss.splice(index, 1)
    if (detailsInvoice.products && detailsInvoice.products.length > 0) {
      let productSelect3id = detailsInvoice.products[index].id;
      let productSelect3 = allproduct.find(x => x._id === productSelect3id)
      ///////////////////////////////////////////////////////////////////להחזירררררר
      // if (p.length !== detailsInvoice.products.length && productSelect3id != "null") {
      //   let prr = [...p]
      //   prr.map((pr, ind) => {
      //     if (pr === productSelect3.name) {
      //         "ind", ind, pr)
      //       prr.splice(ind, 1)
      //       dispatch(actions.setPDelete(prr));
      //     }
      //   })
      // }
      let productss = [...detailsInvoice.products]
      productss.splice(index, 1);
      dispatch(actions.setProductionAfterDelete(productss))
      console.log(productss, "productss after deletion")
    }
    else {

      let productSelect3id = invoice.products[index].id;
      let productSelect3 = allproduct.find(x => x._id === productSelect3id)

      //////////////////////////////////////////////////////////////////////////////להחזיר אם לא
      // if (p.length !== invoice.products.length && productSelect3id != "null") {
      //    
      //   let prr = [...p]
      //   prr.map((pr, ind) => {
      //     if (pr === productSelect3.name) {
      //         "ind", ind, pr)
      //       prr.splice(ind, 1)
      //       dispatch(actions.setPDelete(prr));
      //     }
      //   })
      // }
      //  dispatch(actions.setProductSelect(productSelect3))
      let productss = [...invoice.products]
      productss.splice(index, 1)
      dispatch(actions.setProductAfterDelete(productss))

    }
    // prodactions.splice(index, 1);
    // updateinvoiceField({ productions: prodactions });

  }
  const onButtonClick = (str1) => {
    setStr(str1)
    // history.push(`/${userName}/Invoice/Design`)
    inputFile.current.click();
    setIslevel(2);
  };

  // const onButtonClick1 = (str1) => {
  //   setStr(str1)
  //     "flag1", str)
  //   // history.push(`/${userName}/Invoice/Design`)
  //   inputFile1.current.click();
  //   setIslevel(2);
  // }
  const addImageList = (event) => {

    if (event) {
      let reader = new FileReader();
      let imageToStor = { 'image': '', 'to': "" }

      reader.onloadend = () => {
        if (str === "frame") {
          imageToStor = { 'image': event, 'to': 'backgroundImg' }
        }
        if (str === "logo") {
          imageToStor = { 'image': event, 'to': 'logo' }
        }
        setImage(imageToStor)
      }
      reader.readAsDataURL(event)
    }
  }
  const shortDate = new Date().toLocaleDateString()
  const refLevel3 = useRef(null)
  // const setRefLevel3 = () => refLevel3.current.scrollIntoView()
  const func1 = (event) => {
    setIsMouseTooltipVisible(false)
    event.stopPropagation();
  }


  const resetType = (e) => {

    updateinvoiceField({ key: "type", value: undefined })

  }


  const setValidateItemFunction = (value) => {
    setValidateItem(value)
  }
  // const changeBg = (event) => {
  //   if (event.target === event.currentTarget) {
  //     ;
  //     setBorderBgImage("true")
  //     setIsMouseTooltipVisible(true)
  //   }
  //     input_select, option_length, option_id);
  // }

  // document.querySelector('input').addEventListener('input', event => {
  //   const value = event.target.value;
  //   const opt = [].find.call(event.target.list.options, o => o.value === value);


  // $('#form_id').on('submit', function(event){
  //   // alert("submitt")
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   event.preventDefault();
  //   setValidated(true);
  // });
  // const submitItem = useSelector(state => state.invoiceReducer.submitItem);

  const handleSubmit = (event, title) => {
    event.preventDefault();
    event.stopPropagation();
    // if($('#form_item').checkValidity()===true){
    // }
    const yourForm = document.querySelector('#form_item');
    //  alert("")
    if (yourForm.checkValidity() === true) {
      yourForm.checkValidity(false)
      // alert("ddd")
    }
    if (yourForm.checkValidity() === false) {
      // alert("vv")
    }


    const form = event.currentTarget;
    //    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('bbbbbbbbbb')
    }
    //   event.preventDefault();
    setValidated(true);
    if (((history.location.pathname === `/${userName}/invoice` && invoice.products) && (invoice.products[invoice.products.length - 1].id === 'null' || invoice.products[invoice.products.length - 1].id === undefined)) ||
      ((window.location.href.indexOf('invoice/edit') !== -1 && detailsInvoice.products) && (detailsInvoice.products[detailsInvoice.products.length - 1].id === "null" || detailsInvoice.products[detailsInvoice.products.length - 1].id === undefined))) {

    }
    else {
      if (form.checkValidity() === true && yourForm.checkValidity() === true) {
        // alert("pp")
        dispatch(actions.setSubmitSaveInvoice(true))
        //  form.
        //  .checkValidity=false
      }
    }

  };



  return (
    <Form id="form_id1" noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "bigForm")} style={{ width: "100%" }}>
      {/*  onSubmit={onSubmit} */}

      <div className="wrap_invoice" style={{ height: window.location.href.indexOf("view") !== -1 ? '99vh' : '100%' }}>
        <div className={flagLoud ? 'flagLoudOp' : ''}>
          <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
            onChange={(e) => addImageList(e.target.files[0])} />
          <div id="bgImg" className={isMouseTooltipVisible ? "frameInvoice" : ""} style={{ border: 8 + 'px solid red' }}
            onClick={() => {
              if (displayInvoice === "false") onButtonClick("frame")
            }}
            style={{
              opacity: isMouseTooltipVisible ? '0.5' : '1',
              backgroundImage: invoice.imageFrame ? `url('${invoice.imageFrame}')` : detailsInvoice.imageFrame ? `url('${detailsInvoice.imageFrame}')` : `url(${Untitled})`
            }}>


            <div className="container-fluid main-temp1"
              onClick={(event) => {
                if (displayInvoice === "false") func1(event)
              }}
              style={{ border: setBorderBgImage === true ? '50px solid red' : 'none' }}>
              <div className="row d-flex justify-content-center" style={{ paddingTop: "5%", paddingBottom: "1%" }}>
                {detailsBusiness && detailsBusiness.imgLogo ?
                  <img style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                    id='userLogo-temp1'
                    style={{ border: borderLogo === true ? '1px dashed lightgray' : 'none' }}
                    src={detailsBusiness && detailsBusiness.imgLogo ? detailsBusiness.imgLogo : ""}
                    alt="Logo"
                    title="Your Logo Here"
                  />
                  :
                  <div className="mt-5">
                    <h1>{detailsBusiness.name}</h1>
                  </div>}
              </div>

              <div className="row d-flex justify-content-center" style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: "3%" }}>
                {/* <div className="col-2"></div> */}
                {/* {detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website? } */}
                <div className=" d-flex justify-content-center wrapBuisnessBorder" style={{ width: "20%" }}>
                  {detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website ?
                    <a href={`${detailsBusiness.socialmedias.website}`} target="_blank">
                      <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                        type="text"
                        className="design_text design_buisness"
                        placeholder={detailsBusiness && detailsBusiness.socialmedias ? detailsBusiness.socialmedias.website ? detailsBusiness.socialmedias.website : "website" : "website"}
                        // onClick={displayInvoice === "false" && (() => setFocus('companyWebsite'))}
                        onBlur={displayInvoice === "false" && updatedetailsBusiness1('website')}
                        value={detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website ? detailsBusiness.socialmedias.website : "website"}
                        style={{ cursor: 'pointer', width: "131%" }}
                      />
                    </a> :
                    <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                      type="text"
                      className="design_text design_buisness"
                      placeholder={detailsBusiness && detailsBusiness.socialmedias ? detailsBusiness.socialmedias.website ? detailsBusiness.socialmedias.website : "website" : "website"}
                      // onClick={displayInvoice === "false" && (() => setFocus('companyWebsite'))}
                      onBlur={displayInvoice === "false" && updatedetailsBusiness1('website')}
                      value={detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website}
                      style={{ width: "131%" }}
                    />}
                </div>
                <div className=" d-flex flex-row justify-content-center wrapBuisnessBorder" style={{ width: "60%", paddingLeft: "0px", paddingRight: "0px" }}>
                  <div >
                    <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                      style={{ width: "50%" }}

                      size='15'
                      type="text"
                      className="design_text design_buisness"
                      placeholder={detailsBusiness ? detailsBusiness.city ? detailsBusiness.city : "" : ""}
                      // onClick={displayInvoice === "false" && (() => setFocus('companyAddress'))}
                      onBlur={displayInvoice === "false" && updatedetailsBusiness1('address')}
                      value={detailsBusiness && detailsBusiness.city}
                    />
                    <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                      style={{ width: "50%" }}
                      size='15'
                      type="text"
                      placeholder={detailsBusiness ? detailsBusiness.address ? detailsBusiness.address : "" : ""}
                      className="design_text design_buisness"
                      value={detailsBusiness && detailsBusiness.address}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center wrapBuisnessBorder" style={{ width: "20%" }}>
                  <input readOnly
                    type="text"
                    style={{ width: "90%" }}
                    disabled={displayInvoice === "true" ? "disable" : ""}
                    // size='20'
                    className="design_text design_buisness"
                    placeholder={detailsBusiness ? detailsBusiness.phone ? detailsBusiness.phone : "" : ""}
                    // onClick={() => setFocus('companyPhone')}
                    onChange={(e) => onFieldChanged('companyPhone')}
                    onBlur={updatedetailsBusiness1('phone')}
                    value={detailsBusiness && detailsBusiness.phone}
                  />
                </div>
              </div>
              <div className='row' style={{ paddingRight: "2%", paddingLeft: "8%", paddingTop: "5%" }}>
                <div className="col-4 d-flex flex-column">
                  <span className="design_text_contact">
                    To:
                  </span>

                  <input
                    list="contactname"
                    id='headers-name uuu'
                    disabled={displayInvoice === "true" ? "disable" : ""}
                    autoComplete="new-password"
                    placeholder="contact name"
                    // className={focus === 'customerName' ? 'focus-temp1 design_text' : 'editable-temp1 design_text'}
                    className="design_text_contact_name"
                    // onClick={() => setFocus('customerName')}
                    onFocus={(e) => resetfieldcontact('name', e)}
                    // onSelect={() => alert("Csdf")}

                    value={
                      detailsInvoice ?
                        detailsInvoice.contactOneTime &&
                          detailsInvoice.contactOneTime.flag === true ?
                          saveContactOne.name ?
                            saveContactOne.name : contactedit.name ? contactedit.name : '' :
                          detailsInvoice.contact ?
                            contactFromInvoice ?
                              contactFromInvoice.name : contactedit.name ? contactedit.name : ''
                            :
                            detailscontact && detailscontact.contact ?
                              detailscontact.contact.name :
                              contactedit.name ? contactedit.name : "" : ""
                    }
                    // onInput={oninput}
                    onChange={(e) => onFieldChangeContact('name', e)}
                  //  /
                  />

                  <datalist id="contactname"
                  >
                    {allcontact1.length > 0 ? allcontact1.map(x => {
                      return (
                        <option
                          data-id={x._id}
                          data-value={`option${x.name}`}
                        // value={`"${x.name}"`}
                        // value="hh"
                        >{x.name}</option>
                      )
                    }) : ''}
                  </datalist>
                  <div>
                    <input
                      required
                      disabled={displayInvoice === "true" ? "disable" : ""}
                      placeholder="contact email"
                      autoComplete="new-password"
                      type='email'
                      onFocus={(e) => resetfieldcontact('email', e)}
                      // className='editable-temp1 design_text'
                      // className="design_text_contact"
                      className={'design_text_contact'}
                      value={detailsInvoice ?
                        detailsInvoice.contactOneTime &&
                          detailsInvoice.contactOneTime.flag === true ?
                          saveContactOne.email ?
                            saveContactOne.email : contactedit.email ? contactedit.email : '' :
                          detailsInvoice.contact ? contactFromInvoice ?
                            contactFromInvoice.email : contactedit.email ? contactedit.email : '' :
                            detailscontact && detailscontact.contact ? detailscontact.contact.email :
                              contactedit.email ? contactedit.email : '' : ''}
                      onChange={(e) => onFieldChangeContact('email', e)}
                    >
                    </input>
                    {validEmail ?
                      <Form.Control.Feedback type="invalid">
                        {/* #invalid email */}
                        #Email address should contain '@'
                      </Form.Control.Feedback> :
                      <Form.Control.Feedback type="invalid"
                        value={validEmail ? "#invalid email" : "require"}>
                        #require
                      </Form.Control.Feedback>
                    }
                  </div>

                  <input
                    disabled={displayInvoice === "true" ? "disable" : ""}
                    placeholder="contact phone"
                    onFocus={(e) => resetfieldcontact('phone', e)}
                    // className='editable-temp1 design_text'
                    // className="design_text_contact"
                    type='string'
                    pattern="[0-9]{10}"
                    // "['+']{1}[0-9]{12}"  
                    className={'design_text_contact'}
                    value={detailsInvoice ?
                      detailsInvoice.contactOneTime &&
                        detailsInvoice.contactOneTime.flag == true ?
                        saveContactOne.phone ?
                          saveContactOne.phone : contactedit.phone ? contactedit.phone : '' :
                        detailsInvoice.contact ? contactFromInvoice ? contactFromInvoice.phone : contactedit.phone ? contactedit.phone : '' :
                          detailscontact && detailscontact.contact ? detailscontact.contact.phone :
                            contactedit.phone ? contactedit.phone : '' : ''}
                    onChange={(e) => onFieldChangeContact('phone', e)}>
                  </input>
                  <Form.Control.Feedback type="invalid">
                    #Invalid phone
                  </Form.Control.Feedback>
                  <input

                    disabled={displayInvoice === "true" ? "disable" : ""}
                    placeholder="contact address "
                    onFocus={(e) => resetfieldcontact('address', e)}
                    // className='editable-temp1 design_text
                    className="design_text_contact"
                    value={detailsInvoice ?
                      detailsInvoice.contactOneTime &&
                        detailsInvoice.contactOneTime.flag === true ?
                        saveContactOne.address ?
                          saveContactOne.address : contactedit.address ? contactedit.address : '' :
                        detailsInvoice.contact ? contactFromInvoice ? contactFromInvoice.address : contactedit.address ? contactedit.address : '' :
                          detailscontact && detailscontact.contact ? detailscontact.contact.address :
                            contactedit.address ? contactedit.address : '' : ''}
                    onChange={(e) => onFieldChangeContact('address', e)}>
                  </input>
                </div>
                <div></div>
                <div className='col-4' ></div>
                <div className='col-4 wrapdate'  >
                  <div className="row">
                    <div className="col-6 " >
                      <span className="cursor_default design_text_contact design_text_contactname">Invoice</span></div>
                    <div className="col-6" style={{ display: "flex", justifyContent: "center" }}>
                      <span className="cursor_default design_text_contact design_text_contactname">{detailsInvoice ? detailsInvoice.invoiceNumber ? detailsInvoice.invoiceNumber : allInvoices.length + 3000 : allInvoices.length + 3000}</span></div>
                  </div>
                  <div className="row">
                    <div className="col-6" >
                      <span className="design_text_contact cursor_default">Date:{() => convertdate(detailsInvoice.date)}</span></div>
                    <div className="col-6 " style={{ display: "flex", justifyContent: "center" }}>
                      <span className="design_text_contact cursor_default">{shortDate}</span></div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <span className="cursor_default design_text_contact">Due Date:</span></div>
                    <div className="col-8" style={{ paddingLeft: "0px" }}>
                      <input
                        style={{ backgroundColor: "transparent" }}
                        disabled={displayInvoice === "true" ? "disable" : ""}
                        className=" design_text_contact"
                        // className={focus === 'dueDate' ? 'focus-temp1' : 'editable-temp1'}
                        type="date"
                        size="1"
                        defaultValue={detailsInvoice ? detailsInvoice.dueDate ? convertdate(detailsInvoice.dueDate) : convertdate(invoice.dueDate) ? convertdate(invoice.dueDate) : convertdate(new Date()) : convertdate(new Date())}
                        onChange={(e) => onFieldChanged('dueDate', e)}
                        onClick={() => setFocus('dueDate')}
                      >
                      </input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center" style={{ paddingTop: "6%", paddingBottom: "6%" }}>
                <input
                  disabled={displayInvoice === "true" ? "disable" : ""}
                  placeholder='Invoice Name'
                  // id='title-temp1'
                  onFocus={resetType}
                  className="design_invoicename"
                  maxlength="15"
                  ref={refLevel3}
                  value={invoice.type ? invoice.type : detailsInvoice ? detailsInvoice.type ? detailsInvoice.type : "" : ""}
                  // onClick={(e) => setRefLevel3()}
                  onChange={(e) => onFieldChanged('type', e)}
                  // onClick={() => setFocus('type')}
                  bgColor={props.colors ? props.colors[2] : 'black'}
                >
                </input>
              </div>


              <div className="container-fluid">
                <div className="row">
                  {/* <div>"fghhhhhh</div> */}
                  {/* <Col md={1}>
              </Col>
              <Col md={2}>Product Name</Col>
              <Col md={2}>Description</Col>
              <Col md={2}>Unit Price</Col>
              <Col md={2}>Quantity</Col>
              <Col md={2}>Discount</Col>
              <Col md={1}></Col> */}   {/* <div className=" table_title bold col-2">Product Name</div>
                <div className=" table_title bold col-3">Description</div>
                <div className=" table_title bold col-2" >Unit Price</div>
                <div className=" table_title bold col-1">Quantity</div>
                <div className=" table_title bold col-1" >Discount</div>
                <div className=" table_title bold col-1" ></div>
                <div className=" table_title bold col-1 nonborder" ></div> */}
                  <div className=" nonborder col-6 d-flex justify-content-center" >
                    <div className="cursor_default table_title bold" style={{ width: "10%" }}></div>
                    <div className="cursor_default table_title bold" style={{ width: "35%" }}>Product Name</div>
                    <div className="cursor_default table_title bold" style={{ width: "55%" }}>Description</div>
                  </div>
                  {/* <div className=" table_title bold" style={{ width: "15%" }}>Product Name</div>
                <div className=" table_title bold" style={{ width: "24%" }}>Description</div>
                <div className=" table_title bold" style={{ width: "10%" }}>Unit Price</div>
                <div className=" table_title bold" style={{ width: "10%" }}>Quantity</div>
                <div className=" table_title bold" style={{ width: "10%" }}>Discount</div>
                <div className=" table_title bold" style={{ width: "10%" }}></div> */}
                  <div className="cursor_default table_title bold col-6  d-flex justify-content-center" >
                    <div className="cursor_default table_title bold" style={{ width: "25%" }}>Unit Price</div>
                    <div className="cursor_default table_title bold" style={{ width: "25%" }}>Quantity</div>
                    <div className="cursor_default table_title bold" style={{ width: "25%" }}>Discount</div>
                    <div style={{ width: "15%" }}> </div>
                    <div style={{ width: "10%" }}> </div>
                  </div>
                </div>
                {/* <div className="row">
                <div className="col-9 d-flex justify-content-center">
<hr></hr>
                </div> */}

              </div>
              <div className="container-fluid wrapproduct" >

                {(allproduct.length > 0 && window.location.href.indexOf("view") !== -1 &&
                  detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) ||
                  (window.location.href.indexOf("view") === -1 &&
                    detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) ?
                  detailsInvoice.products.map((p, index) =>
                    <Item
                      validatedItem={validatedItem}
                      setValidateItemF={setValidateItemFunction}
                      key={index}
                      submitItem={setClickSubmitItem}
                      pro={p}
                      arrColor={props.colors}
                      index={index}
                      productSelect={productSelect}
                      onItemChanged={(fieldChanged) => saveItemToStore(index, fieldChanged)}
                      onItemDeleted={() => deleteItemFromStore(index)}
                    />) :
                  invoice.products.map((p, index) =>
                    <Item key={index}
                      productSelect={productSelect}
                      submitItem={setClickSubmitItem}
                      pro={p}
                      index={index}
                      arrColor={props.colors}
                      onItemChanged={(fieldChanged) => saveItemToStore(index, fieldChanged)}
                      onItemDeleted={() => deleteItemFromStore(index)} />)}
              </div>
              {/* </div> */}
              {/* <div id='table-temp1' className=''>
              {  "window.location.href.indexOf", window.location.href.indexOf("view"))}
              {(allproduct.length > 0 && window.location.href.indexOf("view") != -1 &&
                detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) ||
                (window.location.href.indexOf("view") == -1 &&
                  detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) ?
                detailsInvoice.products.map((p, index) =>
                  <Item key={index}
                    pro={p}
                    arrColor={props.colors}
                    index={index}
                    productSelect={productSelect}
                    onItemChanged={(fieldChanged) =>
                      saveItemToStore(index, fieldChanged)}
                    onItemDeleted={() => deleteItemFromStore(index)} />) :
                invoice.products.map((p, index) =>
                  <Item key={index}
                    productSelect={productSelect}
                    pro={p}
                    index={index}
                    arrColor={props.colors}
                    onItemChanged={(fieldChanged) =>
                      saveItemToStore(index, fieldChanged)}
                    onItemDeleted={() => deleteItemFromStore(index)} />)}
            </div> */}

              <div className="row" style={{
                paddingBottom: "1%",
                paddingLeft: "6.5%",
                paddingRight: "7%"
              }}>

                <div className="col-3">
                  {displayInvoice === "false" &&


                    <button onClick={addItem} className="design_text buttonaddItem" style={{ width: "38%", height: "100%", backgroundColor: "#707071", color: "white", fontSize: "0.7vw" }}>Add New
                    </button>

                  }
                </div>
                <div className="col-9">

                </div>
              </div>
              <div className="row" style={{ paddingBottom: "3%" }} >
                <div className="col-9"
                ></div>
                <div className="col-3 ">
                  <div className=" d-flex flex-row" style={{ paddingLeft: "34%" }}>
                    <div className="" style={{ paddingRight: "9%" }} >
                      <span className="cursor_default design_text " style={{ fontWeight: "bold" }}>Total</span></div>
                    <div className="">
                      <span className="cursor_default design_text" style={{ fontWeight: "bold" }}> {saveSum2 > 0 ? "$" + saveSum2.toFixed(2) : saveSum ? "$" + saveSum.toFixed(2) :
                        ''}</span></div>
                  </div>
                </div>
              </div>

              {/* <input
              form=""
                hidden
                name='selectBillingAddress'
                style={{ marginLeft: "33%", width: "100%", height: "39%", backgroundColor: 'transparent', border: "none", color: "white", fonStize: "0.8vw", backgroundColor: colorFlagShowSaveP, marginBottom: "2px" }}
                // onClick={savepr}
                value="save"
                className="btn"
                type="submit" 
                /> */}



              <div className="row d-flex justify-content-center">
                {/* <DigitalSignature /> */}
              </div>



              {/* <Col md={{ span: 4, offset: 9 }} className="total-temp1 text-right">
                <Row className=' font-weight-bold'>
                  <Col md={4} className='totalSum-temp1 text-left pt-4'>Total:</Col>
                  <Col md={4} className='totalSum-temp1 text-right pt-4 p-0'>{saveSum2 > 0 ? saveSum2.toFixed(2) : saveSum ? saveSum.toFixed(2) :
                    ''
                  }</Col>
                </Row>
              </Col>
            </Row> */}
              {/* <div id='signatue' className='justify-content-md-center'>
              <div>
                <DigitalSignature />
              </div> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Form>
  )
}
const mapStateToProps = (state) => {
  return {
    imageInvoice: state.designReducer.imageInvoice,
    logowidth: state.LogoReducer.logoDesign.logoWidth,
    logoheight: state.LogoReducer.logoDesign.logoHeight,
    borderlogo: state.LogoReducer.logoDesign.logoBorderRadiusLogo,
    logo: state.LogoReducer.logoDesign.logo,
    colors: state.invoiceReducer.colors,
    allproduct: state.productReducer.allProducts
  };
}
const mapDispatchToProps = (dispatch) => ({
  changeimageInvoice: (image) => dispatch(actions.setImageInvoice(image)),
  callSaveInvoce: (value) => dispatch(actions.callSaveInvoce(value)),

})
export default connect(mapStateToProps, mapDispatchToProps)(New_Invoice)