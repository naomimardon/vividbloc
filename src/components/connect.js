import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Connect = () => {
    return (
        <Box className="connect" sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5}>
                <Grid className="connectTitleDiv" item xs={12}>
                    <h2 className="connectTitle">Ready to Transform Your Narrative</h2>
                </Grid>
                <Grid className="connectText" item xs={12}>
                    <p>Let's craft your story together. Reach out for a personalized consultation.</p>
                </Grid>
                <Grid className="connectButtonDiv" item xs={12}>
                <Button className="connectButton" variant="contained">Connect with Us</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Connect;