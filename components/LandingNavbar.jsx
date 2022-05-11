import {AppBar,Typography,Box, Container, Button, Drawer, Toolbar, Grid, IconButton} from '@mui/material';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/ANNI-Logo1 1.png'
import {useState, useEffect} from 'react'
import BasicModal from '../components/Modals'
import { ArrowDropDown, MenuRounded } from '@mui/icons-material';
import { useTheme, makeStyles } from '@mui/styles';
import Login from './Modal.jsx/Landing/Login';
import Register from './Modal.jsx/Landing/Register';
import ForgotPassword from './Modal.jsx/Landing/forgotPassword';


const useStyles = makeStyles({
    root: {
      background: 'rgba(255, 255, 255, 0.8)',
      boxShadow:'none',
      paddingX:2
    },
   
  });

export default function LandingNavbar(){

    const [openTop, setOpenTop]= useState(false)
    const [width, setWidth] = useState(768);
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)

    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleLogin =()=>{
        setLogin(false)
    }

    const handleRegister =()=>{
        setRegister(false)
    }
    const handlePassword =()=>{
        setForgotPassword(false)
    }
    // const Theme = useTheme();
   
      const classes = useStyles();
   return( 
   <AppBar className={styles.appbar}  style={{backgroundColor:'#fff', boxShadow:'none'}}>
        <BasicModal handleClose={handleLogin} open={login}  body={<Login handleClose={handleLogin} openPassword={setForgotPassword} />}/>
        <BasicModal handleClose={handleRegister} open={register} body={<Register handleClose={handleRegister} />}/>
        <BasicModal handleClose={handlePassword} open={forgotPassword}  body={<ForgotPassword handleClose={handlePassword} />}/>
       
       
       <Grid container sx={{width:'100%'}}  justifyContent='space-between'>
               <Grid item sm={4} marginLeft={2} >
                    <Image src={Logo} height='70px' className={styles.logo}  />
                </Grid>
                {width < 768 ?
                <Grid md={11} >
                    <Grid container py={2}>
                        <IconButton marginTop={3} onClick={()=>setOpenTop(!openTop)}>
                            <MenuRounded />
                        </IconButton>
                    </Grid>
                    <Drawer
                        anchor='top'
                        open={openTop}
                        onClose={()=>setOpenTop(false)}
                        paddingTop={5}
                    >
                        <Grid container padding={2} justifyContent='flex-end'>
                            <MenuRounded onClick={()=>setOpenTop(false)}/>
                        </Grid>
                        <Link href="/">
                            <Typography onClick={()=>setOpenTop(false)} textAlign='center' className='text nav-link'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                    
                        <Link href='/jlj'>
                                <Typography onClick={()=>setOpenTop(false)} textAlign='center' className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Events
                                </Typography>
                        </Link>
        
                        
                        <Link href="/login"  component="button">
                            <div onClick={()=>setOpenTop(false)} className='nav-link'>
                                <Typography paddingBottom={3} textAlign='center' className='text' variant="body2"  sx={{ flexGrow: 1 }}>
                                Login
                                </Typography>
                            </div>
                        </Link>
                    </Drawer>
                </Grid> 
                
                :

                <Grid item md={7} sm={7} >
                    <Toolbar  >
                        <Link href="/">
                            <Typography className='text nav-link'  variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                    
                        <Link href='/jlj'>
                                <Typography className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    News
                                </Typography>
                        </Link>

                        <Link href='/jlj'>
                                <Typography className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Events
                                </Typography>
                        </Link>

                        <Link href='/jlj'>
                                <Typography className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Publications
                                </Typography>
                        </Link>
                       
                        <Link href="/login"  >
                            {/* <div className='text nav-link/'/> */}
                                <Typography className='text nav-link' variant="body2"  sx={{ flexGrow: 1 }}>
                                Support
                                </Typography>
                            {/* </div> */}
                        </Link>

                        {/* <Link href='/jlj'> */}
                                <Typography onClick={()=>setLogin(true)} className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Login
                                </Typography>
                        {/* </Link> */}

                        {/* <Link href='/jlj'> */}
                                <Typography onClick={()=>setRegister(true)} className='text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                    Register
                                </Typography>
                        {/* </Link> */}

                        
                        
                    </Toolbar>
                </Grid>}
          </Grid>
                            
    </AppBar>
    

    )
    
}