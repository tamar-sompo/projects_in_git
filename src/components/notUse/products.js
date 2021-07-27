import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
function Products(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    //     const updateCustomerField = (fieldToUpdate) => dispatch(setCustomerDetails(fieldToUpdate))
    // const allProducts = (component1) => dispatch(actions.setComponentConfigurator(component1))
    //     const customerDetails = useSelector(state => state.customerReducer.customer);
    // allproduct: state.invoiceReducer.all_product
    const allproduct = useSelector(state => state.invoiceReducer.all_product)
    const changeInput = (e) => {
        "hi");
        let val = e.target.value.toLowerCase();
        val);
        setSearchTerm(val);
    }
    return (
        <>
            <div className="container" style={{}}>
                <div className="row">
                    <div className="col">
                        <h4>Product List</h4>
                    </div>

                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="input-group mb-3">
                            {/* <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div> */}

                            <input type="text" onChange={e => changeInput(e)} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px" }}>
                                <thead style={{ backgroundColor: "#F5F5FA", opacity: "100%" }}>
                                    <tr>
                                        <th>AMOUNT</th>
                                        <th>NAME</th>
                                        <th>USER</th>
                                    </tr>
                                </thead>
                                {"nnnnnnnnnnnnnnnnnnnn", props)}
                                {allproduct ?
                                    <tbody >
                                        {allproduct.filter(product =>
                                            (product.name != null && product.name.toLowerCase().includes(searchTerm))

                                            || (product.user != null && product.user.toLowerCase().includes(searchTerm)))
                                            .map(product => {
                                                { product)}
                                        return (
                                        <tr key={product._id}>
                                            {/* {contact.googleContact ?
                                                <td><img style={{ height: '8vh', width: '8vh', borderRadius: "50%" }} src={contact.googleContact.coverPhotos[0].url} /></td>:<td></td>} */}
                                            {/* {contact.googleContact &&
                                                <td><img style={{ height: '8vh', width: '8vh', borderRadius: "50%" }} src={contact.googleContact.coverPhotos[0].url} /></td>} */}
                                            {/* <td>profile</td> */}
                                            <td>{product.name}</td>
                                            <td>{product.amount}</td>
                                            <td>{product.user}</td>


                                        </tr>
                                        )
                                                })
                                        }
                                    </tbody> :
                                    <div></div>
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {"ppppppp", props.allproduct)}
            {/* <Setting></Setting> */}

        </>
    )
}

// const mapStateToProps=(state)=>{
//     return{
//       allproduct: state.invoiceReducer.all_product


//     }

export default Products;
