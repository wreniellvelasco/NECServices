import {Box, Container, Grid, Stack, Typography,} from '@mui/material';
import * as React from "react";

import OtherPackageNav from "../OtherPackageNav.jsx";




function OrthoKeratologyLens(){




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

                                <Typography variant="h4">Orthokeratology</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Experience the freedom of clear vision without the constraints of glasses or daytime contact lenses through our Orthokeratology Lens
                                    services. Commonly known as Ortho-K, this innovative approach corrects your vision while you sleep, offering a lens-free daytime experience
                                    tailored to your unique visual needs.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography variant="h6">Key Aspects of Perimetry</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography>Orthokeratology involves the use of specially designed contact lenses that reshape the cornea overnight, allowing for improved
                                    focusing power during the day. This non-surgical, reversible process offers a vision correction alternative for those seeking freedom from
                                    glasses and daytime contacts.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Features of Orthokeratology Lens:</Typography>
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

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Vision Correction Without Surgery: Ortho-K provides a non-invasive option for vision correction, eliminating the need for surgical procedures like LASIK.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Myopia Control: Orthokeratology has been proven effective in slowing down the progression of myopia (nearsightedness) in children and young adults.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Lens-Free Daytime Experience: Enjoy clear vision throughout the day without the hassle of glasses or traditional contact lenses.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Reversible and Customizable: The effects of Ortho-K are reversible, and the lenses can be customized to suit your individual prescription and lifestyle.
                            </Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>&nbsp;</Typography>


                            <Typography variant="h5" sx={{  flexShrink: 0, color: '#1f2278', fontWeight: 'bold' }}>
                                Why Choose Nakpil Eye Clinic for Visual Performance Assessment?
                            </Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Expert Ortho-K Specialists: Our team comprises experienced optometrists and specialists trained in Orthokeratology procedures.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Personalized Consultations: We provide thorough consultations to assess your suitability for Ortho-K, ensuring a personalized approach to your vision correction.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Cutting-Edge Technology: Nakpil Eye Clinic is equipped with the latest technology to ensure accurate measurements and precise lens customization.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                - Ongoing Support: Beyond the fitting process, we offer ongoing support and monitoring to ensure the continued success and comfort of your Ortho-K experience.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>Invest in Your Lens-Free Clarity. Explore the liberating world of Orthokeratology at Nakpil Eye Clinic. Rediscover clear vision without the need for
                                glasses or daytime contacts, and let us be your partner in achieving visual freedom.</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Experience clarity on your terms at Nakpil Eye Clinic – Your Eye and Vision Specialist.</Typography>
                            <Typography>&nbsp;</Typography>
                        </Box>

                        <Grid item xs={12} sx={{pt: '15px'}}>

                        </Grid>



                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <OtherPackageNav />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>

                    </Grid>
                </Grid>




            </Container>

        </Box>
    )
}

export default OrthoKeratologyLens;


