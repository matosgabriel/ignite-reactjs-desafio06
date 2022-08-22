import { Button, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface HeaderProps {
  showBackButton?: boolean;
}

function Header({ showBackButton = false }: HeaderProps) {
  const router = useRouter();

  const backToHome = useCallback(() => {
    router.push('/');
  }, []);
  
  return (
    <Flex
      as='header'
      w='100%'
      h={{ base: '50px', md: '75px', xl: '100px' }}
      align='center'
      justify='center'
    >
      <Flex
        width='80%'
        margin='0 auto'
        justify='center'
        align='center'
        position='relative'
      >
        {showBackButton && (
          <Button
            onClick={backToHome}
            position='absolute'
            left='0'
            bg='transparent'
            outline='0px'
            border='0px'
            _focus={{ outline: 'none' }}
          >
            <Image src='/arrow_left_icon.svg' height={{ base: '8px', md: '12px', xl: '16px' }} />
          </Button>
        )}
        <Image src='/logo.svg' h={{ base: '20px', md: '32px', xl: '46px' }} />
      </Flex>
    </Flex>
  );
}

export { Header };
