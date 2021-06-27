import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { actions } from '../../../redux/actions/All_actions';
import { SelectItem } from './selectItem';
import Switch from "react-switch";
import './config.css'
import $ from 'jquery'
export function Content(props) {
  const dispatch = useDispatch();

  const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);


  const invoiceName = useSelector(state => state.invoiceReducer.invoiceName)
  const setInvoiceName = (invoiceName) => dispatch(actions.setInvoiceName(invoiceName))
  const dueDate = useSelector(state => state.invoiceReducer.dueDate);
  const setDueDate = (dueDate) => dispatch(actions.setDueDate(dueDate))
  const setAllProducts = (allProducts) => dispatch(actions.setAllProducts(allProducts))
  const productsList = useSelector(state => state.productReducer.allProducts);

  const product = useSelector(state => state.productReducer.newProduct);
  const setProductName = (productName) => dispatch(actions.setProductName(productName))
  const setProductPrice = (productPrice) => dispatch(actions.setProductPrice(productPrice))
  const setAddProduct = (newProduct) => dispatch(actions.setAddProduct(newProduct))
  const comment = useSelector(state => state.invoiceReducer.comment)
  const setComment = (comment) => dispatch(actions.setComment(comment))

  // const [clickInvoice, setClickInvoice] = useState(false)
  // const [clickProducts, setClickProducts] = useState(false)
  // const [clickComments, setClickComments] = useState(false)
  const focus = useSelector(state => state.invoiceReducer.focus);
  const setFocus = (focus) => dispatch(actions.setFocus(focus))
  const [discout, setDiscount] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [idBefor, setIdBefor] = useState('');
  const getAllProducts = () => {
    fetch("https://finance.leader.codes/allProducts/DYc3VUmEHScqaZBw300lv89fna82")
      .then(res => res.json())
      .then(
        (result) => {
          setAllProducts(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }


  const convertdate = (date1) => {
    console.log("date", date1)

    let date = new Date(date1)
    console.log("date11111", date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1))
    if (date.getDate() < 10 && date.getMonth() > 9)
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + '0' + (date.getDate())
    if (date.getDate() < 10 && date.getMonth() < 10)
      return date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + '0' + (date.getDate())
    if (date.getDate() > 9 && date.getMonth() < 10)
      return date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + (date.getDate())
    else
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
  }

  const onFieldChanged = (fieldName) => (e) => {
    const value = e.target.value;
    if (fieldName = "dueDate")
      updateinvoiceField({ [fieldName]: convertdate(value) })
    else
      updateinvoiceField({ [fieldName]: value })
  }

  // const changeInvoice = () => {
  //   setClickInvoice(!clickInvoice)
  //   setClickProducts(false)
  //   setClickComments(false)
  // }
  // const changeProducts = () => {
  //   setClickProducts(!clickProducts)
  //   setDiscount(false)
  //   setClickInvoice(false)
  //   setClickComments(false)
  // }
  // const changeComments = () => {
  //   setClickComments(!clickComments)
  //   setClickInvoice(false)
  //   setClickProducts(false)
  // }
  useEffect(() => {
    getAllProducts()

    const selectedItem = productsList.find(item => item.name === inputValue)
    if (selectedItem != undefined) {
      clearProductInp()
      setProductName(selectedItem.name)
      setProductPrice(selectedItem.price)
    }
  }, [inputValue]);

  const clearProductInp = () => {
    setInputValue('')
    setProductName('')
    setProductPrice('')
  }

  const addClassToIl = (e) => {
    if($(`#${e}`).hasClass('liEnter'))
        $(`#${e}`).removeClass('liEnter');
  else
      $(`#${e}`).addClass('liEnter');
      if (idBefor === '')
         setIdBefor(e)
      else{
        if(idBefor !== e)
       { $(`#${idBefor}`).removeClass('liEnter');
        setIdBefor(e)}
      }
  
      // console.log("ffffffff",e.target.class)
    }
  return (
    <>



<ul class="list-group list-group-flush">
        <ul class="list-group d-flex flex-column accordion" id="accordionExample">
{/* <div class="accordion" id="accordionExample"> */}


 

{/* <div className='bgcBtnConfig m-0 mt-2 p-0 mb-2' data-toggle="collapse" data-target="#collapsePicture" aria-expanded="false" aria-controls="collapsePicture collapseColor"> */}
      <li
      onClick={() => addClassToIl('1')}
      className="list-group-item d-flex align-items-center yy  justify-content-start listConfig"  id="1"
      data-toggle="collapse" data-target="#collapsePicture" aria-expanded="false" aria-controls="collapsePicture collapseColor">
          <FontAwesomeIcon
            size='lg'
            icon={['fas', 'receipt']}
            style={{width:'1.25em'}}
          />
        <h5 className="l fontConfig">Invoice</h5>
      </li>
      
      <div  className="d-flex justify-content-around">
<div class="collapse" id="collapsePicture" data-parent="#accordionExample">
<div>
        <div className="justify-content-center pl-4 ml-5 mr-5 mb-5">


        <Row>
                  <Col md={6} className='static-temp1 text-left'>Due Date:{() => convertdate(detailsInvoice.dueDate)}
                  </Col>
                  <Col md={6} className='text-right p-0'>
                    {/* <Link to="Invoice/Content" 
                      style={{ color: "black", border: "none" }}
                    >*/}
                    {console.log("detailsInvoice.dueDate", detailsInvoice && detailsInvoice.dueDate && detailsInvoice.dueDate)}
                    <input
                      // disabled={displayInvoice === "true" ? "disable" : ""}
                      className={focus === 'dueDate' ? 'focus-temp1' : 'editable-temp1'}
                      type="Date"
                      size="6"
                      // placeholder='09-08-1999'

                      defaultValue={detailsInvoice ? detailsInvoice.dueDate ? convertdate(detailsInvoice.dueDate) : convertdate(new Date()) : convertdate(new Date())}
                      //  value="2020-08-09"
                      // onClick={changeCurrentComponent("Content")}
                      onChange={onFieldChanged('dueDate')}
                      onClick={() => setFocus('dueDate')}
                    >
                    </input>
                  </Col>
                </Row>






          <input
            className='inpConfig row mt-4'
            placeholder='Invoice Name'
            value={invoiceName}
            onChange={(e) => setInvoiceName(e.target.value)}
            onClick={(e) => setFocus('invoiceName')}>
          </input>

          <input
            className='inpConfig row mt-4'
            placeholder='due date'
            value={dueDate}
            onClick={(e) => setDueDate(e.target.value)}
            onClick={(e) => setFocus('dueDate')}
            />
        </div>
      </div>
      </div>
      </div>


      <li className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="2"
      onClick={() => addClassToIl('2')}
      data-toggle="collapse" data-target="#collapseColor" aria-expanded="false" aria-controls="collapseColor">
           <FontAwesomeIcon
            size='lg'
            icon={['fas', 'box-open']}
            style={{width:'1.25em'}}
          />
        
        <h5 className="l">Products</h5>
      </li>
{/* </div>  */}
<div className="d-flex justify-content-around">
<div class="collapse" id="collapseColor" data-parent="#accordionExample" style={{width:'100%'}}>
<div>
        <div className=" pl-3 ml-5 mr-5">
          <div
            className='mt-4'
            style={{ width: '100%' }}
          >
            <SelectItem
              placeholder="Look for a product"
              itemsList={productsList}
              setValue={setInputValue}
              value={inputValue}
            />
          </div>
        </div>
        <div className=" pl-4 ml-5 mr-5">
          <input
            className='inpConfig row mt-4'
            placeholder="product name"
            value={product.name}
            onChange={(e) => setProductName(e.target.value)}
            onClick={(e) => setFocus('productName')}
          />
          <input
            className='inpConfig row mt-4'
            placeholder="Price per unit"
            value={product.price}
            onChange={(e) => setProductPrice(e.target.value)}
            onClick={(e) => setFocus('productPrice')}
          />
          <div className='row mt-4'>
            <div className='btnConfig mr-3' >
              Discount
    </div>
            {
              <div className='xxx'>
                <Switch
                  onChange={() => setDiscount(!discout)}
                  checked={discout}
                  // offColor='white'
                  // onColor='white'
                  // uncheckedIcon='false'
                  // checkedIcon='false'
                  height='30'
                  width='70'
                  id='aa'
                />
              </div>
}
          </div>
          {discout &&
           
            <input type="number"></input>
          }
        </div>
        <div className='pl-4 ml-3 mb-5'>
          <button
            className='d-inline btnSave mt-4 py-2 mx-2'
            onClick={() => clearProductInp()}
          >Add a Product
 </button>
          <button
            className='d-inline btnSave mt-4 py-2 mx-2'
            onClick={() => setAddProduct({
              name: product.name,
              price: product.price
            })}
          >
            Save product
 </button>
        </div>
      </div>
</div>
</div>


<li className="list-group-item d-flex align-items-center yy justify-content-start listConfig" id="3" 
onClick={() => addClassToIl('3')}
      data-toggle="collapse" data-target="#collapseComments" aria-expanded="false" aria-controls="collapseColor">
           <FontAwesomeIcon
            size='lg'
            icon={['fas', 'comments']}
            style={{width:'1.25em'}}
          />
        
        <h5 className="l">Comments</h5>
      </li>
<div className="d-flex justify-content-around">
<div class="collapse" id="collapseComments" data-parent="#accordionExample" style={{width:'100%'}}>
<div className="justify-content-center pl-4 ml-5 mr-5 mb-5">
          <input
            className='inpConfig row mt-4'
            placeholder='Your comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onClick={(e) => setFocus('comment')}>
          </input>
        </div>
</div>
</div>
</ul>
</ul>

    
    </>);
}