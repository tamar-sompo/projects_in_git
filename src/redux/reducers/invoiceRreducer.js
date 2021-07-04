import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {

    // colors:['black','black','black','black'],

    flagValidPrice:false,
    flagValidName: false,
    clickSave:false,
    invalidProduct:false,
    validProduct:false,
    valuesCalculate: [],
    total: [],
    totalPrice: [],
    totalToPaid: '',
    username: '',
    lastInvoice: {},
    message: '',
    allInvoices: [],
    allReciptes: '',
    allShippings: '',
    allAccep: '',
    invoice: {
        products: [],
        // type: "invoice"
    },
    amountProductInvoice: 0,
    invoiceId: "",
    invoiceDetailsView: {
        products: []
    },
    dislayInvoice: "true",
    // invoiceId: "111",
    productionsList: [],
    invoiceNumber: "",
    all_product: "",
    signatureToServer: "",
    signatureFromServer: "",
    companyChangesDetails: {},
    urlImgLogo: "",
    signatureFromServer: '',
    invoiceName: '',
    dueDate: '',
    comment: '',
    focus: '',
    updateContact: {},
    contactId: '',
    invoiceeye: '',
    viewConversion: 'false',
    invoiceSave: {},
    calcSumProduct: 0,
    flagSavePr: 'disabled',
    saveSum: 0,
    flagBorderProduct: false,
    saveSumView: 0,
    showLoud: false,
    flagValidation: false,
    flagOfterValidation: false,
    flagTmpSave: false,
    flagIfEmpty: false,
    flagIfEmptyProduct: false,
    flagView: false,
    flagFromTable: false,
    flagPush: false,
    flagPush1: false,
    filteredInvoices: [],
    flagSaveP: false,
    borderProductInvoice: false
}


const invoices = {
    setflagValidName(state, action){
   state.flagValidName=action.payload
    },

    setflagValidPrice(state, action){
        state.flagValidPrice=action.payload
    },

    setInvalidProduct(state, action){
state.invalidProduct=action.payload
    },

    setValidProduct(state, action){
        state.validProduct=action.payload
    },


    setClickSave(state, action){
        state.clickSave=action.payload
    },

    setFlagIfEmptyProduct(state, action) {
        state.flagIfEmptyProduct = action.payload
    },

    setBorderProductInvoice(state, action) {
        state.borderProductInvoice = action.payload
    },

    setFlagSaveP(state, action) {
        state.flagSaveP = action.payload
    },

    setFlagPush1(state, action) {
        state.flagPush1 = action.payload
    },
    setFilteredInvoices(state, action) {
        state.filteredInvoices = action.payload
    },
    setFilteredInvoices1(state, action) {

        state.filteredInvoices.push(action.payload)
    },
    // setSpecificRoute(state, action) {
    //     state.specificRoute = action.payload
    // },
    setFlagPush(state, action) {
        state.flagPush = action.payload
    },

    setFlagFromTable(state, action) {
        state.flagFromTable = action.payload
    },

    setFlagView(state, action) {
        state.flagView = action.payload
    },

    setFlagIfEmpty(state, action) {
        state.flagIfEmpty = action.payload
    },
    setShowInInvoice(state, action) {

        state.showLoud = action.payload
    },
    setFlagValidation(state, action) {
        state.flagValidation = action.payload
    },
    setFlagTmpSave(state, action) {
        state.flagTmpSave = action.payload
    },
    setFlagOfterValidation(state, action) {

        state.flagOfterValidation = action.payload
    },

    setSaveSumView(state, action) {

        state.saveSumView = state.saveSumView + action.payload
    },
    setflagBorderProduct(state, action) {
        state.flagBorderProduct = action.payload
    },
    setFlagSavePr(state, action) {
        state.flagSavePr = action.payload
    },
    setCalcSumProduct(state, action) {
        state.calcSumProduct = action.payload
    },
    setInvoiceSave(state, action) {

        console.log("invoice reducer t unvoice save", action.payload)
        state.invoiceSave = action.payload
    },


    setViewConversion(state, action) {
        state.viewConversion = action.payload
    },
    // setInvoiceSave(state, action){
    //     state.invoiceSave=action.payload
    // },
    setInvoicecye(state, action) {
        state.invoiceeye = action.payload
    },
    setContactId(state, action) {
        state.contactId = action.payload
    },
    r(state, action) {
        console.log("vhuaaaa")

        state.invoiceDetailsView[action.payload] = undefined
    },
    setResetContactedit(state, action) {
        state.updateContact = action.payload
    },
    setresetcontactedit(state, action) {
        state.updateContact[action.payload] = undefined
    },

    setUpdateContact(state, action) {
        state.updateContact = { ...action.payload, ...state.updateContact }
    },
    setinvoiceDetailsViewContact(state, action) {
        state.invoiceDetailsView.contact = action.payload
    },

    deleteLastProduct(state, action) {
        state.invoiceDetailsView.products = state.invoiceDetailsView.products.filter((_, i) =>
            i != (state.invoiceDetailsView.products.length - 1)
        )
    },
    setDislayInvoice(state, action) {
        state.dislayInvoice = action.payload;
    },
    setColors(state, action) {
        state.colors = action.payload;
    },
    setGetInvoiceId(state, action) {
        state.invoiceId = action.payload;
    },
    setAllProduct(state, action) {
        state.all_product = action.payload
    },
    setValuesCalculate(state, action) {
        state.valuesCalculate = { ...state.valuesCalculate, ...action.payload };
    },
    setPublicNote(state, action) {
        state.publicNote = action.payload;
    },
    setTotalPrice(state, action) {
        state.totalPrice = { ...state.totalPrice, ...action.payload };
    },
    setUserName(state, action) {
        state.username = action.payload;
    },
    // setAllInvoices(state, action) {
    //     state.allInvoices.push(action.payload);
    // },
    setPushInvoices(state, action) {
        state.allInvoices = action.payload;
    },
    setPushInvoices2(state, action) {
        state.allInvoices.push(action.payload);
    },
    setSendEmail(state, action) {
        state.message = action.payload;
    },
    setSignatureToInvoice(state, action) {
        state.invoice.signature = action.payload;
    },
    setSignatureToServer(state, action) {
        state.invoice.signature = action.payload;
    },
    setUpdateCompnyFields(state, action) {
        state.companyChangesDetails = action.payload;
    },
    // setAllReciptes(state, action) {
    //     state.allReciptes = action.payload;
    // },
    // setAllShipping(state, action) {
    //     state.allShippings = action.payload;
    // },
    // setAllAccep(state, action) {
    //     state.allAccep = action.payload;
    // },
    setInvoiceShow(state, action) {
        state.invoiceDetailsView = action.payload;
    },
    setInvoice(state, action) {
        state.invoice = action.payload;
    },
    setProductId2(state, action) {

        console.log("state.invoiceDetailsView.products", state.invoiceDetailsView.products)
        state.invoiceDetailsView.products[action.payload.index1].id = action.payload.id
    },
    setProduction(state, action) {
        state.invoiceDetailsView.products.push({ id: action.payload.id, amount: action.payload.amount, sum_product: action.payload.sum_product })
    },
    setProductionAfterDelete(state, action) {
        state.invoiceDetailsView.products = action.payload
    },
    setUpdateInvoiceFields(state, action) {
        console.log("setUpdateInvoiceFields", action.payload.key, action.payload.value)
        // if(action.payload.key=='products')
        // state.invoice.products=
        //  if(action.payload.key=="products")
        //  state.invoice[action.payload.key]={id:action.payload.value}
        //  else
        state.invoice[action.payload.key] = action.payload.value

    },
    deleteLastProductInvoice(state, action) {
        state.invoice.products = state.invoice.products.filter((_, i) =>
            i != ((state.invoice.products.length) - 1)
        )
    },
    setSumProductToPInvoice(state, action) {
        let index = state.invoice.products.findIndex(x => x.id == action.payload.id)
        state.invoice.products[index] = { id: action.payload.id, amount: action.payload.amount, sum_product: action.payload.sum_product }
    },
    setProductId(state, action) {
        console.log("state.invoiceDetailsView.products", state.invoiceDetailsView.products)
        state.invoice.products[action.payload.index1].id = action.payload.id
    },
    setProductFirst(state, action) {
        if (state.invoiceDetailsView.products && state.invoiceDetailsView.products.length > 0) {
            state.invoiceDetailsView.products[action.payload.index] = { id: action.payload.id, amount: action.payload.amount, sum_product: action.payload.sum_product }



        }
        else {
            state.invoice.products[action.payload.index] = { id: action.payload.id, amount: action.payload.amount, sum_product: action.payload.sum_product }
        }

    },
    setProducts(state, action) {
        //   state.invoice.products.push(action.payload)
        state.invoice.products.push({ id: action.payload.id, amount: action.payload.amount, sum_product: action.payload.sum_product })
    },
    setProductAmount(state, action) {
        state.amountProductInvoice = action.payload
        // state.invoice.products[action.payload.index1].amount=action.payload.amount

    },
    // setProductId1(state, action){
    // state.prod
    // },
    setAmountToProduct(state, action) {

        if (state.invoiceDetailsView.products && state.invoiceDetailsView.products.length > 0)
            state.invoiceDetailsView.products[action.payload.index1].amount = action.payload.amount

        else
            state.invoice.products[action.payload.index1].amount = action.payload.amount
        // console.log("setAmountToProduct")
        // let index=state.invoice.products.findIndex(x => x.id == action.payload.id)
        // console.log("setAmountToProduct", index)
        // state.invoice.products[index] = { id: action.payload.id, amount: action.payload.amount }
        // state.invoice.products.map((p,i)=>
        // p.id==action.payload.id &&  state.invoice.products[i]==action.payload.amount
        // )

    },
    setAmountToProductUpdate(state, action) {
        state.invoiceDetailsView.products[action.payload.index1].amount = action.payload.amount
    },
    setResetSaveSum(state, action) {
        state.saveSum = action.payload
    },
    setSum(state, action) {

        state.saveSum = 0
        if (state.invoiceDetailsView.products && state.invoiceDetailsView.products.length > 0) {
            state.invoiceDetailsView.products[action.payload.index1].sum_product = action.payload.sum
            state.invoiceDetailsView.products.filter(p => {
                state.saveSum += p.sum_product
            })

        }
        else {
            state.invoice.products[action.payload.index1].sum_product = action.payload.sum
            state.invoice.products.map((p, index) => {
                state.saveSum += p.sum_product
            })
        }
    },
    // setSumUpdate(state, action){
    //     state.invoiceDetailsView.products[action.payload.index1].sum_product = action.payload.sum
    // },
    setDeleteSaveSum(state, action) {

        if (state.invoiceDetailsView.products && state.invoiceDetailsView.products.length > 0)
            state.saveSum = (state.saveSum) - state.invoiceDetailsView.products[action.payload].sum_product

        else
            state.saveSum = (state.saveSum) - state.invoice.products[action.payload].sum_product
    },

    setGetInvoiceById(state, action) {
        state.invoiceId = action.payload;
    },
    setInvoiceNumber(state, action) {
        state.invoiceNumber = action.payload;
    },
    setProductAfterDelete(state, action) {
        state.invoice.products = action.payload
    },
    setFlag(state, action) {
        state.flag = action.payload;
    },
    setNameComponent(state, action) {
        state.nameComponent = action.payload;
    },
    setInvoiceName(state, action) {
        state.invoiceName = action.payload
    },
    setDueDate(state, action) {
        state.dueDate = action.payload
    },
    setComment(state, action) {
        state.comment = action.payload
    },
    setLogoToInvoice(state, action) {
        state.urlImgLogo = action.payload;
    },
    setFocus(state, action) {
        state.focus = action.payload;
    },
    setLogoToFilesServer(state, action) {
        state.urlImgLogo = action.payload;
    },
    // setSaveInvoice(state, action) {
    //     state.invoice = { ...state.invoice };
    // },
    setUpdateInvoice(state, action) {
        state.invoiceId = action.payload;
    },
    setRemoveInvoice(state, action) {
        state.invoiceId = action.payload;
    }

}



export default produce((state, action) => createReducer(state, action, invoices), initialState);
