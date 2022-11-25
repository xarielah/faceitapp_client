import React from 'react';
import { Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const LTStatsContainer = ({ data }) => {
    const keys = [
        'Matches',
        'Wins',
        'Longest Win Streak',
        'Win Rate %',
        'Current Win Streak',
        'Average K/D Ratio',
        'K/D Ratio',
        'Total Headshots %',
        'Average Headshots %',
    ];
    return (
        <SimpleGrid
            bg={'#FAFAFA'}
            columns={[2, null, 3]}
            spacing='40px'
            borderRadius={'lg'}
            p={10}
        >
            {keys.map((key, index) => (
                <DataBox label={key} data={data[key]} key={index} />
            ))}
        </SimpleGrid>
    );
};

const DataBox = ({ label, data }) => {
    const parse = (data) => parseFloat(data).toLocaleString();
    return (
        <Flex
            color={'gray.800'}
            bg={'blackAlpha.50'}
            p={4}
            borderRadius={'lg'}
            align={'center'}
            flexDirection={'column'}
            gap={2}
        >
            <Text fontWeight={'bold'}>{label}</Text>
            <Heading>{parse(data)}</Heading>
        </Flex>
    );
};

export default LTStatsContainer;
