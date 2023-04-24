import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export default function SplitScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Reid McLain
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Portfolio Website
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Hi welcome to my first website!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded={'full'} onClick={onOpen}>
              Click Here to learn more about the Creator of this Website!
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Reid McLain</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Hey there! My name is Reid McLain. I am an aspiring software developer with interests in APIs, chess, AI/Machine learning and all things Auburn Sports. I graduated from Auburn University in 2020 with a degree in Applied Mathematics and I love to build and create cool things. Thanks for checking out my website!
                </ModalBody>
                <ModalFooter>
                  <Button variant='ghost' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          objectFit={'cover'}
          src={
            'https://acegif.com/wp-content/uploads/2021/4fh5wi/welcome-15.gif'
          }
          alt='Welcome'
        />
      </Flex>
    </Stack>
  );
}