import NextLink from 'next/link'
import { Button, Text, Heading, Box, Link } from '@chakra-ui/react'

const CustomLink = ({ ChakraComponent, href, children, ...props }) => {
    return (
        <NextLink href={href} passHref>
            <Link style={{ textDecoration: 'none' }}>
                <ChakraComponent {...props}>
                    {children}
                </ChakraComponent>
            </Link>
        </NextLink>
    )
}

export default CustomLink