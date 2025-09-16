import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import OtherPackageNav from "../OtherPackageNav.jsx";

const OtherPageUI = () => {

    const navigate = useNavigate();

    const [selectedOther,setSelectedOther] = useState({
        id : 1,
        title : "Standard Eye Examination",
        summary: "A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.",
        description : "Our Standard Eye Examination Package is a comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health. This all-encompassing package is designed to " +
            "provide a holistic understanding of your visual well-being.",
        subdesc : "",
        subtitle1 : "Inclusions of the Standard Eye Examination Package",
        keyaspects : [
            {
                title : "1. Blood Pressure Test",
                description : "Begin with a foundational assessment of your general health through a blood pressure test, recognizing the interconnectedness of systemic health and ocular well-being.",
            },
            {
                title : "2. Visual Acuity Assessment",
                description: "Measure the sharpness and clarity of your vision, identifying any refractive errors that may affect your visual acuity.",
            },
            {
                title : "3. Eye Motility Assessment",
                description : "Evaluate the coordination and movement of your eye muscles, ensuring optimal functionality and identifying potential issues.",
            },
            {
                title : "4. Basic Color Vision Assessment",
                description : "Explore your ability to perceive and differentiate colors accurately, assessing the health of your color vision.",
            },
            {
                title : "5. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)",
                description : "Delve into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.",
            },
            {
                title : "6. Standard Dry Eye Assessment",
                description : "Identify and address symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.",
            },
            {
                title : "7. Cataract Screening",
                description : "Screen for early signs of cataracts, facilitating timely intervention and preserving your visual clarity.",
            },
            {
                title : "8. Glaucoma Screening VH Test",
                description : "Detects potential indicators of glaucoma through a comprehensive screening, emphasizing the importance of early diagnosis and management.",
            },
            {
                title : "9. Vision Examination & Correction (Objective / Subjective)",
                description : "Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.",
            },
        ],
        button: [
            "Book an Appointment",
        ],
        note: [
            "Note: Price is subject to change without prior notice.",
        ],
        description1 : ["Embark on a journey to optimal eye health with the Standard Eye Examination Package at Nakpil Eye Clinic. Let us guide you towards clarity, ensuring your eyes receive the meticulous care they deserve."],
        recommended : [
            "",
            "",
        ],
        mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
        images : [
            "https://placehold.it/1200x600",
            "https://placehold.it/1200x600"
        ],
        price : "Php 999.00",
        vat:  "inclusive of VAT",
        link : "..//foreignbodiesremoval"

    });


    const [serviceDetail,setServiceDetail] = useState([]);

    const handleNavClick = (other) => {
        //console.log(service);
        //navigate(service?.link);
        setSelectedOther(other);
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
                            <Typography variant="h4">{selectedOther?.title}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{selectedOther?.description}</Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h4">{selectedOther?.subtitle}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{selectedOther?.subdesc}</Typography>
                            <Typography>&nbsp;</Typography>

                            <Typography variant="h5">{selectedOther?.subtitle1}</Typography>
                            <Typography>&nbsp;</Typography>
                            <Typography>{selectedOther?.subdesc1}</Typography>
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
                        {selectedOther?.keyaspects?.map((aspects,idx) => {
                            const {title,description, subdesc} = aspects;
                            return <Stack key={title} sx={{width : "100%"}}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>{title}</Typography>
                                <Typography variant="body1">{description}</Typography>
                                &nbsp;
                                <Typography variant="body1">{subdesc}</Typography>
                                &nbsp;
                            </Stack>
                        })}
                        {selectedOther?.whychoose?.map((item, idx) => {
                            const {title, description, subdesc} = item;
                            return (
                                <Stack key={title} direction={{xs:"row", md:"column"}} sx={{width: "100%"}}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#1f2278' }}>{title}</Typography>
                                    <Typography variant="body1" sx={{fontWeight: 'bold'}} >{description}</Typography>
                                    &nbsp;
                                    &nbsp;

                                    <Typography variant="body1">{subdesc}</Typography>

                                </Stack>
                            );
                        })}

                    </Box>
                    <Box sx={{ backgroundColor: '#FFF' , p: 2 }}>
                        <Box
                            direction="row"
                            spacing ={2}
                            sx={{
                                borderRadius: '10px',
                                backgroundColor: '#daebfe',
                                height: '100%',
                                objectFit: 'contain',
                                mr: 'auto',
                                p: 2,
                                mb: '15px',
                                justifyContent: 'space-between' }}>
                            <Typography variant="body`" sx={{  marginBottom: '15px' }}>{selectedOther?.description1}</Typography>

                            <Stack direction = "row" spacing ={2}  sx={{justifyContent: 'space-between', p: 1, alignItems: 'center', }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#312e81' }}>{selectedOther?.price}</Typography>
                                <Button variant="contained" color="primary">{selectedOther?.button}</Button>
                            </Stack>
                            <Typography variant="body1" sx={{ fontSize: '10px', color: 'gray' }} >{selectedOther?.note}</Typography>
                        </Box>


                        {selectedOther?.recommended?.map((recs,idx) => {
                            return <Stack key={recs} direction={{xs:"row",md:"column"}} sx={{width : "100%"}}>
                                <Typography variant="span" sx={{ fontWeight: 'bold', color:'#698bd1' }} >{recs}</Typography>
                            </Stack>
                        })}
                    </Box>

                    {selectedOther?.additionaltest?.map((item, idx) => {
                        const {title, description, } = item;
                        return (
                            <Stack key={title} direction={{xs:"row", md:"column"}} sx={{width: "100%"}}>
                                &nbsp;
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#1f2278' }}>{title}</Typography>
                                <Typography variant="body1" sx={{fontWeight: 'bold'}} >{description}</Typography>
                                &nbsp;
                                &nbsp;

                            </Stack>
                        );
                    })}

                </Grid>

                <Grid item xs={12} md={4}>
                    <OtherPackageNav onClick={handleNavClick} />
                </Grid>

            </Grid>
        </Container>
    )
}

export default OtherPageUI;