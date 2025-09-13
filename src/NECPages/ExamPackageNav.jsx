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
			link: "/premiumeyeexam"

		},
		{
			title: 'Pediatric Eye Examination',
			description:
				'The gentle care and precision required for pediatric eye health, providing a thorough understanding of your child\'s visual well-being.',
			vat: 'inclusive of VAT',
			price: 'Php 1,499.00',
			link: "/pediatriceyeexam"

		},
		{
			title: 'Follow-Up Eye Examination',
			description:
				'Designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.',
			vat: 'inclusive of VAT',
			price: 'Php 500.00',
			link: "/followupeyeexam"

		},
		{
			title: 'Executive Eye Examination',
			description:
				'Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care',
			vat: 'inclusive of VAT',
			price: 'Php 4,999.00',
			link: "/executiveeyeexam"

		},
		{
			title: 'Executive Plus Eye Examination',
			description:
				'Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.',
			vat: 'inclusive of VAT',
			price: 'Php 5,999.00',
			link: "/execpluseyeexam"

		},
		{
			title: 'Corporate Eye Care Program',
			description:
				'A Comprehensive eye examination package for your company or organizations.',
			price: '',
			link : "/corpeyecareprog"

		},
	]);



	const handleClick = (service) => {
		console.log(service);
		navigate(service?.link);
	}

	const handleOtherPackage = ()=>{
		navigate("/visperfassessment");
	}

	return (
		<Box sx={{backgroundColor: "#FFF" , p: 2, borderRadius: '10px'}}>

			<Stack direction="column" spacing={2} sx={{width : "100%", }}>
				<Typography variant="h5"
							sx={{  marginBottom: '15px',
								fontWeight: 'bold', }}>
					Examination Packages
				</Typography>
				{serviceList.map((service, idx) => (
					<Card
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
									{service?.description}
								</Typography>
							</Stack>
						</Box>
					</Card>
				))}
			</Stack>

			<Box sx={{ pt: '10px' }}>
				<Button variant="contained" onClick={handleOtherPackage} >Other Packages</Button>
			</Box>

		</Box>
	)
}

export default ExamPackageNav;