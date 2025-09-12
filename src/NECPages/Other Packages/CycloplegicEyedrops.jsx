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


function CycloplegicEyedrops(){

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
            title : "Cycloplegic Refraction",
            description : "Our Cycloplegic Refraction service is designed to provide a comprehensive and precise assessment of your refractive error, ensuring that your prescription is determined with the utmost accuracy.",

            subdesc : "Cycloplegic Refraction is an advanced eye examination technique that involves using specialized eye drops to temporarily paralyze the muscles within the eye, particularly the ciliary muscle. By " +
                "doing so, we achieve maximum relaxation of the eye's focusing mechanism, allowing for a more accurate measurement of your refractive error.",
            subtitle1 : "Key Features of Cycloplegic Refraction",
            keyaspects : [
                {
                    title : "1. Maximum Accuracy",
                    description : "By temporarily suspending the eye's natural focusing ability, Cycloplegic Refraction provides an accurate and reliable measurement of your refractive error.",
                    title1 : "2. Ideal for All Ages",
                    description1: "Particularly beneficial for children and young adults, Cycloplegic Refraction ensures accurate prescription determination, crucial for eye development and addressing potential vision issues.",
                    title2 : "3. Comprehensive Eye Examination",
                    description2 : "Beyond refractive error assessment, Cycloplegic Refraction allows for a thorough examination of the overall health of the eyes, aiding in the early detection of potential eye conditions.",
                    title3 : "4. Tailored Prescription",
                    description3 : "The precise measurements obtained through this technique enable us to craft a customized prescription, optimizing your visual clarity.",

                    subdescription : "Experience the precision of Cycloplegic Refraction at Nakpil Eye Clinic. Let us guide you towards clear and accurate vision, ensuring your eyes receive the meticulous care they deserve."
                }
            ]


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
                                {serviceDetail?.keyaspects[0]?.title}
                            </Typography>
                            <Typography variant="body1">
                                {serviceDetail?.keyaspects[0]?.description}
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                {serviceDetail?.keyaspects[0]?.title1}
                            </Typography>
                            <Typography variant="body1">
                                {serviceDetail?.keyaspects[0]?.description1}
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                {serviceDetail?.keyaspects[0]?.title2}
                            </Typography>
                            <Typography variant="body1">
                                {serviceDetail?.keyaspects[0]?.description2}
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                {serviceDetail?.keyaspects[0]?.title3}
                            </Typography>
                            <Typography variant="body1">
                                {serviceDetail?.keyaspects[0]?.description3}
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>{serviceDetail?.keyaspects[0]?.subdescription}</Typography>
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

export default CycloplegicEyedrops;


