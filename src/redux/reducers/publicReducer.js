import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    // userName:"",
    // tokenFromCookies:"",
    // buisness:"6090f0bbd5f61875ad0b5a4b"
    userName: window.location.href.split('/')[3],
    tokenFromCookies:
        document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
            .filter(s => s.includes('devJwt'))[0].split("=").pop() :
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEdGN4dFJueERlWXhNcjNZUWZxWWtQWDhsUmgyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIzMzE0NzM5fQ.lvFAravaFf6h_A3BQPMjKu1831pwM3ySvqtkAmNrOJw",
    buisness: "",
    saveInvoice: "false",
    // tokenFromCookies: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8"
}

const user = {
    // setGetBusiness(state, action) {
    //     state.buisness = action.payload
    // },
    // setSaveInvoice(state, action) {
    //     state.saveInvoice = action.payload
    // },
    setUserName(state, action) {
        state.userName = action.payload;
    },
    setTokenFromCookies(state, action) {
        state.tokenFromCookies = action.payload;
    },
    // setTokenFromCookies1(state, action) {
    //     state.tokenFromCookies = action.payload;
    // },
    setTokenToStore(state, action) {
        state.tokenFromCookies = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, user), initialState);



