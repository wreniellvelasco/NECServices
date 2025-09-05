import {Box, Container, Grid, Chip, Stack, useMediaQuery} from "@mui/material";
import {useState} from "react";
import dayjs from "dayjs";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import StarsIcon from '@mui/icons-material/Stars';


const TabsSample = (props) => {


    const mediumDisplay = useMediaQuery("(min-width:1280px)");

    const [tabIndex, setTabIndex] = useState(0);

    const [appointment, setAppointment] = useState({});
    const [physician, setPhysician] = useState({});
    const [examination, setExamination] = useState({});
    const [selectedDate, setSelectedDate] = useState(dayjs().add(1, 'day'));
    const [selectedCalendarDate, setSelectedCalendarDate] = useState(dayjs().add(1, 'day'));

    const [pageStatus, setPageStatus] = useState({
        patient : "",
        date : "",
        physician : "",
        service : "",
        remarks : ""
    });

    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Stack direction={{xs: "column", md: "row"}} spacing={1} sx={{width : "100%", justifyContent : "center",alignItems : "center",paddingTop : "20px",paddingBottom : "20px"}}>
                                <Chip onClick={()=>setTabIndex(0)} icon={(pageStatus?.patient === 'DONE')? <CheckCircleOutlineIcon />:<AccountCircleIcon/>} color={(pageStatus?.patient === 'DONE')? "success":(tabIndex===0)? "info":"default"} label="Patient Information" size="medium" sx={{fontSize : "18px"}}/>
                                <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                                <Chip onClick={()=>setTabIndex(1)} icon={(pageStatus?.physician === 'DONE')? <CheckCircleOutlineIcon />:<AccountCircleIcon/>} color={(pageStatus?.physician === 'DONE')? "success":(tabIndex===1)? "info":"default"} label="Physician" size="medium" sx={{fontSize : "18px"}}/>
                                <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                                <Chip onClick={()=>setTabIndex(2)} icon={(pageStatus?.date === 'DONE')? <CheckCircleOutlineIcon />:<CalendarMonthIcon/>} color={(pageStatus?.date === 'DONE')? "success":(tabIndex===2 || tabIndex === 3)? "info":"default"} label="Appointment Date" size="medium" sx={{fontSize : "18px"}}/>
                                <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                                <Chip onClick={()=>setTabIndex(4)} icon={(pageStatus?.service === 'DONE')? <CheckCircleOutlineIcon />:<PlaylistAddCheckCircleIcon/>} color={(pageStatus?.service === 'DONE')? "success":(tabIndex===4)? "info":"default"} label="Service" size="medium" sx={{fontSize : "18px"}}/>
                                <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                                <Chip onClick={()=>setTabIndex(5)} icon={(pageStatus?.remarks === 'DONE')? <CheckCircleOutlineIcon />:<StarsIcon/>} color={(pageStatus?.remarks === 'DONE')? "success":(tabIndex===5)? "info":"default"} label="Remarks" size="medium" sx={{fontSize : "18px"}}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default TabsSample;