import MeetupForm from '../../components/meetup/MeetupForm';

const NewMeetupPage = () => {
  const handleAddMeetup = (values, actions) => {
    console.log(values);
  };
  return <MeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
