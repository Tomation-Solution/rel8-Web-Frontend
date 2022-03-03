import { useState } from "react";
import { Delete, Edit, SearchRounded, AddCircleOutlineOutlined} from "@mui/icons-material";
import { TextField, Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/Dashboard/Admin/Sidebar/dashboard-layout"; 
// import StatCard from "../../components/Dashboard/Admin/StatCard";
import PropTypes  from "prop-types";
import {CustomizedTables, MemberTable} from "../../components/Dashboard/Admin/Tables";
import BasicModal from "../../components/Modals";
import HeadText from "../../components/Dashboard/DashboardHead";
import AddPorfolio from "../../components/Modal.jsx/AddPortfolio";
import EditMembers from "../../components/Modal.jsx/EditMembers";


export default function Members(){

    const [value, setValue] = useState(0);
    const [subcomm, setSubcom] = useState('');
    const excoFields = ['Name', 'PortFolio', 'Email', 'Phone','Course of study', 'Period of study']
    const memberFields = ['Name','Email', 'Phone','Address', 'Occupation','Course of study', 'Period of study','Actions']

    function createData(name, email, phone, address, occupation,course, period, action) {
        return { name, email, phone, address, occupation,course, period, action };
      }
      
      const rows = [
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022',<Grid container justifyContent='space-between' > <AddCircleOutlineOutlined onClick={()=>setOpen(true)} sx={{color:'#1888AA'}}/> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid> ),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <AddCircleOutlineOutlined sx={{color:'#1888AA'}}/> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <AddCircleOutlineOutlined sx={{color:'#1888AA'}}/> <Edit sx={{color:'#365C2A'}}/> <Delete onClick={()=>alert(rows.name)} sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <AddCircleOutlineOutlined sx={{color:'#1888AA'}}/> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <AddCircleOutlineOutlined sx={{color:'#1888AA'}}/> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <AddCircleOutlineOutlined sx={{color:'#1888AA'}}/> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <AddCircleOutlineOutlined sx={{color:'#1888AA'}}/> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        
      ];
      

     const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      const [open, setOpen] = useState(false);
      const [openEditMember, setOpenEditMember] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const handleClose1 = () => setOpenEditMember(false);

    return (
        <DashboardLayout>
            <BasicModal handleClose={handleClose} open={open} body={<AddPorfolio handleClose={handleClose} />}/>
            <BasicModal handleClose={handleClose1} open={openEditMember} body={<EditMembers handleClose={handleClose1} body='hello' />}/>
            <Grid>    
                <Tabs value={value} onChange={handleChange} >
                    <Tab  {...a11yProps(0)} label="All Members" className='text' sx={{textTransform:'capitalize'}} >Hell</Tab>
                    <Tab  {...a11yProps(1)} label="Exco Members" className='text' sx={{textTransform:'capitalize'}} />
                    <Tab  {...a11yProps(2)} label="Commitee Members" className='text' sx={{textTransform:'capitalize'}} />
                    <Tab  {...a11yProps(3)} label="Sub Commitee Members" className='text' sx={{textTransform:'capitalize'}} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Grid container my={2} py={1} className='rounded-corners' px={2}>
                       <Grid item md={7} sx={{borderRadius:'5px'}} py={1} px={2} className='light-grey-bg'>
                            <TextField
                                variant='standard'
                                size='large'
                                placeholder='Search'
                                sx={{width:'100%',  borderBottom:'none'}}
                                InputProps={{disableUnderline:true}}
                                onChange={()=>setSubcom(event.target.value)}
                            />        
                        </Grid> 
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <SearchRounded sx={{color:'#fff',paddingTop:1}} />
                        </Grid>
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <Typography className='white-text'  textAlign='center' sx={{color:'red'}}>Add New</Typography>
                        </Grid>
                    </Grid><br/>
                    <MemberTable tableHead={memberFields} rows={rows}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container my={2} py={1} className='rounded-corners' px={2}>
                       <Grid item md={7} sx={{borderRadius:'5px'}} py={1} px={2} className='light-grey-bg'>
                            <TextField
                                variant='standard'
                                size='large'
                                placeholder='Search'
                                sx={{width:'100%',  borderBottom:'none'}}
                                InputProps={{disableUnderline:true}}
                                onChange={()=>setSubcom(event.target.value)}
                            />

                            
                        </Grid> 
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <SearchRounded sx={{color:'#fff',paddingTop:1}} />
                        </Grid>
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <Typography className='white-text'  textAlign='center' sx={{color:'red'}}>Add New</Typography>
                        </Grid>
                    </Grid><br/>
                    <CustomizedTables tableHead={excoFields} rows={rows}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container my={2} py={1} className='rounded-corners' px={2}>
                       <Grid item md={7} sx={{borderRadius:'5px'}} py={1} px={2} className='light-grey-bg'>
                            <TextField
                                variant='standard'
                                size='large'
                                placeholder='Search'
                                sx={{width:'100%',  borderBottom:'none'}}
                                InputProps={{disableUnderline:true}}
                                onChange={()=>setSubcom(event.target.value)}
                            />

                            
                        </Grid> 
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <SearchRounded sx={{color:'#fff',paddingTop:1}} />
                        </Grid>
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <Typography className='white-text'  textAlign='center' sx={{color:'red'}}>Add New</Typography>
                        </Grid>
                    </Grid><br/>
                    <CustomizedTables tableHead={excoFields} rows={rows}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container textAlign='center'  my={2} py={1} className='rounded-corners' px={2}>
                       <Grid item md={7} sx={{borderRadius:'5px'}} py={1} px={2} className='light-grey-bg'>
                            <TextField
                                variant='standard'
                                size='large'
                                placeholder='Search'
                                sx={{width:'100%',  borderBottom:'none'}}
                                InputProps={{disableUnderline:true}}
                                value={subcomm}
                                onChange={()=>setSubcom(event.target.value)}
                            />       
                        </Grid> 
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <SearchRounded sx={{color:'#fff',paddingTop:1}} />
                        </Grid>
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <Typography className='white-text'  textAlign='center' sx={{color:'red'}}>Add New</Typography>
                        </Grid>
                    </Grid><br/>
                    <CustomizedTables tableHead={excoFields} rows={rows}/>
                </TabPanel>
            </Grid>
            
        </DashboardLayout>
    )
}