import {AppBar,Typography,Box, Container, Button, Drawer, Toolbar, Grid} from '@mui/material';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/ANNI-Logo1 1.png'
import {useState} from 'react'

export default function Navbar(){

    const [open, setOpen] = useState(false)
    console.log(open)

   return( 
   <AppBar className={styles.appbar}>
       {/* <Container> */}
       <Grid container>
        {/* <Toolbar > */}
               {/* <MenuIcon/> */}
               <Grid item sm={4} marginLeft={2}>
                    <Image src={Logo} className={styles.logo}  />
                </Grid>
                {/* <Button onClick={()=>setOpen(!open)}>hey</Button> */}
                <Grid item md={7} sm={7} >
                    <Toolbar>
                        <Typography className='text'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                        <Typography className='text' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                            Events
                        </Typography>
                        <Typography className='text' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                            Resources
                        </Typography>
                        <Typography className='text' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                            Meet Our People
                        </Typography>
                        <Link href="/login" button>
                            <Typography className='text' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Login
                            </Typography>
                        </Link>
                        <Button onClick={()=>setOpen(!open)}>hey</Button>
                    </Toolbar>
                </Grid>
          {/* <Typography className='text' variant="body2" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* </Toolbar> */}

          </Grid>
          {/* </Container> */}
    </AppBar>
    

    )
    
}