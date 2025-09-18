import {useState} from "react";
import {Box, Button, Card, CardActions, CardContent, Chip, Stack, Typography} from "@mui/material";
import {
    CalendarMonth as CalendarMonthIcon,
    Check as CheckIcon,
    ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon
} from "@mui/icons-material";

import * as PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const ServiceCard = (props) => {

    let {
        title,
        description,
        price,
        vat,
        tests,
        recommended
    } = props;

    ServiceCard.propTypes = {
        tests: PropTypes.array,
        recommended: PropTypes.array,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        vat: PropTypes.string,
    }

    const navigate = useNavigate();

    const [expanded, setExpanded] = useState(false);
    const onClick = () => {
        navigate("/services/"+title);
    }

    const formatter = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

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
            <Box
                sx={{
                    backgroundColor: "#e3f2fd",
                    width: "500",
                    objectFit: 'contain',
                    p: 1,
                }}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" color="primary.dark">
                        {title}
                    </Typography>
                    {(price !== undefined && price !== "" && price > 0) &&
                        <Stack direction="column" sx={{ textAlign: "flex-end" }}>
                            <Chip
                                label={formatter.format(price)}
                                variant="outlined"
                                sx={{
                                    bgcolor: 'rgba(227,242,253,1)',
                                    color: 'primary.dark',
                                    borderColor: 'rgba(187,222,251,1)',
                                }}
                            />
                            <Typography variant="span" sx={{fontSize: "10px", pt:"1px"}}>{vat}</Typography>
                        </Stack>
                    }
                </Stack>

                <Typography variant="body2" color="text.secondary" mt={1}>
                    {description}
                </Typography>
            </Box>

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

                <Button variant="contained" color="primary" fullWidth onClick={onClick}>
                    See Full Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default ServiceCard;