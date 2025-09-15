import {Box, Container, Grid, Stack, Typography, } from '@mui/material';
import * as React from "react";
import OtherPackageNav from "../OtherPackageNav.jsx";


function VisPerfAssessment(){

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
                                <Typography variant="h4">Visual Performance Assessment (VPA)</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>At Nakpil Eye Clinic, we believe that optimal visual performance is the cornerstone of a vibrant and successful life. Our Visual Performance Assessment (VPA) is meticulously designed to evaluate and enhance the
                                    efficiency and precision of your visual system. Whether you're an athlete aiming for peak sports performance, a professional seeking to reduce eye strain, or someone wanting to unlock the full potential of your visual
                                    abilities, our comprehensive assessments provide valuable insights and tailored solutions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our Visual Performance Assessment goes beyond routine eye exams. We utilize state-of-the-art diagnostic tools and a holistic approach to evaluate various aspects of visual function. Our team of experienced
                                    optometrists and visual performance specialists collaborates to provide a detailed analysis, offering personalized recommendations to optimize your visual performance.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Assessment Areas</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', color:'#698bd1'  }}>
                                Key Assessment Areas
                            </Typography>
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
                                1. Visual Acuity and Refraction
                            </Typography>
                            <Typography variant="body1">
                                Precise measurement of visual acuity and refractive error to ensure optimal clarity and focus.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Eye Tracking and Coordination
                            </Typography>
                            <Typography variant="body1">
                                Evaluation of eye movement coordination, tracking, and convergence to assess overall eye teaming skills.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Depth Perception
                            </Typography>
                            <Typography variant="body1">
                                Assessment of the ability to perceive depth accurately, crucial for activities such as sports and driving.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Peripheral Vision
                            </Typography>
                            <Typography variant="body1">
                                Examination of peripheral vision to identify any limitations or irregularities.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                5. Visual Processing Speed
                            </Typography>
                            <Typography variant="body1">
                                Analysis of how quickly and accurately visual information is processed, a vital aspect for cognitive and academic performance.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                Why Choose Nakpil Eye Clinic for Visual Performance Assessment?
                            </Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Specialized Expertise - Our team comprises skilled optometrists trained by Dr. John Nakpil, and clinical technicians with a focus on enhancing visual function.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Cutting-Edge Technology - We employ advanced diagnostic tools and technology to provide accurate and comprehensive assessments.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Customized Recommendations - Based on the assessment results, we develop personalized recommendations and interventions to address specific visual performance needs.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Holistic Vision Care - We understand that visual performance is interconnected with overall well-being. Our approach considers lifestyle factors, occupational demands, and individual goals.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>Invest in Your Visual Excellence Today! Unleash the power of your vision with Nakpil Eye Clinic’s Visual Performance Assessment. Whether you're
                                seeking improvements for sports, work, or daily activities, our assessments pave the way for a clearer and more efficient visual experience.</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Elevate your visual potential with Nakpil Eye Clinic – Your Eye and Vision Specialist.</Typography>
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

export default VisPerfAssessment;


