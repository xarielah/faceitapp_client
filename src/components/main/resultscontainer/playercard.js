import React from 'react';
import { Box, Flex, Image, Link, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PlayerLinks from '../players/playerlinks';

const PlayerCard = ({ data }) => {
    const navigate = useNavigate();

    const {
        avatar,

        cover_image,
        player_id,

        nickname,
    } = data;

    return (
        <Flex
            flexDirection={'column'}
            align={'flex-start'}
            gap={3}
            w={'100%'}
            maxW={'300px'}
            m={'0 auto'}
        >
            <Box
                bg={'blackAlpha.300'}
                backgroundImage={`url(${cover_image})`}
                backgroundPosition={'center'}
                backgroundRepeat={'no-repeat'}
                backgroundSize={'cover'}
                transition='all 400ms ease-in-out'
                p={3}
                borderRadius={'lg'}
                w={'100%'}
                h={'100%'}
                maxH={'400px'}
            >
                <Flex
                    borderRadius={'lg'}
                    p={5}
                    gap={5}
                    overflow={'hidden'}
                    color={'white'}
                    bg={'blackAlpha.700'}
                    align={'center'}
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Flex gap={3}>
                        <Image
                            cursor={'pointer'}
                            onClick={() => navigate(`/player/${player_id}`)}
                            borderRadius={'lg'}
                            src={
                                avatar
                                    ? avatar
                                    : 'https://faceitfinder.com/themes/dark/images/faceit_avatar.jpg'
                            }
                            h={'80px'}
                            w={'80px'}
                            boxShadow={'0 3px 15px #3e3e3e55'}
                        />

                        <Flex flexDirection={'column'} gap={2}>
                            <Link
                                onClick={() => navigate(`/player/${player_id}`)}
                                target={'_blank'}
                            >
                                <Heading alt={nickname} size={'lg'}>
                                    {nickname}
                                </Heading>
                            </Link>
                            <PlayerLinks
                                nickname={nickname}
                                player_id={player_id}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PlayerCard;
