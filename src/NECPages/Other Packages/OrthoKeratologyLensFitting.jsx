import { Container, Grid } from '@mui/material';
import OtherPackageNav from "../OtherPackageNav.jsx";
import ServicePackageUI from "../Components/ServicePageUI.jsx"





function OrthoKeratologyLensFitting(){




    return(
            <Container maxWidth="lg">
                <Grid container spacing={2}>

                    <Grid item xs={12} md={8} >
                        <ServicePackageUI />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt: '15px'}}>
                        <OtherPackageNav />
                    </Grid>
                </Grid>
            </Container>
    )
}

export default OrthoKeratologyLensFitting;


