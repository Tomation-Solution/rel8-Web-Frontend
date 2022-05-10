
import { Grid, Typography } from "@mui/material";
import GreenButton from "../../Buttonn";


export default function DeleteMembers(props){
    
    return (
        <Grid container >
            {/* <HeadText text='Confirm Delete'/> */}
            <Typography fontWeight='bolder' variant='h6' pb={2} sx={{margin:'0 auto'}} className='text'>Confirm Delete</Typography>
            <Typography py={2} variant='body2' textAlign='center' className='text'>
                Confirm you wish to Delete
                user from the database
            </Typography>
            

            <Grid md={12} mt={1} container justifyContent='space-around'>
                <GreenButton text='Save' textColor='#fff' py={1} radius={3} bg='#203719' px={7} />
                <GreenButton text='Cancel' textColor='#203719' py={1} radius={3} bg='#E1F1DC' px={7} click={()=>props.handleClose()} />
            </Grid>
        </Grid>
    )
}