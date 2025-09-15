import {Box, Container, Grid, Stack, Button, Typography} from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";


function ExecutiveEyeExam(){

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
                                <Typography variant="h4">Executive Eye Examination</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">Step into a realm of superior eye care with our Executive Eye Examination Package at Nakpil Eye Clinic. Meticulously designed for those seeking unparalleled precision and comprehensive
                                    insights into their eye health, this package is a pinnacle of advanced diagnostics and personalized care.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Inclusions of the Executive Eye Examination Package</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{backgroundColor: '#FFF', p: 2}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Blood Pressure Test
                            </Typography>
                            <Typography variant="body1">
                                Initiate your examination with a thorough assessment of your general health, recognizing the intrinsic link between systemic well-being and ocular health.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Visual Acuity Assessment
                            </Typography>
                            <Typography variant="body1">
                                Evaluate the sharpness and clarity of your vision, addressing any refractive errors that may impact visual acuity.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Eye Motility Assessment
                            </Typography>
                            <Typography variant="body1">
                                Examine the coordination and movement of your eye muscles, ensuring optimal functionality and identifying potential issues
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Comprehensive Dry Eye Assessment
                            </Typography>
                            <Typography variant="body1">
                                Explore your ability to perceive and differentiate colors accurately, providing detailed insights into the health of your color vision.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                5. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                            </Typography>
                            <Typography variant="body1">
                                Dive into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                6. Comprehensive Dry Eye Assessment
                            </Typography>
                            <Typography variant="body1">
                                Identify and address any symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                7. Vision Examination & Correction (Objective / Subjective)
                            </Typography>
                            <Typography variant="body1">
                                Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                8. Digital Sensorimotor Binocular Vision Assessment
                            </Typography>
                            <Typography variant="body1">
                                Assess your ability to use both eyes together effectively, crucial for activities such as reading and sports.
                            </Typography>
                            <Typography>&nbsp;</Typography>
                        </Box>

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
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Opt for the Executive Eye Examination Package at Nakpil Eye Clinic. Let us guide you towards a future with clear, healthy,
                                    and optimized vision.</Typography>

                                <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>Php 4,999.00</Typography>
                                    <Button variant="contained" color="primary" sx={{backgroundColor: '#1976d2'}}>Book an Appointment</Button>
                                </Stack>
                                <Typography variant="body1" sx={{ fontSize: '10px', color: 'gray' }} >Note: Price is subject to change without prior notice.</Typography>
                            </Box>
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

export default ExecutiveEyeExam;


