import styles from '../styles/Home.module.css'
import Divider from '@mui/material/Divider';
import {AppBar,Typography,Box, Container, Toolbar, Grid} from '@mui/material';
import {TwitterIcon, Twitter, LinkedIn, Facebook, Instagram, YouTube} from '@mui/icons-material'
import Link from 'next/link'

// imoprt

export default function Footer (){
    return(

<footer>
      <Grid sx={{ backgroundColor: "#7F02A2", color:'#fff'}} py={7} px={1}>
        <Toolbar variant="dense">
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} >
            <Grid item lg={2} xs={12} sm={4} sx={{ textAlign: "left" }}  >
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body1' fontWeight='bolder'  className='white-text' marginBottom={1}>
                    QuickLink
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  variant='body2' marginBottom={2} className='white-text'>
                Home
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' marginBottom={2} component="div" className='white-text'>
                Events
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' marginBottom={2} component="div" className='white-text'>
                Members
                </Typography>
               
            </Grid>
            <Grid item lg={2} xs={12} sm={4} sx={{ textAlign: "left" }}  >
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body1' fontWeight='bolder'  className='white-text' marginBottom={1}>
                    QuickLink
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' marginBottom={2} className='white-text'>
                Chats
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' marginBottom={2} className='white-text'>
                    Resources
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' marginBottom={2} className='white-text'>
                    Payments
                </Typography>
            </Grid>
{/* Social media group 1 */}

            <Grid item sm={2} textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  xs={12} >
                <Typography variant='body1' fontWeight='bolder'  className='white-text' marginBottom={1}>
                        Social Media
                </Typography>

              <Link href="https://www.twitter.com" underline="always">
                <Grid container className='nav-link'>
                  <Twitter/> 
                  <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  className='white-text'   variant='body2' marginBottom={2}> 
                    Twitter
                  </Typography>
                </Grid>
              </Link>


              <Link  href="https://www.linkedin.com" underline="always">
                <Grid container  className='nav-link' >
                  <LinkedIn marginTop={2} />
                  <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='white-text ' variant='body2' marginBottom={2}>
                    Linkedin</Typography>
                </Grid>
              </Link>

              <Link href="https://www.facebook.com" underline="always">
                <Grid container className='nav-link'>
                  <Facebook marginTop={2}/>
                  <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='white-text' variant='body2' marginBottom={2}>
                    Facebook
                  </Typography>
                </Grid>
              </Link>
            </Grid>

          {/* //Social Media Group 2 */}

            <Grid item sm={2} xs={12} style={{ textAlign: "left" }}>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}}  variant='body1' fontWeight='bolder'  className='white-text' marginBottom={1}>
                        Social Media
                </Typography>

              <Grid container className='nav-link'>
                <Link href="https://www.youtube.com" underline="always">
                  <>
                    <YouTube/>
                    <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='white-text ' variant='body2' marginBottom={2}> 
                    Youtube</Typography>
                   </>
                </Link>
              </Grid>

              <Grid container className='nav-link'>
                <Link href="https://www.instagram.com" underline="always" >
                  <>
                    <Instagram/> 
                    <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='white-text nav-link' variant='body2' marginBottom={2} justify='center'>
                      Instagram
                    </Typography>
                  </>
                </Link>
              </Grid>

            </Grid>


            <Grid item xs={12} sm={2} style={{ textAlign: "left" }}>

                <Typography variant='body1' textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} fontWeight='bolder' className='white-text' marginBottom={1}>
                    Contact Details
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' className='white-text'>
                AANI National Secretariat 
                AANI House,<br/>  Plot 417, Tigris Crecent, <br/>
                Opposite FCT High Court, Maitama, Abuja, 
                Nigeria
                </Typography>
              
                </Grid>

                <Grid item xs={12} sm={2} style={{ textAlign: "left" }}>

                
                <Typography variant='body2' textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} fontWeight='bold' className='white-text' >
                    Email
                </Typography>
                <Typography className='white-text' textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2'>
                aanimni@gmail.com <br/>
                aanimni@aol.com,
                </Typography>
                <Typography variant='body2' textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} fontWeight='bold' className='white-text' marginBottom={1}>
                    Phone
                </Typography>
                <Typography textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} variant='body2' s className='white-text'>
                08023884843, 08023884843
                </Typography>
                </Grid>
          </Grid>
         
        </Toolbar>
        <Grid justifyContent='space-around' container>
          <Typography  textAlign={{xs:'center', sm:'left',lg:'left', md:'left'}} className='white-text' sx={{ color: "black" }}>
                &copy; {new Date().getFullYear()} All rights reserved.
              </Typography>
          </Grid>
      </Grid>
      {/* <Toolbar /> */}
    </footer>
  )
}