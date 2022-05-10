import { useState } from "react";
import { AddToPhotos, SendRounded } from "@mui/icons-material";
import { Grid, Typography, IconButton, TextField, InputAdornment, Icon } from "@mui/material";
import GreenButton from "../Buttonn";
import Router,{withRouter} from "next/router"
import ChatImage from '../../images/IMG-20190508-WA0001 1 (1).png'
import ChatCard from "../ChatCard";


export default function SingleChat (){
        const date = new Date();
    // console.log(text)
    const [text, setText] = useState('')
    const [user, setUser] = useState('')
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const sendMessage=()=>{
        setMessages([...messages, {
            'sender':'Funmi',
            'message' : text,
            'time': date.getHours() +':' + date.getMinutes() + ' pm',
            'date' : monthNames[date.getMonth()]+'.'  + ' ' + date.getDay() + ', '+ date.getFullYear()
        }])
        // console.log(messages)
    }
    const [messages, setMessages]=useState([
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

])
    return(
        <Grid>
            <Grid container justifyContent='space-between' py={2}>
                <Typography marginBottom={2} className='text'>Private Chatroom</Typography>
                <GreenButton text='General Chat' click={()=>Router.back} radius='10px'
                textColor='white' py={1} px={2} bg='#436937'
                />
            </Grid>

            <Grid container>
                
                <Grid item lg={3} marginRight={2} sx={{height:'75vh'}} className='rounded-corners ' py={2}>
                    <Grid className='light-grey-bg rounded-corners' px={2} marginBottom={1} py={1} >
                        <TextField 
                            variant='standard' 
                            size='small' 
                            fullWidth
                            InputProps={{disableUnderline:'true'}}
                            // style={{width:'100%'}}
                            placeholder='Search'
                            // inputProps={InputAdornment:(<Icon name='hey'/>)}
                        />
                    </Grid>
                    { [
                        {id:1 , 'time':'10:40 am', date:'Feb.2, 2022', image:ChatImage, name:'Ola James', message:'Hello, how are you'},
                        {id:2 ,'time':'10:51 am', date:'Feb.2, 2022', image:ChatImage, name:'Abubakar Yusuf', message:'How have you been'},
                        {id:3 ,'time':'09:30 pm', date:'Feb.2, 2022', image:ChatImage, name:'Chukwu Mike', message:'Are you still up for nominations?'},
                        {id:4 ,'time':'10:51 am', date:'Feb.2, 2022', image:ChatImage, name:'Justice Jane', message:'How about the exxcuive meeting'}
                    ].map((e)=><Grid onClick={()=>setUser(e)}>
                        <ChatCard bg={e.id == user.id ?'light-green-bg':'light-grey-bg'} time={e.time} date={e.date} image={e.image} name={e.name} message={e.message} />
                    </Grid>)
                    // <ChatCard time='10:43 am' date='Feb.2, 2022' image={ChatImage} name='Abubakar Yusuf' message='How have you been' />
                    // <ChatCard time='09:30 pm' date='Feb.2, 2022' image={ChatImage} name='Chukwu Mie' message='Are ou still up for nominations?' />
                    // <ChatCard time='05:30 am' date='Feb.3, 2022' image={ChatImage} name='Justice Jane' message='How about the exxcuive meeting' />
                    }
                    
                </Grid>

                <Grid item lg={8} >
                    {user ?
                    <ChatCard image={user.image} name={user.name} message='sddsdsds' header={true}/>
                    :''
                    }
                    <Grid item lg={12} sx={{height:'75vh'}} className='rounded-corners light-green-bg' py={2}>
                        { user ?
                        <Grid className='chat-bg' sx={{height:'70vh', overflow:'scroll', overflowX:'hidden'}} >
                            {messages.map((e)=>
                            (e.sender=='me' ?
                                <Grid container marginX={3} marginY={1} sx={{maxWidth:'60%', minWidth:'10%', borderRadius:'10px', float:'right'}} px={1} paddingBottom={1} className='dark-green-bg'>
                                    <Grid container >
                                        <Typography textAlign='right' variant='caption' sx={{size:'7px', width:'100%'}}  fontWeight='300' className='white-text' > {e.date + ' - ' + e.time} </Typography>
                                    </Grid>
                                    <Grid container>
                                        <Typography variant='body2' fontWeight='300' className='white-text' > {e.message} </Typography>
                                    </Grid>
                                </Grid>:
                                <Grid container marginX={3} marginY={1} sx={{maxWidth:'60%', minWidth:'10%', borderRadius:'10px'}} px={1} paddingBottom={1} className='white-bg'>
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

           
                        </Grid> : 
                        <Typography textAlign='center' >Select a user to chat with</Typography>}
                        <Grid md={6} px={1} container justifyContent='space-between'   marginTop={5} position='fixed' bottom='10px' className='rounded-corners light-grey-bg'>
                            <Grid item py={1}  >
                                <IconButton >
                                    <AddToPhotos/>
                                </IconButton>
                            </Grid>
                            <Grid item paddingTop={1}  md={10}>
                                <TextField
                                    variant='standard'
                                    fullwidth
                                    placeholder='Type Message'
                                    size='large'
                                    sx={{width:'100%', borderBottom:'none'}}
                                    onChange={()=>setText(event.target.value)}
                                    InputProps={{ disableUnderline:true }}
                                />
                            </Grid>
                            <Grid item py={1}>
                                <IconButton onClick={sendMessage}>
                                <SendRounded/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            
        </Grid>
    )
    
} 