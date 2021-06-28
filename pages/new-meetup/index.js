import MeetupForm from '../../components/meetup/MeetupForm';
import axios from 'axios';
import Head from 'next/head';
import { Fragment } from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const toast = useToast();
  const router = useRouter();
  const handleAddMeetup = async (values, actions) => {
    try {
      const { data } = await axios.post('/api/meetups', values);
      console.log(data);
      toast({
        title: 'Meetup Added',
        description: 'Your Meetup is Live',
        status: 'success',
        duration: 3000,
      });
      actions.resetForm({});
      router.push('/');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Add Failed',
        description: 'We are Unable to Add Your Meetup',
        status: 'error',
        duration: 3000,
      });
    }
  };
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create a new network'
        ></meta>
      </Head>
      <MeetupForm onAddMeetup={handleAddMeetup} />
    </Fragment>
  );
};

export default NewMeetupPage;
