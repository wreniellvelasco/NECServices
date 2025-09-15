import {Box, Container, Grid, Stack, Tabs, Tab, Typography, Card, CardHeader, Chip, CardContent, CardActions, Accordion,
    AccordionDetails, AccordionSummary} from '@mui/material';
{/*import logo from "../assets/logo.png";*/}
import * as React from "react";
import PropTypes from "prop-types";
import {useState} from "react";
import {ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    Check as CheckIcon,
    CalendarMonth as CalendarMonthIcon
} from '@mui/icons-material';
import OtherPackageNav from "../OtherPackageNav.jsx";

function Biometry(){

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
                                <Typography variant="h4">Biometry</Typography>
                                <Typography>&nbsp;</Typography>
                                <Typography>Our Biometry service is a cutting-edge diagnostic procedure designed to obtain accurate measurements of your eye's structures, ensuring
                                    optimal outcomes for various eye surgeries and interventions.</Typography>

                                <Typography>&nbsp;</Typography>
                                <Typography>Biometry is a non-invasive and painless diagnostic tool that captures detailed measurements of key structures within the eye, such as the
                                    length of the eyeball and the curvature of the cornea. These measurements are crucial for planning and performing procedures like cataract
                                    surgery and implanting intraocular lenses (IOLs).</Typography>
                                <Typography>&nbsp;</Typography>

                                <Typography variant="h5">Key Features</Typography>
                                <Typography>&nbsp;</Typography>
                            </Stack>
                        </Box>

                        <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', color:'#698bd1'  }}>
                                Key Features
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
                                1. Accurate Measurements
                            </Typography>
                            <Typography variant="body1">
                                Biometry provides precise measurements of the eye's dimensions, enabling personalized treatment plans for surgeries and interventions.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                2. Cataract Surgery Planning
                            </Typography>
                            <Typography variant="body1">
                                For individuals undergoing cataract surgery, Biometry is essential for selecting the appropriate intraocular lens power and ensuring optimal visual outcomes.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                3. IOL Implantation
                            </Typography>
                            <Typography variant="body1">
                                Biometry aids in the calculation of intraocular lens power for patients receiving artificial lenses, supporting better vision correction after surgery.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                4. Customized Treatment
                            </Typography>
                            <Typography variant="body1">
                                The data obtained through Biometry allows our expert eye care professionals to tailor interventions to each patient's unique eye anatomy.
                            </Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography>&nbsp;</Typography>
                            <Typography>Experience the precision of Biometry at Nakpil Eye Clinic. Let us guide you towards optimal vision outcomes with personalized and accurate measurements.</Typography>
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

export default Biometry;


