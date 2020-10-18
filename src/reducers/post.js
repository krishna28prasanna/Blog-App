const postReducerInitialState = []
const postReducer = (state=postReducerInitialState,action)=>{
    switch(action.type){
        case "GET_POST": {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
export default postReducer