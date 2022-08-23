import { Flex, Image, Text } from '@chakra-ui/react';

interface CityCardProps {
  cityName: string;
  countryName: string;
  countryFlagUrl: string;
}

function CityCard({ cityName, countryName, countryFlagUrl }: CityCardProps) {
  return (
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
            {cityName}
          </Text>
          <Text
            mt={{ base: '12px' }}
            fontFamily='Poppins'
            fontSize={{ base: '16px' }}
            lineHeight={{ base: '26px' }}
            fontWeight={500}
            color='gray.400'
          >
            {countryName}
          </Text>
        </Flex>

        <Image
          src={countryFlagUrl}
          objectFit='cover'
          height={{ base: '40px' }}
          width={{ base: '40px' }}
          borderRadius='50%'
        />
      </Flex>
    </Flex>
  );
}

export { CityCard };
