import MeetupDetails from '../../components/meetup/MeetupDetails';
import DUMMY_DATA from '../../DUMMY_DATA';

const MeetupDetailPage = () => {
  return <MeetupDetails data={DUMMY_DATA[0]} />;
};

export default MeetupDetailPage;

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const data = DUMMY_DATA.find((item) => item.id === meetupId);
  return { props: { data } };
}

export function getStaticPaths() {
  const paths = DUMMY_DATA.map((item) => ({ params: { meetupId: item.id } }));
  return { paths, fallback: false };
}
