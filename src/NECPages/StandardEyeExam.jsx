import {Box, Container, Grid, Stack, Button, Tabs, Tab, Typography, Card, CardHeader, Chip, CardContent, CardActions, Accordion, AccordionDetails, AccordionSummary
} from '@mui/material';
import logo from "../assets/logo.png";

import * as React from "react";
import PropTypes from "prop-types";
import {useState} from "react";
import {ExpandMore as ExpandMoreIcon,
        ExpandLess as ExpandLessIcon,
        Check as CheckIcon,
        CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney.js";


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





function StandardEyeExam(){

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

                                    {['Eye Examination', 'Vision Correction', 'Eye Conditions', 'Eyewear'].map(
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

                <Grid container spacing={1}>

                    <Grid item xs={12} md={8}>
                      <Box
                            sx={{
                                width: '100%',
                                paddingTop: '15px'
                            }}>


                        <Stack >

                          <Typography variant="h4">Standard Eye Examination</Typography>
                          <Typography>&nbsp;</Typography>
                          <Typography variant="h6">Our Standard Eye Examination Package is a comprehensive suite of procedures medically curated to ensure a thorough assessment of your eye health. This all-encompassing package is designed to provide a complete understanding of your visual well-being.</Typography>

                          <Typography>&nbsp;</Typography>
                          <Typography>&nbsp;</Typography>
                          <Typography>&nbsp;</Typography>

                          <Typography variant="h5">Inclusions of the Standard Eye Examination Package</Typography>
                          <Typography>&nbsp;</Typography>
                        </Stack>
                      </Box>
                    </Grid>


                    <Grid item xs={12} md={8}>
                        <Container maxWidth={false} sx={{maxWidth: '750px'}}>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{justifyContent: 'space-between', alignItems: 'center'}}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', color:'#698bd1'  }}>
                                        Standard Eye Examination
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: 'auto',        // push to the right
                                            gap: 1,            // small gap between text & icon
                                        }}
                                    >

                                        <Typography sx={{ color: '#fe8d0e', fontWeight: 'bold' }}>Php 999.00</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Visual Acuity Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Evaluate the sharpness and clarity of your childs vision, identifying any potential refractive errors that may affect visual acuity.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. Eye Motility Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Examine the coordination and movement of your childs eye muscles, ensuring optimal functionality and identifying any issues.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Color Vision Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Explore your childs ability to perceive and differentiate colors accurately, assessing the health of their color vision.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography variant="body1">
                                        Delve into the intricate details of your childs eye structures through advanced tools, allowing for a comprehensive physical examination.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Standard Dry Eye Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Identify and address any symptoms of dry eye syndrome your child may be experiencing, ensuring their eyes remain comfortable and well-lubricated.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Binocular Vision Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Assess your childs ability to use both eyes together effectively, crucial for activities like reading and sports.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Suppression Test
                                    </Typography>
                                    <Typography variant="body1">
                                        Evaluate the suppression of one eye in binocular vision, identifying any issues that may affect depth perception.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography variant="body1">
                                        Tailor your childs vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Automated Keratometry (As Necessary)
                                    </Typography>
                                    <Typography variant="body1">
                                        Utilize advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>



                                    <Button variant="contained"
                                            endIcon={<KeyboardArrowRightIcon/>}
                                            sx={{backgroundColor: '#698bd1', color: 'white', fontWeight: 'bold'}}>
                                        Book This Service
                                    </Button>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Premium Eye Examination</Typography>
                                    <Box sx={{display: 'flex',
                                        alignItems: 'center',
                                        ml: 'auto',
                                        gap: 1}}>
                                        <Typography sx={{ color: 'text.secondary' }}>Php 1,499.00</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Blood Pressure Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Blood Pressure Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Eye Motility Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Basic Color Vision Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Comprehensive Dry Eye Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Cataract Screening
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Glaucoma Screening VH Test with Tonometry IOP Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        10. Automated Keratometry (As Necessary)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Button variant="contained"
                                            sx={{backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold'}}>
                                        View More
                                    </Button>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Pediatric Eye Examination
                                    </Typography>
                                    <Box sx={{display: 'flex',
                                        alignItems: 'center',
                                        ml: 'auto',
                                        gap: 1}}>
                                        <Typography sx={{ color: 'text.secondary' }}>Php 1,499.00</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Visual Acuity Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. Eye Motility Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Color Vision Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Standard Dry Eye Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Binocular Vision Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Suppression Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Automated Keratometry (As Necessary)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Button variant="contained"
                                            sx={{backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold'}}>
                                        View More
                                    </Button>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Container>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{backgroundColor: '#FFF', borderRadius: '10px', p: 2
                            , height: '100%'}}>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}}>Examination Packages</Typography>

                            <Box border={2} borderColor="grey.300" borderRadius={1} sx={{boxShadow: '40px', height: '`10%'}}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    sx={{ p: 2, height: 100, bgcolor: 'background.paper' }}>

                                    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
                                        {/* Content for box 1 */}
                                        <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                            <Typography variant="subtitile2" sx={{color : "black", fontWeight: 'bold'}}>Premium Eye Examination</Typography>
                                            <Typography variant="subtitile2" sx={{ color: "black", fontWeight: 'bold' }}>Php 1,499.00</Typography>
                                        </Stack>

                                        <Typography variant="body1" sx={{textAlign: 'right', fontSize:'12px'}}>Inclusive VAT</Typography>

                                        <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 1}}>

                                            <Typography variant="span" sx={{ }}>Elevate your eye care experience with this all-inclusive package, ensuring a thorough understanding of your visual well-being.</Typography>

                                        </Stack>
                                        <Stack direction="column" spacing={1}>
                                            <Typography>&nbsp;</Typography>
                                            <Typography variant="span" sx={{color : "black", fontWeight: 'bold', marginTop: 1}}>Included Tests</Typography>
                                            <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>Blood Pressure Test</Typography>
                                            <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>Visual Acuity Test</Typography>
                                        </Stack>

                                    </Stack>
                                </Stack>
                            </Box>


                        </Box>
                    </Grid>
                </Grid>




            </Container>

        </Box>
    )
}

export default StandardEyeExam;


