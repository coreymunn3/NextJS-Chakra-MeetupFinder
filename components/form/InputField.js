import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const InputField = ({ name, label, isInvalid, errorMessage, ...rest }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={name}>{label} </FormLabel>
      <Input name={name} {...rest} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
