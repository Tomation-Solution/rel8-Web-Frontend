import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import picture from '../images/IMG-20190508-WA0001 1 (1).png'

export default function WelcomeAddress(){
    return(<Grid container md={11} marginTop={3} justifyContent='center' alignItems='center' >
        <Grid item md={3}>
            <Image src={picture}/>
        </Grid>
        <Grid item md={8} sm={11} xs={11}  justifyItems="center" >
            <Typography variant='h6' className='text' fontWeight='bolder'> Chairman’s Opening Remark</Typography>
            <Typography textOverflow> Alumni Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la Alumni Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Join the Lagos Alumni Lorem ibore et dolore magna Join the Lagos Alumni Lorem i
</Typography>
        </Grid>
    </Grid>)
}