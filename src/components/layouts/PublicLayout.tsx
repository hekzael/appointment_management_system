import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { PublicHeader } from '../public/PublicHeader';
import { AppFooter } from '../common/AppFooter';

export const PublicLayout = () => {
    return (
        <Container>
            <PublicHeader />
            <Grid component="main">
                <Outlet />
            </Grid>
            <AppFooter />
        </Container>
    )
}
