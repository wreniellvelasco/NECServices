import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import {CalendarMonth as CalendarMonthIcon, Check as CheckIcon} from "@mui/icons-material";
import * as React from "react";
import  { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';


const ExpandableButton = ({
                              title,
                              description,
                              price,
                              tests,
                              recommended
                          }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            sx={{
                borderRadius: '10px',
                width: '100%',
                bgcolor: 'common.white',
                boxShadow: 1,
                '&:hover': { boxShadow: 4 },
                overflow: 'hidden'
            }}
        >
            {/* Header with title/description and price badge */}
            <CardHeader
                sx={{ bgcolor: 'rgba(227,242,253,1)', pb: 2 }}
                title={
                    <Box sx={{height: {   lg: 100 }}}>
                        <Typography variant="h6" color="primary.dark">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            {description}
                        </Typography>
                    </Box>
                }
                action={
                    <Chip
                        label={price}
                        variant="outlined"
                        sx={{
                            bgcolor: 'rgba(227,242,253,1)',
                            color: 'primary.dark',
                            borderColor: 'rgba(187,222,251,1)',
                            px: 1,
                            py: 0.5
                        }}
                    />
                }
            />

            {/* Content: optionally show tests and recommended lists */}
            <CardContent sx={{ pt: 1 }}>
                <Box display="flex" alignItems="center" color="text.secondary" mb={2}>
                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                </Box>

                {expanded && (
                    <Box>
                        <Typography variant="subtitle2" color="primary.dark" gutterBottom>
                            Included Tests
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {tests?.map((tests, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        color="success"
                                        sx={{ mr: 1, mt: '2px' }}
                                    />
                                    <Typography variant="body2" color="text.primary">
                                        {tests}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography
                            variant="subtitle2"
                            color="primary.dark"
                            gutterBottom
                            mt={2}
                        >
                            Recommended For
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {recommended?.map((item, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                    mb={0.5}
                                >
                                    <CheckIcon
                                        fontSize="small"
                                        color="success"
                                        sx={{ mr: 1, mt: '2px' }}
                                    />
                                    <Typography variant="body2" color="text.primary">
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
            </CardContent>

            {/* Actions: expand/collapse and any other buttons */}
            <CardActions sx={{ flexDirection: 'column', gap: 1, p: 2, pt: 0 }}>
                <Button
                    variant="outlined"
                    fullWidth
                    startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </Button>

                <Button variant="contained" color="primary" fullWidth>
                    Schedule Appointment
                </Button>
            </CardActions>
        </Card>
    );
};

ExpandableButton.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    tests: PropTypes.arrayOf(PropTypes.string).isRequired,
    recommended: PropTypes.arrayOf(PropTypes.string).isRequired
};

function CardSample(){


    const [serviceList, ] = useState([
        {
            title: 'Standard Eye Examination',
            description:
                'A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.',
            price: 'Php 999.00',
            tests: [
                'Visual Acuity Test',
                'Color Vision Test',
                'Eye Pressure Test',
                'Refraction Assessment'
            ],
            recommended: [
                'Annual check-ups',
                'Vision prescription updates',
                'General eye health monitoring'
            ]
        },
    ]);


    return(
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid item xs={12} sm={6}>
                        <Card
                            sx={{
                                borderRadius: '10px',
                                width: '100%',
                                bgcolor: 'common.white',
                                boxShadow: 1,
                                '&:hover': { boxShadow: 4 },
                                overflow: 'hidden',
                                mb: '15px'
                            }}
                        >
                            {/* Header with hard-coded title, description, and price */}
                            <Stack sx={{ justifyContent: 'space-between' }}>
                                <CardHeader
                                    sx={{
                                        bgcolor: '#e3f2fd',
                                        pb: 2
                                    }}
                                    title="Standard Eye Examination"
                                    action={
                                        <Chip
                                            label="Php 999.00"
                                            variant="outlined"
                                            sx={{
                                                bgcolor: '#e3f2fd',
                                                color: 'primary.dark',
                                                borderColor: '#bbdefb',
                                                px: 1,
                                                py: 0.5
                                            }}
                                        />
                                    }
                                    subheader={
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mt: 1 , width: '100% '}}
                                        >
                                            A comprehensive suite of procedures meticulously curated to ensure a thorough assessment of your eye health.
                                        </Typography>
                                    }
                                />
                            </Stack>

                            {/* Static content section */}
                            <CardContent sx={{ pt: 1 }}>
                                <Box display="flex" alignItems="center" color="text.secondary" mb={2}>
                                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                                    <Typography variant="body2">Yearly Subscription</Typography>
                                </Box>

                                <Box>
                                    <Typography variant="subtitle2" color="primary.dark" gutterBottom>
                                        Included Tests
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                Visual Acuity Test
                                            </Typography>
                                        </Box>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                Color Vision Test
                                            </Typography>
                                        </Box>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                Eye Pressure Test
                                            </Typography>
                                        </Box>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                Refraction Assessment
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography variant="subtitle2" color="primary.dark" gutterBottom mt={2}>
                                        Recommended For
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                Annual check-ups
                                            </Typography>
                                        </Box>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                Vision prescription updates
                                            </Typography>
                                        </Box>
                                        <Box component="li" display="flex" alignItems="center" mb={0.5}>
                                            <CheckIcon fontSize="small" color="success" sx={{ mr: 1, mt: '2px' }} />
                                            <Typography variant="body2" color="text.primary">
                                                General eye health monitoring
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>

                            {/* Static actions */}
                            <CardActions sx={{ flexDirection: 'column', gap: 1, p: 2, pt: 0 }}>
                                <Button variant="outlined" fullWidth>
                                    See full details
                                </Button>
                                <Button variant="contained" color="primary" fullWidth>
                                    Schedule Appointment
                                </Button>
                            </CardActions>
                        </Card>
                      </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {serviceList?.map((svc, idx) => (
                                    <Grid item xs={12} sm={6} key={idx}>
                                        <ExpandableButton {...svc}
                                                          tests={svc.tests || []}
                                                          recommended={svc.recommended || []}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CardSample;