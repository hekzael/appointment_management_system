import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <Container sx={{ pt: 8 }}>
            <Grid component='section' container>
                <Grid item xs={12} md={5}>
                    <Typography textAlign='left' color='blue' component='h1' variant='h2' fontWeight='bold'>
                        Easy
                    </Typography>
                    <Typography textAlign='left' color='blue' component='h1' variant='h2' fontWeight='bold'>
                        scheduling
                    </Typography>
                    <Typography textAlign='left' color='aliceblue' component='h1' variant='h2' fontWeight='bold'>
                        ahead
                    </Typography>
                    <Typography pt={4} textAlign='left' color='aliceblue' component='h1' variant='h6' >
                        Cadenly is your scheduling automation platfom for eliminating the back-and-forth emails for finding the perfect time - and so much more.
                    </Typography>

                    <Grid item container justifyContent="space-between" pt={4} >
                        <Box flexGrow={1} display="grid" pr={2}>
                            <TextField

                                id="outlined-controlled"
                                label="Enter your email"
                                value={name}
                                placeholder="Enter your email"

                            />
                        </Box>

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "none" }}
                            component={Link}
                            to="/signup"
                        >
                            Sign up
                        </Button>
                    </Grid>
                    <Typography pt={1} textAlign="left" component='p' variant="caption">Create your free account. No credit card required.</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: { md: "flex", xs: "none" } }}></Grid>
            </Grid>
        </Container>
    );
};
