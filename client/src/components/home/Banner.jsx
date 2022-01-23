import { Box, Typography, makeStyles } from '@material-ui/core';

// const uurl = 'https://www.benq.com/2c/en-us/campaigns/screenbar-desksetup/10.jpg';

const useStyles = makeStyles({
    image: {
        background: `url(${'https://www.benq.com/2c/en-us/campaigns/screenbar-desksetup/10.jpg'}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        '& :first-child' : {
            fontSize: 66,
            color: '#FFFFFF',
            lineHieght: 1
        }, 
        '& :last-child' : {
            fontSize: 20,
            background: '#FFFFFF'
        }

    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Explore the world!</Typography>
        </Box>
    )
}

export default Banner;