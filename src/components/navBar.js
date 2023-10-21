import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import './navBar.css';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className='navbar' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        className='vividblocText'
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontWeight: '400',
                            fontSize: '22px',
                            lineHeight: '26.6px',
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <NavLink to="/">
                            vividbloc.studio
                        </NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Typography
                            className="vividblocText"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                fontWeight: '400',
                                fontSize: '18px',
                                lineHeight: '25.91px',
                                display: { xs: 'flex', md: 'none' },
                                marginTop: { xs: '41px', md: 'none' },
                                marginLeft: { xs: '24px', md: 'none' },
                                flexGrow: 1,
                            }}
                        >
                            vividbloc.studio2
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <Typography
                                className="menu"
                            >
                                Menu
                            </Typography>
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
                                borderRadius: '10px',
                            }}
                        >
                            <IconButton
                                className="close"
                                size="large"
                                onClick={handleCloseNavMenu}
                            >
                                <Typography
                                    className="menu"
                                >
                                    Close
                                </Typography>
                            </IconButton>
                            <MenuItem
                                onClick={handleCloseNavMenu}>
                                <Typography
                                    className="menuItem"
                                >
                                    About Us
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    className="menuItem"
                                >
                                    Our Craft
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    className="menuItem"
                                >
                                    Blog
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    className="menuItem"
                                >
                                    Contact
                                </Typography>
                            </MenuItem>
                            <div className="menuSocials">
                                <img
                                    className="menuIcon"
                                    src={process.env.PUBLIC_URL + "/icons/skill-icons_linkedin.png"}
                                    alt="LinkedIn logo"
                                />
                                <img
                                    className="menuIcon"
                                    src={process.env.PUBLIC_URL + "/icons/line-md_twitter-x-alt.png"}
                                    alt="Twitter X logo"
                                />
                                <img
                                    className="menuIcon"
                                    src={process.env.PUBLIC_URL + "/icons/skill-icons_instagram.png"}
                                    alt="Instagram logo"
                                />
                            </div>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;