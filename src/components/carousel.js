import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CameraImage from './cameraImage';

const Carousel = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, paddingTop: "50px" }}>
                <Grid className="quoteGrid" container spacing={0.5} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item className="quoteImage" xs={4} sm={8} md={4}>
                        <CameraImage />
                    </Grid>
                    <Grid item xs={4} sm={8} md={8}>
                        <Typography>
                            <h2 className="woah">Woah.</h2>
                            <p className="quote">“The video is fantastic, and has been really well received by those I’ve shared it with. Our CEO described it is ‘sensational’ and said it made his day.”</p>
                            <p className="name">Jane Doe</p>
                            <p className="company">SomeCompany LLC.</p>
                            <Link classname="companyURL" to="https://somecompanyllc.co" target="_blank" end>https://somecompanyllc.co</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Carousel;