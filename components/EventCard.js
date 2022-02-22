import {Grid, Button, Typography} from '@mui/material';
import styles from '../styles/Home.module.css'

export default function EventCard (props){
    return(
        <Grid md={5} padding={2} margin={1}  className='rounded-corners white-bg'>
            <Typography fontWeight='bold' variant='body2'>{props.title}</Typography>
            <Grid className='light-text'>{props.body}</Grid>
            <Grid md={6} style={{float:'right'}}>
                <Button  variant='contained'  size='small' className={[styles.button, 'button-lower rounded-button'] }>
                    Register to Attend
                </Button>
            </Grid>
        </Grid>
    )
}