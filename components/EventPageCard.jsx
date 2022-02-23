import { Grid, Typography, Button } from "@mui/material";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import GreenButton from "./Buttonn";
// import NewsImage from '../images/Vectorlanding.png'

export default function EventPageCard (props){
    return(
        <Grid md={3} item marginY={2}>
            <Image src={props.image} marginTop={2} height='600px' className='rounded-corners'/>
            <Typography variant='subtitle2' className='light-text'  marginY={1}>{props.date}</Typography>
            <Typography marginBottom={2}>{props.body}</Typography>
            <Grid md={10} sm={9} style={{margin:'0 auto'}}>
                {/* <Button variant='contained'  size='small' className={[styles.button, 'button-lower rounded-button'] }>
                    More
                </Button>
                <GreenButton/> */}
                <GreenButton text={props.btnText} radius='10px'
               textColor='white' paddingY={1} paddingX={1}  bg='#436937'/>
            </Grid>
        </Grid>
    )

}