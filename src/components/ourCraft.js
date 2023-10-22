import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const OurCraft = () => {
    return (
        <Box className="ourCraft" sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5}>
                <Grid className="ourCraftTitle" item xs={12}>
                    <h2>Our Craft</h2>
                </Grid>
                <Grid className="craftImage"
                    item xs={12} md={3}
                    style={{
                        backgroundImage: `url("/images/Group7.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "507px",
                    }}>
                    <p>Video Production</p>
                </Grid>
                <Grid className="craftImage"
                    item xs={12} md={3}
                    style={{
                        backgroundImage: `url("/images/Group8.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "507px",
                    }}>
                    <p>Talent Management</p>
                </Grid>
                <Grid className="craftImage"
                    item xs={12} md={3}
                    style={{
                        backgroundImage: `url("/images/Group9.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "507px",
                    }}>
                    <p>Personal Branding</p>
                </Grid>
                <Grid className="craftImage"
                    item xs={12} md={3}
                    style={{
                        backgroundImage: `url("/images/Group10.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "507px",
                    }}>
                    <p>Event Management</p>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurCraft;