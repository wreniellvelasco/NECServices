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
import OtherPackageNav from "../OtherPackageNav.jsx";
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


function PerimetryVisFieldTest(){

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

                                <Typography variant="h4">Perimetry or Visual Field Test</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Welcome to Nakpil Eye Clinic, where we prioritize your visual health and clarity. Explore the intricacies of your visual field with our Perimetry test, also commonly referred to as the Visual Field Test.
                                    This advanced diagnostic tool offers invaluable insights into your field of vision, aiding in the early detection and management of various eye conditions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Perimetry, or the Visual Field Test, is a sophisticated diagnostic procedure that assesses your field of vision, providing a comprehensive map of how you perceive and interpret visual information in
                                    your surroundings. This test is instrumental in detecting abnormalities, enabling our expert eye care professionals to create tailored solutions for your visual well-being.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Aspects of Perimetry</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    ml: 'auto',        // push to the right
                                    gap: 1,            // small gap between text & icon
                                }}
                            >
                            </Box>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Early Detection of Eye Conditions
                            </Typography>
                            <Typography variant="body1">
                                Perimetry is a vital tool for identifying early signs of eye conditions such as glaucoma, retinal diseases, and neurological disorders, allowing for prompt intervention and management.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Mapping Visual Sensitivity
                            </Typography>
                            <Typography variant="body1">
                                The procedure maps your visual sensitivity across different areas of your visual field, helping us understand variations in your ability to detect light stimuli.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Customized Treatment Plans
                            </Typography>
                            <Typography variant="body1">
                                The insights gained from Perimetry enable us to develop personalized treatment plans based on the specific characteristics of your visual field, ensuring targeted and effective interventions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Monitoring Progression
                            </Typography>
                            <Typography variant="body1">
                                Examination of peripheral vision to identify any limitations or irregularities.For individuals with known eye conditions, regular Perimetry tests help monitor the progression of the disease
                                and adjust treatment strategies accordingly.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                Why Choose Nakpil Eye Clinic for Perimetry?
                            </Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Expert Eye Care Professionals: Our team consists of a skilled ophthalmologist, optometrists, and technicians with expertise in utilizing Perimetry for accurate diagnostics and personalized care.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Cutting-Edge Technology: Nakpil Eye Clinic invests in the latest Perimetry technology, ensuring precise and detailed assessments of your visual field.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Patient-Centric Approach: We understand the importance of your comfort and understanding during the Perimetry procedure, providing a supportive and informative environment.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Holistic Eye Care: Beyond Perimetry, our clinic offers a comprehensive range of eye care services to address all aspects of your visual health.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>Invest in Your Visual Insight. Embark on a journey to uncover the intricacies of your visual field with Perimetry at Nakpil Eye Clinic. Let us be your partners in preserving and
                                enhancing your visual well-being.</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Discover the full spectrum of your vision at Nakpil Eye Clinic – Your Eye and Vision Specialist.</Typography>
                            <Typography>&nbsp;</Typography>
                        </Box>

                        <Grid item xs={12} sx={{pt: '15px'}}>

                        </Grid>



                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <OtherPackageNav />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>

                    </Grid>
                </Grid>




            </Container>

        </Box>
    )
}

export default PerimetryVisFieldTest;


