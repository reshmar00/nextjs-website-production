import { Flex, Image } from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div id="main-content">
          <Flex as="main" direction="column" alignItems="center" p={4}>
            <Image src="/resources/timeline-about_me.jpg" alt="About" className="infographic" />
          </Flex>
        </div>
      </main>
    </>
  );
}