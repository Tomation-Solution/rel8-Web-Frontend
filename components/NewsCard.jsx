import { Grid, Typography, Button } from "@mui/material";
import styles from '../styles/Home.module.css';
import Image from "next/image";
// import NewsImage from '../images/Vectorlanding.png'

export default function Newscard (props){
    return(
        <Grid md={5} item >
            <Image src={props.image} marginTop={2} height='600px' className='rounded-corners'/>
            <Typography fontWeight='bold' marginY={1}>{props.title}</Typography>
            <Typography marginBottom={2}>{props.body}</Typography>
            <Grid md={10} style={{margin:'0 auto'}}>
                <Button variant='contained'  size='small' className={[styles.button, 'button-lower rounded-button'] }>
                    More
                </Button>
            </Grid>
        </Grid>
    )

}