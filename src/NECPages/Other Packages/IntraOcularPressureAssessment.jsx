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

function IntraOcularPressureAssessment(){


    return(
        <Box>
            <Container maxWidth="lg">
                 <Grid container spacing={2}>

                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                width: '100%',
                                paddingTop: '15px'
                            }}>


                            <Stack >

                                <Typography variant="h4">Intraocular Pressure (IOP) Assessment</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Uncover the crucial insights into your eye pressure with our Intraocular Pressure (IOP) Assessment. This diagnostic procedure plays a
                                    pivotal role in detecting and managing conditions such as glaucoma, ensuring the longevity of your visual clarity.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>The Intraocular Pressure Assessment, commonly known as tonometry, is a non-invasive and painless test that measures the pressure within
                                    your eyes. This key metric is essential for evaluating the risk of glaucoma, a condition characterized by elevated intraocular pressure that can
                                    lead to optic nerve damage.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Aspects of Intraocular Pressure Assessment</Typography>
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
                                1. Early Glaucoma Detection
                            </Typography>
                            <Typography variant="body1">
                                Elevated intraocular pressure is a significant risk factor for glaucoma. Regular assessments allow for the early detection and management of this sight-threatening condition.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Quick and Painless
                            </Typography>
                            <Typography variant="body1">
                                The assessment is quick, typically taking just a few minutes, and involves minimal discomfort for the patient.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Individualized Eye Care
                            </Typography>
                            <Typography variant="body1">
                                Intraocular pressure readings contribute to a personalized eye care plan, enabling our expert team to tailor interventions based on your unique eye health needs.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Preventive Eye Wellness
                            </Typography>
                            <Typography variant="body1">
                                Regular IOP assessments are a proactive measure to monitor and maintain eye health, preventing potential complications associated with elevated pressure.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>Prioritize the longevity of your vision with the Intraocular Pressure Assessment at Nakpil Eye Clinic. Let us be your partners in preserving the health and clarity of your eyes.</Typography>
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

export default IntraOcularPressureAssessment;


