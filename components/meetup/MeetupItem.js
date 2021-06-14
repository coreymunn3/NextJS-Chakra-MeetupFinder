import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Center,
  Button,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const MeetupItem = ({ meetup }) => {
  const { id, image, title, address, description } = meetup;
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => setIsLoading(false);

  return (
    <Box as='li' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={image}
          alt='meetup image'
          height={250}
          w='100%'
          objectFit='cover'
          onLoad={handleImageLoad}
        />
      </Skeleton>

      <Box p={6}>
        <Heading as='h3' size='lg' fontWeight='medium'>
          {title}
        </Heading>
        <Text color='gray.500' fontSize='xs'>
          {address}
        </Text>
        <Text mt={4}>{description}</Text>
        <Center mt={4}>
          <Button variant='outline' colorScheme='cyan'>
            <NextLink href={`/${id}`}>See Details</NextLink>
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default MeetupItem;
