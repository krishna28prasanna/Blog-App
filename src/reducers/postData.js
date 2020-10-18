const postDataInitialState = {}
const postDataReducer = (state=postDataInitialState,action)=>{
    switch(action.type){
        case "SET_POST_DATA":{
            return {...action.payload}
        }
        case "RESET_POST_DATA" : {
            return {...postDataInitialState}
        }
        default : {
            return {...state}
        }
    }
}
export default postDataReducer