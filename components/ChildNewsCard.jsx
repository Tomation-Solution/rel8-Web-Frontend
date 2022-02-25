import { Grid, Typography } from "@mui/material"
import Image from "next/image";
import Link from 'next/link'

export default function ChildNewsCard (props){
    return(
        <Grid paddingX={1} item md={4}>
            <Grid item md={11} marginX={1}>
                <Grid container paddingY={1}  marginY={1} paddingX={1} className='light-grey-bg rounded-corners'>
                    <Grid container >
                        <Typography variant='caption' className='light-text' >
                            {props.date}
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <Image height='900px' src={props.image} />
                    </Grid>
                    <Grid item paddingLeft={1} sm={9}>
                        <Typography variant='subtitle2' fontWeight='400' className='text'> 
                            {props.title}
                        </Typography>
                    </Grid>
                    <Link href="/">
                        <Typography variant='caption' fontWeight='500' className='text nav-link green-text'>Read More</Typography>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}