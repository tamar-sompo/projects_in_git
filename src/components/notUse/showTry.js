// import React from 'react';
// // import { reduxForm, Field } from 'redux-form';
// import Try from './try';


// export default function Shoe(props) {
//    const submit = (values) => {
//     // print the form values to the console
//     console.log(values)
//     }
//     return (
//         <>
//             <Try onSubmit={submit} />
//             {/* <p>{props.form.values}</p> */}
//         </>
//     )
// }
import React, { Component } from 'react';
import './showTry.css';

export default class ShowTableInputs extends Component{
    state = {
        formState: {
            id: '',
            ProductName:"",
            Description:"",
            UnitPrice:"",
            Quantity:"",
            Discount:"",
            Total:"",
            mode: "submit"
        },
        users: [
            {
                id: 0,
                ProductName:"",
                Description:"",
                UnitPrice:"",
                Quantity:"",
                Discount:"",
                Total:"",
                updating: false
            }
        ]
    };

    resetFormState = () => {
        this.setState({
            formState: {
                id: '',
                ProductName:"",
                Description:"",
                UnitPrice:"",
                Quantity:"",
                Discount:"",
                Total:"",
                mode: "submit"
            }
        });
    };

    onChange = event => {
        this.setState({
            formState: {
                ...this.state.formState,
                [event.target.name]: event.target.value
            }
        });
    };
    onSubmit = event => {
        const { users, formState } = this.state;
        event.preventDefault();
        const  ProductName= event.target.querySelector("input[name='ProductName']")
            .value;
            const  Description= event.target.querySelector("input[name='Description']")
            .value;
            const  UnitPrice= event.target.querySelector("input[name='UnitPrice']")
            .value;
            const  Quantity= event.target.querySelector("input[name='Quantity']")
            .value;
            const  Discount= event.target.querySelector("input[name='Discount']")
            .value;
            const Total = event.target.querySelector("input[name='Total']")
            .value;
        if (formState.mode === "submit") {
            this.setState({
                users: [
                    ...this.state.users,
                    {
            ProductName:"",
            Description:"",
            UnitPrice:"",
            Quantity:"",
            Discount:"",
            Total:"",
                        updating: false,
                        id: this.state.users[this.state.users.length - 1].id + 1
                    }
                ]
            });
        } else if (formState.mode === "edit") {
            const index = users.find((user) => user.id === formState.id).id;
            users[index] = {
                ProductName,
            Description,
            UnitPrice,
            Quantity,
            Discount,
            Total,
                updating: false,
                id: users[index].id
            }
            this.setState({
                users: [...users]
            });
        }

        this.resetFormState();
    };

    updateUser = key => {
        let { users } = this.state;
        users[key].updating = true;

        this.setState({
            formState: { ...this.state.users[key], mode: "edit" },
            users
        });
    };

    deleteUser = key => {
        let { users } = this.state;
        users.splice(key, 1);
        this.setState({
            users: [...users]
        });
    };

    render() {
        const { users, formState } = this.state;
        return (
            <div>
                <Form
                    formState={formState}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <Table
                    users={users}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser}
                />
            </div>
        );
    }
}

const Table = ({ users = [], updateUser, deleteUser }) => {
    return (
        <div className="table">
            <div className="table-header">
                <div className="row">
                    <div className="col-2">Product-Name</div>
                    <div className="col-2">Description</div>
                    <div className="col-2">Unit-Price</div>
                    <div className="col-1">Quantity</div>
                    <div className="col-2">Discount</div>
                    <div className="col-2">Total</div>
                    <div className="col-1">Options</div>
                </div>
            </div>
            <div className="table-body">
                {users.map((user, key) => {
                    return (
                        <div className={`row ${user.updating ? "updating" : ""}`}>
                            <div className="col-2">{user.ProductName}</div>
                            <div className="col-2">{user.Description}</div>
                            <div className="col-2">{user.UnitPrice}</div>
                            <div className="col-1">{user.Quantity}</div>
                            <div className="col-2">{user.Discount}</div>
                            <div className="col-2">{user.Total}</div>
                            <div className="col-1">
                                <button
                                    className="icon"
                                    onClick={() => updateUser(key)}
                                >
                                    <i className="far fa-edit" />
                                </button>
                                <button className="icon">
                                    <i
                                        className="fas fa-user-minus"
                                        onClick={() => deleteUser(key)}
                                    />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Field = ({ label = "", name = "", value = "", onChange }) => {
    return (
        <div className="field">
            <label htmlFOR={name}>{label}</label>
            <input type="text" name={name} value={value} onChange={onChange} />
        </div>
    );
};

const Form = ({ formState, onChange, onSubmit }) => {
    return (
        <div className="row"> 
        <form className="form" onSubmit={onSubmit}>
            <fieldset>
                <div className="col">
                <Field
                    name="ProductName"
                    label="ProductName"
                    value={formState.ProductName}
                    onChange={onChange}
                />
                 <Field
                    name="Description"
                    label="Description"
                    value={formState.Description}
                    onChange={onChange}
                />
                 <Field
                    name="UnitPrice"
                    label="UnitPrice"
                    value={formState.UnitPrice}
                    onChange={onChange}
                />
                </div>
                <div className="col">
                 <Field
                    name="Quantity"
                    label="Quantity"
                    value={formState.Quantity}
                    onChange={onChange}
                />
                 <Field
                    name="Discount"
                    label="Discount"
                    value={formState.Discount}
                    onChange={onChange}
                />
                 <Field
                    name="Total"
                    label="Total"
                    value={formState.Total}
                    onChange={onChange}
                />
            </div>
            </fieldset>
            <button>{formState.mode}</button>
        </form>
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById("container"));
