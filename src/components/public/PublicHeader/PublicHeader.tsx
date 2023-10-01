import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { KeyboardArrowDown, Language, } from '@mui/icons-material';
import { Grid } from '@mui/material';

const pages = ['Products', 'Solutions', 'Teams & Companies', 'Pricing', 'Resources'];

const idioms = ["English", "Spanish"]

export const PublicHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElTranslate, setAnchorElTranslate] = useState<null | HTMLElement>(null);
    const [translateTo, setTranslateTo] = useState<string>(idioms[0])

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenTranslateMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElTranslate(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseTranslateMenu = () => {
        setAnchorElTranslate(null);
    };

    const handleSelecteTranslation = (selected: string) => () => {
        setAnchorElTranslate(null);
        setTranslateTo(selected)
    }

    return (
        <AppBar color='inherit' position="fixed" component="header">
            <Container >
                <Toolbar disableGutters variant="dense" sx={{ minHeight: 15 }}>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            size='small'
                            id="menu-translate-appbar"
                            aria-controls={anchorElTranslate ? 'menu-translate-appbar' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorElTranslate)}
                            variant="text"
                            disableElevation
                            color='inherit'
                            sx={{ textTransform: "none" }}
                            onClick={handleOpenTranslateMenu}
                            endIcon={<KeyboardArrowDown />}
                            startIcon={<Language />}
                        >
                            {translateTo}
                        </Button>
                        <Menu
                            id="menu-translate-appbar"
                            anchorEl={anchorElTranslate}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElTranslate)}
                            onClose={handleCloseTranslateMenu}

                        >
                            {idioms.map((idiom) => (
                                <MenuItem key={idiom} onClick={handleSelecteTranslation(idiom)}>
                                    <Typography textAlign="center">{idiom}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Calendly
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Calendly
                    </Typography>
                    <Box justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Grid pl={3} pr={3} container justifyContent="space-around">
                            {pages.map((page) => (
                                <Button
                                    sx={{ textTransform: "none" }}
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    color="inherit"
                                >
                                    {page}
                                </Button>
                            ))}
                        </Grid>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            sx={{ textTransform: "none" }}
                            color="inherit"
                        >
                            Log In
                        </Button>
                        <Button
                            sx={{ textTransform: "none" }}
                            variant="contained"
                        >
                            Get started
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
