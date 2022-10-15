import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>This Website is freakin sick</TestimonialHeading>
              <TestimonialText>
                Reid heckin dope, this website literally slaps. Ever since I visted this website, I got shredded, cured cancer, visted the moon, 11/10.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://cdn.discordapp.com/avatars/225637464843223040/fb365e8ee46596ad8f3ecf47630723f7.webp?size=24'
              }
              name={'Jay Dye'}
              title={'Squire of Dangit'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Dang it</TestimonialHeading>
              <TestimonialText>
                Daaaaaaaaaaaaaaaaaaaaaaaaaaaang iiiiiiiiiiiiit
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://cdn.discordapp.com/avatars/710991483653587047/6990c6bc72f3d1404e58a2a9bebc1bf0.webp?size=128'
              }
              name={'Mike Hoye'}
              title={'Dean of Dangit'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>What is this?</TestimonialHeading>
              <TestimonialText>
               What the heck man?
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://cdn.discordapp.com/avatars/342063720664662029/582540e3f86f0e5f4e1a726744543b95.webp?size=24'
              }
              name={'Noah Gregson'}
              title={'Guy in Real Life'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}