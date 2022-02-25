import { AddToPhotos, SendRounded } from "@mui/icons-material"
import { Typography, Grid, TextField, IconButton } from "@mui/material"
import { useState } from "react"


export default function Chat (){
    const date = new Date();
    console.log(text)
    const [text, setText] = useState('')
    const sendMessage=()=>{
        messages.push({
            'sender':'me',
            'message' : text,
            'time': date.getHours() +' ' + date.getMinutes(),
            'date' : date.getMonth() + ' ' + date.getDay() + ', '+ date.getFullYear()
        })
        console.log(messages)
    }
    const messages=[
        {
        'sender':'me',
        'message': 'Whats up man',
        'time' : '10:00 am',
        'date' : 'Feb. 2, 2020'
         },
         {
            'sender':'me',
            'message': 'Hope you are doing good?',
            'time' : '10:00 am',
            'date' : 'Feb. 2, 2020'
             },
             {
                'sender':'Shola James',
                'message': 'Am good',
                'time' : '10:18 am',
                'date' : 'Feb. 2, 2020'
                 },

]
    return(
        <Grid>
            <Typography className='text'>General Chatroom</Typography>
            <Grid  sx={{height:'79vh'}} className='rounded-corners light-green-bg'>
            
                {messages.map((e)=>
                (e.sender=='me' ?
                    <Grid container marginX={3} marginY={1} sx={{maxWidth:'60%', minWidth:'10%', borderRadius:'10px', float:'right'}} paddingX={1} paddingBottom={1} className='dark-green-bg'>
                        <Grid container >
                            <Typography textAlign='right' variant='caption' sx={{size:'7px', width:'100%'}}  fontWeight='300' className='white-text' > {e.date + ' - ' + e.time} </Typography>
                        </Grid>
                        <Grid container>
                            <Typography variant='body2' fontWeight='300' className='white-text' > {e.message} </Typography>
                        </Grid>
                    </Grid>:
                    <Grid container marginX={3} marginY={1} sx={{maxWidth:'60%', minWidth:'10%', borderRadius:'10px'}} paddingX={1} paddingBottom={1} className='white-bg'>
                        <Grid container justifyContent='space-between'>
                            <Grid item>
                                <Typography textAlign='right' variant='caption' sx={{size:'7px', width:'100%'}}  fontWeight='300' className='light-text' > {e.sender} </Typography>
                            </Grid>
                            <Grid item>
                                <Typography textAlign='right' variant='caption' sx={{size:'7px', width:'100%'}}  fontWeight='300' className='text' > {e.date + ' - ' + e.time} </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Typography variant='body2' fontWeight='300' className='text' > {e.message} </Typography>
                        </Grid>
                    </Grid>)
                )}
            </Grid>
            <Grid md={10} container justifyContent='space-around'  marginTop={5} position='fixed' bottom='10px' className='rounded-corners light-grey-bg'>
                <Grid item paddingY={1}  >
                    <IconButton >
                        <AddToPhotos/>
                    </IconButton>
                </Grid>
                <Grid item  md={10}>
                    <TextField
                        variant='filled'
                        size='small'
                        sx={{width:'100%'}}
                        onChange={()=>setText(event.target.value)}
                    />
                </Grid>
                <Grid item paddingY={1}>
                    <IconButton onClick={sendMessage}>
                    <SendRounded/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}