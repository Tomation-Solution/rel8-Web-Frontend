import styles from '../styles/Home.module.css'
import Divider from '@mui/material/Divider';
import {AppBar,Typography,Box, Container, Toolbar, Grid} from '@mui/material';
import {TwitterIcon, Twitter, LinkedIn, Facebook, Instagram, YouTube} from '@mui/icons-material'
import Link from 'next/link'

// imoprt

export default function Footer (){
    return(
//     <footer className={styles.footer}>
//     <a
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//         {/* <Divider /> */}
//       Powered by{' '}
//       <span className={styles.logo}>
//         {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
//       </span>
//     </a>
//   </footer>

// Home
// Events
// Chats
// Resources
// Make Payment
<footer>
      <Grid sx={{ backgroundColor: "#EFEFEF", padding:'20px'}}>
        <Toolbar variant="dense">
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid item lg={3} xs={12} sm={4} sx={{ textAlign: "left" }}  >
                <Typography variant='body1' fontWeight='bolder'  className='text' marginBottom={1}>
                    QuickLink
                </Typography>
                <Typography variant='body2' marginBottom={2} className='text'>
                Home
                </Typography>
                <Typography variant='body2' marginBottom={2} component="div" className='text'>
                Events
                </Typography>
                <Typography variant='body2' marginBottom={2} component="div" className='text'>
                Members
                </Typography>
                <Typography variant='body2' marginBottom={2} className='text'>
                Chats
                </Typography>
                <Typography variant='body2' marginBottom={2} className='text'>
                    Resources
                </Typography>
                <Typography variant='body2' marginBottom={2} className='text'>
                    Payments
                </Typography>

               
              {/* <Typography sx={{ color: "white" }}>
                {new Date().getFullYear()}&copy; All rights reserved.
              </Typography> */}
            </Grid>
            <Grid item sm={3} xs={12} style={{ textAlign: "left" }}>
                <Typography variant='body1' fontWeight='bolder'  className='text' marginBottom={1}>
                        Social Media
                </Typography>
              <Link
                href="https://www.twitter.com"
                underline="always"
                
                // sx={{ color: "white" }}
              >
                <Typography className='text' justifyContent='center'  variant='body2' marginBottom={2}> <Twitter/> Twitter</Typography>
              </Link>
              <Link href="https://www.linkedin.com" underline="always">
                {/* <LinkedIn /> */}
                <Typography className='text' variant='body2' marginBottom={2}><LinkedIn marginTop={2}/>Linkedin</Typography>
              </Link>
              <Link href="https://www.facebook.com" underline="always">
                <Typography className='text' variant='body2' marginBottom={2}><Facebook/>Facebook</Typography>
              </Link>
              <Link href="https://www.youtube.com" underline="always">
                <Typography className='text' variant='body2' marginBottom={2}> <YouTube/> Youtube</Typography>
              </Link>
              <Link href="https://www.instagram.com" underline="always" >
                <Typography className='text' variant='body2' marginBottom={2} justify='center'><Instagram/> Instagram</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3} style={{ textAlign: "left" }}>

                <Typography variant='body1' fontWeight='bolder' className='text' marginBottom={1}>
                    Contact Details
                </Typography>
                <Typography variant='body2' className='text'>
                AANI National Secretariat 
                AANI House,<br/>  Plot 417, Tigris Crecent, <br/>
                Opposite FCT High Court, Maitama, Abuja, 
                Nigeria
                </Typography>
              
                </Grid>

                <Grid item xs={12} sm={3} style={{ textAlign: "left" }}>

                
                <Typography variant='body2' fontWeight='bold' className='text' >
                    Email
                </Typography>
                <Typography className='text' variant='body2'>
                aanimni@gmail.com <br/>
                aanimni@aol.com,
                </Typography>
                <Typography variant='body2' fontWeight='bold' className='text' marginBottom={1}>
                    Phone
                </Typography>
                <Typography variant='body2' s className='text'>
                08023884843, 08023884843
                </Typography>
                </Grid>
          </Grid>
          
        </Toolbar>
      </Grid>
      {/* <Toolbar /> */}
    </footer>
  )
}