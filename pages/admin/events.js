import { useState } from "react";
import { Delete, Edit, SearchRounded, AddCircleOutlineOutlined} from "@mui/icons-material";
import { TextField, Grid, Button, Tabs, Tab, Box, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/Dashboard/Admin/Sidebar/dashboard-layout"; 
// import StatCard from "../../components/Dashboard/Admin/StatCard";
import PropTypes  from "prop-types";
import {AllEventTable, CustomizedTables, MemberEventTable, MemberTable, NationalEventTable, StateEventTable} from "../../components/Dashboard/Admin/Tables";
import BasicModal from "../../components/Modals";
import AddPorfolio from "../../components/Modal.jsx/Members/AddPortfolio";
import EditEvent from "../../components/Modal.jsx/events/EditEvent";
import DeleteMembers from "../../components/Modal.jsx/Members/DeleteMembers";
import GreenButton from "../../components/Buttonn";
import DeleteEvent from "../../components/Modal.jsx/events/DeleteEvent";
import AddEvent from "../../components/Modal.jsx/events/AddEvent";

export default function Events(){

    const [value, setValue] = useState(0);
    const [subcomm, setSubcom] = useState('');
    const allEventFields = ['S/N','Event Name', 'Date','Category', 'Event Type', 'Address', 'Actions']
    const nationalEventFields = ['S/N','Event Name', 'Date', 'Event Type', 'Address', 'Actions']
    const eventFields = ['S/N','Event Name', 'Date', 'Event Type', 'Address', 'Actions']
    const memberFields = ['Name','Email', 'Phone','Address', 'Occupation','Course of study', 'Period of study','Actions']

    function createData(sn, name, date, category, type, address, action) {
        return { sn, name, date, category, type, address,action };
      }

      function createNationalData(sn, name, date, type, address, action) {
        return { sn, name, date, type, address,action };
      }

      function createStateData(sn, name, date, type, address, action) {
        return { sn, name, date, type, address,action };
      }

      function createMemberData(sn, name, date, type, address, action) {
        return { sn, name, date, type, address,action };
      }
      
      const allRows = [
        createData('1', 'National Meeting', 'March 12, 2022','National','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('2', 'National Meeting', 'March 12, 2022','National','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('3', 'National Meeting', 'March 12, 2022','Lagos Chapter','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('4', 'National Children day Awareness', 'March 12, 2022','Ogun Chapter','Paid - N 5000',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('5', 'National Meeting', 'March 12, 2022','General','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('6', 'National Meeting', 'March 12, 2022','General','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('7', 'National Meeting', 'March 12, 2022','General','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('8', 'National Meeting', 'March 12, 2022','General','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        
      ];

      const nationalRows = [
        createNationalData('1', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createNationalData('2', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createNationalData('3', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createNationalData('4', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createNationalData('5', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createNationalData('6', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
      ];

      const stateRows = [
        createStateData('1', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createStateData('2', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createStateData('3', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
      ];

      const memberRows = [
        createMemberData('1', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        // createNationalData('2', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        // createNationalData('3', 'National Meeting', 'March 12, 2022','Free',  'https://www.zoom.com/uasix',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
      ];
      
      const rows = [
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'>  <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Edit sx={{color:'#365C2A'}}/> <Delete onClick={()=>alert(rows.name)} sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData('Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Edit sx={{color:'#365C2A'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        
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
      const [openDeleteMember, setOpenDeleteMember] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleOpenDelete = () => setOpenDeleteMember(true);
      const handleClose = () => setOpen(false);
      const handleClose1 = () => setOpenEditMember(false);
      const handleCloseDelete = () => setOpenDeleteMember(false);

    return (
        <DashboardLayout>
            <BasicModal handleClose={handleClose} open={open} body={<AddEvent handleClose={handleClose} />}/>
            <BasicModal handleClose={handleClose1} open={openEditMember} body={<EditEvent handleClose={handleClose1} body='hello' />}/>
            <BasicModal handleClose={handleCloseDelete} open={openDeleteMember} body={<DeleteEvent handleClose={handleCloseDelete} body='hello' />}/>
            <Grid>    
                <Tabs value={value} onChange={handleChange} >
                    <Tab  {...a11yProps(0)} label="All Events" className='text' sx={{textTransform:'capitalize'}} >Hell</Tab>
                    <Tab  {...a11yProps(3)} label="National Events" className='text' sx={{textTransform:'capitalize'}} />
                    <Tab  {...a11yProps(1)} label="State Events" className='text' sx={{textTransform:'capitalize'}} />
                    <Tab  {...a11yProps(2)} label="Member Events" className='text' sx={{textTransform:'capitalize'}} />
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
                        {/* <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <Typography className='white-text'  textAlign='center' sx={{color:'white'}}>Add New</Typography>
                        </Grid> */}

                        <GreenButton 
                        text='Add New'
                        bg='#365C2A'
                        radius={5}
                        textColor='white'
                        px={5}
                        py={1.5}
                        fontWeight={500}
                        click={()=>setOpen(true)}
                        />
                    </Grid><br/>
                    <AllEventTable tableHead={allEventFields} rows={allRows}/>
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
                        {/* <GreenButton 
                        text='Create Profolio'
                        bg='#365C2A'
                        radius={5}
                        textColor='white'
                        px={5}
                        py={1.5}
                        fontWeight={500}
                        /> */}
                    </Grid><br/>
                    <NationalEventTable tableHead={nationalEventFields} rows={nationalRows}/>
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
                       
                    </Grid><br/>
                    <StateEventTable tableHead={eventFields} rows={stateRows}/>
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

                    </Grid><br/>
                    <MemberEventTable tableHead={eventFields} rows={memberRows}/>
                </TabPanel>
            </Grid>
            
        </DashboardLayout>
    )
}