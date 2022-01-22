
import { AppBar, Toolbar, Typography , makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
component: {
  background: 'skyblue',
  color:'black'
},
container : {
  justifyContent:'center',
  '& > *' :{
    padding:20
  }
},
Link:{
  // textDecoration:'none',
  color:'inherit'
}
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link> className={classes.Link} to = '/' <Typography>HOME</Typography> </Link>
        
        <Typography>CONTACT</Typography>
        <Typography>ABOUT</Typography>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
