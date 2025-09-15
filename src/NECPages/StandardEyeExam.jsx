import { Box, Container, Grid, Stack, Button, Typography } from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";



function StandardEyeExam(){

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

                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                1. Blood Pressure Test
                            </Typography>
                            <Typography variant="body1">
                                Begin with a foundational assessment of your general health through a blood pressure test, recognizing the interconnectedness of systemic health and ocular well-being.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Visual Acuity Assessment
                            </Typography>
                            <Typography variant="body1">
                                Measure the sharpness and clarity of your vision, identifying any refractive errors that may affect your visual acuity.
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
                                Delve into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                6. Standard Dry Eye Assessment
                            </Typography>
                            <Typography variant="body1">
                                Identify and address symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.
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
                                8. Glaucoma Screening VH Test
                            </Typography>
                            <Typography variant="body1">
                                Detects potential indicators of glaucoma through a comprehensive screening, emphasizing the importance of early diagnosis and management.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                9. Vision Examination & Correction (Objective / Subjective)
                            </Typography>
                            <Typography variant="body1">
                                Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
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
                                <Typography variant="body`" sx={{  marginBottom: '15px' }}>Embark on a journey to optimal eye health with the Standard Eye Examination Package at
                                    Nakpil Eye Clinic. Let us guide you towards clarity, ensuring your eyes receive the meticulous care they deserve.</Typography>

                                <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>Php 999.00</Typography>
                                    <Button variant="contained" color="primary">Book an Appointment</Button>
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

export default StandardEyeExam;


