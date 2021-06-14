import { VStack, Box, Heading, Text, Image } from '@chakra-ui/react';

const MeetupDetails = (props) => {
  const { data } = props;
  return (
    <VStack spacing={2}>
      <Image
        src={data.image}
        alt='meetup image'
        borderRadius='md'
        layout='fill'
      />
      <Box p={6}>
        <Heading as='h3' size='lg' fontWeight='medium'>
          {data.title}
        </Heading>
        <Text color='gray.500' fontSize='xs'>
          {data.address}
        </Text>
        <Text mt={4}>{data.description}</Text>
      </Box>
    </VStack>
  );
};

export default MeetupDetails;
