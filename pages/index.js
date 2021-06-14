import Head from 'next/head';
import MeetupList from '../components/meetup/MeetupList';
import DUMMY_DATA from '../DUMMY_DATA';

const index = () => {
  return <MeetupList meetupList={DUMMY_DATA} />;
};

export default index;
