import { Grid } from "@mui/material"


export default function SingleNews(PRPS){
    return(
        <Grid>
            <Grid>{props.image}</Grid>
            <Grid>{props.date}</Grid>
            <Grid>{props.body}</Grid>
        </Grid>
    )
}