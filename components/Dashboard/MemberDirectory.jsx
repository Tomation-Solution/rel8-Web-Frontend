import { Grid,TextField, Button, Table, TableRow,TableHead, TableBody, TableCell, Typography } from "@mui/material";
import GreenButton from "../Buttonn";
import { SearchRounded } from "@mui/icons-material";

export default function MemberDirectory(){
    return(
        <Grid >
            <Typography className='text' fontWeight='bold' marginX={2}>
                Members Directory
            </Typography>
            <br/>
            <Grid container justifyContent='space-around' md={12} marginTop={5}  >
                <Grid item md={8}>
                    <Grid container>
                        <Grid item md={8}>
                            <TextField 
                            placeholder='Search'
                            label='Search member by name or Occupation'
                            size='small'
                            type= 'text'
                            style={{width:'98%', backgroundColor:'white', boxShadow:'inherit', border:'none' }}

                            />
                            {/* <Button paddingLeft={3} variant='contained' style={{backgroundColor:'#365C2A'}} >
                                <SearchRounded/>
                            </Button> */}
                        </Grid>
                        <Grid item>
                            <Button  paddingY={1} variant='contained' style={{backgroundColor:'#365C2A'}} >
                                <SearchRounded/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid>
                        <Typography className='text'>1 of 20</Typography>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Grid md={11} style={{margin: '0 auto'}}>
                    <Table aria-label="strip table">
                        <TableHead>
                            <TableCell><b>S/N</b></TableCell>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Phone</b></TableCell>
                            <TableCell><b>Address</b></TableCell>
                            <TableCell><b>Occupation</b></TableCell>
                            <TableCell><b>Course of Study</b></TableCell>
                            <TableCell><b>Period of Study</b></TableCell>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell className='light-text'>1</TableCell>
                                <TableCell className='light-text'>Ade Bolaji</TableCell>
                                <TableCell className='light-text'>deboyeJohn@gmail.com</TableCell>
                                <TableCell className='light-text'>08023823812</TableCell>
                                <TableCell className='light-text'>12, Allen Avenue, Ikeja Lagos</TableCell>
                                <TableCell className='light-text'>Financial Advisor</TableCell>
                                <TableCell className='light-text'>Financial Advisory</TableCell>
                                <TableCell className='light-text'>1998 - 1999</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className='light-text'>2</TableCell>
                                <TableCell className='light-text'>Ade Bolaji</TableCell>
                                <TableCell className='light-text'>deboyeJohn@gmail.com</TableCell>
                                <TableCell className='light-text'>08023823812</TableCell>
                                <TableCell className='light-text'>12, Allen Avenue, Ikeja Lagos</TableCell>
                                <TableCell className='light-text'>Financial Advisor</TableCell>
                                <TableCell className='light-text'>Financial Advisory</TableCell>
                                <TableCell className='light-text'>1998 - 1999</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
  
        </Grid>
    )
}