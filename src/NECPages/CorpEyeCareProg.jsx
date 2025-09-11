import {Box, Container, Grid, Stack, Button, Tabs, Tab, Typography, Card, CardHeader, Chip, CardContent, CardActions, Accordion,
    AccordionDetails, AccordionSummary} from '@mui/material';
{/*import logo from "../assets/logo.png";*/}
import * as React from "react";
import PropTypes from "prop-types";
import {useState} from "react";
import {ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    Check as CheckIcon,
    CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import ExamPackageNav from "./ExamPackageNav.jsx";
{/* import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; */}
{/*import AttachMoneyIcon from "@mui/icons-material/AttachMoney.js"; */}
{/*import AttachMoneyIcon from "@mui/icons-material/AttachMoney.js"; */}


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
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


function CorpEyeCareProg(){

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [expanded, setExpanded] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>

                    {/*<Grid item xs={12}>
                         <Stack
                            direction="row"
                            spacing ={2}
                            sx={{

                                justifyContent: 'space-between',
                                p: 1,
                                alignItems: 'center',
                                backgroundColor: '#FFF',
                                boxShadow: 1,
                                borderRadius: '10px'
                            }}>


                            <Box
                                component="img"
                                src={logo}
                                alt="My Logo"
                                sx={{
                                    width: 100,
                                    height: 100,
                                }}
                            />


                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'left',
                                    space: 6,
                                    gap: 2, p:1              // space between icons
                                }}
                            >
                                <Button>Home</Button>
                                <Button>Booking</Button>
                                <Button>Services</Button>
                                <Button>Eye & Vision Care</Button>
                                <Button>About Us</Button>


                            </Box>
                        </Stack>
                    </Grid>*/}

                    <Grid item xs={12}>
                        <Box
                            sx={{
                                width: '100%',
                                backgroundColor: '#FFF',
                                borderRadius: '0 0 10px 10px',
                            }}>

                            <Box
                                sx={{
                                    borderBottom: 1,
                                    borderColor: 'divider',
                                    display: 'flex',
                                    justifyContent: 'left',
                                    pt: 1,
                                }}>

                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="interactive tabs" sx={{color: '#FFF'}}>

                                    {['1. Eye Examination', '2. Vision Correction', '3. Eye Conditions', '4. Eyewear'].map(
                                        (label, idx) => (
                                            <Tab
                                                key={idx}
                                                label={label}
                                                sx={{
                                                    mx: 1,
                                                    minWidth: 100,
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                                                        bgcolor: '#f0f0f0',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    '&.Mui-selected': {
                                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                                        borderRadius: '8px 8px 0 0',
                                                        mt: '-4px',
                                                        bgcolor: '#fff',
                                                    },
                                                }}
                                                {...a11yProps(idx)}
                                            />
                                        )
                                    )}
                                </Tabs>
                            </Box>

                            {/* Eye Examination TabPanel with Table */}
                            <CustomTabPanel value={value} index={0}>
                                <Typography variant="h5">Eye Examination</Typography>
                                <Typography>Our comprehensive eye examination services are designed to assess your eye health and vision with precision and care.</Typography>

                            </CustomTabPanel>

                            {/* Vision Corrction TabPanel (placeholder) */}
                            <CustomTabPanel value={value} index={1}>
                                <Typography variant="h5">Vision Correction Options</Typography>
                                <Typography>Explore our range of vision correction solutions tailored to your specific needs and lifestyle.</Typography>

                            </CustomTabPanel>

                            {/* Eye Corrections Items TabPanel */}
                            <CustomTabPanel value={value} index={2}>
                                <Typography variant="h5">Eye Condition Treatments</Typography>
                                <Typography>Learn about our specialized treatments for various eye conditions and disorders.</Typography>

                            </CustomTabPanel>

                            {/* Eyewear TabPanel */}
                            <CustomTabPanel value={value} index={3}>
                                <Typography variant="h5">Eyewear Collection</Typography>
                                <Typography>Browse our selection of quality frames, lenses, and accessories to complement your vision needs and style.</Typography>
                            </CustomTabPanel>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                width: '100%',
                                paddingTop: '15px'
                            }}>


                            <Stack >

                                <Typography variant="h4">Corporate Eye Care Program</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Nakpil Eye Clinic has been known to provide excellent eye and vision care for many years. And now through our Corporate Eye Care program we can bring the same excellent service to your company on your next annual eye examination. We use the latest
                                    technology to provide state of the art eye examinations and specialist services to ensure that your employees and staffs will receive the best eye-care. In addition, we can also conduct workstation assessment and provide necessary advice for them to have the safest,
                                    the healthiest, and the most visually effective working conditions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our corporate scheme enables companies to fulfill their health and safety obligations for VDU users and other workers with minimal administration work and expenditure and provides employees with large discounts on our products and services.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Inclusions of the Corporate Eye Care Program</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>




                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>


                                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', color:'#698bd1',}}>
                                        Corporate Eye Care Program
                                    </Typography>
                                    <Box
                                        sx={{
                                            backgroundColor: '#FFF',
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: 'auto',        // push to the right
                                            gap: 1, // small gap between text & icon
                                        }}
                                    >
                                    </Box>


                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Blood Pressure Test
                                    </Typography>
                                    <Typography variant="body1">
                                        Begin with a foundational assessment of your general health through a blood pressure test, recognizing the interconnectedness of systemic health and ocular well-being.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. Visual Acuity Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Measure the sharpness and clarity of your vision, identifying any refractive errors that may affect your visual acuity.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Eye Motility Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Evaluate the coordination and movement of your eye muscles, ensuring optimal functionality and identifying potential issues.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Basic Color Vision Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Explore your ability to perceive and differentiate colors accurately, assessing the health of your color vision.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography variant="body1">
                                        Delve into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Standard Dry Eye Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Identify and address symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Cataract Screening
                                    </Typography>
                                    <Typography variant="body1">
                                        Screen for early signs of cataracts, facilitating timely intervention and preserving your visual clarity.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Glaucoma Screening VH Test
                                    </Typography>
                                    <Typography variant="body1">
                                        Detects potential indicators of glaucoma through a comprehensive screening, emphasizing the importance of early diagnosis and management.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography variant="body1">
                                        Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                        Additional Tests offered on Corporate rates (In clinic tests):
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Corneal Topography
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. IOP Tonometry (Eye pressure test)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Fundus Imaging Scant
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. OCT Optical Coherence Tomography
                                    </Typography>
                                    <Typography>&nbsp;</Typography>
                        </Box>

                        <Grid item xs={12} sx={{pt: '15px'}}>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <ExamPackageNav />
                    </Grid>


                </Grid>




            </Container>

        </Box>
    )
}

export default CorpEyeCareProg;


