import { Flex, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Flex as='header' w='100%' h='100px' align='center' justify='center'>
        <Image src='/Logo.svg' h='46px' />
      </Flex>
      {/* <h1>Home</h1> */}
    </>
  );
}
