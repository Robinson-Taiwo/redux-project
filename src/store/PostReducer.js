import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [{ title: "News in lagos", body: "this is the full news of lagos incident", id: 1, author: "adams Eve", date: "15/4/220" },
    { title: "brand new product unlocked", body: "techHub has released a new product", id: 2, author: "adams Eve", date: "15/4/220" }]
}

const postSlice = createSlice(
    {
        name: "posts",
        initialState,
        reducers: {
            postMedia(state, action) {
                const postData = action.payload
                return { ...state, posts: state.posts.concat(postData) }
            }
        }
    }
)

export const { postMedia } = postSlice.actions
export default postSlice.reducer