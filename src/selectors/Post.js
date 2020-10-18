export const findPost = (posts,id)=>{
    return posts.filter(post=>post.userId == id)
}