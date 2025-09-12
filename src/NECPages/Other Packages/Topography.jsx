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


function Topography(){

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [expanded, setExpanded] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [serviceDetail,setServiceDetail] = useState(
        {
            id : 1,
            title : "Topography",
            description : "Welcome to Nakpil Eye Clinic, where vision meets precision! Our commitment to providing cutting-edge eye care services continues with our advanced Topography test. Designed to map the " +
                "unique landscape of your cornea, this procedure offers a detailed analysis of your eye's surface, enabling our expert optometrists and an ophthalmologist to tailor precise solutions for your visual needs.",
            subtitle : "What is Topography?",
            subdesc : "Topography is a state-of-the-art diagnostic procedure that captures a three-dimensional map of the cornea, the transparent front part of the eye. This comprehensive mapping allows us to understand " +
                "the curvature, shape, and irregularities of the cornea, providing invaluable insights into various eye conditions.",
            subtitle1 : "Key Benefits of Topography procedure",
            keyaspects : [
                {
                    title : "1. Customized Vision Correction",
                    description : "With detailed corneal maps, we can design personalized solutions for vision correction, including customized contact lenses or laser eye surgery.",
                    title1 : "2. Early Detection of Conditions",
                    description1: "Topography aids in the early detection of conditions such as keratoconus, corneal irregularities, and astigmatism, enabling timely intervention and management.",
                    title2 : "3. Enhanced Contact Lens Fitting",
                    description2 : "Achieve optimal comfort and vision with contact lenses tailored to the unique contours of your cornea, minimizing discomfort and maximizing clarity",
                    title3 : "4. Precise Refractive Surgery Planning",
                    description3 : "For those considering refractive surgeries like LASIK, our Topography test ensures accurate surgical planning, resulting in improved outcomes.",
                }
            ],

            title1 : "Why Choose Nakpil Eye Clinic for Topography?",

            whyychoose :  [
                {
                    description : "Expertise: Our team of skilled optometrists and an ophthalmologist specializes in utilizing topography for precise diagnostics and personalized treatment plans.",
                    description1 : "Cutting-Edge Technology: We invest in the latest topography technology to provide accurate and detailed corneal maps for a thorough assessment.",
                    description2 : "Patient-Centric Care: We prioritize your comfort and well-being, ensuring a seamless and informative experience throughout the topography procedure.",
                    description3 : "Comprehensive Eye Care: Beyond topography, our clinic offers a full range of eye care services to address all your visual health needs."
                }

            ],

            recommended : [
                "Test 1",
                "Test 2",
            ],
            mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
            images : [
                "https://placehold.it/1200x600",
                "https://placehold.it/1200x600"
            ],
            price : 3000,

        }
    );


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

                                <Typography variant="h4">{serviceDetail?.title}</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>{serviceDetail?.description}</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">{serviceDetail?.subtitle}</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>{serviceDetail?.subdesc}</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">{serviceDetail?.subtitle1}</Typography>
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
                                1. Accurate Measurements
                            </Typography>
                            <Typography variant="body1">
                                Biometry provides precise measurements of the eye's dimensions, enabling personalized treatment plans for surgeries and interventions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Cataract Surgery Planning
                            </Typography>
                            <Typography variant="body1">
                                For individuals undergoing cataract surgery, Biometry is essential for selecting the appropriate intraocular lens power and ensuring optimal visual outcomes.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. IOL Implantation
                            </Typography>
                            <Typography variant="body1">
                                Biometry aids in the calculation of intraocular lens power for patients receiving artificial lenses, supporting better vision correction after surgery.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Customized Treatment
                            </Typography>
                            <Typography variant="body1">
                                The data obtained through Biometry allows our expert eye care professionals to tailor interventions to each patient's unique eye anatomy.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Experience the precision of Biometry at Nakpil Eye Clinic. Let us guide you towards optimal vision outcomes with personalized and accurate measurements.</Typography>
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

export default Topography;


