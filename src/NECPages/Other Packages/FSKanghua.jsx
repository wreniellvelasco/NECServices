import {Box, Container, Grid, Stack,  Typography, } from '@mui/material';
import * as React from "react";
import OtherPackageNav from "../OtherPackageNav.jsx";

function FSKanghua(){

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
                                <Typography variant="h4">Fundus Scan with Kanghua</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Elevate your understanding of ocular health with our cutting-edge Fundus Scan, powered by Kanghua. This diagnostic procedure provides
                                    an intricate view of the retina, allowing for early detection and precise management of various eye conditions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Our Fundus Scan, conducted with the latest Kanghua Fundus Imaging equipment, is a non-invasive and high-resolution imaging process
                                    that captures detailed images of the back of your eye, including the retina and optic nerve. This technology-rich procedure is instrumental in
                                    diagnosing and monitoring conditions such as diabetic retinopathy, macular degeneration, and glaucoma.</Typography>
                                <Typography>&nbsp;</Typography>


                                <Typography>Experience the precision of ocular imaging with the Fundus Scan powered by Kanghua at Nakpil Eye Clinic. Let us guide you towards a clearer
                                    and healthier vision.</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
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

export default FSKanghua;


