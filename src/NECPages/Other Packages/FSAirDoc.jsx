import {Box, Container, Grid, Stack, Typography } from '@mui/material';
import * as React from "react";
import OtherPackageNav from "../OtherPackageNav.jsx";

function FSAirDoc(){

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
                                <Typography variant="h4">Fundus Scan with AirDoc</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Immerse yourself in the future of ocular diagnostics with our state-of-the-art Fundus Scan, driven by innovative AirDoc empowered by Artificial
                                    Intelligence (AI). This revolutionary combination provides a detailed and intelligent examination of your retina, setting new standards in precision eye care.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our Fundus Scan, utilizing AirDoc with AI integration, is a groundbreaking diagnostic tool that goes beyond traditional imaging. This non-invasive
                                    procedure captures highly detailed images of the retina, harnessing the power of AI for intelligent analysis and early detection of eye conditions.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Aspects of AI-Powered Fundus Scan</Typography>
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
                                1. AI-Enhanced Analysis
                            </Typography>
                            <Typography variant="body1">
                                The advanced algorithms of our AirDoc intelligently analyze retinal images, aiding in the early identification of subtle abnormalities and potential eye diseases.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Precision Diagnostics
                            </Typography>
                            <Typography variant="body1">
                                AI-driven Fundus Scans offer unparalleled precision, providing our eye care professionals with detailed insights into the condition of your retina and optic nerve.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Efficient Screening
                            </Typography>
                            <Typography variant="body1">
                                The integration of AI streamlines the screening process, allowing for faster and more efficient analysis, leading to quicker diagnosis and timely intervention.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Personalized Care
                            </Typography>
                            <Typography variant="body1">
                                The combination of AI and human expertise enables us to craft personalized treatment plans based on the unique characteristics of your ocular health.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Experience the fusion of technology and expertise with the AI-Powered Fundus Scan at Nakpil Eye Clinic. Let us lead you towards an era of intelligent ocular wellness, setting new standards in
                                precision eye care.</Typography>
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

export default FSAirDoc;


