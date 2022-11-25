import React from 'react';
import { Box, Tooltip, Flex, Heading, Text } from '@chakra-ui/react';

const PlayerGames = ({ playerData, k, setGame, gameToDisplay }) => {
    const clickOnGame = (k) => {
        if (gameToDisplay === k) {
            setGame('');
        } else {
            setGame(k);
        }
    };

    return (
        <Box>
            <Tooltip
                placement={'top'}
                variant={'orange-tt'}
                label={`Click to view ${
                    playerData.nickname
                }'s ${k.toUpperCase()} stats`}
            >
                <Flex
                    bg={'blackAlpha.700'}
                    borderRadius={'lg'}
                    p={5}
                    cursor={'pointer'}
                    onClick={() => clickOnGame(k)}
                    my={3}
                    lineHeight={1}
                    align={'center'}
                    flexDirection={'column'}
                >
                    <Heading color={'gray.500'} size={'md'}>
                        {k.toUpperCase()}
                    </Heading>
                    <Flex align={'flex-end'}>
                        <Text fontWeight={'bold'} fontSize={'3em'}>
                            {playerData.games[k].faceit_elo.toLocaleString()}
                        </Text>
                        <Text color={'gray.400'}>pts</Text>
                    </Flex>
                </Flex>
            </Tooltip>
            {gameToDisplay === k && (
                <Text
                    w={'max-content'}
                    m={'0 auto'}
                    mt={3}
                    fontWeight={'bold'}
                    color={'white'}
                    bg={'orange.500'}
                    p={1}
                    fontSize={'.8em'}
                    borderRadius={'lg'}
                >
                    Watching {k}'s stats
                </Text>
            )}
        </Box>
    );
};

export default PlayerGames;
