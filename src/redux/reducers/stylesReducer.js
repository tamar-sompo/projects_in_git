import produce from 'immer'
import createReducer from "./reducerUtils";
const initialState = {
        allstyles : [
            {
                allpage={
                    backgroundColor:''
                },
                invoiceName={
                    color:'',
                    fontSize:'',
                    fontFamily:'',
                    backgroundColor:'',
                    bold:'',
                },
                table={
                    border:'',
                    headerTable={
                        color:'',
                        fontSize:'',
                        fontFamily,
                        backgroundColor:'',
                        bold:'',
                    },
                    sumOfRow={
                        color:'',
                        fontSize:'',
                        fontFamily,
                        backgroundColor:'',
                        bold:'',
                        border:''
                    }
                }
            }
        ],
        index:0
}
const styles = {       
        
}
export default produce((state, action) => createReducer(state, action, styles), initialState);





