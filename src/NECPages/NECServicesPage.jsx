import {Box, Button, Container, Grid, Stack, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from "react";




function NECServicesPage() {

    const [expanded, setExpanded] = useState(false);


    return(
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box

                            sx={{


                                p: 1,
                                backgroundColor: '#FFF'
                            }}>

                            {/* Logo on the left */}
                            <Box

                                sx={{
                                    width: 100,
                                    height: 100,
                                    objectFit: 'contain',
                                    mr: 'auto',
                                }}
                            />


                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            sx={{
                                backgroundColor: '#daebfe',
                                width: '100%',
                                height: 100,
                                objectFit: 'contain',
                                mr: 'auto',
                            }}
                        />
                    </Grid>

                    {/*<Grid item xs={12}>
                        <Typography variant="h5" sx={{ m:2, fontWeight: 'bold', color:'#698bd1'}}>Eye Examination Packages</Typography>
                        <Box
                            sx={{
                                backgroundColor: '#daebfe',
                                objectFit: 'contain', m:2
                            }}
                        />



                    </Grid>
                    */}



                    <Grid item xs={12}>
                        <Box
                            direction="row"
                            spacing ={2}
                            sx={{
                                p: 1,
                                justifyContent: 'space-between' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold',  marginBottom: '15px' }}>Eye Examination Packages</Typography>

                        </Box>
                    </Grid>

                    {/*

                    <Grid item xs={12} md={6}>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Standard Eye Examination</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>

                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Premium Eye Examination</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>

                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Pediatric  Eye Examination</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>


                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Grid header>

                        </Grid>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Follow-Up Eye Examination</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>


                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Executive Eye Examination</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>


                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Executive Plus Eye Examination</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>


                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack  sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>Corporate Eye Care Program</Typography>





                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>


                            </Stack>
                        </Box>

                    </Grid>
                    */}

                </Grid>
            </Container>
        </Box>


    )
}

export default NECServicesPage