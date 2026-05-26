import { Box, Flex, Link as ChakraLink, Text, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" bg="rgba(255, 195, 0, 0.8)" p="1.25em" textAlign="center">
      <Flex direction="column" align="center" id="contact-info">
        <Flex
          mb="1em"
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={{ base: 2, md: 0 }}
        >
          <ChakraLink
            href="https://bit.ly/3S3MQ70"
            isExternal
            mx={{ base: 0, md: '1em' }}
            py={{ base: 2, md: 0 }}
            px={{ base: 6, md: 0 }}
            display="flex"
            alignItems="center"
            bg={{ base: 'rgba(255,255,255,0.35)', md: 'transparent' }}
            borderRadius={{ base: '8px', md: '0' }}
            w={{ base: '160px', md: 'auto' }}
            justifyContent="center"
          >
            <Icon as={FaGithub} w={6} h={6} mr="0.5em" /> GitHub
          </ChakraLink>
          <ChakraLink
            href="mailto:reshma.ragh@gmail.com"
            mx={{ base: 0, md: '1em' }}
            py={{ base: 2, md: 0 }}
            px={{ base: 6, md: 0 }}
            display="flex"
            alignItems="center"
            bg={{ base: 'rgba(255,255,255,0.35)', md: 'transparent' }}
            borderRadius={{ base: '8px', md: '0' }}
            w={{ base: '160px', md: 'auto' }}
            justifyContent="center"
          >
            <Icon as={FaEnvelope} w={6} h={6} mr="0.5em" /> Gmail
          </ChakraLink>
          <ChakraLink
            href="https://bit.ly/3I3W6ls"
            isExternal
            mx={{ base: 0, md: '1em' }}
            py={{ base: 2, md: 0 }}
            px={{ base: 6, md: 0 }}
            display="flex"
            alignItems="center"
            bg={{ base: 'rgba(255,255,255,0.35)', md: 'transparent' }}
            borderRadius={{ base: '8px', md: '0' }}
            w={{ base: '160px', md: 'auto' }}
            justifyContent="center"
          >
            <Icon as={FaLinkedin} w={6} h={6} mr="0.5em" /> LinkedIn
          </ChakraLink>
        </Flex>
        <Flex direction="column" align="center">
          <Text mt="1em">
            <span>Assets sourced from&nbsp;</span>
            <ChakraLink href="https://www.freepik.com/" isExternal>
              Freepik
            </ChakraLink>
            <span>: </span>
            <ChakraLink href="https://www.freepik.com/free-vector/gradient-pink-abstract-background_19333333.htm" isExternal>
              Background
            </ChakraLink>
            <span> | </span>
            <ChakraLink href="https://www.freepik.com/free-vector/professional-rr-logotype-template_21743113.htm" isExternal>
              Logo
            </ChakraLink>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
