import { Stack } from '@chakra-ui/react';
import MeetupItem from './MeetupItem';

const MeetupList = ({ meetupList }) => {
  return (
    <Stack as='ul' spacing={4}>
      {meetupList.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </Stack>
  );
};

export default MeetupList;
