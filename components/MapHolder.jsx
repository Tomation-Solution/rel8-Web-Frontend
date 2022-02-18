import { Grid, Typography } from "@mui/material";
import styles from '../styles/Home.module.css';


export default function MapHolder (){
    return (
        
            <Grid container className={styles.mapBg}>
                <Grid alignItems='center' item md={4} xs={12}>
                    <Typography variant='h6' fontWeight='bold' className='text'>
                        Alumni Association of the National Institute (AANI)
                    </Typography>
                    <Typography variant='body2' className='text'>
                    Select the Chapter of the Association you belong to from the map
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <div id="map"></div>
                </Grid>
                
            </Grid>
        
    )
}