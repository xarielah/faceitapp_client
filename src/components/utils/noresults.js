import React from 'react';
import { Flex, Text, Heading, Image } from '@chakra-ui/react';
import notfoundimg from '../../assets/not-found.gif';

const NoResults = () => {
    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'flex-start' }}
            gap={5}
            my={10}
        >
            <Image maxW={'350px'} src={notfoundimg} borderRadius={'lg'} />
            <Flex flexDirection={'column'} gap={8} p={3}>
                <Flex flexDirection={'column'} gap={2}>
                    <Heading color={'blue.400'}>Player Not Found.</Heading>
                    <Text>
                        The player you we're looking wasn't found in FACEIT's
                        servers. <br />
                        Maybe he is bot AF, maybe he is just gUnZaaa...
                    </Text>
                </Flex>
                <Heading size={'md'} color={'orange.300'}>
                    Better luck next time!
                </Heading>
            </Flex>
        </Flex>
    );
};

export default NoResults;
