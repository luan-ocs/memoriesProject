import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

import {Grid, CircularProgress} from "@material-ui/core"

import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    
    return (
    posts.lenght ? <CircularProgress /> : (
    <Grid className={classes.mainContainer}>
        {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
        ))}
    </Grid>)
    )
}

export default Posts;