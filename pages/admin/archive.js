import { useState } from "react";
import { Delete, Edit, SearchRounded, AddCircleOutlineOutlined} from "@mui/icons-material";
import { TextField, Grid, Button, Tabs, Tab, Box, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/Dashboard/Admin/Sidebar/dashboard-layout"; 
import PropTypes  from "prop-types";
import {ArchiveTable, CustomizedTables, MemberTable} from "../../components/Dashboard/Admin/Tables";
import BasicModal from "../../components/Modals";
import HeadText from "../../components/Dashboard/DashboardHead";
import DeleteArchive from "../../components/Modal.jsx/Archive/DeleteArchive";
// import AddPorfolio from "../../components/Modal.jsx/AddPortfolio";
// import EditMembers from "../../components/Modal.jsx/EditMembers";
// import DeleteMembers from "../../components/Modal.jsx/DeleteMembers";


export default function Archive(){

    const [value, setValue] = useState(0);
    const memberFields = ['S/N','Name','Email', 'Phone','Address', 'Occupation','Course of study', 'Period of study','Actions']

    function createData(sn,name, email, phone, address, occupation,course, period, action) {
        return {sn, name, email, phone, address, occupation,course, period, action };
      }
      
      const rows = [
        createData(1,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022',<Grid container justifyContent='space-between' > <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(2,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Delete sx={{color:'red'}}/> </Grid>),
        createData(3,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Delete onClick={()=>alert(rows.name)} sx={{color:'red'}}/> </Grid>),
        createData(4,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Delete sx={{color:'red'}}/> </Grid>),
        createData(5,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Delete sx={{color:'red'}}/> </Grid>),
        createData(6,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Delete sx={{color:'red'}}/> </Grid>),
        createData(7,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', 'Project Manger', 'Project Management', '2010 - 2022', <Grid container justifyContent='space-between'> <Delete sx={{color:'red'}}/> </Grid>),
        
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
            {/* <BasicModal handleClose={handleClose} open={open} body={<AddPorfolio handleClose={handleClose} />}/>
            <BasicModal handleClose={handleClose1} open={openEditMember} body={<EditMembers handleClose={handleClose1} body='hello' />}/> */}
            <BasicModal handleClose={handleCloseDelete} open={openDeleteMember} body={<DeleteArchive handleClose={handleCloseDelete} body='hello' />}/>
            <Grid px={2}>    
                <HeadText text='Archive'/>
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
                    <ArchiveTable tableHead={memberFields} rows={rows}/>
                </Grid>
            
        </DashboardLayout>
    )
}