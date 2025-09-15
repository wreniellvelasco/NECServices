import {Box, Container, Grid, Stack, Button, Typography} from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";


function PediatricEyeExam(){

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

                            <Stack>
                                <Typography variant="h4">Pediatric Eye Examination</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">Our Pediatric Eye Examination Package with Cycloplegic Refraction is thoughtfully designed to ensure a comprehensive assessment of your child's vision. We prioritize the gentle care and
                                    precision required for pediatric eye health, providing a thorough understanding of your child's visual well-being.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Inclusions of the Pediatric Eye Examination Package</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{backgroundColor: '#FFF', padding: '15px'}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Visual Acuity Assessment
                            </Typography>
                            <Typography variant="body1">
                                Evaluate the sharpness and clarity of your child's vision, identifying any potential refractive errors that may affect visual acuity.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Eye Motility Assessment
                            </Typography>
                            <Typography variant="body1">
                                Examine the coordination and movement of your child's eye muscles, ensuring optimal functionality and identifying any issues.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Color Vision Assessment
                            </Typography>
                            <Typography variant="body1">
                                Explore your child's ability to perceive and differentiate colors accurately, assessing the health of their color vision.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                            </Typography>
                            <Typography variant="body1">
                                Delve into the intricate details of your child's eye structures through advanced tools, allowing for a comprehensive physical examination.
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
                                Assess your child's ability to use both eyes together effectively, crucial for activities like reading and sports.
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
                                Tailor your child's vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                9. Automated Keratometry (As Necessary)
                            </Typography>
                            <Typography variant="body1">
                                Utilize advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.
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
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Choose the Pediatric Eye Examination Package with Cycloplegic Refraction at Nakpil Eye Clinic. Let us guide your child towards a future with clear and
                                    healthy vision.</Typography>

                                <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>Php 1,499.00</Typography>
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

export default PediatricEyeExam;


