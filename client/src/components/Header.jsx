
import { AppBar, Toolbar, Typography , makeStyles } from '@material-ui/core';

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
}
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Typography>HOME</Typography>
        <Typography>CONTACT</Typography>
        <Typography>ABOUT</Typography>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
