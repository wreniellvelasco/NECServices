import {Box, Container, Grid, Stack, Button, Tabs, Tab, Typography, Card, CardHeader, Chip, CardContent, CardActions, Accordion, AccordionDetails, AccordionSummary
} from '@mui/material';
{/*import logo from "../assets/logo.png";*/}

import * as React from "react";
import PropTypes from "prop-types";
import {useState} from "react";
import {ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    Check as CheckIcon,
    CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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

const ExpandableButton = ({
                              title,
                              description,
                              price,
                              tests,
                              recommended
                          }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            sx={{
                borderRadius: '10px',
                width: '100%',
                bgcolor: 'common.white',
                boxShadow: 1,
                '&:hover': { boxShadow: 4 },
                overflow: 'hidden'
            }}
        >
            {/* Header with title/description and price badge */}
            <CardHeader
                sx={{ bgcolor: 'rgba(227,242,253,1)', pb: 2 }}
                title={
                    <Box sx={{height: {   lg: 160 }}}>
                        <Typography variant="h6" color="primary.dark">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            {description}
                        </Typography>
                    </Box>
                }
                action={
                    <Chip
                        label={price}
                        variant="outlined"
                        sx={{
                            bgcolor: 'rgba(227,242,253,1)',
                            color: 'primary.dark',
                            borderColor: 'rgba(187,222,251,1)',
                            px: 1,
                            py: 0.5
                        }}
                    />
                }
            />

            {/* Content: optionally show tests and recommended lists */}
            <CardContent sx={{ pt: 1 }}>
                <Box display="flex" alignItems="center" color="text.secondary" mb={2}>
                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                </Box>

                {expanded && (
                    <Box>
                        <Typography variant="subtitle2" color="primary.dark" gutterBottom>
                            Included Tests
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {tests?.map((tests, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        color="success"
                                        sx={{ mr: 1, mt: '2px' }}
                                    />
                                    <Typography variant="body2" color="text.primary">
                                        {tests}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography
                            variant="subtitle2"
                            color="primary.dark"
                            gutterBottom
                            mt={2}
                        >
                            Recommended For
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {recommended?.map((item, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        color="success"
                                        sx={{ mr: 1, mt: '2px' }}
                                    />
                                    <Typography variant="body2" color="text.primary">
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
            </CardContent>

            {/* Actions: expand/collapse and any other buttons */}
            <CardActions sx={{ flexDirection: 'column', gap: 1, p: 2, pt: 0 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </Button>

                <Button variant="contained" color="primary" fullWidth>
                    See Full Details
                </Button>
            </CardActions>
        </Card>
    );
};

ExpandableButton.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    tests: PropTypes.arrayOf(PropTypes.string).isRequired,
    recommended: PropTypes.arrayOf(PropTypes.string).isRequired
};

const ExpandableButton2 = ({
                               title,
                               description,
                               price,
                               tests,
                               recommended
                           }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            sx={{
                borderRadius: '10px',
                width: '100%',
                bgcolor: 'common.white',
                boxShadow: 1,
                '&:hover': { boxShadow: 4 },
                overflow: 'hidden'
            }}
        >
            {/* Header with title/description and price badge */}
            <CardHeader
                sx={{ bgcolor: 'rgba(227,242,253,1)', pb: 2 }}
                title={
                    <Box sx={{height: {   lg: 160 }}}>
                        <Typography variant="h6" color="primary.dark">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            {description}
                        </Typography>
                    </Box>
                }
                action={
                    <Chip
                        label={price}
                        variant="outlined"
                        sx={{
                            bgcolor: 'rgba(227,242,253,1)',
                            color: 'primary.dark',
                            borderColor: 'rgba(187,222,251,1)',
                            px: 1,
                            py: 0.5
                        }}
                    />
                }
            />

            {/* Content: optionally show tests and recommended lists */}
            <CardContent sx={{ pt: 1 }}>
                <Box display="flex" alignItems="center" color="text.secondary" mb={2}>
                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                </Box>

                {expanded && (
                    <Box>
                        <Typography variant="subtitle2" color="primary.dark" gutterBottom>
                            Included Tests
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {tests?.map((tests, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        color="success"
                                        sx={{ mr: 1, mt: '2px' }}
                                    />
                                    <Typography variant="body2" color="text.primary">
                                        {tests}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography
                            variant="subtitle2"
                            color="primary.dark"
                            gutterBottom
                            mt={2}
                        >
                            Recommended For
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {recommended?.map((item, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        color="success"
                                        sx={{ mr: 1, mt: '2px' }}
                                    />
                                    <Typography variant="body2" color="text.primary">
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
            </CardContent>

            {/* Actions: expand/collapse and any other buttons */}
            <CardActions sx={{ flexDirection: 'column', gap: 1, p: 2, pt: 0 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </Button>

                <Button variant="contained" color="primary" fullWidth>
                    Schedule Appointment
                </Button>
            </CardActions>
        </Card>
    );
};

ExpandableButton2.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    tests: PropTypes.arrayOf(PropTypes.string).isRequired,
    recommended: PropTypes.arrayOf(PropTypes.string).isRequired
};





function CorpEyeCareProg(){

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [expanded, setExpanded] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const [serviceList, ] = useState([
        {
            title: 'Standard Eye Examination',
            description:
                'A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.',
            price: 'Php 999.00',
            tests: [
                'Visual Acuity Test',
                'Color Vision Test',
                'Eye Pressure Test',
                'Refraction Assessment'
            ],
            recommended: [
                'Annual check-ups',
                'Vision prescription updates',
                'General eye health monitoring'
            ]
        },
        {
            title: 'Premium Eye Examination',
            description:
                'Elevate your eye care experience with this all-inclusive package, ensuring a thorough understanding of your visual well-being.',
            price: 'Php 1,499.00',
            tests: [
                'Blood Pressure Test',
                'Visual Acuity Test',
            ],
            recommended: [
                'Patients over 40',
                'Family history of eye disease',
                'Existing eye conditions',
                'Diabetes or hypertension patients'
            ]
        },
        {
            title: 'Pediatric Eye Examination',
            description:
                'The gentle care and precision required for pediatric eye health, providing a thorough understanding of your child\'s visual well-being.',
            price: 'Php 1,499.00',
            tests: [
                'All Comprehensive Exam Tests',
                'Glaucoma Screening',
                'Macular Degeneration Assessment',
                'Diabetic Retinopathy Evaluation',
                'Dry Eye Analysis' //
            ],
            recommended: [
                'Glaucoma patients or suspects',
                'Macular degeneration patients',
                'Chronic dry eye sufferers',
                'Diabetes or hypertension patients',
                'Post-surgical follow-ups'
            ]
        },
        {
            title: 'Follow-Up Eye Examination',
            description:
                'Designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.',
            price: 'Php 500.00',
            tests: [
                //
            ],
            recommended: [
                'Eye Management',
                'Treatment Planning'

            ]
        },
        {
            title: 'Executive Eye Examination',
            description:
                'Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care',
            price: 'Php 4,999.00',
            tests: [
                'Blood Pressure Test',
                'Eye Motility Assessment',
                'Comprehensive Dry Eye Assessment', //
            ],
            recommended: [
                'Diabetes Management',
                'Family History of Eye Conditions',
                'Vision Changes'
            ]
        },
        {
            title: 'Executive Plus Eye Examination',
            description:
                'Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.',
            price: 'Php 5,999.00',
            tests: [
                'Blood Pressure Test',
                'Visual Acuity Assessment',
                'Comprehensive Ishihara Color Vision Test', //
            ],
            recommended: [
                'Older adults - As the risk for eye diseases increases with age, a detailed exam is crucial.',
                'People seeking proactive health management',
            ]
        },
        {
            title: 'Corporate Eye Care Program',
            description:
                'A Comprehensive eye examination package for your company or organizations.',
            price: '',

        },
    ]);


    const [serviceList1, ] = useState([

        {
            title: 'Executive Eye Examination',
            description:
                'Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care',
            price: 'Php 4,999.00',
            tests: [
                'Blood Pressure Test',
                'Eye Motility Assessment',
                'Comprehensive Dry Eye Assessment', //
            ],
            recommended: [
                'Diabetes Management',
                'Family History of Eye Conditions',
                'Vision Changes'
            ]
        },
        {
            title: 'Executive Plus Eye Examination',
            description:
                'Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.',
            price: 'Php 5,999.00',
            tests: [
                'Blood Pressure Test',
                'Visual Acuity Assessment',
                'Comprehensive Ishihara Color Vision Test', //
            ],
            recommended: [
                'Older adults - As the risk for eye diseases increases with age, a detailed exam is crucial.',
                'People seeking proactive health management',
            ]
        },

        // … this code can push more services here dynamically
    ]);


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

                <Grid container spacing={2}>

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

                        </Container>



                        <Grid item xs={12} sx={{pt: '15px'}}>
                            <Box
                                direction="row"
                                spacing ={2}
                                sx={{
                                    borderRadius: '10px',
                                    backgroundColor: '#daebfe',
                                    height: '100%',
                                    objectFit: 'contain',
                                    mr: 'auto',
                                    p: 2,
                                    mb: '15px',
                                    justifyContent: 'space-between' }}>
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Embark on a journey to optimal eye health with the Standard Eye Examination Package at
                                    Nakpil Eye Clinic. Let us guide you towards clarity, ensuring your eyes receive the meticulous care they deserve.</Typography>

                                <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>Php 999.00</Typography>
                                    <Button variant="contained" color="primary">Book an Appointment</Button>
                                </Stack>
                                <Typography variant="body1" sx={{ fontSize: '10px', color: 'gray' }} >Note: Price is subject to change without prior notice.</Typography>

                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{pt: '15px', bgcolor: '#FFF', borderRadius: '10px', p: 2,}}>
                            <Grid container spacing={2}>
                                {serviceList1?.map((svc, idx) => (
                                    <Grid item xs={12}  md={6} key={idx}>
                                        <ExpandableButton2 {...svc}
                                                           tests={svc.tests || []}
                                                           recommended={svc.recommended || []}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <Box
                            sx={{
                                backgroundColor: '#FFF',
                                borderRadius: 2,
                                p: 2,
                                height: '99%',
                                display: 'flex',
                                flexDirection: 'column' ,
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" sx={{p: 1}}>
                                Examination Packages
                            </Typography>

                            {/* inner box grows to fill all remaining space */}

                            <Grid container spacing={2}>
                                {serviceList?.map((svc, idx) => (
                                    <Grid item xs={12}  key={idx}>
                                        <ExpandableButton {...svc}
                                                          tests={svc.tests || []}
                                                          recommended={svc.recommended || []}
                                        />
                                    </Grid>
                                ))}
                            </Grid>



                        </Box>
                    </Grid>





                </Grid>




            </Container>

        </Box>
    )
}

export default CorpEyeCareProg;


