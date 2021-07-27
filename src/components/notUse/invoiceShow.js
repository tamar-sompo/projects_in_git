import React, { useState } from 'react';
import { connect } from 'react-redux';

import ExportInvoice from './iconsExportInvoice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
// import logo from '../assets/newLogo.png';
// import { Icon } from '@iconify/react';
// import whatsappIcon from '@iconify-icons/mdi/whatsapp';
// import gmailIcon from '@iconify-icons/mdi/gmail';
// import Pdf from "react-to-pdf";
// import $ from "jquery";

const ref = React.createRef();





function InvoiceShow(props) {

  const [visibleEdit, setvisibleEdit] = useState("true");



  const d = props.invoiceDetailsView;
  const p = d.productions;


  // const whatsappOn = () => {
  //   "message1"),
  // const number = {d.companyPhone}
  // <ReactWhatsapp number="0587246207" message="אני מנסה לשלוח הודעה מהאפלקציה שלי" />
  //   "message2")
  // }

  const renderProductions = (product, id) => {
    return <tr
      key={'row_' + id}>
      <td>
        <span>{id + 1}</span>
      </td>
      <td>{product.product}</td>
      <td>{product.description}</td>
      <td>{product.unitPrice}</td>
      <td>{product.quantity}</td>
      <td>{product.discount}</td>
      <td>{product.total}</td>
    </tr>
  }
  // const getAllProductions = () => {
  //   return (
  //     p.map((product, id) => {
  //       return renderProductions(product, id);
  //     }))
  // }
  const convertDate = () => {
    const date = d.date
    let date1 = new Date(date)
    return date1.getDate() + "/" + (date1.getMonth() + 1) + "/" + date1.getFullYear()
  }
  const change_visibleEdit = () => {
    setvisibleEdit("true")
  }


  return (
    <>
      <ExportInvoice />
      <div className="row">
        <div className="col">
          {/* <img src={logo} alt="Logo" style={{ border: '4px solid red' }}></img> */}
          <div>
            <div className="col">
              <input type="text" className="form-control ml-5 col-7 mb-4" id="title" placeholder={d.title} readOnly>
              </input>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="from" className="ml-5"></div>
        <div className="col-sm-5">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-3 control-label font-bold">Date</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="date" placeholder={convertDate()} readOnly >
                {/* d.date.toLocaleDateString() */}
              </input>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="from" className="ml-5"></div>
        <div className="col-sm-5">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-3 control-label font-bold">Invoice-Number</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="date" placeholder={d.invoiceNumber} readOnly >
              </input>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="from" className="ml-5"></div>
        <div className="col-sm-5">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-3 control-label font-bold">Due-Date</label>
            <div className="col-sm-7">
              <input type="text" className="form-control" id="date" placeholder={d.dueDate} readOnly >
              </input>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="from" className="ml-5"></div>
        <h4 id="from" className="ml-5 mt-4">From</h4>
        <div id="" className="col-7"></div>
        <div id="from" className="col-1"></div>
        <div id="from" className="mr-5"></div>
        <h4 id="from" className="mt-4 mr-4">For</h4>
      </div>
      <div className="row ml-5" id="detailsCompany">
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control-sm search rounded" placeholder={d.companyName} id="companyName" style={{ color: '#000000' }} readOnly
          >
          </input>
        </div>
        <div id="" className="col-5"></div>
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control-sm search rounded" placeholder={d.clientName} id="clientName" readOnly
          >
          </input>
        </div>
      </div>
      <div className="row ml-5" id="detailsCompany">
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control-sm search rounded" placeholder={d.companyMail} readOnly
            id="companyMail" style={{ color: '#000000' }}
          >
          </input>
        </div>
        <div id="" className="col-5"></div>
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control-sm search rounded" placeholder={d.clientMail} id="dclientMail" readOnly
          >
          </input>
        </div>
      </div>
      <div className="row ml-5" id="detailsCompany">
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control search rounded" placeholder={d.companyAddress} id="companyaddress" style={{ color: '#000000' }} readOnly
          >
          </input>
        </div>
        <div id="" className="col-5"></div>
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control-sm search rounded" placeholder={d.clientAddress} id="clientAddress" readOnly
          >
          </input>
        </div>
      </div>
      <div className="row ml-5" id="detailsCompany">
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control search rounded" placeholder={d.companyPhone} id="companyPhone" style={{ color: '#000000' }} readOnly
          >
          </input>
        </div>
        <div id="" className="col-5"></div>
        <div id="" className="col-lg-3">
          <input type="text" className="form-control form-control-sm search rounded" placeholder={d.clientPhone} id="clientPhone" readOnly
          // onChange={onFieldChanged('clientPhone')}
          >
          </input>
        </div>
      </div>
      <div id="" className="col-5"></div>
      <div id="" className="col-lg-3">
      </div>
      {/* </div> */}
      {/* <ShowTableInputs /> */}
      <div className="container mt-3 " id="tableBorder">
        <table className="table table-bordered table-striped table-hover mt-3 mb-0" style={{ display: 'table' }} responsive>
          <thead>
            <tr className="d-flex">
              <th >#</th>
              <th >Product Name</th>
              <th >Description</th>
              <th >Unit Price</th>
              <th >Quantity</th>
              <th >Discount</th>
              <th id="light">Total</th>
            </tr>
          </thead>
          <tbody>

            {/* {getAllProductions()} */}

            {/* {d.prodactions.map((p, index) => <Item 
                key={index}
                {...p}></Item>)} */}

          </tbody>
        </table>


      </div>
      {/* <p>
          <button type="button" className="btn btn-default btn-sm" onClick={addItem}>
            <span className="glyphicon glyphicon-plus"></span> Add-Item
        </button>
        </p> */}
      <div className="form-group ">
        <label for="exampleFormControlTextarea2"></label>
        <textarea className="form-control rounded-3 font-weight-bold col-6" id="comments" rows="4" >{d.comments}</textarea>
        {/* {d.comments} */}

        {/* <button onClick={saveInvoiceServerAction} type="button" className="btn btn-light">submit</button> */}
      </div>

      {/* <EmailDetails /> */}


    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const mapStateToProps = (state) => {
  return {
    invoiceDetailsView: state.invoiceReducer.invoiceDetailsView,
    invoice: state.invoiceReducer.invoice,
    invoiceId: state.invoiceReducer.invoiceId
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InvoiceShow)


export const Item = (props) => {

  const { product, description, unitPrice, quantity, discount, total } = props;
  // const updateCell = (title) => (value) => {
  //   onItemChanged({ [title]: value })
  // }

  return <tr className="d-flex">

    {/* with update option */}

    {/* <Cell classNameName="col-2" value={product} onChange={updateCell('product')} />
    <Cell classNameName="col-3" value={description} onChange={updateCell('description')} />
    <Cell classNameName="col-2" value={unitPrice} onChange={updateCell('unitPrice')} />
    <Cell classNameName="col-2" value={quantity} onChange={updateCell('quantity')} />
    <Cell classNameName="col-2" value={discount} onChange={updateCell('discount')} />
    <Cell classNameName="col-1" value={total} onChange={updateCell('total')} /> */}

    {/* without update option  */}

    <Cell classNameName="col-2" value={product} />
    <Cell classNameName="col-3" value={description} />
    <Cell classNameName="col-2" value={unitPrice} />
    <Cell classNameName="col-2" value={quantity} />
    <Cell classNameName="col-2" value={discount} />
    <Cell classNameName="col-1" value={total} />
    {/* <td><button onClick={onItemDeleted}></button></td> */}
    {/* <td>
      <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-remove"></span>
      </button>
    </td> */}

  </tr>
}

export const Cell = (props) => {
  const { classNameName, value } = props;
  return <td className={classNameName}><input className={'col-12'} value={value} ></input></td>

}