import {Box, Container, Grid, Stack, Button, Typography } from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";

function FollowupEyeExam(){

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
                                <Typography variant="h4">Follow-up Checkup for Adults</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">At Nakpil Eye Clinic, we recognize that adult eye health requires dedicated attention. Our comprehensive Follow-up Checkup for adults is meticulously tailored to monitor and address
                                    changes in eye health over time. This checkup is designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Components</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{backgroundColor: "#FFF", borderRadius: '10px', p: 2}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Review of Previous Records
                            </Typography>
                            <Typography variant="body1">
                                A detailed examination of your prior eye health records, ensuring a comprehensive understanding of your adult eye health history.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Visual Acuity Assessment
                            </Typography>
                            <Typography variant="body1">
                                Evaluation of the sharpness and clarity of your vision, addressing any changes or fluctuations since your last examination.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Eye Health Check
                            </Typography>
                            <Typography variant="body1">
                                A thorough examination of the overall health of your eyes, utilizing advanced tools such as bio-microscopy and ophthalmoscopy.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Refractive Assessment
                            </Typography>
                            <Typography variant="body1">
                                Evaluation of your refractive status to determine whether any adjustments to your prescription are necessary.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                5. Vision Examination & Correction (Objective / Subjective)
                            </Typography>
                            <Typography variant="body1">
                                Tailoring your vision correction needs through both objective and subjective assessments, ensuring accurate and personalized prescriptions for adult patients.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                6. Discussion of Changes or Concerns
                            </Typography>
                            <Typography variant="body1">
                                A personalized consultation to discuss any changes in your vision or eye health, addressing concerns specific to adult eye care and providing guidance for ongoing care.
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
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Choose the comprehensive Follow-up Checkup for Adults at Nakpil Eye Clinic for ongoing care that prioritizes the health and clarity of your vision
                                    throughout adulthood. Let us guide you on your journey to sustained eye health.</Typography>

                                <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>Php 500.00</Typography>
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

export default FollowupEyeExam;


