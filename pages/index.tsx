import Image from 'next/image';
import { Box, Button, Text, Link, VStack } from '@chakra-ui/react';

export default function Home() {
  const redirectToGitHub = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="main-content">
        <div id="highlighted-text">
          <div id="left-content">
            <div className="profile-picture">
              <Image
                src="/resources/headshot-400x400.jpg"
                alt="Your Photo"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div id="right-content">
            <p className="highlight">
              Reshma Raghavan<br />
              <Image
                src="/resources/flaticon_github.png"
                alt="GitHub"
                className="aligned-icon"
                width={24}
                height={24}
                unoptimized
              />
              <Link href="https://bit.ly/3S3MQ70" className="no-link-style">
                reshmar00
              </Link>
            </p>
          </div>
        </div>

        <Box id="project-container">
          {/* First project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">Recipe Sharing Website</Text>
            <Image
              src="/resources/recipe-demo-1.gif"
              alt="React-Django Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              Recipe Sharing Website is a full-stack web application that
              allows users to share and discover recipes. The application has
              a React frontend and a Django backend, enabling users to browse
              recipes, add new ones, and interact with the database through a
              RESTful API.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/recipe-sharing-website')}
            >
              CODE
            </Button>
          </VStack>

          {/* Second project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">Twaddle</Text>
            <Image
              src="/resources/twaddle-demo.gif"
              alt="Twaddle Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              Twaddle is a fun web app that utilizes Node.js functionality for
              uploading files, sending emails, and emitting events. This project
              demonstrates various features including file upload, email sending,
              and event handling within a simple HTML/CSS/JS web interface.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/twaddle')}
            >
              CODE
            </Button>
          </VStack>

          {/* Third project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">Solar Water Heater</Text>
            <Image
              src="/resources/solar-water-heater-demo.gif"
              alt="Solar Water Heater Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              This program simulates a solar water heating system, using inputs
              like solar collector area, collector angle, time of day, etc. It
              outputs the temperature change over time and the system's overall
              efficiency. Technologies used include JavaScript, JEST, HTML, CSS,
              and Chart.js. For the full details on the science and technology
              behind this project, follow the link to my github repository below.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/Solar-Water-Heater-Simulation')}
            >
              CODE
            </Button>
          </VStack>
        </Box>
      </div>
    </main>
  );
}