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



const ExpandableButton = ({
                              title,
                              description,
                              vat,
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
            }}>

            {/* Header with title/description and price badge */}
            <Box sx={{ backgroundColor: "#e3f2fd", width: "500", objectFit: 'contain',

                p: 1,}}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h5" sx={{ color: '#1565c0' }}>{title}</Typography>
                    <Stack direction="column" sx={{ textAlign: "flex-end" }}>
                        <Chip
                            label={price}
                            variant="outlined"
                            sx={{
                                bgcolor: 'rgba(227,242,253,1)',
                                color: 'primary.dark',
                                borderColor: 'rgba(187,222,251,1)',
                            }}
                        />
                        <Typography variant="span" sx={{fontSize: "10px", pt:"1px"}}>{vat}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" >
                    <Typography fontSize="12px" color="text.secondary">
                        {description}
                    </Typography>
                </Stack>
            </Box>

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
    vat: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    tests: PropTypes.arrayOf(PropTypes.string).isRequired,
    recommended: PropTypes.arrayOf(PropTypes.string).isRequired
};

const ExpandableButton2 = ({
                               title,
                               description,
                               keyfeatures,
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
            <Box sx={{ backgroundColor: "#e3f2fd", width: "500", objectFit: 'contain',
                height: 112,

                p: 1,}}>

                <Typography variant="h5" sx={{ color: '#1565c0' }}>{title}</Typography>


                <Stack direction="row" >
                    <Typography fontSize="12px" color="text.secondary">
                        {description}
                    </Typography>
                </Stack>
            </Box>
            {/*


             <CardHeader
                sx={{ bgcolor: 'rgba(227,242,253,1)', pb: 2}}
                title={
                    <Box sx={{height: { lg: 140 }}}>
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
            */}

            {/* Content: optionally show tests and recommended lists */}
            <CardContent sx={{ pt: 1 }}>
                <Box display="flex" alignItems="center" color="text.secondary" mb={2}>
                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                </Box>

                {expanded && (
                    <Box>
                        <Typography variant="subtitle2" color="primary.dark" gutterBottom>
                            Key Features
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {keyfeatures?.map((keyfeatures, idx) => (
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
                                        {keyfeatures}
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

                        </Typography>

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

ExpandableButton2.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    keyfeatures: PropTypes.arrayOf(PropTypes.string).isRequired
};


function VisPerfAssessment(){

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
            vat: 'inclusive of VAT',
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
            vat: 'inclusive of VAT',
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
            vat: 'inclusive of VAT',
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
            vat: 'inclusive of VAT',
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
            vat: 'inclusive of VAT',
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
            vat: 'inclusive of VAT',
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
            title: 'Visual Performance Assessment',
            description:
                'Unlock your full visual potential with our cutting-edge performance assessment.',
            keyfeatures: [
                'Visual Acuity Test',
                'Color Vision Test',
                'Eye Pressure Test',
                'Refraction Assessment'
            ],


        },
        {
            title: 'Biometry',
            description:
                'Our advanced biometry techniques unlock personalized IOL solutions for crystal-clear eyesight.',
            keyfeatures: [
                'Accurate Measurements',
                'Cataract Surgery Planning',
                'IOL Implantation',
                'Customized Treatment'
            ],

        },
        {
            title: 'Fundus Scan with AirDoc',
            description:
                'Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.',
            keyfeatures: [
                'AI-Enhanced Analysis',
                'Precision Diagnostics',
                'Efficient Screening',
                'Personalized Care'
            ],

        },
        {
            title: 'Fundus Scan with Kanghua',
            description:
                'Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.',

        },
        {
            title: 'Foreign Bodies Removal',
            description:
                'Designed to provide swift relief, ensuring your eyes stay clear, comfortable, and healthy.',
            keyfeatures: [
                'Prompt Intervention',
                'Specialized Tools and Techniques',
                'Comprehensive Eye Examination',
                'Patient Education'
            ],

        },
        {
            title: 'Ishihara Color Vision Test',
            description:
                'Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!',
            keyfeatures: [
                'Identifying Color Deficiencies',
                'Quick and Painless',
                'Diagnostic Accuracy',
                'Treatment Planning',
            ],

        },
        {
            title: 'Ishihara with Farnsworth',
            description:
                'Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!',
            keyfeatures: [
                'Precise Color Deficiency Identification',
                'Quick and Efficient',
                'Tailored Recommendations',
                'Comprehensive Vision Wellness',
            ],

        },
        {
            title: 'Perimetry / Visual Field Test',
            description:
                'Our advanced visual field tests reveal hidden insights, guiding personalized eye care for a brighter outlook.',
            keyfeatures: [
                'Early Detection of Eye Conditions',
                'Mapping Visual Sensitivity',
                'Customized Treatment Plans',
                'Monitoring Progression'
            ],

        },
        {
            title: 'Intra Ocular Pressure Assessment',
            description:
                'Personalized eye care, ensuring a healthy optic nerve and clear vision.',
            keyfeatures: [
                'Early Glaucoma Detection',
                'Quick and Painless',
                'Individualized Eye Care',
                'Preventive Eye Wellness'
            ],

        },
        {
            title: 'OrthoKeratology Lens',
            description:
                'Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!',
            keyfeatures: [
                'Vision Correction Without Surgery: Ortho-K provides a non-invasive option for vision correction, eliminating the need for surgical procedures like LASIK.',
                'Myopia Control: Orthokeratology has been proven effective in slowing down the progression of myopia (nearsightedness) in children and young adults.',
            ],

        },
        {
            title: 'OrthoKeratology Lens Fitting',
            description:
                'Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!',
            keyfeatures: [
                'Comprehensive Eye Examination',
                'Custom Lens Design',
                'Fitting and Adjustment Sessions',
                'Individualized Treatment Plan'
            ],

        },
        {
            title: 'Cycloplegic Eyedrops',
            description:
                'Unlock clarity with Cycloplegic Eyedrops, illuminating your vision with unparalleled precision and focus.',
            keyfeatures: [
                'Maximum Accuracy',
                'Ideal for All Ages',
                'Comprehensive Eye Examination',
                'Tailored Prescription',
            ],

        },
        {
            title: 'Topography',
            description:
                'Unveil the intricate landscapes of your eyes for unrivaled clarity and insight into your vision\'s extraordinary terrain.',
            keyfeatures: [
                'Customized Vision Correction',
                'Early Detection of Conditions',
                'Enhanced Contact Lens Fitting',
                'Precise Refractive Surgery Planning'
            ],

        },
        {
            title: 'Vision Therapy',
            description:
                'Transform your vision into its fullest potential with the dynamic journey of Vision Therapy.',
            keyfeatures: [
                'Visual Rehabilitation',
                'Sports Vision Enhancement',
                'Reading and Learning Enhancement',
                'Computer Vision Syndrome (CVS) Management'
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

                                <Typography variant="h4">Visual Performance Assessment (VPA)</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>At Nakpil Eye Clinic, we believe that optimal visual performance is the cornerstone of a vibrant and successful life. Our Visual Performance
                                    Assessment (VPA) is meticulously designed to evaluate and enhance the efficiency and precision of your visual system. Whether you're an athlete
                                    aiming for peak sports performance, a professional seeking to reduce eye strain, or someone wanting to unlock the full potential of your visual
                                    abilities, our comprehensive assessments provide valuable insights and tailored solutions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our Visual Performance Assessment goes beyond routine eye exams. We utilize state-of-the-art diagnostic tools and a holistic approach to
                                    evaluate various aspects of visual function. Our team of experienced optometrists and visual performance specialists collaborates to provide a
                                    detailed analysis, offering personalized recommendations to optimize your visual performance.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Assessment Areas</Typography>
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
                                        Key Assessment Areas
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: 'auto',        // push to the right
                                            gap: 1,            // small gap between text & icon
                                        }}
                                    >
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Visual Acuity and Refraction
                                    </Typography>
                                    <Typography variant="body1">
                                        Precise measurement of visual acuity and refractive error to ensure optimal clarity and focus.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. Eye Tracking and Coordination
                                    </Typography>
                                    <Typography variant="body1">
                                        Evaluation of eye movement coordination, tracking, and convergence to assess overall eye teaming skills.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Depth Perception
                                    </Typography>
                                    <Typography variant="body1">
                                        Assessment of the ability to perceive depth accurately, crucial for activities such as sports and driving.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Peripheral Vision
                                    </Typography>
                                    <Typography variant="body1">
                                        Examination of peripheral vision to identify any limitations or irregularities.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Visual Processing Speed
                                    </Typography>
                                    <Typography variant="body1">
                                        Analysis of how quickly and accurately visual information is processed, a vital aspect for cognitive and academic performance.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>




                                    <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                        Why Choose Nakpil Eye Clinic for Visual Performance Assessment?
                                    </Typography>
                                    <Typography>&nbsp;</Typography>
                                    <Typography>&nbsp;</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        - Specialized Expertise - Our team comprises skilled optometrists trained by Dr. John Nakpil, and clinical technicians with a focus on enhancing visual function.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        - Cutting-Edge Technology - We employ advanced diagnostic tools and technology to provide accurate and comprehensive assessments.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        - Customized Recommendations - Based on the assessment results, we develop personalized recommendations and interventions to address specific visual performance needs.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        - Holistic Vision Care - We understand that visual performance is interconnected with overall well-being. Our approach considers lifestyle factors, occupational demands, and individual goals.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography>Invest in Your Visual Excellence Today! Unleash the power of your vision with Nakpil Eye Clinic’s Visual Performance Assessment. Whether you're
                                        seeking improvements for sports, work, or daily activities, our assessments pave the way for a clearer and more efficient visual experience.</Typography>

                                    <Typography>&nbsp;</Typography>
                                    <Typography>Elevate your visual potential with Nakpil Eye Clinic – Your Eye and Vision Specialist.</Typography>
                                    <Typography>&nbsp;</Typography>

                                </AccordionDetails>
                            </Accordion>

                        </Container>



                        <Grid item xs={12} sx={{pt: '15px'}}>

                        </Grid>



                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <Box
                            sx={{
                                backgroundColor: '#FFF',
                                borderRadius: '10px',
                                objectFit: 'contain',
                                mr: 'auto',
                                p: 2 ,
                            }}
                        >
                            <Typography variant="h5"
                                        sx={{  marginBottom: '15px',
                                            fontWeight: 'bold', }}>
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

                    <Grid item xs={12} sx={{mt: '15px'}}>
                        <Box
                            sx={{
                                borderRadius: '10px',
                                backgroundColor: '#FFF',
                                objectFit: 'contain',
                                mr: 'auto',
                                p: 2,}}>
                            <Typography variant="h5"
                                        sx={{  marginBottom: '15px',
                                            fontWeight: 'bold', }}>Other Packages</Typography>



                            <Grid container spacing={2}>
                                {serviceList1?.map((svc, idx) => (
                                    <Grid item xs={12} sm={6} md={4} key={idx}>
                                        <ExpandableButton2 {...svc}
                                                           keyfeatures={svc.keyfeatures || []}
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

export default VisPerfAssessment;


