import { Flex } from '@chakra-ui/react';

export default function Footer() {
  const data = new Date().getFullYear();
  return (
    <Flex
      w='100%'
      bg="#495057"
      color="white"
      justifyContent="center"
      paddingTop="4px"
      mt='8'
    >
      <label htmlFor="">©LeoJunkes | {data}</label>
    </Flex>
  );
}
