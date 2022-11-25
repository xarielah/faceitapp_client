import React, { useState } from 'react';
import { HStack, Link, IconButton, useToast, Tooltip } from '@chakra-ui/react';
import { SiFaceit } from 'react-icons/si';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import favorites from '../../../service/favorites';

const PlayerLinks = ({ nickname, player_id, parentRefresh }) => {
    const { toggleAction, isExisting } = favorites;
    const [rerender, setRerender] = useState(false);

    const toast = useToast();

    const fav = () => {
        toggleAction(player_id, nickname, toast, () => setRerender(!rerender));
        parentRefresh && parentRefresh();
    };

    return (
        <HStack>
            <Tooltip
                variant={'orange-tt'}
                label={`The player's faceit profile`}
            >
                <Link
                    target={'_blank'}
                    href={`https://www.faceit.com/en/players/${nickname}`}
                >
                    <IconButton
                        borderRadius={'lg'}
                        size={'sm'}
                        color={'white'}
                        variant={'orange-btn'}
                        icon={<SiFaceit />}
                    />
                </Link>
            </Tooltip>
            <Tooltip
                variant={'orange-tt'}
                label={
                    isExisting(player_id)
                        ? 'Remove this player from favorites'
                        : 'Add player to favorites!'
                }
            >
                <IconButton
                    borderRadius={'lg'}
                    onClick={fav}
                    size={'sm'}
                    icon={
                        !isExisting(player_id) ? (
                            <MdOutlineFavoriteBorder />
                        ) : (
                            <MdOutlineFavorite />
                        )
                    }
                    colorScheme={!isExisting(player_id) ? 'green' : 'red'}
                />
            </Tooltip>
        </HStack>
    );
};

export default PlayerLinks;
