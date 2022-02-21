import { useState } from "react"
import { Card,Box,IconButton, InputAdornment, Typography,TextField, Button,Grid } from "@mui/material"
import { style } from "@mui/system"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import HeroSection from "../components/HeroSection"
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Logo from '../images/ANNI-Logo1 1.png'
import Image from "next/image"
import Footer from "../components/Footer"
export default function Login (){

    const [showPassword, setShowPassword]= useState(true)
    return(
        <Grid >
            <Navbar/>
            <HeroSection/>
            
            <Grid className={styles.loginBg}  >
            {/* <center><Image src={Logo}/></center> */}
            <br/>
            
            <Grid item md={12} className={styles.card}  style={{margin:'0 auto'}} >
                <Typography className='text' textAlign='center' marginBottom={2} fontWeight='bolder' >USER LOGIN</Typography>
               <Typography className='text' textAlign='center' marginBottom={2} variant='subtitle1' color='InfoText'>
               Click here to login into your Dashboard </Typography>
               <br/>

                <Grid>
                    
                    <TextField placeholder='Username' label='Username'  style={{width:'100%'}} size='small'/>
                </Grid>
                <br/>
                <Grid >
                    <TextField 
                    placeholder='Password'
                    label='Password'
                    size='small'
                    type= {showPassword ? 'password' : 'text'}
                    style={{width:'100%'}}
                    InputProps={{
                        endAdornment: (
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        )
                    }}
                
                    />
                </Grid>
                <br/>
                <Button variant='contained' size='large' className={styles.button}>Login</Button>
            </Grid>
            <br/>
            </Grid>
            <Footer/>
        </Grid>
    )
}