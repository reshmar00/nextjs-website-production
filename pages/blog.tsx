import { Box, Flex, Image } from '@chakra-ui/react';

export default function Blog() {
  return (
    <Box display="flex" flexDir="column" alignItems="center" p={{ base: 3, md: 8, lg: '4rem' }}>
      <div id="main-content">
        <Flex as="div" direction="column" alignItems="center" p={4}>
          <Image src="/resources/under-construction_desktop.jpg" alt="Under Construction" maxW="100%" />
        </Flex>
      </div>
    </Box>
  );
}