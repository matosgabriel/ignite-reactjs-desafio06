import {
  Flex,
  Grid,
  Image,
  Text,
  Divider,
  useBreakpoint,
} from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ContinentSlideItem } from '~/components/ContinentSlideItem';
import { TravelTypesItem } from '~/components/TravelTypesItem';

export default function Home() {
  const breakpoint = useBreakpoint();

  return (
    <>
      <Flex
        as='header'
        w='100%'
        h={{ base: '50px', md: '75px', xl: '100px' }}
        align='center'
        justify='center'
      >
        <Image src='/logo.svg' h={{ base: '20px', md: '32px', xl: '46px' }} />
      </Flex>

      <Flex
        w='100%'
        justify='space-between'
        h={{ base: '163px', md: '240px', xl: '335px' }}
        align='center'
        padding={{ base: '0 16px', sm: '0 28px', md: '0 46px', xl: '0 140px' }}
        backgroundImage='/background.svg'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      >
        <Flex flexDir='column'>
          <Text
            fontSize={{ base: '20px', md: '26px', xl: '36px' }}
            lineHeight={{ base: '30px', md: '40px', xl: '54px' }}
            color='white.800'
            fontFamily='Poppins'
            fontWeight={500}
          >
            6 Continentes, {<br />} infinitas possibilidades.
          </Text>
          <Text
            fontSize={{ base: '14px', md: '16px', xl: '20px' }}
            lineHeight={{ base: '21px', md: '26px', xl: '30px' }}
            color='gray.300'
            fontFamily='Poppins'
            fontWeight={400}
            marginTop={{ base: '8px', md: '12px', xl: '20px' }}
          >
            Chegou a hora de tirar do papel a viagem que {<br />} você sempre
            sonhou.
          </Text>
        </Flex>

        {breakpoint != 'base' && breakpoint != 'sm' && (
          <Image
            src='/airplane.svg'
            h={{ md: '200px', lg: '220px', xl: '270px' }}
            mt={{ md: '76px', lg: '80px', xl: '125px' }}
          />
        )}
      </Flex>

      {/** Travel types */}
      <Flex
        m={{
          base: '36px 50px 0',
          sm: '36px 76px 0',
          md: '62px 94px 0',
          lg: '78px 110px 0',
          xl: '114px 140px 0',
        }}
        flexDir='column'
        align='center'
      >
        <Grid
          templateColumns={{
            base: '1fr 1fr',
            md: '1fr 1fr 1fr',
            xl: 'repeat(5, 1fr)',
          }}
          gap={{
            base: '27px 30px',
            sm: '36px 42px',
            md: '42px 48px',
          }}
          width='100%'
        >
          <TravelTypesItem title='noite' iconSrc='/night_icon.svg' />
          <TravelTypesItem title='praia' iconSrc='/beach_icon.svg' />
          <TravelTypesItem title='moderno' iconSrc='/modern_icon.svg' />
          <TravelTypesItem title='clássico' iconSrc='/classic_icon.svg' />
          <TravelTypesItem title='mais...' iconSrc='/more_icon.svg' />
        </Grid>

        <Divider
          height='1px'
          bg='gray.800'
          w='60px'
          mt={{ base: '36px', xl: '80px' }}
          border='1px solid gray.800'
        />
      </Flex>

      <Flex
        flexDir='column'
        align='center'
        fontSize={{ base: '20px' }}
        lineHeight={{ base: '30px' }}
        fontWeight={500}
        fontFamily='Poppins'
        m={{ base: '34px 0 20px', md: '44px', xl: '52px 0' }}
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Flex>

      {/** Carousel */}
      <Flex m={{ base: '0', md: '0 40px', lg: '0 60px', xl: '0 100px' }}>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <ContinentSlideItem
              title='Europa'
              description='O continente mais antigo'
              bgImageSrc='/europe_image.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentSlideItem
              title='Ásia'
              description='O continente mais populoso'
              bgImageSrc='/asia_image.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentSlideItem
              title='África'
              description='O continente mais plural'
              bgImageSrc='/africa_image.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentSlideItem
              title='América'
              description='O continente com maior diversidade'
              bgImageSrc='/america_image.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentSlideItem
              title='Oceania'
              description='O continente mais isolado'
              bgImageSrc='/oceania_image.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContinentSlideItem
              title='Antártida'
              description='O continente mais frio'
              bgImageSrc='/antartida_image.jpg'
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
