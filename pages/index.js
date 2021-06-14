import Head from 'next/head';
import MeetupList from '../components/meetup/MeetupList';
import DUMMY_DATA from '../DUMMY_DATA';

const HomePage = () => {
  return <MeetupList meetupList={DUMMY_DATA} />;
};

export default HomePage;
