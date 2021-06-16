import { ObjectID } from 'mongodb';
import MeetupDetails from '../../components/meetup/MeetupDetails';
import { connectDB } from '../../lib/db-util';

const MeetupDetailPage = (props) => {
  return <MeetupDetails data={props.data} />;
};

export default MeetupDetailPage;

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await connectDB();
  const db = client.db();
  const meetup = await db
    .collection('meetups')
    .findOne({ _id: ObjectID(meetupId) });
  client.close();
  // const data = DUMMY_DATA.find((item) => item.id === meetupId);
  const formattedMeetup = {
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  };
  return {
    props: {
      data: formattedMeetup,
    },
  };
}

export async function getStaticPaths() {
  // const paths = DUMMY_DATA.map((item) => ({ params: { meetupId: item.id } }));
  let meetups;
  try {
    const client = await connectDB();
    meetups = await client
      .db()
      .collection('meetups')
      .find({}, { _id: 1 })
      .toArray();
    client.close();
  } catch (error) {
    console.log(error);
  }

  const paths = meetups.map((doc) => ({
    params: { meetupId: doc._id.toString() },
  }));

  return { paths, fallback: false };
}
