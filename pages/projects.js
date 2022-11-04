import React from 'react';
import { Box } from '@chakra-ui/react';
import ImageSlider from "../components/imageslider";
export default function Projects() {

    const slides = [
        { url: "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" },
        { url: "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" },
        { url: "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" },
    ];

    const containerStyles = {
        width: "1600px",
        height: "800px",
        margin: "0 auto"
    };

    return (
        <Box py={8}
        >
            <Box style={containerStyles}>
                <ImageSlider slides={slides} />
            </Box>
        </Box>
    )
};