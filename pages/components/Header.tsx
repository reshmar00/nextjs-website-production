import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '500',
  subsets: ['latin'],
});

export default function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="header" bg="rgba(255, 195, 0, 0.8)" p="1.25em" className={raleway.className}>
      <Flex justify="space-between" align="center" direction={isMobile ? 'column' : 'row'}>
        <Link href="/" passHref>
          <Image src="/resources/reshma_png.png" alt="Reshma" width={100} height={100} />
        </Link>
        <Flex
          as="nav"
          direction={isMobile ? 'column' : 'row'}
          align="center"
          justifyContent={isMobile ? 'center' : 'flex-end'}
          w={isMobile ? '100%' : 'auto'}
          mt={isMobile ? '1em' : '0'}
        >
          <Link href="/">
            <Text mx="1em" fontWeight="bold" color="#333">Home</Text>
          </Link>
          <Link href="/about">
            <Text mx="1em" fontWeight="bold" color="#333">About Me</Text>
          </Link>
          <Link href="#contact-info">
            <Text mx="1em" fontWeight="bold" color="#333">Contact</Text>
          </Link>
          <Link href="/projects">
            <Text mx="1em" fontWeight="bold" color="#333">Projects</Text>
          </Link>
          <Link href="/blog">
            <Text mx="1em" fontWeight="bold" color="#333">Blog</Text>
          </Link>
          <a href="/resources/Reshma-Raghavan_Resume.pdf" download>
            <Text mx="1em" fontWeight="bold" color="#333">Download Resume</Text>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
}