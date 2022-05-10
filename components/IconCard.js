import {Grid, Button, Typography, Avatar} from '@mui/material';
import styles from '../styles/Home.module.css'
import GreenButton from './Buttonn';

export default function IconCard (props){
    return(
        <Grid md={4} >
            <Grid md={11} marginY={1} padding={2}  className='rounded-corners white-bg'>
                <Grid container my={2} justifyContent={'center'}>
                    <Avatar sx={{bgcolor:props.bg, color:props.color}}>
                        {props.icon}
                    </Avatar>
                </Grid>
                <Typography fontWeight='bold' my={1} textAlign='center' color='#7F02A2' variant='body2'>{props.title}</Typography>
                <Grid className='light-text' textAlign='center'>{props.body}</Grid>
                <Grid md={9} style={{float:'right'}}>
                    {/* <Button  variant='contained'  size='small' className={[styles.button, 'button-lower rounded-button'] }>
                        
                    </Button> */}
                    
                </Grid>
            </Grid>
        </Grid>
    )
}