import { Card,Box, TextField, Button,Grid } from "@mui/material"
import { style } from "@mui/system"
import HeroSection from "../components/HeroSection"
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Logo from '../images/ANNI-Logo1 1.png'
import Image from "next/image"
import Footer from "../components/Footer"
export default function Login (){
    return(
        <Grid >
            <Navbar/>
            <HeroSection/>
            
            <center><Image src={Logo}/></center>
    
            <Grid item md={12} className={styles.card}  style={{margin:'0 auto', backgroundColor:"#FBFBFB"}} >
                <Grid>
                    
                    <TextField placeholder='Username' label='Username'  style={{width:'100%'}} size='small'/>
                </Grid>
                <br/>
                <Grid >
                    <TextField 
                    placeholder='Password'
                    label='Password'
                    size='small'
                    type='password'
                    style={{width:'100%'}}
                    />
                </Grid>
                <br/>
                <Button variant='contained' size='large' className={styles.button}>Login</Button>
            </Grid>
            <br/>
            <Footer/>
        </Grid>
    )
}