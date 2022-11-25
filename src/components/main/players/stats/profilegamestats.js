import React, { useEffect, useState } from 'react';
import apiRequest from '../../../../service/req';
import OverlayLoading from '../../../utils/overlayloading';
import MapStats from './mapstats';
import {
    Tabs,
    Flex,
    TabPanels,
    TabPanel,
    Tab,
    TabList,
} from '@chakra-ui/react';
import SorryNoData from '../../../utils/sorrynodata';
import LifetimeStats from './lifetimestats';

const ProfileGameStats = ({ game, playerId }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        apiRequest
            .getPlayerGameStats({ game, playerId })
            .then((res) => setData(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, [game, playerId]);
    console.log(data);
    if (loading) return <OverlayLoading />;
    return (
        <>
            {data === undefined ? (
                <Flex justify={'center'}>
                    <SorryNoData />
                </Flex>
            ) : (
                <Tabs variant='soft-rounded' isFitted colorScheme='orange'>
                    <TabList maxW={'container.md'} m={'0 auto'}>
                        <Tab>Lifetime</Tab>
                        <Tab>Maps</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {Object.keys(data).length > 0 ? (
                                <LifetimeStats data={data} />
                            ) : (
                                <SorryNoData />
                            )}
                        </TabPanel>
                        <TabPanel>
                            {Object.keys(data).length > 0 ? (
                                <MapStats data={data} />
                            ) : (
                                <SorryNoData />
                            )}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            )}
        </>
    );
};

export default ProfileGameStats;
