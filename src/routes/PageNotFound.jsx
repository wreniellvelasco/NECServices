import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
export default function PageNotFound() {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<Typography variant="h1" style={{ color: 'grey' }}>
				404
			</Typography>
			<Typography variant="h6" style={{ color: 'grey' }}>
				The page you’re looking for doesn’t exist.
			</Typography>
			<br/>
			<Button color="info" variant="contained" onClick={goBack}>Return</Button>
		</Box>
	);
}
