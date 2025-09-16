import {useState} from "react";
import {Stack, Typography, Box, Button, Chip, Card } from "@mui/material";
import {Panel} from "../components/index.jsx";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";



const OtherPackageNav = (props) => {

	OtherPackageNav.propTypes = {
		onClick : PropTypes.func.isRequired,
	}

	const {
		onClick
	} = props;

	OtherPackageNav.propTypes = {

	}

	const navigate = useNavigate();

	const [serviceList1, ] = useState([
		{
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

		},
		{
			id : 2,
			title : "Premium Eye Examination",
			summary : "Elevate your eye care experience with this all-inclusive package, ensuring a thorough understanding of your visual well-being.",
			description : "Our Premium Eye Examination Package is a pinnacle offering, meticulously crafted to provide an unparalleled assessment of your eye health. Elevate your eye care experience with this all-inclusive" +
				" package, ensuring a thorough understanding of your visual well-being.",
			subdesc : "",
			subtitle1 : "Inclusions of the Premium Eye Examination Package",
			keyaspects : [
				{
					title : "1. Blood Pressure Test",
					description : "Lay the foundation with a thorough assessment of your general health through a blood pressure test, recognizing the vital link between systemic health and ocular well-being.",
				},
				{
					title : "2. Visual Acuity Assessment",
					description: "Precisely measure the sharpness and clarity of your vision, identifying and addressing any refractive errors impacting your visual acuity.",
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
					description : "Dive into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.",
				},
				{
					title : "6. Comprehensive Dry Eye Assessment",
					description : "Identify and address symptoms of dry eye syndrome at an advanced level, ensuring your eyes remain comfortable and well-lubricated.",
				},
				{
					title : "7. Cataract Screening",
					description : "Screen for early signs of cataracts, facilitating timely intervention and preserving your visual clarity.",
				},
				{
					title : "8. Glaucoma Screening VH Test with Tonometry IOP Test",
					description : "Detects potential indicators of glaucoma through an in-depth screening, including Tonometry IOP testing for precise intraocular pressure measurement.",
				},
				{
					title : "9. Vision Examination & Correction (Objective / Subjective)",
					description : "Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.",
				},
				{
					title : "10. Automated Keratometry (As Necessary)",
					description : "Employ advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.",
				},

			],
			button: [
				"Book an Appointment",
			],
			note: [
				"Note: Price is subject to change without prior notice.",
			],
			description1 : ["Immerse yourself in the epitome of eye care with the Premium Eye Examination Package at Nakpil Eye Clinic. Let us guide you towards excellence, ensuring your eyes receive the highest standard of care."],
			recommended : [
				"",
				"",
			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "Php 1,499.00",
			vat:  "inclusive of VAT",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 3,
			title : "Pediatric Eye Examination",
			summary: "The gentle care and precision required for pediatric eye health, providing a thorough understanding of your child's visual well-being.",
			description : "Our Pediatric Eye Examination Package with Cycloplegic Refraction is thoughtfully designed to ensure a comprehensive assessment of your child's vision. We prioritize the " +
				"gentle care and precision required for pediatric eye health, providing a thorough understanding of your child's visual well-being.",
			subdesc : "",
			subtitle1 : "Inclusions of the Pediatric Eye Examination Package",
			keyaspects : [
				{
					title : "1. Visual Acuity Assessment",
					description : "Evaluate the sharpness and clarity of your child's vision, identifying any potential refractive errors that may affect visual acuity.",
				},
				{
					title : "2. Eye Motility Assessment",
					description: "Examine the coordination and movement of your child's eye muscles, ensuring optimal functionality and identifying any issues.",
				},
				{
					title : "3. Color Vision Assessment",
					description : "Explore your child's ability to perceive and differentiate colors accurately, assessing the health of their color vision.",
				},
				{
					title : "4. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)",
					description : "Delve into the intricate details of your child's eye structures through advanced tools, allowing for a comprehensive physical examination.",
				},
				{
					title : "5. Standard Dry Eye Assessment",
					description : "Identify and address any symptoms of dry eye syndrome your child may be experiencing, ensuring their eyes remain comfortable and well-lubricated.",
				},
				{
					title : "6. Binocular Vision Assessment",
					description : "Assess your child's ability to use both eyes together effectively, crucial for activities like reading and sports.",
				},
				{
					title : "7. Suppression Test",
					description : "Evaluate the suppression of one eye in binocular vision, identifying any issues that may affect depth perception.",
				},
				{
					title : "8. Vision Examination & Correction (Objective / Subjective)",
					description : "Tailor your child's vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.",
				},
				{
					title : "9. Automated Keratometry (As Necessary)",
					description : "Utilize advanced keratometry, as necessary, to assess the curvature of the cornea and gather additional data for comprehensive diagnostics.",
				},
			],
			button: [
				"Book an Appointment",
			],
			note: [
				"Note: Price is subject to change without prior notice.",
			],
			description1 : ["Choose the Pediatric Eye Examination Package with Cycloplegic Refraction at Nakpil Eye Clinic. Let us guide your child towards a future with clear and healthy vision."],
			recommended : [
				"",
				"",
			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "Php 1,499.00",
			vat:  "inclusive of VAT",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 4,
			title : "Executive Eye Examination",
			summary: "Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care",
			description : "Step into a realm of superior eye care with our Executive Eye Examination Package at Nakpil Eye Clinic. Meticulously designed for " +
				"those seeking unparalleled precision and comprehensive insights into their eye health, this package is a pinnacle of advanced diagnostics and personalized care.",
			subdesc : "",
			subtitle1 : "Inclusions of the Executive Eye Examination Package",
			keyaspects : [
				{
					title : "1. Blood Pressure Test",
					description : "Initiate your examination with a thorough assessment of your general health, recognizing the intrinsic link between systemic well-being and ocular health.",
				},
				{
					title : "2. Visual Acuity Assessment",
					description: "Evaluate the sharpness and clarity of your vision, addressing any refractive errors that may impact visual acuity.",
				},
				{
					title : "3. Eye Motility Assessment",
					description : "Examine the coordination and movement of your eye muscles, ensuring optimal functionality and identifying potential issues.",
				},
				{
					title : "4. Comprehensive Dry Eye Assessment",
					description : "Explore your ability to perceive and differentiate colors accurately, providing detailed insights into the health of your color vision.",
				},
				{
					title : "5. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)",
					description : "Dive into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.",
				},
				{
					title : "6. Comprehensive Dry Eye Assessment",
					description : "Identify and address any symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.",
				},
				{
					title : "7. Vision Examination & Correction (Objective / Subjective)",
					description : "Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.",
				},
				{
					title : "8. Digital Sensorimotor Binocular Vision Assessment",
					description : "Assess your ability to use both eyes together effectively, crucial for activities such as reading and sports.",
				},
			],
			button: [
				"Book an Appointment",
			],
			note: [
				"Note: Price is subject to change without prior notice.",
			],
			description1 : ["Opt for the Executive Eye Examination Package at Nakpil Eye Clinic. Let us guide you towards a future with clear, healthy, and optimized vision."],
			recommended : [
				"",
				"",
			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "Php 4,999.00",
			vat:  "inclusive of VAT",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 5,
			title : "Executive Eye Examination with Perimetry",
			summary : "Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.",
			description : "Experience the epitome of advanced eye care at Nakpil Eye Clinic with our Executive Plus Eye Examination Package, now enhanced with Perimetry. This comprehensive package " +
				"is tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health, ensuring a meticulous assessment from every perspective.",
			subdesc : "",
			subtitle1 : "Inclusions of the Executive Plus Eye Examination Package",
			keyaspects : [
				{
					title : "1. Blood Pressure Test",
					description : "Initiate your examination with a thorough assessment of your general health, recognizing the intrinsic link between systemic well-being and ocular health.",
				},
				{
					title : "2. Visual Acuity Assessment",
					description: "Evaluate the sharpness and clarity of your vision, addressing any refractive errors that may impact visual acuity.",
				},
				{
					title : "3. Eye Motility Assessment",
					description : "Examine the coordination and movement of your eye muscles, ensuring optimal functionality and identifying potential issues.",
				},
				{
					title : "4. Comprehensive Ishihara Color Vision Test",
					description : "Explore your ability to perceive and differentiate colors accurately, providing detailed insights into the health of your color vision.",
				},
				{
					title : "5. D-15 Color Vision Test (As Necessary)",
					description : "Employ the D-15 test as necessary to further assess color vision and identify subtle variations in color perception.",
				},
				{
					title : "6. Physical Eye Examination (Bio-microscopy / Ophthalmoscopy)",
					description : "Delve into the intricate details of your eye's structures through advanced tools, allowing for a comprehensive physical examination.",
				},
				{
					title : "7. Comprehensive Dry Eye Assessment",
					description : "Identify and address any symptoms of dry eye syndrome, ensuring your eyes remain comfortable and well-lubricated.",
				},
				{
					title : "8. Cataract Screening",
					description : "Screen for early signs of cataracts, facilitating timely intervention and preserving your visual clarity.",
				},
				{
					title : "9. Glaucoma Screening (Tonometry-IOP Test)",
					description : "Detects potential indicators of glaucoma through an in-depth screening, including Tonometry-IOP testing for precise intraocular pressure measurement.",
				},
				{
					title : "10. Fundus Imaging with Interpretation",
					description : "Utilize advanced imaging to capture detailed images of the retina, allowing for a comprehensive analysis of the eye's structural layers.",
				},
				{
					title : "11. Vision Examination & Correction (Objective / Subjective)",
					description : "Tailor your vision correction needs through both objective and subjective assessments, ensuring personalized and accurate prescriptions.",
				},
				{
					title : "12. Perimetry",
					description : "Enhance your examination with Perimetry, a visual field test that assesses your peripheral vision and aids in the early detection of certain eye conditions.",
				},
			],
			button: [
				"Book an Appointment",
			],
			note: [
				"Note: Price is subject to change without prior notice.",
			],
			description1 : ["Opt for the Executive Eye Examination Package at Nakpil Eye Clinic. Let us guide you towards a future with clear, healthy, and optimized vision."],
			recommended : [
				"",
				"",
			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "Php 5,999.00",
			vat:  "inclusive of VAT",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 6,
			title : "Corporate Eye Care Program",
			summary: "A Comprehensive eye examination package for your company or organizations." ,
			description : "Nakpil Eye Clinic has been known to provide excellent eye and vision care for many years. And now through our Corporate Eye Care program we can bring the same excellent service to your company on your next " +
				"annual eye examination. We use the latest technology to provide state of the art eye examinations and specialist services to ensure that your employees and staffs will receive the best eye-care. In addition, we can " +
				"also conduct workstation assessment and provide necessary advice for them to have the safest, the healthiest, and the most visually effective working conditions.",
			subtitle : "",
			subdesc : "Our corporate scheme enables companies to fulfill their health and safety obligations for VDU users and other workers with minimal administration work and expenditure and provides employees with large " +
				"discounts on our products and services.",
			subtitle1 : "Inclusions of the Corporate Eye Care Program",
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
			additionaltest : [
				{
					title: "Additional Tests offered on Corporate rates (In clinic tests):",
					description: "1. Corneal Topography",
				},
				{
					description: "2. IOP Tonometry (Eye pressure test)",
				},
				{
					description: "3. Fundus Imaging Scan",
				},
				{
					description: "4. OCT Optical Coherence Tomography",
				},
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
			link : "..//IshiharaColorVisionTest"
		},
		{
			id : 7,
			title : "Follow-up Checkup for Adults",
			summary : "Designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.",
			description : "At Nakpil Eye Clinic, we recognize that adult eye health requires dedicated attention. Our comprehensive Follow-up Checkup for adults is meticulously tailored to monitor and address changes in eye " +
				"health over time. This checkup is designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.",
			subdesc : "",
			subtitle1 : "Key Components",
			keyaspects : [
				{
					title : "1. Review of Previous Records",
					description : "A detailed examination of your prior eye health records, ensuring a comprehensive understanding of your adult eye health history.",
				},
				{
					title : "2. Visual Acuity Assessment",
					description: "Evaluation of the sharpness and clarity of your vision, addressing any changes or fluctuations since your last examination.",
				},
				{
					title : "3. Eye Health Check",
					description : "A thorough examination of the overall health of your eyes, utilizing advanced tools such as bio-microscopy and ophthalmoscopy.",
				},
				{
					title : "4. Refractive Assessment",
					description : "Evaluation of your refractive status to determine whether any adjustments to your prescription are necessary.",

				},
				{
					title : "5. Vision Examination & Correction (Objective / Subjective)",
					description : "Tailoring your vision correction needs through both objective and subjective assessments, ensuring accurate and personalized prescriptions for adult patients.",
				},
				{
					title : "6. Discussion of Changes or Concerns",
					description : "A personalized consultation to discuss any changes in your vision or eye health, addressing concerns specific to adult eye care and providing guidance for ongoing care.",
				},
			],
			button: [
				"Book an Appointment",
			],
			note: [
				"Note: Price is subject to change without prior notice.",
			],
			description1 : ["Choose the comprehensive Follow-up Checkup for Adults at Nakpil Eye Clinic for ongoing care that prioritizes the health and clarity of your vision throughout adulthood. Let us guide " +
			"you on your journey to sustained eye health."],
			recommended : [
				"",
				"",
			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "Php 500.00",
			vat:  "inclusive of VAT",
			link : "..//foreignbodiesremoval"

		},
	]);



	const handleClick = (other) => {
		onClick(other);
	}

	const handleExamPackage = ()=>{
		navigate("/services");
	}

	return (
		<Box sx={{backgroundColor: "#FFF" , p: 2, borderRadius: '10px'}}>

			<Stack direction="column" spacing={2} sx={{width : "100%", }}>
				<Typography variant="h5"
							sx={{  marginBottom: '15px',
								fontWeight: 'bold', }}>
					Exam Packages
				</Typography>
				{serviceList1.map((service, idx) => (
					<Card
						key={service?.title}
						sx={{
							borderRadius: '10px',
							width: '100%',
							bgcolor: 'common.white',
							boxShadow: 1,
							'&:hover': { boxShadow: 4 },
							overflow: 'hidden'
						}}>
						<Box
							sx={{
								backgroundColor: "#e3f2fd",
								width: "500",
								objectFit: 'contain',
								p: 1,
							}}
							onClick={()=>{handleClick(service)}}>

							<Stack direction="row" sx={{ justifyContent: "space-between" }}>
								<Typography variant="h5" sx={{ color: '#1565c0' }}>{service?.title}</Typography>
								{service?.price === "" ? null :
									<Stack direction="column" sx={{ textAlign: "flex-end" }}>
										<Chip
											label={service?.price}
											variant="outlined"
											sx={{
												bgcolor: 'rgba(227,242,253,1)',
												color: 'primary.dark',
												borderColor: 'rgba(187,222,251,1)',
											}}
										/>
										<Typography variant="span" sx={{fontSize: "10px", pt:"1px"}}>{service?.vat}</Typography>
									</Stack>
								}

							</Stack>
							<Stack direction="column" >
								<Typography fontSize="12px" color="text.secondary">
									{service?.summary}
								</Typography>
							</Stack>
						</Box>
					</Card>
				))}
			</Stack>

			<Box sx={{ pt: '10px' }}>
				<Button variant="contained" onClick={handleExamPackage} >Other Packages</Button>
			</Box>

		</Box>
	)
}

export default OtherPackageNav;
















{/*}
import {useState} from "react";
import {Stack, Typography, Box, Button, Chip, Card } from "@mui/material";
import {Panel} from "../components/index.jsx";
import {useNavigate} from "react-router-dom";
import * as React from "react";



const ExamPackageNav = (props) => {

	const navigate = useNavigate();

	const [serviceList, setServiceList] = useState([
		{
			title: 'Standard Eye Examination',
			description:
				'A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.',
			vat: 'inclusive of VAT',
			price: 'Php 999.00',
			link : "/standardeyeexam"
		},
		{
			title: 'Premium Eye Examination',
			description:
				'Elevate your eye care experience with this all-inclusive package, ensuring a thorough understanding of your visual well-being.',
			vat: 'inclusive of VAT',
			price: 'Php 1,499.00',

		},
		{
			title: 'Pediatric Eye Examination',
			description:
				'The gentle care and precision required for pediatric eye health, providing a thorough understanding of your child\'s visual well-being.',
			vat: 'inclusive of VAT',
			price: 'Php 1,499.00',

		},
		{
			title: 'Follow-Up Eye Examination',
			description:
				'Designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.',
			vat: 'inclusive of VAT',
			price: 'Php 500.00',

		},
		{
			title: 'Executive Eye Examination',
			description:
				'Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care',
			vat: 'inclusive of VAT',
			price: 'Php 4,999.00',

		},
		{
			title: 'Executive Plus Eye Examination',
			description:
				'Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.',
			vat: 'inclusive of VAT',
			price: 'Php 5,999.00',

		},
		{
			title: 'Corporate Eye Care Program',
			description:
				'A Comprehensive eye examination package for your company or organizations.',
			price: '',
			link : "/corpeyecareprog"

		},
	]);
	//const [serviceList, ] = useState([

	const [otherPackages] = useState([
		{
			title: 'Visual Performance Assessment',
			description:
				'Unlock your full visual potential with our cutting-edge performance assessment.',
			link : "/visperfassessment"



		},
		{
			title: 'Biometry',
			description:
				'Our advanced biometry techniques unlock personalized IOL solutions for crystal-clear eyesight.',
			link : "/biometry"


		},
		{
			title: 'Fundus Scan with AirDoc',
			description:
				'Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.',

			link : "/fsairdoc"


		},
		{
			title: 'Fundus Scan with Kanghua',
			description:
				'Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.',
			link: "/fskanghua"

		},
		{
			title: 'Foreign Bodies Removal',
			description:
				'Designed to provide swift relief, ensuring your eyes stay clear, comfortable, and healthy.',
			link: "/foreignbodiesremoval"


		},
		{
			title: 'Ishihara Color Vision Test',
			description:
				'Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!',
			link: "/ishiharacolvistest"


		},
		{
			title: 'Ishihara with Farnsworth',
			description:
				'Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!',
			link: "/ishiharawfarnsworth"


		},
		{
			title: 'Perimetry / Visual Field Test',
			description:
				'Our advanced visual field tests reveal hidden insights, guiding personalized eye care for a brighter outlook.',
			link: "/perimetryvisfieldtest"


		},
		{
			title: 'Intra Ocular Pressure Assessment',
			description:
				'Personalized eye care, ensuring a healthy optic nerve and clear vision.',
			link: "/intraocularpressureassessment"


		},
		{
			title: 'OrthoKeratology Lens',
			description:
				'Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!',
			link: "/orthokeratologylens"


		},
		{
			title: 'OrthoKeratology Lens Fitting',
			description:
				'Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!',
			link: "/orthokeratologylensfitting"


		},
		{
			title: 'Cycloplegic Eyedrops',
			description:
				'Unlock clarity with Cycloplegic Eyedrops, illuminating your vision with unparalleled precision and focus.',
			link: "/cycloplegiceyedrops"


		},
		{
			title: 'Topography',
			description:
				'Unveil the intricate landscapes of your eyes for unrivaled clarity and insight into your vision\'s extraordinary terrain.',
			link: "/topography"


		},
		{
			title: 'Vision Therapy',
			description:
				'Transform your vision into its fullest potential with the dynamic journey of Vision Therapy.',
			link: "/visiontherapy"


		},
	])


	const handleClick = (service) => {
		console.log(service);
		navigate(service?.link);
	}

	const handleOtherPackage = ()=>{
		navigate("/standardeyeexam");
	}

	return (
		<Box sx={{backgroundColor: "#FFF" , p: 2}}>






			<Stack direction="column" spacing={2} sx={{width : "100%", }}>
				<Typography variant="h5"
							sx={{  marginBottom: '15px',
								fontWeight: 'bold', }}>Other Packages</Typography>
				{otherPackages.map((service, idx) => (
					<Box
						sx={{
							borderRadius: '10px',
							width: '100%',
							bgcolor: 'common.white',
							boxShadow: 1,
							'&:hover': { boxShadow: 4 },
							overflow: 'hidden'
						}}>
						<Box
							key={service?.title}
							sx={{
								backgroundColor: "#e3f2fd",
								width: "500",
								objectFit: 'contain',
								p: 1,
							}}
							onClick={()=>{handleClick(service)}}>

							<Stack direction="row" sx={{ justifyContent: "space-between" }}>
								<Typography variant="h5" sx={{ color: '#1565c0' }}>{service?.title}</Typography>
								<Stack direction="column" sx={{ textAlign: "flex-end" }}>
									<Chip
										label={service?.price}
										variant="outlined"
										sx={{
											bgcolor: 'rgba(227,242,253,1)',
											color: 'primary.dark',
											borderColor: 'rgba(187,222,251,1)',
										}}
									/>
									<Typography variant="span" sx={{fontSize: "10px", pt:"1px"}}>{service?.vat}</Typography>
								</Stack>
							</Stack>
							<Stack direction="column" >
								<Typography fontSize="12px" color="text.secondary">
									{service?.description}
								</Typography>
							</Stack>
						</Box>
					</Box>
				))}
			</Stack>
			<Box sx={{ pt: '10px' }}>
				<Button variant="contained" onClick={handleOtherPackage} >Exam Packages</Button>
			</Box>
		</Box>
	)
}

export default ExamPackageNav;

*/}