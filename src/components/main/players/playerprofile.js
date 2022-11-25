import React, { useEffect, useState } from 'react';
import {
    Flex,
    Heading,
    Box,
    Text,
    Image,
    useToast,
    SimpleGrid,
    Tooltip,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import apiRequest from '../../../service/req';
import OverlayLoading from '../../utils/overlayloading';
import PageLayout from '../../layout/page';
import ProfileGameStats from './stats/profilegamestats';
import PlayerLinks from './playerlinks';
import PlayerGames from './stats/playergames';
import PlayerGeneralData from './playergeneraldata';

const PlayerProfile = () => {
    const { playerid } = useParams();
    const [playerData, setPlayerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayGameStats, setDisplayGameStats] = useState(false);
    const [gameToDisplay, setGameToDisplay] = useState('');

    useEffect(() => {
        apiRequest
            .getPlayerData({ playerid: playerid })
            .then((res) => setPlayerData(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    const parseGridValue = () => {
        const MAX_BOXES = 3;
        const gamesLength = Object.keys(playerData.games).length;
        if (gamesLength >= MAX_BOXES) return MAX_BOXES;
        else if (gamesLength < MAX_BOXES) return gamesLength;
    };

    const setGame = (game) => {
        setDisplayGameStats(true);
        setGameToDisplay(game);
    };

    if (loading) return <OverlayLoading />;
    return (
        <>
            <PageLayout>
                <Flex
                    borderRadius={'lg'}
                    overflow={'hidden'}
                    backgroundImage={`url(${playerData.cover_image})`}
                    backgroundRepeat={'no-repeat'}
                    backgroundPosition={'center'}
                    backgroundSize={'cover'}
                >
                    <Flex
                        bg={'blackAlpha.700'}
                        flexDirection={{ base: 'column', md: 'row' }}
                        gap={14}
                        align={'center'}
                        w={'100%'}
                        justify={'space-between'}
                        py={3}
                        px={14}
                    >
                        <Flex flexDirection={'column'} gap={4}>
                            <Flex gap={3}>
                                <Image
                                    borderRadius={'lg'}
                                    boxShadow={'0 10px 30px #FAFAFA11'}
                                    w={'150px'}
                                    h={'150px'}
                                    src={
                                        playerData.avatar
                                            ? playerData.avatar
                                            : 'https://faceitfinder.com/themes/dark/images/faceit_avatar.jpg'
                                    }
                                />
                                <Box>
                                    <Text color={'gray.500'} mx={1}>
                                        (
                                        {'from ' +
                                            playerData.country.toUpperCase()}
                                        )
                                    </Text>
                                    <Heading size={'2xl'}>
                                        {playerData.nickname}
                                    </Heading>
                                </Box>
                            </Flex>

                            <PlayerLinks
                                nickname={playerData.nickname}
                                player_id={playerData.player_id}
                            />
                        </Flex>

                        {playerData.games &&
                        Object.keys(playerData.games).length > 0 ? (
                            <Flex
                                flexDirection={'column'}
                                align={'center'}
                                my={5}
                            >
                                <Flex
                                    flexDirection={'column'}
                                    mb={10}
                                    align={'center'}
                                    bg={'blackAlpha.700'}
                                    p={3}
                                    borderRadius={'lg'}
                                >
                                    <Heading size={'lg'} color={'orange.400'}>
                                        Games
                                    </Heading>
                                    <Text color={'gray.500'} mx={1}>
                                        Display all of{' '}
                                        <Text
                                            color={'gray.400'}
                                            as={'span'}
                                            fontWeight={'bold'}
                                        >
                                            {playerData.nickname}
                                        </Text>
                                        's games with elo scores under them.
                                    </Text>
                                </Flex>
                                <SimpleGrid
                                    columns={parseGridValue()}
                                    spacing={14}
                                >
                                    {Object.keys(playerData.games).map(
                                        (key, index) => (
                                            <PlayerGames
                                                key={index}
                                                gameToDisplay={gameToDisplay}
                                                playerData={playerData}
                                                k={key}
                                                setGame={(val) => setGame(val)}
                                            />
                                        ),
                                    )}
                                </SimpleGrid>
                            </Flex>
                        ) : (
                            <Heading mb={5} size={'2xl'}>
                                NO GAMES
                            </Heading>
                        )}
                    </Flex>
                </Flex>
            </PageLayout>

            {displayGameStats && gameToDisplay ? (
                <Box py={14}>
                    <ProfileGameStats
                        game={gameToDisplay}
                        playerId={playerData.player_id}
                    />
                </Box>
            ) : (
                <PlayerGeneralData player={playerData} />
            )}
        </>
    );
};

export default PlayerProfile;
