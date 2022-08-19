import { Flex, Image, Text, useBreakpoint } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
            5 Continentes, {<br />} infinitas possibilidades.
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
            h={{ md: '220px', xl: '270px' }}
            mt={{ md: '80px', xl: '125px' }}
          />
        )}
      </Flex>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <Flex
            align='center'
            justify='center'
            flexDir='column'
            height={{ base: '250px', xl: '450px' }}
            backgroundImage='/europe_image.svg'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
          >
            <Text
              color='white.800'
              fontSize={{ base: '24px', xl: '48px' }}
              fontWeight={700}
              lineHeight={{ base: '36px', xl: '72px' }}
              fontFamily='Poppins'
            >
              Europa
            </Text>

            <Text
              color='gray.300'
              fontSize={{ base: '14px', xl: '24px' }}
              lineHeight={{ base: '21px', xl: '36px' }}
              fontWeight={700}
              fontFamily='Poppins'
            >
              O continente mais antigo
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
