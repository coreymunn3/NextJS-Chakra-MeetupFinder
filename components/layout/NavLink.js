import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = ({ children, href }) => {
  return (
    <Link
      borderRadius='md'
      px={2}
      py={1}
      _hover={{ textDecoration: 'none', bg: 'gray.300' }}
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
};

export default NavLink;
