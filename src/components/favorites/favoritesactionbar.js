import React from 'react';
import { Button, HStack, Tooltip, useToast } from '@chakra-ui/react';
import favorites from '../../service/favorites';

const FavoritesActionBar = () => {
    const toast = useToast();
    const { resetAllPlayers } = favorites;
    const reset = () => {
        resetAllPlayers(toast);
        window.location.reload();
    };

    return (
        <HStack>
            <Tooltip
                variant={'orange-tt'}
                label={`Reset and delete all the players you have added to your favorites.`}
            >
                <Button size={'sm'} colorScheme={'red'} onClick={reset}>
                    Reset All
                </Button>
            </Tooltip>
        </HStack>
    );
};

export default FavoritesActionBar;
