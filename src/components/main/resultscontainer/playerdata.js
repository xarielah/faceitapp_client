import React, { useContext, useEffect, useState } from 'react';
import { Flex, HStack, Button } from '@chakra-ui/react';
import apiRequests from '../../../service/req';
import userDataContext from '../../../pages/main/content';
import OverlayLoading from '../../utils/overlayloading';
import MapStats from './stats/mapstats';
import LifetimeStats from './stats/lifetimestats';

const PlayerData = () => {
    const [statsData, setStatsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataType, setDataType] = useState('');
    const { userData } = useContext(userDataContext);

    useEffect(() => {
        if (statsData) {
            if (statsData.player_id !== userData.player_id) {
                setStatsData(null);
                setDataType('');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getStatsData = (page) => {
        setLoading(true);
        setDataType(page);
        apiRequests
            .getPlayerStats(userData.player_id)
            .then((res) => {
                setStatsData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <>
            {loading && <OverlayLoading />}
            <Flex>
                <HStack justify={'center'} w={'100%'} gap={5}>
                    <Button
                        variant={'orange-btn'}
                        onClick={() => getStatsData('lifetime')}
                    >
                        Get Lifetime Stats
                    </Button>
                    <Button
                        variant={'orange-btn'}
                        onClick={() => getStatsData('maps')}
                    >
                        Get Maps
                    </Button>
                </HStack>
            </Flex>

            <Flex maxW={'container.xl'} flexDirection={'column'}>
                {dataType === 'lifetime' && statsData ? (
                    <LifetimeStats data={statsData.lifetime} />
                ) : (
                    ''
                )}
                {dataType === 'maps' && statsData ? (
                    <MapStats data={statsData} />
                ) : (
                    ''
                )}
            </Flex>
        </>
    );
};

export default PlayerData;
