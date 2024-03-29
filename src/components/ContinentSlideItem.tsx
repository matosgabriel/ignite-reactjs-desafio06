import { useCallback } from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ContinentSlideItemProps {
  title: string;
  description: string;
  bgImageSrc: string;
  name: string;
}

function ContinentSlideItem({
  title,
  description,
  bgImageSrc,
  name,
}: ContinentSlideItemProps) {
  const router = useRouter();

  const openContinentPage = useCallback(() => {
    router.push(`continent/${name}`);
  }, [name, router]);

  return (
    <Flex
      align='center'
      justify='center'
      flexDir='column'
      height={{ base: '250px', md: '350px', xl: '450px' }}
      backgroundImage={bgImageSrc}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
    >
      <Flex
        as='button'
        onClick={openContinentPage}
        align='center'
        justify='center'
        flexDir='column'
      >
        <Text
          color='white.800'
          fontSize={{ base: '24px', md: '34px', xl: '48px' }}
          fontWeight={700}
          lineHeight={{ base: '36px', md: '46px', xl: '72px' }}
          fontFamily='Poppins'
        >
          {title}
        </Text>

        <Text
          color='gray.300'
          fontSize={{ base: '14px', md: '18px', xl: '24px' }}
          lineHeight={{ base: '21px', md: '28px', xl: '36px' }}
          fontWeight={700}
          fontFamily='Poppins'
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

export { ContinentSlideItem };
