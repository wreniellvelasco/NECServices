import {Box, Container, Grid, Tabs, Tab, Typography, } from '@mui/material';
import * as React from "react";
import OtherPackageNav from "../OtherPackageNav.jsx";
import ServicePackageUI from "../Components/ServicePageUI.jsx";

function IshiharaColVisTest(){

    return(
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>

                    <Grid item xs={12} md={8} >

                        <ServicePackageUI />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <OtherPackageNav />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default IshiharaColVisTest;


