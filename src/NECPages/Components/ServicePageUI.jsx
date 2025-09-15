import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import ExamPackageNav from "../ExamPackageNav.jsx";

const ServicePageUI = () => {

    const navigate = useNavigate();

    const [selectedService,setSelectedService] = useState({
        id : 1,
        title : "Orthokeratology Lens Fitting",
        description : "Your journey to clear, lens-free vision begins with our expert Orthokeratology (Ortho-K) Lens Fitting service begins here. Rediscover the freedom of crisp vision without " +
            "the constraints of glasses or daytime contact lenses through our tailored fitting process, designed to ensure optimal comfort and effectiveness.",
        subtitle : "What to Expect?",
        subdesc : "Our Ortho-K Lens Fitting is a personalized and meticulous process aimed at crafting lenses that precisely reshape your cornea overnight. This non-surgical approach allows " +
            "you to enjoy clear vision throughout the day without the need for traditional corrective eyewear.",
        subtitle1 : "Key Aspects of Orthokeratology Lens Fitting",
        keyaspects : [
            {
                title : "1. Comprehensive Eye Examination",
                description : "Our experienced optometrists conduct a thorough eye examination to assess your current prescription, corneal shape, and overall eye health.",
            },
            {
                title : "2. Custom Lens Design",
                description: "Using advanced technology, we design Ortho-K lenses tailored to your unique eye anatomy and prescription, ensuring a comfortable and effective fit.",
            },
            {
                title : "3. Fitting and Adjustment Sessions",
                description : "During fitting sessions, we ensure the lenses provide the optimal corneal reshaping. We also guide you on lens insertion, removal, and care.",
            },
            {
                title : "4. Individualized Treatment Plan",
                description : "Your Ortho-K lens fitting is part of a personalized treatment plan, addressing your specific vision correction needs and lifestyle preferences.",
                subdescription : "Discover the joy of clear vision without constraints at Nakpil Eye Clinic - Your Eye and Vision Specialist."
            }
        ],
        recommended : [
            "Test 1",
            "Test 2",
        ],
        mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
        images : [
            "https://placehold.it/1200x600",
            "https://placehold.it/1200x600"
        ],
        price : 3000,
        link : "..//OrthokeratologyLensFitting"
    });


    const [serviceDetail,setServiceDetail] = useState([]);

    const handleNavClick = (service) => {
        //console.log(service);
        //navigate(service?.link);
        setSelectedService(service);
    }





    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            width: '100%',
                            paddingTop: '15px'
                        }}>
                        <Stack >
                            <Typography variant="h4">{selectedService?.title}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{selectedService?.description}</Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h4">{selectedService?.subtitle}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{selectedService?.subdesc}</Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h5">{selectedService?.subtitle1}</Typography>
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
                        {selectedService?.keyaspects?.map((aspects,idx) => {
                            const {title,description, subdesc} = aspects;
                            return <Stack key={title} direction={{xs:"row",md:"column"}} sx={{width : "100%"}}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>{title}</Typography>
                                <Typography variant="body1">{description}</Typography>
                                &nbsp;
                                <Typography variant="body1">{subdesc}</Typography>
                                &nbsp;
                            </Stack>
                        })}
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
                        {selectedService?.recommended?.map((recs,idx) => {
                            return <Stack key={recs} direction={{xs:"row",md:"column"}} sx={{width : "100%"}}>
                                <Typography variant="span" sx={{ fontWeight: 'bold', color:'#698bd1' }} >{recs}</Typography>
                            </Stack>
                        })}
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <ExamPackageNav onClick={handleNavClick} />
                </Grid>

            </Grid>
        </Container>
    )
}

export default ServicePageUI;