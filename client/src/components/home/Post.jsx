import { Grid, Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        height: 350,
        width:'95%',
        margin: '5px',
        marginLeft:'20px',
        border: '1px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 150,
        width: '95%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = () => {

    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzayUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';

    return (
        <>
            <Box className = {classes.container}>
                <img className = {classes.image} src = {url} alt = 'postimage' />
                <Typography className = {classes.textColor}>DSA</Typography>
                <Typography className = {classes.heading}>Binary Tree</Typography>
                <Typography className = {classes.textColor}>Auther: Ankit Kumar</Typography>
                <Typography className = {classes.detail}>check if the binary tree is balanced or not</Typography>
            </Box>
        </> 
    )
}

export default Post;