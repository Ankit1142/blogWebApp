import { Box , Typography,makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container :
  {
      height :'350px',
      margin : '10px',
      border : '1px solid black',
      borderRadius : '5px',
      display: 'flex',
      alignItems : 'center',
      flexDirection:'column',
      '& = *' : {
        padding : '5px 5px 5px 5px'
      }
  },
  image :
  {
    height :'150px',
    width:'100%',
    objectFit:'cover',
    borderRadius:'10px 10px 0 0'
  },
  text:
  {
    color:'#878787',
    fontSize:'12'
  },
  detail:
  {
    fontSize:'14',
    wordBreak:'break-word',
    margin : '5px 5px 5px 5px'
    
  }
})

const Post = () =>{
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    
    return(
        <Box className={classes.container}>
            <img src={url}  alt="wrapper" className={classes.image}/>
            <Typography className={classes.text}> Music</Typography>
            <Typography className={classes.text}>AUTHOR: ANKIT KUMAR</Typography>
            <Typography> FROM PUNJAB </Typography>
            <Typography className={classes.detail}>ha deewane ho gye hai pyar me kyu ki itna pyar tumko karte hai ham bahut pyar karte hai tumko sanam </Typography>
        </Box>
    )
}

export default Post;