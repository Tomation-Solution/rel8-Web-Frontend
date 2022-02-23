import { Typography, Grid } from "@mui/material";

export default function GreenButton(props){
    return (
        <Grid md={props.md} justify='center' alignContent='center' sm={props.sm} style={{backgroundColor:props.bg, borderRadius:props.radius}} paddingX={props.paddingX} paddingY={props.paddingY}>
            <Typography className='text' fontWeight={300} variant='subtitle2' style={{color:props.textColor}} textAlign='center' >
                {props.text}
            </Typography>
        </Grid>
    )
}