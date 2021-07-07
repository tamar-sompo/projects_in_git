import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    contact: {
        name: null,
        email: null,
        address: null,
        phone: null
    },
    detailscontact: {},
    allContact: [],
    // contact:[{
    //     email:"",
    //     second_email:"",
    //     first_name:"",
    //     last_name:"",
    //     full_name:"",
    //     nick_name:"",
    //     birthday:"",
    //     costumer_type:"",
    //     phone_number:"",
    //     home_phone_number:"",
    //     best_time_to_call:"",
    //     job_phone_number:"",
    //     address:"",
    //     zip_code:"",
    //     lead_source:""


    // }]

    contactDetails: {
        quotesId: null,
        sourceUrl: null,
        status: null,
        image: null,
        conversations: [],
        email: null,
        numOfUnReadedWaves: null,
        active: true,
        starred: true,
        thumbnail: null,
        userId: null,
        waves: [],
        __v: 0,
        name: null,
        leadOwner: null,
        leadSource: null,
        attached: null,
        customerType: null,
        companyName: null,
        companySize: null,
        gender: null,
        createDateAndTime: new Date(),
        bestTimeToCallFrom: null,
        bestTimeToCallTo: null,
        birthday: null,
        telephon: null,
        mobileNumber: null,
        companyAddress: null,
        state: null,
        zipcode: null,
        whatsapp: null,
        linkedIn: null,
        Website: null,
        Facebook: null,
        instagram: null,
        youTube: null,
        googleContact: null,
        addYourMedia: null,
        secoundEmail: null,
        nickName: null,
        officePhone: null,
        describe: null,
        subscribe: null,
        newContact: {}
    }
}
const contacts = {
    setNewContact(state, action) {
        state.newContact = action.payload
    },
    setContactReset(state, action) {
        // console.log("hgghg",state.detailscontact.contact[action.payload])
        if (state.detailscontact.contact)
            state.detailscontact.contact[action.payload] = undefined

    },

    editContact11(state, action) {
        state.allContact[action.payload.i] = action.payload.objectContact
    },

    setAllContacts(state, action) {
        state.allContact = action.payload;
    },
    setAddContact(state, action) {
        console.log("reducer", action.payload)
        state.allContact.push(action.payload);

    },
    setNewContact(state, action) {
        state.newContact = { ...action.payload, ...state.newContact };
    },
    setNewContact1(state, action) {
        state.newContact = action.payload
    },
    // setUpdateContactFields(state, action) {
    //     state.contact = { ...state.contact, ...action.payload };
    // },
    setContactName(state, action) {
        state.contact.name = action.payload;
    },
    setContactEmail(state, action) {
        state.contact.email = action.payload;
    },
    setContactAddress(state, action) {
        state.contact.address = action.payload;
    },
    setContactPhone(state, action) {
        state.contact.phone = action.payload;
    },
    //tamar
    setCustomersDetails(state, action) {
    },
    setDetailsContact(state, action) {
        state.detailscontact = action.payload
    },
    // setRsetFieldContact(state,action){
    //     state.detailscontact
    // }

}

export default produce((state, action) => createReducer(state, action, contacts), initialState);
