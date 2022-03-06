import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link, useLocation,useParams  } from 'react-router-dom';
import Post from './Post';

import { getPost,getAllPosts } from '../../service/api';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async () => { 
            let data = await getAllPosts(search); // params in url
            getPosts(data);
        }
        fetchData();
    }, [search]);

    return (
        posts.map(post => (
            <Grid item lg = {4} sm = {4} xs = {12}>
                <Link to = {`/details/${post._id}`} style = {{textDecoration: 'none', color: 'inherit'}}>
                 <Post post={post}/>
                </Link>
            </Grid>
        ))
    )
}

export default Posts;