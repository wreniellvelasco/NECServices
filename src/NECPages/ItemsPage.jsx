import {
    Tabs,
    Tab,
    Box,
    Grid,
    Container,
    Typography,
    Stack,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Paper,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    SwipeableDrawer,
    Chip,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import  { useState } from "react";
import PropTypes from "prop-types";
import logo from '../assets//logo.png';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, Legend,
} from 'recharts';
import * as React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";



const mediumDisplay = ("(min-width: 768px)");

const dataSample = {
    barcode: '1234567890123',
    productName: 'PainRelief Max',
    genericName: 'Ibuprofen',
    type: 'Tablet',
    form: 'Solid',
    strength: '200mg',
    administrator: 'Oral',
    unitSize: '10 tablets',
    quantity: 150,
    lowQuantity: 20,
    tax: '12%',
    srp: '₱120.00',
    unitPrice: '₱100.00'
};

const productRows = [
    {
        id: '1',
        name: 'Paracetamol',
        sku: 'PCM-101',
        price: 5.00,
        inventory: 120,
        status: 'In Stock',
        rating: 4.8,
        category: 'Analgesic',
    },
    {
        id: '2',
        name: 'Ibuprofen',
        sku: 'IBU-102',
        price: 6.50,
        inventory: 80,
        status: 'Low Stock',
        rating: 4.5,
        category: 'Anti-inflammatory',
    },

    {
        id: '4',
        name: 'Ibuprofen',
        sku: 'VITC-103',
        price: 20,
        inventory: 100,
        status: 'High Stock',
        rating: 4.9,
        category: 'Supplement',
    },
    {
        id: '5',
        name: 'Amoxicillin 250mg',
        sku: 'AMX-104',
        price: 7,
        inventory: 80,
        status: 'Low Stock',
        rating: 4.7,
        category: 'Antibiotic',
    },
];

const pics = [
    {
        title : "Title",
        src : "https://picsum.photos/200/300"
    }
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index, prefix = 'simple') {
    return {
        id: `${prefix}-tab-${index}`,
        'aria-controls': `${prefix}-tabpanel-${index}`,
    };
}

// Helper for nested panels
function NestedTabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nested-tabpanel-${index}`}
            aria-labelledby={`nested-tab-${index}`}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}
NestedTabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};



const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});


const   stockRows = [
    {
        id: 101,
        product: 'Paracetamol',
        genericName: 'Acetaminophen',
        quantity: 120,
        pricing: '$5.00',
        availability: 'In Stock',
    },
    {
        id: 102,
        product: 'Ibuprofen',
        genericName: 'Ibuprofen',
        quantity: 80,
        pricing: '$6.50',
        availability: 'Low Stock',
    },
    {
        id: 103,
        product: 'Ibuprofen',
        genericName: 'Vitamin C',
        quantity: 100,
        pricing: '$20',
        availability: 'High Stock',
    },
    {
        id: 104,
        product: 'Amoxicillin 250mg',
        genericName: 'Amoxicillin 250mg',
        quantity: 80,
        pricing: '$7',
        availability: 'Low Stock',
    },
    // …more rows
];

// --- sample data for History ---
const historyRows = [
    {
        id: 'H001',
        timestamp: '2025-08-20 10:15',
        item: 'Vitamin C 500mg',
        remarks: 'Restocked from supplier',
        type: 'IN',
        count: 100,
        quantity: 100,
        user: 'Alice Johnson',
    },
    {
        id: 'H002',
        timestamp: '2025-08-20 12:30',
        item: 'Ibuprofen 200mg',
        remarks: 'Sold to walk-in customer',
        type: 'OUT',
        count: 5,
        quantity: 95,
        user: 'Bob Smith',
    },
    {
        id: 'H003',
        timestamp: '2025-08-19 09:45',
        item: 'Amoxicillin 250mg',
        remarks: 'Adjusted for damage',
        type: 'ADJ',
        count: -2,
        quantity: 18,
        user: 'Carol Lee',
    },
];


// --- sample data for Sold Items ---
const soldRows = [
    {
        id: 'S001',
        product: 'Vitamin C 500mg',
        dateSold: '2025-08-20',
        quantitySold: 12,
        salePrice: 1.5,
        total: 18.0,
        customer: 'Alice Johnson',
    },
    {
        id: 'S002',
        product: 'Ibuprofen 200mg',
        dateSold: '2025-08-19',
        quantitySold: 5,
        salePrice: 0.8,
        total: 4.0,
        customer: 'Bob Smith',
    },
    {
        id: 'S003',
        product: 'Amoxicillin 250mg',
        dateSold: '2025-08-18',
        quantitySold: 20,
        salePrice: 2.0,
        total: 40.0,
        customer: 'Carol Lee',
    },
];

// Sample data
const soldSummary = [
    { product: 'Paracetamol', sold: 120 },
    { product: 'Ibuprofen', sold: 95 },
    { product: 'Amoxicillin', sold: 75 },
    { product: 'Cetirizine', sold: 50 },
];

const stockHistory = [
    { date: '2025-07-15', Paracetamol: 150, Ibuprofen: 130, Amoxicillin: 140 },
    { date: '2025-07-20', Paracetamol: 130, Ibuprofen: 120, Amoxicillin: 135 },
    { date: '2025-07-25', Paracetamol: 110, Ibuprofen: 100, Amoxicillin: 120 },
    { date: '2025-07-30', Paracetamol: 90, Ibuprofen: 85, Amoxicillin: 110 },
    { date: '2025-08-04', Paracetamol: 80, Ibuprofen: 70, Amoxicillin: 90 },
];

const revenueTrend = [
    { date: '2025-08-01', revenue: 450 },
    { date: '2025-08-02', revenue: 520 },
    { date: '2025-08-03', revenue: 480 },
    { date: '2025-08-04', revenue: 610 },
    { date: '2025-08-05', revenue: 570 },
];




function ItemsPage() {


    //const for drawer
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (



        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    const [anchorEl, setAnchorEl] = useState(null);
    const [menuRowId, setMenuRowId] = useState(null);

    const handleMenuOpen = (event, id) => {
        setAnchorEl(event.currentTarget);
        setMenuRowId(id);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuRowId(null);
    };

    const viewDetails = (id) => {
        console.log('View details for', id);
        handleMenuClose();
    };

    const editProduct = (id) => {
        console.log('Edit product', id);
        handleMenuClose();
    };

    const archiveProduct = (id) => {
        console.log('Archive product', id);
        handleMenuClose();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Stock':
                return 'success';
            case 'Low Stock':
                return 'warning';
            case 'Out of Stock':
                return 'error';
            default:
                return 'default';
        }
    };

    // Top-level tabs
    const [value, setValue] = useState(0);
    const handleChange = (e, newVal) => setValue(newVal);

    // Nested tabs under Item Three
    const [subValue, setSubValue] = useState(0);
    const handleSubChange = (e, newVal) => setSubValue(newVal);




    return(

        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            spacing ={2}
                            sx={{

                                justifyContent: 'space-between',
                                p: 1,
                                backgroundColor: '#FFF',
                                boxShadow: 1,
                                borderRadius: '10px 10px 0 0'
                            }}>

                            {/* Logo on the left */}
                            <Box
                                component="img"
                                src={logo}
                                alt="My Logo"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    objectFit: 'contain',
                                    mr: 'auto',
                                }}
                            />

                            {/* Grouped icons on the right */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2, p:1              // space between icons
                                }}
                            >
                                <MessageIcon sx={{color: '#6ab246'}} fontSize="medium" />
                                <NotificationsNoneIcon sx={{color: '#6ab246'}} fontSize="medium" />
                                <AccountCircleIcon sx={{color: '#fb8629'}} fontSize="medium" />
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>

                        <Box
                            sx={{
                                p: 2,
                                backgroundColor: '#FFF',
                                boxShadow: 1,
                                borderRadius: '0 0 10px 10px',
                                marginTop: '-15px'
                            }}>
                            {/* Left side: Product Info */}

                                    <Typography variant="h5">
                                        Product Information
                                    </Typography>
                                    <Typography variant="body2">
                                        Add or Edit Stocks
                                    </Typography>

                            <Grid >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' ,p: 1, m:1 }}>Key Performance & Indicators</Typography>

                                <Grid
                                    container
                                    spacing={2}
                                    direction="row"
                                    wrap="wrap"
                                    sx={{ width: '100%' }}>

                                    {/* 1st box */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            flexBasis: { md: '20%' },
                                            maxWidth: { md: '20%' },
                                        }}>

                                        <Box border={2} borderColor="grey.300" borderRadius={1}>
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                sx={{ p: 2, height: 100, bgcolor: 'background.paper' }}>

                                                <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
                                                    {/* Content for box 1 */}
                                                    <Typography variant="span" sx={{color : "grey"}}>Total Sales</Typography>
                                                    <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                                        <Typography variant="span" sx={{fontSize : "36px", fontWeight : 700}}>325</Typography>
                                                        <AttachMoneyIcon/>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1}>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "green"}}>2%</Typography>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>vs last month</Typography>
                                                    </Stack>

                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    {/* 2nd box */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            flexBasis: { md: '20%' },
                                            maxWidth: { md: '20%' },
                                        }}>

                                        <Box border={2} borderColor="grey.300" borderRadius={1}>
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                sx={{ p: 2, height: 100, bgcolor: 'background.paper' }}>

                                                <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
                                                    {/* Content for box 1 */}
                                                    <Typography variant="span" sx={{color : "grey"}}>Active Products</Typography>
                                                    <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                                        <Typography variant="span" sx={{fontSize : "36px", fontWeight : 700}}>1,429</Typography>
                                                        <InventoryIcon/>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1}>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "green"}}>3.2%</Typography>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>vs last month</Typography>
                                                    </Stack>

                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    {/* 3rd box */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            flexBasis: { md: '20%' },
                                            maxWidth: { md: '20%' },
                                        }}>

                                        <Box border={2} borderColor="grey.300" borderRadius={1}>
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                sx={{ p: 2, height: 100, bgcolor: 'background.paper' }}>

                                                <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
                                                    {/* Content for box 1 */}
                                                    <Typography variant="span" sx={{color : "grey"}}>Inventory Status</Typography>
                                                    <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                                        <Typography variant="span" sx={{fontSize : "36px", fontWeight : 700}}>85%</Typography>
                                                        <InventoryIcon/>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1}>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "red"}}>2.4%</Typography>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>vs last month</Typography>
                                                    </Stack>

                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    {/* 4th box */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            flexBasis: { md: '20%' },
                                            maxWidth: { md: '20%' },
                                        }}>

                                        <Box border={2} borderColor="grey.300" borderRadius={1}>
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                sx={{ p: 2, height: 100, bgcolor: 'background.paper' }}>

                                                <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
                                                    {/* Content for box 1 */}
                                                    <Typography variant="span" sx={{color : "grey"}}>Average Rating</Typography>
                                                    <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                                        <Typography variant="span" sx={{fontSize : "36px", fontWeight : 700}}>4.8/5</Typography>
                                                        <StarBorderIcon/>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1}>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "green"}}>0.3%</Typography>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>vs last month</Typography>
                                                    </Stack>

                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    {/* 5th box */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={2}
                                        sx={{
                                            flexBasis: { md: '20%' },
                                            maxWidth: { md: '20%' },
                                        }}>

                                        <Box border={2} borderColor="grey.300" borderRadius={1}>
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                sx={{ p: 2, height: 100, bgcolor: 'background.paper' }}>

                                                <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
                                                    {/* Content for box 1 */}
                                                    <Typography variant="span" sx={{color : "grey"}}>Monthly Growth</Typography>
                                                    <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                                        <Typography variant="span" sx={{fontSize : "36px", fontWeight : 700}}>18.2%</Typography>
                                                        <TrendingUpIcon/>
                                                    </Stack>
                                                    <Stack direction="row" spacing={1}>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "green"}}>5.1%</Typography>
                                                        <Typography variant="span" sx={{fontSize : "11", color : "grey"}}>vs last month</Typography>
                                                    </Stack>

                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>


                            </Grid>

                        </Box>


                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack direction={(mediumDisplay)? "row":"column"} justifyContent="space-between" spacing={2} sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>

                              <Typography variant="h5" sx={{ fontWeight: 'bold',p: 1}}>Product Information</Typography>


                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 3          // optional padding to match left
                                }}>


                                <Button
                                    variant="contained"
                                    startIcon={<EditIcon/>}
                                    sx={{
                                        backgroundColor: '#6ab246',
                                        color: '#fff',
                                        '&:hover': { backgroundColor: '#f98727' }
                                    }}>

                                    Edit
                                </Button>
                            </Box>
                        </Stack>

                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-between"}}>

                                    <Typography variant="subtitle2" sx={{ color: 'grey'}}>Barcode*</Typography>
                                    <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                                        {dataSample.barcode}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{ color: 'grey'}}>Product Name*</Typography>
                                    <Typography variant="body1" gutterBottom sx={{fontWeight: 'bold'}}>
                                        {dataSample.productName}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Generic Name</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.genericName}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Type</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.type}
                                    </Typography>

                                </Stack>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-between"}}>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Form</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.form}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Strength</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.strength}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Administrator</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.administrator}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Unit Size</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.unitSize}
                                    </Typography>

                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack direction={{xs: "column", md: "row"}} spacing={1} sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px"}}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' ,p: 1, m:1}}>Pricing & Stockeeping</Typography>
                        </Stack>
                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "190px", backgroundColor: '#FFF', borderRadius: '0 0 10px 10px'}}>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-between"}}>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Quantity</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.quantity}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Low Quantity</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.lowQuantity}
                                    </Typography>

                                    <Typography>&nbsp;</Typography>

                                    <Typography>&nbsp;</Typography>

                                </Stack>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-between"}}>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>TAX</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.tax}
                                    </Typography>



                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>SRP</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.srp}
                                    </Typography>

                                    <Typography variant="subtitle2" sx={{fontWeight: 'bold'}}>Unit Price</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {dataSample.unitPrice}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    {(pics.length < 10)? (pics.length < 5)? "Less 5": "Less 10":"false"}

                    {(pics.length > 0) &&
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 3          // optional padding to match left
                                }}>

                                {pics?.map((pic, index) => {
                                    return (<Box key={pic?.title}>{pic?.title} - {pic?.src}</Box>)
                                })}
                            </Box>
                         </Grid>
                    }

                    <Grid item xs={12} md={6}>
                        <Stack direction={{xs: "column", md: "row"}} spacing={1} sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px", boxShadow: 1}}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold',p: 1, m:1}}>Category</Typography>
                        </Stack>
                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "100px", backgroundColor: '#FFF'}}>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-around"}}>



                                </Stack>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-around"}}>



                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack direction={{xs: "column", md: "row"}} spacing={1} sx={{backgroundColor: '#FFF', borderRadius: '10px 10px 0 0 ', paddingBottom: '5px', padding: "2px", height : "25px", boxShadow: 1}}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' ,p: 1, m:1}}>Tags</Typography>
                        </Stack>
                        <Box>
                            <Stack direction={{xs: "row", md: "row"}} sx={{ padding : "15px", height : "100px", backgroundColor: '#FFF'}}>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-between"}}>



                                </Stack>
                                <Stack direction="column" sx={{width : "100%", justifyContent: "space-between"}}>


                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Box
                        direction="row"
                        spacing ={2}
                        sx={{backgroundColor: '#FFF', marginTop: '15px', p: 1,
                            justifyContent: 'space-between' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold'  }}>Products</Typography>


                    </Box>
                </Grid>



                <Box sx={{
                           width: '100%',
                           backgroundColor: '#fff',
                           borderRadius: '0 0 10px 10px',
                            boxShadow: '1'
                        }}>
                    <Box
                        sx={{ borderBottom: 1,
                              display: 'flex',
                              justifyContent: 'center',
                              borderColor: 'divider',
                        }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Stocks" {...a11yProps(0)} />
                            <Tab label="History" {...a11yProps(1)} />
                            <Tab label="Sold Items" {...a11yProps(2)} />
                            <Tab label="Statistcs" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <TableContainer component={Paper} sx={{ maxHeight: 400, }}>
                            <Table stickyHeader aria-label="product inventory">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{color: '#fb8629'}}>Product Name</TableCell>
                                        <TableCell>SKU</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Inventory</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Rating</TableCell>
                                        <TableCell>Category</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {productRows.map((row) => (
                                        <TableRow key={row.id} hover>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.sku}</TableCell>
                                            <TableCell align="right">
                                                ${row.price.toFixed(2)}
                                            </TableCell>
                                            <TableCell align="right">{row.inventory}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={row.status}
                                                    color={getStatusColor(row.status)}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <span>{row.rating}</span>
                                                    <StarIcon
                                                        fontSize="small"
                                                        color="warning"
                                                        sx={{ ml: 0.5 }}
                                                    />
                                                </Box>
                                            </TableCell>
                                            <TableCell>{row.category}</TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => handleMenuOpen(e, row.id)}
                                                >
                                                    <MoreVertIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem
                                    onClick={() => viewDetails(menuRowId)}
                                >
                                    View Details
                                </MenuItem>
                                <MenuItem
                                    onClick={() => editProduct(menuRowId)}
                                >
                                    Edit
                                </MenuItem>
                                <MenuItem
                                    onClick={() => archiveProduct(menuRowId)}
                                >
                                    Archive
                                </MenuItem>
                            </Menu>
                        </TableContainer>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                            <Table stickyHeader aria-label="history table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>ID</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>TimeStamp</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>Item</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>Remarks</TableCell>
                                        <TableCell align="right" sx={{ color: '#6ab246', fontWeight: 'bold'}}>Type</TableCell>
                                        <TableCell align="right" sx={{ color: '#6ab246', fontWeight: 'bold'}}>Count</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>Quantity</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>User</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {historyRows.map((row) => (
                                        <TableRow key={row.id} hover>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.timestamp}</TableCell>
                                            <TableCell>{row.item}</TableCell>
                                            <TableCell>{row.remarks}</TableCell>
                                            <TableCell align="right">{row.type}</TableCell>
                                            <TableCell align="right">{row.count}</TableCell>
                                            <TableCell>{row.quantity}</TableCell>
                                            <TableCell>{row.user}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={2}>
                        <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
                            <Table stickyHeader aria-label="sold items table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>Product</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>ID</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>Date Sold</TableCell>
                                        <TableCell align="right" sx={{ color: '#6ab246', fontWeight: 'bold'}}>Quantity</TableCell>
                                        <TableCell align="right" sx={{ color: '#6ab246', fontWeight: 'bold'}}>Sale Price</TableCell>
                                        <TableCell align="right" sx={{ color: '#6ab246', fontWeight: 'bold'}}>Total</TableCell>
                                        <TableCell sx={{ color: '#6ab246', fontWeight: 'bold'}}>Customer</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {soldRows.map((row) => (
                                        <TableRow key={row.id} hover>
                                            <TableCell>{row.product}</TableCell>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.dateSold}</TableCell>
                                            <TableCell align="right">{row.quantitySold}</TableCell>
                                            <TableCell align="right">
                                                ${row.salePrice.toFixed(2)}
                                            </TableCell>
                                            <TableCell align="right">
                                                ${row.total.toFixed(2)}
                                            </TableCell>
                                            <TableCell>{row.customer}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={3}>

                      <Box sx={{display: 'flex', justifyContent: 'right'}}>
                          <Autocomplete
                            id="filter-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            filterOptions={filterOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Select Days" />}
                        />
                      </Box>

                        {/* Nested Tabs */}
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                            <Tabs
                                value={subValue}
                                onChange={handleSubChange}
                                aria-label="statistics nested tabs" sx={{  }}
                            >
                                <Tab label="Statistics Tab 1" {...a11yProps(0, 'nested')} />
                                <Tab label="Statistics Tab 2" {...a11yProps(1, 'nested')} />
                                <Tab label="Total Sold by Product" {...a11yProps(2, 'nested')} />
                                <Tab label="Stock Level History" {...a11yProps(3, 'nested')} />
                                <Tab label="Daily Revenue Trend" {...a11yProps(4, 'nested')} />
                            </Tabs>
                        </Box>

                        {/* Nested Tab Panels */}
                        <NestedTabPanel value={subValue} index={0}>
                            {/* Content for Statistics Tab 1 */}
                            <Box p={2}>
                                <Typography variant="h6" gutterBottom>
                                    Inventory Statistics
                                </Typography>
                                <Grid container spacing={2}>
                                    {/* Sold Bar Chart */}
                                    <Grid item xs={12} md={4}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                // give the Paper a fixed height so ResponsiveContainer can calculate %
                                                height: 300,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Typography variant="subtitle1" gutterBottom>
                                                Total Sold by Product
                                            </Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart data={soldSummary}>
                                                        <XAxis dataKey="product" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Bar dataKey="sold" fill="#1976d2" />
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </Box>
                                        </Paper>
                                    </Grid>

                                    {/* Stock History Line Chart */}
                                    <Grid item xs={12} md={4}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                height: 300,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Typography variant="subtitle1" gutterBottom>
                                                Stock Level History
                                            </Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <LineChart data={stockHistory}>
                                                        <XAxis dataKey="date" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Line
                                                            type="monotone"
                                                            dataKey="Paracetamol"
                                                            stroke="#ff5722"
                                                        />
                                                        <Line type="monotone" dataKey="Ibuprofen" stroke="#4caf50" />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </Box>
                                        </Paper>
                                    </Grid>

                                    {/* Revenue Trend */}
                                    <Grid item xs={12} md={4}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                height: 300,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Typography variant="subtitle1" gutterBottom>
                                                Daily Revenue Trend
                                            </Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <LineChart data={revenueTrend}>
                                                        <XAxis dataKey="date" />
                                                        <YAxis />
                                                        <Tooltip />
                                                        <Line type="monotone" dataKey="revenue" stroke="#9c27b0" />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </NestedTabPanel>

                        <NestedTabPanel value={subValue} index={1}>
                            {/* Content for Statistics Tab 2 */}
                            <Box p={2}>
                                <Typography variant="h6" gutterBottom>
                                    Inventory Statistics
                                </Typography>
                                <Grid container spacing={2}>
                                    {/* Bar Chart: Sold Items */}
                                    <Grid item xs={12} md={4}>
                                        <Paper sx={{ p: 2, height: 300 }}>
                                            <Typography variant="subtitle1">Total Sold by Product</Typography>
                                            <ResponsiveContainer width="100%" height="85%">
                                                <BarChart data={soldSummary}>
                                                    <XAxis dataKey="product" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="sold" fill="#1976d2" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </Paper>
                                    </Grid>

                                    {/* Line Chart: Stock History */}
                                    <Grid item xs={12} md={4}>
                                        <Paper sx={{ p: 2, height: 300 }}>
                                            <Typography variant="subtitle1">Stock Level History</Typography>
                                            <ResponsiveContainer width="100%" height="85%">
                                                <LineChart data={stockHistory}>
                                                    <XAxis dataKey="date" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line type="monotone" dataKey="Paracetamol" stroke="#ff5722" />
                                                    <Line type="monotone" dataKey="Ibuprofen" stroke="#4caf50" />
                                                    <Line type="monotone" dataKey="Amoxicillin" stroke="#03a9f4" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </Paper>
                                    </Grid>

                                    {/* Line Chart: Revenue Trend */}
                                    <Grid item xs={12} md={4}>
                                        <Paper sx={{ p: 2, height: 300 }}>
                                            <Typography variant="subtitle1">Daily Revenue Trend</Typography>
                                            <ResponsiveContainer width="100%" height="85%">
                                                <LineChart data={revenueTrend}>
                                                    <XAxis dataKey="date" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line type="monotone" dataKey="revenue" stroke="#9c27b0" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </NestedTabPanel>

                        <NestedTabPanel value={subValue} index={2}>
                            {/* Content for Statistics Tab 2 */}
                            <Box p={2}>
                                <Typography variant="h6" gutterBottom>
                                    Inventory Statistics
                                </Typography>
                                <Grid container spacing={2}>
                                    {/* Total Sold by Product */}
                                    <Grid item xs={12} >
                                        <Paper sx={{ p: 2, height: 300 }}>
                                            <Typography variant="subtitle1">Total Sold by Product</Typography>
                                            <ResponsiveContainer width="100%" height="85%">
                                                <BarChart data={soldSummary}>
                                                    <XAxis dataKey="product" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="sold" fill="#1976d2" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </Paper>
                                    </Grid>



                                </Grid>
                            </Box>
                        </NestedTabPanel>

                        <NestedTabPanel value={subValue} index={3}>
                            {/* Content for Statistics Tab 2 */}
                            <Box p={2}>
                                <Typography variant="h6" gutterBottom>
                                    Inventory Statistics
                                </Typography>
                                <Grid container spacing={2}>


                                    {/* Stock Level History */}
                                    <Grid item xs={12} md={12}>
                                        <Paper sx={{ p: 2, height: 300 }}>
                                            <Typography variant="subtitle1">Stock Level History</Typography>
                                            <ResponsiveContainer width="100%" height="85%">
                                                <LineChart data={stockHistory}>
                                                    <XAxis dataKey="date" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line type="monotone" dataKey="Paracetamol" stroke="#ff5722" />
                                                    <Line type="monotone" dataKey="Ibuprofen" stroke="#4caf50" />
                                                    <Line type="monotone" dataKey="Amoxicillin" stroke="#03a9f4" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </Paper>
                                    </Grid>


                                </Grid>
                            </Box>
                        </NestedTabPanel>

                        <NestedTabPanel value={subValue} index={4}>
                            {/* Content for Statistics Tab 2 */}
                            <Box p={2}>
                                <Typography variant="h6" gutterBottom>
                                    Inventory Statistics
                                </Typography>
                                <Grid container spacing={2}>


                                    {/* Daily Revenue Trend */}
                                    <Grid item xs={12} md={12}>
                                        <Paper sx={{ p: 2, height: 300 }}>
                                            <Typography variant="subtitle1">Daily Revenue Trend</Typography>
                                            <ResponsiveContainer width="100%" height="85%">
                                                <LineChart data={revenueTrend}>
                                                    <XAxis dataKey="date" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line type="monotone" dataKey="revenue" stroke="#9c27b0" />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </NestedTabPanel>

                    </CustomTabPanel>
                </Box>

            </Container>
        </Box>

    )
}

// Selected autocomplete
const top100Films = [
    { title: 'Last 7 Days', year: 1994 },
    { title: 'Last 30 Days', year: 1972 },
    { title: 'Last 90 Days', year: 1974 },
    { title: 'Last Year', year: 2008 },
];

export default ItemsPage;