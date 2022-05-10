import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import bgImage from '../images/Vectorlanding.png'
import styles from '../styles/Home.module.css'


export default function HeroSection(props){
    const router = useRouter();
    console.log(router.query.login)
    return (
        <main>
            <br/>
            <br/>
            <br/>
            <Image
            src={props.bgImage ? props.bgImage:bgImage}
            className={styles.heroImage}
            // width='100%'
            // height={500}  
            />
        <Grid container justifyContent='center' >
            
            <Typography className='text'  textAlign='center'  color={'red'} style={{color:'#fff',position:'absolute', top:'40%'}} >
                {/* AANI {router.query.login} Chapter */}
                <Typography variant='h5'>
                    {props.message}
                </Typography>
            <Grid md={5} justifySelf='center' style={{margin:'0 auto'}}>
                <Typography className='text' variant='caption'  color={'red'} style={{color:'#fff'}} >
                {/* AANI {router.query.login} Chapter */}
                {props.body}
            </Typography>
            </Grid>
            </Typography>
        </Grid>
        </main>
    )

}