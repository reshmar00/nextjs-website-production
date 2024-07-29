import Image from 'next/image';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

export default function Projects() {
  const redirectToGitHub = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="main-content">
        <Box id="project-container">
          {/* First project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">Apple Tree Game</Text>
            <Image
              src="/resources/appleTreeGameDemo.gif"
              alt="Apple Tree Game Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              Collaborated with a project partner to create a simple game using C++ and the SFML library for its GUI components. We created several objects on screen (including one that was created dynamically), with some of them interacting with one another, and enabled user interaction through the keyboard.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/appleTreeGameSFML')}
            >
              CODE
            </Button>
          </VStack>

          {/* Second project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">Chat Server</Text>
            <Image
              src="/resources/chatServerDemo.gif"
              alt="Chat Server Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              Created a Slack clone (chat app) that allows users to enter a chat room and send messages. Includes full-stack development: frontend elements that use HTML, CSS, and JavaScript, and backend elements in Java that facilitate communication over web sockets. Developed my own web server in Java as part of this project.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/ChatServer')}
            >
              CODE
            </Button>
          </VStack>

          {/* Third project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">Unix Shell</Text>
            <Image
              src="/resources/unixShellDemo.gif"
              alt="Unix Shell Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              This project is a custom Unix shell implementation developed in C++, drawing inspiration from well-known environments like bash and zsh. Utilizing POSIX system calls, the shell can interpret lines of input as individual user commands, proficiently managing operations such as ls, cat someFile, and echo hello world. Beyond this, the shell is equipped with I/O redirection, piping, and offers a smooth user experience with features like tab completion.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/Unix_Shell')}
            >
              CODE
            </Button>
          </VStack>

          {/* Fourth project item */}
          <VStack id="project-item" mb="8" spacing="4" alignItems="center">
            <Text fontSize="2xl">SVM vs. kNN Classifier</Text>
            <Image
              src="/resources/jupyter-notebook-demo.gif"
              alt="SVM vs. kNN Demo"
              width={400}
              height={300}
              unoptimized
            />
            <Text width="80%">
              This Python project compares the accuracies of Support Vector Machine (SVM) and k-Nearest Neighbors (kNN) classifiers using the MNIST Handwritten Digits dataset. The project includes visualizations to illustrate the performance differences between these two methods.
            </Text>
            <Button
              bg="brand.200"
              color="#333"
              _hover={{ bg: 'brand.900' }}
              onClick={() => redirectToGitHub('https://github.com/reshmar00/SVM-vs-kNN-Classification')}
            >
              CODE
            </Button>
          </VStack>
        </Box>
      </div>
    </main>
  );
}