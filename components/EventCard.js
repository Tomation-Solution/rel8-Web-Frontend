import {Grid, Button, Typography} from '@mui/material';
import styles from '../styles/Home.module.css'
import GreenButton from './Buttonn';

export default function EventCard (props){
    return(
        <Grid md={5} padding={2} margin={1}  className='rounded-corners white-bg'>
            <Typography fontWeight='bold' variant='body2'>{props.title}</Typography>
            <Grid className='light-text'>{props.body}</Grid>
            <Grid md={6} style={{float:'right'}}>
                {/* <Button  variant='contained'  size='small' className={[styles.button, 'button-lower rounded-button'] }>
                    
                </Button> */}
                <GreenButton text='Register to Attend' radius='10px'
               textColor='white' paddingY={1} paddingX={2} bg='#436937'/>
            </Grid>
        </Grid>
    )
}