import axios from '../config/axios'
export const getPost = (data)=>{
    return{
        type : "GET_POST",
        payload : data
    }
}

export const startGetPosts = ()=>{
    return (dispatch)=>{
        axios.get('/posts')
            .then(response=>{
                const data = response.data
                dispatch(getPost(data))
            })
    }
}