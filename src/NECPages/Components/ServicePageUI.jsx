import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import ExamPackageNav from "../ExamPackageNav.jsx";

const ServicePageUI = () => {

    const navigate = useNavigate();

    const [selectedService,setSelectedService] = useState({
        id : 1,
        title : "Biometry",
        summary: "Our advanced biometry techniques unlock personalized IOL solutions for crystal-clear eyesight",
        description : "Our Biometry service is a cutting-edge diagnostic procedure designed to obtain accurate measurements of your eye's structures, ensuring optimal outcomes for various eye surgeries and interventions.",
        subdesc : "Biometry is a non-invasive and painless diagnostic tool that captures detailed measurements of key structures within the eye, such as the length of the eyeball and the curvature of the cornea. These" +
            " measurements are crucial for planning and performing procedures like cataract surgery and implanting intraocular lenses (IOLs).",
        subtitle1 : "Key Features",
        keyaspects : [
            {
                title : "1. Accurate Measurements",
                description : "Biometry provides precise measurements of the eye's dimensions, enabling personalized treatment plans for surgeries and interventions.",
            },
            {
                title : "2. Cataract Surgery Planning",
                description: "For individuals undergoing cataract surgery, Biometry is essential for selecting the appropriate intraocular lens power and ensuring optimal visual outcomes.",
            },
            {
                title : "3. IOL Implantation",
                description : "Biometry aids in the calculation of intraocular lens power for patients receiving artificial lenses, supporting better vision correction after surgery.",
            },
            {
                title : "4. Customized Treatment",
                description : "The data obtained through Biometry allows our expert eye care professionals to tailor interventions to each patient's unique eye anatomy.",
                subdesc : "Experience the precision of Biometry at Nakpil Eye Clinic. Let us guide you towards optimal vision outcomes with personalized and accurate measurements."
            }
        ],
        recommended : [
            "",
            "",
        ],
        mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
        images : [
            "https://placehold.it/1200x600",
            "https://placehold.it/1200x600"
        ],
        price : "",
        link : "..//foreignbodiesremoval"
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
                            <Typography>{selectedService?.subdesc1}</Typography>
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
                            return <Stack key={title} sx={{width : "100%"}}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color:'#698bd1' }}>{title}</Typography>
                                <Typography variant="body1">{description}</Typography>
                                &nbsp;
                                <Typography variant="body1">{subdesc}</Typography>
                                &nbsp;
                            </Stack>
                        })}
                        {selectedService?.whychoose?.map((item, idx) => {
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