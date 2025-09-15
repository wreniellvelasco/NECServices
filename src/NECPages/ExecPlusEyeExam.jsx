import {Box, Container, Grid, Stack, Button, Typography } from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";


function ExecPlusEyeExam(){

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
                                <Typography variant="h4">Executive Eye Examination with Perimetry</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">Experience the epitome of advanced eye care at Nakpil Eye Clinic with our Executive Plus Eye Examination Package, now enhanced with Perimetry. This comprehensive package is tailored for
                                    those seeking not only precision in diagnostics but also a thorough understanding of their visual health, ensuring a meticulous assessment from every perspective.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Inclusions of the Executive Eye Examination with Perimetry Package</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{backgroundColor: '#FFF', p: 2}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Blood Pressure Test
                            </Typography>
                            <Typography variant="body1">
                                Commence your examination with a comprehensive assessment of your general health, acknowledging the crucial link between systemic well-being and ocular health.
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
                                4. Comprehensive Ishihara Color Vision Test
                            </Typography>
                            <Typography variant="body1">
                                Explore your ability to perceive and differentiate colors accurately, providing detailed insights into the health of your color vision.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                5. D-15 Color Vision Test (As Necessary)
                            </Typography>
                            <Typography variant="body1">
                                Employ the D-15 test as necessary to further assess color vision and identify subtle variations in color perception.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                6. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                            </Typography>
                            <Typography variant="body1">
                                Delve into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                7. Comprehensive Dry Eye Assessment
                            </Typography>
                            <Typography variant="body1">
                                Identify and address any symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                8. Cataract Screening
                            </Typography>
                            <Typography variant="body1">
                                Screen for early signs of cataracts, facilitating timely intervention and preserving your visual clarity.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                9. Glaucoma Screening (Tonometry-IOP Test)
                            </Typography>
                            <Typography variant="body1">
                                Detects potential indicators of glaucoma through an in-depth screening, including Tonometry-IOP testing for precise intraocular pressure measurement.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                10. Fundus Imaging with Interpretation
                            </Typography>
                            <Typography variant="body1">
                                Utilize advanced imaging to capture detailed images of the retina, allowing for a comprehensive analysis of the eye's structural layers.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                11. Vision Examination & Correction (Objective / Subjective)
                            </Typography>
                            <Typography variant="body1">
                                Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                12. Perimetry
                            </Typography>
                            <Typography variant="body1">
                                Enhance your examination with Perimetry, a visual field test that assesses your peripheral vision and aids in the early detection of certain eye conditions.
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
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Opt for the Executive Plus Eye Examination Package including Perimetry at Nakpil Eye Clinic. Let us guide you towards a future with clear,
                                    healthy, and optimized vision.</Typography>

                                <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>Php 5,999.00</Typography>
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

export default ExecPlusEyeExam;


