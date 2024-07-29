import { Box, Flex, Link as ChakraLink, Text, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" bg="rgba(255, 195, 0, 0.8)" p="1.25em" textAlign="center">
      <Flex direction="column" align="center" id="contact-info">
        <Flex mb="1em">
          <ChakraLink href="https://bit.ly/3S3MQ70" isExternal mx="1em" display="flex" alignItems="center">
            <Icon as={FaGithub} w={6} h={6} mr="0.5em" /> GitHub
          </ChakraLink>
          <ChakraLink href="mailto:reshma.ragh@gmail.com" mx="1em" display="flex" alignItems="center">
            <Icon as={FaEnvelope} w={6} h={6} mr="0.5em" /> Gmail
          </ChakraLink>
          <ChakraLink href="https://bit.ly/3I3W6ls" isExternal mx="1em" display="flex" alignItems="center">
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