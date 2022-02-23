import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import EventCard from "../EventCard";
import BannerImage from '../../images/Vectorlanding.png'
import Newscard from "../NewsCard";
import EventPageCard from "../EventPageCard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function Events(){
    const [value, onChange] = useState(new Date());
    console.log(value)

    return(
        <Grid>
            <Grid container justifyContent='space-around'>
                <Grid md={7} className='light-green-bg rounded-corners'style={{maxHeight:'15vh'}} item>
                    <Grid container paddingY={4}  justifyContent='space-around'>
                        <Grid item>
                            <Typography fontWeight='bold' className='text' textAlign='center'>
                                18
                            </Typography>
                            <Typography fontWeight='400' className='text' variant='subtitle2'>
                                National Events
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography fontWeight='bold' className='text' textAlign='center'>
                                18
                            </Typography>
                            <Typography fontWeight='400' className='text' variant='subtitle2'>
                                National Events
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography fontWeight='bold' className='text' textAlign='center'>
                                18
                            </Typography>
                            <Typography fontWeight='400' className='text' variant='subtitle2'>
                                National Events
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid container> fhkfhdk</Grid> */}
                </Grid>
                <Grid md={4}  padding={2} item>
                    <Calendar 
                    onChange={onChange}  
                    value={value} 
                    minDate={new Date()}
                    className='light-grey-bg rounded-corners'
                    paddingY={3}
                    tileClassName='light-green-bg rounded-corners'
                    

                    // selectRange={[new Date(2022, 2, 26), new Date(2022, 2, 28)]}
                   
                    defaultValue={[new Date(2022, 2, 26), new Date(2022, 2, 28)]}
                    />
                </Grid>
            </Grid>

            <Typography fontWeight='bold' marginTop={4} marginLeft={2} className='text' variant='subtitle2'>
                                National Events
                            </Typography>

            <Grid container justifyContent='space-around'>
                {/* <Grid md={3}> */}
                <EventPageCard
                    date='Feb 15th, 2022 - 10:33 '
                    body='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
                    image={BannerImage}
                    btnText='Register to Attend'
                />

                <EventPageCard
                    date='Feb 15th, 2022 - 10:33 '
                    body='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
                    image={BannerImage}
                    btnText='Register to Attend'

                />

                <EventPageCard
                    date='Feb 15th, 2022 - 10:33 '
                    body='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'
                    image={BannerImage}
                    btnText='Join'
                />
                {/* </Grid> */}
            </Grid>
        </Grid>
    )
}