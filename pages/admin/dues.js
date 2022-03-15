import { useState } from "react";
import { AccountBalanceWalletRounded, SearchRounded,EventAvailable, PersonPinRounded, 
 Delete, Edit} from "@mui/icons-material";
import { TextField, Grid,IconButton, Tabs, Tab, Box, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/Dashboard/Admin/Sidebar/dashboard-layout"; 
import StatCard from "../../components/Dashboard/Admin/StatCard";
import PropTypes  from "prop-types";
import GreenButton from "../../components/Buttonn";
import {CustomizedTables, DuesTable, OwingTable} from "../../components/Dashboard/Admin/Tables";
import HeadText from "../../components/Dashboard/DashboardHead";
import AddDue from "../../components/Modal.jsx/Dues/AddDue";
import BasicModal from "../../components/Modals";
import EditDue from "../../components/Modal.jsx/Dues/EditDue";
import DeleteDue from "../../components/Modal.jsx/Dues/DeleteDue";


export default function Dues(){

    const [value, setValue] = useState(0);
    const owingFields = ['S/N','Name', 'Email', 'Phone','Course of study', 'Outstanding']
    const dueFields = ['S/N','Name','Amount', 'Category', 'Actions']

    function createData(sn,name, amount, category,action) {
        return { sn,name, amount, category, action };
      }
      
      function createOwingData(sn,name, email, phone, course, amount,action) {
        return { sn,name, email, phone, course,amount,action};
      }
      

      const rows = [
        createData('1', 'Annual fee', '52,500.00','General',<Grid container  > <IconButton onClick={()=>setOpenEdit(true)}> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton onClick={()=>setOpenDelete(true)}><Delete sx={{color:'red'}}/> </IconButton> </Grid> ),
        createData('2', 'Annual fee', '52,500.00','General',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ),
        createData('3', 'Annual fee', '52,500.00','General',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ),
        createData('4', 'Annual fee', '52,500.00','General',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ),
        createData('5', 'Annual fee', '52,500.00','General',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ),
        
      ];
      
      const owingRows = [
        createOwingData('1', 'Bala Johnson', 'Balajhn@gmail.com', '08034754743', 'Conflict Resolution','N 52,500.00',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ), 
        createOwingData('2', 'Bala Johnson', 'Balajhn@gmail.com', '08034754743', 'Conflict Resolution','N 52,500.00',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ), 
        createOwingData('3', 'Bala Johnson', 'Balajhn@gmail.com', '08034754743', 'Conflict Resolution','N 52,500.00',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ), 
        createOwingData('4', 'Bala Johnson', 'Balajhn@gmail.com', '08034754743', 'Conflict Resolution','N 52,500.00',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ), 
        createOwingData('5', 'Bala Johnson', 'Balajhn@gmail.com', '08034754743', 'Conflict Resolution','N 52,500.00',<Grid container  > <IconButton> <Edit sx={{color:'#365C2A'}}/> </IconButton> <IconButton><Delete sx={{color:'red'}}/> </IconButton> </Grid> ), 
      ];

     const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = useState(false)
        // const [open, setOpen] = useState(false);
      const [openEdit, setOpenEdit] = useState(false);
      const [openDelete, setOpenDelete] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleOpenDelete = () => setOpenDelete(true);
      const handleClose = () => setOpen(false);
      const handleClose1 = () => setOpenEdit(false);
      const handleCloseDelete = () => setOpenDelete(false);

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
    return (
        <DashboardLayout>
            <BasicModal handleClose={handleClose} open={open} body={<AddDue handleClose={handleClose} />}/>
            <BasicModal handleClose={handleClose1} open={openEdit} body={<EditDue handleClose={handleClose1} />}/>
            <BasicModal handleClose={handleCloseDelete} open={openDelete} body={<DeleteDue handleClose={handleCloseDelete} />}/>
            
            <Grid>
                <Grid container justifyContent='space-around'>
                    <Grid item md={12}>
                        <Grid container justifyContent='space-around'>
                            <Grid item md={3} my={1}>
                                <StatCard
                                    header='N 210,900.00' 
                                    icon={<AccountBalanceWalletRounded sx={{color:'#E76137'}} fontSize="16"/>}
                                    iconBg='#FFC5B2'
                                    hasBg={true}
                                    body='Total Income'
                                />
                            </Grid>

                            <Grid item md={3} my={1}>
                                <StatCard
                                    header='N 180,500.00' 
                                    icon={<AccountBalanceWalletRounded sx={{color:'#00B4EC'}} fontSize="16"/>}
                                    iconBg='#A9E7FA'
                                    hasBg={true}
                                    body='Total Outstanding'
                                />
                            </Grid>

                            <Grid item md={3} my={1}>
                                <StatCard
                                    header='30' 
                                    icon={<PersonPinRounded sx={{color:'#00B4EC'}} fontSize="16"/>}
                                    iconBg='#BBFFF3'
                                    hasBg={true}
                                    body='Members Owing'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            
                
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab  {...a11yProps(0)} label="All Dues" className='text' sx={{textTransform:'capitalize'}} >Hell</Tab>
                    <Tab  {...a11yProps(1)} label="Members Owing" className='text' sx={{textTransform:'capitalize'}} />
                    {/* <Tab value="three" label="Commitee Members" className='text' sx={{textTransform:'capitalize'}} />
                    <Tab value="four" label="Sub-Commitee Members" className='text' sx={{textTransform:'capitalize'}} /> */}
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
                        text='Add a Due'
                        bg='#365C2A'
                        radius={5}
                        textColor='white'
                        paddingX={5}
                        paddingY={1.5}
                        fontWeight={500}
                        click={()=>setOpen(true)}
                        />
                        
                    </Grid><br/>
                    {/* <CustomizedTables tableHead={excoFields} rows={rows}/> */}
                    {/* <HeadText text='Dues'/><br/> */}
                    {/* <MemberTable tableHead={memberFields} rows={rows}/> */}
                    <DuesTable tableHead={dueFields} rows={rows}/>
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
                        {/* <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <Typography className='white-text'  textAlign='center' sx={{color:'white'}}>Add New</Typography>
                        </Grid> */}

                        {/* <GreenButton 
                        text='Add a Due'
                        bg='#365C2A'
                        radius={5}
                        textColor='white'
                        paddingX={5}
                        paddingY={1.5}
                        fontWeight={500}
                        /> */}
                        
                    </Grid><br/>
                    <OwingTable tableHead={owingFields} rows={owingRows}/>

                </TabPanel>
            </Grid>
            
        </DashboardLayout>
    )
}