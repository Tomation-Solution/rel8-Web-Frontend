import { Grid } from "@mui/material"
import ExcoCard from "../components/ExcoCard"
import HeadText from "../components/Dashboard/DashboardHead"
import  ImageCard from "../images/IMG-20190508-WA0001 1 (1).png"
import { DashboardLayout } from "../components/Dashboard/Member/Sidebar/dashboard-layout"


export default function Excos(){
    return(
        <DashboardLayout>
        <Grid container>
            <HeadText text='Meet the Excos' />

            <Grid container px={2}>
                <ExcoCard 
                    image={ImageCard} 
                    name='MD Abubakar' 
                    post='MD/CEO' 
                    excoPost="Chairman"
                    company='Blaid Group' 
                    body='Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt 
                    ut labore et dolore maet justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren'/>

                <ExcoCard 
                    image={ImageCard} 
                    name='MD Abubakar' 
                    post='MD/CEO' 
                    excoPost="Vice Chairman"
                    company='Blaid Group' 
                    body='Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt 
                    ut labore et dolore maet justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren'/>
            
            <ExcoCard 
                    image={ImageCard} 
                    name='MD Abubakar' 
                    post='MD/CEO' 
                    excoPost="Secretary"
                    company='Blaid Group' 
                    body='Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt 
                    ut labore et dolore maet justo duo 
                    dolores et ea rebum. Stet clita kasd gubergren'/>
            </Grid>
        </Grid>
        </DashboardLayout>
    )
}