import React from 'react';
import { Flex, Heading, Image } from '@chakra-ui/react';
import nodata from '../../assets/no-data-dog.gif';

const SorryNoData = () => {
    return (
        <Flex
            textAlign={'center'}
            align={'center'}
            flexDirection={'column'}
            gap={4}
        >
            <Heading>Sorry, No data for that. :(</Heading>
            <Image src={nodata} borderRadius={'lg'} maxW={'300px'} />
        </Flex>
    );
};

export default SorryNoData;
