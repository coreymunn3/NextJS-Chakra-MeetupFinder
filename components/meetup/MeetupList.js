import { Stack } from '@chakra-ui/react';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetupList }) => {
  return (
    <Stack
      as='ul'
      spacing={4}
      width={['95%', '90%', '80%']}
      maxW={800}
      margin='auto'
    >
      {meetupList.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </Stack>
  );
};

export default MeetupList;
