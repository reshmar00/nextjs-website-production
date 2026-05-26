import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface TimelineEntry {
  role: string;
  period: string;
  description: string;
  gradientFrom: string;
  gradientMid: string;
  gradientTo: string;
  side: 'left' | 'right';
}

const entries: TimelineEntry[] = [
  {
    role: 'Geospatial Web Development Intern',
    period: 'January 2026 – Present',
    description:
      "Successfully launched the FIMbench webapp, part of our company's work with CIROH (Cooperative Institute for Research to Operations in Hydrology).",
    gradientFrom: '#1AB2BD',
    gradientMid: '#1fcdd8',
    gradientTo: '#28D6E0',
    side: 'left',
  },
  {
    role: 'Software Developer',
    period: 'June 2024 – September 2025',
    description:
      'FullStack development, DevOps, and ML Ops under the NSF-funded National Data Platform.',
    gradientFrom: '#990E6E',
    gradientMid: '#c41e97',
    gradientTo: '#F233B8',
    side: 'right',
  },
  {
    role: 'Junior ML Engineer',
    period: 'December 2023 – June 2024',
    description:
      'Interned at a local startup (PassiveLogic, Inc.), then joined as a Jr. Machine Learning and Object Detection Engineer. Helped set up the base for one of their proprietary iOS applications.',
    gradientFrom: '#E0A40B',
    gradientMid: '#edb90e',
    gradientTo: '#F5CF14',
    side: 'left',
  },
  {
    role: 'MSD Student',
    period: 'August 2022 – December 2023',
    description:
      'Transferred to the University of Utah and graduated from the Master of Software Development program.',
    gradientFrom: '#B81111',
    gradientMid: '#c51111',
    gradientTo: '#CF1111',
    side: 'right',
  },
  {
    role: 'Teaching',
    period: '2019 – 2022',
    description:
      'Volunteered at a non-profit as a teacher, then pursued a Master of Arts in Teaching degree from Westminster College.',
    gradientFrom: '#451A7D',
    gradientMid: '#4e1e96',
    gradientTo: '#5A16BA',
    side: 'left',
  },
  {
    role: 'Language Editing',
    period: '2017 – 2018',
    description:
      'Joined as Junior Language Editor. Promoted to Team Lead and Executive Editor in less than a year.',
    gradientFrom: '#872399',
    gradientMid: '#aa28c6',
    gradientTo: '#DB2AFA',
    side: 'right',
  },
  {
    role: 'Advertising',
    period: '2015 – 2017',
    description:
      'Account Executive at two advertising startups. Coordinated branding efforts across industries and types of media.',
    gradientFrom: '#1A991A',
    gradientMid: '#1db01d',
    gradientTo: '#21C221',
    side: 'left',
  },
  {
    role: 'MBA',
    period: '2013 – 2015',
    description:
      'Graduated with an MBA in Communication Management, specialising in Advertising.',
    gradientFrom: '#9A4A09',
    gradientMid: '#c25d0c',
    gradientTo: '#E66F0E',
    side: 'right',
  },
  {
    role: "Bachelor's Degree",
    period: '2009 – 2012',
    description:
      'B.Sc. in Visual Communication with an emphasis on Television Production. Then worked 4 months as the in-house Assistant Marketing Manager at a restaurant chain.',
    gradientFrom: '#17178C',
    gradientMid: '#2526b8',
    gradientTo: '#3132DE',
    side: 'left',
  },
];

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const { role, period, description, gradientFrom, gradientMid, gradientTo, side } = entry;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Flex
        align="center"
        mb="8"
        direction={{ base: 'row', sm: side === 'left' ? 'row' : 'row-reverse' }}
      >
        {/* Card */}
        <Box
          flexGrow={{ base: 1, sm: 0 }}
          flexShrink={1}
          w={{ sm: '44%' }}
          minW={0}
        >
          <Box
            borderRadius="14px"
            overflow="hidden"
            boxShadow="0 6px 28px rgba(0,0,0,0.2)"
            border="1px solid rgba(255,255,255,0.25)"
          >
            {/* Glass header — role + period */}
            <Box
              position="relative"
              overflow="hidden"
              p="14px 16px 12px"
              borderBottom="1px solid rgba(255,255,255,0.2)"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientMid} 46%, ${gradientTo} 100%)`,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  'linear-gradient(160deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 28%, rgba(255,255,255,0.32) 46%, rgba(255,255,255,0.15) 64%, rgba(255,255,255,0) 100%)',
                pointerEvents: 'none',
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)',
              }}
            >
              <Text
                position="relative"
                fontFamily="inherit"
                fontSize="1rem"
                fontWeight="800"
                letterSpacing=".06em"
                color="white"
                textTransform="uppercase"
                textShadow="0 1px 6px rgba(0,0,0,0.35)"
                lineHeight="1.3"
              >
                {role}
              </Text>
              <Text
                position="relative"
                fontFamily="inherit"
                fontSize=".65rem"
                fontWeight="600"
                letterSpacing=".1em"
                color="rgba(255,255,255,0.88)"
                textTransform="uppercase"
                textShadow="0 1px 4px rgba(0,0,0,0.3)"
                mt="4px"
              >
                {period}
              </Text>
            </Box>
            {/* White body — description */}
            <Box bg="white" p="12px 16px 14px">
              <Text
                fontFamily="inherit"
                fontSize=".68rem"
                fontWeight="400"
                color="#222"
                letterSpacing=".04em"
                textTransform="uppercase"
                lineHeight="1.6"
              >
                {description}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Spine dot — moves to front (left) on mobile via CSS order */}
        <Box
          order={{ base: -1, sm: 0 }}
          w={{ base: '32px', sm: '12%' }}
          flexShrink={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="16px"
            h="16px"
            borderRadius="50%"
            bg="#FFBF00"
            border="3px solid rgba(255,255,255,0.9)"
            boxShadow="0 0 0 2px rgba(255,191,0,0.6), 0 0 8px rgba(255,191,0,0.4)"
            position="relative"
            zIndex={2}
          />
        </Box>

        {/* Spacer — hidden on mobile, fills opposite side on sm+ */}
        <Box display={{ base: 'none', sm: 'block' }} w={{ sm: '44%' }} />
      </Flex>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <Box
      position="relative"
      maxW="820px"
      mx="auto"
      pl={{ base: 0, sm: 5 }}
      pr={{ base: 4, sm: 5 }}
    >
      {/* Spine — left rail on mobile, centered on sm+ */}
      <Box
        position="absolute"
        left={{ base: '14px', sm: '50%' }}
        top={0}
        bottom={0}
        w="3px"
        transform={{ base: 'none', sm: 'translateX(-50%)' }}
        borderRadius="2px"
        style={{
          background: 'linear-gradient(to bottom, #FFBF00 0%, rgba(255,191,0,0.3) 100%)',
        }}
      />
      {entries.map((entry, i) => (
        <TimelineItem key={i} entry={entry} />
      ))}
    </Box>
  );
}
