import AdbIcon from "@mui/icons-material/Adb";
import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const idioms = ["English", "Spanish"];

export const Login = () => {
    const [translateTo, setTranslateTo] = useState(idioms[0]);
    return (
        <Container maxWidth='xs' component='section'>
            <Grid container justifyContent='center' direction='column'>
                <Box display='flex' justifyContent='center' flexDirection='row' alignItems='center'>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Typography
                        variant='h5'
                        noWrap
                        sx={{
                            mr: 2,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                        Calendly
                    </Typography>
                </Box>

                <Typography variant='body2' pt={1} pb={3}>
                    Log in to access for Calendly
                </Typography>

                <Box pb={4} />
                <Grid component='form' container p={2} direction='column' rowSpacing={3} border={1} borderRadius={1}>
                    <Grid item>
                        <TextField fullWidth variant='standard' label='Enter your email to get started.' placeholder='email address' type="email" InputLabelProps={{ shrink: true }} />
                    </Grid>

                    <Grid item>
                        <TextField fullWidth variant='standard' label='Enter your password.' placeholder='password' type="password" InputLabelProps={{ shrink: true }} />
                    </Grid>

                    <Grid item>
                        <Button fullWidth variant='contained' sx={{ borderRadius: 5, textTransform: "none" }}>
                            Get Started
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='body2'
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                "& span:before": {
                                    borderTop: "2px solid #f6f6f6",
                                    content: '""',
                                    margin: "0 auto",
                                    position: "absolute",
                                    top: "50%",
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: "100%",
                                    zIndex: -1,
                                },
                            }}>
                            <Box
                                component='span'
                                sx={{
                                    zIndex: 1,
                                    background: "#fff",
                                    px: 2,
                                }}>
                                OR
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item container rowGap={1.3}>
                        <Button fullWidth variant='outlined' color='inherit' sx={{ borderRadius: 5, textTransform: "none" }}>
                            Login with Google
                        </Button>
                        <Button fullWidth variant='outlined' color='inherit' sx={{ borderRadius: 5, textTransform: "none" }}>
                            Login with Microsoft
                        </Button>
                    </Grid>

                    <Grid item container>
                        <Typography variant='caption' textAlign='left'>
                            Don't have an account?{" "}
                            <Link style={{ textDecoration: "none" }} to='/signup'>
                                Sign up
                            </Link>
                            .
                        </Typography>
                    </Grid>
                    <Box pb={3} />
                </Grid>

                <Box pb={2} />
                <Grid item container justifyContent='center' alignItems='center'>
                    <Grid item xs={3}>
                        <TextField
                            select
                            color="primary"
                            variant='standard'
                            value={translateTo}
                            onChange={(e) => {
                                setTranslateTo(e.target.value);
                            }}
                            fullWidth
                            SelectProps={{ disableUnderline: true }}
                        >
                            {idioms.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
