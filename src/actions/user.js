import axios from '../config/axios'
export const getUser = (data)=>{
    return{
        type : "GET_USER",
        payload : data
    }
}

export const startGetUser = ()=>{
    return (dispatch)=>{
        axios.get('/users')
            .then(response =>{
                const data = response.data
                dispatch(getUser(data))
            })
            .catch(err=>{
                console.log(err)
            })
    }
}