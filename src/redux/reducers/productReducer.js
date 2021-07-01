import produce from 'immer'
import createReducer from "./reducerUtils";
import Untitled from '../../Img/Untitled-1.jpg'
import { actions } from '../actions/All_actions';
const initialState = {
        allProducts: [],
        newProduct: [{}],
        newProductTable: {},
        editproduct: {},
        imgProduct: Untitled,
        currentComponent: '',
        product: {},
        product1: {},
        productSelect: [],
        productId: "",
        flagShowSaveP: [false],
        colorFlagShowSaveP: "#707071",
        filteredProducts: [],

}
const products = {
        setFilteredProducts(state, action) {
                debugger
                state.filteredProducts = action.payload
        },
        setFilteredProducts1(state, action) {
                debugger
                state.filteredProducts.push(action.payload)
        },
        setResetAllNewProduct(state, action) {
                state.newProduct = []
        },
        editProduct11(state, action) {
                debugger
                state.allProducts[action.payload.i] = action.payload.objectProduct.product
        },
        setAddProduct(state, action) {
                debugger
                state.allProducts.unshift(action.payload)
                console.log("state.allProducts", state.allProducts)
                // state.allProducts.splice(0, 0, action.payload);
        },
        setNewProductTable(state, action) {
                state.newProductTable[action.payload.key] = action.payload.value
        },
        setNewProductTableFull(state, action) {
                state.newProductTable = action.payload
        },
        setColorFlagShowSaveP(state, action) {
                debugger
                state.colorFlagShowSaveP = action.payload
        },

        setFlagShowSaveP(state, action) {
                debugger
                state.flagShowSaveP[action.payload.index] = action.payload.value
        },

        setResetNewProduct(state, action) {
                // state.newProduct[action.payload] = {}
                state.newProduct.splice(action.payload, 1)
        },
        setProductId1(state, action) {
                state.productId = action.payload
        },
        setProductSelect(state, action) {
                state.productSelect.push(action.payload)
        },
        setProductSelectLimit(state, action) {
                state.productSelect = action.payload
        },
        setProduct1(state, action) {
                state.product1 = action.payload;
        },
        setAllProducts(state, action) {

                state.allProducts = action.payload;
        },
        // setAddProduct(state, action) {
        //         state.allProducts.push(action.payload)
        // },
        setPushNewProduct(state, action) {
                state.newProduct.push(action.payload)
        },
        setNewProductObject(state, action) {
                state.newProduct[action.payload.index] = action.payload.value
        },
        setNewProduct(state, action) {
                debugger
                //  alert('jj')
                console.log("state.newProduct[action.payload.index][action.payload.key]", state.newProduct[action.payload.index][action.payload.key])
                state.newProduct[action.payload.index][action.payload.key] = action.payload.value
        },
        setProductName(state, action) {
                // let f=action.payload
                state.newProduct.name = action.payload;
        },
        setProductPrice(state, action) {
                // let f=action.payload
                state.newProduct.price = action.payload;
        },

        setNewProduct1(state, action) {
                state.newProduct = action.payload
        },
        setImgProduct(state, action) {
                state.imgProduct = action.payload
        },
        setEditProduct(state, action) {
                // let f=action.payload
                state.editproduct = { ...action.payload, ...state.editproduct };
        },
        setCurrentComponent(state, action) {
                state.currentComponent = action.payload
        }


}
export default produce((state, action) => createReducer(state, action, products), initialState);
