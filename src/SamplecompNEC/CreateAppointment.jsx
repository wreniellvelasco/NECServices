import {TextField, Box, Button, Chip, Container, Grid, Stack, Tab, Tabs, Typography, useMediaQuery} from "@mui/material";
import {Panel, TabPanel} from "../../components/index.jsx";
import {useState} from "react";
import CalendarView from "../../components/Calendar/index.jsx";
import SelectPhysicianPanel from "../../components/Physician/SelectPhysicianPanel.jsx";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import StarsIcon from '@mui/icons-material/Stars';


import dayjs from "dayjs";
import SelectServicePanel from "../../components/Services/SelectServicePanel.jsx";
import PatientInformation from "../../components/Patient/PatientInformation.jsx";
import AppointmentSummary from "./AppointmentSummary.jsx";
import * as PropTypes from "prop-types";
import TimeslotSelector from "../../components/TimeslotSelector/TimeslotSelector.jsx";


const CreateAppointment = (props) => {


    const mediumDisplay = useMediaQuery("(min-width:1280px)");

    const [tabIndex, setTabIndex] = useState(0);

    const [appointment, setAppointment] = useState({});
    const [physician, setPhysician] = useState({});
    const [examination, setExamination] = useState({});
    const [selectedDate, setSelectedDate] = useState(dayjs().add(1, 'day'));
    const [selectedCalendarDate, setSelectedCalendarDate] = useState(dayjs().add(1, 'day'));

    const [timeslotSelectionDialogOpen, setTimeslotSelectionDialogOpen] = useState(false);

    const [pageStatus, setPageStatus] = useState({
        patient : "",
        date : "",
        physician : "",
        service : "",
        remarks : ""
    });

    const [services, setServices] = useState([
        {
            id: 1,
            name: "Standard Eye Examination",
            description: "A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.",
            img: "src/assets/images/ServicesImg/standard.jpg",
            time: "30 Mins"
        },
        {
            id: 2,
            name: "Premium Eye Examination",
            description: "Elevate your eye care experience with this all-inclusive package, ensuring a thorough understanding of your visual well-being.",
            img: "src/assets/images/ServicesImg/premium.jpg",
            time: "30 Mins"
        },
        {
            id: 3,
            name: "Pediatric Eye Examination",
            description: "The gentle care and precision required for pediatric eye health, providing a thorough understanding of your child's visual well-being.",
            img: "src/assets/images/ServicesImg/pediatric.jpg",
            time: "30 Mins"
        },
        {
            id: 4,
            name: "Executive Eye Examination",
            description: "Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care.",
            img: "https://nakpileyeclinic.com/static/media/pic-1.261b7e88e78c389e7d1f.png",
            time: "30 Mins"
        },
        {
            id: 5,
            name: "Executive Plus Eye Examination",
            description: "Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.",
            img: "src/assets/images/ServicesImg/executive+.jpg",
            time: "30 Mins"
        },
        {
            id: 6,
            name: "Corporate Eye Care Program",
            description: "A Comprehensive eye examination package for your company or organizations.",
            img: "src/assets/images/ServicesImg/corp.png",
            time: "30 Mins"
        },


    ]);

    const [patient,setPatient] = useState( {
        firstname : "",
        middlename : "",
        lastname : "",
        gender : "",
        dob : "",
        address : "",
        age : 0,
        city : "",
        state : "",
        email : "",
        mobile : "",
        complaints : ""
    });

    const handleAppointmentDateSelect = async (date) => {
        setSelectedCalendarDate(date);
        setTimeslotSelectionDialogOpen(true);
    }

    const today = dayjs();
    const nextMonth = dayjs().add(1, 'month');

    const getStartTime = (date) => {
        return dayjs(date).hour(9).minute(0).second(0);
    }

    const getEndTime = (date) => {
        return dayjs(date).hour(17).minute(0).second(0);
    }

    const handleTimeslotSelect = (date) => {
        setSelectedDate(date);
        //console.log(date);
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box sx={{padding : "20px 20px 0px 20px"}}>
                        <Typography variant="h4" sx={{fontWeight : 700,textAlign : "center"}}>Book Your Appointment</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={{xs: "column", md: "row"}} spacing={1} sx={{width : "100%", justifyContent : "center",alignItems : "center",paddingTop : "20px",paddingBottom : "20px"}}>
                        <Chip onClick={()=>setTabIndex(0)} icon={(pageStatus?.patient === 'DONE')? <CheckCircleOutlineIcon />:<AccountCircleIcon/>} color={(pageStatus?.patient === 'DONE')? "success":(tabIndex===0)? "info":"default"}  label="Patient Information" size="medium" sx={{fontSize : "18px"}}/>
                        <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                        <Chip onClick={()=>setTabIndex(1)} icon={(pageStatus?.physician === 'DONE')? <CheckCircleOutlineIcon />:<AccountCircleIcon/>} color={(pageStatus?.physician === 'DONE')? "success":(tabIndex===1)? "info":"default"}  label="Physician" size="medium" sx={{fontSize : "18px"}}/>
                        <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                        <Chip onClick={()=>setTabIndex(2)} icon={(pageStatus?.date === 'DONE')? <CheckCircleOutlineIcon />:<CalendarMonthIcon/>} color={(pageStatus?.date === 'DONE')? "success":(tabIndex===2 || tabIndex === 3)? "info":"default"} label="Appointment Date" size="medium" sx={{fontSize : "18px"}}/>
                        <Box  sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                        <Chip onClick={()=>setTabIndex(4)} icon={(pageStatus?.service === 'DONE')? <CheckCircleOutlineIcon />:<PlaylistAddCheckCircleIcon/>} color={(pageStatus?.service === 'DONE')? "success":(tabIndex===4)? "info":"default"}  label="Service" size="medium" sx={{fontSize : "18px"}}/>
                        <Box sx={{height : {xs : "10px", md : "3px"}, width : {xs: "3px", md : "70px"}, backgroundColor : "grey"}}/>
                        <Chip onClick={()=>setTabIndex(5)} icon={(pageStatus?.remarks === 'DONE')? <CheckCircleOutlineIcon />:<StarsIcon/>} color={(pageStatus?.remarks === 'DONE')? "success":(tabIndex===5)? "info":"default"}  label="Remarks" size="medium" sx={{fontSize : "18px"}}/>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Panel>
                        <TabPanel value={tabIndex} index={0}>
                            <Box >
                                <PatientInformation patient={patient} setPatient={setPatient} onSubmit={()=>setTabIndex(1)}/>
                            </Box>
                        </TabPanel>
                        <TabPanel value={tabIndex} index={1}>
                            <Box sx={{padding : "40px"}}>
                                <SelectPhysicianPanel physician={physician} setPhysician={setPhysician} onSubmit={()=>setTabIndex(2)} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={tabIndex} index={2}>
                            <Box >
                                <CalendarView year={today.year()} month={today.month()} selectedDate={selectedDate} handleDateSelect={handleAppointmentDateSelect} showNextMonth={true} handleNextMonth={()=>setTabIndex(3)} />
                                <Stack direction="row" sx={{justifyContent : "flex-end", paddingY : "20px"}}>
                                    <Button variant="contained" color="info" size="large" onClick={()=>setTabIndex(4)}>Next</Button>
                                </Stack>
                            </Box>
                        </TabPanel>
                        <TabPanel value={tabIndex} index={3}>
                            <Box >
                                <CalendarView year={nextMonth.year()} month={nextMonth.month()} selectedDate={selectedDate} handleDateSelect={handleAppointmentDateSelect} showPreviousMonth={true} handlePrevMonth={()=>setTabIndex(2)} />
                                <Stack direction="row" sx={{justifyContent : "flex-end", paddingY : "20px"}}>
                                    <Button variant="contained" color="info" size="large"  onClick={()=>setTabIndex(4)}>Next</Button>
                                </Stack>
                            </Box >
                        </TabPanel>
                        <TabPanel value={tabIndex} index={4}>
                            <Box sx={{padding : "20px" }}>
                                <SelectServicePanel services={services} service={examination} setService={setExamination} onSubmit={()=>setTabIndex(5)}/>
                            </Box>
                        </TabPanel>
                        <TabPanel value={tabIndex} index={5}>
                            <Box sx={{padding : "40px"}}>
                                <AppointmentSummary date={selectedDate} patient={patient} setPatient={setPatient} physician={physician} examination={examination} />
                            </Box>
                        </TabPanel>
                        <TimeslotSelector open={timeslotSelectionDialogOpen} onClose={()=>setTimeslotSelectionDialogOpen(false)}  date={selectedCalendarDate} setDate={setSelectedDate} handleSubmit={handleTimeslotSelect} />
                    </Panel>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CreateAppointment;