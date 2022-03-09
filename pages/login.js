import { useState } from "react"
import { Card,Box,IconButton, InputAdornment, Typography,TextField, Button,Grid, Checkbox } from "@mui/material"
import { style } from "@mui/system"
import { Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material"
import HeroSection from "../components/HeroSection"
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Logo from '../images/ANNI-Logo1 1.png'
import Image from "next/image"
import Footer from "../components/Footer"
import GreenButton from "../components/Buttonn"
export default function Login (){

    const [showPassword, setShowPassword]= useState(true)
    return(
        <Grid >
            <Navbar/>
            <HeroSection/>
            
            <Grid className={styles.loginBg}   >
            {/* <center><Image src={Logo}/></center> */}
            <br/>
            
            <Grid item md={12} className={styles.card} md={5} sm={10}  style={{margin:'0 auto'}} >
                <Typography className='text' textAlign='center' marginBottom={2} fontWeight='bolder' >USER LOGIN</Typography>
               <Typography className='text' fontWeight='normal' textAlign='center' marginBottom={2} variant='subtitle2' color='InactiveCaption'>
               Click here to login into your Dashboard </Typography>
               <br/>

                <Grid>
                    
                    <TextField 
                    placeholder=' Username' 
                    // label='Username'  
                    style={{width:'100%'}} size='small'
                    InputProps={{
                    
                        startAdornment:(
                            <Person color='disabled'  fontSize='13'/>
                        )
                    }}
                    />
                </Grid>
                {/* <br/> */}
                <Grid container marginY={2}>
                    <TextField 
                    placeholder=' Password'
                    // label='Password'
                    size='small'
                    type= {showPassword ? 'password' : 'text'}
                    style={{width:'100%'}}
                    InputLabelProps={{ shrink: true,  }}
                    InputProps={{
                        endAdornment: (
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                        startAdornment: (
                             <Lock color='disabled' marginRight={6} fontSize='13' /> 
                              )
                        
                        
                    }}
                
                    />
                </Grid>
                <br/>
                <Grid container alignItems='center' justifyContent='space-between' paddingY={1}>
                    <Grid item><Typography className='text' variant='subtitle2' fontWeight='normal' color='grey'>Forgot Password?</Typography></Grid>
                    <Grid item >
                        <Typography className='text' variant='subtitle2' fontWeight='normal' color='grey'>
                        <Checkbox/>Remember me</Typography>
                    </Grid>
                </Grid>
                <GreenButton text='Login' radius='10px'
               textColor='white' paddingY={1} paddingX={2} bg='#436937'/>
                {/* <GreenButton text='Login' /> */}
                {/* <Button variant='contained' size='large' className={styles.button}>Login</Button> */}
            </Grid>
            <br/>
            </Grid>
            <Footer/>
        </Grid>
    )
}