import {Box, Container, Grid, Stack,  Typography, } from '@mui/material';
import * as React from "react";
import OtherPackageNav from "../OtherPackageNav.jsx";

function PerimetryVisFieldTest(){


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
                                <Typography variant="h4">Perimetry or Visual Field Test</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Welcome to Nakpil Eye Clinic, where we prioritize your visual health and clarity. Explore the intricacies of your visual field with our Perimetry test, also commonly referred to as the Visual Field Test.
                                    This advanced diagnostic tool offers invaluable insights into your field of vision, aiding in the early detection and management of various eye conditions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Perimetry, or the Visual Field Test, is a sophisticated diagnostic procedure that assesses your field of vision, providing a comprehensive map of how you perceive and interpret visual information in
                                    your surroundings. This test is instrumental in detecting abnormalities, enabling our expert eye care professionals to create tailored solutions for your visual well-being.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Aspects of Perimetry</Typography>
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
                                1. Early Detection of Eye Conditions
                            </Typography>
                            <Typography variant="body1">
                                Perimetry is a vital tool for identifying early signs of eye conditions such as glaucoma, retinal diseases, and neurological disorders, allowing for prompt intervention and management.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Mapping Visual Sensitivity
                            </Typography>
                            <Typography variant="body1">
                                The procedure maps your visual sensitivity across different areas of your visual field, helping us understand variations in your ability to detect light stimuli.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Customized Treatment Plans
                            </Typography>
                            <Typography variant="body1">
                                The insights gained from Perimetry enable us to develop personalized treatment plans based on the specific characteristics of your visual field, ensuring targeted and effective interventions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Monitoring Progression
                            </Typography>
                            <Typography variant="body1">
                                Examination of peripheral vision to identify any limitations or irregularities.For individuals with known eye conditions, regular Perimetry tests help monitor the progression of the disease
                                and adjust treatment strategies accordingly.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                Why Choose Nakpil Eye Clinic for Perimetry?
                            </Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Expert Eye Care Professionals: Our team consists of a skilled ophthalmologist, optometrists, and technicians with expertise in utilizing Perimetry for accurate diagnostics and personalized care.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Cutting-Edge Technology: Nakpil Eye Clinic invests in the latest Perimetry technology, ensuring precise and detailed assessments of your visual field.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Patient-Centric Approach: We understand the importance of your comfort and understanding during the Perimetry procedure, providing a supportive and informative environment.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Holistic Eye Care: Beyond Perimetry, our clinic offers a comprehensive range of eye care services to address all aspects of your visual health.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>Invest in Your Visual Insight. Embark on a journey to uncover the intricacies of your visual field with Perimetry at Nakpil Eye Clinic. Let us be your partners in preserving and
                                enhancing your visual well-being.</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Discover the full spectrum of your vision at Nakpil Eye Clinic – Your Eye and Vision Specialist.</Typography>
                            <Typography>&nbsp;</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <OtherPackageNav />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PerimetryVisFieldTest;


