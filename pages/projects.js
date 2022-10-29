import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Image, Stack, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Projects() {

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    return (
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'} >
                <CarouselProvider
                    naturalSlideWidth={700}
                    naturalSlideHeight={700}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}>
                            <Image
                                src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            />
                        </Slide>
                        <Slide index={1}>
                            <Image
                                src="https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            />
                        </Slide>
                        <Slide index={2}>
                            <Image
                                src="https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                            />
                        </Slide>
                    </Slider>
                    <ButtonBack>
                        <IconButton
                            aria-label="left-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="realtive"
                            left={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                        >
                            <BiLeftArrowAlt />
                        </IconButton>
                    </ButtonBack>
                    <ButtonNext>
                        <IconButton
                            aria-label="right-arrow"
                            colorScheme="messenger"
                            borderRadius="full"
                            position="relative"
                            right={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                        >
                            <BiRightArrowAlt />
                        </IconButton>
                    </ButtonNext>
                </CarouselProvider>
            </Stack>
        </Flex>
    )
}