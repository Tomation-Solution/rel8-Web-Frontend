import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Grid, TextField, Menu, MenuItem, Typography } from "@mui/material";
// import HeadText from "../../../Dashboard/DashboardHead";
import HeadText from "../../Dashboard/DashboardHead";
import GreenButton from "../../Buttonn";


export default function AddPorfolio(props){
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
        // alert(val)
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    return (
        <Grid container >
            <HeadText text='Assign Portfolio'/>
            <TextField
                variant='standard'
                label="Name"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            <TextField
                variant='standard'
                label="Email"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            <TextField
                variant='standard'
                label="Phone"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />

            <TextField
                variant='standard'
                label="Course of Study"
                fullWidth
                InputLabelProps={{className:'light-text'}}
            />
            <Grid my={2} py={1} container sx={{borderRadius:1}} className='light-grey-bg'>
            <Typography textAlign='center' id="demo-positioned-menu" onClick={handleClick1 }  className='light-text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Grid container px={1} alignItems='center' justifyContent='space-between' >Select Category<ArrowDropDown />
                </Grid>
            </Typography>
            <Menu id="basic-menu" sx={{width:'100%'}} anchorEl={anchorEl1} open={open1} onClose={handleClose1}
                MenuListProps={{'aria-labelledby': 'basic-button',}}>
                <MenuItem onClick={handleClose1}>Commitee</MenuItem>
                <MenuItem onClick={handleClose1}>Exco</MenuItem>
                <MenuItem onClick={handleClose1}>Sub Commitee</MenuItem>
               
            </Menu>
            </Grid>

            <Grid  py={1} container sx={{borderRadius:1}} className='light-grey-bg'>
            <Typography textAlign='center' id="demo-positioned-menu" onClick={handleClick }  className='light-text nav-link' variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Grid container px={1} alignItems='center' justifyContent='space-between' >Select Porfolio<ArrowDropDown />
                </Grid>
            </Typography>
            <Menu id="basic-menu" sx={{width:'100%'}} anchorEl={anchorEl} open={open} onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button',}}>
                <MenuItem onClick={handleClose}>Chairman</MenuItem>
                <MenuItem onClick={handleClose}>Vice Chairman</MenuItem>
                <MenuItem onClick={handleClose}>Treasurer</MenuItem>
               
            </Menu>
            </Grid>

            <Grid md={12} mt={1} container justifyContent='space-around'>
                <GreenButton text='Save' textColor='#fff' py={1} radius={3} bg='#203719' px={7} />
                <GreenButton text='Cancel' textColor='#203719' py={1} radius={3} bg='#E1F1DC' px={7} click={()=>props.handleClose()} />
            </Grid>
        </Grid>
    )
}