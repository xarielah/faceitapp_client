import React from 'react';
import { Flex, Box, VStack, Text, Heading } from '@chakra-ui/react';
import ClickToCopy from '../../utils/clicktocopy';
import CustomTooltip from '../../utils/customtooltip';

const PlayerGeneralData = ({ player }) => {
    console.log(player);

    const steam = player.platforms.steam;
    const membership = player.memberships[0];
    const steam_nickname = player.steam_nickname;
    const steam64 = player.steam_id_64;

    return (
        <Flex
            flexDirection={'column'}
            align={'center'}
            gap={6}
            bg={'blackAlpha.200'}
            p={8}
            m={'0 auto'}
            borderRadius={'lg'}
        >
            <Heading size={'2xl'}>{player.nickname}'s information</Heading>
            <VStack spacing={'2em'} my={14} w={'100%'}>
                {steam && <DataLine label={`SteamID`} data={steam} />}
                {steam64 && <DataLine label={`STEAMID64`} data={steam64} />}
                {steam_nickname && (
                    <DataLine label={`Steam Name`} data={steam_nickname} />
                )}
                {membership && (
                    <DataLine label={`Membership`} data={membership} />
                )}
            </VStack>
        </Flex>
    );
};

const DataLine = ({ label, data }) => {
    return (
        <ClickToCopy label={label} text={data}>
            <Box
                fontWeight={'bold'}
                borderRadius={'lg'}
                border={'1px solid #fafafa22'}
                p={6}
                w={'100%'}
                transition={'all 300ms ease-in-out'}
                _hover={{ backgroundColor: '#FAFAFA11' }}
            >
                <Flex justify={'space-between'} fontSize={'2rem'}>
                    <Text color={'gray.300'}>{label}</Text>
                    <Text color={'blue.500'}>{data}</Text>
                </Flex>
            </Box>
        </ClickToCopy>
    );
};

export default PlayerGeneralData;
