import { Box, Flex, HStack, Spacer, Heading } from '@chakra-ui/react';
import NavLink from './NavLink';

const Navigation = () => {
  return (
    <Box minH={50} backgroundColor={'gray.200'} p={4} mb={6}>
      <Flex flexDirection='row'>
        <Box>
          <Heading size='lg'>Meetups</Heading>
        </Box>
        <Spacer />
        <HStack spacing={2}>
          <NavLink href='/'>All Meetups</NavLink>
          <NavLink href='/new-meetup'>New Meetup</NavLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
