import {Box, Container, Grid, Stack, Typography, } from '@mui/material';
import * as React from "react";
import OtherPackageNav from "../OtherPackageNav.jsx";

function ForeignBodiesRemoval(){


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
                                <Typography variant="h4">Foreign Bodies Removal</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Accidents happen, and when a foreign body finds its way into your eye, prompt and expert removal is essential. Our Foreign Body Removal service
                                    is designed to provide swift relief, ensuring your eyes stay clear, comfortable, and healthy.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">What to Expect</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography>Foreign bodies in the eye can cause discomfort, irritation, and potential damage if not addressed promptly. Our Foreign Body Removal service is a
                                    quick and specialized procedure conducted by our experienced eye care professionals. We aim to alleviate your discomfort and minimize any potential risks
                                    associated with foreign objects lodged in the eye.</Typography>

                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Aspects of Foreign Body Removal</Typography>
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
                                1. Prompt Intervention
                            </Typography>
                            <Typography variant="body1">
                                We prioritize immediate action to address the presence of foreign bodies, preventing further irritation or injury to the eye.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Specialized Tools and Techniques
                            </Typography>
                            <Typography variant="body1">
                                Our eye care professionals use specialized tools and techniques to safely and effectively remove foreign bodies, ensuring minimal discomfort for the patient.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Comprehensive Eye Examination
                            </Typography>
                            <Typography variant="body1">
                                Following the removal procedure, we conduct a thorough examination to assess any potential damage or irritation caused by the foreign body.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Patient Education
                            </Typography>
                            <Typography variant="body1">
                                We take the time to educate our patients on preventive measures and safety practices to minimize the risk of future foreign body incidents.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>For prompt and expert foreign body removal, trust Nakpil Eye Clinic. Let us provide the swift relief you need, ensuring your eyes remain clear, comfortable, and healthy.</Typography>
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

export default ForeignBodiesRemoval;


