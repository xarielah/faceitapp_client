import React from 'react';
import { Flex, Spinner, Image, Text } from '@chakra-ui/react';
import lazyDog from '../../assets/loading-dog.gif';

const OverlayLoading = () => {
    const sentences = [
        `I'm not lazy, you're going through patience test...`,
        `We know our servers are lazy, but pet this cute dog for now...`,
        `I'm not moving without my coffee!!1`,
        `No Coffee, No Results.`,
        `Do you REALLY want to wake me up?`,
    ];
    const randIdx = Math.round(Math.random() * (sentences.length - 1));

    return (
        <Flex
            flexDirection={'column'}
            gap={5}
            position={'absolute'}
            top={0}
            left={0}
            bg={'#FAFAFA'}
            minH={'100vh'}
            w={'100vw'}
            zIndex={'9999'}
            justify={'center'}
            // backdropFilter={'blur(3px)'}
            transition={'backdropFilter 200ms ease-in-out'}
            align={'center'}
        >
            {/* <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='orange.500'
                size='xl'
                borderRadius={'lg'}
            /> */}
            <Image src={lazyDog} />
            <Text
                textAlign={'center'}
                color={'orange.300'}
                fontSize={'1.5em'}
                fontWeight={'bold'}
                fontStyle={'italic'}
            >
                {sentences[randIdx]}
            </Text>
        </Flex>
    );
};

export default OverlayLoading;
