const userReducerInitialState = []
const userReducer = (state=userReducerInitialState , action)=>{
    switch(action.type){
        case "GET_USER" : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default userReducer