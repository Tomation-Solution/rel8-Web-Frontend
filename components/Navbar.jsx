import {AppBar,Typography,Box, Container, Button, Drawer, Toolbar, Grid} from '@mui/material';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/ANNI-Logo1 1.png'
import {useState} from 'react'
import Popover from '@mui/material/Popover';
// import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function Navbar(){

    const [open, setOpen] = useState(false)
    console.log(open)

   return( 
   <AppBar className={styles.appbar}  style={{backgroundColor:'#fff'}}>
       {/* <Container> */}
       <Grid container sx={{width:'100%'}}  justifyContent='space-between'>
        {/* <Toolbar > */}
               {/* <MenuIcon/> */}
               <Grid item sm={4} marginLeft={2} maxHeight={12}>
                    <Image src={Logo} height='70px' className={styles.logo}  />
                </Grid>
                {/* <Button onClick={()=>setOpen(!open)}>hey</Button> */}
                <Grid item md={7} sm={7} >
                    <Toolbar  >
                        <Link href="/">
                            <Typography className='text nav-link'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                    
                        <Link href='/jlj'>
                                <Typography className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Events
                                </Typography>
                        </Link>
                        <Link href='/lshhf' >
                                <Typography className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Resources
                                </Typography>
                        </Link>

                        <Link href="/">
                        <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                                // <div>
                                <Typography {...bindTrigger(popupState)} paddingBottom={2} className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Meet Our People
                                
                                <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center',
                                }}
                              >
                                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                              </Popover>
                              </Typography>
                              
                        )}
                        </PopupState>
                        </Link> 
                        <Link href="/login"  component="button">
                            <div className='nav-link'>
                                <Typography className='text' variant="body2"  sx={{ flexGrow: 1 }}>
                                Login
                                </Typography>
                            </div>
                        </Link>
                        
                        {/* <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="text" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </div>
      )}
    </PopupState> */}
                        {/* <Button onClick={()=>setOpen(!open)}>hey</Button> */}
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