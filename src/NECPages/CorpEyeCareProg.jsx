import {Box, Container, Grid, Stack, Typography, } from '@mui/material';
import * as React from "react";
import ExamPackageNav from "./ExamPackageNav.jsx";


function CorpEyeCareProg(){

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
                                <Typography variant="h4">Corporate Eye Care Program</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Nakpil Eye Clinic has been known to provide excellent eye and vision care for many years. And now through our Corporate Eye Care program we can bring the same excellent service to your company on your next annual eye examination. We use the latest
                                    technology to provide state of the art eye examinations and specialist services to ensure that your employees and staffs will receive the best eye-care. In addition, we can also conduct workstation assessment and provide necessary advice for them to have the safest,
                                    the healthiest, and the most visually effective working conditions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our corporate scheme enables companies to fulfill their health and safety obligations for VDU users and other workers with minimal administration work and expenditure and provides employees with large discounts on our products and services.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Inclusions of the Corporate Eye Care Program</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#FFF',
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: 'auto',        // push to the right
                                            gap: 1, // small gap between text & icon
                                        }}
                                    >
                                    </Box>

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
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                        Additional Tests offered on Corporate rates (In clinic tests):
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Corneal Topography
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. IOP Tonometry (Eye pressure test)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Fundus Imaging Scant
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. OCT Optical Coherence Tomography
                                    </Typography>
                                    <Typography>&nbsp;</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <ExamPackageNav />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CorpEyeCareProg;


