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
            link : "..//OrthokeratologyLensFitting"

        },
        {
            id : 2,
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
        },
        {
            id : 3,
            title : "Foreign Bodies Removal",
            description : "Accidents happen, and when a foreign body finds its way into your eye, prompt and expert removal is essential. Our Foreign Body Removal service is designed to provide swift " +
                "relief, ensuring your eyes stay clear, comfortable, and healthy.",
            subtitle : "What to Expect?",
            subdesc : "Foreign bodies in the eye can cause discomfort, irritation, and potential damage if not addressed promptly. Our Foreign Body Removal service is a quick and specialized procedure " +
                "conducted by our experienced eye care professionals. We aim to alleviate your discomfort and minimize any potential risks associated with foreign objects lodged in the eye.",
            subtitle1 : "Key Aspects of Foreign Body Removal",
            keyaspects : [
                {
                    title : "1. Prompt Intervention",
                    description : "We prioritize immediate action to address the presence of foreign bodies, preventing further irritation or injury to the eye.",
                },
                {
                    title : "2. Specialized Tools and Techniques",
                    description: "Our eye care professionals use specialized tools and techniques to safely and effectively remove foreign bodies, ensuring minimal discomfort for the patient.",
                },
                {
                    title : "3. Comprehensive Eye Examination",
                    description : "Following the removal procedure, we conduct a thorough examination to assess any potential damage or irritation caused by the foreign body.",
                },
                {
                    title : "4. Patient Education",
                    description : "We take the time to educate our patients on preventive measures and safety practices to minimize the risk of future foreign body incidents.",
                    subdescription : "For prompt and expert foreign body removal, trust Nakpil Eye Clinic. Let us provide the swift relief you need, ensuring your eyes remain clear, comfortable, and healthy."
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
            link : "..//foreignbodiesremoval"

        },
        {
            id : 4,
            title : "Biometry",
            description : "Our Biometry service is a cutting-edge diagnostic procedure designed to obtain accurate measurements of your eye's structures, ensuring optimal outcomes for various eye surgeries and interventions.",
            subdesc : "Biometry is a non-invasive and painless diagnostic tool that captures detailed measurements of key structures within the eye, such as the length of the eyeball and the curvature of the cornea. These" +
                " measurements are crucial for planning and performing procedures like cataract surgery and implanting intraocular lenses (IOLs).",
            subtitle1 : "Key Features",
            keyfeatures : [
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
                    subdescription : "Experience the precision of Biometry at Nakpil Eye Clinic. Let us guide you towards optimal vision outcomes with personalized and accurate measurements."
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
            link : "..//foreignbodiesremoval"

        },
        {
            id : 4,
            title : "Fundus Scan with AirDoc",
            description : "Immerse yourself in the future of ocular diagnostics with our state-of-the-art Fundus Scan, driven by innovative AirDoc empowered by Artificial Intelligence (AI). This revolutionary combination " +
                "provides a detailed and intelligent examination of your retina, setting new standards in precision eye care.",
            subdesc : "Our Fundus Scan, utilizing AirDoc with AI integration, is a groundbreaking diagnostic tool that goes beyond traditional imaging. This non-invasive procedure captures highly detailed images of the " +
                "retina, harnessing the power of AI for intelligent analysis and early detection of eye conditions.",
            subtitle1 : "Key Aspects of AI-Powered Fundus Scan",
            keyfeatures : [
                {
                    title : "1. AI-Enhanced Analysis",
                    description : "The advanced algorithms of our AirDoc intelligently analyze retinal images, aiding in the early identification of subtle abnormalities and potential eye diseases.",
                },
                {
                    title : "2. Precision Diagnostics",
                    description: "AI-driven Fundus Scans offer unparalleled precision, providing our eye care professionals with detailed insights into the condition of your retina and optic nerve.",
                },
                {
                    title : "3. Efficient Screening",
                    description : "The integration of AI streamlines the screening process, allowing for faster and more efficient analysis, leading to quicker diagnosis and timely intervention.",
                },
                {
                    title : "4. Personalized Care",
                    description : "The combination of AI and human expertise enables us to craft personalized treatment plans based on the unique characteristics of your ocular health.",
                    subdescription : "Experience the fusion of technology and expertise with the AI-Powered Fundus Scan at Nakpil Eye Clinic. Let us lead you towards an era of intelligent ocular wellness, setting new " +
                        "standards in precision eye care."
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
            link : "..//foreignbodiesremoval"

        },
        {
            id : 5,
            title : "Ishihara Color Vision Test with Farnsworth (D-15)",
            description : "Elevate your understanding of color vision with our combined Ishihara Color Vision and Farnsworth Test. This dual assessment provides a nuanced evaluation of your color perception, ensuring a " +
                "thorough understanding of your visual capabilities.",
            subdesc : "Our combined approach involves the Ishihara Color Vision Test, which focuses on identifying red-green color deficiencies, paired with the Farnsworth Test, a more detailed examination of color " +
                "discrimination and arrangement. Together, these tests offer a holistic evaluation of your color vision.",
            subtitle1 : "Key Aspects of the Combined Test",
            keyfeatures : [
                {
                    title : "1. Precise Color Deficiency Identification",
                    description : "The Ishihara Test pinpoints red-green color deficiencies, while the Farnsworth Test provides a detailed analysis of color discrimination across the spectrum.",
                },
                {
                    title : "2. Quick and Efficient",
                    description: "Despite its comprehensive nature, our combined test is conducted efficiently, providing a thorough assessment without undue inconvenience.",
                },
                {
                    title : "3. Tailored Recommendations",
                    description : "Based on the combined test results, our experienced eye care professionals offer personalized recommendations for managing and enhancing your color vision.",
                },
                {
                    title : "4. Comprehensive Vision Wellness",
                    description : "Beyond color vision, we consider the broader aspects of your visual health, ensuring a holistic approach to your eye care.",
                    subdescription : "Explore the depth and richness of your color vision with our combined Ishihara Color Vision and Farnsworth Test at Nakpil Eye Clinic. Let us guide you towards a comprehensive " +
                        "understanding of your visual world."
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
            link : "..//foreignbodiesremoval"

        },
        {
            id : 6,
            title : "Intraocular Pressure (IOP) Assessment",
            description : "Uncover the crucial insights into your eye pressure with our Intraocular Pressure (IOP) Assessment. This diagnostic procedure plays a pivotal role in detecting and managing conditions such as " +
                "glaucoma, ensuring the longevity of your visual clarity.",
            subdesc : "The Intraocular Pressure Assessment, commonly known as tonometry, is a non-invasive and painless test that measures the pressure within your eyes. This key metric is essential for evaluating the" +
                "risk of glaucoma, a condition characterized by elevated intraocular pressure that can lead to optic nerve damage.",
            subtitle1 : "Key Aspects of Intraocular Pressure Assessment",
            keyfeatures : [
                {
                    title : "1. Early Glaucoma Detection",
                    description : "Elevated intraocular pressure is a significant risk factor for glaucoma. Regular assessments allow for the early detection and management of this sight-threatening condition.",
                },
                {
                    title : "2. Quick and Painless",
                    description: "The assessment is quick, typically taking just a few minutes, and involves minimal discomfort for the patient.",
                },
                {
                    title : "3. Individualized Eye Care",
                    description : "Intraocular pressure readings contribute to a personalized eye care plan, enabling our expert team to tailor interventions based on your unique eye health needs.",
                },
                {
                    title : "4. Preventive Eye Wellness",
                    description : "Regular IOP assessments are a proactive measure to monitor and maintain eye health, preventing potential complications associated with elevated pressure.",
                    subdescription : "Prioritize the longevity of your vision with the Intraocular Pressure Assessment at Nakpil Eye Clinic. Let us be your partners in preserving the health and clarity of your eyes."
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
            link : "..//foreignbodiesremoval"

        },
        {
            id : 7,
            title : "Cycloplegic Refraction",
            description : "Our Cycloplegic Refraction service is designed to provide a comprehensive and precise assessment of your refractive error, ensuring that your prescription is determined with the utmost accuracy.",
            subdesc : "Cycloplegic Refraction is an advanced eye examination technique that involves using specialized eye drops to temporarily paralyze the muscles within the eye, particularly the ciliary muscle. " +
                "By doing so, we achieve maximum relaxation of the eye's focusing mechanism, allowing for a more accurate measurement of your refractive error.",
            subtitle1 : "Key Features of Cycloplegic Refraction",
            keyfeatures : [
                {
                    title : "1. Maximum Accuracy",
                    description : "By temporarily suspending the eye's natural focusing ability, Cycloplegic Refraction provides an accurate and reliable measurement of your refractive error.",
                },
                {
                    title : "2. Ideal for All Ages",
                    description: "Particularly beneficial for children and young adults, Cycloplegic Refraction ensures accurate prescription determination, crucial for eye development and addressing potential vision issues.",
                },
                {
                    title : "3. Comprehensive Eye Examination",
                    description : "Beyond refractive error assessment, Cycloplegic Refraction allows for a thorough examination of the overall health of the eyes, aiding in the early detection of potential eye conditions.",
                },
                {
                    title : "4. Tailored Prescription",
                    description : "The precise measurements obtained through this technique enable us to craft a customized prescription, optimizing your visual clarity.",
                    subdescription : "Experience the precision of Cycloplegic Refraction at Nakpil Eye Clinic. Let us guide you towards clear and accurate vision, ensuring your eyes receive the meticulous care they deserve."
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
            link : "..//foreignbodiesremoval"

        },
        {
            id : 8,
            title : "Perimetry or Visual Field Test",
            description : "Welcome to Nakpil Eye Clinic, where we prioritize your visual health and clarity. Explore the intricacies of your visual field with our Perimetry test, also commonly referred to as the Visual Field Test. " +
                "This advanced diagnostic tool offers invaluable insights into your field of vision, aiding in the early detection and management of various eye conditions.",
            subdesc : "Perimetry, or the Visual Field Test, is a sophisticated diagnostic procedure that assesses your field of vision, providing a comprehensive map of how you perceive and interpret visual information in your " +
                "surroundings. This test is instrumental in detecting abnormalities, enabling our expert eye care professionals to create tailored solutions for your visual well-being.",
            subtitle1 : "Key Aspects of Perimetry",
            keyfeatures : [
                {
                    title : "1. Early Detection of Eye Conditions",
                    description : "Perimetry is a vital tool for identifying early signs of eye conditions such as glaucoma, retinal diseases, and neurological disorders, allowing for prompt intervention and management.",
                },
                {
                    title : "2. Mapping Visual Sensitivity",
                    description: "The procedure maps your visual sensitivity across different areas of your visual field, helping us understand variations in your ability to detect light stimuli.",
                },
                {
                    title : "3. Customized Treatment Plans",
                    description : "The insights gained from Perimetry enable us to develop personalized treatment plans based on the specific characteristics of your visual field, ensuring targeted and effective interventions.",
                },
                {
                    title : "4. Monitoring Progression",
                    description : "For individuals with known eye conditions, regular Perimetry tests help monitor the progression of the disease and adjust treatment strategies accordingly.",
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
            link : "..//foreignbodiesremoval"

        },

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