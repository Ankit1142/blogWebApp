import { Grid } from "@material-ui/core";
import {Link} from "react-router-dom" ;
import Post from "./Post";

const Posts =()=>{
    
       let posts = [1,2,3,4,5,6,7,8,9,10];
       return (
       posts.map(post=>(
           <Grid item lg={4} xs={12} sm={4}   >
               <Link to= {'details'} style={ { textDecoration: 'none', color:'inherit'} }>
               <Post/>
               </Link>
           
           </Grid>
       ))
    )
}
export default Posts;