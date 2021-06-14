import { Box, Button, VStack } from '@chakra-ui/react';
import InputField from '../form/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MeetupForm = ({ onAddMeetup }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      address: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      image: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      description: Yup.string()
        .min(10, 'Must be 10 characters')
        .required('Required'),
    }),
    onSubmit: onAddMeetup,
  });
  return (
    <Box p={4} boxShadow='md' borderRadius='md'>
      <VStack
        as='form'
        w='100%'
        spacing={4}
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <InputField
          name='title'
          label='Meetup Title'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          isInvalid={formik.errors.title && formik.touched.title}
          errorMessage={formik.errors.title}
        />
        <InputField
          name='image'
          label='Meetup Image'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
          isInvalid={formik.errors.image && formik.touched.image}
          errorMessage={formik.errors.image}
        />
        <InputField
          name='address'
          label='Address'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          isInvalid={formik.errors.address && formik.touched.address}
          errorMessage={formik.errors.address}
        />
        <InputField
          name='description'
          label='Description'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          isInvalid={formik.errors.description && formik.touched.description}
          errorMessage={formik.errors.description}
        />
        <Button
          color='white'
          colorScheme='cyan'
          isLoading={formik.isSubmitting}
          disabled={formik.isSubmitting}
          type='submit'
        >
          Add Meetup
        </Button>
      </VStack>
    </Box>
  );
};

export default MeetupForm;
