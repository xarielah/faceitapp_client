import React from 'react';
import { Flex } from '@chakra-ui/react';
import LTStatsContainer from './ltstatscontainer';

const LifetimeStats = ({ data: { lifetime: data } }) => {
    return (
        <Flex
            flexDirection={'column'}
            gap={14}
            justify={'center'}
            align={'center'}
        >
            <LTStatsContainer data={data} />
        </Flex>
    );
};

export default LifetimeStats;
