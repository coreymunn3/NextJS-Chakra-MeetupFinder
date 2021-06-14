import { Container } from '@chakra-ui/react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container width={['95%', '90%', '80%']} maxW={800} margin='auto'>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
