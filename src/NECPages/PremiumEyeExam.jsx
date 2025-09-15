import { Box, Container, Grid, Stack, Button, Typography } from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";




function PremiumEyeExam(){

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
                                  <Typography variant="h4">Premium Eye Examination</Typography>
                                  <Typography>&nbsp;</Typography>
                                  <Typography variant="h6">Our Premium Eye Examination Package is a pinnacle offering, meticulously crafted to provide an unparalleled assessment of your eye health. Elevate your eye care experience with this
                                      all-inclusive package, ensuring a thorough understanding of your visual well-being.</Typography>

                                  <Typography>&nbsp;</Typography>
                                  <Typography>&nbsp;</Typography>
                                  <Typography>&nbsp;</Typography>

                                  <Typography variant="h5">Inclusions of the Premium Eye Examination Package</Typography>
                                  <Typography>&nbsp;</Typography>
                              </Stack>
                          </Box>

                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Blood Pressure Test
                            </Typography>
                            <Typography variant="body1">
                                Lay the foundation with a thorough assessment of your general health through a blood pressure test, recognizing the vital link between systemic health and ocular well-being.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Visual Acuity Assessment
                            </Typography>
                            <Typography variant="body1">
                                Precisely measure the sharpness and clarity of your vision, identifying and addressing any refractive errors impacting your visual acuity.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Eye Motility Assessment
                            </Typography>
                            <Typography variant="body1">
                                Evaluate the coordination and movement of your eye muscles, ensuring optimal functionality and identifying potential issues.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Basic Color Vision Assessment
                            </Typography>
                            <Typography variant="body1">
                                Explore your ability to perceive and differentiate colors accurately, assessing the health of your color vision.
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
                                Identify and address symptoms of dry eye syndrome at an advanced level, ensuring your eyes remain comfortable and well-lubricated.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                7. Cataract Screening
                            </Typography>
                            <Typography variant="body1">
                                Screen for early signs of cataracts, facilitating timely intervention and preserving your visual clarity.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                8. Glaucoma Screening VH Test with Tonometry IOP Test
                            </Typography>
                            <Typography variant="body1">
                                Detects potential indicators of glaucoma through an in-depth screening, including Tonometry IOP testing for precise intraocular pressure measurement.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                9. Vision Examination & Correction (Objective / Subjective)
                            </Typography>
                            <Typography variant="body1">
                                Utilize advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                10. Automated Keratometry (As Necessary)
                            </Typography>
                            <Typography variant="body1">
                                Employ advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.
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
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Immerse yourself in the epitome of eye care with the Premium Eye Examination Package at Nakpil Eye Clinic. Let us guide you towards excellence,
                                    ensuring your eyes receive the highest standard of care.</Typography>

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

export default PremiumEyeExam;


