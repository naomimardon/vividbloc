import React from "react";
import Avatar from '@mui/material/Avatar';

const CameraImage = () => {
    return (
        <Avatar className="camera"
        alt="Camera"
        src={process.env.PUBLIC_URL + "/images/Ellipse7.png"}
        sx={{ width: 180, height: 180 }}
        />
    );
};

export default CameraImage;