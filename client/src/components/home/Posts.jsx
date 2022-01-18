import { Grid } from "@material-ui/core";

import Post from "./Post";

const Posts =()=>{
    
       let posts = [1,2,3,4,5,6,7,8,9,10];
       return (
       posts.map(post=>(
           <Grid item lg={3} xs={12} sm={3} >
            <Post/>
           </Grid>
       ))
    )
}
export default Posts;