import {React, useState, useEffect, useContext } from 'react';
import {Box,Button ,makeStyles,FormControl, InputBase,TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons'; 
import { createPost } from '../../service/api';
import { useNavigate, Link,useLocation } from 'react-router-dom';


import { AddCircle as Add, CallEnd } from '@material-ui/icons';


import { uploadFile } from '../../service/api';
//import { LoginContext } from '../../context/ContextProvider';

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
  form:{
      display:'flex',
      flexDirection: 'row',
      marginTop:'10px'
  },
  textfield:{
      flex:'1',
      margin:'0 30px',
      fontSize:'30px',
      outline:'none'
  },
  textarea:{
      width:'100%',
      marginTop:'10px',
      border:'none',
      '&:focus-visible':{
          outline:'none'
      }
  }  
}));

const initialValues = {
    title:'blog',
    description:'simple blogs',
    picture:'',
    username:'codeForSelf',
    categories:'All',
    createDate: new Date()
}


const CreateView = ()=> {
    const classes=useStyle();
    const url ='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history=useNavigate();
    const [post,setPost] = useState(initialValues);

    const savePost = async () => {
         await createPost(post);
        // history.push('/');
        history('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }



    return( 
       <>
      
        <Box className={classes.container}>
           <img src={url} alt="banner" className={classes.image}/>
           <FormControl className={classes.form}>
               <AddCircle fontSize='large' color='action' />
               <InputBase onChange={(e) => handleChange(e)} name='title' placeholder="Title" className={classes.textfield} />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
               
            
            
           </FormControl>

           <TextareaAutosize
           minRows={5}
           placeholder='Tell me your story...'
           className={classes.textarea}
           onChange={ (e)=> handleChange(e) } 
           name='description'
           />
       </Box>
       </>
     
      
    )
     
}
export default CreateView;