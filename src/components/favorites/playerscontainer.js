import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import apiRequest from '../../service/req';
import OverlayLoading from '../utils/overlayloading';
import PlayerCard from '../main/resultscontainer/playercard';

const PlayersContainer = ({ data }) => {
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiRequest
            .getPlayerData({ player_stack: data })
            .then((res) => {
                if (res.ok) {
                    setFetchedData(res.data);
                }
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <OverlayLoading />;
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {fetchedData.length > 0 &&
                fetchedData.map((player, index) => (
                    <PlayerCard data={player} key={index} />
                ))}
        </SimpleGrid>
    );
};

export default PlayersContainer;
