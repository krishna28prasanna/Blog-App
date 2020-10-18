import axios from "../config/axios";
export const resetPostData = () => {
  return {
    type: "RESET_POST_DATA",
  };
};
export const setPostData = (data) => {
  return {
    type: "SET_POST_DATA",
    payload: data,
  };
};
export const startGetPostData = (id) => {
  console.log("my id - ", id);
  return (dispatch) => {
    axios
      .get(`/posts/${id}`)
      .then((responce) => {
        const post = responce.data;
        console.log("post - ", responce.data);
        const userApi = axios.get(`/users/${post.userId}`);
        const commentsApi = axios.get(`/comments?postId=${id}`);
        Promise.all([userApi, commentsApi]).then((values) => {
          const [user, comments] = values;
          console.log(user.data);
          console.log(comments.data);
          const userData = user.data;
          const commentsData = comments.data;
          dispatch(setPostData({ post, userData, commentsData }));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
