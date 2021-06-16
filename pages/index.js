import Head from 'next/head';
import MeetupList from '../components/meetup/MeetupList';
import { connectDB } from '../lib/db-util';

const HomePage = (props) => {
  return <MeetupList meetupList={props.data} />;
};

export default HomePage;

export async function getStaticProps() {
  let client, meetups;
  try {
    client = await connectDB();
    meetups = await client.db().collection('meetups').find().toArray();
    client.close();
  } catch (error) {
    console.log(error);
  }

  const data = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  }));

  return {
    props: {
      data: data,
    },
  };
}
