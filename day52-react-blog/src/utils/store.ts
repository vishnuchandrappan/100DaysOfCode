import store from "../redux/store";

export const getToken = () => store.getState().auth.token;

export const getBlogPostId = () => store.getState().ui.blogPostId;