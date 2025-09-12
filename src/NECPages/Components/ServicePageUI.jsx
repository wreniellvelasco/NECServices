import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const ServicePageUI = () => {

    const navigate = useNavigate();

    const [serviceDetail,setServiceDetail] = useState(
        {
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

        },
        {
            id : 1,
            title : "Ishihara Color Vision Test",
            description : "Explore the richness of color vision with our Ishihara Color Vision Test, a quick and effective diagnostic tool designed to evaluate your ability to discern various colors accurately.",
            subtitle : "What to Expect?",
            subdesc : "The Ishihara Color Vision Test is a widely recognized and trusted method for assessing color blindness and deficiencies. During this painless and non-invasive test, you will be presented " +
                "with a series of plates containing colored dots forming numbers or patterns. Your responses to these plates help us understand the nuances of your color perception.",
            subtitle1 : "Key Aspects of the Ishihara Color Vision Test",
            keyaspects : [
                {
                    title : "1. Identifying Color Deficiencies",
                    description : "The test is designed to identify red-green color deficiencies, the most common form of color blindness. It can also detect other types of color vision impairments.",
                },
                {
                    title : "2. Quick and Painless",
                    description: "The Ishihara Test is a swift and straightforward procedure, making it convenient for both adults and children.",
                },
                {
                    title : "3. Diagnostic Accuracy",
                    description : "Our experienced eye care professionals interpret your responses to provide accurate insights into your color vision abilities.",
                },
                {
                    title : "4. Treatment Planning",
                    description : "Based on the test results, we can offer tailored advice and recommendations for managing color vision deficiencies, enhancing your overall visual experience.",
                    subdescription : "Discover the true spectrum of your color vision with the Ishihara Color Vision Test at Nakpil Eye Clinic. Let us guide you towards a vibrant and accurate perception of the world around you."
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
            link : "..//IshiharaColorVisionTest"
        }
    );

    const handleClick = (service) => {
        console.log(service);
        navigate(service?.link);
    }



    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: '100%',
                            paddingTop: '15px'
                        }}>


                        <Stack >

                            <Typography variant="h4">{serviceDetail?.title}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{serviceDetail?.description}</Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h4">{serviceDetail?.subtitle}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{serviceDetail?.subdesc}</Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h5">{serviceDetail?.subtitle1}</Typography>
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
                        {serviceDetail?.keyaspects?.map((aspects,idx) => {
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
                        {serviceDetail?.recommended?.map((recs,idx) => {
                            return <Stack key={recs} direction={{xs:"row",md:"column"}} sx={{width : "100%"}}>
                                <Typography variant="span" sx={{ fontWeight: 'bold', color:'#698bd1' }} >{recs}</Typography>
                            </Stack>
                        })}
                    </Box>
                </Grid>

                <Grid item xs={12} md={2}>

                </Grid>

            </Grid>
        </Container>
    )
}

export default ServicePageUI;