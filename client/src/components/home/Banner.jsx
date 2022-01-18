import { makeStyles,Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
         background : `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
         width:'100%',
         height:'50vh',
         display:'flex',
         flexDirection:'column',
         textAlign:'center',
         alignItems:'center',
         justifyContent:'center'
        //  '& : first-child' : {
        //     fontSize:'165',
        //     color:'#FFFFFF',
        //     lineHeight: 1
        //  },
        //  '& : last-child' : {
        //     fontSize:'20',
        //     color: '#FFFFFF'
        // }
       
    },
    firstChild:{
        fontSize:'70px',
        color:'white',
        lineHeight: 1
    },
    lastChild:{
        fontSize:'20px',
        background: 'white'
    }
})
const Banner = () =>{
    const classes = useStyles();
    return(
       <Box className = {classes.image}>
            <Typography className = {classes.firstChild}>BLOG</Typography>
            <Typography className = {classes.lastChild}>BY ANKIT KUMAR</Typography>
       </Box>
    )
} 
export default Banner;