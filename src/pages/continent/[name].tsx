import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Flex,
  Text,
  useBreakpoint,
  HStack,
  Grid,
  Tooltip,
  Image,
} from '@chakra-ui/react';
import Head from 'next/head';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';

import { CityCard } from '~/components/CityCard';
import { Header } from '~/components/Header';
import { api } from '~/utils/api';

interface City {
  name: string;
  country: string;
}

interface Response {
  cities_count: number;
  contries_count: number;
  languages_count: number;
  cities: City[];
}

export default function Continent() {
  const router = useRouter();
  const { name } = router.query;

  const breakpoint = useBreakpoint();
  const [cities, setCities] = useState<City[]>([]);

  const countriesCount = 50;
  const languagesCount = 60;
  const plus100Cities = 24;

  const cardItemsForRowCount = useMemo(() => {
    switch (breakpoint) {
      case 'base':
        return 1;
      case 'md':
        return 2;
      case 'lg':
        return 3;
      case 'xl':
        return 4;
      case '2xl':
        return 5;
    }
  }, [breakpoint]);

  const loadCities = useCallback(async () => {
    if (name) {
      const { data } = await api.get<Response>(`/${name}`);

      setCities(data.cities);
    }
  }, [name, setCities]);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

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

            <Flex flexDir='row' align='baseline'>
              <Text
                fontSize={{ base: '18px', md: '21px', xl: '24px' }}
                lineHeight={{ base: '27px', md: '30px', xl: '36px' }}
                fontWeight={{ base: 400, lg: 600 }}
                fontFamily='Poppins'
                color='gray.800'
              >
                cidades +100
              </Text>

              <Tooltip label='100 cidades mais visitadas no mundo'>
                <Image
                  ml='5px'
                  src='/info_icon.svg'
                  height={{ base: '10px', md: '12px', lg: '14px', xl: '16px' }}
                />
              </Tooltip>
            </Flex>
          </Flex>
        </HStack>
      </Flex>

      {/** List of +100 cities */}
      <Flex
        flexDir='column'
        align='center'
        m={{ base: '0 auto 16px', md: '0 auto 28px', xl: '0 auto 35px' }}
        width={{ base: '90%', xl: '85%' }}
      >
        <Text
          fontSize={{ base: '24px', md: '28px', xl: '36px' }}
          lineHeight={{ base: '36px', md: '40px', xl: '54px' }}
          fontFamily='Poppins'
          fontWeight={500}
          mb={{ base: '20px', md: '30px', xl: '40px' }}
          textAlign='left'
          width='100%'
        >
          Cidades +100
        </Text>

        <Grid
          width={{ md: '100%' }}
          columnGap={{
            base: '0',
            md: `calc((100% - ${cardItemsForRowCount} * 256px)/${
              cardItemsForRowCount - 1
            })`,
          }}
          rowGap={{
            base: '20px',
            md: '28px',
          }}
          templateColumns={{
            base: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr',
            xl: 'repeat(4, 1fr)',
          }}
        >
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </Grid>
      </Flex>
    </>
  );
}
