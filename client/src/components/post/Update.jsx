import {Box,makeStyles,FormControl, InputBase,TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
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
}))

const UpdateView = ()=> {
    const classes=useStyle();
    const url ='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return( 
       <Box className={classes.container}>
           <img src={url} alt="banner" className={classes.image}/>
           <FormControl className={classes.form}>
               <AddCircle fontSize='large' color='action' />
               <InputBase placeholder='Title' className={classes.textfield} />
               <button type="button" className="btn btn-outline-success">Update</button>
           </FormControl>

           <TextareaAutosize
           rowsMin={5}
           placeholder='Tell your story'
           className={classes.textarea}
           />
       </Box>
    )
     
}
export default UpdateView;