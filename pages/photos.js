import React from 'react';
import { Box, Flex, Heading, VStack} from '@chakra-ui/react';
import ImageSlider from "../components/imageslider";

export default function Photos() {

    const slides = [
        { url: 'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60' },
        { url: 'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60' },
        { url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-1.jpg' },
        { url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-2.jpg' },
        { url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-3.jpg' },
        { url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-4.jpg' },
        { url: 'https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-5.jpg' }
    ];

    const containerStyles = {
        width: '100%',
        margin: '0 auto'
    };

    return (
        <Flex mb={8} mr={5} ml={5} direction={['column', 'row']}
        >
            <VStack
                spacing={1}
                w="full"
            >
                <Heading p={5}
                    style={{ textDecoration: 'none' }}
                >
                    A custom picture slider
                </Heading>
                <Box style={containerStyles}
                height={{ sm: '400px', md: '600px', xl: '800px' }}
                >
                    <ImageSlider slides={slides} />
                </Box>
            </VStack>
        </Flex>
    )
};