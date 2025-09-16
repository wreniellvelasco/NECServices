import {useState} from "react";
import {Stack, Typography, Box, Button, Chip, Card } from "@mui/material";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";



const ExamPackageNav = (props) => {

	ExamPackageNav.propTypes = {
		onClick : PropTypes.func.isRequired,
	}

	const {
		onClick
	} = props;

	ExamPackageNav.propTypes = {

	}

	const navigate = useNavigate();

	const [serviceList, ] = useState([
		{
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

		},
		{
			id : 2,
			title : "Cycloplegic Refraction",
			summary : "Unlock clarity with Cycloplegic Eyedrops, illuminating your vision with unparalleled precision and focus.",
			description : "Our Cycloplegic Refraction service is designed to provide a comprehensive and precise assessment of your refractive error, ensuring that your prescription is determined with the utmost accuracy.",
			subdesc : "Cycloplegic Refraction is an advanced eye examination technique that involves using specialized eye drops to temporarily paralyze the muscles within the eye, particularly the ciliary muscle. " +
				"By doing so, we achieve maximum relaxation of the eye's focusing mechanism, allowing for a more accurate measurement of your refractive error.",
			subtitle1 : "Key Features of Cycloplegic Refraction",
			keyaspects : [
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
					subdesc : "Experience the precision of Cycloplegic Refraction at Nakpil Eye Clinic. Let us guide you towards clear and accurate vision, ensuring your eyes receive the meticulous care they deserve."
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

		},
		{
			id : 3,
			title : "Foreign Bodies Removal",
			summary: "Designed to provide swift relief, ensuring your eyes stay clear, comfortable, and healthy." ,
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
					subdesc : "For prompt and expert foreign body removal, trust Nakpil Eye Clinic. Let us provide the swift relief you need, ensuring your eyes remain clear, comfortable, and healthy."
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

		},
		{
			id : 4,
			title : "Fundus Scan with AirDoc",
			summary : "Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.",
			description : "Immerse yourself in the future of ocular diagnostics with our state-of-the-art Fundus Scan, driven by innovative AirDoc empowered by Artificial Intelligence (AI). This revolutionary combination " +
				"provides a detailed and intelligent examination of your retina, setting new standards in precision eye care.",
			subdesc : "Our Fundus Scan, utilizing AirDoc with AI integration, is a groundbreaking diagnostic tool that goes beyond traditional imaging. This non-invasive procedure captures highly detailed images of the " +
				"retina, harnessing the power of AI for intelligent analysis and early detection of eye conditions.",
			subtitle1 : "Key Aspects of AI-Powered Fundus Scan",
			keyaspects : [
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
					subdesc : "Experience the fusion of technology and expertise with the AI-Powered Fundus Scan at Nakpil Eye Clinic. Let us lead you towards an era of intelligent ocular wellness, setting new " +
						"standards in precision eye care."
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

		},
		{
			id : 5,
			title : "Fundus Scan with Kanghua",
			summary : "Our advanced fundus scans reveal intricate details of your eye’s inner landscape, guiding personalized care.",
			description :"Elevate your understanding of ocular health with our cutting-edge Fundus Scan, powered by Kanghua. This diagnostic procedure provides an intricate view of " +
				"the retina, allowing for early detection and precise management of various eye conditions.",
			subdesc : "Our Fundus Scan, conducted with the latest Kanghua Fundus Imaging equipment, is a non-invasive and high-resolution imaging process that captures detailed images of the back of your eye, " +
				"including the retina and optic nerve. This technology-rich procedure is instrumental in diagnosing and monitoring conditions such as diabetic retinopathy, macular degeneration, and glaucoma.",
			subdesc1 : "Experience the precision of ocular imaging with the Fundus Scan powered by Kanghua at Nakpil Eye Clinic. Let us guide you towards a clearer and healthier vision.",
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

		},
		{
			id : 6,
			title : "Intraocular Pressure (IOP) Assessment",
			summary : "Personalized eye care, ensuring a healthy optic nerve and clear vision.",
			description : "Uncover the crucial insights into your eye pressure with our Intraocular Pressure (IOP) Assessment. This diagnostic procedure plays a pivotal role in detecting and managing conditions such as " +
				"glaucoma, ensuring the longevity of your visual clarity.",
			subdesc : "The Intraocular Pressure Assessment, commonly known as tonometry, is a non-invasive and painless test that measures the pressure within your eyes. This key metric is essential for evaluating the" +
				"risk of glaucoma, a condition characterized by elevated intraocular pressure that can lead to optic nerve damage.",
			subtitle1 : "Key Aspects of Intraocular Pressure Assessment",
			keyaspects : [
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
					subdesc : "Prioritize the longevity of your vision with the Intraocular Pressure Assessment at Nakpil Eye Clinic. Let us be your partners in preserving the health and clarity of your eyes."
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

		},
		{
			id : 7,
			title : "Ishihara Color Vision Test",
			summary: "Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes! " ,
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
					subdesc : "Discover the true spectrum of your color vision with the Ishihara Color Vision Test at Nakpil Eye Clinic. Let us guide you towards a vibrant and accurate perception of the world around you."
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
			link : "..//IshiharaColorVisionTest"
		},
		{
			id : 8,
			title : "Ishihara Color Vision Test with Farnsworth (D-15)",
			summary : "Discover your color vision with the Ishihara Test. Uncover hidden hues and see the world through new eyes!",
			description : "Elevate your understanding of color vision with our combined Ishihara Color Vision and Farnsworth Test. This dual assessment provides a nuanced evaluation of your color perception, ensuring a " +
				"thorough understanding of your visual capabilities.",
			subdesc : "Our combined approach involves the Ishihara Color Vision Test, which focuses on identifying red-green color deficiencies, paired with the Farnsworth Test, a more detailed examination of color " +
				"discrimination and arrangement. Together, these tests offer a holistic evaluation of your color vision.",
			subtitle1 : "Key Aspects of the Combined Test",
			keyaspects : [
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
					subdesc : "Explore the depth and richness of your color vision with our combined Ishihara Color Vision and Farnsworth Test at Nakpil Eye Clinic. Let us guide you towards a comprehensive " +
						"understanding of your visual world."
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

		},
		{
			id : 9,
			title : "Orthokeratology Lens", //
			summary : "Our advanced orthokeratology lenses reshape your cornea while you sleep, leaving you glasses-free during the day!",
			description : "Experience the freedom of clear vision without the constraints of glasses or daytime contact lenses through our Orthokeratology Lens services. Commonly known as Ortho-K, this innovative " +
				"approach corrects your vision while you sleep, offering a lens-free daytime experience tailored to your unique visual needs.",
			subtitle : "Key Aspects of Perimetry",
			subdesc : "Orthokeratology involves the use of specially designed contact lenses that reshape the cornea overnight, allowing for improved focusing power during the day. This non-surgical, reversible " +
				"process offers a vision correction alternative for those seeking freedom from glasses and daytime contacts.",
			subtitle1 : "Key Features of Orthokeratology Lens:",
			keyaspects : [
				{
					description : "Vision Correction Without Surgery: Ortho-K provides a non-invasive option for vision correction, eliminating the need for surgical procedures like LASIK.",
				},
				{
					description :"Myopia Control: Orthokeratology has been proven effective in slowing down the progression of myopia (nearsightedness) in children and young adults.",
				},
				{
					description :"Lens-Free Daytime Experience: Enjoy clear vision throughout the day without the hassle of glasses or traditional contact lenses.",
				},
				{
					description :"Reversible and Customizable: The effects of Ortho-K are reversible, and the lenses can be customized to suit your individual prescription and lifestyle."
				},


			],
			whychoose : [
				{
					title : "Why Choose Nakpil Eye Clinic for Vision Therapy?",
				},
				{
					description : "Expert Ortho-K Specialists: Our team comprises experienced optometrists and specialists trained in Orthokeratology procedures.",
				},
				{
					description : "Personalized Consultations: We provide thorough consultations to assess your suitability for Ortho-K, ensuring a personalized approach to your vision correction.",
				},
				{
					description : "Cutting-Edge Technology: Nakpil Eye Clinic is equipped with the latest technology to ensure accurate measurements and precise lens customization.",
				},
				{
					description : "Ongoing Support: Beyond the fitting process, we offer ongoing support and monitoring to ensure the continued success and comfort of your Ortho-K experience.",
				},

				{
					subdesc : "Invest in Your Lens-Free Clarity. Explore the liberating world of Orthokeratology at Nakpil Eye Clinic. Rediscover clear vision without " +
						"the need for glasses or daytime contacts, and let us be your partner in achieving visual freedom."
				},
				{
					subdesc : "Experience clarity on your terms at Nakpil Eye Clinic – Your Eye and Vision Specialist."
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
			link : "..//foreignbodiesremoval"

		},
		{
			id : 10,
			title : "Orthokeratology Lens Fitting",
			summary : "Discover the joy of clear vision without constraints at Nakpil Eye Clinic - Your Eye and Vision Specialist.",
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
					subdesc : "Discover the joy of clear vision without constraints at Nakpil Eye Clinic - Your Eye and Vision Specialist."
				}
			],
			recommended : [

			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "",
			link : "..//OrthokeratologyLensFitting"

		},
		{
			id : 11,
			title : "Perimetry or Visual Field Test",
			summary : "Our advanced visual field tests reveal hidden insights, guiding personalized eye care for a brighter outlook.",
			description : "Welcome to Nakpil Eye Clinic, where we prioritize your visual health and clarity. Explore the intricacies of your visual field with our Perimetry test, also commonly referred to as the Visual Field Test. " +
				"This advanced diagnostic tool offers invaluable insights into your field of vision, aiding in the early detection and management of various eye conditions.",
			subdesc : "Perimetry, or the Visual Field Test, is a sophisticated diagnostic procedure that assesses your field of vision, providing a comprehensive map of how you perceive and interpret visual information in your " +
				"surroundings. This test is instrumental in detecting abnormalities, enabling our expert eye care professionals to create tailored solutions for your visual well-being.",
			subtitle1 : "Key Aspects of Perimetry",
			keyaspects : [
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

			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 12,
			title : "Topography", //
			summary : "Unveil the intricate landscapes of your eyes for unrivaled clarity and insight into your vision's extraordinary terrain.",
			description : "Welcome to Nakpil Eye Clinic, where vision meets precision! Our commitment to providing cutting-edge eye care services continues with our advanced Topography test. Designed to map the unique landscape " +
				"of your cornea, this procedure offers a detailed analysis of your eye's surface, enabling our expert optometrists and an ophthalmologist to tailor precise solutions for your visual needs.",
			subtitle : "What is Topography?",
			subdesc : "Topography is a state-of-the-art diagnostic procedure that captures a three-dimensional map of the cornea, the transparent front part of the eye. This comprehensive mapping allows us to understand the " +
				"curvature, shape, and irregularities of the cornea, providing invaluable insights into various eye conditions.",
			subtitle1 : "Key Benefits of Topography procedure",
			keyaspects : [
				{
					title : "1. Customized Vision Correction",
					description: "With detailed corneal maps, we can design personalized solutions for vision correction, including customized contact lenses or laser eye surgery.",
				},
				{
					title : "2. Early Detection of Conditions",
					description: "Topography aids in the early detection of conditions such as keratoconus, corneal irregularities, and astigmatism, enabling timely intervention and management.",
				},
				{
					title : "3. Enhanced Contact Lens Fitting",
					description: "Achieve optimal comfort and vision with contact lenses tailored to the unique contours of your cornea, minimizing discomfort and maximizing clarity.",
				},
				{
					title : "4. Precise Refractive Surgery Planning",
					description: "For those considering refractive surgeries like LASIK, our Topography test ensures accurate surgical planning, resulting in improved outcomes.",
				},
			],
			whychoose : [
				{
					title : "Why Choose Nakpil Eye Clinic for Topography?",
				},
				{
					description :"Expert Ortho-K Specialists: Our team comprises experienced optometrists and specialists trained in Orthokeratology procedures.",
				},
				{
					description :"Personalized Consultations: We provide thorough consultations to assess your suitability for Ortho-K, ensuring a personalized approach to your vision correction.",
				},
				{
					description :"Cutting-Edge Technology: Nakpil Eye Clinic is equipped with the latest technology to ensure accurate measurements and precise lens customization.",
				},
				{
					description :"Ongoing Support: Beyond the fitting process, we offer ongoing support and monitoring to ensure the continued success and comfort of your Ortho-K experience.",
				},

				{
					subdesc : "Invest in Your Visual Precision. Uncover the details of your corneal landscape with the Topography Procedure at Nakpil Eye Clinic. Experience the clarity and precision that come with personalized eye care."
				},
				{
					subdesc : "See the world in sharp focus at Nakpil Eye Clinic – Your Eye and Vision Specialist."
				},
			],
			recommended : [

			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 13,
			title : "Vision Therapy", //
			summary : "Addressing conditions such as amblyopia, strabismus, and other visual disorders to improve eye coordination and functionality.",
			description : "At Nakpil Eye Clinic, we understand that clear vision is fundamental to a fulfilling and productive life. Our Vision Therapy services are designed to address a variety of visual challenges, enhance visual comfort, and optimize" +
				" overall visual performance. Whether you're struggling with a specific visual condition, aiming to improve sports performance, or simply seeking to enhance your visual skills, our comprehensive vision therapy program is tailored " +
				"to meet your unique needs.",
			subdesc : "At the heart of our Vision Therapy services is a patient-centric approach that combines cutting-edge technology with personalized care. Our experienced and certified vision therapists, trained by our Medical Director, " +
				"Dr. John Nakpil, works closely with each individual, utilizing a holistic methodology that goes beyond traditional eye care. We believe in empowering our patients to achieve their full visual potential through a combination " +
				"of therapeutic exercises, state-of-the-art equipment, and a supportive, nurturing environment.",
			subtitle1 : "Key Focus Areas",
			keyaspects : [
				{
					title : "1. Visual Rehabilitation",
					description: "Addressing conditions such as amblyopia, strabismus, and other visual disorders to improve eye coordination and functionality.",
				},
				{
					title : "2. Sports Vision Enhancement",
					description: "Tailored programs for athletes seeking to elevate their visual skills, hand-eye coordination, and reaction time for peak performance in sports.",
				},
				{
					title : "3. Reading and Learning Enhancement",
					description: "Targeting visual processing issues to improve reading fluency, comprehension, and overall learning abilities.",
				},
				{
					title : "4. Computer Vision Syndrome (CVS) Management",
					description: "Alleviating symptoms associated with prolonged computer use, such as eyestrain, headaches, and fatigue.",
				}
			],
			whychoose : [
				{
					title : "Why Choose Nakpil Eye Clinic for Vision Therapy?",
				},
				{
					description :"Experienced Team: Our dedicated team of certified vision therapists and eye care professionals brings years of experience and expertise to the field of vision therapy.",
				},
				{
					description :"Cutting-Edge Technology: We invest in the latest diagnostic and therapeutic technologies to ensure the most effective and advanced vision therapy services.",
				},
				{
					description :"Individualized Programs: Every patient is unique, and so is their vision therapy journey. Our programs are personalized to address specific needs, goals, and timelines.",
				},
				{
					description :"Comprehensive Care: We work in collaboration with eye care specialists, educators, and other professionals to provide holistic care that considers the broader aspects of visual health and wellness.",
				},

				{
					subdesc : "Get Started on Your Vision Journey! Embark on a transformative journey to improved vision and enhanced quality of life with Nakpil Eye Clinic’s Vision Therapy services. Schedule a " +
						"consultation today, and let our team guide you towards a future of clearer, more comfortable vision."
				},
				{
					subdesc : "See the world with new clarity at Nakpil Eye Clinic – Your Eye and Vision Specialist."
				},
			],
			recommended : [

			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "",
			link : "..//foreignbodiesremoval"

		},
		{
			id : 14,
			title : "Visual Performance Assessment (VPA)", //
			summary : "Unlock your full visual potential with our cutting-edge performance assessment.",
			description : "At Nakpil Eye Clinic, we believe that optimal visual performance is the cornerstone of a vibrant and successful life. Our Visual Performance Assessment (VPA) is meticulously designed to evaluate and enhance the " +
				"efficiency and precision of your visual system. Whether you're an athlete aiming for peak sports performance, a professional seeking to reduce eye strain, or someone wanting to unlock the full potential of your visual " +
				"abilities, our comprehensive assessments provide valuable insights and tailored solutions.",
			subdesc : "Our Visual Performance Assessment goes beyond routine eye exams. We utilize state-of-the-art diagnostic tools and a holistic approach to evaluate various aspects of visual function. Our team of experienced " +
				"optometrists and visual performance specialists collaborates to provide a detailed analysis, offering personalized recommendations to optimize your visual performance.",
			subtitle1 : "Key Assessment Areas",
			keyaspects : [
				{
					title : "1. Visual Acuity and Refraction",
					description: "Precise measurement of visual acuity and refractive error to ensure optimal clarity and focus.",
				},
				{
					title : "2. Eye Tracking and Coordination",
					description: "Evaluation of eye movement coordination, tracking, and convergence to assess overall eye teaming skills.",
				},
				{
					title : "3. Depth Perception",
					description: "Assessment of the ability to perceive depth accurately, crucial for activities such as sports and driving.",
				},
				{
					title : "4. Peripheral Vision",
					description: "Examination of peripheral vision to identify any limitations or irregularities.",
				},
				{
					title : "5. Visual Processing Speed",
					description: "Analysis of how quickly and accurately visual information is processed, a vital aspect for cognitive and academic performance.",
				},
			],
			whychoose : [
				{
					title : "Why Choose Nakpil Eye Clinic for Visual Performance Assessment?",
				},
				{
					description: "Specialized Expertise - Our team comprises skilled optometrists trained by Dr. John Nakpil, and clinical technicians with a focus on enhancing visual function." ,
				},
				{
					description: "Cutting-Edge Technology - We employ advanced diagnostic tools and technology to provide accurate and comprehensive assessments.",
				},
				{
					description: "Customized Recommendations - Based on the assessment results, we develop personalized recommendations and interventions to address specific visual performance needs.",
				},
				{
					description: "Holistic Vision Care - We understand that visual performance is interconnected with overall well-being. Our approach considers lifestyle factors, occupational demands, and individual goals.",
				},

				{
					subdesc : "Invest in Your Visual Excellence Today! Unleash the power of your vision with Nakpil Eye Clinic’s Visual Performance Assessment. Whether you're seeking improvements for sports, " +
						"work, or daily activities, our assessments pave the way for a clearer and more efficient visual experience."
				},
				{
					subdesc : "Elevate your visual potential with Nakpil Eye Clinic – Your Eye and Vision Specialist."
				},
			],
			recommended : [

			],
			mainimg : "https://nakpileyeclinic.com/static/media/orthokeratology.44aeef8ef624d9719a29.jpg",
			images : [
				"https://placehold.it/1200x600",
				"https://placehold.it/1200x600"
			],
			price : "",
			link : "..//foreignbodiesremoval"

		},
	]);



	const handleClick = (service) => {
		onClick(service);
	}

	const handleOtherPackage = ()=>{
		navigate("/other");
	}

	return (
		<Box sx={{backgroundColor: "#FFF" , p: 2, borderRadius: '10px'}}>

			<Stack direction="column" spacing={2} sx={{width : "100%", }}>
				<Typography variant="h5"
							sx={{  marginBottom: '15px',
								fontWeight: 'bold', }}>
					Other Packages
				</Typography>
				{serviceList.map((service, idx) => (
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
				<Button variant="contained" onClick={handleOtherPackage} >Exam Packages</Button>
			</Box>

		</Box>
	)
}

export default ExamPackageNav;