import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Navbar = () => {
    return (
        <AppBar className='navbar' position="static">
            <Container maxWidth="xl" >
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
                        }}
                    >
                        <NavLink to="/">
                            vividbloc.studio
                        </NavLink>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;