import { Box, Heading, Text, Center, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

const MeetupItem = ({ meetup }) => {
  const { id, image, title, address, description } = meetup;
  return (
    <Box as='li' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <img src={image} alt='meetup image' layout='fill' />
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
