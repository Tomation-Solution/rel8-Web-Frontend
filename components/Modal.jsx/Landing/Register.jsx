import { useState } from "react";
import { ArrowDropDown, Close } from "@mui/icons-material";
import { Grid, TextField, Menu, MenuItem, Typography, Checkbox } from "@mui/material";
import rIcon from '../../../images/ricon.png'
import HeadText from "../../Dashboard/DashboardHead";
import GreenButton from "../../Buttonn";
import Image from "next/image";


export default function Register(props){
    

    return (
        <Grid container >
            <Grid container pb={2} justifyContent={'space-between'}>
                <Grid></Grid>
                <Grid container  height={50} width={50} style={{overflow:'hidden', mx:'0 auto'}}>
                    <Image objectFit="contain" src={rIcon}/>
                </Grid>

                <Grid item sx={{float:'right'}}>
                    <Close onClick={()=>props.handleClose()} textAlign='center'/>
                </Grid>
            </Grid>
            <Grid container>
                
            <HeadText text='Register'/>
            </Grid>

            <Typography className='light-text' pt={2} fontSize={'small'}>FULL NAME</Typography>
            <TextField
                variant='standard'
                label="Fullname"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />
            
            <Typography className='light-text' pt={2} fontSize={'small'}>EMAIL ADDRESS</Typography>
            <TextField
                variant='standard'
                label="Email Address"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            <Typography className='light-text' pt={2} fontSize={'small'}>PHONE</Typography>
            <TextField
                variant='standard'
                label="Phone"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />
            

            <Typography className='light-text' pt={2} fontSize={'small'}>USERNAME</Typography>
            <TextField
                variant='standard'
                label="Username"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            <Typography className='light-text' pt={2} fontSize={'small'}>PASSWORD</Typography>
            <TextField
                variant='standard'
                type='text'
                label="Password"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            

            
            <Grid md={12} mt={1} container justifyContent='stretch'>
                <GreenButton text='Register' textColor='#fff' py={1} radius={3} bg='#7F02A2' paddingX={'42%'} />
            </Grid>
            {/* <Typography className='light-text' pt={1} variant='caption?' fontSize={'small'}>Forgot Password</Typography> */}
            <Grid container justifyContent={'center'}>
                <Typography className='light-text' pt={1} variant='caption?' fontSize={'small'}>Already have an account? </Typography>
                <Typography className='text' pt={1} color='#7F02A2' pl={1} variant='caption?' fontSize={'small'}>Login</Typography> 
            </Grid>

        </Grid>
    )
}