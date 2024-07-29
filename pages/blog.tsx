import { Flex, Image } from '@chakra-ui/react';

export default function Blog() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div id="main-content">
          <Flex as="main" direction="column" alignItems="center" p={4}>
            <Image src="/resources/under-construction_desktop.jpg" alt="Under Construction" />
          </Flex>
        </div>
      </main>
    </>
  );
}