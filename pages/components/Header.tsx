import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Collapse, Icon } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About Me' },
  { href: '#contact-info',label: 'Contact' },
  { href: '/projects',    label: 'Projects' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="header" bg="rgba(255, 195, 0, 0.8)">
      <Flex justify="space-between" align="center" p="1.25em">
        <Link href="/" passHref>
          <Image src="/resources/reshma_png.png" alt="Reshma" width={100} height={100} />
        </Link>

        {/* Desktop nav */}
        <Flex as="nav" align="center" display={{ base: 'none', lg: 'flex' }}>
          {navLinks.map(({ href, label }) => (
            <Link href={href} key={href}>
              <Text mx="1em" fontWeight="bold" color="#333">{label}</Text>
            </Link>
          ))}
          <a href="/resources/Reshma-Raghavan_Resume.pdf" download>
            <Text mx="1em" fontWeight="bold" color="#333">Download Resume</Text>
          </a>
        </Flex>

        {/* Hamburger button — mobile only */}
        <Box
          as="button"
          display={{ base: 'flex', lg: 'none' }}
          alignItems="center"
          onClick={() => setIsOpen(!isOpen)}
          bg="transparent"
          border="none"
          cursor="pointer"
          p="0.5em"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          <Icon as={isOpen ? FaTimes : FaBars} w={6} h={6} color="#333" />
        </Box>
      </Flex>

      {/* Mobile drawer */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          as="nav"
          display={{ base: 'block', lg: 'none' }}
          bg="rgba(255, 195, 0, 0.97)"
          borderTop="1px solid rgba(0,0,0,0.1)"
        >
          {navLinks.map(({ href, label }) => (
            <Link href={href} key={href}>
              <Box
                as="span"
                display="block"
                px="1.5em"
                py="0.75em"
                fontWeight="bold"
                color="#333"
                borderBottom="1px solid rgba(0,0,0,0.07)"
                cursor="pointer"
                _hover={{ bg: 'rgba(0,0,0,0.05)' }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Box>
            </Link>
          ))}
          <a
            href="/resources/Reshma-Raghavan_Resume.pdf"
            download
            onClick={() => setIsOpen(false)}
          >
            <Box
              as="span"
              display="block"
              px="1.5em"
              py="0.75em"
              fontWeight="bold"
              color="#333"
              cursor="pointer"
              _hover={{ bg: 'rgba(0,0,0,0.05)' }}
            >
              Download Resume
            </Box>
          </a>
        </Box>
      </Collapse>
    </Box>
  );
}
