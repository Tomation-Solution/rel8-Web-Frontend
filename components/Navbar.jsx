import {AppBar,Typography,Box, Container, Button, Drawer, Toolbar, Grid} from '@mui/material';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/ANNI-Logo1 1.png'
import {useState} from 'react'
import Popover from '@mui/material/Popover';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { ArrowDropDown } from '@mui/icons-material';

export default function Navbar(){

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElR, setAnchorElR] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(2)
    const open = Boolean(anchorEl);
    const openResource = Boolean(anchorElR);
    // const [openResource, setOpenResource] = useState(false);
    console.log(selectedMenu)

    // const switchMenu =()=>{

    //     setSelectedMenu(1)
    // }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // console.log(event.currentTarget)
    };

    const handleClickResource = (event) => {
        setAnchorElR(event.currentTarget);
        // console.log(event.currentTarget)
    };

    const handleCloseResource = () => {
        setAnchorElR(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


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
                        {/* <Link href='' onClick={handleClickResource} >
                            <> */}
                                <Typography id="demo-positioned-menu" onClick={handleClickResource }  className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    <Grid container>   
                                        Resources
                                    <ArrowDropDown />
                                    </Grid>
                                </Typography>
                                <Menu
                                id="basic-menu"
                                anchorEl={anchorElR}
                                open={openResource}
                                onClose={handleCloseResource}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                >
                                <MenuItem onClick={handleClose}>Articles</MenuItem>
                                <MenuItem onClick={handleClose}>Research Papers</MenuItem>
                                <MenuItem onClick={handleClose}>Constitution</MenuItem>
                                <MenuItem onClick={handleClose}>Newsletter</MenuItem>
                                {/* </> */}
                                
                            </Menu>
                                
                            {/* </>
                        </Link> */}

                        
                        
                        
                                <Typography onClick={handleClick}   className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    <Grid  container>
                                    Meet Our People
                                    <ArrowDropDown />
                                    </Grid>
                              </Typography>
                              
                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                >
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Members</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Exco</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Commitee Members</MenuItem>
                                </Link>
                                <Link href="search">
                                    <MenuItem onClick={handleClose}>Sub-Commitee Members</MenuItem>
                                </Link>
                                {/* </> */}
                                
                            </Menu>
                              
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