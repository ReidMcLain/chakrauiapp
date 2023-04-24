import { Box, Button, Text, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const VideoCard = ({ video }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={3} >
            <Box p="6">
                <Heading fontSize="3xl" fontWeight="bold" mb={4} display="flex"
                    justifyContent="center">
                    {video.title}
                </Heading>
                <Text
                    mb={4} display="flex"
                    justifyContent="center"

                >Competition: {video.competition.name}</Text>
                <Box
                    dangerouslySetInnerHTML={{ __html: video.embed }}
                    mb={4}
                    className="embed-responsive embed-responsive-16by9"
                ></Box>
                <Box d="flex">
                    <Box flex="1" >
                        <Text fontWeight="bold" mb={2}>
                            {video.side1.name}
                        </Text>
                        <Button colorScheme="blue" onClick={() => window.open(video.side1.url, '_blank')} rel="noreferrer">
                            Watch {video.side1.name}
                        </Button>
                    </Box>
                    <Box flex="1">
                        <Text fontWeight="bold" mb={2}>
                            {video.side2.name}
                        </Text>
                        <Button colorScheme="blue" onClick={() => window.open(video.side2.url, '_blank')} rel="noreferrer">
                            Watch {video.side2.name}
                        </Button>
                    </Box>
                    <Text mb={4}  display="flex" justifyContent="center">Date: {video.date}</Text>
                </Box>
            </Box>
        </Box>
    );
};

const MyComponent = () => {
    const [data, setData] = useState(null);
    const [limit, setLimit] = useState(6); // Set a limit of 6 cards to be displayed at once

    useEffect(() => {
        fetch('https://www.scorebat.com/video-api/v1/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    const handleLoadMore = () => {
        setLimit(prevLimit => prevLimit + 6); // Increase the limit by 6 when the "Continue" button is clicked
    };

    return (
        <Box className="container">
            {data ? (
                <>
                    <Box className="row">
                        {data.slice(0, limit).map((video, index) => (
                            <Box className="col-md-4 mb-3" key={index}>
                                <VideoCard video={video} />
                            </Box>
                        ))}
                    </Box>
                    {limit < data.length && ( // Display the "Continue" button if the limit hasn't reached the total number of cards
                        <Box textAlign="center" mt={6}>
                            <Button colorScheme="blue" onClick={handleLoadMore}>
                                Continue
                            </Button>
                        </Box>
                    )}
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </Box>
    );
};

export default MyComponent;