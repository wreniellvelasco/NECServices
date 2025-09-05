import  { useState } from 'react';
import PropTypes from 'prop-types';
import {
    CardHeader,
    CardActions,
    Typography,
    Chip,
    Box,
    Container,
    Grid,
    Button,
    CardContent,
    Stack,
    Card
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ExpandableButton = ({  price }) => {

    ExpandableButton.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };

    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);
    const [expanded6, setExpanded6] = useState(false);

    const[serviceList, setServiceList]= useState([
        {
            title: 'Standard Eye Examination',
            description: 'A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.',
            price: '$100',
            tests: [
                "Visual Acuity Test",
                "Color Vision Test",
                "Eye Pressure Test",
                "Refraction Assessment"
            ],
            recommended: [
                "Annual check-ups",
                "Vision prescription updates",
                "General eye health monitoring",
            ]
        }
    ]);

    const[serviceList2, setServiceList2]= useState([
        {
            title: 'Standard Eye Examination',
            description: 'A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.',
            price: '$100',
            tests: [
                "Visual Acuity Test",
                "Color Vision Test",
                "Eye Pressure Test",
                "Refraction Assessment"
            ],
            recommended: [
                "Annual check-ups",
                "Vision prescription updates",
                "General eye health monitoring",
            ]
        }
    ]);

    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF', }}>
                            <CardHeader
                                sx={{
                                    backgroundColor: blue[50],
                                    pb: 2,
                                    alignItems: 'flex-start',
                                }}
                                title={
                                    <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                        Standard Eye Examination
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                        A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.
                                    </Typography>
                                }
                                action={
                                    <Chip
                                        label={price}
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: blue[100],
                                            color: blue[800],
                                            borderColor: blue[200],
                                            px: 1.5,
                                            py: 0.5,
                                        }}
                                    />
                                }>

                            </CardHeader>

                            <CardContent>
                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => setExpanded(prev => !prev)}
                                        endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded ? 'Hide Details' : 'Show Details'}
                                    </Button>

                                    {expanded && (
                                        <Box
                                            mt={2}
                                            p={2}
                                            border={1}
                                            borderColor="grey.300"
                                            borderRadius={2}
                                        >
                                            <Box p={2}>
                                                {/* Services Grid */}
                                                <Grid container spacing={2}>
                                                    {serviceList.map((svc, idx) => (
                                                        <Grid item xs={12} key={idx}>
                                                            <Card variant="outlined">
                                                                <CardContent>

                                                                    <Typography variant="subtitle1" color="primary" gutterBottom>
                                                                        {svc.price}
                                                                    </Typography>

                                                                    <Typography variant="body2" fontWeight="bold">
                                                                        Tests Included:
                                                                    </Typography>
                                                                    <Box component="ul" ml={2} mb={1}>
                                                                        {svc.tests.map((t, i) => (
                                                                            <li key={i}>
                                                                                <Typography variant="body2">{t}</Typography>
                                                                            </li>
                                                                        ))}
                                                                    </Box>

                                                                    <Typography variant="body2" fontWeight="bold">
                                                                        Recommended For:
                                                                    </Typography>
                                                                    <Box component="ul" ml={2}>
                                                                        {svc.recommended.map((r, i) => (
                                                                            <li key={i}>
                                                                                <Typography variant="body2">{r}</Typography>
                                                                            </li>
                                                                        ))}
                                                                    </Box>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained"
                                        sx={{display: 'flex',


                                        }}
                                >Schedule Appointment</Button>
                            </CardActions>
                        </Box>
                    </Grid>



                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF',}}>
                        <CardHeader
                            sx={{
                                backgroundColor: blue[50],
                                pb: 2,
                                alignItems: 'flex-start',
                            }}
                            title={
                                <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                    Premum Eye Examination
                                </Typography>
                            }
                            subheader={
                                <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                    Elevate your eye care experience with this all-inclusive package, ensuring a thorough understanding of your visual well-being.
                                </Typography>
                            }
                            action={
                                <Chip
                                    label={price}
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: blue[100],
                                        color: blue[800],
                                        borderColor: blue[200],
                                        px: 1.5,
                                        py: 0.5,
                                    }}
                                />
                            }>

                        </CardHeader>

                        <CardContent>
                            <Box>
                                <Button
                                    variant="contained"
                                    onClick={() => setExpanded1(prev => !prev)}
                                    endIcon={expanded1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                >
                                    {expanded1 ? 'Hide Details' : 'Show Details'}
                                </Button>

                                {expanded1 && (
                                    <Box
                                        mt={2}
                                        p={2}
                                        border={1}
                                        borderColor="grey.300"
                                        borderRadius={2}
                                    >
                                        <Box p={2}>
                                            {/* Services Grid */}
                                            <Grid container spacing={2}>
                                                {serviceList2.map((svc, idx) => (
                                                    <Grid item xs={12} key={idx}>
                                                        <Card variant="outlined">
                                                            <CardContent>

                                                                <Typography variant="subtitle1" color="primary" gutterBottom>
                                                                    {svc.price}
                                                                </Typography>

                                                                <Typography variant="body2" fontWeight="bold">
                                                                    Tests Included:
                                                                </Typography>
                                                                <Box component="ul" ml={2} mb={1}>
                                                                    {svc.tests.map((t, i) => (
                                                                        <li key={i}>
                                                                            <Typography variant="body2">{t}</Typography>
                                                                        </li>
                                                                    ))}
                                                                </Box>

                                                                <Typography variant="body2" fontWeight="bold">
                                                                    Recommended For:
                                                                </Typography>
                                                                <Box component="ul" ml={2}>
                                                                    {svc.recommended.map((r, i) => (
                                                                        <li key={i}>
                                                                            <Typography variant="body2">{r}</Typography>
                                                                        </li>
                                                                    ))}
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </Box>

                                    </Box>
                                )}
                            </Box>
                        </CardContent>

                        <CardActions>
                            <Button variant="contained"
                                    sx={{display: 'flex',


                                    }}
                            >Schedule Appointment</Button>
                        </CardActions>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF'}}>
                            <CardHeader
                                sx={{
                                    backgroundColor: blue[50],
                                    pb: 2,
                                    alignItems: 'flex-start',
                                }}
                                title={
                                    <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                        Pediatric Eye Examination
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                        The gentle care and precision required for pediatric eye health, providing a thorough understanding of your child's visual well-being.
                                    </Typography>
                                }
                                action={
                                    <Chip
                                        label={price}
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: blue[100],
                                            color: blue[800],
                                            borderColor: blue[200],
                                            px: 1.5,
                                            py: 0.5,
                                        }}
                                    />
                                }>

                            </CardHeader>

                            <CardContent>
                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => setExpanded2(prev => !prev)}
                                        endIcon={expanded2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded2 ? 'Hide Details' : 'Show Details'}
                                    </Button>

                                    {expanded2 && (
                                        <Box
                                            mt={2}
                                            p={2}
                                            border={1}
                                            borderColor="grey.300"
                                            borderRadius={2}
                                        >
                                            <Typography>
                                                This content is revealed inline when the button is expanded.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained"
                                        sx={{display: 'flex',


                                        }}
                                >Schedule Appointment</Button>
                            </CardActions>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF'}}>
                            <CardHeader
                                sx={{
                                    backgroundColor: blue[50],
                                    pb: 2,
                                    alignItems: 'flex-start',
                                }}
                                title={
                                    <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                        Follow-Up Eye Examination
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                        Designed to ensure continuity in care, promoting the longevity of clear vision and optimal eye health for our adult patients.
                                    </Typography>
                                }
                                action={
                                    <Chip
                                        label={price}
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: blue[100],
                                            color: blue[800],
                                            borderColor: blue[200],
                                            px: 1.5,
                                            py: 0.5,
                                        }}
                                    />
                                }>

                            </CardHeader>

                            <CardContent>
                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => setExpanded3(prev => !prev)}
                                        endIcon={expanded3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded3 ? 'Hide Details' : 'Show Details'}
                                    </Button>

                                    {expanded3 && (
                                        <Box
                                            mt={2}
                                            p={2}
                                            border={1}
                                            borderColor="grey.300"
                                            borderRadius={2}
                                        >
                                            <Typography>
                                                This content is revealed inline when the button is expanded.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained"
                                        sx={{display: 'flex',


                                        }}
                                >Schedule Appointment</Button>
                            </CardActions>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF'}}>
                            <CardHeader
                                sx={{
                                    backgroundColor: blue[50],
                                    pb: 2,
                                    alignItems: 'flex-start',
                                }}
                                title={
                                    <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                        Executive Eye Examination
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                        Unparalleled precision and comprehensive insights into their eye health, A pinnacle of advanced diagnostics and personalized care.
                                    </Typography>
                                }
                                action={
                                    <Chip
                                        label={price}
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: blue[100],
                                            color: blue[800],
                                            borderColor: blue[200],
                                            px: 1.5,
                                            py: 0.5,
                                        }}
                                    />
                                }>

                            </CardHeader>

                            <CardContent>
                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => setExpanded4(prev => !prev)}
                                        endIcon={expanded4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded4 ? 'Hide Details' : 'Show Details'}
                                    </Button>

                                    {expanded4 && (
                                        <Box
                                            mt={2}
                                            p={2}
                                            border={1}
                                            borderColor="grey.300"
                                            borderRadius={2}
                                        >
                                            <Typography>
                                                This content is revealed inline when the button is expanded.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained"
                                        sx={{display: 'flex',


                                        }}
                                >Schedule Appointment</Button>
                            </CardActions>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF'}}>
                            <CardHeader
                                sx={{
                                    backgroundColor: blue[50],
                                    pb: 2,
                                    alignItems: 'flex-start',
                                }}
                                title={
                                    <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                        Executive Plus Eye Examination
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                        Tailored for those seeking not only precision in diagnostics but also a thorough understanding of their visual health.
                                    </Typography>
                                }
                                action={
                                    <Chip
                                        label={price}
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: blue[100],
                                            color: blue[800],
                                            borderColor: blue[200],
                                            px: 1.5,
                                            py: 0.5,
                                        }}
                                    />
                                }>

                            </CardHeader>

                            <CardContent>
                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => setExpanded5(prev => !prev)}
                                        endIcon={expanded5 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded5 ? 'Hide Details' : 'Show Details'}
                                    </Button>

                                    {expanded5 && (
                                        <Box
                                            mt={2}
                                            p={2}
                                            border={1}
                                            borderColor="grey.300"
                                            borderRadius={2}
                                        >
                                            <Typography>
                                                This content is revealed inline when the button is expanded.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained"
                                        sx={{display: 'flex',


                                        }}
                                >Schedule Appointment</Button>
                            </CardActions>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{backgroundColor: '#FFF'}}>
                            <CardHeader
                                sx={{
                                    backgroundColor: blue[50],
                                    pb: 2,
                                    alignItems: 'flex-start',
                                }}
                                title={
                                    <Typography variant="h6" component="div" sx={{ color: blue[800] }}>
                                        Corporate Eye Care Program
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="body2" sx={{ mt: 1, color: grey[600] }}>
                                        A Comprehensive eye examination package for your company or organizations.
                                    </Typography>
                                }
                                action={
                                    <Chip
                                        label={price}
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: blue[100],
                                            color: blue[800],
                                            borderColor: blue[200],
                                            px: 1.5,
                                            py: 0.5,
                                        }}
                                    />
                                }>

                            </CardHeader>

                            <CardContent>
                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => setExpanded6(prev => !prev)}
                                        endIcon={expanded6 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    >
                                        {expanded6 ? 'Hide Details' : 'Show Details'}
                                    </Button>

                                    {expanded6 && (
                                        <Box
                                            mt={2}
                                            p={2}
                                            border={1}
                                            borderColor="grey.300"
                                            borderRadius={2}
                                        >
                                            <Typography>
                                                This content is revealed inline when the button is expanded.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions>
                                <Button variant="contained"
                                        sx={{display: 'flex',


                                        }}
                                >Schedule Appointment</Button>
                            </CardActions>
                        </Box>
                    </Grid>


                </Grid>
            </Container>
        </Box>
    );
};



export default ExpandableButton;