import React from 'react'
import { Button, Text, Heading, Box, Link, useTheme } from '@chakra-ui/react'
import CustomLink from '../components/Link'
import ToggleModeBtn from '../components/Togglemode'

const Index = () => {
    console.log(useTheme())
    return (
        <div >
            <Button>
                Button
            </Button>
            <Text as='section' fontSize='4rem' color='red'>
                Text
            </Text>
            <Heading 
            color='red.200'
            fontSize={{ sm: '24px', md: '40px', lg: '56px', xl: '72px'}}
            >
                Heading
            </Heading>
            <Box as={Heading}>
                Box inheretting Heading styles
            </Box>
            <Link href='/about'
            style={{ textDecoration: 'none' }}
            >
                Link
            </Link>
            <CustomLink
                href='/about'
                ChakraComponent={Button}
                margin='1rem 3rem'
                background='teal'
                _hover={{
                    background: 'red',
                    color: 'teal.500'
                }}
                underline="none"
                >
                Custom Link
            </CustomLink>
            <ToggleModeBtn />
            <Text>
                DatePicker, TimePicker, Pagination
            </Text>
            <Box sx={{
                background:'blue.200',
                '&:hover': {
                    background: 'green.200'
                },
                '& .head2': {
                    color: 'teal.200'
                }
            }}>
                <Heading>
                    Heading1
                </Heading>
                <Heading className='head2'>
                    Heading2
                </Heading>
            </Box>
        </div>
    )
}

export default Index