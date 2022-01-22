import {React} from "react";
import {Box,makeStyles,Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import {Delete,Edit} from '@material-ui/icons';
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

const DetailView = () =>{
    const classes = useStyle();
    const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    return (
       <Box className={classes.container}>
           <img src={url} alt="Banner" className={classes.image} />
           <Box className={classes.icons}>
               <Link to='/update'> <Edit className={classes.icon} color='primary'/>  
               </Link> 
               <Delete className={classes.icon} color='error'/>
           </Box>
           <Typography className={classes.heading}>Title of the Blog</Typography>
          <Box className={classes.subheading}>
                <Typography>Author : <span style={{fontWeight:'bold'}}>Ankit Kumar</span></Typography>
                <Typography style={{marginLeft:'auto'}}>Date:12 Jan 2022</Typography>
          </Box>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit nulla sit facere unde possimus. Facilis dolor cupiditate maiore id debitis nulla a quasi illo omnis magnam praesentium, accusantium consectetur vitae eaque dolor maxime exercitationem magni non excepturi hic enim soluta voluptas. 
              Voluptas, architecto atque soluta exercitationem incidunt asperiores dolor iste aperiam saepe, tempora sit optio iusto vel sint fugit quidem magni laboriosam ducimus sapiente hic earum? Voluptatum nemo voluptate aliquam deserunt cum et modi eligendi accusantium! Illo, maxime reprehenderit perspiciatis deserunt, soluta non nulla consequatur earum quam dolorem temporibus doloremque esse mollitia nisi veniam reiciendis omnis eum ratione quisquam voluptates debitis a quos. Sapiente nam dicta aperiam eos porro perspiciatis similique hic.</p>
       </Box>
    )
}
export default DetailView;