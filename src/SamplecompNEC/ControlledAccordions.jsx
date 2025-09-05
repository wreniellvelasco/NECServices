import * as React from 'react';
import {Box, Container, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, Button,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            <Container
                maxWidth={false}        // turn off the default breakpoint system
                sx={{ maxWidth: '1100px' }}  // your custom maxWidth
            >
                <Grid container spacing={2}>
                    <Grid item xs={4} md={8}>
                        <Box>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{justifyContent: 'space-between', alignItems: 'center'}}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 'bold', color:'#698bd1'  }}>
                                        Standard Eye Examination
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            ml: 'auto',        // push to the right
                                            gap: 1,            // small gap between text & icon
                                        }}
                                     >

                                        <Typography sx={{ color: '#fe8d0e', fontWeight: 'bold' }}>Php 999.00</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Visual Acuity Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Evaluate the sharpness and clarity of your childs vision, identifying any potential refractive errors that may affect visual acuity.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. Eye Motility Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Examine the coordination and movement of your childs eye muscles, ensuring optimal functionality and identifying any issues.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Color Vision Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Explore your childs ability to perceive and differentiate colors accurately, assessing the health of their color vision.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography variant="body1">
                                        Delve into the intricate details of your childs eye structures through advanced tools, allowing for a comprehensive physical examination.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Standard Dry Eye Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Identify and address any symptoms of dry eye syndrome your child may be experiencing, ensuring their eyes remain comfortable and well-lubricated.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Binocular Vision Assessment
                                    </Typography>
                                    <Typography variant="body1">
                                        Assess your childs ability to use both eyes together effectively, crucial for activities like reading and sports.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Suppression Test
                                    </Typography>
                                    <Typography variant="body1">
                                        Evaluate the suppression of one eye in binocular vision, identifying any issues that may affect depth perception.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography variant="body1">
                                        Tailor your childs vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Automated Keratometry (As Necessary)
                                    </Typography>
                                    <Typography variant="body1">
                                        Utilize advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.
                                    </Typography>
                                    <Typography>&nbsp;</Typography>



                                    <Button variant="contained"
                                            endIcon={<KeyboardArrowRightIcon/>}
                                            sx={{backgroundColor: '#698bd1', color: 'white', fontWeight: 'bold'}}>
                                        Book This Service
                                    </Button>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Premium Eye Examination</Typography>
                                    <Box sx={{display: 'flex',
                                        alignItems: 'center',
                                        ml: 'auto',
                                        gap: 1}}>
                                        <Typography sx={{ color: 'text.secondary' }}>Php 1,499.00</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Blood Pressure Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Blood Pressure Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Eye Motility Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Basic Color Vision Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Comprehensive Dry Eye Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Cataract Screening
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Glaucoma Screening VH Test with Tonometry IOP Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        10. Automated Keratometry (As Necessary)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Button variant="contained"
                                            sx={{backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold'}}>
                                        View More
                                    </Button>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Pediatric Eye Examination
                                    </Typography>
                                    <Box sx={{display: 'flex',
                                        alignItems: 'center',
                                        ml: 'auto',
                                        gap: 1}}>
                                        <Typography sx={{ color: 'text.secondary' }}>Php 1,499.00</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        1. Visual Acuity Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        2. Eye Motility Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        3. Color Vision Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        4. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        5. Standard Dry Eye Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        6. Binocular Vision Assessment
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        7. Suppression Test
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        8. Vision Examination & Correction (Objective / Subjective)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#698bd1' }}>
                                        9. Automated Keratometry (As Necessary)
                                    </Typography>
                                    <Typography>&nbsp;</Typography>

                                    <Button variant="contained"
                                            sx={{backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold'}}>
                                        View More
                                    </Button>

                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}