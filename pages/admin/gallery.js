import { useState } from "react";
import { Delete, Edit, SearchRounded, AddCircleOutlineOutlined} from "@mui/icons-material";
import { TextField, Grid, Button, Tabs, Tab, Box, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/Dashboard/Admin/Sidebar/dashboard-layout"; 
import PropTypes  from "prop-types";
import {ArchiveTable, CustomizedTables, GalleryTable, MemberTable} from "../../components/Dashboard/Admin/Tables";
import BasicModal from "../../components/Modals";
import HeadText from "../../components/Dashboard/DashboardHead";
import GreenButton from "../../components/Buttonn";
import GalleryImage from '../../images/shortBanner.png'
import DeleteGallery from "../../components/Modal.jsx/Gallery/DeleteGallery";
import EditGallery from "../../components/Modal.jsx/Gallery/EditGallery";
import AddGallery from "../../components/Modal.jsx/Gallery/AddGallery";



export default function Gallery(){

    const [value, setValue] = useState(0);
    const memberFields = ['S/N','Image','Title','Actions']

    function createData(sn,image, title, action) {
        return {sn, image, title, action };
      }
      
      const rows = [
        createData(1,GalleryImage, '2022 Alumni Get Together Party', <Grid container justifyContent='space-evenly' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(2,GalleryImage, '2022 Alumni Get Together Party', <Grid container justifyContent='space-evenly' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(3,GalleryImage, '2022 Alumni Get Together Party2022 ', <Grid container justifyContent='space-evenly'> <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(4,GalleryImage, '2022 Alumni Get Together Party', <Grid container justifyContent='space-evenly' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(5,GalleryImage, '2022 Alumni Get Together Party', <Grid container justifyContent='space-evenly' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        createData(6,GalleryImage, '2022 Alumni Get Together Party', <Grid container justifyContent='space-evenly' > <Edit onClick={()=>setOpenEditMember(true)} sx={{color:'#365C2A'}}/> <Delete onClick={()=>setOpenDeleteMember(true)} sx={{color:'red'}}/> </Grid> ),
        
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
            <BasicModal handleClose={handleClose} open={open} body={<AddGallery handleClose={handleClose} />}/>
            <BasicModal handleClose={handleClose1} open={openEditMember} body={<EditGallery handleClose={handleClose1} body='hello' />}/>
            <BasicModal handleClose={handleCloseDelete} open={openDeleteMember} body={<DeleteGallery handleClose={handleCloseDelete} body='hello' />}/>
            <Grid px={2}>    
                <HeadText text='Gallery'/>
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
                    <GalleryTable tableHead={memberFields} rows={rows}/>
                </Grid>
            
        </DashboardLayout>
    )
}