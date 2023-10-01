import AdbIcon from "@mui/icons-material/Adb";
import { Box, Grid, Typography } from "@mui/material";

export const AppFooter = () => {
    return (
        <Grid container component='footer' alignItems='center' width='100%' paddingBottom={2}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
                variant='h6'
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                }}>
                Calendly
            </Typography>

            <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>parte dos</Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
                variant='h5'
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                }}>
                Calendly
            </Typography>
            <Box justifyContent="center" sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
                <Typography variant="caption">
                    Copyright@ {new Date().getFullYear()} Calendly. All rights reserved.
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Typography variant="caption">powered by HekzaDev</Typography>
            </Box>
        </Grid>
    );
};
