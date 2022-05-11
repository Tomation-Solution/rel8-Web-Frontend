import { useState } from "react";
import { Grid, Typography, Button, Modal, Box } from "@mui/material";
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Image from "next/image";
import GreenButton from "./Buttonn";
// import NewsImage from '../images/Vectorlanding.png'

export default function EventPageCard (props){

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Grid  item md={11} marginY={2}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                // justifyContent='center'
            >
                {/* <Ty   pography>{props.header}</Typography> */}
                <Grid container justifyContent='center' alignContent='center'   >
                    <Grid sx={{width: 400, margin:'0 auto' }} px={3} py={4}  position='absolute' top='40%' className='light-green-bg rounded-corners'>
                        <Typography textAlign='center' className='text' variant='h5' fontWeight='600' id="parent-modal-title">
                            { props.btnText == 'Join' ? 'Join Event' : 'Register for Event'}
                        </Typography>
                        { props.btnText=='Join' ?
                        <Link href='http://www.zoom.com/meet'>
                            <Typography textAlign='center' className='nav-link' py={3}>
                                http://www.zoom.com/meet
                            </Typography>
                        </Link>
                        :
                        <Typography textAlign='center' py={2} className='text' id="parent-modal-description">
                             
                            Confirm you wish to register for this event?
                        </Typography>}
                        {/* <br/> */}
                        { props.btnText=='Join' ? '' :
                        <Typography textAlign='center' paddingBottom={1} className='light-text'>Note this event attracts a fee of - N 25,000</Typography>
                        }
                        <Grid justifyContent='center' container>
                            <GreenButton text='Yes' textColor='white' bg='#436937' px={4} py={1} radius={5} />
                            <GreenButton text='Cancel' textColor='#436937'  px={4} py={1} radius={5} click={handleClose} />
                        </Grid>
                    </Grid>
                    
                    {/* <ChildModal /> */}
                </Grid>
            </Modal>
            <Image src={props.image} marginTop={2} height='600px' className='rounded-corners'/>
            <Typography variant='subtitle2' className='light-text'  marginY={1}>{props.date}</Typography>
            <Typography px={1} textAlign='justify' marginBottom={2}>{props.body}</Typography>
            <Grid md={10} sm={9} style={{margin:'0 auto'}}>
                {/* <Button variant='contained'  size='small' className={[styles.button, 'button-lower rounded-button'] }>
                    More
                </Button>
                <GreenButton/> */}
                <GreenButton text={props.btnText} radius='10px' click={handleOpen}
               textColor='white' py={1} px={1}  bg='#436937'/>
            </Grid>
        </Grid>
    )

}