import { Button, Flex, Image } from '@chakra-ui/react';

interface HeaderProps {
  showBackButton?: boolean;
}

function Header({ showBackButton = false }: HeaderProps) {
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
            as='a'
            href='/'
            position='absolute'
            left='0'
            bg='transparent'
            outline='0px'
            border='0px'
            _focus={{ outline: 'none' }}
          >
            <Image src='/arrow_left_icon.svg' />
          </Button>
        )}
        <Image src='/logo.svg' h={{ base: '20px', md: '32px', xl: '46px' }} />
      </Flex>
    </Flex>
  );
}

export { Header };
