import {useState} from "react";
import {Stack, Typography, Box, Button} from "@mui/material";
import {Panel} from "../components/index.jsx";
import {useNavigate} from "react-router-dom";



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

	const handleClick = (service) => {
		console.log(service);
		navigate(service?.link);
	}

	const handleOtherPackage = ()=>{
		navigate("/OtherPackages");
	}

	return (
		<Panel>
			<Typography variant="h5" sx={{fontWeight : 700}}>Eye Examination Packages</Typography>
			<Stack direction="column" spacing={2} sx={{width : "100%"}}>
				{serviceList.map((service, idx) => (
					<Box
						key={service?.title}
						sx={{
							border : "1px solid #e3f2fd",
							backgroundColor : "#e3f2fd",
							borderRadius : "10px",
						}}
						onClick={()=>{handleClick(service)}}
					>
						<Stack  direction="column" spacing={2} sx={{width : "100%",paddingTop : "10px"}}>
							<Stack direction="row" sx={{width : "100%",justifyContent: "space-between", alignItems: "center", paddingX : "10px"}}>
								<Typography variant="h6" sx={{width : "100%",fontWeight : 700, lineHeight : 1}}>{service?.title}</Typography>
								<Stack direction="column" sx={{width : "100%",justifyContent: "flex-end", alignItems: "flex-end"}} >
									<Typography variant="span" sx={{fontSize: "10px", pt:"1px"}}>{service?.price}</Typography>
									<Typography variant="span" sx={{fontSize: "10px", pt:"1px"}}>{service?.vat}</Typography>
								</Stack>
							</Stack>
							<Box sx={{backgroundColor : "#ffffff", width : "100%", margin : 0,padding : 0}}>
								<Typography variant="p">
									{service?.description}
								</Typography>
							</Box>

						</Stack>
					</Box>
				))}
			</Stack>
			<Button onClick={handleOtherPackage}>Other Packages</Button>
		</Panel>
	)
}

export default ExamPackageNav;