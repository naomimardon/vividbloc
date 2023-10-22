import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <Box className="footer" sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5}>
                <Grid className="footerDiv"
                    item xs={12} md={3}
                    >
                    <img src={process.env.PUBLIC_URL + "/icons/vividbloc.studio.png"}
                        alt="vividbloc logo"
                    />
                </Grid>
                <Grid className="footerLink"
                    item xs={12} md={1}
                    >
                </Grid>
                <Grid className="footerLink"
                    item xs={12} md={1}
                    >
                    <p>About Us</p>
                </Grid>
                <Grid className="footerLink"
                    item xs={12} md={1}
                    >
                    <p>Our Craft</p>
                </Grid>
                <Grid className="footerLink"
                    item xs={12} md={1}
                    >
                    <p>Blog</p>
                </Grid>
                <Grid className="footerLink"
                    item xs={12} md={1}
                    >
                    <p>Contact</p>
                </Grid>
                <Grid className="footerLink"
                    item xs={12} md={1}
                    >
                </Grid>
                <Grid className="footerDiv"
                    item xs={12} md={3}
                    >
                    <img
                        className="footerIcon"
                        src={process.env.PUBLIC_URL + "/icons/skill-icons_linkedin.png"}
                        alt="LinkedIn logo"
                    />
                    <img
                        className="footerIcon"
                        src={process.env.PUBLIC_URL + "/icons/line-md_twitter-x-alt.png"}
                        alt="Twitter X logo"
                    />
                    <img
                        className="footerIcon"
                        src={process.env.PUBLIC_URL + "/icons/skill-icons_instagram.png"}
                        alt="Instagram logo"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;