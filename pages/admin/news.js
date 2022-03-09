import { useState } from "react";
import { Delete, Edit, SearchRounded, AddCircleOutlineOutlined, EditAttributes} from "@mui/icons-material";
import { TextField, Grid, Button, Tabs, Tab, Box, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/Dashboard/Admin/Sidebar/dashboard-layout"; 
import PropTypes  from "prop-types";
import {ArchiveTable, CustomizedTables, MemberTable, NewsTable} from "../../components/Dashboard/Admin/Tables";
import BasicModal from "../../components/Modals";
import HeadText from "../../components/Dashboard/DashboardHead";
import AddPorfolio from "../../components/Modal.jsx/AddPortfolio";
import EditMembers from "../../components/Modal.jsx/EditMembers";
import DeleteMembers from "../../components/Modal.jsx/DeleteMembers";


export default function News(){

    const [value, setValue] = useState(0);
    const memberFields = ['S/N','Title','Content', 'Date','Intended Readers','Actions']

    function createData(sn,title, content, date, Reader, action) {
        return {sn,title, content, date, Reader, action};
      }
      
      const rows = [
        createData(1,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ',<Grid container justifyContent='space-between' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(2,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', <Grid container justifyContent='space-between'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/>  <Delete sx={{color:'red'}}/> </Grid>),
        createData(3,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', <Grid container justifyContent='space-between'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/> <Delete onClick={()=>alert(rows.name)} sx={{color:'red'}}/> </Grid>),
        createData(4,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', <Grid container justifyContent='space-between'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData(5,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', <Grid container justifyContent='space-between'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData(6,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', <Grid container justifyContent='space-between'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        createData(7,'Ade Johnson', 'ade@gmail.com', '08089348232','123, Ikorodu road, Onipanu ', <Grid container justifyContent='space-between'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'green'}}/> <Delete sx={{color:'red'}}/> </Grid>),
        
      ];
      

     const handleChange = (event, newValue) => {
        setValue(newValue);
    };
 

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
            <BasicModal handleClose={handleClose} open={open} body={<AddPorfolio handleClose={handleClose} />}/>
            <BasicModal handleClose={handleClose1} open={openEditMember} body={<EditMembers handleClose={handleClose1} body='hello' />}/>
            <BasicModal handleClose={handleCloseDelete} open={openDeleteMember} body={<DeleteMembers handleClose={handleCloseDelete} body='hello' />}/>
            <Grid px={2}>    
                <HeadText text='News'/>
                    <Grid container my={2} py={1} className='rounded-corners' px={2}>
                       <Grid item md={7} sx={{borderRadius:'5px'}} py={1} px={2} className='light-grey-bg'>
                            <TextField
                                variant='standard'
                                size='large'
                                placeholder='Search by Date or Title'
                                sx={{width:'100%',  borderBottom:'none'}}
                                InputProps={{disableUnderline:true}}
                                onChange={()=>setSubcom(event.target.value)}
                            />        
                        </Grid> 
                        <Grid item alignContent='center' sx={{borderRadius:'5px'}} py={1} px={2} mx={1} className='dark-green-bg'>
                            <SearchRounded sx={{color:'#fff',paddingTop:1}} />
                        </Grid>
                        </Grid><br/>
                    <NewsTable tableHead={memberFields} rows={rows}/>
                </Grid>
            
        </DashboardLayout>
    )
}