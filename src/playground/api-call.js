import React from 'react'
import axios from '../config/axios'
 
class ApiCall extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        const id=4
        axios.get(`/posts/${id}`)
    .then(response=>{
        console.log(response.data)
        const post = response.data
        // axios.get(`/users/${post.userId}`)
        //     .then(response=>{
        //         console.log(response.data)
        //     })
        //     axios.get(`/comments?postId=${id}`)
        //         .then(response=>{
        //             console.log(response.data)
        //         })
                const userApi = axios.get(`/users/${post.userId}`)
                const commentsApi = axios.get(`/comments?postId=${id}`)
                Promise.all([userApi,commentsApi])
                    .then(values=>{
                        const [user,comments] = values
                        console.log(user.data)
                        console.log(comments.data)
                    })
    })
    .catch(err=>{
        console.log(err)
    })
    }
    render(){
        return(
            <div>
                <h1>Api</h1>
            </div>
        )
    }
}
export default ApiCall

