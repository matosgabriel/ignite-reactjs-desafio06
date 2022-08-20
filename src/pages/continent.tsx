import { Flex, Text, useBreakpoint, HStack, Image } from '@chakra-ui/react';
import Head from 'next/head';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Header } from '~/components/Header';

export default function Continent() {
  const breakpoint = useBreakpoint();
  const countriesCount = 50;
  const languagesCount = 60;
  const plus100Cities = 24;

  return (
    <>
      <Head>
        <title>Worldtrip | Continent</title>
      </Head>

      <Header showBackButton />

      <Flex
        w='100%'
        justify='center'
        h={{ base: '150px', md: '380px', xl: '500px' }}
        align='center'
        backgroundImage='/europe_image.jpg'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      >
        <Text
          fontSize={{ base: '28px', md: '36px', xl: '48px' }}
          lineHeight={{ base: '42px', md: '58px', xl: '72px' }}
          fontWeight={600}
          fontFamily='Poppins'
          color='white.800'
        >
          Europa
        </Text>
      </Flex>

      {/** About the continent */}
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        m={{ base: '24px auto 32px', lg: '80px auto' }}
        justify={{ base: 'center', lg: 'space-between' }}
        width={{ base: '90%', xl: '85%' }}
      >
        <Text
          textAlign='justify'
          width={{ base: '100%', lg: '450px', xl: '600px', '2xl': '800px' }}
          fontSize={{ base: '14px', md: '18px', xl: '24px' }}
          lineHeight={{ base: '21px', md: '28px', xl: '36px' }}
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <HStack
          mt={{ base: '16px', lg: '0px' }}
          justifyContent='center'
          alignItems='center'
          spacing={{ base: '40px' }}
        >
          <Flex flexDir='column' align={{ lg: 'center' }}>
            <Text
              color='yellow.700'
              fontSize={{ base: '24px', md: '36px', xl: '48px' }}
              lineHeight={{ base: '26px', md: '48px', xl: '50px' }}
              fontWeight={{ base: 400, lg: 600 }}
              fontFamily='Poppins'
            >
              {countriesCount}
            </Text>
            <Text
              fontSize={{ base: '18px', md: '21px', xl: '24px' }}
              lineHeight={{ base: '27px', md: '30px', xl: '36px' }}
              color='gray.800'
              fontWeight={{ base: 400, lg: 600 }}
              fontFamily='Poppins'
            >
              países
            </Text>
          </Flex>

          <Flex flexDir='column' align={{ lg: 'center' }}>
            <Text
              color='yellow.700'
              fontSize={{ base: '24px', md: '36px', xl: '48px' }}
              lineHeight={{ base: '26px', md: '48px', xl: '50px' }}
              fontWeight={{ base: 400, lg: 600 }}
              fontFamily='Poppins'
            >
              {languagesCount}
            </Text>
            <Text
              fontSize={{ base: '18px', md: '21px', xl: '24px' }}
              lineHeight={{ base: '27px', md: '30px', xl: '36px' }}
              fontWeight={{ base: 400, lg: 600 }}
              fontFamily='Poppins'
              color='gray.800'
            >
              línguas
            </Text>
          </Flex>

          <Flex flexDir='column' align={{ lg: 'center' }}>
            <Text
              color='yellow.700'
              fontSize={{ base: '24px', md: '36px', xl: '48px' }}
              lineHeight={{ base: '26px', md: '48px', xl: '50px' }}
              fontWeight={{ base: 400, lg: 600 }}
              fontFamily='Poppins'
            >
              {plus100Cities}
            </Text>
            <Text
              fontSize={{ base: '18px', md: '21px', xl: '24px' }}
              lineHeight={{ base: '27px', md: '30px', xl: '36px' }}
              fontWeight={{ base: 400, lg: 600 }}
              fontFamily='Poppins'
              color='gray.800'
            >
              cidades +100
            </Text>
          </Flex>
        </HStack>
      </Flex>

      {/** List of +100 cities */}
      <Flex flexDir='column' align='center'>
        <Text>Cidades +100</Text>

        <Flex
          flexDir='column'
          width='256px'
          borderRadius='5px'
          overflow='hidden'
          bg='#fff'
        >
          <Image
            src='/europe_image.jpg'
            height={{ base: '173px' }}
            objectFit='cover'
          />

          {/** Description */}
          <Flex
            p={{ base: '18px 24px 25px' }}
            borderWidth='0 1px 1px 1px'
            borderColor='#FFBA08'
            borderRadius='0 0 5px 5px'
            justify='space-between'
            align='center'
          >
            <Flex flexDir='column'>
              <Text
                fontFamily='Poppins'
                fontSize={{ base: '20px' }}
                lineHeight={{ base: '25px' }}
                fontWeight={600}
                color='gray.800'
              >
                Londres
              </Text>
              <Text
                mt={{ base: '12px' }}
                fontFamily='Poppins'
                fontSize={{ base: '16px' }}
                lineHeight={{ base: '26px' }}
                fontWeight={500}
                color='gray.400'
              >
                Reino Unido
              </Text>
            </Flex>

            <Image
              src='/europe_image.jpg'
              objectFit='cover'
              height={{ base: '30px' }}
              width={{ base: '30px' }}
              borderRadius='50%'
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
