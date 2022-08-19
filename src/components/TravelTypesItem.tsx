import { Flex, Text, Image, useBreakpoint } from '@chakra-ui/react';

interface TravelTypesItemProps {
  title: string;
  iconSrc: string;
}

function TravelTypesItem({ title, iconSrc }: TravelTypesItemProps) {
  const breakpoint = useBreakpoint();

  return (
    <Flex
      align={{ base: 'baseline', xl: 'center' }}
      justify={{ base: 'flex-start', xl: 'center' }}
      flexDir={{ base: 'row', xl: 'column' }}
    >
      {(breakpoint == 'base' ||
        breakpoint == 'sm' ||
        breakpoint == 'md' ||
        breakpoint == 'lg') && (
        <Image
          src='/list_ellipse.svg'
          height={{ base: '8px', md: '9px', lg: '10px' }}
          mr={{ base: '8px', md: '9px', lg: '10px' }}
        />
      )}

      {!(
        breakpoint == 'base' ||
        breakpoint == 'sm' ||
        breakpoint == 'md' ||
        breakpoint == 'lg'
      ) && <Image src={iconSrc} height='85px' />}

      <Text
        fontSize={{ base: '18px', md: '20px', lg: '22px', xl: '24px' }}
        lineHeight={{ base: '27px', md: '29px', lg: '31px', xl: '36px' }}
        fontWeight={500}
        fontFamily='Poppins'
        color='gray.800'
        mt={{ xl: '24px' }}
      >
        {title}
      </Text>
    </Flex>
  );
}

export { TravelTypesItem };
