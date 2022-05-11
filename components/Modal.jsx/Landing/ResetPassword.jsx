import { useState } from "react";
import { ArrowDropDown, Close } from "@mui/icons-material";
import { Grid, TextField, Menu, MenuItem, Typography, Checkbox } from "@mui/material";
import rIcon from '../../../images/ricon.png'
import HeadText from "../../Dashboard/DashboardHead";
import GreenButton from "../../Buttonn";
import Image from "next/image";


export default function ResetPassword(props){
    

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
                
            <HeadText text='Set New Password'/>
            Input new password to recover account
            </Grid>

            <Typography className='light-text' pt={2} fontSize={'small'}>PASSWORD</Typography>
            <TextField
                variant='standard'
                label="Username"
                type='password'
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            <Typography className='light-text' pt={2} fontSize={'small'}>CONFIRM PASSWORD</Typography>
            <TextField
                variant='standard'
                type='password'
                label="Confirm Password"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            

            {/* <Grid  py={1} mb={2} container sx={{borderRadius:1}} className='light-grey-bg'>
            <Typography textAlign='center' id="demo-positioned-menu" onClick={handleClick }  className='light-text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Grid container px={1} alignItems='center' justifyContent='space-between' >Select Type<ArrowDropDown />
                </Grid>
            </Typography>
            <Menu id="basic-menu" sx={{width:'100%'}} anchorEl={anchorEl} open={open} onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button',}}>
                <MenuItem onClick={handleClose}>Paid</MenuItem>
                <MenuItem onClick={handleClose}>Free</MenuItem>
               
            </Menu>
            </Grid> */}
           


            {/* <TextField
                variant='standard'
                label="Course of Study"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            /> */}
            <Grid md={12} mt={1} container justifyContent='stretch'>
                <GreenButton text='Login' textColor='#fff' py={1} radius={3} bg='#7F02A2' paddingX={'45%'} />
            </Grid>
            <Typography onClick={()=>props.openPassword(true)} className='light-text nav-link' pt={1} variant='caption?' fontSize={'small'}>Forgot Password</Typography>
            <Grid container justifyContent={'center'}>
                <Typography className='light-text' pt={1} variant='caption?' fontSize={'small'}>Don’t have an account? </Typography>
                <Typography className='text' pt={1} color='#7F02A2' pl={1} variant='caption?' fontSize={'small'}>Register</Typography> 
            </Grid>

        </Grid>
    )
}