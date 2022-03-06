import {React} from "react";
import { useState, useEffect, useContext } from 'react';
import {Box,makeStyles,Typography} from '@material-ui/core';
import { Link, useLocation,useParams  } from 'react-router-dom';

import {Delete,Edit} from '@material-ui/icons';

import { getPost } from "../../service/api";

const useStyle = makeStyles((theme)=>({
    container:{
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding:'0'
        }
    },
  image:{
     width:"100%",
     objectFit:'cover',
     height:'60vh'
  },
  icons:{
      float:'right'
  },
  icon:{
      margin:'5px',
     border:'1px solid #878787 ',
     padding:'5px',
     borderRadius:'5px'
  },
  heading:{
      fontSize:'30px',
      fontWeight:'bold',
      textAlign:'center',
      margin:'40px 0 40px'
  },
  subheading:{
      color:'grey',
      display:'flex',
      [theme.breakpoints.down('md')]:{
          display:'block'
      }
  }
}))

const DetailView = ({match}) =>{
    const classes = useStyle();
    const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    const [post, setPost] = useState({});
   //  const { account, setAccount } = useContext(LoginContext);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    //    console.log(account, post.username);
    }, []);


    return (
       <Box className={classes.container}>
           <img src={post.picture || url} alt="Banner" className={classes.image} />
           <Box className={classes.icons}>
               <Link to={`/update/${post._id}`}> <Edit className={classes.icon} color='primary'/>  
               </Link> 
               <Delete className={classes.icon} color='error'/>
           </Box>
           <Typography className={classes.heading}>{post.title}</Typography>
          <Box className={classes.subheading}>
                <Typography>Author : <span style={{fontWeight:'bold'}}>{post.username}</span></Typography>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
         </Box>
         <Typography>{post.description}</Typography>
       </Box>
    )
}
export default DetailView;