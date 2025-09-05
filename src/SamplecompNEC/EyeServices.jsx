import  { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Typography,
    Chip
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    Check as CheckIcon,
    CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';

//
// 1) ExpandableButton merges your expand‐collapse logic with PropTypes
//
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
                    <Box sx={{height: {   lg: 100 }}}>
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
                            {tests?.map((test, idx) => (
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
                                        {test}
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
            <CardHeader
                sx={{ bgcolor: 'rgba(227,242,253,1)', pb: 2}}
                title={
                    <Box sx={{height: { lg: 100 }}}>
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
    keyfeatures: PropTypes.arrayOf(PropTypes.string).isRequired
};



//
// 2) ServiceCardsGrid holds your dynamic list in state and renders
//
export default function ServiceCardsGrid() {
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
        // … this code can push more services here dynamically
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



    ]);





    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {serviceList?.map((svc, idx) => (
                                <Grid item xs={12} sm={6} key={idx}>
                                    <ExpandableButton {...svc} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            direction="row"
                            spacing ={2}
                            sx={{
                                p: 1,
                                justifyContent: 'space-between' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold',  marginBottom: '15px' }}>Other Services</Typography>

                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {serviceList1?.map((svc, idx) => (
                                <Grid item xs={12} sm={4} key={idx}>
                                    <ExpandableButton2 {...svc} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}