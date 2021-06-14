import Head from 'next/head';
import MeetupList from '../components/meetup/MeetupList';
import DUMMY_DATA from '../DUMMY_DATA';

const HomePage = (props) => {
  return <MeetupList meetupList={props.data} />;
};

export default HomePage;

export function getStaticProps() {
  return {
    props: {
      data: DUMMY_DATA,
    },
  };
}
