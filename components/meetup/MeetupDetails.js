import { useState } from 'react';
import { VStack, Box, Heading, Text, Image, Skeleton } from '@chakra-ui/react';

const MeetupDetails = (props) => {
  const { data } = props;

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => setIsLoading(false);

  return (
    <VStack spacing={2}>
      <Skeleton isLoaded={!isLoading} w='100%' borderRadius='md'>
        <Image
          src={data.image}
          alt='meetup image'
          borderRadius='md'
          height={[300, 400, 500]}
          w={['100%']}
          objectFit='cover'
          onLoad={handleImageLoad}
        />
      </Skeleton>

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
