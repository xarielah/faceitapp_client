import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import favorites from '../../service/favorites';
import PlayersContainer from '../../components/favorites/playerscontainer';
import PageLayout from '../../components/layout/page';
import SorryNoData from '../../components/utils/sorrynodata';
import FavoritesActionBar from '../../components/favorites/favoritesactionbar';

const Favorites = () => {
    const data = favorites.getFavoritesList();

    return (
        <PageLayout>
            <Flex align={'center'} flexDirection={'column'} my={6} gap={10}>
                <Flex textAlign={'center'} flexDirection={'column'} gap={5}>
                    <Heading size={'2xl'}>Favorite Players!</Heading>
                    <Text>
                        This where all the players you've added are located.
                        <br />
                        You can use this feature for shortcuts, follow your
                        friends, pros and more!
                    </Text>
                </Flex>

                {data && data.length > 0 ? (
                    <>
                        <FavoritesActionBar />
                        <PlayersContainer data={data} />
                    </>
                ) : (
                    <SorryNoData />
                )}
            </Flex>
        </PageLayout>
    );
};

export default Favorites;
