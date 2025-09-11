import {useState} from "react";
import {Stack, Typography, Box, Button, Chip, Card } from "@mui/material";
import {Panel} from "../components/index.jsx";
import {useNavigate} from "react-router-dom";
import * as React from "react";



const ExamPackageNav = (props) => {

	const navigate = useNavigate();

	const [serviceList, ] = useState([
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


		},
		{
			title: 'Fundus Scan with Kanghua',
			description:
				'Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.',

		},
		{
			title: 'Foreign Bodies Removal',
			description:
				'Designed to provide swift relief, ensuring your eyes stay clear, comfortable, and healthy.',


		},
		{
			title: 'Ishihara Color Vision Test',
			description:
				'Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!',


		},
		{
			title: 'Ishihara with Farnsworth',
			description:
				'Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!',


		},
		{
			title: 'Perimetry / Visual Field Test',
			description:
				'Our advanced visual field tests reveal hidden insights, guiding personalized eye care for a brighter outlook.',


		},
		{
			title: 'Intra Ocular Pressure Assessment',
			description:
				'Personalized eye care, ensuring a healthy optic nerve and clear vision.',


		},
		{
			title: 'OrthoKeratology Lens',
			description:
				'Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!',


		},
		{
			title: 'OrthoKeratology Lens Fitting',
			description:
				'Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!',


		},
		{
			title: 'Cycloplegic Eyedrops',
			description:
				'Unlock clarity with Cycloplegic Eyedrops, illuminating your vision with unparalleled precision and focus.',


		},
		{
			title: 'Topography',
			description:
				'Unveil the intricate landscapes of your eyes for unrivaled clarity and insight into your vision\'s extraordinary terrain.',


		},
		{
			title: 'Vision Therapy',
			description:
				'Transform your vision into its fullest potential with the dynamic journey of Vision Therapy.',


		},
	])


	const handleClick = (service) => {
		console.log(service);
		navigate(service?.link);
	}

	const handleOtherPackage = ()=>{
		navigate("/OtherPackages");
	}

	return (
		<Panel>

			<Stack direction="column" spacing={2} sx={{width : "100%", }}>
				<Typography variant="h5"
							sx={{  marginBottom: '15px',
								fontWeight: 'bold', }}>
					Examination Packages
				</Typography>
				{serviceList.map((service, idx) => (
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
				<Button variant="contained" onClick={handleOtherPackage} >Other Packages</Button>
			</Box>


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

		</Panel>
	)
}

export default ExamPackageNav;