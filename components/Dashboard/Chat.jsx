import { AddToPhotos } from "@mui/icons-material"
import { Typography, Grid, TextField, IconButton } from "@mui/material"


export default function Chat (){

    const messages=[{
        'sender':'me',
        'message': 'Whats up man',
        'time' : '10:00 am',
        'date' : 'Feb. 2, 2020'
    }]
    return(
        <Grid>
            <Typography className='text'>General Chatroom</Typography>
            <Grid sx={{height:'80vh'}} className='rounded-corners light-green-bg'>
            
                {messages.map((e)=>
                (e.sender=='me' ?
                    <Grid justifySelf='flex-end' sx={{maxWidth:'60%', minWidth:'10%', borderRadius:'5px'}} padding={1} className='dark-green-bg'>
                        <Typography className='white-text' > me </Typography>
                    </Grid>:'')
                )}
            </Grid>
            <Grid md={10} container marginRight={5} marginTop={2} position='fixed' bottom='10px' className='rounded-corners light-grey-bg'>
                <Grid item paddingY={1}  >
                    <IconButton >
                        <AddToPhotos/>
                    </IconButton>
                </Grid>
                <Grid item md={10}>
                    <TextField
                        variant='filled'
                        size='small'
                        sx={{width:'80%'}}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}