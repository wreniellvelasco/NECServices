import {Box, Container, Grid, Stack, Typography, } from '@mui/material';
import OtherPackageNav from "../OtherPackageNav.jsx";

function IshiharaWFarnsworth(){


    return(
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                width: '100%',
                                paddingTop: '15px'
                            }}>.

                            <Stack >
                                <Typography variant="h4">Ishihara Color Vision Test with Farnsworth (D-15)</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Elevate your understanding of color vision with our combined Ishihara Color Vision and Farnsworth Test. This dual assessment provides a
                                    nuanced evaluation of your color perception, ensuring a thorough understanding of your visual capabilities.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our combined approach involves the Ishihara Color Vision Test, which focuses on identifying red-green color deficiencies, paired with the
                                    Farnsworth Test, a more detailed examination of color discrimination and arrangement. Together, these tests offer a holistic evaluation
                                    of your color vision.</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Aspects of the Combined Test</Typography>
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
                                1. Precise Color Deficiency Identification
                            </Typography>
                            <Typography variant="body1">
                                The Ishihara Test pinpoints red-green color deficiencies, while the Farnsworth Test provides a detailed analysis of color discrimination across the spectrum.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Quick and Efficient
                            </Typography>
                            <Typography variant="body1">
                                For individuals undergoing cataract surgery, Biometry is essential for selecting the appropriate intraocular lens power and ensuring optimal visual outcomes.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. Tailored Recommendations
                            </Typography>
                            <Typography variant="body1">
                                Based on the combined test results, our experienced eye care professionals offer personalized recommendations for managing and enhancing your color vision.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Comprehensive Vision Wellness
                            </Typography>
                            <Typography variant="body1">
                                Beyond color vision, we consider the broader aspects of your visual health, ensuring a holistic approach to your eye care.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>Explore the depth and richness of your color vision with our combined Ishihara Color Vision and Farnsworth Test at Nakpil Eye Clinic. Let us guide you towards
                                a comprehensive understanding of your visual world.</Typography>
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

export default IshiharaWFarnsworth;


